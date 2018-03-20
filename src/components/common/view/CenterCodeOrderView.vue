<template>
  <div>
    <code-order-table
      class="height-offset-180 overflow-auto w-100"
      :transmit-enable="true"
      @transmit-order="transmitOrder"
      :data="orders"/>

    <el-pagination
      layout="prev, pager, next"
      :page-count="totalPages"
      @current-change="pageChangeHandle">
    </el-pagination>

    <el-dialog title="选择律所" :visible.sync="lawyerDialogVisible">
      <el-form
        :model="lawyerDialogForm"
        :rules="rules"
        ref="lawyerDialogForm"
        label-width="100px">

        <el-form-item label="律所">
          <el-select
            class="display-inline"
            prop="lawfirmId"
            v-model="lawyerDialogForm.lawfirmId"
            placeholder="请选择律所">
            <el-option
              v-for="item in lawfirmList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button
          @click="lawyerDialogVisible = false">
          取 消</el-button>
        <el-button
          type="primary"
          @click="submitLayerDialogForm('lawyerDialogForm')">
          确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import CodeOrderTable from '../table/CodeOrderTable'
  import FormInputItem from '../../common/item/FormInputItem'
  import $user from '../../../api/user'
  import $profile from '../../../api/profile'
  import $product from '../../../api/product'
  import $order from '../../../api/order'
  export default {
    name: "center-code-order-view",
    components: {
      CodeOrderTable,
      FormInputItem
    },
    data(){
      return {
        orders:[],
        lawfirmList:[],
        lawyerDialogForm:{
          lawfirmId: null
        },
        lawyerDialogVisible: false,
        rules:{
          'lawfirmId': [
            { required: true, message: '不能为空', trigger: 'blur' }
          ]
        },
        currentOrder:{},
        totalPages:1,
        currentPage:1
      }
    },
    methods:{
      getOrderPage(page){
        var self = this;
        $order.getOrderPage(page - 1,{}).then(({data})=>{
          self.orders = data.data.content;
          self.totalPages = data.data.totalPages;
          self.currentPage = page;
        })
      },
      getLawfirmList(){
        var self = this;
        var parameters = {
          'organizationType.code': 'LAW_FIRM'
        }
        $user.getOrganizationList(parameters).then( ({data})=>{
          self.lawfirmList = data.data;
        })
      },
      transmitOrder(row){
        var self = this;
        self.lawyerDialogVisible = true;
        self.currentOrder = row;
      },
      submitLayerDialogForm(formName){
        this.lawyerDialogVisible = false;
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            $order.transmitOrder(self.currentOrder.id,
              self.lawyerDialogForm.lawfirmId).then(({ data }) => {
              console.log(data);
              var index = self.orders.indexOf(self.currentOrder);
              $order.getOrder(data.orderId).then( ({data})=>{
                self.$set(self.orders, index, data.data);
              })
            });
          } else {
            return false;
          }
        });
      },
      pageChangeHandle(page){
        this.getOrderPage(page);
      }
    },
    mounted(){
      this.getOrderPage(this.currentPage);
      this.getLawfirmList();
    }
  }
</script>

<style scoped>

</style>

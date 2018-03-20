<template>
  <div>
    <el-button
      class="float-right mx-12"
      @click="addingFormVisible = true"
    >添加</el-button>
    <el-dialog title="添加订单" :visible.sync="addingFormVisible">
      <el-form
        :model="addingForm"
        :rules="rules"
        ref="addingForm"
        label-width="100px">

        <el-form-item label="产品">
          <el-select
            class="display-inline"
            prop="productId"
            v-model="addingForm.productId"
            placeholder="请选择产品">
            <el-option
              v-for="item in productList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <form-input-item
          label="数量"
          type="number"
          prop="count"
          v-model.number="addingForm.count">
        </form-input-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button
          @click="addingFormVisible = false">
          取 消</el-button>
        <el-button
          type="primary"
          @click="submitAddingForm('addingForm')">
          确 定</el-button>
      </div>
    </el-dialog>
    <code-order-table
      class="height-offset-220 overflow-auto w-100"
      :data="orders"
      :submit-enable="true"
      :download-enable="true"
      @submit-order="submitOrder"
      @show-code="showCode"/>

    <div class="display-block">
      <el-pagination
        layout="prev, pager, next"
        :page-count="orderTotalPages"
        @current-change="orderPageChangeHandle">
      </el-pagination>
    </div>
      <!--<el-pagination-->
        <!--layout="prev, pager, next"-->
        <!--:total="50">-->
      <!--</el-pagination>-->

    <el-dialog
        width="80%"
        title="查看编码"
        :visible.sync="codeDialogVisible">
      <product-code-table
        class="vh-60 overflow-auto"
        :data="codeList"
        @download-code="downloadCode"
        />
        <el-pagination
          layout="prev, pager, next"
          :page-count="codeTotalPages"
          @current-change="codePageChangeHandle">
        </el-pagination>

      <!--<el-pagination-->
        <!--layout="prev, pager, next"-->
        <!--:total="50"-->
        <!--@current-change="codePageChangeHandle">-->
      <!--</el-pagination>-->

      <div slot="footer" class="dialog-footer">
        <el-button
          @click="downloadCodeFile">
          下载文件</el-button>
        <el-button
          @click="codeDialogVisible = false">
          关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import CodeOrderTable from '../table/CodeOrderTable'
  import FormInputItem from '../../common/item/FormInputItem'
  import $profile from '../../../api/profile'
  import $product from '../../../api/product'
  import $order from '../../../api/order'
  import ProductCodeTable from "../table/ProductCodeTable"
  import $qr from '../../../api/qr'
  export default {
    components: {
      ProductCodeTable,
      CodeOrderTable,
      FormInputItem
    },
    name: "factory-code-order-view",
    data(){
      return {
        orders:[],
        productList:[],
        addingFormVisible:false,
        addingForm:{
          productId:null,
          count:null,
          factoryId:$profile.getLoginInfo().organization.id,

        },
        rules:{
          'productId':[
            { required: true, message: '请选择产品', trigger: 'blur' }
          ],
          'count':[
            { required: true, message: '不能为空', trigger: 'blur'},
            { type: 'number', message: '必须为数字值', trigger: 'blur'}
          ]
        },
        codeDialogVisible:false,
        codeList:[],
        currentCodePage:1,
        codeTotalPages:1,
        currentOrderId:null,
        orderTotalPages:1,
        currentOrderPage:1
      }
    },
    methods:{
      getProductList(){
        var  self = this;
        var orgId = $profile.getLoginInfo().organization.id;
        var params = {
          organizationId: orgId
        }
        $product.getProductList(params).then(({data})=>{
          self.productList = data.data;
        })
      },
      getOrderPage(page){
        var self = this;
        var orgId = $profile.getLoginInfo().organization.id;
        var params = {
          'factory.id': orgId
        }
        $order.getOrderPage(page-1,params).then(({data})=>{
          self.orders = data.data.content;
          self.orderTotalPages = data.data.totalPages;
          self.currentOrderPage = page;
        })
      },
      getCodePage(page, orderId){

        var parameters = {
          'order.id': orderId
        }
        var self = this;
        $product.getCodePage(page - 1, parameters).then(({data})=>{
          self.codeList = data.data.content;
          self.codeTotalPages = data.data.totalPages;
          self.currentCodePage = page;
        })
      },
      submitOrder(order){
        var self = this;
        var index = self.orders.indexOf(order);
        $order.submitOrder(order.id).then(({data})=>{
          $order.getOrder(data.orderId).then(({data})=>{
            self.$set(self.orders, index, data.data);
          })
        })
      },
      downloadCode(proCode){
        var self = this;
        // $qr.getQRImage(proCode.code);
        var href = $profile.getApiHost() + "qr?" + "content=" + proCode.code;
        const a = document.createElement('a');
        a.setAttribute('href', href);
        a.setAttribute('download', proCode.code+".png");
        a.click();
      },
      showCode(order){
        var self = this;
        self.codeDialogVisible = true;
        self.currentOrderId = order.id;
        self.getCodePage(self.currentCodePage, self.currentOrderId);
      },
      submitAddingForm(formName){
        this.addingFormVisible = false;
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            $order.addOrder(self.addingForm).then(({ data }) => {
              console.log(data);
              self.getOrderPage(self.currentOrderPage);
            });
          } else {
            return false;
          }
        });
      },
      codePageChangeHandle(page){
        this.getCodePage(page, this.currentOrderId);
      },
      orderPageChangeHandle(page){
        this.getOrderPage(page)
      },
      downloadCodeFile(){
        // $order.getCodeFile(1)

        // var self = this;
        // $qr.getQRImage(proCode.code);
        var url = `order/${this.currentOrderId}/code/file`;
        var href = $profile.getApiHost() + url;
        const a = document.createElement('a');
        a.setAttribute('href', href);
        a.setAttribute('download', "编码"+this.currentOrderId+".txt");
        a.click();
      }
    },
    mounted(){
      this.getProductList();
      this.getOrderPage(this.currentOrderPage);
    }
  }
</script>

<style scoped>

</style>

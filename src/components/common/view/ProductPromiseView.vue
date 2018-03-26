<template>
    <div>
      <el-button
        class="float-right mx-12"
        @click="addingFormVisible = true"
      >添加</el-button>
      <!--添加职员Dialog-->
      <el-dialog title="添加承诺" :visible.sync="addingFormVisible">
        <el-form
          :model="addingForm"
          :rules="rules"
          ref="addingForm"
          label-width="100px">

          <form-input-item
            label="标题"
            prop="title"
            v-model="addingForm.title">
          </form-input-item>
          <form-input-item
            label="主题"
            prop="theme"
            v-model="addingForm.theme">
          </form-input-item>
          <form-input-item
            label="内容"
            prop="content"
            type="textarea"
            v-model="addingForm.content">
          </form-input-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button
            @click="addingFormVisible = false">
            取 消</el-button>
          <el-button
            type="primary"
            @click="submitForm('addingForm')">
            确 定</el-button>
        </div>
      </el-dialog>
      <product-promise-table
        :promises="promiseList"
        @delete="deleteHandle"/>
    </div>
</template>

<script>
  import ProductPromiseTable from '../table/ProductPromiseTable'
  import FormInputItem from '../../common/item/FormInputItem'
  import $product from '../../../api/product'
  import $profile from '../../../api/profile'
  export default {
    components: {
      ProductPromiseTable,
      FormInputItem
    },
    name: "product-promise-view",
    data(){
      return {
        promiseList:[],
        addingForm:{
          theme:"",
          title:"",
          content:"",
          organizationId:$profile.getLoginInfo().organization.id
        },
        addingFormVisible: false,
        rules:{
          'theme':[
            { required: true, message: '请输入主题', trigger: 'blur' }
          ],
          'title':[
            { required: true, message: '请输入标题', trigger: 'blur' }
          ],
          'content': [
            { required: true, message: '请输内容', trigger: 'blur' }
          ]
        },
      }
    },
    methods:{
      getPromiseList(){
        var self  = this;
        var orgId = $profile.getLoginInfo().organization.id;
        var params = {
          organizationId: orgId
        }
        $product.getPromiseList(params).then(({data})=>{
          self.$message(data.message);
          self.promiseList = data.data;
        })
      },
      submitForm(formName){
        this.addingFormVisible = false;
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            $product.addPromise(self.addingForm).then(({data})=>{
              self.$message(data.message);
              self.getPromiseList();
            })
          } else {
            return false;
          }
        });
      },
      deleteHandle(row){
        var self = this;
        var index = self.promiseList.indexOf(row);
        $product.deletePromise(row.id).then(()=>{
          self.promiseList.splice(index, 1);
        })

      }

    },
    mounted(){
      this.getPromiseList();
    }
  }
</script>

<style scoped>

</style>

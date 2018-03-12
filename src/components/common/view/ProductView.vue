<template>
  <div>
    <el-button
      class="float-right mx-12"
      @click="addingFormVisible = true"
    >添加</el-button>

    <el-dialog title="添加产品" :visible.sync="addingFormVisible">
      <el-form
        :model="addingForm"
        :rules="rules"
        ref="addingForm"
        label-width="100px">

        <form-input-item
          label="名称"
          prop="name"
          v-model="addingForm.name">
        </form-input-item>
        <form-input-item
          label="功能"
          prop="function"
          v-model="addingForm.function">
        </form-input-item>
        <form-input-item
          label="描述"
          prop="description"
          type="textarea"
          v-model="addingForm.description">
        </form-input-item>

        <el-form-item label="承诺">
          <el-select
            class="display-inline"
            prop="promiseId"
            v-model="addingForm.promiseId"
            placeholder="请选择承诺">
            <el-option
              v-for="item in promiseList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
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
    <product-table
      :products="productList"
      @delete="deleteHandle"
      @show-promise="showPromise"/>

    <el-dialog title="承诺" :visible.sync="promiseFormVisible">
      <el-form
        :model="promiseForm"
        ref="promiseForm"
        label-width="100px">

        <el-form-item
          label="名称">
          {{promiseForm.name}}
        </el-form-item>
        <el-form-item
          label="主题">
          {{promiseForm.theme}}
        </el-form-item>
        <el-form-item
          label="内容">
          {{promiseForm.content}}
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button
          @click="promiseFormVisible = false">
          确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import ProductTable from '../table/ProductTable'
  import $product from '../../../api/product'
  import $profile from '../../../api/profile'
  import FormInputItem from '../../common/item/FormInputItem'
  export default {
    components: {
      ProductTable,
      FormInputItem
    },
    name: "product-view",
    data(){
      return {
        productList: [],
        promiseList: [],
        addingFormVisible:false,
        addingForm:{
          name:"",
          function:"",
          description:"",
          promiseId:null,
          organizationId:$profile.getLoginInfo().organization.id
        },
        promiseForm:{
          theme:"",
          name:"",
          content:""
        },
        promiseFormVisible:false,
        rules:{
          'function':[
            { required: true, message: '请输入产品用途', trigger: 'blur' }
          ],
          'name':[
            { required: true, message: '请输入名称', trigger: 'blur' }
          ],
          'promiseId': [
            { required: true, message: '请选择产品承诺', trigger: 'blur' }
          ]
        }
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
      getPromiseList(){
        var self  = this;
        var orgId = $profile.getLoginInfo().organization.id;
        var params = {
          organizationId: orgId
        }
        $product.getPromiseList(params).then(({data})=>{
          self.promiseList = data.data;
        })
      },
      submitAddingForm(formName){
        this.addingFormVisible = false;
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            $product.addProduct(self.addingForm).then(()=>{
              self.getProductList();
            })
          } else {
            return false;
          }
        });
      },
      deleteHandle(row){
        var self = this;
        var index = self.productList.indexOf(row);
        $product.deleteProduct(row.id).then(()=>{
          self.productList.splice(index, 1);
        })

      },
      showPromise(promise){
        this.promiseForm = promise;
        this.promiseFormVisible = true;
      }
    },
    mounted(){
      this.getProductList();
      this.getPromiseList();
    }
  }
</script>

<style scoped>

</style>

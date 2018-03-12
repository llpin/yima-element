<template>
  <div>
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="w-50">
      <form-input-item
        label="账号名"
        prop="loginInfo.username"
        v-model="form.loginInfo.username"/>

      <form-input-item
        type="password"
        label="密码"
        prop="loginInfo.password"
        v-model="form.loginInfo.password">
      </form-input-item>

      <el-form-item
        label="系统类型"
        prop="loginInfo.systemType">
        <el-select
          v-model="form.loginInfo.industryEntity.id"
          placeholder="请选择系统类型"
          @change="industryChangeHandle">
          <el-option
            v-for="item in  industryEnums"
            :key="item.id"
            :label="item.name"
            :value="item.id">
            <span class="float-left">{{ item.name }}</span>
            <span class="float-right">{{ item.description }}</span>
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="账号类型"
        prop="loginInfo.accountType">
        <el-select
          v-model="form.loginInfo.role.id"
          placeholder="请选择账号类型">
          <el-option
            v-for="item in  roleEnums"
            :key="item.id"
            :label="item.name"
            :value="item.id">
            <span class="float-left">{{ item.description }}</span>
            <span class="float-right">{{ item.name }}</span>
          </el-option>
        </el-select>
      </el-form-item>

      <form-input-item
        label="姓名"
        prop="loginInfo.individualProfile.name"
        v-model="form.loginInfo.individualProfile.name">
      </form-input-item>

      <el-form-item
        label="从事行业"
        prop="loginInfo.individualProfile.subIndustryEntity.id">
        <el-select
          v-model="form.loginInfo.individualProfile.subIndustryEntity.id"
          placeholder="请选择从事行业">
          <el-option
            v-for="item in subIndustryEntities"
            :key="item.id"
            :label="item.name"
            :value="item.id">
            <span class="float-left">{{ item.description }}</span>
            <span class="float-right">{{ item.name }}</span>
          </el-option>
        </el-select>
      </el-form-item>

      <!--<productAddingForm-input-item-->
        <!--label="性别"-->
        <!--prop="loginInfo.individualProfile.gender"-->
        <!--v-model="productAddingForm.loginInfo.individualProfile.gender">-->
      <!--</productAddingForm-input-item>-->

      <el-form-item
        label="性别"
        prop="loginInfo.individualProfile.gender">
        <el-select
          v-model="form.loginInfo.individualProfile.gender"
          placeholder="请选择性别">
          <el-option
            v-for="item in genderEnums"
            :key="item.code"
            :label="item.name"
            :value="item.code">
            <span class="float-left">{{ item.description }}</span>
            <span class="float-right">{{ item.name }}</span>
          </el-option>
        </el-select>
      </el-form-item>

      <form-input-item
        label="手机号"
        prop="loginInfo.individualProfile.telephone"
        v-model="form.loginInfo.individualProfile.telephone">
      </form-input-item>

      <form-input-item
        label="电话"
        prop="loginInfo.individualProfile.phone"
        v-model="form.loginInfo.individualProfile.phone">
      </form-input-item>

      <form-input-item
        label="电子邮箱"
        prop="loginInfo.individualProfile.email"
        v-model="form.loginInfo.individualProfile.email">
      </form-input-item>

      <el-form-item
        label="证件类型"
        prop="loginInfo.individualProfile.subIndustryEntityId">
        <el-select
          v-model="form.loginInfo.individualProfile.credentialsType"
          placeholder="请选择证件类型">
          <el-option
            v-for="item in credentialsTypes"
            :key="item.code"
            :label="item.name"
            :value="item.code">
          </el-option>
        </el-select>
      </el-form-item>

      <form-input-item
        label="证件编码"
        prop="loginInfo.individualProfile.credentialsCode"
        v-model="form.loginInfo.individualProfile.credentialsCode">
      </form-input-item>
      <!--<productAddingForm-input-item-->
      <!--label="证件照片"-->
      <!--prop="loginInfo.individualProfile.credentialsImg"-->
      <!--v-model="productAddingForm.loginInfo.individualProfile.credentialsImg">-->
      <!--</productAddingForm-input-item>-->
      <el-upload
        ref="credentialsUpload"
        :action="uploadAction"
        :on-remove="handleCredentialsImgRemove"
        :on-success="handleCredentialsImgSuccess"
        :on-preview="handleCredentialsImgPreview"
        :file-list="credentialsImages"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">添加证件照片文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitCredentialsUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
      </el-upload>

      <form-input-item
        label="居住地址"
        prop="loginInfo.individualProfile.address"
        v-model="form.loginInfo.individualProfile.address">
      </form-input-item>

      <form-input-item
        label="邮寄地址"
        prop="loginInfo.individualProfile.postAddress"
        v-model="form.loginInfo.individualProfile.postAddress">
      </form-input-item>

      <el-button
        type="primary"
        class="float-right mx-12"
        @click="submitForm('form')">添加</el-button>
      <el-button
        class="float-right mx-12"
        @click="resetForm('form')">重置</el-button>
    </el-form>
    <el-dialog :visible.sync="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
  import $industry from '../../api/industry'
  import $subIndustry from '../../api/subIndustry'
  import $role from '../../api/role'
  import $user from '../../api/user'
  import $fileUpload from '../../api/fileResource'

  import FormInputItem from '../common/item/FormInputItem'

  import $profile from '../../api/profile'

  export default {
    name: "lawyer-register",
    components:{
      FormInputItem
    },
    methods: {
      industryEnumsInit(){
        var self = this;

        $industry.getList({industryType:'INDIVIDUAL'}).then(({data})=>{
            if(data && data.data){
              self.industryEnums = data.data;
              console.log(self.industryEnums);
            }
          }
        )
      },
      roleEnumsInit(entityId){
        var self = this;
        var prams = {
          industryEntityId: entityId,
          level: 'FIRST'

        }
        $role.getList(prams).then(({data})=>{
            if(data && data.data){
              self.roleEnums = data.data;
              console.log(self.roleEnums);
            }
          }
        )
      },
      subIndustryEnumInit(parentId){
        var self = this;
        var prams = {
          industryEntityId: parentId
        }

        $subIndustry.getList(prams).then(
          ({data})=>{
            if(data && data.data){
              self.subIndustryEntities = data.data;
              console.log(self.subIndustryEntities);
            }
          }
        )
      },
      submitForm(formName) {
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            debugger;
            self.productAddingForm.loginInfo.individualProfile.credentialsImages = [];
            self.credentialsImages.forEach( item => {
              self.productAddingForm.loginInfo.individualProfile.credentialsImages.push({id: item.id});
            })
            console.log(self.productAddingForm);
            $user.register(self.productAddingForm.loginInfo).then(
              ({data})=>{
                this.$message(data.message);
              }
            )
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      industryChangeHandle(value){
        this.roleEnumsInit(value);
        this.subIndustryEnumInit(value);
      },
      submitImagesUpload() {
        debugger;
        this.$refs.imageUpload.submit();
      },
      submitCredentialsUpload(){
        this.$refs.credentialsUpload.submit();
      },
      handleImagesRemove(file, fileList) {
        debugger;
        console.log(file, fileList);
        var self = this;
        var index = self.enterpriseImages.indexOf(file);
        self.enterpriseImages.splice(
          index, 1
        );
        $fileUpload.remove(file.id);
        console.log('fileList', this.enterpriseImages);
      },
      handleImagesSuccess(response, file, fileList){
        debugger;
        console.log(response);
        var self = this;
        var data = response.data;
        data.url = $profile.getApiHost() + data.url;
        self.enterpriseImages.push(
          data
        );
        console.log('fileList', this.enterpriseImages);
      },
      handleImagesPreview(file){
        console.log(file);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleCredentialsImgRemove(file, fileList){
        console.log(file, fileList);
        var self = this;
        var index = self.credentialsImages.indexOf(file);
        self.credentialsImages.splice(
          index, 1
        );
        $fileUpload.remove(file.id);
        console.log('fileList', this.credentialsImages);
      },
      handleCredentialsImgPreview(file){
        console.log(file);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleCredentialsImgSuccess(response, file, fileList){
        console.log(response);
        var self = this;
        var data = response.data;
        data.url = $profile.getApiHost() + data.url;
        self.credentialsImages.push(
          data
        );
        console.log('fileList', this.credentialsImages);
      }
    },
    data() {
      return {

        productAddingForm:{
          loginInfo:{
            username:"",
            password:"",
            industryEntity:{
              id:null
            },
            role:{
              id:null
            },
            profileType:"INDIVIDUAL",
            individualProfile:{
              name:"",
              gender:"",
              subIndustryEntity:{
                id:null
              },
              doPass1:"",
              credentialsType:"",
              credentialsCode:"",
              credentialsImages:[],
              email:"",
              telephone:"",
              phone:"",
              address:"",
              postAddress:"",
              regionCode:"",
              subRegionCode:""
            },
            parentId: -1
          },
        },
        rules:{
          'loginInfo.industryEntity.id':[
            { required: true, message: '请输入系统类型', trigger: 'blur' }
          ],
          'loginInfo.role.id':[
            { required: true, message: '请输入账户类型', trigger: 'blur' }
          ],
          'loginInfo.username': [
            { required: true, message: '请输用户名', trigger: 'blur' }
          ],
          'loginInfo.password': [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          'loginInfo.individualProfile.telephone':[
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          'loginInfo.individualProfile.email': [
            { required: true, message: '请输入电子邮箱', trigger: 'blur' }
          ]
        },
        industryEnums:[],
        roleEnums:[],
        subIndustryEntities:[],
        genderEnums:[
          {
            name:"男",
            code:"MALE",
            description:"男性"
          },
          {
            name:"女",
            code:"FEMALE",
            description:"女性"
          }
        ],
        credentialsTypes:[
          {
            name:"身份证",
            code:"IDENTITY_CARD",
            description:"身份证"
          }
        ],
        credentialsImages:[],
        uploadAction: $fileUpload.getFileUploadAction(),
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    mounted(){
      this.industryEnumsInit();
    }
  }
</script>

<style scoped>
  .el-select{
    display: inline;
  }
</style>

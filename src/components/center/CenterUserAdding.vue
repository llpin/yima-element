<template>
  <div>
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="w-50">
      <el-form-item label="账号名" prop="loginInfo.username">
        <el-input v-model="form.loginInfo.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="loginInfo.password">
        <el-input type="password" v-model="form.loginInfo.password"></el-input>
      </el-form-item>

      <el-form-item label="系统类型" prop="loginInfo.systemType">
        <el-select
          v-model="form.loginInfo.industryEntity.id"
          placeholder="请选择系统类型"
          @change="industryChangeHandle">
          <el-option
            v-for="item in  industryEnums"
            :key="item.id"
            :label="item.name"
            :value="item.id">
            <span style="float: left">{{ item.name }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.description }}</span>
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="账号类型" prop="loginInfo.role.id">
        <el-select v-model="form.loginInfo.role.id" placeholder="请选择账号类型">
          <el-option
            v-for="item in  roleEnums"
            :key="item.id"
            :label="item.name"
            :value="item.id">
            <span style="float: left">{{ item.description }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.name }}</span>
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机" prop="telephone">
        <el-input v-model="form.telephone"></el-input>
      </el-form-item>

      <el-button
        type="primary"
        class="float-right mx-12"
        @click="submitForm('form')">添加</el-button>
      <el-button
        class="float-right mx-12"
        @click="resetForm('form')">重置</el-button>
    </el-form>
  </div>
</template>

<script>
  import $role from '../../api/role'
  import $user from  '../../api/user'
  import $industry from  '../../api/industry'

  export default {

    name: "CenterUserAdding",
    props: {},
    methods: {
      industryEnumsInit(){
        var self = this;

        $industry.getList({industryType: 'CENTER'}).then(({data})=>{
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
          level:'SECOND'
        }
        $role.getList(prams).then(({data})=>{
            if(data && data.data){
              self.roleEnums = data.data;
              console.log(self.roleEnums);
            }
          }
        )
      },
      submitForm(formName) {
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(self.from);
            $user.register(self.form.loginInfo).then(({data})=>{
              console.log(data);
              this.$message(data.message);
            })
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
      }
    },
    data() {
      return {

        form:{
          loginInfo:{
            username:"",
            password:"",
            industryEntity:{
              id:null
            },
            role:{
              id:null
            },
            enterpriseProfile:{
              id:null
            }
          },
        },
        rules:{
          telephone: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
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
          ]
        },
        industryEnums:[],
        roleEnums:[]
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

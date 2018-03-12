<template>
  <el-container direction="vertical" style="margin-top: 120px">
    <el-row>
      <el-col :span="12" :offset="6">
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px">
          <el-form-item label="账号" prop="username">
            <el-input v-model="loginForm.username" auto-complete="auto-complete"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="text" @click="register">注册</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="6">
        <div>
          <img
            class="display-inline-block"
            src="../assets/sellerapp.png">
          <span class="display-block">销售端APP</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <img
            class="display-inline-block"
            src="../assets/customerapp.png">
          <span class="display-block">消费者端APP</span>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
  import $user from '../api/user'
  import $profile from '../api/profile'
  import { HTTP_RESPONSE_SUCCESS } from "../api/result-codes";

  export default {
    name: "Index",
    components:{

    },
    data() {
      return {
        loginForm: {
          username: "",
          password: ""
        },
        rules: {
          username: [
            { required: true, message: "请输入用户名", trigger: "blur" },
            { min: 3, max: 32, message: "长度在 3 到 32 个字符", trigger: "blur" }
          ],
          password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            { min: 3, max: 32, message: "长度在 3 到 32 个字符", trigger: "blur" }
          ]
        },
      };
    },
    methods:{
      submitForm(formName) {
        var self = this;
        this.$refs[formName].validate(valid => {
          if (valid) {
            // self.$message("提交成功!");
            console.log("提交成功!");

            self.login();
          } else {
            console.log("提交失败!");
            return false;
          }
        });
      },
      login() {
        var self = this;
        $user
          .login({
            username: self.loginForm.username,
            password: self.loginForm.password
          })
          .then(function({ data }) {
            console.log("login....", data);
            self.$message(data.message);
            if (data.code === HTTP_RESPONSE_SUCCESS) {
              self.$store.commit('userInfoSet', data.userVo);
              $profile.setLoginInfo(data.userVo);
              self.$router.push(data.redirection);
            }
          });
      },
      register(){
        var self = this;

        self.$router.push('/register')
      }
    },
    mounted(){

    }
  }
</script>

<style scoped>

</style>

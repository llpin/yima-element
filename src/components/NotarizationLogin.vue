<template>
  <el-container direction="vertical">
    <el-row>
      <el-col :span="12" :offset="6">
        Notarization 认证系统端
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px">
          <el-form-item label="账号" prop="username">
            <el-input v-model="loginForm.username" auto-complete="auto-complete"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password">
            <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import $user from "../api/user";
import { HTTP_RESPONSE_SUCCESS } from "../api/result-codes";
export default {
  name: "SellerLogin",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
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
    resetForm(formName) {
      debugger;
      this.$refs[formName].resetFields();
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

          if (data.code === HTTP_RESPONSE_SUCCESS) {
            console.log("login ok");
            self.$router.push(data.redirection);
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

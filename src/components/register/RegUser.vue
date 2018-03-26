
<!--注册-账号基本信息-->
<template>
  <div>
    <el-form :model="userForm" :rules="rules" ref="userForm" label-width="100px">
      <form-input-item
        label="账号名"
        prop="username"
        v-model="userForm.username"/>

      <form-input-item
        type="password"
        label="密码"
        prop="password"
        v-model="userForm.password">
      </form-input-item>

      <form-input-item
        type="password"
        label="业务密码"
        prop="doPassword"
        v-model="userForm.doPassword">
      </form-input-item>
    </el-form>
    <el-button class="w-100" v-if="last"
               @click="submitForm('userForm')">
                提交
    </el-button>
    <div v-else>
      <span
        class="float-left">
        {{ pageIndex }}
      </span>
      <el-button
        type="text"
        class="float-right"
        @click="submitForm('userForm')">
        下一步
      </el-button>
    </div>
  </div>
</template>

<script>
  import FormInputItem from '../common/item/FormInputItem'

  export default {
    name: "reg-user",
    components:{
      FormInputItem
    },
    props:{
      pageIndex:{
        type:String,
        required:false
      },
      last:{
        type:Boolean,
        required:true
      }
    },
    methods: {
      submitForm(formName){
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            self.$emit('submit',self.userForm);
          } else {
            return false;
          }
        });
      },
      back(){
        this.$router.push("/");
      }
    },
    data() {
      return {
        userForm:{
          username:"",
          password:"",
          platformMainTypeEnum:null,
          doPassword:null
        },
        rules:{
          'username': [
            { required: true, message: '请输用户名', trigger: 'blur' }
          ],
          'password': [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          'doPassword': [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },

      }
    },
    mounted(){
    }
  }
</script>

<style scoped>

</style>

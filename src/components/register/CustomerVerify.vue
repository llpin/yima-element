<template>
  <div style="margin-top: 120px">
    <el-col :span="8" :offset="8">
      <h3 class="text-left">绑定手机号</h3>
      <mobile-phone-verify
        :last="true"
        @submit="submitForm"
        @verify-code="getVerifyCode"
        />
    </el-col>
  </div>
</template>

<script>
  import MobilePhoneVerify from './MobilePhoneVerify'

  import $user from '../../api/user'
  export default {
    name: "customer-verify",
    components:{
      MobilePhoneVerify
    },
    data(){
      return{
        verify:{
          mobilePhone:"",
          verifyCode:""
        }
      }
    },
    methods:{
      submitForm(data){
        var self = this;
        self.verify = data;

        self.$store.commit("indTelephoneSet", self.verify.mobilePhone);

        $user.verifyCode(self.verify.mobilePhone, self.verify.verifyCode).then(({data})=>{
          if(data.code !== "200"){
            self.$message("验证码错误");
          }else {
            var individual = self.$store.getters.individual;
            $user.registerIndividual(individual).then(({ data }) => {
              self.$message(data.message)
            });
          }
        })
      },
      getVerifyCode(mobilePhone){
        var self = this;
        $user.getVerifyCode(mobilePhone).then( ({data}) => {
            if(data.code === "200") {
              self.$message("短信已发送成功");
            }else {
              self.$message("短信已发送失败");
            }
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>

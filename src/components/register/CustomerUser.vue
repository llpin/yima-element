<template>
  <div style="margin-top: 120px">
    <el-col :span="8" :offset="8">
      <h3 class="text-left">账号基本信息</h3>
      <reg-base
        :last="false"
        page-index="2/3"
        @submit="submitForm"
      />
    </el-col>
  </div>
</template>

<script>
  import RegBase from './RegUser'
  import $user from '../../api/user'

  export default {
    name: "customer-user",
    components:{
      RegBase
    },
    methods: {
      submitForm(data){
        var self = this;
        self.user=data;
        self.user.platformMainTypeEnum = "INDIVIDUAL";
        self.$store.commit('indUserSet', data);

        self.$router.push('/register/individual/verify');
      }
    },
    data() {
      return {
        user:{
          username:null,
          password:null,
          platformMainTypeEnum:null,
          // enabled:null,
          // auditState:null,
          // parentId:null,
          // auditUserId:null,
        }
      }
    }
  }
</script>

<style scoped>

</style>

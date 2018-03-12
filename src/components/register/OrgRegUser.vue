<template>
  <div style="margin-top: 120px">
    <el-col :span="8" :offset="8">
      <h3 class="text-left">账号基本信息</h3>
      <reg-base
        :last="true"
        @submit="submitForm"
      />
    </el-col>
  </div>
</template>

<script>

  import RegBase from './RegUser'
  import $user from '../../api/user'

  export default {
    name: "org-reg-user",
    components:{
      RegBase
    },
    methods: {
      submitForm(data){
        var self = this;
        self.user=data;
        self.user.platformMainTypeEnum = "ORGANIZATION";
        self.$store.commit('orgUserSet', data);

        var org = self.$store.getters.organization;
        console.log(org);

        $user.registerOrganization(org).then(({ data })=>{
          self.$message(data.message);
          if(data.code === "200"){
            self.$router.push("/");
          }
        })
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
    },
    mounted(){
    }
  }
</script>

<style scoped>

</style>

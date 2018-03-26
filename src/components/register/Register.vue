<template>
  <div>
    <el-col :span="6" :offset="6">
      <register-card
        text="企业"
        @click="organizationRegister"/>
    </el-col>
    <el-col :span="6">
      <register-card
        text="个人"
        @click="customerRegister"/>
    </el-col>
    <!--<el-col :span="4">-->
      <!--<register-card-->
        <!--text="律师"-->
        <!--@click="lawyerRegister"/>-->
    <!--</el-col>-->
  </div>
</template>

<script>
  import RegisterCard from '../common/card/RegisterCard'
  export default {
    components: {
      RegisterCard
    },
    name: "Register",
    methods:{
      organizationRegister(){
        this.$store.commit('orgPlatformTypeEnumSet', 'ORGANIZATION');
        this.$router.push('/register/organization');
      },
      customerRegister(){
        this.$store.commit('userPlatformTypeEnumSet', 'INDIVIDUAL');
        this.$store.commit('userIndividualTypeEnumSet', 'CUSTOMER');
        this.$router.push('/register/individual/info');
      },
      lawyerRegister(){
        this.$store.commit('userPlatformTypeEnumSet', 'INDIVIDUAL');
        this.$store.commit('userIndividualTypeEnumSet', 'LAWYER');
        this.$router.push('/register/lawyer/info');
      }
    }
  }
</script>

<style scoped>

</style>

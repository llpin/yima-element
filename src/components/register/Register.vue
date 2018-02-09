<template>
  <div>
    <el-col :span="6" :offset="6">
      <register-card
        text="企业"
        @click="enterpriseRegister"/>
    </el-col>
    <el-col :span="6">
      <register-card
        text="个人"
        @click="personRegister"/>
    </el-col>
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
      enterpriseRegister(){
        this.$router.push('/enterprise/register')
      },
      personRegister(){
        this.$router.push('/individual/register')
      }
    }
  }
</script>

<style scoped>

</style>

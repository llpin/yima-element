<template>
  <div style="margin-top: 120px">
    <el-col :span="8" :offset="8">
      <h3 class="text-left">法人代表信息</h3>
      <reg-person individual-type="REPRESENTATIVE"
        :last="false"
        page-index="2/3"
        @submit="submitForm"
      />
    </el-col>
  </div>
</template>

<script>
  import RegPerson from './RegPerson'

  export default {
    name: "org-reg-rep",
    components:{
      RegPerson
    },
    methods: {
      submitForm(data){
        var self = this;
        self.rep=data.person;
        self.$store.commit('orgRepresentativeSet', self.rep);

        self.$router.push('/register/organization/user');
      }
    },
    data() {
      return {
        rep:{
          individualTypeEnum:null,
          name:null,
          genderType:null,
          email:null,
          telephone:null,
          phone:null,
          address:null,
          postAddress:null,
          idNumber:null,
          frontIDImageId:null,
          backIDImageId:null
        }
      }
    },
    mounted(){
    }
  }
</script>

<style scoped>

</style>

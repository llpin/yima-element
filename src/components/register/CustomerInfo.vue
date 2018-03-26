<template>
  <div style="margin-top: 120px">
    <el-col :span="8" :offset="8">
      <h3 class="text-left">个人信息</h3>
      <reg-person individual-type="CUSTOMER"
                  :last="false"
                  page-index="1/3"
                  @submit="submitForm"
      />
    </el-col>
  </div>
</template>

<script>

  import $user from '../../api/user'
  import $fileUpload from '../../api/fileResource'
  import $profile from '../../api/profile'

  import FormInputItem from '../common/item/FormInputItem'
  import RegPerson from './RegPerson'

  export default {
    name: "customer-info",
    components:{
      FormInputItem,
      RegPerson
    },
    methods: {
      submitForm(data){
        var self = this;
        self.ind=data.person;
        self.$store.commit('indBaseSet', self.ind);

        self.$router.push('/register/individual/user');
      }
    },
    data() {
      return {

        ind:{
          individualTypeEnum:null,
          name:null,
          genderType:null,
          email:null,
          mobilePhone:null,
          telephone:null,
          address:null,
          postAddress:null,
          idNumber:null,
          frontIDImageId:null,
          backIDImageId:null
        },

        genderEnums:[
          {
            name:"男",
            code:"MALE",
            description:"男性"
          },
          {
            name:"女",
            code:"FEMALE",
            description:"女性"
          }
        ]
      }
    },
    mounted(){
    }
  }
</script>

<style scoped>
  .el-select{
    display: inline;
  }
</style>

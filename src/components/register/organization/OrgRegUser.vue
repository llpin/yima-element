<!--企业账号信息-->
<template>
  <div style="margin-top: 120px">
    <h3 class="text-left">账号基本信息</h3>
    <reg-user
      :last="true"
      @submit="submitForm"
      :form="userForm"
      :form-ref="formRef"
      :rules="userRules"/>
  </div>
</template>

<script>

  import RegUser from '../RegUser'
  import $user from '../../../api/user'

  export default {
    name: "org-reg-user",
    components: {
      RegUser
    },
    props: {
      form: {
        type: Object,
        default: function () {
          return {};
        },
        required: true
      },
      rules: {
        type: Object,
        default: function () {
          return {};
        },
        required: true
      },
      formRef:{
        type:String,
        required:true
      }
    },
    methods: {
      submitForm(data) {
        var self = this;
        self.user = data;
        self.user.platformMainTypeEnum = "ORGANIZATION";
        self.$store.commit('orgUserSet', data);

        var org = self.$store.getters.organization;
        console.log(org);

        $user.registerOrganization(org).then(({data}) => {
          self.$message(data.message);
          if (data.code === "200") {
            self.$router.push("/");
          }
        })
      }
    },
    data() {
      return {
        userForm: this.form,
        userRules: this.rules,
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>


<!--注册-账号基本信息-->
<template>
  <div>
    <el-form :model="form" :rules="rules" :ref="formRef" label-width="100px">
      <form-input-item
        label="账号名"
        prop="username"
        v-model="form.username"/>

      <form-input-item
        type="password"
        label="密码"
        prop="password"
        v-model="form.password">
      </form-input-item>

      <form-input-item
        type="password"
        label="业务密码"
        prop="doPassword"
        v-model="form.doPassword">
      </form-input-item>
    </el-form>
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
      },
      form:{
        type:Object,
        default: function () {
          return {};
        },
        required:true
      },
      rules:{
        type:Object,
        default:function () {
          return {};
        },
        required:true
      },
      formRef: {
        type:String,
        default:"form"
      }
    },
    methods: {
      submitForm(formName){
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            self.$emit('submit',self.form);
          } else {
            return false;
          }
        });
      },
      back(){
        this.$router.push("/");
      }
    },
    mounted(){
    }
  }
</script>

<style scoped>

</style>

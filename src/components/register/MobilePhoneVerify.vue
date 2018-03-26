<template>
    <div>
      <el-form :model="phoneForm" :rules="rules" ref="phoneForm" label-width="100px">
        <form-input-item
          label="手机号"
          prop="mobilePhone"
          v-model="phoneForm.mobilePhone"/>

        <form-input-item
          label="验证码"
          prop="verifyCode"
          v-model="phoneForm.verifyCode">
        </form-input-item>
      </el-form>

      <el-button class="w-100 margin-bottom-200"
                 @click="getVerifyCode">
        获取验证码
      </el-button>

      <el-button class="w-100" v-if="last"
                 @click="submitForm('phoneForm')">
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
          @click="submitForm('phoneForm')">
          下一步
        </el-button>
      </div>
    </div>
</template>

<script>
  import FormInputItem from '../common/item/FormInputItem'
  export default {
    name: "mobile-phone-verify",
    props:{
      last: {
        type: Boolean,
        required: false,
        default: false
      },
      pageIndex:{
        type: String,
        required: false
      }
    },
    components:{
      FormInputItem
    },
    data(){
      return {
        phoneForm:{
          mobilePhone:"",
          verifyCode:""
        },
        rules: {
          'mobilePhone': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'verifyCode': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
        },
      }
    },
    methods:{
      submitForm(formName) {
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            self.$emit('submit', self.phoneForm);
          } else {
            return false;
          }
        });
      },
      getVerifyCode(){
        var mobilePhone = this.phoneForm.mobilePhone;
        if(mobilePhone == null || mobilePhone.length <= 0){
          this.$message("手机号不能为空");
        }
        this.$emit('verify-code', mobilePhone);
      }
    }
  }
</script>

<style scoped>
  .margin-bottom-200 {
    margin-bottom: 200px;
  }
</style>

<template>
  <div>
    <el-row>
      <el-col :span="8" :offset="8">
        <el-form
          :model="form"
          :rules="rules"
          ref="form"
          label-width="100px">
          <form-input-item
            label="业务密码"
            prop="oldPassword"
            type="password"
            v-model="form.oldPassword">
          </form-input-item>
          <form-input-item
            label="新密码"
            prop="newPassword"
            type="password"
            v-model="form.newPassword">
          </form-input-item>
          <form-input-item
            label="确认新密码"
            prop="newPassword2"
            type="password"
            placeholder="重新输入新密码"
            v-model="form.newPassword2">
          </form-input-item>
        </el-form>
        <div>
          <el-button
            @click="resetForm('form')">
            取 消</el-button>
          <el-button
            type="primary"
            @click="submitForm('form')">
            确 定</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import FormInputItem from '../item/FormInputItem'

  import $user from '../../../api/user'
  import $profile from '../../../api/profile'
  export default {
    name: "update-do-password-view",
    components:{
      FormInputItem
    },
    data(){
      return {

        form:{
          oldPassword:"",
          newPassword:"",
          newPassword2:""
        },
        rules:{
          'oldPassword':[
            { required: true, message: '请输入业务密码', trigger: 'blur' }
          ],
          'newPassword':[
            { required: true, message: '请输入新密码', trigger: 'blur' }
          ],
          'newPassword2': [
            { required: true, message: '请确认密码', trigger: 'blur' }
          ]
        },
      }
    },
    methods:{
      submitForm(formName){
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            $user.updateDoPassword(
              $profile.getLoginInfo().user.id,
              self.form
            ).then(({data})=>{
              self.$message(data.message);
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

  }
</script>

<style scoped>

</style>

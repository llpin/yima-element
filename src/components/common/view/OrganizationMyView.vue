<template>
    <div>
      <el-row>
        <el-col :span="8" :offset="8">
          <el-form class="text-left"
                   :model="model"
                   label-width="150px">
            <el-form-item label="企业名称:"
            >
              {{model.organization.name}}
            </el-form-item>
            <el-form-item label="用户名:">
              {{model.user.username}}
            </el-form-item>
            <!--<el-form-item label="主类型:">-->
            <!--{{model.user.platformMainType.name}}-->
            <!--</el-form-item>-->
            <el-form-item label="邮箱:">
              {{model.organization.email}}
            </el-form-item>
            <el-form-item label="联系手机:">
              {{model.organization.mobilePhone}}
            </el-form-item>
            <el-form-item label="联系电话:">
              {{model.organization.telephone}}
            </el-form-item>
            <el-form-item label="地址:">
              {{model.organization.address}}
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

    </div>
</template>

<script>
  import $profile from '../../../api/profile'
  export default {
    name: "organization-my-view",
    data(){
      return {
        model: {
          organization:{
            name:""
          },
          user:{
            username:"",
            platformMainType:{
              name:""
            }
          }
        }
      }
    },
    mounted(){
      var self = this;
      self.model = $profile.getLoginInfo();
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <el-row>
      <el-col :span="8" :offset="8">
        <el-form class="text-left"
                 :model="model"
                 label-width="150px">
          <el-form-item label="企业名称:">
            {{model.employee.name}}
          </el-form-item>
          <el-form-item label="用户名:">
            {{model.user.username}}
          </el-form-item>
          <el-form-item label="主类型:">
            {{model.user.platformMainType.name}}
          </el-form-item>
          <el-form-item label="职员类型:">
            {{model.employee.employeeType.name}}
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import $profile from '../../../api/profile'
  export default {
    name: "employee-my-view",
    data(){
      return {
        model: {
          employee:{
            name:"",
            employeeType:{
              name:""
            }
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

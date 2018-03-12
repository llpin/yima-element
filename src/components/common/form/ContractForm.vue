<template>
    <div>
      <el-form
        :model="model"
        label-width="150px">
        <el-form-item label="合同编号:">
          {{model.cno}}
        </el-form-item>
        <el-form-item label="销售员用户名:">
          {{model.draftUser.username}}
        </el-form-item>
        <!--<el-form-item label="销售员姓名:">-->
        <!--{{model.employee.name}}-->
        <!--</el-form-item>-->
        <el-form-item label="合同标题:">
          {{model.title}}
        </el-form-item>
        <el-form-item label="创建时间:">
          {{model.createTime}}
        </el-form-item>
        <el-form-item label="类型:">
          {{model.state}}
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    name: "contract-form",
    props:{
      model:{
        type:Object,
        default:function () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>

</style>

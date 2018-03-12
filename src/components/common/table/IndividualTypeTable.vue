<template>
  <el-table :data="data">
    <el-table-column
      type="index"
      width="50"
      label="序号">
    </el-table-column>
    <el-table-column
      align="center"
      prop="name"
      label="名称" width="140">
    </el-table-column>
    <el-table-column
      align="center"
      prop="code"
      label="编码">
    </el-table-column>
    <el-table-column
      align="center"
      prop="description"
      label="描述">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "individual-type-table",
    props:{
      data:{
        type:Array,
        default:function () {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>

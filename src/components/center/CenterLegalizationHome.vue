<template>
  <el-container class="main-container">
    <el-aside width="200px">
      <!--使用router 属性-->
      <el-menu
        default-active="/employee/center_server/legalization/my/view"
        router>
        <el-menu-item index="/employee/center_server/legalization/my/view">我的</el-menu-item>
        <el-menu-item index="/employee/center_server/legalization/my/view">订单管理</el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <p>中心-法务户</p>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "center-legalization-home"
  }
</script>

<style scoped>

</style>

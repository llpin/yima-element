<template>
  <el-container class="main-container">
    <el-aside width="200px">
      <!--使用router 属性-->
      <el-menu
        default-active="/center/basic/home/user/view"
        router>
        <el-submenu index="/center/basic/home/user/view">
          <template slot="title">
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/center/basic/home/user/view">查询</el-menu-item>
            <el-menu-item index="/center/basic/home/user/adding">添加</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/center/basic/home/role">角色管理</el-menu-item>
        <el-menu-item index="/center/basic/home/audit">用户审核</el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <p>中心-基本户</p>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "center-basic-home",
  }
</script>

<style scoped>

</style>

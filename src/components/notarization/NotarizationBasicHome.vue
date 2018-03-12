<template>
  <el-container class="main-container">
    <el-aside width="200px">
      <!--使用router 属性-->
      <el-menu
        default-active="/notarization/basic/home/user/view"
        router>
        <el-submenu index="/notarization/basic/home/user/view">
          <template slot="title">
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/notarization/basic/home/user/view">查询</el-menu-item>
            <el-menu-item index="/notarization/basic/home/user/adding">添加</el-menu-item>
            <el-menu-item index="/organization/factory_producer/password/view">修改登录密码</el-menu-item>
            <el-menu-item index="/organization/factory_producer/dopassword/view">修改业务密码</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <p>公证处-基本户</p>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "notarization-basic-home"
  }
</script>

<style scoped>

</style>

<template>
  <el-container class="main-container">
    <el-aside width="200px">
      <!--使用router 属性-->
      <el-menu
        default-active="/organization/center_server/my/view"
        router>
        <el-menu-item index="/organization/center_server/my/view">我的</el-menu-item>
        <el-submenu index="/organization/center_server/organization/view">
          <template slot="title">
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/organization/center_server/organization/view">企业</el-menu-item>
            <el-menu-item index="/organization/center_server/employee/view">职员</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/organization/center_server/order/view">订单</el-menu-item>
        <el-menu-item index="/organization/center_server/platformtype/view">主类型</el-menu-item>
        <el-menu-item index="/organization/center_server/organizationtype/view">企业类型</el-menu-item>
        <el-menu-item index="/organization/center_server/individualtype/view">个人类型</el-menu-item>
        <el-menu-item index="/organization/center_server/password/view">修改登录密码</el-menu-item>
        <el-menu-item index="/organization/center_server/dopassword/view">修改业务密码</el-menu-item>
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

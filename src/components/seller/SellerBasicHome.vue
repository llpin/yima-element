<template>
  <el-container class="main-container">
    <el-aside width="200px">
      <!--使用router 属性-->
      <el-menu
        default-active="/organization/store_seller/my/view"
        router>
        <el-menu-item index="/organization/store_seller/my/view">我的</el-menu-item>
        <el-submenu index="/organization/store_seller/employee/view">
          <template slot="title">
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/organization/store_seller/employee/view">职员</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/organization/store_seller/contract/view">合同</el-menu-item>
        <el-menu-item index="/organization/store_seller/password/view">修改登录密码</el-menu-item>
        <el-menu-item index="/organization/store_seller/dopassword/view">修改业务密码</el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <p>销售-基本户</p>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "seller-basic-home"
  }
</script>

<style scoped>

</style>

<template>
  <el-container class="main-container">
    <el-aside width="200px">
      <!--使用router 属性-->
      <el-menu
        default-active="/organization/factory_producer/my/view"
        router>
        <el-menu-item index="/organization/factory_producer/my/view">我的</el-menu-item>
        <el-submenu index="/organization/factory_producer/employee/view">
          <template slot="title">
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/organization/factory_producer/employee/view">职员</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/organization/factory_producer/order/view">订单</el-menu-item>
        <el-menu-item index="/organization/factory_producer/product/view">产品</el-menu-item>
        <el-menu-item index="/organization/factory_producer/promise/view">承诺</el-menu-item>
        <el-menu-item index="/organization/factory_producer/password/view">修改登录密码</el-menu-item>
        <el-menu-item index="/organization/factory_producer/dopassword/view">修改业务密码</el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <p>制造-基本户</p>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "FactoryBasicHome",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

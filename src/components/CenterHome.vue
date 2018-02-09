<template>
  <el-container class="main-container">
    <el-aside width="200px">
      <!--使用router 属性-->
      <el-menu
        default-active="/center/home/user/view"
        router>
        <el-submenu index="/center/home/user/view">
          <template slot="title">
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/center/home/user/view">查询</el-menu-item>
            <el-menu-item index="/center/home/user/adding">添加</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/center/home/role">角色管理</el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  import import $profile from "../api/profile"
  import $util from "../api/util"
  export default {
    components: {
    },
    name: "CenterHome",
    data() {
      return {

      };
    },
    methods: {},
    mounted() {
      var loginInfo = this.$store.getters.loginInfo;
      this.industryInfo = $util.isEmpty(loginInfo) ? $profile.getLoginInfo() : loginInfo;
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

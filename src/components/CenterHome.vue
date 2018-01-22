<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
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
        <el-menu-item index="/center/home/role">权限管理</el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <el-main>
        <router-view></router-view>
        <!--&lt;!&ndash; 中心 用户 &ndash;&gt;-->
        <!--<center-user-main-tabs>-->
        <!--</center-user-main-tabs>-->
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  import $user from "../api/user";
  import {HTTP_RESPONSE_SUCCESS} from "../api/result-codes";

  export default {
    components: {
    },
    name: "CenterHome",
    data() {
      return {
        routes:{
          user:{

          },
          role:{

          }
        }
      };
    },
    methods: {},
    mounted() {
      // $user.centerGet().then(({ data }) => {
      //   // debugger;
      //   console.log(data);
      //   this.userInfoSet(data.user);
      // });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

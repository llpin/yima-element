/*
  
 */
<template>
  <el-tabs v-if="true">
    <el-tab-pane label="中心系统">
      <center-user-role-tabs class="height-offset-180">
      </center-user-role-tabs>
    </el-tab-pane>
    <el-tab-pane label="工厂系统">
    </el-tab-pane>
    <el-tab-pane label="法务系统">定时任务补偿</el-tab-pane>
    <el-tab-pane label="认证系统">角色管理</el-tab-pane>
    <el-tab-pane label="销售系统">定时任务补偿</el-tab-pane>
    <el-tab-pane label="消费系统">配置管理</el-tab-pane>
  </el-tabs>
</template>
<script>
import CenterUserRoleTabs from "./CenterUserRoleTabs";
export default {
  components: {
    CenterUserRoleTabs
  },
  name: "CenterUserMainTabs",
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style>

</style>



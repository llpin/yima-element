/*

 */
<template>
  <el-tabs tab-position="left" v-if="true">
    <el-tab-pane label="基本户">
      <div>
        <center-base-user-table></center-base-user-table>
      </div>
    </el-tab-pane>
    <el-tab-pane label="管理户">
      <center-admin-user-table></center-admin-user-table>
    </el-tab-pane>
    <el-tab-pane label="法律户">
      <center-lawyer-user-table></center-lawyer-user-table>
    </el-tab-pane>
    <el-tab-pane label="数据户">
      <center-data-user-table></center-data-user-table>
    </el-tab-pane>
    <el-tab-pane label="角色管理">
      <user-role-table></user-role-table>
    </el-tab-pane>
    <el-tab-pane label="权限管理">
      <user-permission-table>
      </user-permission-table>
    </el-tab-pane>
</el-tabs>
</template>
<script>
import CenterBaseUserTable from "../user/table/CenterBaseUserTable";
import CenterAdminUserTable from "../user/table/CenterAdminUserTable";
import CenterLawyerUserTable from "../user/table/CenterLawyerUserTable";
import CenterDataUserTable from "../user/table/CenterDataUserTable";
import UserPermissionTable from "../../common/user/table/UserPermissionTable";
import UserRoleTable from "../../common/user/table/UserRoleTable";
export default {
  components: {
    CenterBaseUserTable,
    CenterAdminUserTable,
    CenterLawyerUserTable,
    CenterDataUserTable,
    UserPermissionTable,
    UserRoleTable
  },
  name: "CenterUserRoleTabs",
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>


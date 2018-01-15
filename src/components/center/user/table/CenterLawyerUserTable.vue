<template>
<div style="overflow: auto;" class="height-offset-180">
  <el-table :data="tableData">
    <el-table-column align="center"	 prop="loginInfo.username" label="用户名" width="140">
    </el-table-column>
    <el-table-column align="center"	 prop="telelphone" label="手机号码">
    </el-table-column>
  </el-table>
</div>
</template>
<script>
import $user from "../../../../api/user";
export default {
  name: "CenterLawyerUserTable",
  props: {},
  data() {
    return {
      tableData: []
    };
  },
  methods: {},
  mounted() {
    // var self = this;
    // $user.centerGetList({AccountType: "LAWYER_USER"}).then(
    //   ({data}) => {
    //     console.log(data);
    //     self.tableData = data.data;
    //   }
    // )
  }
};
</script>
<style>

</style>

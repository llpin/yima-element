<template>
<div style="overflow: auto;" class="height-offset-180">
  <el-table :data="tableData">
    <el-table-column align="center"	 prop="name" label="表达式" width="140">
    </el-table-column>
    <el-table-column align="center"	 prop="description" label="描述">
    </el-table-column>
  </el-table>
</div>
</template>
<script>
import $user from "../../../../api/user";
export default {
  name: "UserRoleTable",
  props: {},
  data() {
    return {
      tableData: []
    }; 
  },
  methods: {},
  mounted() {
    var self = this;
    $user.roleGetList({}).then(({ data }) => {
      console.log(data);
      self.tableData = data.data;
    });
  }
};
</script>
<style>

</style>

<template>
<div style="overflow: auto;" class="height-offset-180">
<el-table :data="tableData">
    <el-table-column type="expand">
       <template slot-scope="props">
         <user-role-table></user-role-table>
       </template>
    </el-table-column>
    <el-table-column align="center"	 
      prop="loginInfo.username" label="用户名" width="140">
    </el-table-column>
    <el-table-column align="center"	 prop="telelphone" label="手机号码">
    </el-table-column>
  </el-table>
</div>
  
</template>
<script>
import $user from "../../../../api/user";
import UserRoleTable from "../../../common/user/table/UserRoleTable";
export default {
  name: "CenterBaseUserTable",
  components: {
    UserRoleTable
  },
  props: {},
  data() {
    return {
      tableData: [],
      tableData1: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]

    };
  },
  methods: {},
  mounted() {
    // var self = this;
    // $user.centerGetList({AccountType: "BASE_USER"}).then(
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

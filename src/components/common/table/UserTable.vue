<template>
  <div>
    <el-table :data="users">
      <el-table-column
        type="index"
        width="50"
        label="序号">
      </el-table-column>
      <el-table-column
        align="center"
        prop="username"
        label="用户名" width="140">
      </el-table-column>
      <el-table-column
        align="center"
        prop="industryEntity.name"
        label="行业（系统）">
      </el-table-column>
      <el-table-column
        align="center"
        prop="role.name"
        label="角色">
      </el-table-column>
      <el-table-column
        align="center"
        prop="createTime"
        label="创建时间">
      </el-table-column>
      <!--<el-table-column align="center"	 label="操作">-->
        <!--<el-button type="text" @click="editBase">修改基本信息</el-button>-->
        <!--<el-buuton type="text" @click="addRole">添加角色</el-buuton>-->
      <!--</el-table-column>-->
    </el-table>
  </div>
</template>
<script>
import UserRoleTable from "./UserRoleTable";
import ColFormItem from '../item/ColFormItem';
export default {
  name: "CenterBaseUserTable",
  components: {
    UserRoleTable,
    ColFormItem
  },
  props: {
    users:{
      type:Array,
      default:function () {
        return []
      }
    }
  },
  data() {
    return {

    };
  },
  methods: {
    rowExpandHandle(row, expandRows){
      console.log(row, expandRows);
    },
    // editBase(){
    //   this.$emit('edit-base');
    // },
    // addRole(){
    //   this.$emit('add-role');
    // }
  },
  mounted() {

  }
};
</script>
<style>

</style>

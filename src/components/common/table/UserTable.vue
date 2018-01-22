<template>
  <div>
    <el-table :data="users"
      v-on:expand-change="rowExpandHandle">
      <el-table-column type="expand">
        <!--展开角色信息-->
        <template slot-scope="props">
          <el-form label-position="left" inline>
            <el-row>
              <col-form-item label="邮箱" :span="12" :text="props.row.email"/>
              <col-form-item label="手机号" :span="12" :text="props.row.telelphone"/>
            </el-row>
          </el-form>
          <user-role-table
            class="overflow-auto w-100"
            :data="props.row.loginInfo.roles"
            :operationVisible="false"/>
        </template>
      </el-table-column>
      <el-table-column align="center"
                       prop="loginInfo.username" label="用户名" width="140">
      </el-table-column>
      <el-table-column align="center"	 prop="telelphone" label="手机号码">
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
    editBase(){
      this.$emit('edit-base');
    },
    addRole(){
      this.$emit('add-role');
    }
  },
  mounted() {

  }
};
</script>
<style>

</style>

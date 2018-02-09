<template>
  <div>
    <el-table
      :data="data">
      <el-table-column
        type="index"
        width="50"
        label="序号">
      </el-table-column>
      <el-table-column align="center"	 prop="name" label="名称" width="140">
      </el-table-column>
      <el-table-column align="center"	 prop="industryEntity.name" label="所属行业（系统）" width="140">
      </el-table-column>
      <el-table-column align="center"	 prop="code" label="编码" width="140">
      </el-table-column>
      <el-table-column align="center"	 prop="level" label="等级" width="140">
      </el-table-column>
      <el-table-column align="center"	 prop="description" label="描述">
      </el-table-column>
      <el-table-column align="center"	 label="操作" v-if="isOperationVisible">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import UserPermissionTable from "./UserPermissionTable";

export default {
  components: {UserPermissionTable},
  name: "UserRoleTable",
  props: {
    data:{
      type:Array,
      default: function () {
        return []
      }
    },
    operationVisible:{
      type:Boolean,
      default: true
    }
  },
  data() {
    return {
      isOperationVisible: this.operationVisible
    };
  },
  methods: {
    edit(row){
      console.log(row);
      this.$emit('edit', row);
    }
  },
  mounted() {

  },
  watch:{
    operationVisible: function (newVal, oldVal) {
      this.isOperationVisible = newVal;
    }
  }
};
</script>
<style>

</style>

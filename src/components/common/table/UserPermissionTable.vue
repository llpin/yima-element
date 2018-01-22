<template>
  <div>
    <el-table :data="data">
      <el-table-column align="center"	 prop="name" label="表达式" width="140">
      </el-table-column>
      <el-table-column align="center"	 prop="description" label="描述">
      </el-table-column>
      <el-table-column align="center"	 label="操作" v-if="isOperationVisible">
        <template slot-scope="scope">
          <!--<el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>-->
          <el-button @click="disabled(scope.row)" type="text" size="small" v-if="scope.row.enable">禁用</el-button>
          <el-button @click="enabled(scope.row)" type="text" size="small" v-else>启用</el-button>
          <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "UserPermissionTable",
  props: {
    data:{
      type: Array,
      default: function () {
        return [];
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
    remove(row){
      console.log(row);
      this.$emit('remove', row);
    },
    disabled(row){
      console.log(row);
      this.$emit('disabled', row);
    },
    enabled(row){
      console.log(row);
      this.$emit('enabled', row);
    },
    edit(row){
      console.log(row);
      this.$emit('edit', row);
    },
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

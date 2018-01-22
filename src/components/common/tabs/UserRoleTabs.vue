<template>
  <el-tabs tab-position="left"
           v-on:tab-click="tabHandle"
           v-model="index"
           v-if="true">
    <el-tab-pane label="基本户">
      <div>
        <user-table
          :users="user.baseUsers"
          class="height-offset-180 overflow-auto"/>
      </div>
    </el-tab-pane>
    <el-tab-pane label="管理户">
      <user-table
        :users="user.adminUsers"
        class="height-offset-180 overflow-auto"/>
    </el-tab-pane>
    <el-tab-pane label="法律户">
      <user-table
        :users="user.lawyerUsers"
        class="height-offset-180 overflow-auto"/>
    </el-tab-pane>
    <el-tab-pane label="数据户">
      <user-table
        :users="user.dataUsers"
        class="height-offset-180 overflow-auto"/>
    </el-tab-pane>
</el-tabs>
</template>
<script>
import UserTable from '../../common/table/UserTable';
export default {
  components: {
    UserTable
  },
  name: "UserRoleTabs",
  methods:{
    tabHandle(){
      this.$emit('tab-click',this.index);
    }
  },
  props: {
    user:{
      type: Object,
      default: function () {
        return {
          baseUsers:[],
          adminUsers:[],
          lawyerUsers:[],
          dataUsers:[],
        }
      }
    }
  },
  data() {
    return {
      index:0
    };
  },
  mounted() {}
};
</script>


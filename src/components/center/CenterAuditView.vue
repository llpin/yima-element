<template>
  <div class="overflow-auto height-offset-180">
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
      <el-table-column
        align="center"
        prop="enabled"
        label="是否已启用"
        :formatter="(row, col, value) => { return (value ? 'TRUE' : 'FALSE')}">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="audit(scope.row,true)">通过</el-button>
          <el-button type="text" @click="audit(scope.row,false)">不通过</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="totalPages"
      @current-change="pageChangeHandle">
    </el-pagination>
  </div>
</template>

<script>

  import $user from '../../api/user'

  export default {
    name: "center-audit-view",
    data(){
      return {
        users:[],
        totalPages: 1
      }
    },
    methods:{
      audit(row,en){
        var data = {
          id: row.id,
          enabled: en
        }
        $user.update(data).then(
          () => {
            this.getPage();
          }
        )
      },
      pageChangeHandle(page){
        this.getPage(page);
      },
      getPage(page){
        var self = this;
        var params = {
          'role.level': 'FIRST'
        }
        $user.getList(params, page).then(
          ({data}) => {
            if(data && data.data){
              self.users = data.data.content;
              console.log("users", self.users);
            }
          }
        )
      }
    },
    mounted(){
      this.getPage(0);
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <user-table :users="users" class="height-offset-180 overflow-auto w-100">
    </user-table>

    <el-pagination
      layout="prev, pager, next"
      :total="totalPages"
      @current-change="pageChangeHandle">
    </el-pagination>

  </div>
</template>

<script>
  import UserTable from '../table/UserTable'
  import $user from '../../../api/user'
  import $profile from '../../../api/profile'
  export default {
    components: {UserTable},
    name: "OrganizationView",
    props:{

    },
    methods:{
      pageChangeHandle(page){
        this.getPage(page);
      },
      getPage(page){
        var self = this;
        var id = $profile.getLoginInfo().id;
        $user.getOrganizations({},page - 1).then(
          ({data}) => {
            console.log(data);
            self.users = data.data.content;
            self.totalPages = data.data.totalPages;
          }
        )
      }
    },
    data() {
      return {
        users:[],
        totalPages: 1
      }
    },
    computed:{

    },
    mounted() {
      this.getPage(1);
    }
  }
</script>

<style scoped>

</style>

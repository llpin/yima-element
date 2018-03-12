<template>
  <div>
    <organization-table
      class="height-offset-180 overflow-auto w-100"
      :orgs="orgs"
      @audit="auditHandle"/>

    <el-pagination
      layout="prev, pager, next"
      :total="totalPages"
      @current-change="pageChangeHandle">
    </el-pagination>
  </div>
</template>

<script>
  import OrganizationTable from '../table/OrganizationTable'

  import $user from '../../../api/user'
  export default {
    components: {OrganizationTable},
    name: "organization-view",
    data(){
      return {
        orgs:[],
        totalPages: 1,
        currentPage: 1
      }
    },
    methods:{
      pageChangeHandle(page){
        this.getPage(page);
        this.currentPage = page;
      },
      getPage(page){
        var self = this;
        self.orgs = [];
        $user.getOrganizations({},page - 1).then(
          ({data}) => {
            console.log(data);
            self.orgs = data.data.content;
            self.totalPages = data.data.totalPages;
          }
        )
      },
      auditHandle(org, en){
        // this.getPage(this.currentPage);
        var self = this;
        var index = this.orgs.indexOf(org);
        $user.getOrganization(org.id).then( ({data}) => {
          self.$set(self.orgs, index, data.data);
        })
      }
    },
    mounted() {
      this.getPage(this.currentPage);
    }
  }
</script>

<style scoped>

</style>

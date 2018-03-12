<template>
    <div>
      <sell-contract-table
       :contracts="contracts"/>
      <el-pagination
        layout="prev, pager, next"
        :total="totalPages"
        @current-change="pageChangeHandle">
      </el-pagination>
    </div>
</template>

<script>

  import SellContractTable from "../table/SellContractTable";
  import $contract from '../../../api/contract'

  export default {
    components: {SellContractTable},
    name: "sell-contract-view",
    data(){
      return {
        contracts:[],
        currentContract:{},
        totalPages:1,
        currentPage:1
      }
    },
    methods:{
      getContractPage(page){
        var self = this;
        $contract.getContractPage(page - 1,{}).then(({data})=>{
          self.contracts = data.data.content;
          self.totalPages = data.data.totalPages;
          self.currentPage = page;
        })
      },
      pageChangeHandle(page){
        this.getContractPage(page);
      }
    },
    mounted(){
      this.getContractPage(this.currentPage);
    }
  }
</script>

<style scoped>

</style>

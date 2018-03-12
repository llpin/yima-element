<template>
    <div>
      <el-dialog
        title="销售合同"
        width="80%"
        :visible.sync="dialogVisible">
        <sell-contract-table
          class="vh-60 overflow-auto"
          :contracts="contracts"/>
        <el-pagination
          layout="prev, pager, next"
          :total="totalPages"
          @current-change="pageChangeHandle">
        </el-pagination>
        <div slot="footer" class="dialog-footer">
          <el-button
            @click="dialogClose">
            关 闭</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import SellContractTable from "../table/SellContractTable";
  import ProductCodeTable from "../table/ProductCodeTable";

  export default {
    components: {
      ProductCodeTable,
      SellContractTable},
    name: "sell-contract-dialog",
    props:{
      dialogVisible:{
        type:Boolean,
        default: function () {
          return false
        },
        required:true
      },
      totalPages:{
        type:Number,
        default:1,
        required:true
      },
      contracts:{
        type:Array,
        default:function () {
          return []
        },
        required:true
      }
    },
    methods: {
      pageChangeHandle(page) {
        this.$emit("current-change", page);
      },
      dialogClose(){
        this.$emit("dialog-close");
      }
    },
    data(){
      return {
        // currentPage: 1,
        // totalPages: 1,
        // dialogVisible: false,
        // contracts:[]
        // myDialogVisible: this.dialogVisible
      }
    }
  }
</script>

<style scoped>

</style>

<template>
    <div>
      <el-table :data="contracts">
        <el-table-column type="expand">
          <template slot-scope="props">
            <contract-product-code-table
             :data="props.row.productCodeList"/>
          </template>
        </el-table-column>
        <el-table-column
          type="index"
          width="50"
          label="序号">
        </el-table-column>
        <el-table-column
          align="center"
          label="合同编号">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.cno" placement="top">
              <span>{{ scope.row.cno ? scope.row.cno .slice(0,10) : '' }}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="销售用户名">
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="showDraftUser(scope.row.draftUser.username)">
              {{ scope.row.draftUser.username }}
            </el-button>
          </template>
        </el-table-column>
        <!--<el-table-column-->
          <!--align="center"-->
          <!--prop="title"-->
          <!--label="合同标题">-->
        <!--</el-table-column>-->
        <el-table-column
          align="center"
          prop="createTime"
          label="创建时间">
        </el-table-column>
        <el-table-column
          align="center"
          prop="state"
          label="状态">
        </el-table-column>
        <!--<el-table-column-->
          <!--align="center"-->
          <!--label="操作">-->
          <!--<template slot-scope="scope">-->
            <!--<el-button-->
              <!--type="text"-->
              <!--@click="showProducts(scope.row)">-->
              <!--查看销售商品-->
            <!--</el-button>-->
          <!--</template>-->
        <!--</el-table-column>-->
      </el-table>
    </div>
</template>

<script>
  import ContractProductCodeTable from "./ContractProductCodeTable";

  export default {
    components: {ContractProductCodeTable},
    props:{
      contracts:{
        type:Array,
        default:function () {
          return []
        },
        required:true
      }
    },
    name: "sell-contract-table",
    methods:{
      showDraftUser(username){

      },
      showProducts(contract){

      }
    }
  }
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

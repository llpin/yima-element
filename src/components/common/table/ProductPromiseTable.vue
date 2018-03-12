<template>
    <div>
      <el-table :data="promises">
        <el-table-column
          type="index"
          width="50"
          label="序号">
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="名称">
        </el-table-column>
        <el-table-column
          align="center"
          prop="theme"
          label="主题">
        </el-table-column>
        <el-table-column
          align="center"
          prop="content"
          label="内容">
        </el-table-column>
        <!--<el-table-column-->
          <!--align="center"-->
          <!--label="操作">-->
          <!--<template slot-scope="scope">-->
            <!--<el-button-->
              <!--type="text"-->
              <!--@click="deleteHandle(scope.row)">-->
              <!--删除-->
            <!--</el-button>-->
          <!--</template>-->
        <!--</el-table-column>-->
      </el-table>
    </div>
</template>

<script>

  export default {
    name: "product-promise-table",
    props:{
      promises:{
        type:Array,
        default:function () {
          return []
        }
      }
    },
    methods:{
      deleteHandle(row){
        this.$emit("delete", row);
      }
    }

  }
</script>

<style scoped>

</style>

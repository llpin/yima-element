<template>
  <div>
    <el-table :data="products">
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
        prop="function"
        label="用途">
      </el-table-column>
      <el-table-column
        align="center"
        prop="description"
        label="描述">
      </el-table-column>
      <el-table-column
        align="center"
        label="承诺">
        <template slot-scope="scope">
          <el-button
            type="text"
            @click="showPromise(scope.row.promise)">
            {{ scope.row.promise.name }}
          </el-button>
        </template>
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
    name: "product-table",
    props:{
      products:{
        type:Array,
        default:function () {
          return []
        }
      }
    },
    methods:{
      deleteHandle(row){
        this.$emit("delete", row);
      },
      showPromise(promise){
        this.$emit("show-promise", promise);
      }
    },
    data(){
      return {

      }
    }
  }
</script>

<style scoped>

</style>

<template>
    <div>
      <el-table :data="data">
        <el-table-column
          type="index"
          width="50"
          label="序号">
        </el-table-column>

        <el-table-column
          align="center"
          label="商品编码">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.code" placement="top">
              <span>{{ scope.row.code ? scope.row.code .slice(0,10) : '' }}</span>
            </el-tooltip>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="order.product.name"
          label="商品名称">
        </el-table-column>

        <el-table-column
          align="center"
          prop="order.product.function"
          label="商品功能">
        </el-table-column>

        <el-table-column
          align="center"
          prop="order.product.description"
          label="商品描述">
        </el-table-column>

        <el-table-column
          align="center"
          prop="order.factory.name"
          label="生产商">
        </el-table-column>

        <el-table-column
          align="center"
          prop="order.lawfirm.name"
          label="审核律所">
        </el-table-column>


      </el-table>
    </div>
</template>

<script>
  export default {
    name: "contract-product-code-table",
    props:{
      data:{
        type:Array,
        default:function () {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>

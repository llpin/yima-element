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
          label="编码">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.code" placement="top">
              <span>{{ scope.row.code ? scope.row.code .slice(0,10) : '' }}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="订单编号">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.order.code" placement="top">
              <span>{{ scope.row.order.code ? scope.row.order.code .slice(0,10) : '' }}</span>
            </el-tooltip>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="order.factory.name"
          label="企业名称">
        </el-table-column>
        <el-table-column
          align="center"
          label="企业签名">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.factoryVKSign" placement="top">
              <span>{{ scope.row.factoryVKSign ? scope.row.factoryVKSign .slice(0,10) : '' }}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="order.lawfirm.name"
          label="受理律所名称">
        </el-table-column>
        <el-table-column
          align="center"
          label="律所加密">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.lawfirmPKCode" placement="top">
              <span>{{ scope.row.lawfirmPKCode ? scope.row.lawfirmPKCode .slice(0,10) : '' }}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="stateEnum"
          label="编码"
          :formatter="stateEnumFormatter">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button
              @click="downloadCode(scope.row)"
              type="text"
              size="small">
              下载二维码
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
  export default {
    name: "product-code-table",
    props:{
      data:{
        type:Array,
        default:function () {
          return []
        }
      }
    },
    methods:{
      stateEnumFormatter(row, col, value){
        var ret = "未知";
        switch (value){
          case 'NORMAL':
            ret="未保真";
            break;
          case 'VERIFIED':
            ret="已保真";
            break;
          case 'FINISHED':
            ret="已售";
            break;
          default:
            break;
        }

        return ret;
      },
      downloadCode(row){
        this.$emit("download-code", row);
      }
    }
  }
</script>

<style scoped>

</style>

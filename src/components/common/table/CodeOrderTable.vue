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
          prop="product.name"
          label="产品">
        </el-table-column>
        <el-table-column
          align="center"
          label="订单编号">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.code" placement="top">
              <span>{{ scope.row.code ? scope.row.code .slice(0,10) : '' }}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="count"
          label="数量">
        </el-table-column>
        <el-table-column
          align="center"
          prop="factory.name"
          label="企业名称">
        </el-table-column>
        <!--<el-table-column-->
          <!--align="center"-->
          <!--prop="factorySign"-->
          <!--label="企业签名">-->
        <!--</el-table-column>-->
        <el-table-column
          align="center"
          label="企业签名">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.factorySign" placement="top">
              <span>{{ scope.row.factorySign ? scope.row.factorySign .slice(0,10) : '' }}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="lawfirm.name"
          label="受理律所名称">
        </el-table-column>
        <!--<el-table-column-->
          <!--align="center"-->
          <!--prop="lawfirmSign"-->
          <!--label="律所签名">-->
        <!--</el-table-column>-->

        <el-table-column
          align="center"
          label="律所签名">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.lawfirmSign" placement="top">
              <span>{{ scope.row.lawfirmSign ? scope.row.lawfirmSign .slice(0,10) : '' }}</span>
            </el-tooltip>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="stateEnum"
          label="状态"
          :formatter="stateEnumFormatter">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button
              @click="submitOrder(scope.row)"
              type="text"
              size="small"
              v-if="(scope.row.stateEnum === 'NORMAL') && submitEnable">
              提交
            </el-button>
            <!--<el-button-->
              <!--v-if="downloadEnable && (scope.row.stateEnum === 'SUCCESS')"-->
              <!--@click="downloadCode(scope.row)"-->
              <!--type="text"-->
              <!--size="small">-->
              <!--下载编码图片-->
            <!--</el-button>-->
            <!--<el-button-->
              <!--v-if="downloadEnable && (scope.row.stateEnum === 'SUCCESS')"-->
              <!--@click="downloadCode(scope.row)"-->
              <!--type="text"-->
              <!--size="small">-->
              <!--下载编码文件-->
            <!--</el-button>-->
            <el-button
              v-if="downloadEnable && (scope.row.stateEnum === 'SUCCESS')"
              @click="showCode(scope.row)"
              type="text"
              size="small">
              查看编码
            </el-button>
            <el-button
              v-if="auditEnable && (scope.row.stateEnum === 'AUDITING')"
              @click="auditOrder(scope.row, 'SUCCESS')"
              type="text"
              size="small">
              审核通过
            </el-button>
            <!--<el-button-->
              <!--v-if="auditEnable && (scope.row.stateEnum === 'AUDITING')"-->
              <!--@click="auditOrder(scope.row, 'REFUSED')"-->
              <!--type="text"-->
              <!--size="small">-->
              <!--审核拒绝-->
            <!--</el-button>-->
            <el-button
              v-if="transmitEnable && (scope.row.stateEnum === 'SUBMITTED')"
              @click="transmitOrder(scope.row)"
              type="text"
              size="small">
              转到律所
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
  export default {
    name: "code-order-table",
    props:{
      data:{
        type:Array,
        default:function () {
          return []
        }
      },
      submitEnable:{
        type: Boolean,
        default: function () {
          return false;
        }
      },
      downloadEnable:{
        type: Boolean,
        default: function () {
          return false
        }
      },
      auditEnable:{
        type: Boolean,
        default: function () {
          return false
        }
      },
      transmitEnable:{
        type: Boolean,
        default: function () {
          return false
        }
      }
    },
    methods:{
      submitOrder(row){
        this.$emit("submit-order", row);
      },
      downloadCode(row){
        this.$emit("download-code", row);
      },
      auditOrder(row, state){
        this.$emit("audit-order", row, state);
      },
      showCode(row){
        this.$emit("show-code", row)
      },
      stateEnumFormatter(row, col, value){
        var ret = "未知";
        switch (value){
          case 'NORMAL':
            ret="未提交";
            break;
          case 'SUBMITTED':
            ret="已提交";
            break;
          case 'AUDITING':
            ret="审核中";
            break;
          case 'REFUSED':
            ret='订单被拒绝';
            break;
          case 'SUCCESS':
            ret='已完成';
            break
          default:
            break;
        }

        return ret;
      },
      transmitOrder(row){
        this.$emit("transmit-order", row)
      }
    }
  }
</script>

<style scoped>

</style>

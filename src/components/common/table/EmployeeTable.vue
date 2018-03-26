<template>
    <div>
      <el-table :data="employees">
        <el-table-column
          type="index"
          width="50"
          label="序号">
        </el-table-column>
        <el-table-column
          align="center"
          prop="user.username"
          label="用户名" width="140">
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="职员名称">
        </el-table-column>
        <el-table-column
          align="center"
          prop="mobilePhone"
          label="手机">
        </el-table-column>
        <el-table-column
          align="center"
          prop="telephone"
          label="电话">
        </el-table-column>
        <el-table-column
          align="center"
          prop="employeeType.name"
          label="企业类型">
        </el-table-column>
        <el-table-column
          align="center"
          prop="user.enabled"
          label="启动状态"
          :formatter="(row, col, value) => { return (value ? 'TRUE' : 'FALSE')}">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
            <!--<el-button @click="showRep(scope.row)" type="text" size="small">法人</el-button>-->
            <el-button
              @click="audit(scope.row, true)"
              type="text"
              size="small"
              v-if="!scope.row.user.enabled">
              启动
            </el-button>
            <!--<el-button-->
              <!--@click="audit(scope.row, false)"-->
              <!--type="text"-->
              <!--size="small"-->
              <!--v-else>-->
              <!--禁用-->
            <!--</el-button>-->
            <el-button
              v-if="scope.row.employeeType.code === 'Assistant' "
              @click="sellerContract(scope.row)"
              type="text"
              size="small">
              查看销售合同
            </el-button>
          </template>
        </el-table-column>
        <!--<el-table-column align="center"	 label="操作">-->
        <!--<el-button type="text" @click="editBase">修改基本信息</el-button>-->
        <!--<el-buuton type="text" @click="addRole">添加角色</el-buuton>-->
        <!--</el-table-column>-->
      </el-table>
    </div>
</template>

<script>
  import $user from '../../../api/user'
  export default {
    name: "employee-table",
    props: {
      employees:{
        type:Array,
        default:function () {
          return []
        }
      },
      // sellerContractEnable:{
      //   type:Boolean,
      //   default: function () {
      //     return false
      //   }
      // }
    },
    data(){
      return {

      }
    },
    methods:{
      audit(row, en){
        var state;
        if(en)
          state='SUCCESS';
        else
          state='REFUSED';

        $user.audit(row.user.id, state).then( ({data}) => {
          if(data.code === '200')
            this.$emit("audit", row, en)
        })
      },
      sellerContract(row){
        this.$emit("seller-contract", row);
      }
    }
  }
</script>

<style scoped>

</style>

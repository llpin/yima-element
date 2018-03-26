<template>
  <div>
    <el-table :data="orgs">
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
        label="企业名称">
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
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        align="center"
        prop="postAddress"
        label="邮寄地址">
      </el-table-column>
      <el-table-column
        align="center"
        prop="organizationType.name"
        label="企业类型">
      </el-table-column>

      <el-table-column
        align="center"
        label="法人">
        <template slot-scope="scope">
          <el-button
            @click="showRep(scope.row)"
            type="text"
            size="small">
            {{scope.row.representative.name}}
          </el-button>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        prop="user.auditState"
        label="审核状态">
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
            审核通过
          </el-button>
          <!--<el-button-->
            <!--@click="audit(scope.row, false)"-->
            <!--type="text"-->
            <!--size="small"-->
            <!--v-else>-->
            <!--审核拒绝-->
          <!--</el-button>-->
        </template>
      </el-table-column>
      <!--<el-table-column align="center"	 label="操作">-->
      <!--<el-button type="text" @click="editBase">修改基本信息</el-button>-->
      <!--<el-buuton type="text" @click="addRole">添加角色</el-buuton>-->
      <!--</el-table-column>-->
    </el-table>

    <el-dialog title="企业法人" :visible.sync="repFormVisible">
      <el-form
        :model="repForm"
        label-width="80px">
        <el-form-item label="姓名" >
          {{repForm.name}}
        </el-form-item>
        <el-form-item label="性别" >
          {{repForm.genderType}}
        </el-form-item>
        <el-form-item label="邮件" >
          {{repForm.email}}
        </el-form-item>
        <el-form-item label="手机" >
          {{repForm.mobilePhone}}
        </el-form-item>
        <el-form-item label="地址" >
          {{repForm.address}}
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="repFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import $user from '../../../api/user'
  export default {
    name: "organization-table",
    props: {
      orgs:{
        type:Array,
        default:function () {
          return []
        }
      }
    },
    data(){
      return {
        repFormVisible: false,
        repForm:{

        }
      }
    },
    methods:{
      showRep(org){
        this.repForm = org.representative;
        this.repFormVisible = true;
      },
      audit(org, en){
        var state;
        if(en)
          state='SUCCESS';
        else
          state='REFUSED';

        $user.audit(org.user.id, state).then( ({data}) => {
          if(data.code === '200')
            this.$emit("audit", org, en)
        })

      }
    }
  }
</script>

<style scoped>

</style>

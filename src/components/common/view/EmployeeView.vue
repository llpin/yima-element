<template>
  <div>
    <el-button
      class="float-right mx-12"
      @click="addingFormVisible = true"
      >添加</el-button>
    <!--添加职员Dialog-->
    <el-dialog title="添加职员" :visible.sync="addingFormVisible">
      <el-form
        :model="addingForm"
        :rules="rules"
        ref="addingForm"
        label-width="100px">

        <el-form-item label="职员类型">
          <el-select
            prop="employeeTypeId"
            v-model="addingForm.employeeTypeId"
            placeholder="请选择职员类型">
            <el-option
              v-for="item in employeeTypeList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <form-input-item
          label="用户名"
          prop="user.username"
          v-model="addingForm.user.username">
        </form-input-item>
        <form-input-item
          type="password"
          label="密码"
          prop="user.password"
          v-model="addingForm.user.password">
        </form-input-item>
        <form-input-item
          type="password"
          label="业务密码"
          prop="user.doPassword"
         v-model="addingForm.user.doPassword">
        </form-input-item>

        <form-input-item
          label="真实姓名"
          prop="name"
          v-model="addingForm.name"/>

        <form-input-item
          label="联系电话"
          prop="phone"
          v-model="addingForm.phone"/>

        <form-input-item
          label="联系人手机"
          prop="telephone"
          v-model="addingForm.telephone"/>

        <form-input-item
          label="邮箱"
          prop="email"
          v-model="addingForm.email"/>

        <form-input-item
          label="工号"
          prop="innerId"
          v-model="addingForm.innerId"/>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button
          @click="addingFormVisible = false">
          取 消</el-button>
        <el-button
          type="primary"
          @click="submitForm('addingForm')">
          确 定</el-button>
      </div>
    </el-dialog>

    <employee-table
      class="height-offset-180 overflow-auto w-100"
      :employees="employees"
      @audit="auditHandle"
      @seller-contract="sellerContractHandle"/>

    <el-pagination
      layout="prev, pager, next"
      :total="totalPages"
      @current-change="pageChangeHandle">
    </el-pagination>

    <sell-contract-dialog
       :contracts="contracts"
       :total-pages="contractTotalPages"
       :dialog-visible="contractDialogVisible"
        @current-change="contractPageChangeHandle"
        @dialog-close="contractDialogClose"/>
  </div>
</template>

<script>
  import EmployeeTable from '../table/EmployeeTable'

  import FormInputItem from '../../common/item/FormInputItem'

  import $user from '../../../api/user'
  import $profile from  '../../../api/profile'
  import $type from  '../../../api/ServerType';
  import SellContractDialog from "../dialog/SellContractDialog";
  import $contract from '../../../api/contract'

  export default {

    name: "EmployeeView",
    components: {
      SellContractDialog,
      EmployeeTable,
      FormInputItem
    },
    props: {},
    methods: {
      pageChangeHandle(page){
        this.getPage(page);
      },
      getPage(page){
        var self = this;
        // self.employees = [];
        $user.getEmployees(self.orgId,page - 1).then(
          ({data}) => {
            console.log(data);
            self.employees = data.data.content;
            self.totalPages = data.data.totalPages;
            self.currentPage = page;
          }
        )
      },
      submitForm(formName){
        this.addingFormVisible = false;
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            $user.addEmployee(self.addingForm).then(({ data }) => {
              console.log(data);
              self.getPage(self.currentPage);
            });
          } else {
            return false;
          }
        });
      },
      auditHandle(row, en){
        var self = this;
        var index = this.employees.indexOf(row);
        $user.getEmployee(row.id).then( ({data}) => {
          self.$set(self.employees, index, data.data);
        })
      },
      getContractPage(page){
        var self = this;
        self.contractCurrentPage = page;
        var parameters = {
          'draftUser.id': self.currentEmployee.user.id
      }
        $contract.getContractPage(page - 1,parameters).then(({data})=>{
          console.log(data);
          self.contracts = data.data.content;
          self.contractTotalPages = data.data.totalPages;
        })
      },
      sellerContractHandle(row){
        var self = this;
        self.currentEmployee = row;
        self.contractCurrentPage = 1;
        self.getContractPage(self.contractCurrentPage);
        self.contractDialogVisible = true;
      },
      contractPageChangeHandle(page){
        this.getContractPage(page);
      },
      contractDialogClose(){
        this.contractDialogVisible = false;
      }
    },
    data() {
      return {
        employees:[],
        totalPages: 1,
        currentPage: 1,
        orgId:$profile.getLoginInfo().organization.id,

        // dialogTableVisible: false,
        addingFormVisible: false,
        employeeTypeList:[],
        addingForm: {
          employeeTypeId:null,
          name:null,
          genderType:null,
          email:null,
          telephone:null,
          phone:null,
          innerId:null,
          user:{
            // id:null,
            username:null,
            password:null,
            doPassword:null,
            platformMainTypeEnum:"EMPLOYEE",
            // enabled:null,
            // auditState:null,
            parentId:$profile.getLoginInfo().organization.id,
            // auditUserId:null,
          }
        },
        rules:{
          'employeeTypeId': [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          'user.username': [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          'user.password': [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          'email': [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          'telephone': [
            { required: true, message: '不能为空', trigger: 'blur' }
          ]
        },
        currentEmployee:{},
        contracts:[],
        contractTotalPages:1,
        contractDialogVisible:false,
        contractCurrentPage:1
      }
    },
    mounted() {
      var self = this;
      self.getPage(this.currentPage);

      var params = {
        'organizationType.id': $profile.getLoginInfo().organization.organizationType.id
      }
      $type.getEmployeeTypeList(params).then( ({ data }) => {
        self.employeeTypeList = data.data;
      } )
      // this.employeeTypeList
    }
  }
</script>

<style scoped>
  .el-select {
    display: inline;
  }
</style>

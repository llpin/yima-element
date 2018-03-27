<!--企业注册-->

<template>
  <div>
    <el-col :span="8" :offset="8">
      <el-row v-show="active === 0">
        <org-reg-info :form="form"
                      :rules="orgRules"
                      ref="orgInfo"
                      form-ref="orgInfoForm"/>
      </el-row>
      <el-row v-show="active === 1">
        <org-reg-rep
          :form="form.representative"
          :rules="indRules"
          reg="orgRep"
          form-ref="orgRepForm"/>
      </el-row>
      <el-row v-show="active === 2">
        <org-reg-user
          :form="form.user"
          :rules="userRules"
          reg="orgUser"
          form-ref="orgUserForm"/>
      </el-row>
      <div class="my-12">
        <el-steps :active="active"
                  finish-status="success"
                  align-center>
          <el-step title=""></el-step>
          <el-step title=""></el-step>
          <el-step title=""></el-step>
        </el-steps>
        <div class="mt-24">
          <el-button type="text" @click="pre" class="float-left" v-if="active <= 2 && active >= 1">上一步</el-button>
          <el-button type="text" @click="next" class="float-right" v-if="active < 2">下一步</el-button>
          <el-button @click="submit" v-if="active === 2">提交</el-button>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
  import OrgRegInfo from "./OrgRegInfo";
  import OrgRegRep from "./OrgRegRep";
  import OrgRegUser from "./OrgRegUser";

  export default {
    components: {
      OrgRegUser,
      OrgRegRep,
      OrgRegInfo
    },
    name: "organization-register",
    data() {
      return {
        form: {
          organizationTypeId: null,
          name: null,
          description: null,
          email: null,
          mobilePhone: null,
          telephone: null,
          address: null,
          postAddress: null,
          promise: null,
          representative: {
            individualTypeEnum: null,
            name: null,
            genderType: null,
            email: null,
            mobilePhone: null,
            telephone: null,
            address: null,
            postAddress: null,
            idNumber: null,
            frontIDImageId: null,
            backIDImageId: null
          },
          user: {
            username: null,
            password: null,
            platformMainTypeEnum: null,
            doPassword: null
          }
        },
        orgRules: {
          'organizationTypeId': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'name': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'description': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'email': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'mobilePhone': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'telephone': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'address': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'postAddress': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'promise': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ]
        },
        indRules: {
          'name': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'genderType': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'email': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'mobilePhone': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'telephone': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'address': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'postAddress': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'idNumber': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'frontIDImageId': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'backIDImageId': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ]
        },
        userRules: {
          'username': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'password': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'platformMainTypeEnum': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'doPassword': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ]
        },
        active: 0,
      }
    },
    methods: {
      next() {
        var self = this;
        switch (this.active) {
          case 0:
            self.validateInfo();
            break;
          case 1:
            self.validateRep();
            break;
          default:
            break;
        }
      },
      increaseActive() {
        if (this.active <= 2)
          this.active++;
        console.log("active", this.active);
      },
      pre() {
        if (this.active <= 2 && this.active >= 1)
          this.active--;
      },
      validateForm(refName, formName, success, error) {
        this.$refs[refName].$refs[formName].validate((valid) => {
          console.log("valid", valid);
          if (valid) {
            success();
          } else {
            return error();
          }
        });
      },
      validateInfo() {
        var self = this;
        self.validateForm("orgInfo", "orgInfoForm",self.increaseActive,()=>{});
      },
      validateRep() {
        var self = this;
        self.validateForm("orgRep", "orgRepForm",self.increaseActive,()=>{});
      },
      submit() {
        var self = this;
        self.validateForm("orgUser", "orgUserForm",()=>{},()=>{});
      }
    }
  }
</script>

<style scoped>

</style>

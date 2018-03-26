<template>
  <div>
    <el-row>
      <org-reg-info :form="form" :rules="orgRules"/>
    </el-row>
    <el-row>
      <div>
        row2
      </div>
    </el-row>
    <el-row>
      <div>
        row3
      </div>
    </el-row>
  </div>
</template>

<script>
  import OrgRegInfo from "../OrgRegInfo";

  export default {
    components: {OrgRegInfo},
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
          promise: null
        },
        orgRules: {
          'form.organizationTypeId': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'form.name': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'form.description': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'form.email': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'form.mobilePhone': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'form.telephone': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'form.address': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'form.postAddress': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'form.promise': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ]
        },
      }
    }
  }
</script>

<style scoped>

</style>

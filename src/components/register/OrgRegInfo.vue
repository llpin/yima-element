<template>
    <div>
      <el-col :span="8" :offset="8">
        <h3 class="text-left">企业信息</h3>
        <el-form :model="orgForm" :rules="rules" ref="orgForm" label-width="100px">
          <el-form-item
            label="企业类型"
            prop="organizationTypeId">
            <el-select class="display-inline"
              v-model="orgForm.org.organizationTypeId"
              placeholder="请选企业类型">
              <el-option
                v-for="item in organizationTypeList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>

          <form-input-item
            label="企业名称"
            prop="org.name"
            v-model="orgForm.org.name"/>

          <form-input-item
            label="联系电话"
            prop="org.phone"
            v-model="orgForm.org.phone"/>

          <form-input-item
            label="联系人手机"
            prop="org.telephone"
            v-model="orgForm.org.telephone"/>

          <form-input-item
            label="邮箱"
            prop="org.email"
            v-model="orgForm.org.email"/>

          <form-input-item
            label="地址"
            prop="org.address"
            v-model="orgForm.org.address"/>

          <form-input-item
            label="邮寄地址"
            prop="org.postAddress"
            v-model="orgForm.org.postAddress"/>

          <form-input-item
            label="简介"
            prop="org.description"
            v-model="orgForm.org.description"/>

          <form-input-item
            label="承诺"
            prop="org.promise"
            type="textarea"
            v-model="orgForm.org.promise"/>

        </el-form>
        <span
          class="float-left">
          1/3
        </span>
        <el-button
          type="text"
          class="float-right"
          @click="submitForm('orgForm')">
          下一步
        </el-button>
      </el-col>
    </div>
</template>

<script>
  import FormInputItem from '../common/item/FormInputItem'
  import $ServerType from '../../api/ServerType'
  export default {
    name: "org-reg-info",
    components:{
      FormInputItem
    },
    methods: {
      submitForm(formName){
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            self.$emit('submit',self.orgForm);
            // self.$store.commit('userOrganizationTypeIdSet', self.orgForm.organizationTypeId);
            self.$store.commit('orgBaseSet', self.orgForm.org);
            self.$router.push('/register/organization/representative');
          } else {
            return false;
          }
        });
      }
    },
    data() {
      return {
        organizationTypeList:[],
        orgForm:{

          org:{
            organizationTypeId:null,
            name:null,
            description:null,
            email:null,
            telephone:null,
            phone:null,
            address:null,
            postAddress:null,
            promise:null
          }
        },
        rules:{
          'org.organizationTypeId': [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          'org.name': [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          'org.description': [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          'org.email': [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          'org.telephone': [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          'org.phone': [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          'org.address': [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          'org.postAddress': [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          'org.promise': [
            { required: true, message: '不能为空', trigger: 'blur' }
          ]
        },


      }
    },
    mounted(){
      var self = this;
      $ServerType.getOrganizationTypeList().then( ({data}) => {
        self.organizationTypeList = data.data;
        console.log(self.organizationTypeList);
      })
    }
  }
</script>

<style scoped>

</style>

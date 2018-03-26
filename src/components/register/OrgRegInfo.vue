<template>
    <div>
      <el-col :span="8" :offset="8">
        <h3 class="text-left">企业信息</h3>
        <el-form :model="form" :rules="rules" ref="form" label-width="100px">
          <el-form-item
            label="企业类型"
            prop="organizationTypeId">
            <el-select class="display-inline"
              v-model="form.organizationTypeId"
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
            prop="name"
            v-model="form.name"/>

          <form-input-item
            label="联系电话"
            prop="telephone"
            v-model="form.telephone"/>

          <form-input-item
            label="联系人手机"
            prop="mobilePhone"
            v-model="form.mobilePhone"/>

          <form-input-item
            label="邮箱"
            prop="email"
            v-model="form.email"/>

          <form-input-item
            label="地址"
            prop="address"
            v-model="form.address"/>

          <form-input-item
            label="邮寄地址"
            prop="postAddress"
            v-model="form.postAddress"/>

          <form-input-item
            label="简介"
            prop="description"
            v-model="form.description"/>

          <form-input-item
            label="承诺"
            prop="promise"
            type="textarea"
            v-model="form.promise"/>

        </el-form>
        <span
          class="float-left">
          1/3
        </span>
        <el-button
          type="text"
          class="float-right"
          @click="submitForm('form')">
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
    props:{
      form:{
        type:Object,
        default: function () {
          return {};
        },
        required:true
      },
      rules:{
        type:Object,
        default:function () {
          return {};
        },
        required:true
      }
    },
    components:{
      FormInputItem
    },
    methods: {
      submitForm(formName){
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            self.$emit('submit',self.form);
            // self.$store.commit('userOrganizationTypeIdSet', self.form.organizationTypeId);
            self.$store.commit('orgBaseSet', self.form.org);
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
        // form:{
        //
        //   org:{
        //     organizationTypeId:null,
        //     name:null,
        //     description:null,
        //     email:null,
        //     mobilePhone:null,
        //     telephone:null,
        //     address:null,
        //     postAddress:null,
        //     promise:null
        //   }
        // },
        // rules:{
        //   'org.organizationTypeId': [
        //     { required: true, message: '不能为空', trigger: 'blur' }
        //   ],
        //   'org.name': [
        //     { required: true, message: '不能为空', trigger: 'blur' }
        //   ],
        //   'org.description': [
        //     { required: true, message: '不能为空', trigger: 'blur' }
        //   ],
        //   'org.email': [
        //     { required: true, message: '不能为空', trigger: 'blur' }
        //   ],
        //   'org.mobilePhone': [
        //     { required: true, message: '不能为空', trigger: 'blur' }
        //   ],
        //   'org.telephone': [
        //     { required: true, message: '不能为空', trigger: 'blur' }
        //   ],
        //   'org.address': [
        //     { required: true, message: '不能为空', trigger: 'blur' }
        //   ],
        //   'org.postAddress': [
        //     { required: true, message: '不能为空', trigger: 'blur' }
        //   ],
        //   'org.promise': [
        //     { required: true, message: '不能为空', trigger: 'blur' }
        //   ]
        // },


      }
    },
    mounted(){
      var self = this;
      $ServerType.getOrganizationTypeList().then( ({data}) => {
        if(data.code === "200"){
          self.organizationTypeList = data.data;
          console.log(self.organizationTypeList);
        }else {
          self.$message(data.message);
        }
      })
    }
  }
</script>

<style scoped>

</style>

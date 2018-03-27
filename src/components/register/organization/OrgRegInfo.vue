<!--企业基本信息-->
<template>
  <div>
    <h3 class="text-left">企业基本信息</h3>
    <el-form :model="form" :rules="rules" :ref="formRef" label-width="100px">
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
        type="textarea"
        v-model="form.description"/>

      <form-input-item
        label="承诺"
        prop="promise"
        type="textarea"
        v-model="form.promise"/>
    </el-form>
  </div>
</template>

<script>
  import FormInputItem from '../../common/item/FormInputItem'
  import $ServerType from '../../../api/ServerType'

  export default {
    name: "org-reg-info",
    props: {
      form: {
        type: Object,
        default: function () {
          return {};
        },
        required: true
      },
      rules: {
        type: Object,
        default: function () {
          return {};
        },
        required: true
      },
      formRef:{
        type:String,
        required:true
      }
    },
    components: {
      FormInputItem
    },
    methods: {

    },
    data() {
      return {
        organizationTypeList: [],
      }
    },
    mounted() {
      var self = this;
      $ServerType.getOrganizationTypeList().then(({data}) => {
        if (data.code === "200") {
          self.organizationTypeList = data.data;
          console.log(self.organizationTypeList);
        } else {
          self.$message(data.message);
        }
      })
    }
  }
</script>

<style scoped>

</style>

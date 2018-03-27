<template>
  <div>
    <el-form :model="form" :rules="rules" :ref="formRef" label-width="100px">
      <form-input-item
        label="姓名"
        prop="name"
        v-model="form.name"/>

      <el-form-item
        label="性别"
        prop="genderType">
        <el-select class="display-inline"
                   v-model="form.genderType"
                   placeholder="请选企业类型">
          <el-option
            v-for="item in genderTypeList"
            :key="item.code"
            :label="item.name"
            :value="item.code">
          </el-option>
        </el-select>
      </el-form-item>

      <form-input-item
        label="邮箱"
        prop="email"
        v-model="form.email"/>

      <form-input-item
        label="手机"
        prop="mobilePhone"
        v-model="form.mobilePhone"/>

      <form-input-item
        label="居住地址"
        prop="address"
        v-model="form.address"/>

      <form-input-item
        label="邮寄地址"
        prop="postAddress"
        v-model="form.postAddress"/>

      <form-input-item
        label="身份证号"
        prop="idNumber"
        v-model="form.idNumber"/>

      <avatar-upload
        class="my-12"
        label="身份证正面照"
        :action="fileAction"
        :on-success="frontImgAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :src="frontIDImage"
      />

      <avatar-upload
        class="my-12"
        label="身份证背面照"
        :action="fileAction"
        :on-success="backImgAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :src="backIDImage"
      />
    </el-form>
  </div>
</template>

<script>
  import FormInputItem from '../common/item/FormInputItem'
  import AvatarUpload from '../common/AvatarUpload'

  import $file from '../../api/fileResource'

  export default {
    name: "reg-individual",
    props: {
      individualType: {
        type: String,
        required: true
      },
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
      formRef: {
        type: String,
        default: "form"
      }
    },
    components: {
      FormInputItem,
      AvatarUpload
    },
    methods: {
      frontImgAvatarSuccess(res, file) {
        // this.form.frontIDImage = $profile.getFileHost() + res.data.url;

        this.frontIDImage = $file.getDownloadFileSrc(res.data.url);

        this.form.frontIDImageId = res.data.id;
        console.log(res, file);
      },
      backImgAvatarSuccess(res, file) {
        // this.form.backIDImage = $profile.getFileHost() + res.data.url;
        this.backIDImage = $file.getDownloadFileSrc(res.data.url);
        this.form.backIDImageId = res.data.id;
        console.log(res, file);
      },
      beforeAvatarUpload(file) {
        console.log(file);
        return true;
      }
    },
    data() {
      return {
        fileAction: $file.getFileUploadAction(),
        genderTypeList: [
          {
            code: 'MALE',
            name: '男'
          },
          {
            code: 'FEMALE',
            name: '女'
          }
        ],
        backIDImage: null,
        frontIDImage: null
      }
    },
    mounted: function () {
      // noinspection JSValidateTypes
      this.form.individualTypeEnum = this.individualType;
    }
  }
</script>

<style scoped>

</style>

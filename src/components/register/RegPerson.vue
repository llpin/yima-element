<template>
  <div>

    <el-form :model="personForm" :rules="rules" ref="personForm" label-width="100px">
      <form-input-item
        label="姓名"
        prop="person.name"
        v-model="personForm.person.name"/>

      <el-form-item
        label="性别"
        prop="person.genderType">
        <el-select class="display-inline"
                   v-model="personForm.person.genderType"
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
        prop="person.email"
        v-model="personForm.person.email"/>

      <form-input-item
        label="手机"
        prop="person.mobilePhone"
        v-model="personForm.person.mobilePhone"/>

      <form-input-item
        label="居住地址"
        prop="person.address"
        v-model="personForm.person.address"/>

      <form-input-item
        label="邮寄地址"
        prop="person.postAddress"
        v-model="personForm.person.postAddress"/>

      <form-input-item
        label="身份证号"
        prop="person.idNumber"
        v-model="personForm.person.idNumber"/>

      <avatar-upload
        class="my-12"
        label="身份证正面照"
        :action="fileAction"
        :on-success="frontImgAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :src="personForm.frontIDImage"
      />

      <avatar-upload
        class="my-12"
        label="身份证背面照"
        :action="fileAction"
        :on-success="backImgAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :src="personForm.backIDImage"
      />

    </el-form>
    <el-button class="w-100" v-if="last"
               @click="submitForm('personForm')">
      提交
    </el-button>
    <div v-else>
      <span
         class="float-left">
        {{ pageIndex }}
      </span>
      <el-button
        type="text"
        class="float-right"
        @click="submitForm('personForm')">
        下一步
      </el-button>
    </div>
  </div>
</template>

<script>
  import FormInputItem from '../common/item/FormInputItem'
  import AvatarUpload from '../common/AvatarUpload'

  import $file from '../../api/fileResource'
  import $profile from '../../api/profile'

  export default {
    name: "reg-person",
    props: {
      individualType: {
        type: String,
        required: true
      },
      last: {
        type: Boolean,
        required: false,
        default: false
      },
      pageIndex:{
        type: String,
        required: false
      }
    },
    components: {
      FormInputItem,
      AvatarUpload
    },
    methods: {
      submitForm(formName) {
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            self.$emit('submit', self.personForm);
          } else {
            return false;
          }
        });
      },
      frontImgAvatarSuccess(res, file) {
        // this.personForm.frontIDImage = $profile.getFileHost() + res.data.url;

        this.personForm.frontIDImage = $file.getDownloadFileSrc(res.data.url);

        this.personForm.person.frontIDImageId = res.data.id;
        console.log(res, file);
      },
      backImgAvatarSuccess(res, file) {
        // this.personForm.backIDImage = $profile.getFileHost() + res.data.url;
        this.personForm.backIDImage = $file.getDownloadFileSrc(res.data.url);
        this.personForm.person.backIDImageId = res.data.id;
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
        personForm: {
          frontIDImage: null,
          backIDImage: null,
          person: {
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
          }
        },
        rules: {
          'person.name': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'person.genderType': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'person.email': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'person.mobilePhone': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'person.telephone': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'person.address': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'person.postAddress': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
          'person.idNumber': [
            {required: true, message: '不能为空', trigger: 'blur'}
          ]
        },

      }
    },
    mounted: function () {
      // noinspection JSValidateTypes
      this.personForm.person.individualTypeEnum = this.individualType;
    }
  }
</script>

<style scoped>

</style>

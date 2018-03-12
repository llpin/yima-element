<template>
    <div>
      <span class="w-100 text-left float-left">
        {{ label }}
      </span>
      <el-upload
        class="avatar-uploader"
        :action="action"
        :show-file-list="false"
        :on-success="onSuccess"
        :before-upload="beforeUpload">
        <img v-if="src" :src="src" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
</template>

<script>
  export default {
    name: "avatar-upload",
    props:[
      'label',
      'action',
      'src',
      'onSuccess',
      'beforeUpload'
    ]

  }
</script>

<style scoped>
  .avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader :hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>

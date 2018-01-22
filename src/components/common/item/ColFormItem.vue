<template>
  <div>
    <el-col :span="numSpan">
      <el-form-item :label="strLabel" >
        <span>{{ strText }}</span>
      </el-form-item>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: "ColFormItem",
    props:{
      span:{
        type:Number,
        default:12
      },
      label:{
        type:String,
        default:""
      },
      text:{
        type:String,
        default:""
      }
    },
    data(){
      return {
        strText: this.text,
        numSpan: this.span,
        strLabel: this.label
      }
    }
  }
</script>

<style scoped>

</style>

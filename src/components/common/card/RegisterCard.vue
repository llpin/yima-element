<template>
    <div>
      <a href="javascript:;" @click="clickHandle">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 14px;">
            <span>{{ spanText }}</span>
          </div>
        </el-card>
      </a>
    </div>
</template>

<script>
  export default {
    name: "RegisterCard",
    props:{
      text:{
        type:String,
        default:""
      }
    },
    data(){
      return{
        spanText: this.text,
      }
    },
    methods:{
      clickHandle(){
        this.$emit('click');
      }
    }
  }
</script>

<style scoped>

</style>

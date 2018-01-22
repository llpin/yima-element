<template>
    <div>
      <a href="javascript:;" @click="clickHandle">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 14px;">
            <span>{{ objIndustry.name }}</span>
          </div>
        </el-card>
      </a>
    </div>
</template>

<script>
  export default {
    name: "IndustryCard",
    props:{
      industry:{
        type: Object,
        default: function () {
          return {
            id: 0,
            code: "",
            name: "",
            description: ""
          }
        }
      }
    },
    data(){
      return{
        objIndustry: this.industry
      }
    },
    methods:{
      clickHandle(){
        var self = this;
        this.$emit('click', self.objIndustry);
      }
    }
  }
</script>

<style scoped>

</style>

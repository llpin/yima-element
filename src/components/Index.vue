<template>
  <el-row>
    <el-col :span="4" v-for="item in industries" :key="item.id">
      <industry-card
        :industry="item"
        @click="industryClickHandle"/>
    </el-col>
  </el-row>
</template>

<script>
  import IndustryCard from './common/card/IndustryCard'
  import $profile from '../api/profile'
  import $industry from '../api/industry'

  export default {
    name: "Index",
    components:{
      IndustryCard
    },
    data() {
      return {
        industries:[]
      };
    },
    methods:{
      industryClickHandle(industry){
        console.log(industry);
        $profile.setIndustryInfo(industry);
        this.$store.commit('industryInfoSet', industry);
        this.$router.push(`${industry.code.toLowerCase()}`);
      }
    },
    mounted(){
      var self = this;

      $industry.getList().then(({data})=>{
        if(data && data.data){
          self.industries = data.data;
        }
      })
    }
  }
</script>

<style scoped>

</style>

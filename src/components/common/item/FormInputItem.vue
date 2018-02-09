<template>
  <div>
    <el-form-item
      :label="label"
      :prop="prop"
      :type="type">
      <el-input
        :value="value"
        @input="inputHandle"
        :placeholder="placeholder"
        >
      </el-input>
    </el-form-item>
  </div>
</template>

<script>
  export default {
    name: "form-input-item",
    props:[
      'label',
      'prop',
      'value',
      'type',
      'placeholder'
    ],
    methods:{
      inputHandle(value){
        // console.log("event", value);
        this.$emit("input", value);
      }
    },
    data(){
      return{
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <el-form-item
      :label="label"
      :prop="prop">
      <el-input
        :value="value"
        @input="inputHandle"
        :placeholder="placeholder"
        :type="type"
        >
      </el-input>
    </el-form-item>
  </div>
</template>

<script>
  export default {
    name: "productAddingForm-input-item",
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

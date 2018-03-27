<!--企业法人信息-->
<template>
  <div style="margin-top: 120px">
    <h3 class="text-left">法人代表信息</h3>
    <reg-individual
      individual-type="REPRESENTATIVE"
      :form="repForm"
      :form-ref="formRef"
      :rules="repRules"/>
  </div>
</template>

<script>
  import RegIndividual from '../RegIndividual'

  export default {
    name: "org-reg-rep",
    components: {
      RegIndividual
    },
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
    data() {
      return {
        repForm: this.form,
        repRules: this.rules
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>

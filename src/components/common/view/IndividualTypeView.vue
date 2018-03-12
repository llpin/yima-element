<template>
  <individual-type-table
    :data="types"/>
</template>

<script>
  import IndividualTypeTable from '../table/IndividualTypeTable'
  import $ServerType from '../../../api/ServerType'
  export default {
    components: {IndividualTypeTable},
    name: "individual-type-view",
    data(){
      return {
        types:[]
      }
    },
    mounted(){
      var self = this;
      $ServerType.getIndividualTypeList().then( ({data}) => {
        self.types = data.data;
      })
    }
  }
</script>

<style scoped>

</style>

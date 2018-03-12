<template>
    <div>
      <organization-type-table
        :data="types"/>
    </div>
</template>

<script>
  import OrganizationTypeTable from '../table/OrganizationTypeTable'
  import $ServerType from '../../../api/ServerType'
  export default {
    components: {OrganizationTypeTable},
    name: "organization-type-view",
    data(){
      return {
        types:[]
      }
    },
    mounted(){
      var self = this;
      $ServerType.getOrganizationTypeList().then( ({data}) => {
        self.types = data.data;
      })
    }
  }
</script>

<style scoped>

</style>

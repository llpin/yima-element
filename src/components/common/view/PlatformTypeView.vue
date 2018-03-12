<template>
    <div>
      <platform-type-table
        :data="types"/>
    </div>
</template>

<script>
  import PlatformTypeTable from '../table/PlatformTypeTable'
  import $ServerType from '../../../api/ServerType'
  export default {
    components: {PlatformTypeTable},
    name: "platform-type-view",
    data(){
      return {
        types:[]
      }
    },
    mounted(){
      var self = this;
      $ServerType.getPlatformTypeList().then( ({data}) => {
        self.types = data.data;
      })
    }
  }
</script>

<style scoped>

</style>

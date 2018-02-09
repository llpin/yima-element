<template>
  <div>
    <user-adding-form
      :industry-code="industryCode"
      :parent-id="parentId"
      :level="roleLevel"/>
  </div>
</template>

<script>
  import UserAddingForm from '../form/UserAddingForm'
  import $profile from '../../../api/profile'
  import $util from '../../../api/util'

  export default {

    name: "UserAddingView",
    components: {
      UserAddingForm
    },
    props: {},
    methods: {},
    data() {
      return {
        industryCode: $profile.getLoginInfo().industryEntity.code,
        parentId: $profile.getLoginInfo().id,
        roleLevel: $util.getNextRoleLevel($profile.getLoginInfo().role.level)
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .el-select {
    display: inline;
  }
</style>

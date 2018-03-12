<template>
  <div>

    <user-role-table
      :data="roles"
      @edit="showRoleEditingDialog"
      class="height-offset-180 overflow-auto w-100"/>

    <user-role-adding-dialog
      :visible="visible.roleAdding"
      @close="closeRoleAddingDialog"
      @ok="addRole"
      @cancel="closeRoleAddingDialog"/>

    <user-role-editing-dialog
      :visible="visible.roleEditing"
      :formData="roleForm"
      @close="closeRoleEditingDialog"
      @ok="editRole"
      @cancel="closeRoleEditingDialog"/>

  </div>
</template>

<script>
  //components start
  import UserPermissionTable from '../table/UserPermissionTable'
  import UserRoleTable from '../table/UserRoleTable'
  import UserPermissionAddingDialog from '../dialog/UserPermissionAddingDialog'
  import UserRoleAddingDialog from '../dialog/UserRoleAddingDialog'
  import UserRoleEditingDialog from '../dialog/UserRoleEditingDialog'
  import UserPermissionEditingDialog from '../dialog/UserPermissionEditingDialog'
  //components end

  //api start
  import $role from '../../../api/role'
  import $permission from '../../../api/permission'
  //api end
  export default {
    name: "RoleView",
    components:{
      UserRoleTable,
      UserPermissionTable,
      UserPermissionAddingDialog,
      UserRoleAddingDialog,
      UserRoleEditingDialog,
      UserPermissionEditingDialog
    },
    data(){
      return {
        roles:[],
        permissions:[],
        visible:{
          roleAdding: false,
          roleEditing: false,
        },
        roleForm:{
          description:""
        }
      }
    },
    methods:{
      //adding (暂时不用)
      addRole(form){
        this.visible.roleAdding = false;
        console.log("centerrole", form);

      },
      showRoleAddingDialog(){
        this.visible.roleAdding = true;
      },

      closeRoleAddingDialog(dialog){
        console.log(dialog);
        this.visible.roleAdding = false;
      },

      /**
       * editing
       * */
      //修改角色
      editRole(form){
        this.visible.roleEditing = false;
        console.log("centerrole", form);
        $role.putDescriptionWithCenter(this.productAddingForm.id,this.productAddingForm.description).then(
          ()=>{
            this.getRoles();
          }
        )
      },

      showRoleEditingDialog(row){
        this.visible.roleEditing = true;
        this.roleForm = row;
      },

      closeRoleEditingDialog(dialog){
        console.log(dialog);
        this.visible.roleEditing = false;
      },

      //  获取角色
      getRoles(params){
        var self = this;
        $role.getList(params).then(({data})=>{
          console.log(data);
          self.roles = data.data;
        });
      },

      // //  角色操作
      // disableRole(row){
      //   var self = this;
      //   $role.putDisableWithCenter(row.id).then(()=>{
      //     self.getRoles();
      //   })
      // },
      // enableRole(row){
      //   var self = this;
      //   $role.putEnableWithCenter(row.id).then(()=>{
      //     self.getRoles();
      //   })
      // }

    },
    mounted(){
      this.getRoles();
    }
  }
</script>

<style scoped>

</style>

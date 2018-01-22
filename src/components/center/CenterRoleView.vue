<template>
  <div>
    <el-tabs v-if="true">
      <el-tab-pane
        label="角色">
        <!--<el-button @click="showRoleAddingDialog" size="small" class="float-right m-12">添加</el-button>-->
        <user-role-table
          :data="roles"
          @disabled="disableRole"
          @enabled="enableRole"
          @edit="showRoleEditingDialog"
          class="height-offset-180 overflow-auto w-100"/>
      </el-tab-pane>
      <el-tab-pane
        label="权限">
        <!--<el-button @click="showPermissionAddingDialog" size="small" class="float-right m-12">添加</el-button>-->
        <user-permission-table
          :data="permissions"
          @disabled="disablePermission"
          @enabled="enablePermission"
          @edit="showPermissionEditingDialog"
          class="height-offset-180 overflow-auto w-100"/>
      </el-tab-pane>
    </el-tabs>
    <user-role-adding-dialog
      :visible="visible.roleAdding"
      @close="closeRoleAddingDialog"
      @ok="addRole"
      @cancel="closeRoleAddingDialog"/>
    <user-permission-adding-dialog
      :visible="visible.permissionAdding"
      @close="closePermissionAddingDialog"
      @ok="addPermission"
      @cancel="closePermissionAddingDialog"/>
    <user-role-editing-dialog
      :visible="visible.roleEditing"
      :formData="roleForm"
      @close="closeRoleEditingDialog"
      @ok="editRole"
      @cancel="closeRoleEditingDialog"/>
    <user-permission-editing-dialog
      :visible="visible.permissionEditing"
      :formData="permissionForm"
      @close="closePermissionEditingDialog"
      @ok="editPermission"
      @cancel="closePermissionEditingDialog"/>
  </div>
</template>

<script>
  //components start
  import UserPermissionTable from '../common/table/UserPermissionTable'
  import UserRoleTable from '../common/table/UserRoleTable'
  import UserPermissionAddingDialog from '../common/dialog/UserPermissionAddingDialog'
  import UserRoleAddingDialog from '../common/dialog/UserRoleAddingDialog'
  import UserRoleEditingDialog from '../common/dialog/UserRoleEditingDialog'
  import UserPermissionEditingDialog from '../common/dialog/UserPermissionEditingDialog'
  //components end

  //api start
  import $role from '../../api/role'
  import $permission from '../../api/permission'
  //api end
  export default {
    name: "CenterRoleView",
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
          permissionAdding: false,
          roleEditing: false,
          permissionEditing: false,
        },
        roleForm:{
          description:""
        },
        permissionForm:{
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
      addPermission(form){
        this.visible.permissionAdding = false;
        console.log("centerrole", form);
      },
      showRoleAddingDialog(){
        this.visible.roleAdding = true;
      },
      showPermissionAddingDialog(){
        this.visible.permissionAdding = true;
      },
      closeRoleAddingDialog(dialog){
        console.log(dialog);
        this.visible.roleAdding = false;
      },
      closePermissionAddingDialog(dialog){
        console.log(dialog);
        this.visible.permissionAdding = false;
      },
      /**
       * editing
       * */
      //修改角色
      editRole(form){
        this.visible.roleEditing = false;
        console.log("centerrole", form);
        $role.putDescriptionWithCenter(this.form.id,this.form.description).then(
          ()=>{
            this.getRoles();
          }
        )
      },
      //修改权限
      editPermission(form){
        this.visible.permissionEditing = false;
        console.log("centerPermission", form);
        $permission.putDescriptionWithCenter(this.form.id,this.form.description).then(
          ()=>{
            this.getRoles();
          }
        )
      },
      showRoleEditingDialog(row){
        this.visible.roleEditing = true;
        this.roleForm = row;
      },
      showPermissionEditingDialog(row){
        this.visible.permissionEditing = true;
        this.permissionForm = row;
      },
      closeRoleEditingDialog(dialog){
        console.log(dialog);
        this.visible.roleEditing = false;
      },
      closePermissionEditingDialog(dialog){
        console.log(dialog);
        this.visible.permissionEditing = false;
      },
      //  获取角色
      getRoles(){
        var self = this;
        $role.getListWithCenter().then(({data})=>{
          console.log(data);
          self.roles = data.data;
        });
      },
      //  获取权限
      getPermissions(){
        var self = this;
        $permission.getListWithCenter().then(({data}) => {
          console.log(data);
          self.permissions = data.data;
        })
      },
      //  权限操作
      disablePermission(row){
        var self = this;
        $permission.putDisableWithCenter(row.id).then(()=>{
          self.getPermissions();
        })
      },
      enablePermission(row){
        var self = this;
        $permission.putEnableWithCenter(row.id).then(()=>{
          self.getPermissions();
        })
      },
      //  角色操作
      disableRole(row){
        var self = this;
        $role.putDisableWithCenter(row.id).then(()=>{
          self.getRoles();
        })
      },
      enableRole(row){
        var self = this;
        $role.putEnableWithCenter(row.id).then(()=>{
          self.getRoles();
        })
      }

    },
    mounted(){
      this.getRoles();
      this.getPermissions();
    }
  }
</script>

<style scoped>

</style>

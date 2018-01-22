<template>
  <el-tabs v-on:tab-click="sysTabsHandle" v-model="sysTabIndex" v-if="true">
    <el-tab-pane label="中心系统">
      <user-role-tabs class="height-offset-180"
                             v-on:tab-click="roleTabsHandle"
                             :user="users.centerUser">
      </user-role-tabs>
    </el-tab-pane>
    <el-tab-pane label="工厂系统">
      <user-role-tabs class="height-offset-180"
                      v-on:tab-click="roleTabsHandle"
                      :user="users.factoryUser">
      </user-role-tabs>
    </el-tab-pane>
    <el-tab-pane label="法务系统">
      <user-role-tabs class="height-offset-180"
                      v-on:tab-click="roleTabsHandle"
                      :user="users.lawyerUser">
      </user-role-tabs>
    </el-tab-pane>
    <el-tab-pane label="认证系统">
      <user-role-tabs class="height-offset-180"
                      v-on:tab-click="roleTabsHandle"
                      :user="users.notarizationUser">
      </user-role-tabs>
    </el-tab-pane>
    <el-tab-pane label="销售系统">
      <user-role-tabs class="height-offset-180"
                      v-on:tab-click="roleTabsHandle"
                      :user="users.sellerUser">
      </user-role-tabs>
    </el-tab-pane>
    <el-tab-pane label="消费系统">
      <user-role-tabs class="height-offset-180"
                      v-on:tab-click="roleTabsHandle"
                      :user="users.customerUser">
      </user-role-tabs>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import $user from '../../api/user'
  import UserRoleTabs from '../common/tabs/UserRoleTabs'
  export default {
    components: {UserRoleTabs},
    name: "CenterUserView",
    props:{

    },
    methods:{
      sysTabsHandle(){
        console.log(this.sysTabIndex);
        this.tabChange();
      },
      roleTabsHandle(index){
        console.log(index);
        this.roleTabIndex = index;
        this.tabChange();
      },
      tabChange(){
        // var self = this;
        // var params = {
        //   'loginInfo.systemType':self.getSysTab(),
        //   'loginInfo.accountType':self.getRoleTab()
        // };
        //
        // var sysKey = Object.keys(self.users)[self.sysTabIndex];
        // var roleKey = Object.keys(self.users[sysKey])[self.roleTabIndex];
        //
        // $user.getListWithCenter(params).then(({data}) => {
        //   console.log(data);
        //   self.users[sysKey][roleKey] = data.data;
        //   console.log(self.users);
        // })
      },
      getRoleTab() {
        return this.roleTabs[this.roleTabIndex];
      },
      getSysTab() {
        return this.sysTabs[this.sysTabIndex];
      },
    },
    data() {
      return {
        users:{
          centerUser:{
            baseUsers:[],
            adminUsers:[],
            lawyerUsers:[],
            dataUsers:[]
          },
          factoryUser:{
            baseUsers:[],
            adminUsers:[],
            lawyerUsers:[],
            dataUsers:[]
          },
          lawyerUser:{
            baseUsers:[],
            adminUsers:[],
            lawyerUsers:[],
            dataUsers:[]
          },
          notarizationUser:{
            baseUsers:[],
            adminUsers:[],
            lawyerUsers:[],
            dataUsers:[]
          },
          sellerUser:{
            baseUsers:[],
            adminUsers:[],
            lawyerUsers:[],
            dataUsers:[]
          },
          customerUser:{
            baseUsers:[],
            adminUsers:[],
            lawyerUsers:[],
            dataUsers:[]
          },
        },

        sysTabs:['CENTER', 'FACTORY', 'LAW', 'NOTARIZATION', 'SELLER', 'CUSTOMER'],
        roleTabs: ['BASE_USER', 'ADMIN_USER', 'LAWYER_USER', 'DATA_USER'],
        sysTabIndex: "0",
        roleTabIndex: 0
      }
    },
    computed:{

    },
    mounted() {
      // this.sysTabsHandle();
    }
  }
</script>

<style scoped>

</style>

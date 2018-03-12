<template>
  <div>
    <code-order-table
      class="height-offset-180 overflow-auto w-100"
      :data="orders"
      :audit-enable="true"
      @audit-order="auditOrder"/>

    <el-pagination
      layout="prev, pager, next"
      :total="totalPages"
      @current-change="pageChangeHandle">
    </el-pagination>
  </div>
</template>

<script>
  import CodeOrderTable from '../table/CodeOrderTable'
  import FormInputItem from '../../common/item/FormInputItem'
  import $profile from '../../../api/profile'
  import $product from '../../../api/product'
  import $order from '../../../api/order'
  export default {
    name: "law-code-order-view",
    components: {
      CodeOrderTable,
      FormInputItem
    },
    data(){
      return {
        orders:[],
        totalPages:1,
        currentPage:1
      }
    },
    methods:{
      auditOrder(row, state){
        console.log(row, state);
        var self = this;
        var index = self.orders.indexOf(row);
        if(state === 'SUCCESS'){
          $order.successOrder(row.id).then( ({data})=>{
            $order.getOrder(data.orderId).then(({data})=>{
              self.$set(self.orders, index, data.data);
            })
          } )
        }

        if(state === 'REFUSED'){
          $order.refuseOrder(row.id).then( ({data})=>{
            $order.getOrder(data.orderId).then(({data})=>{
              self.$set(self.orders, index, data.data);
            })
          } )
        }

      },
      getOrderPage(page){
        var self = this;
        var orgId = $profile.getLoginInfo().organization.id;
        var params = {
          'lawfirm.id': orgId
        }
        $order.getOrderPage(page - 1,params).then(({data})=>{
          self.orders = data.data.content;
          self.totalPages = data.data.totalPages;
          self.currentPage = page;
        })


      },
      pageChangeHandle(page){
        this.getOrderPage(page);
      }
    },
    mounted(){
      this.getOrderPage(this.currentPage);
    }
  }
</script>

<style scoped>

</style>

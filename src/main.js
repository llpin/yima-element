// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

// element start
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/common.css'
Vue.use(ElementUI)
// element end

Vue.config.productionTip = false

//filter
Vue.filter('isSystemFilter', function(en) {
  if(en){
    return "系统角色"
  }else {
    return "用户角色"
  }
});

/* eslint-disable no-new */
window.$AppMain = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

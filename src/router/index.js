import Vue from 'vue'
import Router from 'vue-router'
import CenterLogin from '../components/CenterLogin'
import CitizenLogin from '../components/CitizenLogin'
import FirmbaseLogin from '../components/FirmbaseLogin'
import FirmuserLogin from '../components/FirmuserLogin'
import CenterHome from '../components/CenterHome'
import CitizenHome from '../components/CitizenHome'
import FirmbaseHome from '../components/FirmbaseHome'
import FirmuserHome from '../components/FirmuserHome'


//center home 路由
import CenterUser from '../components/center/user'

//

Vue.use(Router)


var centerView = [
  {
    path: '/center',
    component: CenterLogin
  },
  {
    path: '/center/login',
    name: 'CenterLogin',
    component: CenterLogin
  },
  {
    path: '/center/home',
    name: 'CenterHome',
    component: CenterHome,
    children:[
      {
        path: '/',
        component: CenterUser
      },
      {
        path: '/user',
        name: 'CenterUser',
        component: CenterUser
      }
    ]
  }
];

var citizenView = [
  {
    path: '/citizen',
    component: CitizenLogin
  }, {
    path: '/citizen/login',
    name: 'CitizenLogin',
    component: CitizenLogin
  }, {
    path: '/citizen/home',
    name: 'CitizenHome',
    component: CitizenHome
  }
];

var firmbaseView = [
  {
    path: '/firmbase',
    component: FirmbaseLogin
  }, {
    path: '/firmbase/login',
    name: 'FirmbaseLogin',
    component: FirmbaseLogin
  }, {
    path: '/firmbase/home',
    name: 'FirmbaseHome',
    component: FirmbaseHome
  }
];

var firmuserView = [
  {
    path: '/firmuser',
    component: FirmuserLogin
  }, {
    path: '/firmuser/login',
    name: 'FirmuserLogin',
    component: FirmuserLogin
  }, {
    path: '/firmuser/home',
    name: 'FirmuserHome',
    component: FirmuserHome
  }
];

var routes = [];
routes = routes.concat(centerView,
  citizenView,
  firmbaseView,
  firmuserView);

export default new Router({
  routes: routes
})

import Vue from 'vue'
import Router from 'vue-router'

//Home 程序主入口
import Index from '../components/Index'

import Login from '../components/Login'
import Register from '../components/register/Register'
import EnterpriseRegister from '../components/register/EnterpriseRegister'
import PersonRegister from  '../components/register/PersonRegister'

import CenterHome from '../components/CenterHome'
import SellerHome from '../components/SellerHome'
import FactoryHome from '../components/FactoryHome'
import LawHome from '../components/LawHome'
import NotarizationHome from '../components/NotarizationHome'
import CustomerHome from '../components/CustomerHome'


//center home 路由
import CenterUserView from '../components/center/CenterUserView'
import CenterRoleView from '../components/center/CenterRoleView'
import CenterUserAdding from '../components/center/CenterUserAdding'



//

Vue.use(Router)

var homeView = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/enterprise/register',
    name: 'enterprise-register',
    component: EnterpriseRegister
  },
  {
    path: '/person/register',
    name: 'person-register',
    component: PersonRegister
  }
]

//center(中心)
var centerView = [
  {
    path: '/center',
    component: Login
  },
  {
    path: '/center/login',
    name: 'CenterLogin',
    component: Login
  },
  {
    path: '/center/home',
    component: CenterHome,
    //子路由不加斜杠
    children:[
      {
        path: '',
        component: CenterUserView
      },
      {
        path: 'user',
        component: CenterUserView
      },
      {
        path: 'user/view',
        name: 'CenterUserView',
        component: CenterUserView
      },
      {
        path: 'user/adding',
        name: 'CenterUserAdding',
        component: CenterUserAdding
      },
      {
        path: 'role',
        name: 'CenterRoleView',
        component: CenterRoleView
      }
    ]
  }
];

var sellerView = [
  {
    path: '/seller',
    component: Login
  }, {
    path: '/seller/login',
    name: 'SellerLogin',
    component: Login
  }, {
    path: '/seller/home',
    name: 'SellerHome',
    component: SellerHome
  }
];

var factoryView = [
  {
    path: '/factory',
    component: Login
  }, {
    path: '/factory/login',
    name: 'FactoryLogin',
    component: Login
  }, {
    path: '/factory/home',
    name: 'FactoryHome',
    component: FactoryHome
  }
];

var lawView = [
  {
    path: '/law',
    component: Login
  }, {
    path: '/law/login',
    name: 'LawLogin',
    component: Login
  }, {
    path: '/law/home',
    name: 'LawHome',
    component: LawHome
  }
];

var notarizationView = [
  {
    path: '/notarization',
    component: Login
  }, {
    path: '/notarization/login',
    name: 'NotarizationLogin',
    component: Login
  }, {
    path: '/notarization/home',
    name: 'NotarizationHome',
    component: NotarizationHome
  }
];

var customerView = [
  {
    path: '/customer',
    component: Login
  }, {
    path: '/customer/login',
    name: 'CustomerLogin',
    component: Login
  }, {
    path: '/customer/home',
    name: 'CustomerHome',
    component: CustomerHome
  }
];

var routes = [];
routes = routes.concat(
  homeView,
  centerView,
  sellerView,
  factoryView,
  lawView,
  customerView,
  notarizationView);

export default new Router({
  routes: routes
})

import Vue from 'vue'
import Router from 'vue-router'

//Home 程序主入口
import Index from '../components/Index'

import Login from '../components/Login'
import Register from '../components/register/Register'
import EnterpriseRegister from '../components/register/EnterpriseRegister'
import IndividualRegister from '../components/register/IndividualRegister'

//Basic
import CenterBasicHome from '../components/center/CenterBasicHome'
import SellerBasicHome from '../components/seller/SellerBasicHome'
import FactoryBasicHome from '../components/factory/FactoryBasicHome'
import LawBasicHome from '../components/law/LawBasicHome'
import NotarizationBasicHome from '../components/notarization/NotarizationBasicHome'
import CustomerHome from '../components/CustomerHome'

//Admin
import CenterAdminHome from '../components/center/CenterAdminHome'
import SellerAdminHome from '../components/seller/SellerAdminHome'
import FactoryAdminHome from '../components/factory/FactoryAdminHome'
import LawAdminHome from '../components/law/LawAdminHome'
import NotarizationAdminHome from '../components/notarization/NotarizationAdminHome'


//center home 路由
import UserView from '../components/common/view/UserView'
import RoleView from '../components/common/view/RoleView'
import UserAddingView from '../components/common/view/UserAddingView'
import CenterAuditView from '../components/center/CenterAuditView'



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
    path: '/individual/register',
    name: 'individual-register',
    component: IndividualRegister
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
    path: '/center/basic/home',
    component: CenterBasicHome,
    //子路由不加斜杠
    children:[
      {
        path: '',
        component: UserView
      },
      {
        path: 'user',
        component: UserView
      },
      {
        path: 'user/view',
        component: UserView
      },
      {
        path: 'user/adding',
        component: UserAddingView
      },
      {
        path: 'role',
        component: RoleView
      },
      {
        path: 'audit',
        component: CenterAuditView
      }
    ]
  },
  {
    path: '/center/admin/home',
    component: CenterAdminHome,
    //子路由不加斜杠
    children:[
      {
        path: '',
        component: UserView
      },
      {
        path: 'user',
        component: UserView
      },
      {
        path: 'user/view',
        component: UserView
      },
      {
        path: 'user/adding',
        component: UserAddingView
      },
      {
        path: 'role',
        component: RoleView
      }
    ]
  }
];

var sellerView = [
  {
    path: '/seller',
    component: Login
  },
  {
    path: '/seller/login',
    component: Login
  },
  {
    path: '/seller/basic/home',
    component: SellerBasicHome,
    children:[
      {
        path: '',
        component: UserView
      },
      {
        path: 'user',
        component: UserView
      },
      {
        path: 'user/view',
        component: UserView
      },
      {
        path: 'user/adding',
        component: UserAddingView
      },
      {
        path: 'role',
        component: RoleView
      }
    ]
  },
  {
    path: '/seller/admin/home',
    component: SellerAdminHome,
    //子路由不加斜杠
    children:[
      {
        path: '',
        component: UserView
      },
      {
        path: 'user',
        component: UserView
      },
      {
        path: 'user/view',
        component: UserView
      },
      {
        path: 'user/adding',
        component: UserAddingView
      },
      {
        path: 'role',
        component: RoleView
      }
    ]
  }
];

var factoryView = [
  {
    path: '/factory',
    component: Login
  },
  {
    path: '/factory/login',
    component: Login
  },
  {
    path: '/factory/basic/home',
    component: FactoryBasicHome,
    children:[
      {
        path: '',
        component: UserView
      },
      {
        path: 'user',
        component: UserView
      },
      {
        path: 'user/view',
        component: UserView
      },
      {
        path: 'user/adding',
        component: UserAddingView
      }
    ]
  },
  {
    path: '/factory/admin/home',
    component: FactoryAdminHome,
    //子路由不加斜杠
    children:[
      {
        path: '',
        component: UserView
      },
      {
        path: 'user',
        component: UserView
      },
      {
        path: 'user/view',
        component: UserView
      },
      {
        path: 'user/adding',
        component: UserAddingView
      },
      {
        path: 'role',
        component: RoleView
      }
    ]
  }
];

var lawView = [
  {
    path: '/law',
    component: Login
  },
  {
    path: '/law/login',
    component: Login
  },
  {
    path: '/law/basic/home',
    component: LawBasicHome,
    children:[
      {
        path: '',
        component: UserView
      },
      {
        path: 'user',
        component: UserView
      },
      {
        path: 'user/view',
        component: UserView
      },
      {
        path: 'user/adding',
        component: UserAddingView
      }
    ]
  },
  {
    path: '/law/admin/home',
    component: LawAdminHome,
    //子路由不加斜杠
    children:[
      {
        path: '',
        component: UserView
      },
      {
        path: 'user',
        component: UserView
      },
      {
        path: 'user/view',
        component: UserView
      },
      {
        path: 'user/adding',
        component: UserAddingView
      },
      {
        path: 'role',
        component: RoleView
      }
    ]
  }
];

var notarizationView = [
  {
    path: '/notarization',
    component: Login
  },
  {
    path: '/notarization/login',
    component: Login
  },
  {
    path: '/notarization/basic/home',
    component: NotarizationBasicHome,
    children:[
      {
        path: '',
        component: UserView
      },
      {
        path: 'user',
        component: UserView
      },
      {
        path: 'user/view',
        component: UserView
      },
      {
        path: 'user/adding',
        component: UserAddingView
      }
    ]
  },
  {
    path: '/notarization/admin/home',
    component: NotarizationAdminHome,
    //子路由不加斜杠
    children:[
      {
        path: '',
        component: UserView
      },
      {
        path: 'user',
        component: UserView
      },
      {
        path: 'user/view',
        component: UserView
      },
      {
        path: 'user/adding',
        component: UserAddingView
      },
      {
        path: 'role',
        component: RoleView
      }
    ]
  }
];

var customerView = [
  {
    path: '/customer',
    component: Login
  },
  {
    path: '/customer/login',
    component: Login
  },
  {
    path: '/customer/home',
    component: CustomerHome
  },
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

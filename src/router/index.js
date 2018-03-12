import Vue from 'vue'
import Router from 'vue-router'

//Home 程序主入口
import Index from '../components/Index'

import Login from '../components/Login'
import Register from '../components/register/Register'

import UpdatePasswordView from '../components/common/view/UpdatePasswordView'
import UpdateDoPasswordView from '../components/common/view/UpdateDoPasswordView'
//企业注册
import OrgRegUser from '../components/register/OrgRegUser'
import OrgRegInfo from '../components/register/OrgRegInfo'
import OrgRegRep from '../components/register/OrgRegRep'

import CustomerInfo from '../components/register/CustomerInfo'
import CustomerUser from '../components/register/CustomerUser'
import CustomerVerify from '../components/register/CustomerVerify'

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

//路由
import OrganizationView from '../components/common/view/OrganizationView'
import EmployeeView from '../components/common/view/EmployeeView'
import PlatformTypeView from '../components/common/view/PlatformTypeView'
import OrganizationTypeView from '../components/common/view/OrganizationTypeView'
import IndividualTypeView from '../components/common/view/IndividualTypeView'

//center
import CenterMyView from '../components/common/view/OrganizationMyView'
import CenterOrderView from '../components/common/view/CenterCodeOrderView'

//factory home 路由
import FactoryMyView from '../components/common/view/OrganizationMyView'
import ProductPromiseView from '../components/common/view/ProductPromiseView'
import ProductView from '../components/common/view/ProductView'
import FactoryCodeOrderView from '../components/common/view/FactoryCodeOrderView'

//law firm home
import LawMyView from '../components/common/view/OrganizationMyView'
import LawCodeOrderView from '../components/common/view/LawCodeOrderView'

//seller home
import SellerMyView from '../components/common/view/OrganizationMyView'
import SellContractView from '../components/common/view/SellContractView'


//职员
import CenterLegalizationHome from '../components/center/CenterLegalizationHome'
import CenterLegalizationMyView from  '../components/common/view/EmployeeMyView'


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
    path: '/register/organization/info',
    name: 'organization-register-info',
    component: OrgRegInfo
  },
  {
    path: '/register/organization/representative',
    name: 'organization-register-rep',
    component: OrgRegRep
  },
  {
    path: '/register/organization/user',
    name: 'organization-register-user',
    component: OrgRegUser
  },
  {
    path: '/register/individual/info',
    name: 'individual-register-info',
    component: CustomerInfo
  },
  {
    path: '/register/individual/user',
    name: 'individual-register-user',
    component: CustomerUser
  },
  {
    path: '/register/individual/verify',
    name: 'individual-register-verify',
    component: CustomerVerify
  }
]

var employee = [
  {
    path:'/employee/center_server/legalization',
    component:CenterLegalizationHome,
    children:[
      {
        path: 'my/view',
        component: CenterLegalizationMyView
      }
    ]
  }
]

var organization = [
  {
    path:'/organization/center_server',
    component: CenterBasicHome,
    //子路由不加斜杠
    children:[
      {
        path: '',
        component: OrganizationView
      },
      {
        path: 'organization',
        component: OrganizationView
      },
      {
        path: 'organization/view',
        component: OrganizationView
      },
      {
        path: 'employee/view',
        component: EmployeeView
      },
      {
        path: 'platformtype/view',
        component: PlatformTypeView
      },
      {
        path: 'organizationtype/view',
        component: OrganizationTypeView
      },
      {
        path: 'individualtype/view',
        component: IndividualTypeView
      },
      {
        path: 'my/view',
        component: CenterMyView
      },
      {
        path: 'order/view',
        component: CenterOrderView
      },
      {
        path: 'password/view',
        component: UpdatePasswordView
      },
      {
        path: 'dopassword/view',
        component: UpdateDoPasswordView
      }
    ]
  },
  {
    path:'/organization/factory_producer',
    component: FactoryBasicHome,
    children:[
      {
        path: 'my/view',
        component: FactoryMyView
      },
      {
        path: 'employee/view',
        component: EmployeeView
      },
      {
        path: 'promise/view',
        component: ProductPromiseView
      },
      {
        path: 'product/view',
        component: ProductView
      },
      {
        path: 'order/view',
        component: FactoryCodeOrderView
      },
      {
        path: 'password/view',
        component: UpdatePasswordView
      },
      {
        path: 'dopassword/view',
        component: UpdateDoPasswordView
      },
      {
        path: 'password/view',
        component: UpdatePasswordView
      },
      {
        path: 'dopassword/view',
        component: UpdateDoPasswordView
      }
    ]
  },
  {
    path:'/organization/law_firm',
    component: LawBasicHome,
    children:[
      {
        path: 'my/view',
        component: LawMyView
      },
      {
        path: 'employee/view',
        component: EmployeeView
      },
      {
        path: 'order/view',
        component: LawCodeOrderView
      },
      {
        path: 'password/view',
        component: UpdatePasswordView
      },
      {
        path: 'dopassword/view',
        component: UpdateDoPasswordView
      }
    ]
  },
  {
    path: '/organization/store_seller',
    component: SellerBasicHome,
    children:[
      {
        path: 'my/view',
        component: SellerMyView
      },
      {
        path: 'employee/view',
        component: EmployeeView
      },
      {
        path: 'contract/view',
        component: SellContractView
      },
      {
        path: 'password/view',
        component: UpdatePasswordView
      },
      {
        path: 'dopassword/view',
        component: UpdateDoPasswordView
      }
    ]
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

  },
  // {
  //   path: '/center/admin/home',
  //   component: CenterAdminHome,
  //   //子路由不加斜杠
  //   children:[
  //     {
  //       path: '',
  //       component: OrganizationView
  //     },
  //     {
  //       path: 'user',
  //       component: OrganizationView
  //     },
  //     {
  //       path: 'user/view',
  //       component: OrganizationView
  //     },
  //     {
  //       path: 'user/adding',
  //       component: UserAddingView
  //     },
  //     {
  //       path: 'role',
  //       component: RoleView
  //     }
  //   ]
  // }
];

// var sellerView = [
//   {
//     path: '/seller',
//     component: Login
//   },
//   {
//     path: '/seller/login',
//     component: Login
//   },
//   {
//     path: '/seller/basic/home',
//     component: SellerBasicHome,
//     // children:[
//     //   {
//     //     path: '',
//     //     component: OrganizationView
//     //   },
//     //   {
//     //     path: 'user',
//     //     component: OrganizationView
//     //   },
//     //   {
//     //     path: 'user/view',
//     //     component: OrganizationView
//     //   },
//     //   {
//     //     path: 'user/adding',
//     //     component: UserAddingView
//     //   },
//     //   {
//     //     path: 'role',
//     //     component: RoleView
//     //   }
//     // ]
//   },
//   {
//     path: '/seller/admin/home',
//     component: SellerAdminHome,
//     //子路由不加斜杠
//     // children:[
//     //   {
//     //     path: '',
//     //     component: OrganizationView
//     //   },
//     //   {
//     //     path: 'user',
//     //     component: OrganizationView
//     //   },
//     //   {
//     //     path: 'user/view',
//     //     component: OrganizationView
//     //   },
//     //   {
//     //     path: 'user/adding',
//     //     component: UserAddingView
//     //   },
//     //   {
//     //     path: 'role',
//     //     component: RoleView
//     //   }
//     // ]
//   }
// ];
//
// var factoryView = [
//   {
//     path: '/factory',
//     component: Login
//   },
//   {
//     path: '/factory/login',
//     component: Login
//   },
//   {
//     path: '/factory/basic/home',
//     component: FactoryBasicHome,
//     children:[
//       {
//         path: '',
//         component: OrganizationView
//       },
//       {
//         path: 'user',
//         component: OrganizationView
//       },
//       {
//         path: 'user/view',
//         component: OrganizationView
//       },
//       {
//         path: 'user/adding',
//         component: UserAddingView
//       }
//     ]
//   },
//   {
//     path: '/factory/admin/home',
//     component: FactoryAdminHome,
//     //子路由不加斜杠
//     children:[
//       {
//         path: '',
//         component: OrganizationView
//       },
//       {
//         path: 'user',
//         component: OrganizationView
//       },
//       {
//         path: 'user/view',
//         component: OrganizationView
//       },
//       {
//         path: 'user/adding',
//         component: UserAddingView
//       },
//       {
//         path: 'role',
//         component: RoleView
//       }
//     ]
//   }
// ];
//
// var lawView = [
//   {
//     path: '/law',
//     component: Login
//   },
//   {
//     path: '/law/login',
//     component: Login
//   },
//   {
//     path: '/law/basic/home',
//     component: LawBasicHome,
//     children:[
//       {
//         path: '',
//         component: OrganizationView
//       },
//       {
//         path: 'user',
//         component: OrganizationView
//       },
//       {
//         path: 'user/view',
//         component: OrganizationView
//       },
//       {
//         path: 'user/adding',
//         component: UserAddingView
//       }
//     ]
//   },
//   {
//     path: '/law/admin/home',
//     component: LawAdminHome,
//     //子路由不加斜杠
//     children:[
//       {
//         path: '',
//         component: OrganizationView
//       },
//       {
//         path: 'user',
//         component: OrganizationView
//       },
//       {
//         path: 'user/view',
//         component: OrganizationView
//       },
//       {
//         path: 'user/adding',
//         component: UserAddingView
//       },
//       {
//         path: 'role',
//         component: RoleView
//       }
//     ]
//   }
// ];
//
// var notarizationView = [
//   {
//     path: '/notarization',
//     component: Login
//   },
//   {
//     path: '/notarization/login',
//     component: Login
//   },
//   {
//     path: '/notarization/basic/home',
//     component: NotarizationBasicHome,
//     children:[
//       {
//         path: '',
//         component: OrganizationView
//       },
//       {
//         path: 'user',
//         component: OrganizationView
//       },
//       {
//         path: 'user/view',
//         component: OrganizationView
//       },
//       {
//         path: 'user/adding',
//         component: UserAddingView
//       }
//     ]
//   },
//   {
//     path: '/notarization/admin/home',
//     component: NotarizationAdminHome,
//     //子路由不加斜杠
//     children:[
//       {
//         path: '',
//         component: OrganizationView
//       },
//       {
//         path: 'user',
//         component: OrganizationView
//       },
//       {
//         path: 'user/view',
//         component: OrganizationView
//       },
//       {
//         path: 'user/adding',
//         component: UserAddingView
//       },
//       {
//         path: 'role',
//         component: RoleView
//       }
//     ]
//   }
// ];
//
// var customerView = [
//   {
//     path: '/customer',
//     component: Login
//   },
//   {
//     path: '/customer/login',
//     component: Login
//   },
//   {
//     path: '/customer/home',
//     component: CustomerHome
//   },
// ];

var routes = [];
routes = routes.concat(
  homeView,
  organization,
  employee,
  centerView,
  // sellerView,
// factoryView,
// lawView,
// customerView,
// notarizationView
  );

export default new Router({
  routes: routes
})

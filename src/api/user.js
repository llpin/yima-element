import { $axios } from './axios'
/**
 * 接口模块：
 * Main：Main
 * User： CenterUser
 * Role：CenterRole
 * Permission：CenterPermission
 * */
export default {
  name: "$user",

  /**
   * Main
   * */
  //用户登录
  login(data) {
    return $axios.post('/login', data);
  },
  // 用户退出
  logout() {
    return $axios.get('/logout');
  },
  // 当前用户详情
  current() {
    return $axios.get('/current', {});
  },
  //注册用户
  register(data){
    return $axios.post('/register', data);
  },

  /**
   * Center
   * */
  // 中心系统用户列表
  getListWithCenter(parameters) {
    return $axios.get('/center/user/list', {
      params: parameters
    });
  },


  //新增中心用户（需要中心管理员权限）
  createWithCenter(data) {
    return $axios.post('/center', data)
  }
}

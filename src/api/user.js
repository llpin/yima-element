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

  getList(parameters, page) {
    return $axios.get(`/user/list/${page}`, {
      params: parameters
    });
  },

  update(data){
    return $axios.put("/user", data);
  }



}

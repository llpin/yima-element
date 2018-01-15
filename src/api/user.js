import { $axios } from './axios'
import qs from 'qs'
export default {
  name: "$user",

  //用户登录
  login(data) {
    return $axios.post('/login', data)
  },
  // 用户退出
  logout() {
    return $axios.get('/logout');
  },
  // 当前用户详情
  current() {
    return $axios.get('/center/user', {});
  },

  // 中心系统用户列表
  centerGetList(parameters) {
    return $axios.get('/center/user/list', {
      params: parameters
    });
  },

  // 用户权限列表
  permissionGetList(parameters) {
    return $axios.get('/center/permission/list', {
      params: parameters
    });
  },

  // 用户角色列表（不同系统 能查看的角色数据不同）
  roleGetList(parameters) {
    return $axios.get('/center/role/list', {
      params: parameters
    });
  },

  //新增中心用户（需要中心管理员权限）
  centerCreate(data) {
    return $axios.post('/center', data)
  },

}

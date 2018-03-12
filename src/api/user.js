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
  //注册用户
  registerOrganization(data){
    return $axios.post('/register/organization', data);
  },
  registerEmpolyee(data){
    return $axios.post('/register/employee', data);
  },
  registerIndividual(data){
    return $axios.post('/register/individual', data);
  },



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

  getList(parameters, page) {
    return $axios.get(`/user/list/${page}`, {
      params: parameters
    });
  },
  getOrganizations(parameters, page) {
    return $axios.get(`/user/organization/page/${page}`, {
      params: parameters
    });
  },
  getOrganizationList(parameters) {
    return $axios.get("/user/organization", {
      params: parameters
    });
  },
  getOrganization(id) {
    return $axios.get(`/user/organization/${id}`, {
    });
  },
  getEmployee(id){
    return $axios.get(`/user/employee/${id}`, {
    });
  },
  getEmployees(orgId, page){
    return $axios.get(`/user/organization/${orgId}/employee/page/${page}`);
  },
  getEmployeeList(orgId,parameters) {
    return $axios.get(`/user/organization/${orgId}/employee`, {
      params: parameters
    });
  },
  addEmployee(data){
    return $axios.post(`/user/employee`,data);
  },
  getIndividuals(parameters,page){
    return $axios.get(`/user/customer/page/${page}`,{
      params: parameters
    });
  },

  audit(id, state){
    return $axios.put(`/user/audit/${id}`, {
      auditState: state
    });
  },

//  验证码
  getVerifyCode(telephone){
    return $axios.get(`/user/telephone/${telephone}/sms/code`);
  },
  verifyCode(telephone, code){
    return $axios.put(`/user/telephone/${telephone}/sms/code/${code}`);
  },

//修改密码
  updatePassword(userId, data){
    return $axios.put(`/user/${userId}/password`,data);
  },
  updateDoPassword(userId, data){
    return $axios.put(`/user/${userId}/dopassword`,data);
  },

//  重置密码 手机找回
  restPassword(userId, data){
    return $axios.put(`/user/${userId}/reset/password`,data);
  },
  restDoPassword(userId, data){
    return $axios.put(`/user/${userId}/reset/dopassword`,data);
  }

}

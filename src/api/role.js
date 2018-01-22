import {$axios} from "./axios";

export default {
  name: '$role',


  getList(parameters) {
    return $axios.get('/role/list', {
      params: parameters
    });
  },
  // //禁用角色
  // putDisableWithCenter(id){
  //   return $axios.put(`/center/role/disable/${id}`);
  // },
  // //启用角色
  // putEnableWithCenter(id){
  //   return $axios.put(`/center/role/enable/${id}`);
  // },
  // //修改描述
  // putDescriptionWithCenter(id, des){
  //   return $axios.put(`/center/role/${id}/description/${des}`);
  // }

}

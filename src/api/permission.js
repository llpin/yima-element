import {$axios} from "./axios";

export default {
  name: '$permission',

  /**
   * center
   * */
  // 用户权限列表
  getListWithCenter(parameters) {
    return $axios.get('/center/permission/list', {
      params: parameters
    });
  },
  putDisableWithCenter(id){
    return $axios.put(`/center/permission/${id}/disable`);
  },
  putEnableWithCenter(id){
    return $axios.put(`/center/permission/${id}/enable`);
  },
  putDescriptionWithCenter(id, des){
    return $axios.put(`/center/permission/${id}/description/${des}`);
  }
}

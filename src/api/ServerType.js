import { $axios } from './axios'

export default {
  name: "$ServerType",

  getPlatformTypeList(parameters){
    return $axios.get('/type/platform/list', {
      params: parameters
    });
  },
  getOrganizationTypeList(parameters){
    return $axios.get('/type/organization/list', {
      params: parameters
    });
  },
  getIndividualTypeList(parameters){
    return $axios.get('/type/individual/list', {
      params: parameters
    });
  },
  getEmployeeTypeList(parameters){
    return $axios.get('/type/employee/list', {
      params: parameters
    });
  }
}

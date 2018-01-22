import { $axios } from './axios'

export default {
  name: '$industry',

  getList(parameters){
    return $axios.get("/industry/list",{
      params: parameters
    });
  }
}

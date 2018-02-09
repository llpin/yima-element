import {$axios} from "./axios";

export default {
  name:"$subIndustry",

  getList(parameters){
    return $axios.get("/subIndustry/list",{
      params: parameters
    });
  }
}

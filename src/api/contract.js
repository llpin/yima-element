import {$axios} from "./axios";

export default {
  getContractPage(page, parameter){
    return $axios.get(`/contract/page/${page}`,{
      params: parameter
    });
  }
}

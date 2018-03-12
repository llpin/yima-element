import {$axios} from "./axios";

export default {
  getQRImage(content){
    return $axios.get("/qr",{
      params:{
        content: content
      }
    })
  }
}

import { $axios } from './axios'
import $profile from './profile'

export default {
  name: "$fileResource",
  getFileUploadAction(){
    return $profile.getApiHost() + "res/file/upload"
  },

  remove(id){
    return $axios.delete(`/res/file/delete/${id}`);
  }
}

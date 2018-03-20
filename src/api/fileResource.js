import { $axios } from './axios'
import $profile from './profile'

export default {
  name: "$fileResource",
  getFileUploadAction(){
    return $profile.getApiHost() + "res/file/upload"
  },

  getDownloadFileSrc(fileName){
    return $profile.getApiHost() + `res/download?name=${fileName}`;
  },

  remove(id){
    return $axios.delete(`/res/file/delete/${id}`);
  }
}

export default {
  getApiHost(){
    return process.env.API_HOST;
  },
  getFileHost(){
    return process.env.API_HOST + 'file/';
  },

  getLoginInfo() {
    return this.parse(window.sessionStorage.getItem("$loginInfo"));
  },
  setLoginInfo(info) {
    window.sessionStorage.setItem("$loginInfo", JSON.stringify(info));
  },
  getIndustryInfo(){
    return this.parse(window.sessionStorage.getItem("$industryInfo"));
  },
  setIndustryInfo(info) {
    window.sessionStorage.setItem("$industryInfo", JSON.stringify(info));
  },

  parse(info){
    var ret;
    if (typeof info === "object") {
      ret = info;
    } else if (typeof info === 'string') {
      try {
        ret = JSON.parse(info);
      } catch (error) {
        ret = null;
      }
    } else {
      ret = null;
    }

    return ret;
  }


}

import axios from 'axios'

// axios.defaults.baseURL = "/api"
// axios.defaults.withCredentials = true

import $profile from '../api/profile'

const $axios = axios.create({
  baseURL: "/api",
  withCredentials: true
})

$axios.interceptors.request.use(config => {
  // 这里可以加一些动作, 比如来个进度条开始动作,
  console.log("request.......");
  return config
}, error => {
  console.log("requestError",error);
  return Promise.reject(error)
})


$axios.interceptors.response.use(response => {
  console.log("response.......");
  return response
}, error => {
  // 这里我们把错误信息扶正, 后面就不需要写 catch 了
  debugger;
  window.$AppMain.$message(error.message);
  if(!error.response ) {

    console.log(window.$AppMain.$route.fullPath);
    var fullPath = window.$AppMain.$route.fullPath;
    var pathSplits = fullPath.split("/");
    var root = "";
    if(pathSplits.length > 1){
      root = pathSplits[1];
    }

    window.$AppMain.$router.push(`/${root}/login`);
  }
  console.log("responseError",error);
  return Promise.resolve(error.response)
})



export { $axios };

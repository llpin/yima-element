import axios from 'axios'
import $profile from './profile'

// axios.defaults.withCredentials = true

const $axios = axios.create({
  baseURL: $profile.getApiHost(),
  withCredentials: true
})

$axios.interceptors.request.use(config => {
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
  debugger;
  window.$AppMain.$message(error.message);
  if(!error.response ) {
    window.$AppMain.$router.push("/index");
  }
  console.log("responseError",error);
  return Promise.resolve(error.response)
})

export { $axios };

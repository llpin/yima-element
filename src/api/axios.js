import axios from 'axios'

axios.defaults.baseURL = "/api"
axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
  // 这里可以加一些动作, 比如来个进度条开始动作,
  console.log("request");
  return config
}, error => {
  debugger;
  return Promise.reject(error)
})


axios.interceptors.response.use(response => {
  console.log("response");
  return response
}, error => {
  // 这里我们把错误信息扶正, 后面就不需要写 catch 了
  debugger;
  return Promise.resolve(error.response)
})

const $axios = axios.create(
)



export { $axios };

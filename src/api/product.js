import { $axios } from './axios'

export default {
//  promise
  addPromise(data){
    return $axios.post('/product/promise/add', data);
  },
  getPromiseList(parameters){
    return $axios.get('/product/promise', {
      params:parameters
    })
  },
  getPromise(promiseId){
    return $axios.get(`/product/promise/${promiseId}`);
  },
  updatePromise(data){
    return $axios.put('/product/promise', data)
  },
  deletePromise(promiseId){
    return $axios.delete(`/product/promise/delete/${promiseId}`)
  },
  //  product
  addProduct(data){
    return $axios.post('/product/add', data);
  },
  getProductList(parameters){
    return $axios.get('/product', {
      params: parameters
    })
  },
  getProductPage(page,parameters){
    return $axios.get(`/product/page/${page}`, {
      params: parameters
    })
  },
  getProduct(productId){
    return $axios.get(`/product/${productId}`)
  },
  updateProduct(data){
    return $axios.put('/product', data);
  },
  deleteProduct(productId){
    return $axios.delete(`/product/delete/${productId}`)
  },
  //  code
  addCode(data){
    return $axios.post('/product/code/add', data);
  },
  getCodeList(parameters){
    return $axios.get('/product/code', {
      params: parameters
    })
  },
  getCodePage(page, parameters){
    return $axios.get(`/product/code/page/${page}`, {
      params: parameters
    })
  },
  getCode(codeId){
    return $axios.get(`/product/code/${codeId}`)
  },
  updateCode(data){
    return $axios.put('/product/code', data);
  },
  deleteCode(codeId){
    return $axios.delete(`/product/code/delete/${codeId}`)
  }
}

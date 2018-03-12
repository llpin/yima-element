import { $axios } from './axios'

export default {
  getOrderList(parameters){
    return $axios.get('/order', {
      params: parameters
    });
  },
  getOrderPage(page,parameters){
    return $axios.get(`/order/page/${page}`, {
      params: parameters
    });
  },
  getOrder(orderId){
    return $axios.get(`/order/${orderId}`);
  },
  addOrder(data){
    return $axios.post("/order", data);
  },
  submitOrder(orderId){
    return $axios.put(`/order/submit/${orderId}`);
  },
  refuseOrder(orderId){
    return $axios.put(`/order/refuse/${orderId}`);
  },
  successOrder(orderId){
    return $axios.put(`/order/success/${orderId}`);
  },
  transmitOrder(orderId, lawfirmId){
    return $axios.put(`/order/transmit/${orderId}/${lawfirmId}`);
  },
  getCodeFile(orderId){
    return $axios.get(`order/${orderId}/code/file`);
  }
}

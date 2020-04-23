import qs from "qs";
import utils from "./utils.js";
const http = {
  post(url, data) {
    if(url.indexOf("query_quick_pay_status") === -1) {
      utils.showLoading()
    }
    return fetch(process.env.REACT_APP_DOMAIN + url, {
        body: qs.stringify(data), 
        credentials: 'include',
        cache: 'no-cache',  
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        mode: 'cors', 
        redirect: 'follow', // manual, *follow, error
      })
      .then(response => {
        utils.hideLoading();
        if (!response.ok) {
          utils.toast("网络繁忙("+response.status+")")
          throw Error(response.statusText)
        };
        return response.json()
      }) 
      .then(res => {
        if (res.error_code === 0) {
          return res.data || res
        } else {
          utils.toast(res.error_msg);
          throw Error(res.error_msg)
        }
      })
      .catch(err => {
        utils.hideLoading();
        utils.toast("网络异常");
        console.log(err)
      })
  },
  get(url, data) {
    utils.showLoading()
    return fetch(process.env.REACT_APP_DOMAIN + url + "?" + qs.stringify(data), {
        cache: 'no-cache', 
        method: 'GET',
        mode: 'cors',  
        redirect: 'follow',  
      })
      .then(response => {
        utils.hideLoading();
        if (!response.ok) {
          utils.toast("网络繁忙("+response.status+")")
          throw Error(response.statusText)
        };
        return response.json()
      }) 
      .then(res => {
        if (res.error_code === 0) {
          return res.data
        } else {
          utils.toast(res.error_msg);
          throw Error(res.error_msg)
        }
      })
      .catch(err => {
        utils.hideLoading();
        utils.toast("网络异常");
      })
  }
}


export default http;
import Axios from "axios";

// let headers = {
//   'Authorization': 'Bearer ' + '7cDkq5sttD-EHJJno5JS70YoBM0RMzRxudiKh341FIFiO0JSOPF9jVEeq57P9cDlRcWgBhgYjmJNt2w9HBDDlQ'
// }
let token = getCookie("token");
let headers,userId;
userId = getCookie("userId");
if(token){
  headers = {
    // 'Authorization': 'Bearer ' + "7cDkq5sttD-EHJJno5JS70YoBM0RMzRxudiKh341FIFiO0JSOPF9jVEeq57P9cDlRcWgBhgYjmJNt2w9HBDDlQ"
    'Authorization': 'Bearer ' + token
  }
}
export function getHttp(url,headers={}) {
  // headers["Authorization"] = 'Bearer ' + "7cDkq5sttD-EHJJno5JS70YoBM0RMzRxudiKh341FIFiO0JSOPF9jVEeq57P9cDlRcWgBhgYjmJNt2w9HBDDlQ"
  headers["Authorization"] = 'Bearer ' + getCookie("token")
  return Axios.get(url,{
    headers: headers
  })
}
export function postHttp(url,headers={}) {
  headers["Authorization"] = 'Bearer ' + getCookie("token")
  return Axios.post(url,{
    headers: headers
  })
}
//获取cookie、
export function getCookie(name) {
  let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
   return (arr[2]);
  else
   return null;
}
  
//设置cookie,增加到vue实例方便全局调用
export function setCookie (c_name, value, expiredays) {
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}
  
 //删除cookie
export function delCookie (name) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

export default{
  getUrlKey:function(name){
   return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
  },
  getCookie,
  getHttp,
  // postHttp,
  setCookie,
  delCookie,
  headers,
  userId
}

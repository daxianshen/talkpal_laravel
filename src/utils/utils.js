import Axios from "axios";

// let headers = {
//   'Authorization': 'Bearer ' + 'vL7bZkM0IBrtjYYcUC_ihqpxlwGkpVzKWXq9yi5rbxX8K6pCjd-D2uMlb6s21RzRs5Zkcq1zITdv_bifs7CFNg'
// }
let token = getCookie("token");
// let token = "vL7bZkM0IBrtjYYcUC_ihqpxlwGkpVzKWXq9yi5rbxX8K6pCjd-D2uMlb6s21RzRs5Zkcq1zITdv_bifs7CFNg";
let url = 'https://api.talkpal.com/';
let headers,userId = getCookie("userId");
if(token){
  headers = {
    'Authorization': 'Bearer ' + token
  }
}
// export function getHttp(url,headers={}) {
//   headers["Authorization"] = 'Bearer ' + token
//   return Axios.get(url,{
//     headers: headers
//   })
// }
// export function postHttp(url,body={},headers={}) {
//   headers["Authorization"] = 'Bearer ' + getCookie("token")
//   return Axios.post(url,{
//     headers: headers
//   },body)
// }
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
  setCookie,
  delCookie,
  headers,
  userId,
  token,
  url
}

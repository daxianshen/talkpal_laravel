// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VDistpicker from 'v-distpicker'
import utils  from './utils/utils'    //获取url参数
import api  from './utils/api'
import VueLazyload from 'vue-lazyload'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()

Vue.prototype.$utils=utils   //注册全局方法
Vue.prototype.$api=api   //注册全局方法
Vue.config.productionTip = false
Vue.component('v-distpicker', VDistpicker);
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error:'./static/img/error.jpg',
  loading:'./static/img/loading.gif'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面meta */
  if(to.meta.content){
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.content = to.meta.content;
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
});
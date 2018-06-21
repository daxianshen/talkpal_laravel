import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Indexs from '@/components/Index'
import Goods from '@/components/Goods'
import Closed from '@/components/Closed'
import ExchangeRecord from '@/components/ExchangeRecord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: ''
      }
    },
    {
      path: '/',
      name: 'Index',
      component: Indexs,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods,
      meta: {
        title: '商品名称'
      }
    },
    {
      path: '/closed',
      name: 'Closed',
      component: Closed,
      meta: {
        title: '收货信息'
      }
    },
    {
      path: '/exchangeRecord',
      name: 'ExchangeRecord',
      component: ExchangeRecord,
      meta: {
        title: '兑换记录'
      }
    }
  ]
})

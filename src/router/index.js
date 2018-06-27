import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Indexs from '@/components/Index'
import Goods from '@/components/Goods'
import Closed from '@/components/Closed'
import ExchangeRecord from '@/components/ExchangeRecord'
import Add_address from '@/components/Add_address'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/add_address',
      name: 'Add_address',
      component: Add_address,
      meta: {
        title: '新增地址'
      }
    }
  ]
})

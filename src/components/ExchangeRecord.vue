<template>
  <div class="exchangeRecord">
    <div class="record" v-if="item" v-for="(item,index) in orderList" :key="index">
      <div class="recordItem">
        <img class="goodsImg" v-if="item.product_detail.images[0].normal_url" :src="item.product_detail.images[0].normal_url">
        <img class="goodsImg" v-else src="../image/list-pay-mouth.png">
        <div class="recordRight">
          <span class="goodsName">{{item.product_detail.name}}</span>
          <p class="goodsAddress">地址：{{item.shipment.address.province}}{{item.shipment.address.city}}{{item.shipment.address.district}}{{item.shipment.address.line1}} {{item.shipment.address.full_name}}收  1231242425</p>
          <p class="palCoin">消耗派点：<span>{{item.product_detail.price}}</span></p>
        </div>
      </div>
      <div class="recordBottom">
        <span class="orderId">订单号：{{item.id}}</span>
        <span class="seeLogistics" @click="sLogisticsClickFn(true)">查看物流</span>
      </div>
      <img class="completed" src="../image/img-list-completed.png" alt="">
    </div>
    <div class="logisticsBox" v-if="logisticsBol" @touchmove.prevent>
      <div class="logistics">
        <p>物流信息</p>
        <p>顺丰速运：123124155155</p>
        <div class="information todayStyle">
          <div>
            <span>今天</span>
            <span>09:45</span>
          </div>
          <div><span>运输中<br/></span>快件在【嘉兴集散中心】装车，即将运往下一站【广州集散中心】</div>
        </div>
        <div class="information">
          <div>
            <span>18:30</span>
            <span>昨天</span>
          </div>
          <div>快件已经到达【上海集散中心】装车，将很快运送下一站</div>
        </div>
        <div class="information">
          <div>
            <span>12:30</span>
            <span>5-16</span>
          </div>
          <div>快件已经到达【上海集散中心】装车，将很快运送下一站</div>
        </div>
        <span @click="sLogisticsClickFn(false)">好的</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "exchangeRecord",
  data() {
    return {
      logisticsBol: false,
      touchBanBol: false,
      orderList: []
    };
  },
  mounted() {
    // document.addEventListener("touchmove",function(e){
    //   if(this.touchBanBol){
    //     e.preventDefault();
    //     e.stopPropagation();
    //   }
    // })
  },
  created: function(){
    this.getOrderList();
  },
  methods: {
    sLogisticsClickFn: function(bol) {
      // this.logisticsBol = bol;
      alert("该功能正在努力开发中！");
    },
    getOrderList: function () {
      let that = this;
      axios.get('https://api.talkpal.com/orders?category=goods', {
        headers: that.$utils.headers
      })
      .then(function (response) {
        console.log(response.data.data);
        that.orderList = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
};
</script>

<style>
body {
  background-color: #efeff4;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

.exchangeRecord {
  padding: 0.5rem 0.625rem 0;
  color: #445266;
  position: relative;
  height: 100%;
}

.exchangeRecord .record {
  padding: 1rem 0.625rem 0;
  background-color: #ffffff;
  margin-bottom: 0.5rem;
  position: relative;
}

.record .recordItem {
  display: flex;
  align-items: flex-start;
  padding-bottom: 0.68rem;
  border-bottom: 1px solid #efeff4;
}

.recordItem > img {
  width: 22.4%;
}

.recordItem .recordRight {
  margin-left: 0.78rem;
  display: flex;
  flex-direction: column;
}

.recordRight .goodsName {
  font-size: 0.875rem;
}

.recordRight .goodsAddress {
  font-size: 0.7rem;
  line-height: 1.39;
  color: #bec1c8;
  margin: 0.78rem 0 1.65rem;
}

.recordRight .palCoin {
  align-self: flex-end;
  font-size: 0.7rem;
}

.recordRight .palCoin > span {
  font-size: 0.9rem;
  font-weight: bold;
}

.recordBottom {
  font-size: 0.7rem;
  color: #bec1c8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
}
.recordBottom > span:nth-last-child(1) {
  font-size: 0.8rem;
  border-radius: 5px;
  border: 1px solid #4dc7e7;
  color: #4dc7e7;
  padding: 0.625rem 0.78rem;
}

.logisticsBox {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}

.logisticsBox .logistics {
  position: absolute;
  width: 71.3%;
  margin: 0 auto;
  right: 0;
  left: 0;
  top: 20%;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 6.5px;
  padding: 7.2% 4.4% 5.2%;
}

.logistics > p:nth-child(1) {
  text-align: center;
}

.logistics > p:nth-child(2) {
  margin: 1.6rem 0;
}

.logistics .information {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.7rem;
  color: #bec1c8;
  margin-top: 0.8125rem;
}

.logistics .todayStyle{
  color: #4dc7e7;
  align-items: flex-start;
}

.information > div:nth-child(1) {
  text-align: center;
  display: inline-flex;
  flex-direction: column;
}

.information > div:nth-child(2) {
  flex: 1;
  margin-left: 1.3125rem;
}

.todayStyle > div:nth-child(1) > span:nth-child(1),
.todayStyle > div:nth-child(2) > span:nth-child(1){
  font-size: 0.8rem;
}

.logistics > span:nth-last-child(1) {
  color: #ffffff;
  padding: 0.9rem 2.18rem;
  font-size: 0.875rem;
  background-color: #4dc7e7;
  border-radius: 50px;
  margin: 0 26.2%;
  text-align: center;
  margin-top: 1.71rem;
}

.completed{
  width: 21.8%;
  position: absolute;
  top: 0;
  right: 1.25rem;
}
</style>

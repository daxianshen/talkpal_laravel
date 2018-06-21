<template>
  <div class="mainIndex">
    <div class="header">
      <h1>派点奇妙商城</h1>
      <div class="palPointBox">
        <span class="palPoint">
          <img src="../image/img-shop-palpoint-big.png" align="center">
          我的派点： 1234
        </span>
        <span class="ticketRecord" @click="tRecordClickFn">兑奖记录</span>
      </div>
    </div>
    <div class="hootGoods">
      <p>热门商品</p>
      <div class="goodsBox">
        <div class="goods" v-for="(n,index) in 10" :key="index" @click="goodsClick(index)">
          <span class="limited">限量</span>
          <!-- <span class="limited" :style="{'background-color': limitedColor}">限量</span> -->
          <img class="goodsImg" src="../image/img-shop-palpoint-big@3x.png" alt="">
          <p>小猪佩奇玩偶（蓝）</p>
          <span class="goodsPrice"><img src="../image/img-shop-palpoint-big.png" align="center">1234</span>
        </div>
        <!-- <div class="goods">
          <span class="limited">限量</span>
          <img src="../image/img-shop-palpoint-big@3x.png">
          <p>小猪佩奇玩偶（蓝）</p>
          <span><img src="../image/img-shop-palpoint-big.png" alt="">1234</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "mallIndex",
  data() {
    return {
      limitedColor: "#d5d8df"
    };
  },
  methods:{
    goodsClick: function(num){
      this.$router.push('/goods');
    },
    tRecordClickFn: function () {
      this.$router.push('/exchangeRecord');      
    }
  }
};
</script>

<style>
.mainIndex {
  width: 100%;
  color: #445266;
  background-color: #efeff4;
}

.clear::after {
  content: "";
  display: block;
  clear: both;
}

.mainIndex .header {
  width: 100%;
  padding: 0.9rem 0 1.125rem;
  background-color: #ffffff;
}

.header > h1 {
  padding-left: 7%;
  font-size: 1.875rem;
  font-weight: bold;
}

.header > .palPointBox {
  padding: 0 5.33% 0 7%;
  margin-top: 2.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header > .palPointBox > .palPoint {
  display: inline-flex;
  align-items: center;
}

.header > .palPointBox > .palPoint > img {
  margin-right: 0.375rem;
  width: 0.90625rem;
}

.header > .palPointBox .ticketRecord {
  line-height: 2rem;
  border-radius: 50px;
  padding: 0 1.2rem;
  color: #ffffff;
  background-color: #54c7e6;
}

.hootGoods {
  padding: 0 20px 20px;
}

.hootGoods > p {
  padding: 1.15625rem 0 0.90625rem;
  font-weight: bold;
}

.goodsBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.goodsBox > .goods {
  width: 49%;
  margin-top: 0.5rem;
  padding: 0.875rem 0;
  text-align: center;
  position: relative;
  border-radius: 12.1px;
  background-color: #ffffff;
}

.goods > .limited {
  position: absolute;
  color: #ffffff;
  background-color: #fa3056;
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  right: 0.3rem;
  top: 0.3rem;
  font-size: 0.7rem;
}

.goods .goodsImg {
  width: 61.773%;
}

.goods > p {
  margin: 0.625rem 0.8125rem;
  padding-bottom: 0.5rem;
  font-size: 0.8125rem;
  font-weight: bold;
  text-align: left;
  border-bottom: 1.5px solid #efeff4;
}

.goods .goodsPrice {
  font-size: 0.7rem;
  display: inline-flex;
  align-items: center;
}

.goodsPrice > img {
  height: 1rem;
  margin-right: 0.2rem;
}
</style>

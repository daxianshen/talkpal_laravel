<template>
  <div class="mainIndex">
    <div class="header">
      <h1>派点奇妙商城</h1>
      <div class="palPointBox">
        <span class="palPoint">
          <img src="../image/img-shop-palpoint-big.png" align="center">
          我的派点： {{palpoint}}
        </span>
        <span class="ticketRecord" @click="tRecordClickFn">兑换记录</span>
      </div>
    </div>
    <div class="hootGoods">
      <p v-if="goodsList.length > 0">热门商品</p>
      <p c-else>暂无商品可兑换</p>
      <div class="goodsBox">
        <div class="goods" v-for="(item,index) in goodsList" :key="index" @click="goodsClick(item.id)">
          <span class="limited">限量</span>
          <!-- <span class="limited" :style="{'background-color': limitedColor}">兑完</span> -->
          <img class="goodsImg" @error="imgError(item)" :src="item.images[0].normal_url" v-if="item.images.length">
          <img class="goodsImg" src="../image/notImg.png" v-else>
          <p style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{item.name}}</p>
          <span class="goodsPrice"><img src="../image/img-shop-palpoint-big.png" align="center">{{item.price}}</span>
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
import axios from 'axios'

export default {
  name: "mallIndex",
  data() {
    return {
      palpoint: 0,
      limitedColor: "#d5d8df",
      goodsList: [
        // {
        //   goodsName: '',
        //   goodsDetails: 0,
        //   goodsImgSrc: '',
        //   goodsId: 0,
        //   goodsState: 'limited'
        // }
      ],
      userId: 46
    };
  },
  methods:{
    getUserData: function () {
      let userId = this.$utils.getCookie("userId") ? this.$utils.getCookie("userId") : this.userId;
      // console.log(this.$utils.getCookie("token"),this.$utils.getCookie("userId"));
      let that = this;
      this.$utils.getHttp('https://api.talkpal.com/users/' + userId)
      .then(function (response) {
        // console.log(response.data.data);
        let data = response.data.data;
        that.palpoint = data.pal_points;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    getGoodsList: function() {
      let that = this;
      this.$utils.getHttp('https://api.talkpal.com/products')
      .then(function (response) {
        // console.log(response.data.data);
        that.goodsList = response.data.data;
        that.goodsList.forEach((element,index) => {
          element.images.forEach(element2 => {
            if(element2.caption.search("--cover") != -1 ){
              // console.log(element);
              element.images[0].normal_url = element2.normal_url;
            }
            // element.normal_url = element.normal_url.replace(/api/,'zh-cn');
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
      // axios({
      //   method: 'POST',
      //   url: 'https://api.talkpal.com/products',
      //   headers: {
      //     'Authorization': 'Bearer ' + 'JS8plEsHfN_LRQCObNorlS9qs6Itq2WV7JJBRGPgfEOyCiO_qAMD7NXTQxDEpIX3FGfU7BNd53laOAsvFGZBaQ'
      //   },
      //   data: {
      //     product:{
      //       name: 'boy',
      //       description: 'goodBoy',
      //       price: 100,
      //       currency: 'PalPoint',
      //       count_on_hand: 10
      //     }
      //   }
      // }).then(function(response) {
      //   console.log(response.data);
      // })
    },
    goodsClick: function(num){
      this.$router.push('/goods?id='+num);
    },
    tRecordClickFn: function () {
      this.$router.push('/exchangeRecord');      
    },
    imgError(item) {
      item.images[0].normal_url = require('../image/notImg.png');
    }
  },
  created: function () {
    this.getUserData();
    this.getGoodsList();
  }
};
</script>

<style>
body{
  background-color: #efeff4;
}
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
  padding: 0.2rem 0.8rem;
  border-radius: 6px;
  right: 0.3rem;
  top: 0.3rem;
  font-size: 0.7rem;
}

.goods .goodsImg {
  max-width: 61.773%;
  height: 6.3125rem;
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

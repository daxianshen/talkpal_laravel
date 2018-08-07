<template>
  <div class="goods goodsInfo">
    <div class="header">
      <div>
        <app-banner :listImg="listImg"></app-banner>
      </div>
      <div class="goodsIntroduce">
        <p>{{goodsInfo.name}}</p>
        <!-- <p>粉红猪小妹佩琪是一只非常可爱的小粉红猪，她与弟弟乔治、爸爸、妈妈快乐地住在一起。粉红猪小妹最喜欢做的事情是玩游戏，打扮的漂漂亮亮。</p> -->
        <p>{{goodsInfo.description}}</p>
      </div>
    </div>
    <div class="goodsDetails">
      <p>商品详情</p>
      <p>{{goodsInfo.description}}</p>
      <div class="photoShow" v-if="detailsList.length" v-for="(item,index) in detailsList" :key="index">
        <img v-lazy="item.large_url" :alt="item.caption">
        <p>{{item.caption}}</p>
      </div>
      <!-- <div class="photoShow">
        <img src="../../static/img/img-shop-palpoint-big@3x.png" alt="">
        <p>粉红猪小妹全家福</p>
      </div> -->
    </div>
    <div class="footer">
      <img src="../image/img-shop-palpoint-big.png">
      <span class="exchangeNum">{{goodsInfo.price}}</span>
      <span class="exchange" @click="exchangeClickFn">兑换</span>
    </div>
  </div>
</template>

<script>
import Banner from './Banner'
import axios from 'axios'

export default {
  name: 'goods',
  data() {
    return {
      listImg: [],
      goodsInfo: {},
      detailsList: []
    }
  },
  components: {
    'app-banner': Banner
  },
  created (){
    this.getGoodsInfo();
  },
  methods: {
    getGoodsInfo() {
      this.$api.get(this.$utils.url + 'products/' + this.$utils.getUrlKey('id'))
      .then((response) => {
        // console.log(response.data.data);
        this.goodsInfo = response.data.data;
        this.goodsInfo.price = parseInt(this.goodsInfo.price);
        this.goodsInfo.images.forEach((element,index) => {
          if(element.caption.search("--details") != -1 ){
            element.caption = element.caption.replace('--details', '');
            this.detailsList.push(element);
          }else if(element.caption.search("--slide") != -1 ){
            this.listImg.push({
              url: element.large_url
            });
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
    },
    exchangeClickFn () {
      let goodsInfo = this.goodsInfo,
          id = goodsInfo.id,
          name = goodsInfo.name,
          price = goodsInfo.price;
      this.$router.push('/closed?id='+id+"&name="+name+'&price='+price);
    }
  }
};
</script>

<style>
body{
  background-color: #ffffff;
}
.goods {
  width: 100%;
  color: #445266;
  background-color: #efeff4;
  position: relative;
}

.goods .header {
  background-color: #ffffff;
  padding-bottom: 2rem;
  margin-bottom: 0.8rem;
}

.header .goodsIntroduce {
  padding: 0 10.93333%;
}

.goodsIntroduce > p:nth-child(1) {
  text-align: center;
  font-size: 1.06rem;
  font-weight: bold;
  margin-top: 1.3rem;
  margin-bottom: 1.125rem;
}

.goodsIntroduce > p:nth-child(2) {
  font-size: 0.935rem;
}

.goodsDetails {
  background-color: #ffffff;
  padding: 0 10.93333%;
  padding-bottom: 3rem;
}

.goodsDetails > p:nth-child(1) {
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  padding-top: 1.03rem;
}

.goodsDetails > p:nth-child(2) {
  margin: 1.4rem 0;
}

.goodsDetails .photoShow {
  color: #bec1c8;
}

.goodsDetails .photoShow > img {
  width: 100%;
}

.goodsDetails .photoShow > p {
  text-align: center;
  padding-top: 0.8rem;
  padding-bottom: 2rem;
}

.footer {
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 3px 0;
}

.footer > img {
  width: 1rem;
}

.footer .exchangeNum {
  font-weight: bold;
  margin-left: 0.5rem;
}

.footer .exchange {
  color: #ffffff;
  padding: 0.9rem 2.18rem;
  font-size: 0.875rem;
  background-color: #4dc7e7;
  border-radius: 5px;
  margin-left: 1rem;
  margin-right: 0.3rem;
}

@media screen and (max-width: 320px) and (max-height: 568px) {
  .goodsDetails{
    padding: 0 5%;
  }
}
</style>

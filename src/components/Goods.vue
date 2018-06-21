<template>
  <div class="goods">
    <div class="header">
      <div>
        <app-banner :listImg="listImg"></app-banner>
      </div>
      <div class="goodsIntroduce">
        <p>粉红猪小妹公仔</p>
        <p>粉红猪小妹佩琪是一只非常可爱的小粉红猪，她与弟弟乔治、爸爸、妈妈快乐地住在一起。粉红猪小妹最喜欢做的事情是玩游戏，打扮的漂漂亮亮。</p>
      </div>
    </div>
    <div class="goodsDetails">
      <p>商品详情</p>
      <p>粉红猪小妹佩琪是一只非常可爱的小粉红猪，她与弟弟乔治、爸爸、妈妈快乐地住在一起。粉红猪小妹最喜欢做的事情是玩游戏，打扮的漂漂亮亮，渡假，</p>
      <div class="photoShow">
        <img src="../../static/img/img-shop-palpoint-big@3x.png" alt="">
        <p>粉红猪小妹全家福</p>
      </div>
      <div class="photoShow">
        <img src="../../static/img/img-shop-palpoint-big@3x.png" alt="">
        <p>粉红猪小妹全家福</p>
      </div>
    </div>
    <div class="footer">
      <img src="../image/img-shop-palpoint-big.png">
      <span class="exchangeNum">1000</span>
      <span class="exchange" @click="exchangeClickFn">兑换</span>
    </div>
  </div>
</template>

<script>
import Banner from './Banner'
import a from '../../static/img/img-shop-palpoint-big@3x.png'
import b from '../../static/img/img-shop-palpoint-big@3x.png'
import c from '../../static/img/img-shop-palpoint-big@3x.png'
export default {
  name: 'goods',
  data() {
    return {
      listImg: [
        {
          url: a
        },
        {
          url: b
        },
        {
          url: c
        }
      ]
    }
  },
  methods: {
    exchangeClickFn: function () {
      this.$router.push('/closed');
    }
  },
  components: {
    'app-banner': Banner
  }
};
</script>

<style>
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
  margin-bottom: 3rem;
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
</style>

<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in currentListImg" :key="index">
      <img class="vant-swpier-img" v-lazy="image.url" @error="imgError(image)"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
import notImg from "../image/notImg.png";
import Vue from 'vue';

Vue.use(Swipe).use(SwipeItem);

export default {
  props: {
    listImg: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      notImg: notImg,
      mySwiper: null
    };
  },
  computed: {
    currentListImg() {
      return this.listImg;
    }
  },
  methods: {
    imgError(item) {
      item.url = require('../image/notImg.png');
    }
  }
};
</script>

<style>
.vant-swpier-img{
  width: 100%;
}
</style>

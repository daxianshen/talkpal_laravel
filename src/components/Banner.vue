<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" :style="{ backgroundImage: currentListImg.length == 0?'url('+notImg+')':'none',backgroundSize: '100% 100%'}">
        <div class="swiper-slide" v-for="(str,index) in currentListImg" :style="{ backgroundImage: 'url(' + str.url + ')' }" :key="index"></div>
        <!-- <div class="swiper-slide" :style="{ backgroundImage: 'url(' + notImg + ')'}" v-if="listImg.length==0"></div> -->
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import notImg from "../image/notImg.png";

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
  watch: {
    
  },
  mounted() {
    this.newSwiper();
  },
  methods: {
    newSwiper() {
        let _this = this
        _this.mySwiper = null;
        _this.mySwiper = new Swiper(".swiper-container", {
        pagination: { el: ".swiper-pagination", type: "bullets" },
        paginationClickable: true,
        loop: true,
        speed: 600,
        autoplay: 4000,
        onTouchEnd: function() {
          swiper.startAutoplay();
        },
        observer:true,
        observeParents:true
      });
    }
  }
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 21.18rem;
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  background-position: center;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.swiper-pagination-bullet {
  width: 0.5rem;
  height: 0.5rem;
  display: inline-block;
  background: rgba(255, 255, 255, 0.5);
}
</style>

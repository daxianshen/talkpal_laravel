<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(str,index) in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }" :key="index"></div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    props: ['listImg'],
    mounted() {
        console.log('mounted', this)
        var swiper = new Swiper('.swiper-container', {
            pagination: {el:'.swiper-pagination',type: 'bullets'},
            paginationClickable: true,
            loop: true,
            speed: 600,
            autoplay: 4000,
            onTouchEnd: function() {
                swiper.startAutoplay()
            }
        });
    }
}
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

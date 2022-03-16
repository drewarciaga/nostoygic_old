<template>
<div class="swiper-container">
  <swiper
    :slidesPerView="4"
    :spaceBetween="30"
    :pagination="false"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="bg-contain lazy" :data-original="bg">Slide 1</swiper-slide>
    <swiper-slide class="bg-contain lazy" :data-original="bg2">Slide 2</swiper-slide>
    <swiper-slide class="bg-contain lazy" :data-original="bg3">Slide 3</swiper-slide>
    <swiper-slide class="bg-contain lazy" :data-original="bg4">Slide 4</swiper-slide>
    <swiper-slide class="bg-contain lazy" :data-original="bg5">Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide style="width:0px !important;" class="last-item"></swiper-slide>
  </swiper>
</div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
props: ['bg', 'caption', 'message', 'link', 'bg2','bg3','bg4','bg5'],
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style scoped>
.last-item{
    width: 0px !important;
}
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
    height: 360px;
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-pagination{
    display: none !important;
}
.swiper-container{
    padding: 40px;
    overflow: hidden;
    clip-path: inset(0 10% 0 0);
    margin-left: 5%;
}
.bg-contain{
    background-size: contain !important;
    background-repeat: no-repeat;
    background-position: initial;
}
.bg-cover{
    background-repeat: no-repeat;
    background-position: initial;
}
</style>
<template>
  <o-carousel v-model="carousel" :has-drag="drag" :autoplay="autoPlay" :pause-hover="pauseHover" :interval="interval" :repeat="repeat">
    <o-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section class="ex-slide h-full bg-no-repeat bg-cover bg-center" :style="{'background-color': carousel.color, 'background-image' : carousel.img }">

      </section>
    </o-carousel-item>
  </o-carousel>
</template>

<script>
  export default {
    data() {
      return {
        carousel: 0,
        animated: 'slide',
        drag: true,
        autoPlay: true,
        pauseHover: true,
        pauseInfo: false,
        repeat: true,
        interval: 3000,
        carousels: [
          { text: 'Slide 1', color: '#445e00', img: 'url("/images/slider/1.jpg")' },
          { text: 'Slide 2', color: '#006724', img: 'url("/images/slider/2.jpg")' },
          { text: 'Slide 3', color: '#b60000', img: 'url("/images/slider/3.jpg")' },
          { text: 'Slide 4', color: '#f4c300', img: 'url("/images/slider/4.jpg")' },
        ]
      }
    }
  }
</script>

<template>
  <div class="container">

      <Carousel class="carousel" v-slot="{ currentSlide }" :imgCount="imgCollection.length" autoPlay :interval="interval">

          <Slide v-for="(slide, index) in imgCollection" :key="index">

              <div v-show="currentSlide === index" class="slide-info">

                  <img :src="require(`../../../assets/img/bg/${slide}`)" alt="">

              </div>

          </Slide>

      </Carousel>

  </div>
</template>

<script setup>
import Carousel from './Carousel.vue';
import Slide from './Slide.vue';

const imgCollection = [
    'bg-1.jpg',
    'bg-2.jpg',
    'bg-3.jpg',
    'bg-4.jpg',
    'bg-5.jpg',
]

const interval = 5000

</script>

<style scoped>
.carousel{ 
    position:relative;
    max-height: 60vh;
    height: 60vh;
    background: #fafafa;
}
.slide-info{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    max-height: 100%;
    height: 100%;
}
img{
    min-width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
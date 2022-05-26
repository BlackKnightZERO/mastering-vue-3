<template>
  <div class="container">
      <Carousel class="carousel">
          <Slide>
              <div>
                  {{ imgCollection[0] }}
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

</script>

<style scoped>
.carousel{ 
    max-height: 60vh;
    height: 60vh;
    background: #fafafa;
}
</style>
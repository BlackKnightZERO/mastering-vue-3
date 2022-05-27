<template>
  <div class="carousel">
      
      <slot :currentSlide="currentSlide" />
      
      <div class="navigate" v-show="props.nav">

        <div class="toggle-page left" @click="changeSlide('<')">
          <i class="fa fa-chevron-left"></i>
        </div>

        <div class="toggle-page right" @click="changeSlide('>')">
          <i class="fa fa-chevron-right"></i>
        </div>

      </div>

      <div class="nav-btn-wrapper" v-show="props.navButtons">
        <div class="nav-btn" :class="{ active: index === currentSlide}" v-for="(btn, index) in props.imgCount" :key="index" @click="goToSlide(index)"></div>
      </div>

  </div>
</template>

<script setup>
import { ref, onUpdated, onMounted } from 'vue'

const props = defineProps({
  imgCount: Number,
  autoPlay: Boolean,
  interval:Number,
  nav: Boolean,
  navButtons: Boolean
})

const currentSlide = ref(0)

onUpdated(()=> {
  console.log(currentSlide.value)
})

onMounted(()=> {
  console.log( props.imgCount )
  console.log( document.querySelectorAll('.slide').length )
  if( props.autoPlay ) autoPlay() 
})

const changeSlide = (payload) => {
  
  if( payload === '>' ){
    currentSlide.value = ((currentSlide.value + 1) >= props.imgCount) ? 0 : currentSlide.value + 1
  } else {
    currentSlide.value = ((currentSlide.value - 1) <= 0) ? props.imgCount - 1 : currentSlide.value - 1
  }

}

const goToSlide = (payload) => {
  currentSlide.value = payload
}

const autoPlay = () => {
  setInterval(()=>{
    changeSlide('>')
  }, props.interval ? props.interval : 10000 )
}

</script>

<style scoped>
.navigate{
  /* z-index: 5; */
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toggle-page{ 
  width: 1.8em;
  height: 1.8em;
  background: #8244bc;
  padding: 5px;
  border-radius: 50%;
  margin: 1.1em;
}
.toggle-page:hover {
  background: #653790;
  cursor: pointer;
} 
i{ 
  transform: translateY(5px);
  color:rgb(22, 22, 22);
}

.nav-btn-wrapper { 
  width: 100%;
  height: 1.2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-btn { 
  height: .7em;
  width: .7em;
  border-radius: 50%;
  background: #fff;
  margin: 0 .11em;
}

.nav-btn:hover { 
  background: #653790;
  cursor: pointer;
}

.nav-btn.active{ 
  background: #774c9f
}
</style>
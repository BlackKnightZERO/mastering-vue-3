<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <div 
      class="counter" 
      :style="{ color: store.state.colorCode }"
    >
      {{ store.state.counter }}
      <!-- counter -->
    </div>
    <div class="counter-squared">
      {{ store.state.counter }}<sup>2</sup> = {{ store.getters.counterSquared() }}
    </div>
    
    <div class="buttons">
      <button @click="store.methods.increaseCounter">+</button>
      <button @click="store.methods.decreaseCounter">-</button>
      <!-- <button @click="increaseCounter">+</button> -->
      <!-- <button @click="decreaseCounter">-</button> -->
    </div>

    <div>
      <input
        v-model="computedColorCode"
        type="text"
        placeholder="Enter color code">

      <!-- <input
        v-model="store.state.colorCode"
        type="text"
        placeholder="Enter color code"> -->
    </div>

  </div>
</template>

<script>
import { ref, inject, computed } from 'vue'

export default {
  name: 'Home',

  setup() {

    const store = inject('store')

    const computedColorCode = computed({
      get() {
        return store.state.colorCode
      },
      set(val) {
        store.methods.setColorCode(val)
      }
    })

    // let counter = ref(0)

    // const increaseCounter = () => {
      // counter.value++
    // }

    // const decreaseCounter = () => {
      // counter.value--
    // }

    // return { counter, increaseCounter, decreaseCounter }
    
    return { 
      computedColorCode,
      store 
    }

  }

}
</script>

<style scoped>
  div {
    margin-bottom:10px;
  }
  .counter {
    font-size: 80px;
  }
  .buttons button {
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
  }
</style>

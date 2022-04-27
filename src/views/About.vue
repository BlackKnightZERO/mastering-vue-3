<template>
  <div class="about">
    <h1>Counter works everywhere</h1>
    <h2 
      :style="{ color: store.state.colorCode }"
    >{{
      store.state.counter
      }}</h2>
  </div>
</template>

<script>
import { inject } from 'vue'

export default{
  setup() {
    const store = inject('store')
    
    return {
      store
    }
  }
}
</script>


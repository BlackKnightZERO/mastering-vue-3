<template>
  <div class="container">
      <button open-modal="example" @click="toggleModal">Open modal</button>
      <EmitModal title="Simple Modal" :modalDrawStatus="modalDrawStatus" @toggleModal="toggleModal" />
  </div>
</template>

<script setup>
import EmitModal from './EmitModal.vue'

import { ref } from 'vue'

const modalDrawStatus = ref(false)

const toggleModal = () => {
  modalDrawStatus.value = !modalDrawStatus.value
}
</script>

<style scoped>
button{
  border:none;
  background: #ddd;
  padding: 10px;
  display: block;
  margin: 50px auto;
  cursor: pointer;
}

</style>
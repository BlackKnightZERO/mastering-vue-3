<template>
  <div class="slide">
      <transition name="slide">
          <slot />
      </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.7s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
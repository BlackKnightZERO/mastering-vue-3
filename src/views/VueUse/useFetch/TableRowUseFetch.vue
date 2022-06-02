<template>
    <div class="grid-item">
        <slot>...</slot>
    </div>
</template>

<script setup>
</script>

<style scoped>

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

</style>
<template>
  <div>
      <slot name="content">
            <img src="https://i.stack.imgur.com/y9DpT.jpg" alt="">
      </slot>
        <p>
            <slot name="caption">caption</slot>
        </p>

        <slot name="embed">
            <img src="https://i.stack.imgur.com/y9DpT.jpg" alt="">
        </slot>
        <p>
            <slot
              name="embedSrc"
              v-bind="childSource">caption</slot>
        </p>
  </div>
</template>

<script setup>
const childSource = {
    source : 'Youtube',
    link : 'https://www.youtube.com/'
}
</script>

<style>

</style>
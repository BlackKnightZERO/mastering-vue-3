<template>
  <div>
      <h1>Slots</h1>
      <br>
      <caption-content>
          
          <template #content>
              <img width="420" src="https://blackknightzero.github.io/img/about/afaysal.jpg" alt="">
          </template>

          <template #caption>
            Source: <a target="_blank" href="https://learnvue.co">{{ parentSource }}</a>
          </template>

          <template #embed>
              <iframe width="420" height="345" src="https://www.youtube.com/embed/UhWFddWz1Nk"></iframe>
          </template>

          <template #embedSrc="{ source, link }">
            Source: <a target="_blank" :href="link">{{ source }}</a>
          </template>

      </caption-content>
  </div>
</template>

<script setup>
import CaptionContent from './CaptionContent.vue';

const parentSource = 'learnvue.co'

</script>

<style>

</style>
<template>
  <button
    @click="toggleMode"
    :class="{ 'dark-mode': settings.theme === 'dark' }">Switch
    to
    {{
    oppositeTheme
    }}
    mode</button>
</template>

<script setup>

import { inject, computed } from 'vue'
const settings = inject('settings')

const oppositeTheme = computed({
  get: () => settings.theme === 'light' ? 'dark' : 'light',
  set: (val) => {
    settings.theme = val
  }
})

const toggleMode = () => {
    settings.theme = oppositeTheme.value
}

</script>

<style scoped>
.dark-mode {
    color:white;
    background-color:black;
}
button{
    padding : 2%;
    font-size:1.1em;
}
</style>
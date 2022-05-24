<template>
    <div>
        <br>
        <ThemeButton />
    </div>
</template>

<script setup>

import { provide, reactive, watch } from 'vue'
import ThemeButton from './ThemeButton.vue';

const settings = reactive({
    theme : 'light'
})

watch(settings, (newSettings) => {
  console.log(`Settigns Provider : Theme switched to ${settings.theme} mode`)
})

provide('settings', settings)

</script>

<style>

</style>
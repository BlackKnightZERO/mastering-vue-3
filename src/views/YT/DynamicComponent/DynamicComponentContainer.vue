<template>
    <h2>Dynamic Components</h2>
  <div class="demo">
    <!-- <button
       v-for="(_, tab) in tabs"
       :key="tab"
       :class="['tab-button', { active: currentTab === tab }]"
       @click="currentTab = tab"
     >
      {{ tab }}
    </button> -->
    <button
      v-for="(_, tab, index) in tabs"
      :key="index"
      :class="['tab-button', { active : currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>

	  <component :is="tabs[currentTab]" class="tab"></component>
      
  </div>
</template>

<script setup>
import { ref, onUpdated } from 'vue'

import Profile from './Profile.vue'
import Settigns from './Settigns.vue'

const currentTab = ref('Profile')

onUpdated(() => {
    console.log(currentTab.value)
})

const tabs = {
  Profile,
  Settigns,
}
</script>

<style scoped>
.demo {
  font-family: sans-serif;
  /* border: 1px solid #eee; */
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
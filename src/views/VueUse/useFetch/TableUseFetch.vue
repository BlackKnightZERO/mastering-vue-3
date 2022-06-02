<template>
    <h2>UseFetch@VUEUSE</h2>
    <br>
    <div class="grid-container">
        <Suspense>
                <template v-if="apiData">
                    <template v-for="data in apiData" :key="data.id">
                        <TableRowUseFetchVue>
                            <img :src="data.url" :alt="data.name" width="250" height="350" >
                            <p>{{ data.name }}</p>
                        </TableRowUseFetchVue>
                    </template>
                </template>
            
            <template #fallback>
                Loading...
            </template>

        </Suspense>
    </div>
</template>

<script setup>
import TableRowUseFetchVue from './TableRowUseFetch.vue';

import { useFetch } from '@vueuse/core'
import {ref, onMounted} from 'vue'

const apiData = ref(null)
const apiError = ref(null)
const apiIsFetching = ref(false)

onMounted(() => {
    getData()
})

const getData = async () => {
    const url = `https://api.imgflip.com/get_memes`
    const { isFetching, error, data } = await useFetch(url)
    apiIsFetching.value = isFetching.value
    apiError.value = error.value
    apiData.value = JSON.parse(data.value).data.memes
}



</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #fc7431;
  padding: 10px;
}
</style>
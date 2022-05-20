<template>
    <div class="list">

        <h2>Products</h2>
        <Suspense>
        <template #fallback>
            Loading...
        </template>
        <!-- <template> -->
            <ul>
                <li v-for="(row, index) in model" :key="index">
                    {{ row.name }} ({{row.category}}) - {{ row.price }}
                </li>
            </ul>
        <!-- </template> -->
        </Suspense>

    </div>
</template>

<script>

import { useFetch } from '@vueuse/core'

export default {

    data () {
        return {
            model: null
        }
    },
    async mounted() {
        const url = `http://localhost:3000/product`
        const { isFetching, error, data } = await useFetch(url)
        this.model = JSON.parse(data.value)
    }
    // async setup() {

    //     const model = ref(null)

    //     const url = `http://localhost:3000/product`
    //     const { isFetching, error, data } = await useFetch(url)
    //     this.model = JSON.parse(data.value)

    //     return { model }
    // }
}
</script>

<style scoped>

.list{
    margin: 5% auto;
}

</style>
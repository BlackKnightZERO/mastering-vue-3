import { ref, computed, reactive } from 'vue'
import axios from 'axios'

export const useFetch = (url, config = {}) => {

    const response  = ref(null)
    const data      = ref(null)
    const error     = ref(null)
    const loading   = ref(null)

    const fetch = async () => {

        loading.value = true

        try {
            const result = await axios.request({
                url,
                ...config
            })

            response.value  = result
            data.value      = result.data

        } catch (e) {
            console.log(e)
            error.value = e
        } finally {
            loading.value = true
        }
    }

    !config.skip && fetch()

    return { response, data, error, loading, fetch }

}


export const useFetchCache = (key, url, config) => {
    const info = useFetch(url, { skip: true, ...config})

    
}
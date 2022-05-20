import { reactive, readonly } from "vue"

const state = reactive({
    counter : 0,
    colorCode: 'blue'
})

const getters = {
    counterSquared() {
        return Math.pow(state.counter, 2)
    }
}

const methods = {
    increaseCounter() {
        state.counter++
    },
    decreaseCounter() {
        state.counter--
    },
    setColorCode(val) {
        state.colorCode = val
    }
}

export default {
    state : readonly(state),
    getters,
    methods
}
<template>  
  <div id="TemplateSyntax">
      <h2>TemplateSyntax</h2>
      <hr>
      <h4><span v-html="rawHTML"></span></h4>
      <h4 :id="dynamicId">Attribute Bindings</h4>
      <button :disabled="isButtonDisabled1" @click="disableOtherBtn">Boolean Attribute 1</button>
      <button :disabled="isButtonDisabled2" @click="disableOtherBtn">Boolean Attribute 2</button>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
    setup() {
        const rawHTML = ref(null)
        rawHTML.value = "<span>Raw HTML from Composition API</span>"
        return { rawHTML }
    },


    data() {
        return {
            optionsHTML:"<span>Raw HTML from Options API</span>",
            dynamicId: "none",
            isButtonDisabled1:false,
            isButtonDisabled2:true,
        }
    },

    mounted() {
        setTimeout(()=> {
            this.dynamicId="newDynamicId"
        },2000)
    },

    methods: {
        disableOtherBtn() {
            this.isButtonDisabled1 = !this.isButtonDisabled1
            this.isButtonDisabled2 = !this.isButtonDisabled2
        }
    }
}
</script>

<style scoped>
#newDynamicId{
    color: green
}
</style>
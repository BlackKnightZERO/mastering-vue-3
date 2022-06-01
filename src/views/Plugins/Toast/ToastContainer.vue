<template>
  <div class="container">
      <h2>Toast</h2>
      <br>
      <button class="toast-btn info" @click="infoToast">Info</button>
      <button class="toast-btn success" @click="successToast">Success</button>
      <button class="toast-btn error" @click="errorToast">Error</button>
      <button class="toast-btn warning" @click="warningToast">Warning</button>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import { onMounted } from 'vue'
export default {
    setup() {
        const toast = useToast();

        const infoToast = () => {
            toast.info("Info", {
                timeout: 3000
            });
        }

        const successToast = () => {
            toast.success("Success", {
                timeout: 3000
            });
        }

        const errorToast = () => {
            toast.error("Error", {
                // timeout: 2000
                // specified in main.js
            });
        }

        const warningToast = () => {
            toast.warning("Warning", {
                // timeout: 2000
                // specified in main.js
            });
        }

        onMounted(() => {
            infoToast()
            successToast()
            errorToast()
            warningToast()
        })

        return { toast, infoToast, successToast, errorToast, warningToast }
    }
}
</script>

<style scoped>
.toast-btn{
    padding: 5px 7px;
    border-radius: 5px;
    margin:2px;
    font-size:1.05em;
    color: #222;
    cursor: pointer;
}
.toast-btn:hover {
    box-shadow: 0px 2px 2px #777;
}
.success { 
    background: #3acb49;
}
.error { 
    background: #db4d42;
}
.info { 
    background: #486de7;
}
.warning { 
    background: #cced4b;
}
</style>
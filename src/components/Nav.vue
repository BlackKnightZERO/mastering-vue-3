<template>
  <div class="navbar">

      <div class="dropdown">
          <button class="dropbtn">Doc
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <router-link to="/template-syntax">Template Syntax</router-link>
            <!-- <router-link to="/suspense-combining-with-other-components">Suspense & Combine</router-link> -->
          </div>
      </div> 

      <div class="dropdown">
          <button class="dropbtn">YT Tutorials
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <router-link to="/yt/reactivity-1">CustomStore & Reactivity</router-link>
            <router-link to="/yt/suspense-table">Suspense & axios</router-link>
            <router-link to="/yt/provide-inject">Provide & Inject</router-link>
            <router-link to="/yt/slots-image">Slots Image</router-link>
            <router-link to="/yt/carousel">Carousel Slider</router-link>
            <router-link to="/yt/skeleton-loader">Skeleton Loader</router-link>
            <router-link to="/yt/dynamic-components">Dynamic Components</router-link>
          </div>
      </div> 

      <div class="dropdown">
          <button class="dropbtn">VueUse 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <router-link to="/vue-use/list-use-fetch-1">Suspense & UseFetch</router-link>
          </div>
      </div> 

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/table">Table</router-link> |
    <router-link to="/list">List</router-link> |
  </div> -->
  <div class="navbar">

      <div class="dropdown">
          <button class="dropbtn">Doc
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <router-link to="/template-syntax">Template Syntax</router-link>
          </div>
      </div> 

      <div class="dropdown">
          <button class="dropbtn">YT Tutorials
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <router-link to="/">Home(Composition API)</router-link>
            <router-link to="/about">About(Composition API)</router-link>
            <router-link to="/table">Table(Suspense)</router-link>
          </div>
      </div> 

      <div class="dropdown">
          <button class="dropbtn">VueUse 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <router-link to="/list">List(useFetch)</router-link>
          </div>
      </div> 

  </div>
  <router-view/>
</template>

<script>
import { provide } from 'vue'
import store from '@/store'

export default {
  setup() {
    provide('store', store)
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin: 0;
}

.navbar {
  overflow: hidden;
  background-color: #333;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

<template>
  <div class="profile-card">
      <div class="profile-image">
          <img :src="userData.img" :alt="userData.name">
      </div>
      <div class="profile-info">
          <span>Written By</span>
          <h3>{{ userData.name }}</h3>
          <p>{{ userData.bio }}</p>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'

const loadUserData = async () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({
                name: "Arif Faysal",
                img: "https://blackknightzero.github.io/img/about/afaysal.jpg",
                bio: "I am a Software Engineer, Full-Stack Developer"
            })
        },2500)

    })
}

export default {
    async setup() {
        const userData = ref(await loadUserData())
        console.log(userData)
        return { userData }
    }
}
</script>

<style scoped>
.profile-card{ 
    width: 100%;
    max-width: 700px;
    min-height: 180px;
    background: rgb(238, 238, 238);
    margin: 0 auto;
    padding: 30px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 7px;
}

.profile-card:hover {
    box-shadow: 0px 5px 3px #777;
}

.profile-image { 
    width: 12%;
    float: left;
}
.profile-info{ 
    width: 80%;
    float: right;
    text-align: left;
 }

 .profile-image img { 
     width: 100%;
     height: auto;
     border-radius: 50%;
     border: 3px solid #42b883;
     padding: 3px;
 }

 .profile-info span { 
     color: #777;
     text-transform: uppercase;
     letter-spacing: 3px;
 }

 .profile-info h3 { 
     margin: 10px 0;
     font-size: 1.4em;
     color: #222;
 }

 .profile-info p { 
     line-height: 140%;
     color: #777;
 }
</style>
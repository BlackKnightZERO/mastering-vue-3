<template>
  <div class="profile-card">
      <div class="profile-image">
          <img />
      </div>
      <div class="profile-info">
          <span />
          <h3 />
          <p />
      </div>
  </div>
</template>

<script>
export default {

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
     border-radius: 50%;
     width: 100%;
     padding-top: 100%;
     /* background: #777; */

     background: linear-gradient(60deg, #777, #999);
	background-size: 400% 400%;
	animation: gradient 1s ease-in infinite;
 }

 .profile-info span { 
     /* background: #777; */
     width: 100%;
     height: 1em;
     display: block;
     border-radius: 10px;

     background: linear-gradient(60deg, #777, #999);
	background-size: 400% 400%;
	animation: gradient 1s ease-in infinite;
 }

 .profile-info h3 { 
     margin: 10px 0;
     width: 250px;
     height: 24px;
     /* background: rgb(86, 86, 86); */
     border-radius: 10px;
     
     background: linear-gradient(60deg, rgb(75, 75, 75), #999);
	background-size: 400% 400%;
	animation: gradient 1s ease-in infinite;
 }

 .profile-info p { 
     line-height: 140%;
     /* background: #777; */
     width: 80%;
     height: 16px;
     border-radius: 10px;

    background: linear-gradient(60deg, #777, #999);
	background-size: 400% 400%;
	animation: gradient 1s ease-in infinite;

 }
 @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
<template>
  <section>

    <h1 class="title">Who's watching?</h1>
    <div class="container">
        <div class="profiles">
      <router-link to="/home" v-for="profile in profiles" :key="profile.id" class="item">
    <img v-bind:src="profile.image" alt="" class="image">
    <p class="name">{{profile.name}}</p>
      </router-link>
    <!-- <div id="adddiv">
        <img src="../assets/add3.png" alt="add" id="add" class="image">
        <p>Add Profile</p>
    </div> -->
    </div>
    
    </div>
    <div class="buttondiv">
    <button class="manage">MANAGE PROFILES</button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      profiles: [
        {
          id: 1,
          name: "Berry",
          image:
            "https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png",
        },
        {
          id: 2,
          name: "Dale",
          image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",
        },
        {
          id: 3,
          name: "Dingle",
          image:
            "https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/8e65207aca8751179e10e03c_rw_600.png?h=506076a9f26fdf62293000f07c8c3c78",
        },
        {
          id: 4,
          name: "Quan",
          image: "https://i.imgur.com/fXJosY6.jpg",
        },
      ],
        };
        return {
            hover: false
    }
  },
};
</script>
<style scoped>
section {
  height: 100vh;
  width: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
}
a{
    text-decoration: none;
    color: inherit;
}
.logo {
  height: 3rem;
  width: auto;
  margin: 1rem;
  margin-left: 2rem;
}
.container{
    display: flex;
    justify-content: center;
}
.profiles{
    display: flex;
    column-gap: 2rem;
    margin-top: 2rem;
}
#add{

width: 200px;
height: 200px;
}
.item{
width: 200px;
height: 200px;
color: #7f7f7f;
display: flex;
flex-direction: column;
align-items: center;
}
.item:hover .image {
   box-shadow: 0px 0px 0px 4px white;
}
.item:hover .name {
   color: white;
}
.image{
    border-radius: 4px;
    margin-bottom: 1rem;
}
.buttondiv{
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 6rem;
}
button{
width: fit-content;
height: fit-content;
border: 2px solid #7f7f7f;
background: transparent;
color: #7f7f7f;
padding: .6rem 2rem;
}
h1{
    text-align: center;
}
#adddiv{
display: flex;
flex-direction: column;
align-items: center;
color: #7f7f7f;
}
.name{
  font-size: 1.5rem;
  font-weight: 500;
}
.title{
  font-size: 4rem;
  font-weight: 600;
}
.manage{
  padding: 0.6rem 1.4rem;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 1.3rem;
}
</style>
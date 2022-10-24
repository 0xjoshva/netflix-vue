<template>
    <section>
        <HomeNavbar/>
        <video autoplay loop muted id="backgroundVideo">
  <source src="../assets/vikings.mp4" type="video/mp4">
</video>

<div class="media-controls">
    <img src="../assets/vikingslogo2.png" alt="" id="vikingslogo">
    <h3>Watch Season 1 Now.</h3>
    <p class="bio">Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore--and raid--the distant shores across the ocean.</p>
    <div class="buttons">
    <button class="play"><i class="bi bi-play-fill"></i> Play</button>
    <button class="info">More info</button>
    </div>

</div>
<HomeTrendingCarousel class="carousel"/>
    </section>
</template>
<script>
import HomeNavbar from "@/components/HomeNavbar.vue"
import HomeTrendingCarousel from "./HomeTrendingCarousel.vue";
export default {
    components: {
    HomeNavbar,
    HomeTrendingCarousel
}
}
</script>
<style scoped>
    section{
         width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    }
video {
    position: relative;
    left: 50%;
    top: 50%;
    /* The following will size the video to fit the full container. Not necessary, just nice.*/
    min-width: 100%;
    min-height: 100%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%, -9%);
    z-index: 0;
}
section div {
  
}
.media-controls{
     position: absolute;
    z-index: 2;
    top: 0;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 10%;
color:white;
   width: 100%;
   height: fit-content;
}
.carousel{
 position: absolute;
    z-index: 2;
    top: 0;
}
button{
     outline: none;
    border: none;
    font-size: 1.5rem;
    border-radius: 3px;
    font-weight: 500;
    padding: .6rem 1.6rem;
}
.play{
    color: black;
    background: #ffffff;
    white-space: nowrap;
   
}
.info{
    background: #52505094;
    color: white;
    
}
#vikingslogo{
    width: auto;
    height: 15rem;
    -webkit-filter: drop-shadow(5px 5px 5px #000000);
        filter: drop-shadow(5px 5px 5px #000000);
}
.buttons{
    display: flex;
    column-gap: .8rem;
    margin-top: 1.6rem;
}
.bio{
    width: 20%;
}
</style>
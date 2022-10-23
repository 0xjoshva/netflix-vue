<template>
    <section>
        <HomeNavbar/>
        <video autoplay loop muted id="backgroundVideo">
  <source src="../assets/vikings.mp4" type="video/mp4">
</video>
<div>
    <button>Play</button>
    <button>More Info</button>
</div>
    </section>
</template>
<script>
import HomeNavbar from "@/components/HomeNavbar.vue"
export default {
    components: {
        HomeNavbar
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
    position: relative;
    z-index: 1;
}
</style>
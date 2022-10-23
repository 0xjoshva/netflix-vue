<template>
    <nav>
        <div class="first">
   <img src="../assets/netflixlogo.png" alt="" id="logo">
   <ul>
    <router-link to="/home">Home</router-link>
    <li>TV Shows</li>
    <li>Movies</li>
    <li>New & Popular</li>
    <li>My List</li>
    <li>Browse by Languages</li>
   </ul>
   </div>
   <img src="https://i.imgur.com/fXJosY6.jpg" alt="" id="profile">
    </nav>
</template>
<script>
export default {
}
</script>
<style scoped>
    nav{
        background: transparent;
        color: white;
        width: 100%;
        height: fit-content;
        padding-top: 1rem;
        padding-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        padding-left: 4rem;
        padding-right: 4rem;
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.582) 0%, rgba(22, 22, 22, 0) 50%);
        position: absolute;
        z-index: 3;
    }
    .first{
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
    }
    ul{
        display: flex;
        list-style: none;
        column-gap: 1rem;
        font-size: .85rem;
        width: fit-content;
    }
    li{
        white-space: nowrap;
    }
    #logo{
height: 2rem;
width: auto;
    }
#profile{
    height: 35px;
    width: 35px;
    border-radius: 4px;
}
.router-link-active{
font-weight: 500;
}
a{
    text-decoration: none;
    color: inherit;
}
</style>
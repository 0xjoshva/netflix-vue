<template>
  <router-view/>
</template>
<script>
export default {
  
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
@font-face {
    font-family: 'Netflix Sans';
    font-weight: 100;
    font-display: optional;
    src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff2) format('woff2'),url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff) format('woff')
}

@font-face {
    font-family: 'Netflix Sans';
    font-weight: 300;
    font-display: optional;
    src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Lt.woff2) format('woff2'),url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Lt.woff) format('woff')
}

@font-face {
    font-family: 'Netflix Sans';
    font-weight: 400;
    font-display: optional;
    src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff2) format('woff2'),url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff) format('woff')
}

@font-face {
    font-family: 'Netflix Sans';
    font-weight: 700;
    font-display: optional;
    src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Md.woff2) format('woff2'),url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Md.woff) format('woff')
}

@font-face {
    font-family: 'Netflix Sans';
    font-weight: 800;
    font-display: optional;
    src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Bd.woff2) format('woff2'),url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Bd.woff) format('woff')
}

@font-face {
    font-family: 'Netflix Sans';
    font-weight: 900;
    font-display: optional;
    src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Blk.woff2) format('woff2'),url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Blk.woff) format('woff')
}

.netflix-sans-font-loaded {
    font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif
}

*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
background: var(--bg) !important;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Inter', sans-serif;
  
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

:root{
  --bg: #141414;
  --red: #E50914;
  --text: #e5e5e5;
  --grey: #595959;
}
</style>

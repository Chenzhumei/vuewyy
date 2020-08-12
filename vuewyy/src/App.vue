<template>
  <div id="app">
     <header-top></header-top>
     <div class="main">
       <router-view></router-view>
     </div>
     <footer-bottom></footer-bottom>
     <player></player>
  </div>
</template>

<script>
import headerTop from './components/header/Header'
import footerBottom from './components/footer/Footer'
import player from './components/player/Player'
export default {
 components: {
      headerTop,
      footerBottom,
      player
  }
}
 
</script>

<style lang="scss">
 @import './assets/scss/style';
 .main {
   background-color: #f2f2f2;
 }


</style>

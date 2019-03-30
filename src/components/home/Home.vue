<template>
<div class="home">
  <home-header></home-header>
  <home-banner></home-banner>
  <home-recommend></home-recommend>
  <home-router></home-router>
  <home-feature></home-feature>
  <home-footer></home-footer>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeBanner from './components/Banner'
import HomeRecommend from './components/Recommend'
import HomeRouter from './components/Router'
import HomeFeature from './components/Feature'
import HomeFooter from './components/Footer'
export default {
  name: 'Home',
  components: {
    HomeRecommend,
    HomeHeader,
    HomeBanner,
    HomeRouter,
    HomeFeature,
    HomeFooter
  }
}
</script>

<style scoped lang="stylus">
.home
  background-color: #F5F5F5
</style>

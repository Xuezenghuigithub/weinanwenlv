<template>
<div class="router">
  <ul>
    <li class="fl">
      <strong class="router-words1">食</strong>
      <span class="router-words2">/吃在渭南</span>
      <img class="router-img" src="http://www.xian-tourism.com/image/index-pic-3.jpg">
    </li>
    <li class="fl">
      <strong class="router-words1">宿</strong>
      <span class="router-words2">/住在渭南</span>
      <img class="router-img" src="http://www.xian-tourism.com/image/index-pic-4.jpg">
    </li>
    <li class="fl">
      <strong class="router-words1">娱</strong>
      <span class="router-words2">/游在渭南</span>
      <img class="router-img" src="http://www.xian-tourism.com/image/index-pic-5.jpg">
    </li>
    <li class="fl">
      <strong class="router-words1">购</strong>
      <span class="router-words2">/购在渭南</span>
      <img class="router-img" src="http://www.xian-tourism.com/image/index-pic-6.jpg">
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRouter'
}
</script>

<style scoped lang="stylus">
.router
  width: 1250px
  margin 50px auto 0
  overflow hidden
  .fl
    float left
    height: 470px
    width: 25%
    overflow hidden
    position relative
    opacity 0.8
    transition all 0.5s ease
    cursor: pointer
    .router-words1
      position absolute
      color #fff
      font-family "SimSun"
      font-size 90px
      top 30%
      left 20%
    .router-words2
      position absolute
      color #fff
      writing-mode: vertical-lr
      font-family "SimSun"
      font-size 26px
      top 45%
      left 50%
    .router-img
      width: 100%
  .fl:hover
    opacity: 1
    transform translate(-5px,-5px)
    box-shadow 1px 1px 1px 2px rgba(0,0,0,.5)
</style>

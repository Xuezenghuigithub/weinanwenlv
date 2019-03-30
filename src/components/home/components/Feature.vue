<template>
<div class="feature">
  <ul>
    <li class="feature-list">
      <div class="feature-img">
        <img src="http://www.xian-tourism.com/image/index-sec5-1.jpg">
      </div>
      <span class="feature-title">丝绸之路旅游</span>
    </li>
    <li class="feature-list">
      <div class="feature-img">
        <img src="http://www.xian-tourism.com/image/index-sec5-2.jpg">
      </div>
      <span class="feature-title">历史文化旅游</span>
    </li>
    <li class="feature-list">
      <div class="feature-img">
        <img src="http://www.xian-tourism.com/image/index-sec5-3.jpg">
      </div>
      <span class="feature-title">经典红色旅游</span>
    </li>
    <li class="feature-list">
      <div class="feature-img">
        <img src="http://www.xian-tourism.com/image/index-sec5-4.jpg">
      </div>
      <span class="feature-title">休闲度假旅游</span>
    </li>
    <li class="feature-list">
      <div class="feature-img">
        <img src="http://www.xian-tourism.com/image/index-sec5-5.jpg">
      </div>
      <span class="feature-title">乡村民俗旅游</span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeFeature'
}
</script>

<style scoped lang="stylus">
.feature
  width: 1250px
  margin 50px auto 0
  height: 100%
  overflow hidden
  .feature-list
    width: 210px
    overflow hidden
    float left
    margin 0 20px
    .feature-img
      width: 100%
      height: 220px
      transition: all .5s ease
    .feature-title
      display block
      margin-top 10px
      font-family: "SimSun"
      font-size 26px
      text-align center
    .feature-img:hover
      transform: scale(1.1)
</style>

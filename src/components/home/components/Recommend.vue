<template>
    <div class="recommend">
      <ul>
        <li class="recommend-list">
          <img class="list-img" src="http://xian-tourism.com/image/index-pic-1.jpg">
        </li>
        <li class="recommend-list old-city">
          <h3 class="recommend-title">古城渭南</h3>
          <p class="recommend-words">华夏文明的重要发祥地之一，素有华夏之根、文化之源、三圣故里美誉</p>
        </li>
        <li class="recommend-list list-words huashan">
          <h3 class="recommend-title">西岳华山</h3>
          <p class="recommend-words">“西岳崚嶒竦处尊，诸峰罗立如儿孙。 安得仙人九节杖，拄到玉女洗头盆。”</p>
        </li>
        <li class="recommend-list">
          <img class="list-img" src="http://www.chinahuashan.com/admin/file/view2.htm?id=32770">
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend'
}
</script>

<style scoped lang="stylus">
.recommend
  width: 1250px
  margin 50px auto 0
  height: 640px
  .recommend-list
    display block
    float left
    width: 50%
    height 316px
    cursor: pointer
  .huashan
    background: url("http://www.xian-tourism.com/image/index-intro-bg-2.jpg") 50% no-repeat
    .recommend-title
      font-size 50px
      font-family "SimSun"
      font-weight 400
      text-align center
      padding-top 50px
    .recommend-words
      font-family "SimSun"
      text-align center
      font-size 16px
  .old-city
    background: url("http://www.xian-tourism.com/image/index-intro-bg-1.jpg") 50% no-repeat
    .recommend-title
      font-size 50px
      font-family "SimSun"
      font-weight 400
      text-align center
      padding-top 50px
    .recommend-words
      font-family "SimSun"
      text-align center
      font-size 16px
  .list-img
    height: 316px
    width: 100%
</style>

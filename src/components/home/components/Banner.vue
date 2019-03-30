<template>
<div class="banner">
  <swiper :options="swiperOption" class="banner-swiper">
    <swiper-slide>
      <img class="swiper-img" src="http://www.weinanwenlv.com/upload/201802/1517884026.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="http://www.weinanwenlv.com/upload/201802/1517884043.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="http://www.weinanwenlv.com/upload/201802/1517827755.jpg">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeBanner',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        },
        loop: true,
        autoplay: {
          delay: 3000, // 自动切换的时间间隔，单位ms
          disableOnInteraction: true, // 用户操作swiper之后，是否禁止autoplay
          waitForTransition: true, // 等待过渡完毕。自动切换会在slide过渡完毕后才开始计时
        },
        navigation: {
          nextEl: '.swiper-button-next', // 前进按钮的css选择器或HTML元素。
          prevEl: '.swiper-button-prev', // 后退按钮的css选择器或HTML元素。
          hideOnClick: true, // 点击slide时显示/隐藏按钮
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.banner
  width: 100%
  .banner-swiper
    width: 100%
    .swiper-img
      width: 100%
</style>

<template>
<div class="footer">
  <span class="footer-title">大美渭南欢迎您！</span>
  <span class="footer-contact">旅游咨询电话：18292412724 地址：渭南师范学院 邮编：714000</span>
</div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style scoped lang="stylus">
.footer
  width: 1250px
  height: 200px
  margin 0 auto
  background: #272831 url("http://www.xian-tourism.com/image/footer-bg.png") bottom no-repeat
  .footer-title
    width 100%
    display block
    text-align center
    color: #6a6d80
    font-family "SimSun"
    font-size 30px
    padding-top 50px
  .footer-contact
    display block
    width: 100%
    color #6a6d80
    font-family "SimSun"
    text-align center
    font-size 14px
    padding-top 20px
</style>

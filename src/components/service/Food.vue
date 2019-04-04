<template>
<div class="food">
  <home-header></home-header>
  <!--banner-->
  <img class="banner-img" src="http://file.geeker.com.cn/uploadfile/test/1542112192419/06-%E6%97%85%E6%B8%B8%E5%B8%AE%E5%8A%A9_02.jpg">
  <!--导航start-->
  <div class="intro-breadcrumb">
    您当前的位置：
    <i class="el-icon-location-outline intro-icon"></i>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
      <el-breadcrumb-item>玩转渭南</el-breadcrumb-item>
      <el-breadcrumb-item>吃在渭南</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <!--食物列表start-->
  <ul class="food-ul">
    <li class="food-list" v-for="item of foodlist" :key="item.id">
      <div class="food-img">
        <img class="food-img-item" :src="item.imgUrl">
      </div>
      <h3 class="food-title">{{ item.title }}</h3>
      <p class="food-content">{{ item.content }}</p>
    </li>
  </ul>
  <!--分页start-->
  <el-pagination
    class="intro-pagi"
    background
    layout="prev, pager, next"
    :total="100">
  </el-pagination>
  <home-footer></home-footer>
</div>
</template>

<script>
import HomeHeader from '../../common/Header'
import HomeFooter from '../../common/Footer'
export default {
  name: 'Food',
  components: {
    HomeHeader,
    HomeFooter
  },
  data () {
    return {
      foodlist: [
        {
          id: 1,
          imgUrl: 'http://file.geeker.com.cn/uploadfile/ptisp/img/1541989379747/羊肉泡馍.jpg?x-oss-process=image/crop,x_39,y_0,w_587,h_440',
          title: '羊肉泡馍',
          content: '羊肉泡馍简称羊肉泡、泡馍，制作原料主要有羊肉、葱末、粉丝、糖蒜等，古称"羊羹"，西北美馔，它烹制精细，料重味醇，肉烂汤浓，肥而不腻，营养丰富，香气四溢，诱人食欲，食后回味无穷。'
        }, {
          id: 2,
          imgUrl: 'http://file.geeker.com.cn/uploadfile/ptisp/img/1541989798053/%E7%94%91%E7%B3%95.jpg?x-oss-process=image/crop,x_193,y_0,w_960,h_720',
          title: '甑糕',
          content: '“甑糕”就是以红枣和糯米为原料，用“甑”蒸制成的“糕”，故名。甑糕米枣交融，老幼咸宜，营养丰富，滋补性强，色泽鲜润，绵软粘甜，浓香扑鼻，久食不厌，风味独特。'
        }, {
          id: 3,
          imgUrl: 'http://file.geeker.com.cn/uploadfile/ptisp/img/1541991025833/%E7%83%A7%E8%82%98%E5%AD%90.jpg?x-oss-process=image/crop,x_63,y_0,w_548,h_411',
          title: '大荔带把肘子',
          content: '在从前人们把吃一顿肉当成过一回年的年月里，一席之上有一只色泽红亮、慢火煨得浓香的大肘子，那简直就是最使人兴奋不过的大好事了！'
        }, {
          id: 4,
          imgUrl: 'https://s3.cdn.xiangha.com/zhishi/201410/241453155260.jpg/MTgweDEzMA.webp',
          title: '时辰包子',
          content: '包子状如僧帽，小巧玲珑，周边洁白，包底金黄，肥而不腻，香味悠长，吃一顿包子走10里路，还口齿留香。所以又被叫做“十里香包子”。吃时必定佐以大葱蘸黄面酱，还须喝一杯浓茶。'
        }, {
          id: 5,
          imgUrl: 'https://s3.cdn.xiangha.com/zhishi/201410/241547236498.jpg/MTgweDEzMA.webp',
          title: '同州枣沫糊',
          content: '同州枣沫糊又叫枣肉沫糊，是陕西省关中和西安一带著名的汉族传统小吃，以同州(今大荔县)产生最早，最为有名，故多称“同州枣沫糊”。相传，该小吃始于唐代。'
        }, {
          id: 6,
          imgUrl: 'https://s3.cdn.xiangha.com/zhishi/201410/241348544261.jpg/MTgweDEzMA.webp',
          title: '椽头蒸馍',
          content: '蒲城椽头蒸馍，凡是吃过的人，无不拍手称绝。绝者有三：一是色绝，光泽晶莹，体如美玉；二是香绝，天然浑成，异香扑鼻；三是味绝，食之味长，满口皆香。'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.food
  height: 100%
  background-color: #f5f5f5
  overflow hidden
  .banner-img
    width 100%
    height: 400px
  .intro-breadcrumb
    font-size 16px
    margin 30px 0 0 60px
    position relative
    line-height 24px
    .intro-icon
      font-size 24px
      color #909399
      position absolute
      left -25px
      top -2px
  /*食物列表*/
  .food-ul
    overflow hidden
    width: 1250px
    margin 50px auto
    .food-list
      float left
      background-color: #fff
      width: 378px
      height: 400px
      margin 0 19px 40px
      .food-img
        height: 272px
        overflow hidden
        .food-img-item
          height: 100%
          margin 8px
          overflow hidden
          transition all .5s ease
        .food-img-item:hover
          transform scale(1.1)
      .food-title
        font-size 16px
        font-family "SimSun"
        padding-left 15px
        border-left 6px solid red
        border-radius 6px
        margin 8px
      .food-content
        color #666
        font-size 14px
        line-height 18px
        padding-left 8px
        text-indent 28px
  .intro-pagi
    margin -60px 0 10px
</style>

<template>
<div class="pictures">
  <home-header></home-header>
  <img class="banner-img" src="http://file.geeker.com.cn/uploadfile/test/1541670630338/05-%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5_02.jpg">
  <!--导航start-->
  <div class="intro-breadcrumb">
    您当前的位置：
    <i class="el-icon-location-outline intro-icon"></i>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
      <el-breadcrumb-item>旅游资讯</el-breadcrumb-item>
      <el-breadcrumb-item>美图赏析</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <!--筛选start-->
  <div class="pic-nav">
    <el-radio-group v-model="radio5" size="small">
      <el-radio-button label="全部"></el-radio-button>
      <el-radio-button label="特色美食"></el-radio-button>
      <el-radio-button label="网红打卡地"></el-radio-button>
      <el-radio-button label="自然风景"></el-radio-button>
      <el-radio-button label="人文景观"></el-radio-button>
    </el-radio-group>
  </div>
  <!--轮播图start-->
  <div class="pic-swiper">
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in pics" :key="item.id">
        <img :src=item.imgUrl>
      </el-carousel-item>
    </el-carousel>
  </div>
  <home-footer></home-footer>
</div>
</template>

<script>
import HomeHeader from '../../common/Header'
import HomeFooter from '../../common/Footer'
export default {
  name: 'Pictures',
  components: {
    HomeHeader,
    HomeFooter
  },
  data () {
    return {
      radio5: '全部',
      pics: [
        {
          id: '1',
          imgUrl: 'http://www.weinanwenlv.com/include/thumb.php?dir=../upload/201810/1539310254.JPG&x=700&y=350'
        },
        {
          id: '2',
          imgUrl: 'http://www.weinanwenlv.com/include/thumb.php?dir=../upload/201810/1539315648.jpg&x=700&y=350'
        },
        {
          id: '3',
          imgUrl: 'http://www.weinanwenlv.com/include/thumb.php?dir=../upload/201810/1539315458.JPG&x=700&y=350'
        },
        {
          id: '4',
          imgUrl: 'http://www.weinanwenlv.com/include/thumb.php?dir=../upload/201802/1519628400.png&x=700&y=350'
        },
        {
          id: '5',
          imgUrl: 'http://www.weinanwenlv.com/include/thumb.php?dir=../upload/201802/1519628168.png&x=700&y=350'
        },
        {
          id: '6',
          imgUrl: 'http://www.weinanwenlv.com/include/thumb.php?dir=../upload/201802/1519625659.jpg&x=700&y=350'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .pictures
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
    .pic-nav
      margin 20px 0 10px 40px
    .pic-swiper
      margin-top 30px
      .el-carousel__item h3 {
          color: #475669;
          font-size: 14px;
          opacity: 0.75;
          line-height: 200px;
          margin: 0;
        }
</style>

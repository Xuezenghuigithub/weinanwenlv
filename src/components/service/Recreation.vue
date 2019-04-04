<template>
  <div class="recreation">
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
        <el-breadcrumb-item>娱在渭南</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--食物列表start-->
    <ul class="recreation-ul">
      <li class="recreation-list" v-for="item of recreationlist" :key="item.id">
        <div class="recreation-img">
          <img class="recreation-img-item" :src="item.imgUrl">
          <h2 class="recreation-title">{{ item.title }}</h2>
        </div>
        <p class="recreation-content"><i class="iconfont icon-tel">&#xe618;</i>电话：{{ item.tel }}</p>
        <p class="recreation-content"><i class="iconfont icon-address">&#xe60b;</i>地址：{{ item.address}}</p>
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
    name: 'Recreation',
    components: {
      HomeHeader,
      HomeFooter
    },
    data () {
      return {
        recreationlist: [
          {
            id: 1,
            imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3343210514,3285670624&fm=173&s=278249A506070AEE60A17C4D03005050&w=460&h=331&img.JPEG',
            title: 'Zoo Coffee 动物园咖啡',
            tel: '0913-2150003',
            address: '渭南市临渭区前进路与朝阳路十字信达广场'
          }, {
            id: 2,
            imgUrl: 'https://p0.meituan.net/merchantpic/330a3a6f48f6aeb221c8754cebb546fc4223593.jpg',
            title: '37°2轻奢K歌·VR私人影院',
            tel: '0913-2059069',
            address: '渭南市临渭区临渭区仓程路华盛公寓对面'
          }, {
            id: 3,
            imgUrl: 'https://p1.meituan.net/merchantpic/6ac8a2816e3cd56c9075f3a0eb9340e3666470.jpg',
            title: '幻城网咖-概念酒吧',
            tel: '0913-2669898',
            address: '渭南市临渭区临渭区宏帆广场B馆2楼'
          }, {
            id: 4,
            imgUrl: 'https://p1.meituan.net/merchantpic/20a44ed8fc81f39b3a6b8774a2cbefeb500085.jpg',
            title: '新领地量贩KTV',
            tel: '0913-3456778',
            address: '渭南市蒲城县朝阳街西段体育彩票管理中心旁'
          }, {
            id: 5,
            imgUrl: 'http://p0.meituan.net/ugcpic/7154a047fd93b32ac9dd0d1c895196be',
            title: '陕西华山射击俱乐部',
            tel: '18791307000',
            address: '渭南华阴市罗敷镇华山御温泉向东200米 '
          }, {
            id: 6,
            imgUrl: 'http://p1.meituan.net/dpdeal/11d7c9a8458d7daa4c6cd1619ff43d531639890.jpg',
            title: '赛尔名座游泳健身中心',
            tel: '0913-2159888',
            address: '渭南市临渭区杜化路海兴城1号楼3-4层'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .recreation
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
    /*娱乐列表*/
    .recreation-ul
      overflow hidden
      width: 1250px
      margin 50px auto
      .recreation-list
        float left
        background-color: #fff
        width: 378px
        height: 360px
        margin 0 19px 40px
        .recreation-img
          position relative
          height: 272px
          overflow hidden
          .recreation-img-item
            height: 100%
            margin 8px
            overflow hidden
            transition all .5s ease
          .recreation-img-item:hover
            transform scale(1.1)
        .recreation-title
          text-align center
          width: 80%
          height: 40px
          position absolute
          font-size 16px
          font-weight 700
          line-height 40px
          font-family "SimSun"
          color #fff
          bottom -14px
          left 50%
          transform translate(-50%,0)
          background-color: rgba(0,0,0,.6)
        .recreation-content
          color #666
          font-size 14px
          line-height 16px
          text-indent 28px
          .icon-tel
            font-size 16px
            color #fff
            background-color: #b21f1f
            border-radius 50%
            margin-right 5px
          .icon-address
            font-size 16px
            color #fff
            background-color: #09d079
            border-radius 50%
            margin-right 5px
    .intro-pagi
      margin -60px 0 10px
</style>

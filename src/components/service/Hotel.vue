<template>
  <div class="hotel">
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
        <el-breadcrumb-item>住在渭南</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--酒店列表start-->
    <ul class="hotel-ul">
      <li class="hotel-list" v-for="item of hotellist" :key="item.id">
        <div class="hotel-img">
          <img class="hotel-img-item" :src="item.imgUrl">
        </div>
        <h3 class="hotel-name">
          {{ item.name }}<span class="hotel-star">{{ item.star }}</span>
          <a :href="item.reserveUrl" class="hotel-reserve" target="_blank">
            <el-button type="primary" size="mini" icon="el-icon-bell">预定</el-button>
          </a>
        </h3>
        <hr class="hotel-hr">
        <p class="hotel-tel">
          <i class="el-icon-phone"></i>电话：{{ item.tel }}
        </p>
        <p class="hotel-address">
          <i class="el-icon-location"></i>地址：{{ item.address }}
        </p>
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
  name: 'Hotel',
  components: {
    HomeHeader,
    HomeFooter
  },
  data () {
    return {
      hotellist: [
        {
          id: 1,
          imgUrl: 'http://file.geeker.com.cn/uploadfile/ptisp/img/1542075911297/%E5%A4%A9%E5%9F%9F%E5%87%AF%E8%8E%B1%E5%A4%A7%E9%A5%AD%E5%BA%97.png?x-oss-process=image/crop,x_74,y_0,w_561,h_421',
          name: '渭南桃园·美莎国际酒店',
          star: '五星级',
          tel: '0913-2555555',
          address: '渭南临渭区乐天大街与仓程路十字东南角',
          reserveUrl: 'https://www.meituan.com/jiudian/41784564/'
        }, {
          id: 2,
          imgUrl: 'https://userimg.qunarzz.com/imgs/201812/05/C._M0DCiiLPMlPRo_4i480s.jpg',
          name: '韩城黄河明珠开元名都大酒店',
          star: '五星级',
          tel: '0913-5266666',
          address: '韩城乔南路东段南侧(桢州公园)',
          reserveUrl: 'https://www.meituan.com/jiudian/164137852/'
        }, {
          id: 3,
          imgUrl: 'https://userimg.qunarzz.com/imgs/201812/15/C._M0DCiigRYTTY-zki480s.jpg',
          name: '韩城强大格兰云天大酒店',
          star: '五星级',
          tel: '0913-5268888',
          address: '韩城盘河路北段',
          reserveUrl: 'https://www.meituan.com/jiudian/169377995/'
        }, {
          id: 4,
          imgUrl: 'https://userimg.qunarzz.com/imgs/201903/15/C.W2yHAPN3R1G3_3AvN480s.jpg',
          name: '华山国际大酒店',
          star: '五星级',
          tel: '0913-4336667',
          address: '华阴华岳路与东岳路交叉处',
          reserveUrl: 'https://www.meituan.com/jiudian/98061106/'
        }, {
          id: 5,
          imgUrl: 'https://userimg.qunarzz.com/imgs/201809/28/C._M0DCify8A3OgFPRi480s.jpg',
          name: '白玉兰酒店',
          star: '四星级',
          tel: '0913-2666622',
          address: '渭南临渭区杜化路中段海兴城S5号楼',
          reserveUrl: 'https://www.meituan.com/jiudian/180087653/'
        }, {
          id: 6,
          imgUrl: 'https://userimg.qunarzz.com/imgs/201805/16/C._M0DCii_usnbrWXXi480s.jpg',
          name: '潼关女娲泉温泉度假酒店',
          star: '四星级',
          tel: '0913-3020337',
          address: '潼关港安路潼关古城内',
          reserveUrl: 'https://www.meituan.com/jiudian/119466556/'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .hotel
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
    .hotel-ul
      overflow hidden
      width: 1250px
      margin 50px auto
      .hotel-list
        float left
        background-color: #fff
        width: 378px
        height: 400px
        margin 0 19px 40px
        .hotel-img
          height: 272px
          overflow hidden
          .hotel-img-item
            height: 100%
            margin 8px
            overflow hidden
            transition all .5s ease
          .hotel-img-item:hover
            transform scale(1.1)
        .hotel-name
          position relative
          font-size 16px
          font-family "SimSun"
          padding-left 15px
          margin 8px
          .hotel-star
            display inline-block
            width: 56px
            height: 20px
            background-color: #b21f1f
            color #fff
            font-size 12px
            line-height 20px
            text-align center
          .hotel-reserve
            position absolute
            right 1px
            top 0
        .hotel-tel,.hotel-address
          font-size 14px
          margin-left 20px
        .hotel-hr
          margin 20px 20px
    .intro-pagi
      margin -60px 0 10px
</style>

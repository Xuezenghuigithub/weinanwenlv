<template>
    <div class="scenic">
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
          <el-breadcrumb-item>游在渭南</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!--景区start-->
      <div class="scenic-main">
        <ul class="scenic-ul">
          <li class="scenic-list"
              v-for="item of sceniclist"
              :key="item.id"
          >
            <div class="scenic-img">
              <img class="scenic-img-item" :src="item.imgUrl">
            </div>
            <div class="scenic-content">
              <h3 class="content-title">{{ item.name }}
                <a :href="item.buyUrl" class="scenic-buy" target="_blank">
                  <el-button type="primary" size="mini" icon="el-icon-bell">购票</el-button>
                </a>
              </h3>
              <p class="content-text"><i class="iconfont icon-lvl">&#xe642;</i>景区等级：{{ item.lvl }}</p>
              <p class="content-text"><i class="iconfont icon-price">&#xe600;</i>门票价格：{{ item.price }}</p>
              <p class="content-text"><i class="iconfont icon-time">&#xe63a;</i>开放时间：{{ item.time }}</p>
              <p class="content-text"><i class="iconfont icon-tel">&#xe618;</i>景区电话：{{ item.tel }}</p>
              <p class="content-text"><i class="iconfont icon-address">&#xe60b;</i>景区地址：{{ item.address }}</p>
            </div>
          </li>
        </ul>
      </div>
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
  name: 'Scenic',
  components: {
    HomeHeader,
    HomeFooter
  },
  data () {
    return {
      sceniclist: [
        {
          id: 1,
          name: '华山',
          imgUrl: 'https://youimg1.c-ctrip.com/target/100s0u000000j3g2z1F7C_C_500_280_Q60.jpg',
          lvl: 'AAAAA',
          price: 160,
          time: '全天',
          tel: '0913-4362692',
          address: '渭南市华阴市集灵路中段',
          buyUrl: 'https://piao.ctrip.com/ticket/dest/t136698.html'
        }, {
          id: 2,
          name: '少华山景区',
          imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553967888884&di=a41b71150f5a608f55d080b83933a7be&imgtype%20%20%20%20%20%20%20%20=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fmw690%2F001rzrFity72kYHOSNZ93%26690',
          lvl: 'AAAA',
          price: 54,
          time: '8:00-17:30',
          tel: '0913-4362692',
          address: '渭南市华县莲花寺镇刘家河村',
          buyUrl: 'https://piao.ctrip.com/dest/t55321.html'
        }, {
          id: 3,
          name: '大荔沙苑同州沙漠',
          imgUrl: 'http://p0.ssl.cdn.btime.com/t01cf5e8701bf9ad951.jpg?size=640x420',
          lvl: 'AAA',
          price: 50,
          time: '8:00-17:00',
          tel: '0913-4362692',
          address: '渭南市大荔县羌白镇沙苑村',
          buyUrl: 'https://piao.ctrip.com/dest/t4386386.html'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .scenic
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
    .scenic-main
      margin 50px auto
      width: 1250px
      .scenic-ul
        overflow hidden
      .scenic-list
        float left
        padding 30px
        background-color: #fff
        margin-bottom 20px
        .scenic-img
          float left
          overflow hidden
          width: 345px
          height: 278px
          margin-right 60px
          .scenic-img-item
            height: 100%
            margin-right 20px
        .scenic-content
          float left
          .content-title
            position relative
            width: 750px
            font-size 28px
            font-family "SimSun"
            margin: 10px 0 0 0
            padding-bottom 10px
            border-bottom: 1px solid #ccc
            .scenic-buy
              position absolute
              right 20px
          .content-text
            font-size 14px
            color #333
            line-height 26px
            .icon-lvl,.icon-price,.icon-time,.icon-tel,.icon-address
              font-size 18px
              color #fff
              display inline-block
              width: 26px
              height: 26px
              border-radius 50%
              line-height 26px
              text-align center
              margin-right 8px
            .icon-lvl
              background-color: #f12a79
            .icon-price
              background-color: #748cff
            .icon-time
              background-color: #f12a79
            .icon-tel
              background-color: #09d079
            .icon-address
              background-color: #ffa417
    .intro-pagi
      margin -60px 0 10px
</style>

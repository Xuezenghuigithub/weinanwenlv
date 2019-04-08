<template>
  <div class="intro">
    <home-header></home-header>
    <img class="banner-img" src="https://goss2.vcg.com/creative/vcg/800/version23/VCG41143920478.jpg">
    <!--导航start-->
    <div class="intro-breadcrumb">
      您当前的位置：
      <i class="el-icon-location-outline intri-icon"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
        <el-breadcrumb-item>玩转渭南</el-breadcrumb-item>
        <el-breadcrumb-item>历史文化旅游</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="intro-content">
      <ul>
        <li class="intro-list">
          <h2 class="list-title">澄城县尧头窑遗址（4A）</h2>
          <p class="list-content">渭南市澄城县尧头镇有一处国内罕见的民窑群遗址，面积达4平方公里，制瓷历史长达千年。
            清代民国时期，尧头制瓷业到达鼎盛，“尧头窑”烧制的碗、盆、罐、瓮等民间陶瓷器具粗朴耐用，行销多省，名声远扬。
            时至今日，尧头窑遗址仍有保存较完整的古窑30余座、古民居75处,是目前发现的保存最完整的原生态古窑址遗址群，
            被称为“中国原生态陶瓷的活化石”和“中国现存最大的天然民窑博物馆”。</p>
          <el-row>
            <el-button plain type="info" class="intro-btn">查看详情</el-button>
          </el-row>
        </li>
        <li class="intro-list">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554654182183&di=51c3cf07065d820b42da9399e2b56546&imgtype=0&src=http%3A%2F%2Fimg1.ph.126.net%2Fhu7SAwmqqiq0kFgnxJX6-Q%3D%3D%2F6630908336514155446.jpg">
        </li>
        <li class="intro-list">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554654318520&di=95c882afe5fe9bd19393917ad7e7263c&imgtype=0&src=http%3A%2F%2Fimg8.ppsj.com.cn%2F416%2F4167%2Fw231863008.jpg">
        </li>
        <li class="intro-list">
          <h2 class="list-title">司马迁祠墓（4A）</h2>
          <p class="list-content">司马迁祠墓坐落在韩城市南10公里芝川镇的韩奕坡悬崖上，始建于西晋永嘉4年。
            1982年2月，国务院公布为全国重点文物保护位。司马迁祠墓建筑自坡下至顶端，依崖就势，层递而上。
            登其巅，可东望滔滔黄河，西眺巍巍梁山，南瞰古魏长城，北观芝水长流，可谓山环水抱，气象万千。
            壮观的自然形式和秀丽的风光，映衬出司马迁的高尚人格和伟大的业绩。</p>
          <el-row>
            <el-button plain type="info" class="intro-btn">查看详情</el-button>
          </el-row>
        </li>
        <li class="intro-list">
          <h2 class="list-title">党家村古建筑群（4A）</h2>
          <p class="list-content">党家村古建筑位于陕西省韩城市西庄镇。党家村建筑始建于元至顺二年（1331年），
            初名东阳湾，后更名党家湾、党家村。明永乐十二年（1414年）起扩建，划出民门、二门、三门住区与发展区，
            清代扩建，为防匪盗，筑上寨沁阳堡。其居住居民主要为党、贾二姓族人。党家村民居四合院是韩城民居的典型代表。</p>
          <el-row>
            <el-button plain type="info" class="intro-btn">查看详情</el-button>
          </el-row>
        </li>
        <li class="intro-list">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554654629931&di=0fce06a06b7ff88ffc67993802ce49c9&imgtype=0&src=http%3A%2F%2Fb3-q.mafengwo.net%2Fs10%2FM00%2F4A%2FAB%2FwKgBZ1kJUWOAVjC2ABYkjLbTT1w20.jpeg%3FimageView2%2F2%2Fw%2F680%2Fq%2F90">
        </li>
      </ul>
    </div>
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
  import HomeHeader from '../../../common/Header'
  import HomeFooter from '../../../common/Footer'
  export default {
    name: 'Historical',
    components: {
      HomeHeader,
      HomeFooter
    }
  }
</script>

<style lang="stylus" scoped>
  .intro
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
      .intri-icon
        font-size 24px
        color #909399
        position absolute
        left -25px
        top -2px
    .intro-content
      position relative
      overflow hidden
      width: 1250px
      margin 0 auto
      .intro-list
        overflow hidden
        float left
        margin-top 50px
        width: 50%
        height: 400px
        background: url("http://www.xian-tourism.com/image/index-intro-bg-2.jpg") 50% no-repeat
        .list-title
          font-weight 400
          font-family "SimSun"
          font-size 30px
          padding 50px 0 0 40px
        .list-content
          font-family "SimSun"
          font-size 16px
          padding 0 30px
          line-height 26px
          text-indent 32px
        .intro-btn
          position absolute
          top 20px
          left 50px
    .intro-pagi
      margin 10px 0 10px
</style>

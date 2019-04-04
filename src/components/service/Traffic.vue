<template>
<div class="traffic">
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
      <el-breadcrumb-item>行在渭南</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <!--出行方式start-->
  <div class="traffic-main">
    <ul class="traffic-ul">
      <li class="traffic-list">
      <div class="traffic-img">
        <img class="traffic-img-item" src="http://file.geeker.com.cn/uploadfile/test/1542188810886/1.jpg">
      </div>
      <div class="traffic-content">
          <span class="traffic-content-title">
            <i class="iconfont traffic-icon">&#xe704;</i>
            机场航线
          </span>
        <p class="traffic-content-text">渭南华山机场位于陕西省渭南市华州区柳枝镇，距离渭南市区35公里，距离华山景区19公里，
          南连连霍高速，东近榆商高速，近靠郑西高速铁路和西潼城际铁路。服务以大华山为主的旅游资源，
          提升华山景区通达能力，发挥华山旅游对地区发展的拉动作用。</p>
      </div>
    </li>
      <li class="traffic-list">
        <div class="traffic-content">
          <span class="traffic-content-title">
            <i class="iconfont traffic-icon">&#xe65e;</i>
            铁路与高铁
          </span>
          <p class="traffic-content-text">渭南北站，位于陕西省渭南市临渭区仓程路北端，沙王渭河大桥南端西侧，
            是郑西客运专线和大西客运专线上的一个共线高铁客运站，2010年2月6日，随郑西客运专线开通正式投入使用，
            也是全国首座采用正线下式站房设计的车站，车站站台整体上是全球第三长的桥梁——渭南渭河特大桥的一部分。
            站房面积9800平方米，站场共计4台8线。已经开通至上海、北京、太原、杭州、成都、深圳、广州等地的直达线路。</p>
        </div>
        <div class="traffic-img">
          <img class="traffic-img-item" src="http://file.geeker.com.cn/uploadfile/test/1542188850398/2.jpg">
        </div>
      </li>
      <li class="traffic-list">
        <div class="traffic-img">
          <img class="traffic-img-item" src="http://file.geeker.com.cn/uploadfile/test/1542188874583/3.jpg">
        </div>
        <div class="traffic-content">
          <span class="traffic-content-title">
            <i class="iconfont traffic-icon">&#xe70a;</i>
            公路与汽车
          </span>
          <p class="traffic-content-text">渭南地处陕西东部，素有“三秦要道，八省通衢”之称。截止2017年年底，
            全市公路总里程突破1.9万公里，路网密度达到148.6公里/百平方公里。农村公路总里程达1.6万公里，
            100%的建制村通油路（水泥路），位居全省第二。全市拥有等级客运站20个、货运站2个，跨省、跨市、跨县及县内客运线路达649条，
            100%的乡镇通上班车，行政村通班车率达99%，客货运输位居全省第三。中心城区纯电动公交运营线路20条，在线运营车辆327辆，
            率先在全省实现首个纯电动公交城市，全市交通运输建设向着陕西东部交通枢纽城市大踏步前进。</p>
        </div>
      </li>
      <li class="traffic-list">
        <div class="traffic-content">
          <span class="traffic-content-title">
            <i class="iconfont traffic-icon">&#xe72b;</i>
            旅游汽车公司
          </span>
          <p class="traffic-content-text">21世纪后，以华山为代表的渭南旅游业迈入快速发展阶段。各景区创建提档升级，
            截止2018年末，渭南市共有A级旅游景区27处，其中5A级一家，4A级5家，3A级18家，2A级3家。以奇峰、峡谷、森林、
            溪水为核心的绿色观光游，以滩、关、渡、瀑、泉、湿地和珍稀鸟禽为特色的黄河生态游，以陵、墓、祠、庙、碑、
            塔和遗址为主体的历史文化游及以渭华起义纪念馆、习仲勋纪念馆为主体的红色旅游革命游已形成基本的旅游体系。</p>
        </div>
        <div class="traffic-img">
          <img class="traffic-img-item" src="http://file.geeker.com.cn/uploadfile/test/1542188850398/2.jpg">
        </div>
      </li>
    </ul>
  </div>
  <home-footer></home-footer>
</div>
</template>

<script>
import HomeHeader from '../../common/Header'
import HomeFooter from '../../common/Footer'
export default {
  name: 'Traffic',
  components: {
    HomeHeader,
    HomeFooter
  }
}
</script>

<style scoped lang="stylus">
.traffic
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
  .traffic-main
    margin 50px auto
    width: 1250px
    background-color: #fff
    .traffic-ul
      overflow hidden
    .traffic-list
      padding 30px
      float left
    .traffic-img
      float left
      height 308px
      overflow hidden
      .traffic-img-item
        height 100%
        margin-right 20px
    .traffic-content
      display block
      width: 718px
      float left
      .traffic-content-title
        font normal 400 24px/49px "Microsoft YaHei"
        color #b21f1f
        .traffic-icon
          padding 2px
          font-size 26px
          color #fff
          background-color: #b21f1f
          border-radius 10%
      .traffic-content-text
        font: normal 14px/24px "Microsoft YaHei"
        color: #666
        text-indent 28px
</style>

<template>
  <div class="intro">
    <home-header></home-header>
    <img class="banner-img" src="http://5b0988e595225.cdn.sohucs.com/images/20180921/066b0b7a1b0c459187fdd338d969f9bf.jpeg">
    <!--导航start-->
    <div class="intro-breadcrumb">
      您当前的位置：
      <i class="el-icon-location-outline intri-icon"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
        <el-breadcrumb-item>玩转渭南</el-breadcrumb-item>
        <el-breadcrumb-item>经典红色旅游</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="intro-content">
      <ul>
        <li class="intro-list">
          <h2 class="list-title">习仲勋陵园</h2>
          <p class="list-content">老一辈无产阶级革命家习仲勋的陵园位于陕西省富平县城西北陶艺果林园附近，
            陵园内植有侧柏、龙柏、白皮松、火球等，习仲勋的石刻座像位于陵园中央，庄严、肃穆、简朴、大方。
            园内习仲勋雕像和习仲勋夫人齐心书写的习仲勋语“战斗一生，快乐一生；天天奋斗，天天快乐”，引人上前敬仰。</p>
          <el-row>
            <el-button plain type="info" class="intro-btn">查看详情</el-button>
          </el-row>
        </li>
        <li class="intro-list">
          <img src="http://img1.gtimg.com/xian/pics/hv1/211/44/1850/120307681.jpg">
        </li>
        <li class="intro-list">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554655589876&di=95271b7091933cbf8705a3e9011ef47f&imgtype=0&src=http%3A%2F%2Fimg.weinan.gov.cn%2FHIWCMweinan%2F201708%2F201708100545018.jpg">
        </li>
        <li class="intro-list">
          <h2 class="list-title">杨虎城旧居</h2>
          <p class="list-content">杨虎城将军出生于陕西省蒲城县甘北村，居住在县城东槐院巷。蒲城县人民政府为了纪念杨虎城这位“千古功臣”，
            将这座故居列为重点文物保护单位，并在此建立了“杨虎城纪念馆”，1983年11月26日正式对外开放。
            现属国家级重点文物保护单位。这是一座古色古香、秀而不俗的民居宅院，建于1934年，是杨虎城将军为其母和家属所建。</p>
          <el-row>
            <el-button plain type="info" class="intro-btn">查看详情</el-button>
          </el-row>
        </li>
        <li class="intro-list">
          <h2 class="list-title">渭华起义纪念馆</h2>
          <p class="list-content">坐落在陕西省渭南市华州区高塘塬上，这里地势挺拔，山清水秀，风景宜人。南接秦岭，
            北临渭水，川塬起伏，沟壑纵横，粮丰林茂，人杰地灵。它与雄伟高大的渭华起义纪念塔相映生辉，
            是西北地区成立最早、规模最大、影响最广的早期农村革命根据地，在全国革命斗争史上也发挥有重大意义。</p>
          <el-row>
            <el-button plain type="info" class="intro-btn">查看详情</el-button>
          </el-row>
        </li>
        <li class="intro-list">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554655807902&di=491c8b2fc108572c5fe2146e09bbb3b2&imgtype=0&src=http%3A%2F%2Fupload.ishaanxi.com%2F2018%2F0807%2F1533630879620.jpg">
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
    name: 'Red',
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

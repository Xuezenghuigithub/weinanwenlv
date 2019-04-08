<template>
<div class="intro">
<home-header></home-header>
  <img class="banner-img" src="http://112.74.133.250:8080/zhly/uploadfile/20181015/f0ca057a65ea6bd901667706a0f301dc.jpg">
  <!--导航start-->
  <div class="intro-breadcrumb">
    您当前的位置：
  <i class="el-icon-location-outline intri-icon"></i>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
    <el-breadcrumb-item>旅游资讯</el-breadcrumb-item>
    <el-breadcrumb-item>景点介绍</el-breadcrumb-item>
  </el-breadcrumb>
  </div>
  <div class="intro-content">
    <ul>
      <li class="intro-list">
        <h2 class="list-title">西岳华山（5A）</h2>
        <p class="list-content">华山（Mount Hua）古称“西岳”，雅称“太华山”，为中国著名的五岳之一，中华文明的发祥地，“中华”和“华夏”之“华”，就源于华山。
          位于陕西省渭南市华阴市，在省会西安以东120千米处。南接秦岭，北瞰黄渭，自古以来就有“奇险天下第一山”的说法。
          华山是第一批国家重点风景名胜区，国家AAAAA级旅游景区，全国重点文物保护单位，国家地质公园。</p>
        <router-link to="/huashan">
        <el-row>
          <el-button plain type="info" class="intro-btn">查看详情</el-button>
        </el-row>
        </router-link>
      </li>
      <li class="intro-list">
        <img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=2f13ded96e81800a7ae8815cd05c589f/4bed2e738bd4b31c794ab3ed85d6277f9e2ff876.jpg">
      </li>
      <li class="intro-list">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553967888884&di=a41b71150f5a608f55d080b83933a7be&imgtype
        =0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fmw690%2F001rzrFity72kYHOSNZ93%26690">
      </li>
      <li class="intro-list">
        <h2 class="list-title">少华山景区（4A）</h2>
        <p class="list-content">少华山景区自然风光绮丽，文化底蕴深厚，是陕西东部黄金旅游线上以生态旅游、休闲度假、登山健身为主题的旅游风景区。
          景区位于陕西省华州区东南5公里处的秦岭北麓，东西宽约10公里，南北纵深35公里，总面积6300公顷。
          森林覆盖率高达90%，生态环境接近原始。由红崖湖、石门峡、密林谷、潜龙寺、少华峰五大景区组成。</p>
        <el-row>
        <el-button plain type="info" class="intro-btn">查看详情</el-button>
        </el-row>
      </li>
      <li class="intro-list">
        <h2 class="list-title">田水坊乡村旅居地</h2>
        <p class="list-content">偶遇，田水坊，一处回归自然的文创畅想之地，这里注定是一个会发生故事的地方，这里孕育着乡野的繁茂与气息，
          这里是理想乌托邦，现实桃花源，来这里，带你回到田美如初！</p>
        <el-row>
          <el-button plain type="info" class="intro-btn">查看详情</el-button>
        </el-row>
      </li>
      <li class="intro-list">
        <img src="http://www.weinanwenlv.com/upload/201801/1516419779.png">
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
import HomeHeader from '../../common/Header'
import HomeFooter from '../../common/Footer'
import Huashan from '../details/Huashan'
export default {
  name: 'Introduction',
  components: {
    HomeHeader,
    HomeFooter,
    Huashan
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

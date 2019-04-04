<template>
  <div class="shop">
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
        <el-breadcrumb-item>购在渭南</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--食物列表start-->
    <ul class="shop-ul">
      <li class="shop-list" v-for="item of shoplist" :key="item.id">
        <div class="shop-img">
          <img class="shop-img-item" :src="item.imgUrl">
        </div>
        <h3 class="shop-title">{{ item.title }}</h3>
        <p class="shop-content">{{ item.content }}</p>
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
  name: 'Shop',
  components: {
    HomeHeader,
    HomeFooter
  },
  data () {
    return {
      shoplist: [
        {
          id: 1,
          imgUrl: 'http://file.geeker.com.cn/uploadfile/ptisp/img/1541993169744/d.jpg?x-oss-process=image/crop,x_0,y_4,w_660,h_495',
          title: '大荔冬枣',
          content: '享有“南荔枝，北冬枣，百果王”的盛名。平均单果重17.5g，最大单果重可达25g，状如苹果，有“小苹果”之称。果皮赭红光亮、皮薄肉脆、甘甜清香、营养丰富，可食率达95%。'
        }, {
          id: 2,
          imgUrl: 'http://file.geeker.com.cn/uploadfile/ptisp/img/1541993954202/p.jpg?x-oss-process=image/crop,x_0,y_30,w_660,h_495',
          title: '临渭葡萄',
          content: '临渭区先后被中国果品流通协会命名为“中国葡萄之乡”，被国家葡萄产业技术体系确定为“综合示范基地”，被国家农业部认定为“国家标准果园”。渭北葡萄产业园也被省政府命名为省级现代农业园区。'
        }, {
          id: 3,
          imgUrl: 'http://file.geeker.com.cn/uploadfile/ptisp/img/1541991025833/%E7%83%A7%E8%82%98%E5%AD%90.jpg?x-oss-process=image/crop,x_63,y_0,w_548,h_411',
          title: '大荔带把肘子',
          content: '在从前人们把吃一顿肉当成过一回年的年月里，一席之上有一只色泽红亮、慢火煨得浓香的大肘子，那简直就是最使人兴奋不过的大好事了！'
        }, {
          id: 4,
          imgUrl: 'http://file.geeker.com.cn/uploadfile/ptisp/img/1542014507134/fm.jpg?x-oss-process=image/crop,x_0,y_33,w_660,h_495',
          title: '秦岭土蜂蜜',
          content: '蜂蜜是蜜蜂采集植物的花蜜或分泌物，经过充分酿造而储藏在脾内的甜物质。主要成分是葡萄糖和果糖以及丰富的氨基酸、维生素、矿物质、有机酸等。具有极高的保健及药用价值，自古以来被称为自然界的珍品。'
        }, {
          id: 5,
          imgUrl: 'http://img3.myhsw.cn/2018-07-18/zekkbcb2.jpg',
          title: '华山伴手礼',
          content: '摩崖石刻冰箱贴、吴侠系列抱枕、创意钥匙扣……由华旅集团旗下华景文化创意有限公司打造的“华山文创礼物之家”在华山游客中心开业运营。琳琅满目的文化创意产品引来不少游客关注。'
        }, {
          id: 6,
          imgUrl: 'http://www.shanxijuying.com/d/file/w/2/2018-09-14/d6e370db22eae86407ac04c4ed97ee15.jpg',
          title: '白水苹果',
          content: '白水县是国内外专家公认的苹果最佳优生区之一，素有“中国苹果之乡”的美誉，其“白水”苹果也被确定为陕西省知名品牌。'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .shop
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
    .shop-ul
      overflow hidden
      width: 1250px
      margin 50px auto
      .shop-list
        float left
        background-color: #fff
        width: 378px
        height: 400px
        margin 0 19px 40px
        .shop-img
          height: 272px
          overflow hidden
          .shop-img-item
            height: 100%
            margin 8px
            overflow hidden
            transition all .5s ease
          .shop-img-item:hover
            transform scale(1.1)
        .shop-title
          font-size 16px
          font-family "SimSun"
          padding-left 15px
          border-left 6px solid red
          border-radius 6px
          margin 8px
        .shop-content
          color #666
          font-size 14px
          line-height 18px
          padding-left 8px
          text-indent 28px
    .intro-pagi
      margin -60px 0 10px
</style>

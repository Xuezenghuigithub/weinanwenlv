<template>
  <div class="intro">
    <home-header></home-header>
    <img class="banner-img" src="http://s1.sinaimg.cn/mw690/001zwptXzy7m4DR8CZOc0&690">
    <div class="intro-breadcrumb">
      您当前的位置：
      <i class="el-icon-location-outline intri-icon"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
        <el-breadcrumb-item>旅游资讯</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/introduction' }">景点介绍</el-breadcrumb-item>
        <el-breadcrumb-item>司马迁祠墓</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--详情-->
    <div class="content">
      <div class="title-box">
        <h1 class="title">司马迁祠墓</h1>
      </div>
      <div class="detail">
        <!--轮播图-->
        <div class="block">
          <el-carousel trigger="click" height="435px">
            <el-carousel-item v-for="item in imgList" :key="item.id">
              <img :src="item.imgUrl" class="img-swiper">
            </el-carousel-item>
          </el-carousel>
        </div>
        <!--基本信息-->
        <div class="info">
          <h2 class="info-title">基本信息</h2>
          <ul class="info-ul-t">
            <li class="info-li-t info-li-t-lvl">
              <p class="li-title">景区星级</p>
              <p class="li-content">AAAA</p>
            </li>
            <li class="info-li-t info-li-t-pr">
              <p class="li-title">门票价格</p>
              <p class="li-price">80</p>
            </li>
            <li class="info-li-t info-li-t-tel">
              <p class="li-title">景区电话</p>
              <p class="li-content">0913-5414335</p>
            </li>
          </ul>
          <ul class="info-ul-v">
            <li class="info-li-v">
              <label>营业时间：</label>
              3－11月 8:00－18:00；12月份至2月份 8:00－17:30
            </li>
            <li class="info-li-v">
              <label>景区官网：</label>
              <a class="info-add" target="_blank">无</a>
              <a class="info-button" href="https://piao.ctrip.com/dest/t52659.html" target="_blank">
                <el-button round size="mini">一键购票</el-button>
              </a>
            </li>
            <li class="info-li-v">
              <label>景区地址：</label>
              渭南市韩城市芝川镇芝马路
              <a class="info-button" href="https://www.amap.com/place/B0391003M9" target="_blank">
                <el-button round size="mini">一键导航</el-button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="info-synopsis">
        <div class="synopsis-title-box">
          <h3 class="synopsis-title">景区简介</h3>
        </div>
        <p class="synopsis-text">在陕西省韩城市芝川镇东南约300米处。司马迁(约前145～? )，字子长，夏阳(今陕西韩城)人，
          西汉著名文学家、历史学家。他所著《史记》一书，开创中国通史体例，对后世史学和文学的发展都有深远的影响。
          后人为纪念他的功绩，在原籍修建祠和墓。现存建筑最早是宋代修建的寝宫和山门。1982年中华人民共和国国务院公
          布为全国重点文物保护单位。 祠依山傍水而建，坐落在用砖石筑成的高台上，高约 100米，占地面积约 13万平方米，
          台阶为 99层，分为 4段。第 1、2 段立牌坊，上书“高山仰止”、“河山之阳”。第 4段为宋代建筑的山门，门额上书
          “汉太史祠”。祠院正中为献殿、寝宫。寝宫内有司马迁塑像1 尊。寝宫左邻为斋厨。寝宫后为墓地。墓冢砖垣围护，
          墓上有古柏数株。墓基周围嵌有砖刻八卦和名人题词多幅。墓前立“汉太史公墓”碑。 马迁墓与祠，在韩城市城南10公里
          芝川镇南门外，位于黄河西岸的梁山东麓。现为全国重点文物保护单位。司马迁祠墓位于城区以南10公里处的芝川黄河古
          渡口高岗上。一部《史记》成就了司马迁。史圣的祠墓也像一座丰碑，历经千百年沧桑而愈显雄伟。司马迁祠墓依山而建。
          过芝秀古桥，进入汉太史司马迁祠墓群，过古牌坊，便是石条铺就的司马古道。</p>
      </div>
    </div>
    <!--评论列表start-->
    <div class="comment-table">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="username"
          label="昵称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="place"
          label="景点"
          width="180">
        </el-table-column>
        <el-table-column
          prop="content"
          label="评论内容"
          width="700">
        </el-table-column>
      </el-table>
      <!--添加评论-->
      <el-button
        class="add-comment"
        type="primary"
        icon="el-icon-edit"
        @click="handleAddClick">我也要评论</el-button>
      <!--添加评论表单-->
      <transition enter-active-class="bounceIn" leave-active-class="bounceOut">
        <div class="add-form" v-show="step">
          <!--选择日期-->
          <el-date-picker
            v-model="time"
            type="date"
            placeholder="选择日期"
            class="select-time"
            value-format="yyyy-MM-dd"
            format="yyyy-MM-dd"
          >
          </el-date-picker>
          <!--选择评论地点-->
          <template>
            <el-select
              v-model="value"
              class="select-place"
              filterable
              placeholder="司马迁祠墓"
              disabled
            >
              <el-option
                v-for="item in options"
                :key="item.id"
                :value="item.value"
                :id="item.id">
              </el-option>
            </el-select>
          </template>
          <!--输入评论内容-->
          <el-input
            type="textarea"
            placeholder="请输入评论内容"
            v-model="text"
            maxlength="200"
            :autosize="{ minRows: 4, maxRows: 4}"
            class="comment-text"
          >
          </el-input>
          <!--输入为空提示-->
          <el-alert
            title="任意选项不能为空"
            type="error"
            center
            show-icon
            class="error-massage"
            v-show="this.errorStep"
          >
          </el-alert>
          <el-row class="form-button">
            <el-button type="danger" @click="handleCloseClick" class="form-close">取消</el-button>
            <el-button type="success" @click="handleSubmitClick" class="form-submit">发表</el-button>
          </el-row>
        </div>
      </transition>
    </div>
    <!--分页器start-->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    <home-footer></home-footer>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from '../../../../common/Header'
  import HomeFooter from '../../../../common/Footer'
  export default {
    name: 'Simaqian',
    components: {
      HomeHeader,
      HomeFooter
    },
    data () {
      return {
        imgList: [
          {
            id: 1,
            imgUrl: 'http://img8.ppsj.com.cn/416/4167/w231863008.jpg'
          },
          {
            id: 2,
            imgUrl: 'http://s16.sinaimg.cn/large/001zwptXzy7m4DVl94b2f&690'
          },
          {
            id: 3,
            imgUrl: 'http://s9.sinaimg.cn/large/001zwptXzy7m4DRTf4cf8&690'
          },
          {
            id: 4,
            imgUrl: 'http://s3.sinaimg.cn/large/001zwptXzy7m4DUJVMCe2&690'
          },
          {
            id: 5,
            imgUrl: 'http://s12.sinaimg.cn/mw690/001zwptXzy7m4DQoFmPcb&690'
          }
        ],
        step: false,
        time: '',
        options: [{
          id: '选项1',
          value: '华山'
        }, {
          id: '选项2',
          value: '少华山'
        }, {
          id: '选项3',
          value: '同洲湖'
        }, {
          id: '选项4',
          value: '处女泉'
        }, {
          id: '选项5',
          value: '渭华起义纪念馆'
        }, {
          id: '选项6',
          value: '澄城县尧头窑遗址'
        }, {
          id: '选项7',
          value: '司马迁祠墓'
        }, {
          id: '选项8',
          value: '党家村古建筑群'
        }, {
          id: '选项9',
          value: '洽川风景区'
        }, {
          id: '选项10',
          value: '卤阳湖 '
        }],
        value: '',
        text: '',
        errorStep: false,
        tableData: [{
          date: '2018-12-12',
          username: '薛增辉',
          place: '司马迁祠墓',
          content: '太史公司马迁，那是我从小时候一提起就肃然起敬的历史人物，扎根在心底的浩然正气。'
        }, {
          date: '2019-02-03',
          username: '杨磊',
          place: '司马迁祠墓',
          content: '今日有幸瞻仰，一路上满心呼唤，善哉善哉，快哉快哉。'
        }, {
          date: '2019-03-10',
          username: 'Mike',
          place: '司马迁祠墓',
          content: 'Nice！！！'
        }, {
          date: '2019-03-20',
          username: '王鹏勋',
          place: '司马迁祠墓',
          content: '司马迁在忍受旷世屈辱后，不怨天尤人，不阿谀奉承，挥动如椽巨笔发奋著述，究天人之际，通古今之变，成一家之言，那种风骨节气和胆识精神，又是何人能比？'
        }, {
          date: '2019-03-21',
          username: '静静',
          place: '司马迁祠墓',
          content: '站在祠庙凭高远眺，看到黄河沉沉一线，远山朦胧苍翠，山环水抱，长桥飞架，风光壮丽，心胸为之一振，此行不虚！'
        }]
      }
    },
    methods: {
      handleAddClick () {
        this.step = true
        this.time = ''
        this.value = ''
        this.text = ''
      },
      handleCloseClick () {
        this.step = false
      },
      handleSubmitClick () {
        const comment = {
          date: this.time,
          username: '用户1',
          place: '华山',
          content: this.text
        }
        this.tableData.unshift(comment)
        this.$message({
          message: '发表成功',
          type: 'success'
        })
        this.step = false
      }
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
    .intro-pagi
      margin 10px 0 10px
    .content
      background-color: #fff
      width: 1250px
      margin 0 auto
      .title-box
        width: 95%
        height: 60px
        border-bottom 1px solid #e9e9e9
        margin 0 30px
        .title
          line-height 60px
          font-family "SimSun"
          font-weight 400
          font-size 30px
          color: #b21f1f
    .detail
      position relative
      height: 100%
      margin 30px 30px
      .block
        width: 580px
        overflow hidden
      .el-carousel__item h3
        font-size: 14px
        opacity: 0.75
        line-height: 350px
        margin: 0
      .img-swiper
        width: 100%
        height: 100%
      .info
        z-index 999
        position absolute
        background-color: #b21f1f
        top: 0
        right 0
        bottom 0
        width: 550px
        padding 0 30px
        border-left: 1px solid #fff
        color #fff
        .info-title
          line-height: 82px
          font-size: 22px
          font-weight: 100
          margin: 0
          padding: 0
        .info-ul-t
          overflow hidden
          .info-li-t
            position relative
            float left
            height: 70px
            padding: 0
            margin: 0
          .info-li-t-lvl
            width: 165px
          .info-li-t-pr
            width: 120px
            padding-left 45px
            border-left: 1px solid #e88a8a
            .li-price
              font-size 24px
              font-weight 400
              margin-top -4px
          .info-li-t-tel
            width: 120px
            padding-left: 45px
            border-left: 1px solid #e88a8a
            .li-title
              font-size 16px
            .li-content
              font-size 14px
        .info-ul-v
          padding-top 40px
          line-height 20px
          font-size 14px
          .info-li-v
            padding 10px 0
            .info-add
              text-decoration none
              color #fff
            .info-button
              position: absolute
              right 100px
    .synopsis-title-box
      margin: 0
      padding: 0
      width: 100%
      border-bottom 1px solid #e9e9e9
    .info-synopsis
      margin 0 30px
      width: 95%
      .synopsis-title
        text-align center
        width: 100px
        background-color: #b21f1f
        color: #fff
        font-size 16px
        line-height 36px
        height 36px
        font-weight 400
        margin 0
        padding 0
      .synopsis-text
        padding 30px 0
        font-size 14px
        font-family: "Microsoft YaHei"
        line-height 2
        text-indent 28px
  .comment-table
    padding: 40px 50px
    position relative
  .add-comment
    position absolute
    right 40px
    bottom -10px
  .add-form
    z-index 999
    overflow hidden
    position fixed
    top: 50%
    left: 50%
    width: 800px
    background-color: #f5f5f5
    margin -100px -400px 0
    border: 1px solid #909399
    border-radius 10px
    height: 200px
    box-shadow 1px 3px 10px rgba(0,0,0,.5)
</style>
<style lang="stylus">
  .select-time
    float left
    margin-top: 20px
    margin-left 20px
  .select-place
    float left
    width: 260px
    margin-top: 20px
    margin-left 20px
  .comment-text
    width: 500px
    display block
    margin-left 20px
    margin-top: 70px
  .form-close
    position absolute
    bottom -20px
    right 100px
  .form-submit
    position absolute
    bottom -20px
    right 10px
  .error-massage
    position absolute
</style>

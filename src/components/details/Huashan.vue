<template>
  <div class="intro">
    <home-header></home-header>
    <img class="banner-img" src="http://112.74.133.250:8080/zhly/uploadfile/20181015/f0ca057a65ea6bd901667706a0f301dc.jpg">
    <div class="intro-breadcrumb">
      您当前的位置：
      <i class="el-icon-location-outline intri-icon"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
        <el-breadcrumb-item>旅游资讯</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/introduction' }">景点介绍</el-breadcrumb-item>
        <el-breadcrumb-item>华山</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--详情-->
    <div class="content">
      <div class="title-box">
        <h1 class="title">华山</h1>
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
              <p class="li-content">AAAAA</p>
            </li>
            <li class="info-li-t info-li-t-pr">
              <p class="li-title">门票价格</p>
              <p class="li-price">160</p>
            </li>
            <li class="info-li-t info-li-t-tel">
              <p class="li-title">景区电话</p>
              <p class="li-content">0913-4362692</p>
            </li>
          </ul>
          <ul class="info-ul-v">
            <li class="info-li-v">
              <label>营业时间：</label>
              全天
            </li>
            <li class="info-li-v">
              <label>景区官网：</label>
              <a class="info-add" href="http://huashan16.com" target="_blank">http://huashan16.com</a>
              <a class="info-button" href="https://piao.ctrip.com/ticket/dest/t136698.html" target="_blank">
                <el-button round size="mini">一键购票</el-button>
              </a>
            </li>
            <li class="info-li-v">
              <label>景区地址：</label>
              渭南市华阴市集灵路中段
              <a class="info-button" href="https://ditu.amap.com/place/B0391003ON" target="_blank">
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
        <p class="synopsis-text">华山（Mount Hua）古称“西岳”，雅称“太华山”，为中国著名的五岳之一，中华文明的发祥地，“中华”和“华夏”之“华”，就源于华山。位于陕西省渭南市华阴市，在省会西安以东120千米处。南接秦岭，北瞰黄渭，自古以来就有“奇险天下第一山”的说法。华山是第一批国家重点风景名胜区，国家AAAAA级旅游景区，全国重点文物保护单位，国家地质公园。
          华山是中华民族的圣山。中华之“华”，源于华山，由此，华山有了“华夏之根”之称。这一成果首先被孙中山所引用，创立“中华民国”。据清代国学大师章太炎和历代专家学者考证：华夏民族最初形成并居住于“华山之周”，名其国土曰华，其后人迹所至，遍及九州，华之名始广。
          华山是道教主流全真派圣地，为“第四洞天”，也是中国民间广泛崇奉的神祇，即西岳华山君神。共有72个半悬空洞，道观20余座，其中玉泉院、都龙庙、东道院、镇岳宫被列为全国重点道教宫观，有陈抟、郝大通、贺元希等著名的道教高人。
          1982年，华山被国务院颁布为首批国家级风景名胜区；1991年，华山被国家旅游局评为四十佳旅游胜地之一；1999年，华山被中央文明委、建设部、国家旅游局命名为全国文明风景旅游区示范点；2004年，华山被评为中华十大名山； 2011年，华山被国家旅游局评为国家AAAAA级旅游景区；2017年6月29日，华山荣膺“2017中国最受欢迎旅游景区”殊荣。
          华山是神州九大观日处之一，观日处位于华山东峰（亦称朝阳峰），朝阳台为最佳地点。“中国黄河50景”之一。</p>
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
              placeholder="请选择景区"
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
  import HomeHeader from '../../common/Header'
  import HomeFooter from '../../common/Footer'
  export default {
    name: 'Huashan',
    components: {
      HomeHeader,
      HomeFooter
    },
    data () {
      return {
        imgList: [
          {
            id: 1,
            imgUrl: 'https://youimg1.c-ctrip.com/target/fd/tg/g4/M0B/3C/45/CggYHlXKtaOAM6jRAAs45HPKtlg492_C_500_280_Q60.jpg'
          },
          {
            id: 2,
            imgUrl: 'https://youimg1.c-ctrip.com/target/fd/tg/g4/M05/3C/51/CggYHFXKtZCAPTybAAgPqgkZfz8510_C_500_280_Q60.jpg'
          },
          {
            id: 3,
            imgUrl: 'https://youimg1.c-ctrip.com/target/fd/tg/g3/M08/17/5E/CggYG1aPK1mAHgv_ADR3caeUpZI130_C_500_280_Q60.jpg'
          },
          {
            id: 4,
            imgUrl: 'https://youimg1.c-ctrip.com/target/fd/tg/g4/M09/D8/D5/CggYHVbmIwSAZfBNACasJgURF0s788_C_500_280_Q60.jpg'
          },
          {
            id: 5,
            imgUrl: 'https://youimg1.c-ctrip.com/target/fd/tg/g4/M0A/D8/E5/CggYHVbmI2eAM3COACx_RPv5r-M631_C_500_280_Q60.jpg'
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
          place: '华山',
          content: '华山以险著称，也是我一直期待去的地方。自古华山一条路，现在我们不必走这条路，我们是坐着索道上山的（是西峰上西峰下），尽管如此我们去西峰山顶，南峰山顶还是爬了3个多小时的山路，蛮吃力的。要是没有索道，上山真是难以想象……'
        }, {
          date: '2019-02-03',
          username: '杨磊',
          place: '华山',
          content: '高滴很木！'
        }, {
          date: '2019-03-10',
          username: 'Mike',
          place: '华山',
          content: '风景优美，不愧是“奇险天下第一山”'
        }, {
          date: '2019-03-20',
          username: '王鹏勋',
          place: '华山',
          content: '花了整整五个小时才爬到东峰顶，还是很有成就感的！墙裂推荐！！'
        }, {
          date: '2019-03-21',
          username: '静静',
          place: '华山',
          content: '和男朋友一起去看日出~~'
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
          place: this.value,
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

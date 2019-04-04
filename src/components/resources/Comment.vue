<template>
  <div class="comment">
    <home-header></home-header>
    <img class="banner-img" src="http://file.geeker.com.cn/uploadfile/test/1541670630338/05-%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5_02.jpg">
    <!--导航start-->
    <div class="intro-breadcrumb">
      您当前的位置：
      <i class="el-icon-location-outline intro-icon"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
        <el-breadcrumb-item>旅游资讯</el-breadcrumb-item>
        <el-breadcrumb-item>评价讨论</el-breadcrumb-item>
      </el-breadcrumb>
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
          maxlength="100"
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
  </div>
</template>

<script>
import HomeHeader from '../../common/Header'
import HomeFooter from '../../common/Footer'
export default {
  name: 'Comment',
  components: {
    HomeHeader,
    HomeFooter
  },
  data () {
    return {
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
        username: '筝非',
        place: '同洲湖',
        content: '湖很大，环境很好，还可以划船，推荐！'
      }, {
        date: '2019-03-10',
        username: 'Mike',
        place: '少华山',
        content: '风景还可以，索道有点险，就是玻璃栈道太短、不够险，没有想像中的好。'
      }, {
        date: '2019-03-20',
        username: '小哥哥',
        place: '处女泉',
        content: '上周末，约了两个朋友，一起去了慕名已久的洽川风景区， 一睹十里荷塘的妖娆风姿。 到了合阳县城之后，乘坐合阳-洽川大巴直至景区，其实还是挺方便的。去了才知道，其实好玩的景点还是蛮多的。最舒服的莫过于温泉浴了，然而这个季节最养眼的就是十里荷塘的美景了！ 据说在处女泉，演绎了一段周文王与洽川美女-太姒之间纯美爱情。'
      }, {
        date: '2019-03-21',
        username: '小姐姐',
        place: '渭华起义纪念馆',
        content: '感受到了红色文化的魅力！'
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

<style scoped lang="stylus">
  .comment
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
    .comment-table
      padding: 40px 40px
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

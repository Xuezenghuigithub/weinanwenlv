<template>
  <div class="header">
    <router-link to="/">
    <div class="header-left">渭南文化旅游综合服务平台</div>
    </router-link>
    <div class="header-right">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
               text-color="#000">
        <el-submenu index="1">
          <template slot="title">旅游资讯</template>
          <router-link to="/introduction" tag="span">
            <el-menu-item index="1-1">景点介绍</el-menu-item>
          </router-link>
          <router-link to="/pictures" tag="span">
            <el-menu-item index="1-2">美图赏析</el-menu-item>
          </router-link>
          <router-link to="/comment" tag="span">
            <el-menu-item index="1-3">评价讨论</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">玩转渭南</template>
          <router-link to="/food" tag="span">
            <el-menu-item index="2-1">吃在渭南</el-menu-item>
          </router-link>
          <router-link to="/hotel" tag="span">
            <el-menu-item index="2-2">住在渭南</el-menu-item>
          </router-link>
          <router-link to="/traffic" tag="span">
            <el-menu-item index="2-3">行在渭南</el-menu-item>
          </router-link>
          <router-link to="/scenic" tag="span">
            <el-menu-item index="2-3">游在渭南</el-menu-item>
          </router-link>
          <router-link to="/recreation" tag="span">
            <el-menu-item index="2-3">娱在渭南</el-menu-item>
          </router-link>
          <router-link to="/shop" tag="span">
            <el-menu-item index="2-3">购在渭南</el-menu-item>
          </router-link>
        </el-submenu>
        <el-menu-item index="3">用户登录</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="stylus">
  .header
    height: 110px
    background-color: #fff
    .header-left
      float left
      width: 400px
      line-height 110px
      color: #000
      font-size: 26px
      padding-left 20px
    .header-right
      float right
      hight: 110px
      margin-right 200px
</style>
<style lang="stylus">
  .el-menu--horizontal > .el-submenu .el-submenu__title,
  .el-menu--horizontal > .el-menu-item
    font-size 20px
    height: 110px
    line-height 110px
    margin-right 80px

  .el-menu-item
    font-size 14px
    text-align center
    line-height 20px
</style>

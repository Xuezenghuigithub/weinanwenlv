<template>
  <div class="login">
    <home-header></home-header>
    <div class="login-bg">
    <div class="login-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="登录" name="first">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="second">
          <register></register>
        </el-tab-pane>
      </el-tabs>
    </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from '../../common/Header'
  import HomeFooter from '../../common/Footer'
  import Register from './Register'
  export default {
    name: 'Shop',
    components: {
      HomeHeader,
      HomeFooter,
      Register
    },
    data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      return {
        activeName: 'first',
        ruleForm: {
          name: '',
          pass: '',
          checkPass: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入您的名称', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          pass: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      // 选项卡切换
      handleClick (tab, event) {
      },
      // 重置表单
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      // 提交表单
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              type: 'success',
              message: '登录成功'
            })
            this.$router.push('/')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  .el-tabs__nav-scroll
    padding-left 160px
  .el-tabs__item
    color #409EFF
    font-size 24px
  .el-tabs__item.is-active
    color #fff
  .el-form-item__label
    margin 20px 0
  .el-input
    margin 20px 0
  .el-form-item__label
    color #fff
  .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before
    color #fff
</style>
<style scoped lang="stylus">
    .login-bg
      height 510px
      background: url("http://www.deskier.com/uploads/allimg/160913/1-160913154947.jpg") round
      background-size cover
      padding-top 150px
    .login-content
      margin 0 auto
      width: 30%
      padding 30px 40px 40px 0
      background-color: Transparent
      border-radius 10px
      box-shadow 1px 3px 10px 2px rgba(0,0,0,.4)
</style>

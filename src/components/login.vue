<template>
  <div class="login">
    <el-dialog
      :title="isLogin ? '登录' : '注册'"
      :visible.sync="dialogVisible"
      width="300px">
      <div>
        <el-input
          placeholder="请输入账号"
          v-model="input.userName">
          <img slot="prefix" src="/static/imgs/icon/userName.png"/>
        </el-input>
        <div class="err-tip" v-show="errTip[0]">
          <i class="el-icon-warning">该账号已存在</i>
        </div>
        <el-input
          placeholder="请输入密码"
          :type="isShowPwd ? 'text' : 'password'"
          v-model="input.userPwd">
          <img slot="prefix" src="/static/imgs/icon/pwd.png"/>
          <img slot="suffix" @click="isShowPwd = !isShowPwd" :src="'/static/imgs/icon/show' + isShowPwd +'.png'"/>
        </el-input>
        <div class="err-tip" v-show="errTip[1]">
          <i class="el-icon-warning">账号密码不匹配</i>
        </div>
        <el-input v-if="!isLogin"
          placeholder="请再次输入密码"
          :type="isShowPwd ? 'text' : 'password'"
          v-model="input.repeatPwd">
          <img slot="prefix" src="/static/imgs/icon/pwd.png"/>
          <img slot="suffix" @click="isShowPwd = !isShowPwd" :src="'/static/imgs/icon/show' + isShowPwd +'.png'"/>
        </el-input>
        <div class="err-tip" v-show="errTip[2]">
          <i class="el-icon-warning">两次密码不一致</i>
        </div>
        <el-button round @click="submit">{{isLogin ? '登录' : '注册'}}</el-button>
        <div class="footer-btn">
          <el-button type="text">立即注册</el-button>
          <el-button type="text">忘记密码？</el-button>
        </div>
      </div>
      <!--      <span slot="footer" class="dialog-footer">-->
      <!--        <el-button @click="dialogVisible = false">取 消</el-button>-->
      <!--        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
      <!--      </span>-->
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        dialogVisible: this.showDialog,
        isShowPwd: false,    // 是否显示密码
        errTip: [false,false,false],         // 错误提示
        input: {
          userName: '',
          userPwd: '',
          repeatPwd: ''
        }
      }
    },
    props: ['showDialog','isLogin'],
    watch: {
      // 清除出错的提示
      'input.userName': function () {
        this.$set(this.errTip,0,false)
      },
      'input.userPwd': function () {
        this.$set(this.errTip,1,false)
      },
      'input.repeatPwd': function () {
        this.$set(this.errTip,2,false)
      },
      showDialog: function (val) {
        if(val) {
          this.dialogVisible = val
        }
      },
      dialogVisible: function (val) {
        if(!val) {
          this.$emit('onclosemodal')
        }
      }
    },
    mounted() {
      let i = 0
      // setInterval(()=>{
      //   this.input.userName = i++
      //   // console.log(this.input)
      // },1000)
    },
    methods: {
      submit() {
        if(!this.input.userName) {
          this.$set(this.errTip,0,true)
          return
        }
        if(!this.input.userPwd) {
          this.$set(this.errTip,1,true)
          return
        }
        if(!this.isLogin && (this.input.repeatPwd !== this.input.userPwd)){
          this.$set(this.errTip,2,true)
          return
        }
        console.log('开始登录')
      }
    }
  }
</script>

<style lang="scss">
  .login {
    
    .el-dialog {
      border-radius: 10px;
    }
    
    .el-dialog__title {
      font-size: 26px;
    }
    
    .el-input {
      input {
        border: none;
        border-bottom: 1px solid #ccc;
        color: #ee4400;
        margin-bottom: 15px;
      }
      
      img {
        width: 22px;
        height: 22px;
        padding-top: 7px;
      }
      
      .el-input__inner {
        padding-left: 40px;
      }
    }
    
    .el-button.is-round {
      width: 85%;
      margin-top: 15px;
      background: #ff6900;
      color: #fff;
    }
    
    .footer-btn {
      width: 85%;
      margin: {
        top: 10px;
        bottom: -20px;
        left: auto;
        right: auto;
      };
      display: flex;
      justify-content: space-between;
    }
    
    .err-tip {
      text-align: left;
      margin-bottom: 2px;
      margin-top: -5px;
      padding-left: 8px;
      color: #F56C6C;
    }
    
  }
</style>

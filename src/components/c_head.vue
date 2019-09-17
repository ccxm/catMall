<template>
  <div class="container">
    <div class="brand">
      <img src="/static/imgs/cat.png">
      <div>
        <span>丑小喵</span>
        <span>cxmmao.com</span>
      </div>
    </div>
    <div>
      <el-button type="primary" @click="showModal">登录</el-button>
      <el-button type="success" @click="showModal">注册</el-button>
    </div>
    <login class="head-login" :show-dialog="isShowModal" @onclosemodal="closeModal" ></login>
  </div>
</template>

<script>
  import login from '../components/login'
  
  export default {
    name: 'c_head',
    data() {
      return {
        isShowModal: false
      }
    },
    components: {
      login,
    },
    methods: {
      showModal() {
        this.isShowModal = true
      },
      closeModal() {
        this.isShowModal = false
      }
    }
  }
</script>

<style lang="scss">
  .container {
    background: #222;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    padding: 10px 50px;
    
    .brand {
      display: flex;
      align-items: center;
      
      img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
      
      div {
        display: flex;
        flex-direction: column;
        
        span {
          display: block;
        }
        
        span:nth-child(1) {
          font-size: 32px;
        }
      }
    }
  
    .head-login {
      position: absolute;
    }
  }
  
</style>

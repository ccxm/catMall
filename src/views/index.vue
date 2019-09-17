<template>
  <div>
<!--    <el-container>-->
<!--      <el-header>-->
<!--        <h1>Welcome to cxm Mall!</h1>-->
<!--        <login :is-login="true"></login>-->
<!--&lt;!&ndash;        <money :money="'1212.00'"></money>&ndash;&gt;-->
<!--      </el-header>-->
<!--    </el-container>-->
    <c_head></c_head>
  </div>
</template>

<script>
  import login from '../components/login'
  import money from '../components/money'
  import c_head from '../components/c_head'
  
  export default {
    name: 'index',
    components: {
      login,
      money,
      c_head
    }
  }
</script>

<style scoped>

</style>

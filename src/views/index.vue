<template>
  <div>
    <el-header>
      <h1>Welcome to cxm Mall!</h1>
      <login :is-login="true"></login>
    </el-header>
  </div>
</template>

<script>
    import login from "../components/login"

    export default {
        name: "index",
        components: {
            login
        }
    }
</script>

<style scoped>

</style>

<template>
  <div class="money" :class="size">
    <span class="money-icon">￥</span>
    <span class="money-text">{{money}}</span>
  </div>
</template>

<script>
    export default {
        name: 'money'
    }
</script>

<style scoped lang="scss">
  .money {
    display: flex;
    align-items: flex-end;
    
    text {
      color: #DD524D;
    }
  
    .money-icon {
      font-size: 24px;
      line-height: 24px;
      padding-bottom: 2px;
    }
  
    .money-text {
      font-size: 36px;
      line-height: 36px;
    }
  }
  
  .md {
    .money-icon {
      font-size: 24px;
    }
  
    .money-text {
      font-size: 36px;
    }
  }
  
  .sm {
    .money-icon {
      font-size: 22px;
    }
  
    .money-text {
      font-size: 32px;
    }
  }
  
  .xs {
    .money-icon {
      font-size: 20px;
      line-height: 20px;
    }
  
    .money-text {
      font-size: 26px;
    }
  }
  
  /*删除线*/
  
  .d-xs {
    text{
      font-size: 20px !important;
      line-height: 20px !important;
      color: #999999;
      text-decoration: line-through;
    }
  
    .money-icon {
      padding-top: 5px;
    }
  }
</style>

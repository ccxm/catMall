<template>
  <div class="money" :class="size">
    <span class="money-icon">￥</span>
    <span class="money-text">{{money | formatMoney}}</span>
  </div>
</template>

<script>
    export default {
        name: 'money',
        props: ['money','size']
    }
</script>

<style scoped lang="scss">
  .money {
    display: flex;
    align-items: flex-end;
    
    span {
      color: #DD524D;
    }
  
    .money-icon {
      font-size: 20px;
      line-height: 20px;
      padding-bottom: 2px;
      margin-right: -5px;
    }
  
    .money-text {
      font-size: 36px;
      line-height: 36px;
    }
  }
  
  .md {
    .money-icon {
      font-size: 18px;
    }
  
    .money-text {
      font-size: 32px;
    }
  }
  
  .sm {
    .money-icon {
      font-size: 16px;
    }
  
    .money-text {
      font-size: 28px;
    }
  }
  
  .xs {
    .money-icon {
      font-size: 14px;
      line-height: 14px;
    }
  
    .money-text {
      font-size: 24px;
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

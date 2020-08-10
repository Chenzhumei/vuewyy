<template>
  <div class="login-wrap">
      <p class="note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a href="#" class="btn">用户登录</a>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang='scss' scoped>
 .login-wrap {
     height: 126px;
     background: url('./../../../../assets/images/index.png') no-repeat;
     .note {
        width: 205px;
        margin: 0 auto;
        padding: 16px 0;
        line-height: 22px;
        color: #666;
        font-size: 12px;
     }
     .btn {
        display: block;
        width: 100px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        color: #fff;
        text-shadow: 0 1px 0 #8a060b;
        text-decoration: none;
        margin: 0 auto;
        background: url('./../../../../assets/images/index.png') no-repeat;
        background-position: 0 -195px;
        &:hover {
            text-decoration: none;
        }
     }
 }
</style>

<template>
  <div>
    <a class="cover">
    <img :src="sheet.picUrl" :alt="sheet.name">
    <div class="bottom">
      <div class="num">
        <i class="icon erji"></i>
        <span>{{sheet.playCount | playCount}}</span>
      </div>
      <i class="icon play"></i>
    </div>
  </a>
  <span class="dec">{{sheet.name}}</span>
  </div>
</template>

<script lang="ts">

export default {
  data() {
      return {

      }
  },
  created() {

  },
  props: {
      sheet: {
          type: Object
      }
  }
}
</script>

<style lang="scss" scoped>
@import '@assets/scss/mixins.scss';
.cover{
    position: relative;
    display: block;
    height:140px;
    width: 140px;
    img{
        height: 100%;
    }
    .bottom{
        width: 100%;
        position: absolute;
        bottom: 0;
        background-color: #000;
        color: #fff;
        opacity: .8;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3px 8px;
        .num {
        span{
            margin-left: 8px;
            color: #ccc;
            font-size: 12px;
        }
        }
    .icon {
      @include icon('./../../assets/images/iconall.png', 14px, 11px);
      &.erji{
        background-position: 0 -24px;
      }
      &.play{
        width: 16px;
        height:17px;
        background-position: 0 0;
        &:hover{
          background-position: 0 -60px;
        }
      }
    }
  }
}
.dec{
  display: block;
  margin-top: 8px;
  cursor: pointer;
  max-width: 140px;
  font-size: 12px;
}
</style>
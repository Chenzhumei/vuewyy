<template>
  <div class="singer-card">
      <img class="singer-img" :src="singer.picUrl" :alt="singer.name">
      <div class="info">
          <h4 class="singer-name">{{singer.alias.join('') || singer.name}}</h4>
          <p class="detail">专辑数：{{singer.albumSize}}</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
      singer: Object
  },
  components: {
  }
}
</script>

<style lang='scss' scoped>
.singer-card {
    width: 210px;
    height: 62px;
    background: #fafafa;
    display: flex;
    .singer-img {
        width: 62px;
        height: 62px;
    }
    .info {
        flex: 1;
        padding-left: 14px;
        border: 1px solid #e9e9e9;
        border-left: none;
        &:hover {
           background: #f4f4f4;
        }
        .singer-name, .detail {
          font-size: 14px;
          width: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #333;
          margin: 8px 0;
        }
        .detail {
         font-size: 12px;
         color: #666;
        }
    }
}
</style>

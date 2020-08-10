<template>
  <div class="carousel">
   <div class="wrap">
      <a-carousel autoplay arrows ref='carousel'>
        <div slot="prevArrow" class="custom-slick-arrow left" @click="pre()">
          <span class="arrow-left"></span>
        </div>
        <div slot="nextArrow" class="custom-slick-arrow right" @click="next()">
          <span class="arrow-right"></span>
        </div>

        <div class="carousel-item" v-for=" item in banners" :key="item.targetId">
          <a :href="item.url" target="_blank" class="banner-item">
            <img :src="item.imageUrl" />
          </a>
        </div>
      </a-carousel>
      <div class="download">
        <div class="btn">
          <p class="info">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import {getBanners} from '@service/home';

export default {
   data() {
     return {
       carouselActiveIndex: 0,
       banners: []
     }
   },
   methods: {
   },
   created() {
     getBanners().then(
       ({data}) => {
         this.banners = data.banners;
       }
     );
   }
}
</script>

<style lang="scss">
.carousel {
  background-color: #001529;
  .wrap {
    position: relative;
    width: 982px;
    height: 285px;
    margin: 0 auto;
    .ant-carousel {
      width: 730px;
    }
  .custom-slick-arrow {
      position: absolute;
      width: 37px;
      height: 50px;
      top:50%;
      margin-top: -20px;
      color: #fff;
      font-size: 40px;
      cursor: pointer;
      &:before {
        display: none;
      }
      &.left {
        left: -50px;
      }
      &.right {
        right: -305px;
      }
      .arrow-left {
        display: block;
        background: url('./banner.png') no-repeat;
        background-position: 0 -367px;
        width: 37px;
        height: 50px;
      }
      .arrow-right {
        display: block;
        width: 37px;
        height: 50px;
        background: url('./banner.png') no-repeat;
        background-position: 0 -518px;
      }
      
  }
  .slick-list {
    height: 285px;
    .carousel-item {
      img {
        display: block;
        width: 730px;
        height: 285px;
      }
    }
  }
  .slick-dots {
    height: 20px;
    .slick-active {
      button {
      display: block;
      width: 20px;
      height: 20px;
      overflow: hidden;
      background: url('./banner.png') 3px -343px;
      cursor: pointer;
      background-position: -16px -343px;
      }
    }
    button {
      display: block;
      width: 20px;
      height: 20px;
      overflow: hidden;
      background: url('./banner.png') 3px -343px;
      cursor: pointer;
      &:hover {
         background-position: -16px -343px;
      }
    }
  }
  .download {
    position: absolute;
    top: 0;
    z-index: 20;
    right: -2px;
    width: 254px;
    height: 285px;
    .btn {
      height: 285px;
      background: url('./../../assets/images/download.png');
      .info {
        color: #8d8d8d;
        font-size: 12px;
        padding-top: 255px;
       text-align: center;
    }
    }
  }
  }
}



</style>

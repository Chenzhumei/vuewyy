<template>
  <div class="home">
    <wyy-carousel></wyy-carousel>
    <div class="main">
      <div class="main-left">
        <!-- 热门推荐 -->
        <div class="recoment">
          <div class="r-header">
             <a class="hot-recoment">热门推荐</a>
             <div class="tab">
               <div class="tab-item" v-for="(tag, index) in tags" :key="tag.id">
                 <a href="#" class="s-fc3">{{tag.name}}</a>
                 <span class="line" :hidden="index === tags.length - 1">|</span>
               </div>
             </div>
             <span class="more">
               <a href="#">更多</a>
               <span class="more-arrow"></span>
             </span>
          </div>
          <div class="sheet-list">
             <single-sheet class="fl" v-for="(sheet,index) in songSheetList" :key="index" :sheet="sheet"></single-sheet>
          </div>
        </div>
        <!-- 个性化推荐 需登录 -->
        <div class="recoment">
          <div class="r-header">
             <a class="hot-recoment">个性化推荐</a>
          </div>
          <!-- <div class="sheet-list">
             <single-sheet class="fl" v-for="(sheet,index) in songSheetList" :key="index" :sheet="sheet"></single-sheet>
          </div> -->
        </div>
      </div>
      <div class="main-right"></div>
    </div>
  </div>
</template>

<script>
import wyyCarousel from '@components/wyy-carousel/WyyCarousel';
import singleSheet from '@components/single-sheet/SingleSheet';
import { getHotTags, getPerosonalSheetList} from "@service/home";
export default {
  data() {
    return {
      tags: [],
      songSheetList: []
    }
  },
  created() {
      getHotTags().then(
        ({data}) => {
          this.tags = data.tags.sort((x , y) => {
            return x.position - y.position
          }).slice(0 , 5);
        }
      );  
      getPerosonalSheetList().then(
        ({data}) => {
          this.songSheetList = data.result;
          console.log(this.songSheetList);
        }
      )
  },
  components: {
    wyyCarousel,
    singleSheet
  }
}
</script>

<style lang="scss">
.home {
  .main {
    width: 985px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    .main-left {
     margin-right: 250px;
     padding: 20px 20px 40px;
     .recoment {
       margin-bottom: 30px;
       .r-header {
          height: 33px;
          padding: 0 10px 0 34px;
          border-bottom: 2px solid #C10D0C;
          background: url('./../../assets/images/index.png') no-repeat;
          background-position: -225px -156px;
          .hot-recoment {
            float: left;
            font-size: 20px;
            font-weight: normal;
            line-height: 28px;
            &:hover {
              text-decoration: none;
            }
          }
          .tab {
            float: left;
            margin: 7px 0 0 20px;
            .tab-item {
              color: #666;
              display: inline;
              font-size: 12px;
              .line {
                margin: 0 10px;
                color: #ccc;
              }
            }
          }
          .more {
            float: right;
            margin-top: 9px;
            color: #666;
            font-size: 12px;
            .more-arrow {
              display: inline-block;
              width: 12px;
              height: 12px;
              margin-left: 4px;
              vertical-align: middle;
              background: url('./../../assets/images/index.png') no-repeat;
              background-position: 0 -240px;
            }
          }
        }
       }
       .sheet-list {
         margin-top: 20px;
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
       }
    }
    .main-right {
      float: right;
      width: 250px;
    }
  }
}

</style>
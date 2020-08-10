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
             <single-sheet class="fl mb-30" v-for="(sheet,index) in songSheetList" :key="index" :sheet="sheet"></single-sheet>
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
      <div class="main-right">
         <user-login></user-login>
         <!-- 入驻歌手 -->
         <div class="enter-singer">
           <div class="tit"><span class="fl">入驻歌手</span> <a class="fr">查看全部 <a-icon type="right"></a-icon></a></div>
           <div class="singer-wrap">
            <singer-card class="mt-14" v-for="singer in enterSingers" :key="singer.id" :singer="singer"></singer-card>
           </div>
           <div class="apply-btn">
             <a-button class="btn">申请成为网易音乐人</a-button>
           </div>
         </div>
         <!-- 热门主播 -->
         <div class="hot-dj">
          <div class="tit">热门主播</div>
          <div class="dj-wrap">
            <div class="dj-card" v-for="dj in hotDj" :key="dj.id">
                <img class="dj-img" :src="dj.avatarUrl" :alt="dj.nickName">
                <div class="info">
                    <h4 class="dj-name">{{dj.nickName}} <span class="sup-v"></span></h4>
                    <p class="detail">排行：{{dj.rank}}</p>
                </div>
            </div>
          </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import wyyCarousel from '@components/wyy-carousel/WyyCarousel';
import singleSheet from '@components/single-sheet/SingleSheet';
import userLogin from './userLogin/UserLogin';
import singerCard from './singerCard/SingerCard';

import { getHotTags, getPerosonalSheetList, getEnterSinger, getHotDj} from "@service/home";
export default {
  data() {
    return {
      tags: [],
      songSheetList: [],
      enterSingers: [],
      hotDj: []
    }
  },
  created() {
      getHotTags().then(
        ({data:res}) => {
          this.tags = res.tags.sort((x , y) => {
            return x.position - y.position
          }).slice(0 , 5);
        }
      )
      getPerosonalSheetList().then(
        ({data:res}) => {
          this.songSheetList = res.result;
        }
      )
      getEnterSinger().then(
        ({data:res}) => {
          this.enterSingers = res.artists;
        }
      )

      getHotDj().then(
        ({data:res}) => {
          this.hotDj = res.data.list;
          console.log( this.hotDj)
        }
      )

  },
  components: {
    wyyCarousel,
    singleSheet,
    userLogin,
    singerCard
  }
}
</script>

<style lang="scss">
.home {
  .main {
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    display: flex;
    .main-left {
     flex: 1;
     padding: 20px 20px 40px;
     border-right: 1px solid #d3d3d3;
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
         .mb-30 {
           margin-bottom: 30px;
         }
       }
    }
    .main-right {
      width: 250px;
      .mt-14 {
        margin-top: 14px;
      }
      .enter-singer {
        .tit {
          color: #333;
          width: 210px;
          margin: 0 auto;
          font-size: 12px;
          height: 40px;
          line-height:40px;
          border-bottom: 1px solid #ccc;
          .fl {
            font-weight: bold;
          }
        }
       .singer-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
       } 
       .apply-btn {
         text-align: center;
         margin-top: 15px;
        .btn {
          color: #333;
          width: 210px;
          border-collapse: #ccc;
          span {
            font-weight: 700;
          }
       }
       }
       
      }
      .hot-dj {
        margin-top: 20px;
        .tit {
          color: #333;
          width: 210px;
          margin: 0 auto 15px auto;
          font-size: 12px;
          height: 40px;
          line-height:40px;
          border-bottom: 1px solid #ccc;
          font-weight: 700;
        }
        .dj-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          .dj-card {
            width: 210px;
            height: 40px;
            display: flex;
            font-size: 12px;
            margin-bottom: 10px;
            .dj-img {
                width: 40px;
                height: 40px;
            }
            .info {
                flex: 1;
                padding-left: 14px;
                .dj-name, .detail {
                  width: 90%;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  color: #333;
                }
                .sup-v {
                  display: inline-block;
                  width: 11px;
                  height: 13px;
                  background: url('./../../assets/images/icon.png') no-repeat;
                  background-position: 0 1px;
                  font-size: 100%;
                }
                .detail {
                  color: #666;
                }
            }
        }
      }
    }
  }
  }
}

</style>
<template>
 <div class="player">
    <div class="lock">
       <div class="left">
           <span class="isLocked"></span>
        </div>
    </div>
   <div class="hand"></div>
   <div class="wrap">
       <div class="btns">
           <span class="prev"></span>
           <span class="toggle"></span>
           <span class="next"></span>
       </div>
       <div class="head">
           <img src="//s4.music.126.net/style/web2/img/default/default_album.jpg">
           <span class="mask"></span>
       </div>
       <div class="play">
           <div class="words clearfix">
               <p class="ellipsis margin-bottom-none"></p>
               <ul  class="songs clearfix margin-bottom-none"></ul>
            </div>
           <div class="bar">
               <div class="slider-wrap"></div>
               <span class="time">00:00/00:00</span>
           </div>
       </div>
       <div class="oper">
            <span class="like"></span>
            <span class="share"></span>
        </div>
        <div class="ctrl">
            <span class="volume"></span>
            <span class="loop"></span>
            <p class="open"></p>
            <!-- <div class="control-vol" ></div>    -->
        </div>
   </div>
 </div>
</template>

<script>
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
@import '@assets/scss/mixins.scss';
.player {
    position: fixed;
    zoom: 1;
    left: 0;
    // bottom: -71px;
    bottom: 0;
    width: 100%;
    background-color: #292929;
     .hand{
    width: 100%;
    height: 15px;
    cursor: pointer;
    opacity: .3;
  }
  .lock{
    position: relative;
    z-index: 1;
    .left{
      position: absolute;
      top: -5px;
      right: 15px;
      @include icon('../../assets/images/playbar.png', 52px, 67px);
      background-position: 0 -380px;
      i{
        margin: 6px 0 0 17px;
         @include icon('../../assets/images/playbar.png', 18px, 18px);
        background-position: -80px -380px;
        &:hover{
          background-position: -80px -400px;
        }
        &.locked{
          background-position: -100px -380px;
          &:hover{
            background-position: -100px -400px;
          }
        }
      }
    }
  }
    .wrap {
        position: relative;
        display: flex;
        padding: 8px 0;
        width: 980px;
        margin: 0 auto;
        .btns{
            width: 137px;
            padding-top: 6px;
            span{
            margin-right: 8px;
            border-radius: 50%;
            @include icon('../../assets/images/playbar.png', 28px, 28px);
            cursor: pointer;
            &.prev{
                background-position: 0 -130px;
                &:hover{
                background-position: -30px -130px;
                }
            }
            &.toggle{
                width: 36px;
                height:36px;
                background-position: -40px -204px;
                &.playing{
                background-position: 0 -165px;
                }
            }
            &.next{
                background-position: -80px -130px;
                &:hover{
                background-position: -110px -130px;
                }
            }
         }
        }
        .head{
            position: relative;
            margin: 6px 15px 0 0;
            img{
                width: 34px;
                height: 34px;
            }
            .mask{
                position: absolute;
                top: 0;
                left: 0;
                @include icon('../../assets/images/playbar.png', 34px, 34px);
                background-position: 0 -80px;
            }
        }
        .play{
        width: 608px;
        .words{
          color: #fff;
          min-height: 18px;
          text-shadow: 0 1px 0 0 5px 16px rgba(0, 0, 0, 0.8);
          &.hide{
            visibility: hidden;
          }
          p{
            float: left;
            max-width: 300px;
            margin-right: 10px;
            cursor: pointer;
          }
          .songs {
            float: left;
            li{
              float: left;
            }
          }
        }
        .bar{
          color: #fff;
          .slider-wrap{
            display: inline-block;
            width: 490px;
            margin-right: 10px;
            vertical-align: bottom;
            padding: 8px 0;
          }
        }
      }
      .oper{
        width: 60px;
        span{
          margin: 11px 2px 0 0;
          @include icon('../../assets/images/playbar.png', 25px, 25px);
          &.like{
            background-position: -88px -163px;
            &:hover{
              background-position: -88px -189px;
            }
          }
          &.share{
            background-position: -114px -163px;
            &:hover{
              background-position:-114px -189px;
            }
          }
        }
      }
      .ctrl{
        position: relative;
        width: 113px;
        padding-left: 13px;
        span{
          margin: 11px 2px 0 0;
          @include icon('../../assets/images/playbar.png', 25px, 25px);
          &.volume{
            background-position: -2px -248px;
            &:hover{
              background-position: -31px -248px;
            }
          }
          &.random{
            background-position: -66px -248px;
            &:hover{
              background-position: -93px -248px;
            }
          }
          &.loop{
            background-position: -3px -344px;
            &:hover{
              background-position: -33px -344px;
            }
          }
          &.singleLoop{
            background-position: -66px -344px;
            &:hover{
              background-position: -93px -344px;
            }
          }
        }
        .open{
          display: inline-block;
          cursor: pointer;
          span{
            display: block;
            text-align: center;
            color: #e2e2e2;
            text-shadow: 0 1px 0 0 5px 16px rgba(0, 0, 0, 0.8);
            @include icon('../../assets/images/playbar.png', 24px, 24px);
            background-position: -42px -68px;
            &:hover{
              background-position: -42px -98px;
            }
          }
        }

        .control-vol{
          position: absolute;
          top: -128px;
          left: 9px;
          padding: 14px;
          height: 120px;
          background-color: #292929;
          z-index: 1;
        }
      }
    }
}
</style>

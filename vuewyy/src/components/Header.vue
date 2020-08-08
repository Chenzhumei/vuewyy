<template>
  <header class="header">
   <div class="header-top">
       <div class="wrap">
           <div class="logo">
               <a class="hidefocus" href="/#">网易云音乐</a>
           </div>
           <ul class="fl tag">
                <li class="fl" v-for="(tag , index) in navTags" :key = "index">
                     <div class="tag-item" :class="{'active': currentNavTag === tag}" @click="changeNav(tag)">{{tag}}
                         <sub class="cor" v-show="currentNavTag === tag"></sub>
                     </div>
                </li>
           </ul>
           <div class="login">登录</div>
           <div class="bilog">创作者中心</div>
           <div class="search">
                <a-input placeholder="音乐/视频/电台/用户" class="search-input">
                     <a-icon slot="prefix" type="search" />
                </a-input>
           </div>
       </div>
   </div>
   <div class="header-bottom" v-if="currentNavTag === '发现音乐'">
       <div class="sub-wrap">
           <ul class="sub-nav">
               <li class="sub-nav-item" v-for="(subTag, index) in subNavTags" :key = 'index'>
                   <div class="item" :class="{'active': currentSubNavTag === subTag}" @click="changeSubNav(subTag)">{{subTag}}</div>
               </li>
           </ul>
       </div>
   </div>
   <div class="header-bottom-line" v-else></div>
  </header>
</template>

<script>
export default {
    data() {
        return {
           navTags: ['发现音乐','我的音乐','朋友','商城','音乐人','下载客户端'],
           subNavTags: ['推荐', '排行榜', '歌单', '主播电台', '歌手', '新碟上架'],
           currentNavTag: '发现音乐',
           currentSubNavTag: '推荐'
        }
    },
    methods: {
        changeNav(tag) {
           this.currentNavTag = tag;
        },
         changeSubNav(tag) {
           this.currentSubNavTag = tag;
        }
    },
    computed: {
        
    }
}
</script>

<style lang="scss">
 .header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    .header-top {
        position: relative;
        height: 70px;
        box-sizing: border-box;
        background: #242424;
        border-bottom: 1px solid #000;
        .wrap {
            width: 1100px;
            margin: 0 auto;
            .logo {
                float: left;
                width: 176px;
                height: 69px;
                background: url('./../assets/images/header/topbar.png') no-repeat 0 9999px;
                background-position: 0 0;
                a {
                    float: left;
                    width: 157px;
                    height: 100%;
                    padding-right: 20px;
                    text-indent: -9999px;
                    &.hidefocus {
                        outline: none;
                    }
                }
            }
            .tag {
                float: left;
                height: 70px;
                line-height: 70px;
                font-size: 14px;
                .tag-item {
                   padding: 0 20px;
                   color: #ccc;
                   cursor: pointer;
                   position: relative;
                   &:hover, &.active {
                       background-color: #000;
                       color: #fff;
                   }
                   .cor {
                        display: block;
                        position: absolute;
                        left: 50%;
                        top: 64px;
                        width: 12px;
                        height: 7px;
                        margin-left: -6px;
                        overflow: hidden;
                        background: url('./../assets/images/header/topbar.png') no-repeat 0 9999px;
                        background-position: -226px 0;
                   }
                }
            }
            .search {
                width: 158px;
                float: right;
                margin-top: 19px;
                font-size: 12px;
                .ant-input {
                    border-radius: 32px;
                    font-size: 12px;
                    color: #9b9b9b;
                    &:focus, &:hover {
                        border-color: #fff;
                    }
                }
            }
            .bilog {
                float: right;
                width: 90px;
                height: 32px;
                margin: 19px 0 0 12px;
                box-sizing: border-box;
                padding-left: 16px;
                border: 1px solid #4F4F4F;
                line-height: 33px;
                color: #ccc;
                border-radius: 20px;
                font-size: 12px;
                &:hover {
                    color: #fff;
                    border: 1px solid #ccc;
                }
            }
            .login {
                float: right;
                height: 70px;
                line-height: 70px;
                font-size: 12px;
                color: #787878;
                margin-left: 20px;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
    .header-bottom {
        height: 35px;
        box-sizing: border-box;
        background-color: #C20C0C;
        border-bottom: 1px solid #a40011;
        .sub-wrap {
            width: 1100px;
            height: 34px;
            margin: 0 auto;
            .sub-nav {
                padding-left: 180px;
                font-size: 12px;
                .sub-nav-item {
                    height: 34px;
                    text-align: center;
                    float: left;
                    .item {
                        cursor: pointer;
                        color: #fff;
                        height: 20px;
                        padding: 0 13px;
                        margin: 7px 17px 0;
                        border-radius: 20px;
                        line-height: 21px;
                        &:hover, &.active {
                            background: #9B0909;
                        } 
                    }
                }
            }
        }
    }
    .header-bottom-line {
        height: 5px;
        border-bottom: none;
        background-color: #C20C0C;
    }
 }
</style>
<template>
  <div class="footer">
     <div class="wrap">
         <div class="copy">
             <div class="copy fl">
                <p class="link">
                    <a href="#" target="_blank" class="item">服务条款</a><span class="line">|</span>
                    <a href="#" target="_blank" class="item">隐私政策</a><span class="line">|</span>
                    <a href="#" target="_blank" class="item">儿童隐私政策</a><span class="line">|</span>
                    <a href="#" target="_blank" class="item">版权投诉指引</a><span class="line">|</span>
                    <a  href="#" class="item">意见反馈</a><span class="line">|</span>
                </p>
                <p class="right">
                    <span class="sep span">网易公司版权所有©1997-2020</span>
                    <span class="span">杭州乐读科技有限公司运营：</span>
                    <a href="#" target="_blank" class="span">浙网文[2018]3506-263号</a>
                </p>
                <p class="contact">
                    <span class="sep span">违法和不良信息举报电话：0571-89853516</span>
                    <span class="span">举报邮箱：</span><a class="span" href="#">ncm5990@163.com</a>
                </p>
                <p class="right">
                    <span class="sep span">粤B2-20090191-18</span>
                    <a href="#" rel="noopener noreferrer" target="_blank" class="span sep">工业和信息化部备案管理系统网站</a>
                    <a href="#" rel="noopener noreferrer" target="_blank" class="span">
                        <span class="police-logo"></span>
                        <span class="police-text">浙公网安备 33010902002564号</span>
                    </a>
                </p>
             </div>
         </div>
         <ul class="enter fr">
            <li class="unit">
                <a class="logo logonew logo-amped" href="https://web-amped.music.163.com/" target="_blank"></a>
                <span class="tt tt-amped"></span>
            </li>
            <li class="unit">
                <a class="logo logonew logo-auth" href="//music.163.com/st/userbasic#/auth" target="_blank"></a>
                <span class="tt tt-auth"></span>
            </li>
            <li class="unit">
                <a class="logo logonew logo-musician" href="//music.163.com/recruit" target="_blank"></a>
                <span class="tt tt-musician"></span>
            </li>
            <li class="unit">
                <a class="logo logonew logo-reward" href="//music.163.com/web/reward" target="_blank"></a>
                <span class="tt tt-reward"></span>
            </li>
            <li class="unit">
                <a class="logo logonew logo-cash" href="//music.163.com/uservideo#/plan" target="_blank"></a>
                <span class="tt tt-cash"></span>
            </li>
        </ul>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
    height: 172px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
    font-size: 12px;
    .wrap {
        width: 980px;
        margin: 0 auto;
        .copy {
            width: 520px;
            padding-top: 15px;
            line-height: 24px;
            .link {
                .item {
                    color: #999;
                    &:hover {
                        text-decoration: underline;
                    }
                }
                .line {
                    margin: 0 8px 0 10px;
                    color: #c2c2c2;
                }
            }
            .right, .contact {
                .sep {
                    margin-right: 14px;
                }
               .span {
                   color: #666;
               }
            }
            .police-logo {
                width: 14px;
                height: 14px;
                background: url('./../../assets/images/footer/police.png') no-repeat;
                background-size: cover;
                display: inline-block;
                margin-right: 2px;
                vertical-align: -2px;
            }
        }
        .enter {
            width: 420px;
            margin-top: 33px;
            .unit {
                float: left;
                width: 60px;
                height: 70px;
                margin-left: 30px;
                text-align: center;
                color: #666;
                &:first-of-type {
                    margin-left: 0;
                }
                .logonew {
                    display: block;
                    float: none;
                    width: 50px;
                    height: 45px;
                    margin: 0 auto;
                    background: url('./../../assets/images/footer/foot_enter_new.png') no-repeat;
                    background-size: 110px 552px;
                    &.logo-amped {
                     background-position: -63px -456.5px;
                    }
                    &.logo-auth {
                        background-position: -63px -101px;
                    }
                    &.logo-musician {
                        background-position: 0 0;
                    }
                    &.logo-reward {
                        background-position: -60px -50px;
                    }
                    &.logo-cash {
                        background-position: 0 -101px;
                    }
                }
                .tt {
                    display: inline-block;
                    margin: 5px 5px 0;
                    width: 52px;
                    height: 14px;
                    background: url('./../../assets/images/footer/foot_enter_tt.png') no-repeat;
                    background-size: 180px 139px;
                    &.tt-amped {
                        background-position: 0 -108px;
                        margin-left: -6px;
                        width: 72px;
                    }
                    &.tt-auth {
                        background-position: -1px -91px;
                    }
                    &.tt-musician {
                        background-position: 0 0;
                    }
                    &.tt-reward {
                       background-position: 0 -54px;
                    }
                    &.tt-cash {
                        background-position: -1px -72px;
                    }
               }
            }
           
        }
    }
}
</style>
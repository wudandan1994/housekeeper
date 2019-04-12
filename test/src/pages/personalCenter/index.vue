<template>
    <div id="personal-center-component">
        <header class="header">
            <div class="top">
                <span></span>
                <div class="title center">个人中心</div>
                <router-link to="/home/verified" tag="div"> <div class="authentication">实名认证</div></router-link>
            </div>

            <div class="middle row">
                <div class="avator center"><img :src="headimg" alt=""></div>
                <div class="name-details">
                    <div class="name-vip row">
                        <div class="name center">{{nickname}}</div>
                        <div class="vip center">
                            <van-icon name="http://pay.91dianji.com.cn/301-1.png" size="26px" color="#ccc"/>
                        </div>
                        <div class="operator end-center">
                            <van-icon name="medel" size="20px" color="#dab17b"/>
                            <span>运营商</span>
                        </div>
                    </div>
                    <div class="set row">
                        <router-link tag="div" class="unset center" to="/register">未设置</router-link>
                        <div class="code center">推荐码: {{personInfo.recommendedcode}}</div>
                    </div>
                </div>
            </div>

            <div class="bottom row">
                <div class="per-menu">
                    <div class="per-icon center"><van-icon name="http://pay.91dianji.com.cn/303.png" size="30px" color="#dab17b"/></div>
                    <div class="per-title center">积分</div>
                </div>
                 <div class="per-menu">
                    <div class="per-icon center"><van-icon name="http://pay.91dianji.com.cn/304.png" size="30px" color="#dab17b"/></div>
                    <div class="per-title center">可结算</div>
                </div>
                 <div class="per-menu">
                    <div class="per-icon center"><van-icon name="http://pay.91dianji.com.cn/305.png" size="30px" color="#dab17b"/></div>
                    <div class="per-title center">总收益</div>
                </div>
            </div>
        </header>
        <div class="menu-title start-center">特约服务</div>
        <div class="per-list row">
            <router-link tag="div" class="per-menu-list line" to="/ponserCenter/userAccountManage">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/306.png" size="52px" color="#dab17b"/></div>
                <div class="per-menu-title center">账户管理</div>
            </router-link>

            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/307.png" size="52px" color="#dab17b"/></div>
                <div class="per-menu-title center">上级推荐人</div>
            </router-link>

            <div class="per-menu-list">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/308.png" size="52px" color="#dab17b"/></div>
                <div class="per-menu-title center">微名片</div>
            </div>

        </div>
        <div class="per-list row">
            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/309.png" size="52px" color="#dab17b"/></div>
                <div class="per-menu-title center">商务合作</div>
            </div>

            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/310.png" size="52px" color="#dab17b"/></div>
                <div class="per-menu-title center">共享佣金池</div>
            </div>

            <div class="per-menu-list">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/311.png" size="52px" color="#dab17b"/></div>
                <div class="per-menu-title center">营销课堂</div>
            </div>
        </div>
        <div class="menu-title m-top start-center">实时工具</div>
        <div class="per-list row">
            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/313.png" size="52px" color="#dab17b"/></div>
                <div class="per-menu-title center">VIP视频</div>
            </div>

            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/314.png" size="52px" color="#dab17b"/></div>
                <div class="per-menu-title center">流程说明</div>
            </div>

            <div class="per-menu-list">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/315.png" size="52px" color="#dab17b"/></div>
                <div class="per-menu-title center">平台手册</div>
            </div>
        </div>
        <div class="per-list row">
            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/316.png" size="52px" color="#dab17b"/></div>
                <div class="per-menu-title center">百问百答</div>
            </div>

            <div class="per-menu-list line">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/317.png" size="52px" color="#dab17b"/></div>
                <div class="per-menu-title center">退换说明</div>
            </div>

            <div class="per-menu-list">
                <div class="menu-icon center"><van-icon name="http://pay.91dianji.com.cn/318.png" size="52px" color="#dab17b"/></div>
                <div class="per-menu-title center">名片夹</div>
            </div>
        </div>
        <footerMenu :active="active" @getChange="changeActive"></footerMenu>
    </div>
</template>

<script>
import footerMenu from '@/components/footer'
import {axiosPost,axiosGet} from '../../lib/http.js'
import storage from '@/lib/storage'
export default {
    components:{
      footerMenu
    },
    data(){
        return {
            active:2,
            nickname: '',
            headimg: '',
            personInfo:{},
        }
    },
    methods:{
        changeActive(obj){
            console.log('obj', obj);
        }
    },
    created(){
        this.nickname = this.$store.state.wechat.nickname;
        this.headimg  = this.$store.state.wechat.headimg; 
    }
}
</script>

<style lang="less" scoped>
  #personal-center-component {
      width: 100%;
      height: 90vh;
      overflow: scroll;
      padding-bottom: 5vh;
      background: #F2F2F2;
      .header{
          width: 100vw;
          height: auto;
          margin-left: auto;
          z-index:999;
          margin-right: auto;
          background: linear-gradient(#4B66AF,#6883C1);
          .top{
            position: relative;
            height: 86px;
            line-height: 86px;
            display: flex;
             font-size:28px;
            .title{
                width: 100%;
                height: auto;
                line-height: 80px;
                font-size: 36px;
                font-weight: 400;
                color: rgb(212, 214, 221);
                font-size: 32px;
            }
            .authentication{
                width: auto;
                height: 20px;
                position: absolute;
                top: 5px;
                right: 10px;
                z-index: 1;
                font-size: 28px;
                font-weight: 400;
                color: rgb(212, 214, 221);
            }
          }
          .middle{
                width: 100%;
                height: 120px;
                margin-top: 50px;
                color: white;
                .avator{
                    width: 20vw;
                    height: auto;
                    >img{
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                    }
                }
                .name-details{
                    width: 80vw;
                    height: auto;
                }
                .name-vip{
                    width: 100%;
                    height: 50%;
                    position: relative;
                    .name{
                        width: auto;
                        height: 100%;
                        font-size: 44px;
                        font-weight: 700;
                        color: white;
                        overflow: hidden;
                    }
                    .vip{
                        width: 12%;
                        height: 100%;
                    }
                    .operator{
                        width: auto;
                        height: 100%;
                        font-size: 26px;
                        font-weight: 400;
                        color: #ccc;
                        position: absolute;
                        top: 0px;
                        right: 0px;
                        background: #798bc5;
                        border-top-left-radius: 30px;
                        border-bottom-left-radius: 30px;
                        padding-left: 10px;
                        padding-right: 10px;
                    }
                }
                .set{
                    width: 100%;
                    height: 50%;
                    .unset{
                        width: 100px;
                        height: 50%;
                        border: solid 0.02rem #B6C5E4;
                        margin-top: 15px;
                        color: #ccc;
                        background: #798bc5;
                        font-size: 28px;
                        border-radius: 20px;
                        padding: 8px;
                    }
                    .code{
                        width: auto;
                        height: 50%;
                        border: solid 0.02rem #B6C5E4;
                        margin-top: 15px;
                        margin-left: 30px;
                        color: #ccc;
                        background: #798bc5;
                        backface-visibility: white;
                        font-size: 28px;
                        border-radius: 20px;
                        padding: 8px;
                    }
                }
           }
           .bottom{
               width: 100%;
               height: 150px;
               margin-top: 50px;
               .per-menu{
                   color: white;
                   width: 30%;
                   height: 100%;
                   margin-left: 2.5%;
                   .per-icon{
                       
                       width: 100%;
                       height: 60%;
                   }
                   .per-title{
                       width: 100%;
                       height: 40%;
                   }
               }
           }
      }
       .menu-title{
            width: 98%;
            padding-left: 2%;
            height: 80px;
            border-bottom: solid 1px #ccc;
            background: white;
            font-size: 30px;
            color: #000;
        }
        .m-top{
            margin-top: 15px;
        }
        .per-list{
            background: white;
            border-bottom: solid 1px #ccc;
            .per-menu-list{
                width: 33%;
                height: 180px;
                padding-top:10px;
                .menu-icon{
                    width: 100%;
                    height: 60%;
                    font-size: 24px;
                }
                .per-menu-title{
                    font-size: 28px;
                    width: 100%;
                    height: 40%;
                    color: #666;
                }
            }
            .line{
                    border-right: solid 1px #ccc;
            }
        }
        
}
</style>

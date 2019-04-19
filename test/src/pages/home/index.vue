
<template>
    <div id="home-component">
        <header>
            <div>
                <div class="menu" @click="isShow">
                    <van-icon name="wap-nav" />
               </div>
               <span class="location">
                    <van-icon name="location-o" />
                </span>
                <span>上海</span>
            </div>  
            <span>首页</span>
            <router-link tag="span" to="/home/news" class="news"><van-icon name="volume" />&nbsp;消息</router-link>        
        </header>
        <div class="container">
            <!-- 轮播图模块 -->
            <div class="swipe">
                <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(image, index) in images" :key="index">
                        <img v-lazy="image" class="per-img" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <!-- 查询模块 -->
            <div class="search">
                <ul>
                    <router-link to="/home/creditEnquiry" tag="li">
                        <p> <van-icon name="http://pay.91dianji.com.cn/101.png"  class="zx-search"  /></p>
                        <span>征信查询</span>
                    </router-link>
                    <router-link to="/vip" tag="li">
                         <p> <van-icon name="http://pay.91dianji.com.cn/102.png"  class="zx-search"  /></p>
                        <span>升级代理</span>
                    </router-link>
                    <router-link to="/home/incomeBreakdown" tag="li">
                         <p> <van-icon name="http://pay.91dianji.com.cn/103.png"  class="zx-search"  /></p>
                        <span>收益明细</span>
                    </router-link>
                    <router-link tag="li" to="/home/totalPunch">
                        <p> <van-icon name="http://pay.91dianji.com.cn/104.png"  class="zx-search"  /></p>
                        <span>签到打卡</span>
                    </router-link>
                </ul>
            </div>
            <!-- 名片咨询模块 -->
            <div class="pannel-news row">
                <div class="pannel-title center">钱夹<br/>资讯</div>
                <div class="pannel-detail center">
                    <p>《投资者说》“老中青”三位嘉宾为小散解套出...</p>
                </div>
            </div>

            <!-- 信用卡模块 -->
            <div class="credit">
                <ul>
                    <router-link  tag="li" to="/home/cardCenter">
                        <span class="handle">
                            <van-icon name="http://pay.91dianji.com.cn/105.png" size="40px" />
                        </span>
                        <div class="channel">
                            <h3>信用卡办理</h3>
                            <p>佣金当天结算</p>
                            <span>官方渠道</span>
                        </div>
                    </router-link>
                    <router-link tag="li" to="/home/collect">
                        <span class="handle"> <van-icon name="http://pay.91dianji.com.cn/106.png" size="40px" /></span>
                        <div class="channel">
                            <h3>商户收款</h3>
                            <p>快捷支付</p>
                            <span>落地商户</span>
                        </div>
                    </router-link>
                    <router-link tag="li" to="/loan/detail">
                        <span class="handle"> <van-icon name="http://pay.91dianji.com.cn/107.png" size="40px" /></span>
                        <div class="channel">
                            <h3>我要贷款</h3>
                            <p>实时审批&nbsp;授信额度</p>
                            <span>GO>></span>
                        </div>  
                    </router-link>
                    <router-link to="/home/creditHousekeeper" tag="li">
                        <span class="handle"> <van-icon name="http://pay.91dianji.com.cn/108.png" size="40px" /></span>
                        <div class="channel">
                            <h3>信用卡管家</h3>
                            <p>落地商户空卡周转</p>
                            <span>智能还款</span>
                        </div>
                    </router-link>
                </ul>
            </div>
            <!-- 详情模块 -->
            <div class="details">
                <ul>
                    <li>
                        <span>
                           <van-icon name="http://pay.91dianji.com.cn/icon_49.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>授权分润</h3>
                            <p>给实习会员设置分润</p>
                        </div>
                    </li>
                    <li>
                        <span>
                           <van-icon name="http://pay.91dianji.com.cn/icon_50.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>汽车保险</h3>
                            <p>没有中间商差价</p>
                        </div>
                    </li>
                    <li>
                        <span>
                           <van-icon name="http://pay.91dianji.com.cn/icon_51.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>发圈素材</h3>
                            <p>发朋友圈获得奖金</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <van-icon name="http://pay.91dianji.com.cn/icon_52.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>排行榜</h3>
                            <p>钱夹宝业务排名</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <van-icon name="http://pay.91dianji.com.cn/icon_53.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>意外险</h3>
                            <p>出行安全有保障</p>
                        </div>
                    </li>
                    <li>
                        <span>
                           <van-icon name="http://pay.91dianji.com.cn/icon_60.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>提额秘籍</h3>
                            <p>快速提额</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <van-icon name="http://pay.91dianji.com.cn/icon_61.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>共享奖金池</h3>
                            <p>参与奖金池奖励分配</p>
                        </div>
                    </li>
                    <li>
                        <span>
                           <van-icon name="http://pay.91dianji.com.cn/icon_62.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>给团队绑卡</h3>
                            <p>TA绑卡开通注册</p>
                        </div>
                    </li>
                    <li>
                        <span>
                           <van-icon name="http://pay.91dianji.com.cn/icon_63.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>积分兑换</h3>
                            <p>积分不失/换乐无穷</p>
                        </div>
                    </li>
                    <li>
                        <span>
                           <van-icon name="http://pay.91dianji.com.cn/icon_64.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>商城</h3>
                            <p>商城</p>
                        </div>
                    </li>
                    <li>
                        <span>
                           <van-icon name="http://pay.91dianji.com.cn/icon_65.png" size="30px" />
                        </span>
                        <div class="detail-item">
                            <h3>违章查询</h3>
                            <p>违章查询</p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 遮盖层 -->
            <div class="aside-left" v-show="showAaside" @click.self="hideAside">
                <div class="info">
                    <div class="avatar">
                         <span><van-icon :name="headimg" /></span>
                         <p>{{nickname}}</p>
                    </div>
                    <ul>
                        <router-link tag="li" to="/home/systemNews">系统消息</router-link>
                        <router-link tag="li" to="/home/verified">实名认证</router-link>
                        <router-link to="/home/bindingPhone" tag="li">绑定手机</router-link>
                        <router-link to="/home/customerService" tag="li">联系客服</router-link>
                        <router-link to="/home/aboutUs" tag="li">关于我们</router-link>
                        <li class="switch">声音开关
                           
                        </li>
                        <router-link to="/home/accountManagement" tag="li">账户管理</router-link>
                        <router-link to="/home/clearCache" tag="li">清除缓存</router-link>
                    </ul>
                   
                      <div  @click="signOut" class="sign-out">
                        <span>退出登录</span>
                    </div> 
                </div>
            </div>
        </div>
        <footerMenu :active="active" @getChange="changeActive"></footerMenu>
    </div>
</template>

<script>
import footerMenu from '@/components/footer'
import {axiosPost} from '@/lib/http'
export default {
  components:{
      footerMenu
  },
     data() {
        return {
            // 轮播图图片
            images: [
                'http://pay.91dianji.com.cn/01.png',
                'http://pay.91dianji.com.cn/02.jpg',
                'http://pay.91dianji.com.cn/04.png',
                'http://pay.91dianji.com.cn/06.jpg',
                'http://pay.91dianji.com.cn/08.jpg'
            ],
            showAaside:false, 
            checked:true,
            active: 0,
            code: '',
            openid: '',
            access_token: '',
            refresh_token: '',
            // newaccess_token: '',
            nickname: '',
            photo: '',
            headimg:''
        }
  },
   methods:{
        isShow() {
            this.showAaside=true
        },
        hideAside() {
            this.showAaside=false
        },
        signOut(){
            this.$dialog.confirm({
                    title: '提示',
                    message: '确定要退出？',
                    confirmButtonText:'是',
                }).then(() => {
                    let that =this
                  axiosPost("http://pay.91dianji.com.cn/api/customer/loginOut") 
                  .then(function(res){
                      if(!res.data.success){
                          that.$toast({
                              message:res.data.message
                          })
                          return
                      }
                      that.$router.push("/logIn")
                  })
                  .catch(function(err){

                  })
                }).catch(() => {
                    // on cancel
                });
        },
        changeActive(obj){
        },
    },
    created(){
        this.nickname=this.$store.state.wechat.nickname;
        this.headimg=this.$store.state.wechat.headimg;
    },
    mounted(){
    }
    
}
</script>

<style lang="less" >
   #home-component {
       background-color: #eee;
       >header {
        height:86px;
        font-size:28px;
        line-height: 86px;
         background-color: #4B66AF;
        color:white;
        display:flex;
        justify-content: space-between;
        padding-top:10px;
        position: fixed;
        width:100%;
        z-index:999;
        align-items: center;
        >div {
            margin-left:15px;
            display: flex;
            >.menu {
                margin-left:5px;
                position: relative;
           }
        }
        .location {
            margin-left:15px;
        }
        >.news {
            margin-right:15px;
        }
       }
       >.container {
           padding-bottom:96px;
           padding-top:96px;
           overflow-x: hidden;
            >.swipe {
           height: 390px;
           .per-img{
               width: 100vw;
               height: 390px;
           }
       }
        >.search {
            margin-top:15px;
            height: 110px;
            >ul{
                list-style: none;
                display: flex;
                height: 100%;
                background-color: #fff;
                border-bottom:2px solid #ccc;
                padding-bottom:20px;
                padding-top:10px;
                >li {
                    width:25%;
                    text-align: center;
                     margin-bottom:20px;
                     >span {
                         font-size: 24px;
                     }
                     >p {
                          text-align: center;
                          margin-bottom:10px;
                          transform: translateX(25%);
                         >.zx-search {
                        display:block;
                        font-size:80px;
                        text-align: center;
                    }
                }
                    
                }
            }
        }
        >.business-card {
            display: flex;
            flex-wrap: nowrap;
            height: 100px;
            margin-top:50px;
            background-color: white;
            >.information {
                font-weight: bolder;
                margin-left:10px;
                float:left;
                line-height: 100px;
            }
            >.Investment {
                float:right;
                margin-top:25px;
                margin-left:20px;
            }
        }
        >.pannel-news{
            width: 98vw;
            height: 150px;
            margin-top:50px;
            margin-left: auto;
            margin-right: auto;
            background-image: -webkit-linear-gradient(0deg, #4965AE, #7189C4);
            .pannel-title{
                width: 20%;
                height: 100%;
                color: white;
                font-weight: bold;
                font-size: 38px;
                letter-spacing: 5px;
                line-height: 48px;
            }
            .pannel-detail{
                width: 80%;
                height: 100%;
                color: white;
                font-size: 28px;
                animation: pannleRoll 1s ease-in-out;

            }
            @keyframes pannelRoll {
               0% {
                transform: translateX(200px);
                    -webkit-transform: translateX(200px);
                }
                100% {
                    transform: translateX(-100%);
                    -webkit-transform: translateX(-100%);
                }
            }
        }
        >.credit {
            margin-top:20px;
            background-color: #fff;
            >ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                padding:10px;
                list-style: none;
                >li {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width:47%;
                    border: 2px solid #ccc;
                    border-radius:10px;
                    padding-bottom:20px;
                    padding-top:35px;
                    margin-top:10px;
                    background-color:#FAFAFA;
                    >.handle {
                        color:#CF9C5D;
                        font-size: 60px;
                        margin-left: 10px;
                        margin-top:30px;
                    }
                    >.channel {
                        text-align: left;
                        flex:1;
                        margin-left:20px;
                        >h3 {
                            font-size:30px;
                            font-weight: bolder;
                        }
                        >p {
                            font-size:28px;
                            margin-top:10px;
                            margin-bottom:10px;
                            color:#bbb;
                        }
                        >span {
                            color:#4B66AF;
                            background-color:#E8ECF7;
                            border-radius:15px;
                            padding:5px 20px;
                            font-size: 14px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
        >.details {
            margin-top:10px;
            border-top:1px solid #ccc;
            background-color: #fff;
            padding-bottom:100px;
            margin-bottom: 100px;
            >ul{
                display: flex;
                flex-wrap: wrap;
                >li {
                    width:50%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #ccc;
                    border-right: 1px solid #ccc;
                    box-sizing: border-box;
                    >span {
                        margin-left: 40px;
                        font-size: 40px;
                        color:#CF9C5D;
                    }
                    >.detail-item {
                        margin-left:10px;
                        flex:1;
                        >h3 {
                            font-weight: bolder;
                            font-size: 30px;
                            margin-top:30px;
                            margin-bottom: 20px;
                        }
                        >p {
                            font-size:30px;
                            margin-bottom: 20px;
                            color:#bbb;
                        }
                    }
                }
            }
        }
            >.aside-left {
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, .4);
               
                position: absolute;
                overflow: visible;
                top:0px;
                right:0px;
                bottom: 0px;
                left:0px;
                z-index: 999;
                color:#fff;
                text-align: center;
                >.info {
                    width:50%;
                    height: 100%;
                    overflow-y: scroll;
                    background-color: #4965AE;
                    position: fixed;
                    top:0px;
                    right: 0px;
                    left:0px;
                    bottom: 0px;
                    padding-bottom: 20px;
                    z-index: 999;
                   
                    >.avatar {
                        padding-top:50px;
                        >span {
                            font-size:100px;
                        }
                        >p {
                            margin-top:20px;
                            margin-bottom:80px;
                        }
                    }
                    >ul{
                        margin-left:100px;
                        margin-right:100px;
                        >li {
                            border-top:3px dashed #ccc;
                            padding:50px 10px;
                            font-size: 28px;
                             &.switch {
                             >p {
                                 margin-top:-5px;
                             }
                          }
                        }
                    }
                    >.sign-out {
                        margin-top:20px;
                        // margin-bottom:20px;
                         >span{
                            border:2px solid #fff;
                           background-color:#8E9CCE;
                           padding:30px 60px;
                           border-radius: 10px;
                         }
                    }
                    .van-dialog,
                    .van-dialog__message,
                    .van-button {
                        font-size: 30px;
                    }
                }
         }
    }
   }
</style>


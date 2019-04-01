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
            <span @click="news" class="news"><van-icon name="volume" />&nbsp;消息</span>        
        </header>
        <div class="container">
            <!-- 轮播图模块 -->
            <div class="swipe">
                <!-- <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(image, index) in images" :key="index">
                        <img v-lazy="image" />
                    </van-swipe-item>
                </van-swipe> -->
            </div>
            <!-- 查询模块 -->
            <div class="search">
                <ul>
                    <router-link to="/home/creditEnquiry" tag="li">
                        <van-icon name="more" class="zx-search" />
                        <span>征信查询</span>
                    </router-link>
                    <li>
                        <van-icon name="more" class="zx-search" />
                        <span>升级代理</span>
                    </li>
                    <router-link to="/home/violationInquiry" tag="li">
                        <van-icon name="more" class="zx-search" />
                        <span>违规查询</span>
                    </router-link>
                    <router-link tag="li" to="/home/punch">
                        <van-icon name="more" class="zx-search" />
                        <span>签到打卡</span>
                    </router-link>
                </ul>
            </div>
            <!-- 名片咨询模块 -->
            <div class="business-card">
                <span class="information">名片资讯</span>
                <span class="Investment">《投资者说》“老中青”三位嘉宾为小散解套出...</span>
            </div>
            <!-- 信用卡模块 -->
            <div class="credit">
                <ul>
                    <router-link  tag="li" to="/home/cardCenter">
                        <span class="handle"><van-icon name="description" /></span>
                        <div class="channel">
                            <h3>信用卡办理</h3>
                            <p>佣金当天结算</p>
                            <span>官方渠道</span>
                        </div>
                    </router-link>
                    <router-link tag="li" to="/home/receivables">
                        <span class="handle"><van-icon name="description" /></span>
                        <div class="channel">
                            <h3>商户收款</h3>
                            <p>快捷支付</p>
                            <span>落地商户</span>
                        </div>
                    </router-link>
                    <li>
                        <span class="handle"><van-icon name="description" /></span>
                        <div class="channel">
                            <h3>我要贷款</h3>
                            <p>实时审批&nbsp;授信额度</p>
                            <span>GU>></span>
                        </div>
                    </li>
                    <router-link to="/home/creditHousekeeper" tag="li">
                        <span class="handle"><van-icon name="description" /></span>
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
                            <van-icon name="friends" />
                        </span>
                        <div class="detail-item">
                            <h3>授权分润</h3>
                            <p>给实习会员设置分润</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <van-icon name="friends" />
                        </span>
                        <div class="detail-item">
                            <h3>汽车保险</h3>
                            <p>没有中间商差价</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <van-icon name="friends" />
                        </span>
                        <div class="detail-item">
                            <h3>发圈素材</h3>
                            <p>发朋友圈获得奖金</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <van-icon name="friends" />
                        </span>
                        <div class="detail-item">
                            <h3>排行榜</h3>
                            <p>钱夹宝业务排名</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <van-icon name="friends" />
                        </span>
                        <div class="detail-item">
                            <h3>意外险</h3>
                            <p>出行安全有保障</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <van-icon name="friends" />
                        </span>
                        <div class="detail-item">
                            <h3>提额秘籍</h3>
                            <p>快速提额</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <van-icon name="friends" />
                        </span>
                        <div class="detail-item">
                            <h3>共享奖金池</h3>
                            <p>参与奖金池奖励分配</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <van-icon name="friends" />
                        </span>
                        <div class="detail-item">
                            <h3>给团队绑卡</h3>
                            <p>TA绑卡开通注册</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <van-icon name="friends" />
                        </span>
                        <div class="detail-item">
                            <h3>积分兑换</h3>
                            <p>积分不失/换乐无穷</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <van-icon name="friends" />
                        </span>
                        <div class="detail-item">
                            <h3>商城</h3>
                            <p>商城</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <van-icon name="friends" />
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
                         <span><van-icon name="manager" /></span>
                         <p>可乐-5-2</p>
                    </div>
                    <ul>
                        <router-link tag="li" to="/home/systemNews">系统消息</router-link>
                        <router-link tag="li" to="/home/verified">实名认证</router-link>
                        <router-link to="/home/bindingPhone" tag="li">绑定手机</router-link>
                        <router-link to="/home/customerService" tag="li">联系客服</router-link>
                        <router-link to="/home/aboutUs" tag="li">关于我们</router-link>
                        <li class="switch">声音开关
                            <p>
                                <van-switch
                         size="20px" 
                         inactive-color="#DDDDDD"
                         active-color="#CDB168" 
                         v-model="checked" 
                         />
                            </p>
                        </li>
                        <router-link to="/home/accountManagement" tag="li">账户管理</router-link>
                        <router-link to="/home/clearCache" tag="li">清除缓存</router-link>
                    </ul>
                    <!-- <router-link to="/login" tag="div" class="sign-out">
                        <span>退出登录</span>
                    </router-link> -->
                      <div  @click="signOut" class="sign-out">
                        <span>退出登录</span>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     data() {
    return {
        // 轮播图图片
      images: [] ,
      showAaside:false, 
      checked:true,
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
                    this.$router.push('/login')
                }).catch(() => {
                    // on cancel
                });
        },
        news(){
             this.$router.push('/home/news')
        }
    }
    
}
</script>

<style lang="less" >
   #home-component {
       background-color: #eee;
       >header {
        height:46px;
        background-color: #000; 
        color:white;
        display:flex;
        line-height: 46px;
        justify-content: space-between;
        padding-top:10px;
        position: fixed;
        width:100%;
        align-items: center;
        >div {
            display: flex;
            >.menu {
                margin-left:5px;
                position: relative;
                cursor: pointer;
           }
        }
        .location {
            margin-left:15px;
        }
        >.news {
            margin-right: 5px;
            cursor: pointer;
        }
       }
       >.container {
           padding-bottom:56px;
           padding-top:56px;
           height: 1000px;
            >.swipe {
           height: 300px;
           background-color: orange;
       }
        >.search {
            margin-top:15px;
            background-color: #fff;
            height: 110px;
            >ul{
                list-style: none;
                display: flex;
                align-items: center;
                height: 100%;
                border-bottom: 1px solid #ccc;
                >li {
                    width:25%;
                    text-align: center;
                    >.zx-search {
                        display:block;
                        font-size:60px;
                    }
                }
            }
        }
        >.business-card {
            display: flex;
            flex-wrap: nowrap;
            height: 100px;
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
                    width:47%;
                    border:3px solid #ccc;
                    border-radius:10px;
                    padding-bottom:30px;
                    padding-top:15px;
                    margin-top:10px;
                    background-color:#FAFAFA;
                    >.handle {
                        color:#CF9C5D;
                        font-size: 40px;
                        margin-left: 10px;
                        margin-top:30px;
                    }
                    >.channel {
                        text-align: left;
                        flex:1;
                        margin-left:30px;
                        >h3 {
                            font-size:30px;
                            font-weight: bolder;
                        }
                        >p {
                            font-size:12px;
                            margin-top:10px;
                            margin-bottom:10px;
                            color:#bbb;
                        }
                        >span {
                            border:2px solid #000;
                            color:white;
                            background-color:#CF9C5D;
                            border-radius:15px;
                            padding:1px 20px 5px 20px;
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
            padding-bottom: 50px;
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
                        margin-left: 50px;
                        font-size: 40px;
                        color:#CF9C5D;
                    }
                    >.detail-item {
                        margin-left:20px;
                        flex:1;
                        >h3 {
                            font-weight: bolder;
                            font-size: 30px;
                            margin-top:30px;
                            margin-bottom: 20px;
                        }
                        >p {
                            font-size:14px;
                            margin-bottom: 20px;
                            color:#bbb;
                        }
                    }
                }
            }
        }
            >.aside-left {
                background-color: rgba(0, 0, 0, .4);
                position: fixed;
                top:0px;
                right:0px;
                bottom: 0px;
                left:0px;
                z-index: 999;
                color:#fff;
                text-align: center;
                >.info {
                    width:60%;
                    background-color: #222222;
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
                            border-top:3px dashed #535353;
                            padding:50px 10px;
                             &.switch {
                             display: flex ;
                             >p {
                                 margin-top:-5px;
                                 margin-left:5px;
                             }
                          }
                        }
                    }
                    >.sign-out {
                        margin-top:100px;
                        margin-bottom: 30px;
                         >span{
                            border:2px solid #fff;
                           background-color: #BEA664;
                           padding:30px 60px;
                           border-radius: 10px;
                         }
                    }
                }
         }
    }
   }

</style>

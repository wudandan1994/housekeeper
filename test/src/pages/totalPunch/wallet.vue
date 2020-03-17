<template>
    <div id="wallet">
        <header>
            <span @click="goBack"><van-icon size="20px" name="arrow-left"/></span>
            <span>游戏规则</span>
            <!-- <span @click="showCover">
                 <van-icon color="white" size="20px" name="weapp-nav"/> 
            </span> -->
        </header>
        <div class="container">
           <div class="nationwide">
               <p class="first">您有<span>{{amount}}</span> 元红包待领取</p>
               <p class="second">点击领取红包</p>
               <p class="third">成功分享后，即可解锁红包</p>
           </div>
           <div class="dollar">
              <div class="open">
                  <img class="bgimg" src="http://pay.91dianji.com.cn/wallet.png" alt="" srcset="">
                  <div class="start">
                     <img  src="http://pay.91dianji.com.cn/opacity.png" alt="" srcset="">
                  </div>
                  <div class="dollars">
                      <img  src="http://pay.91dianji.com.cn/dollars.png" alt="" srcset="">
                  </div>
              </div>
            <div class="silk">
                <img  src="http://pay.91dianji.com.cn/silk.png" alt="" srcset="">
            </div>
           </div>
           <div class="invite" @click="invite" >
               <div class="share">
                   <!-- <p></p> -->
                    <p  @click="invite"><van-icon size="28px" name="http://pay.91dianji.com.cn/wx.png"/></p>
                    <p class="wxin">点击右上角分享至好友或朋友圈</p>
                    <!-- <p  @click="invite" class="wxin">点击分享至好友或朋友圈</p> -->

                    <!-- <p></p> -->
               </div>
               
         </div>

             <div class="sharemove" v-show="Sharewxf">
               <div class="wx">
                <!-- <van-button  class="shareBtn" @click="Sharewxf=true" type="default">分享</van-button> -->
                    <ul>
                        <li id="wxF"  @click="wxfri">
                            <p><van-icon name="http://pay.91dianji.com.cn/wx.png" size="40px"/></p>
                            <p class="friends">分享给好友</p>
                        </li>
                        <li @click="wxcir"> 
                            <p><van-icon color="white"  size="40px"  name="http://pay.91dianji.com.cn/pyq.png"/></p>
                            <p class="friends">分享到朋友圈</p>
                        </li>
                    </ul>
               <div class="button">
                     <van-button  size="large" @click="Sharewxf=false" type="default">取消</van-button>
               </div>
            </div>
          </div>
         
        </div>
    </div>

</template>


<script>
import { axiosPost } from '../../lib/http';
export default {
    data() {
        return {
            amount:"",
            Sharewxf:false
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
        invite(){
            this.Sharewxf=!this.Sharewxf
        },
        showCover(){
           this.Sharewxf=!this.Sharewxf
        // this.$toast("敬请期待")
        },
         wxfri(){
             let that=this
            plus.share.getServices(function (s) {
                that.shares = s;
                for (var i in s) {
                    if ('weixin' == s[i].id) {
                        that.sharewx = s[i];
                    }
                }
                    that.shareWeixinMessage()

            }, function (e) {
                alert("获取分享服务列表失败：" + e.message);
            });
        },
          wxcir(){
             let that=this
            plus.share.getServices(function (s) {
                that.shares = s;
                for (var i in s) {
                    if ('weixin' == s[i].id) {
                        that.sharewx = s[i];
                    }
                }
                // console.log(JSON.stringify(that.sharewx))
                 that.sharewxCirMessage()
            }, function (e) {
                alert("获取分享服务列表失败：" + e.message);
            });
        },
         sharewxCirMessage(){
              let that=this
          that.sharewx.send(
                { content: "钱夹宝综合金融服务推广平台，点滴成就未来",title:"钱夹宝",
                thumbs:["http://pay.91dianji.com.cn/wxc.jpg"],
                //  thumbs:"../../assets/images/slt.jpg",
                 href: "http://pay.91dianji.com.cn/#/home?promotioncode="+that.$store.state.wechat.promotioncode, extra: { scene: "WXSceneTimeline" } }
                , function(){

                 axiosPost("/activity/executeActivity")
                .then(res=>{
               
                })


            }, function(e){
                alert("分享失败："+e.message);
            });
        },
         shareWeixinMessage() {
             let that=this
             that.sharewx.send(
                 { 
                     content: "钱夹宝综合金融服务推广平台，点滴成就未来",title:"钱夹宝", 
                     thumbs:["http://pay.91dianji.com.cn/wxc.jpg"],
                    //  thumbs:["../../assets/images/slt.jpg"],
                     href: "http://pay.91dianji.com.cn/#/home?promotioncode="+that.$store.state.wechat.promotioncode,
                     extra: { scene: "WXSceneSession" } 
                 }, function () {
            // alert("分享成功！");


            axiosPost("/activity/executeActivity")
            .then(res=>{
              
            })

        }, function (e) {
            alert("分享失败：" + e.message);
        });
    },



    },
    created () {
        this.amount=this.$route.query.amount
    }
}
</script>

<style lang="less" scope>
   #wallet {
       >header {
           background: #35447A;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           position: fixed;
           font-size:28px;
           z-index:999;
           justify-content: space-between;
           >span {
               &:nth-of-type(1) {
                   margin-left: 10px;
               }
               &:nth-of-type(3) {
                   margin-right: 10px;
               }
           }
       }
       >.container {
           padding-top:96px;
           padding-bottom: 50px;
           overflow-x: hidden;
           background: url("http://pay.91dianji.com.cn/bgimg.png") no-repeat no-repeat;
            .sharemove {
                width:100%;
                height:400px;
                .friends {
                    color:#fff;
                }
                .shareBtn {
                    margin:100px 0px 50px 100px;
                    width:100px;
                    text-align: center;
                }
                ul{
                    padding-top:30px;
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    >li {
                        width:50%;
                        box-sizing: border-box;
                        text-align: center;
                        >p {
                            &:nth-of-type(2){
                                // color:#fff;
                                padding:20px;
                            }
                        }
                    }
                }
                .button {
                    padding:20px 30px;

                }
              
            }
            .dollar {
                margin:30px 0;
               width:100%;
               height:100%;
               position: relative;
                .silk {
                       width:800px;
                       height:800px;
                       position: absolute;
                       top:-8%;
                       left:0;
                       img {
                           width:100%;
                       }
                   }
               .open {
                   width:70%;
                   height: 100%;
                   margin:0 auto;
                   position: relative;
                  
                   .dollars {
                       width:300px;
                       height:300px;
                       position: absolute;
                       left:10px;
                       bottom:0;
                       img {
                           width:100%;
                       }
                   }
                   .start {
                       width:150px;
                       height:150px;
                        position: absolute;
                        top:28%;
                        left:38%;
                        img {
                            width:100%;
                        }
                  }
                   .bgimg {
                       width:100%;
                   }
               }
           }
           .nationwide {
               p {
                   text-align: center;
                   color:#FEE891;
                   &.first {
                    font-size: 34px;
                    padding-bottom: 20px;
                    span {
                        font-weight: bold;
                        display: inline-block;
                        font-size: 40px;
                    }
                 }
                 &.second {
                     font-size: 28px;
                     padding-bottom: 20px;
                 }
                  &.third {
                     font-size: 28px;
                     padding-bottom: 15px;
                 }
               }
             
           }
           .invite {
               margin-top:100px;
              width:100%;
              height:100px;
              box-sizing: border-box;
              .share {
                  width:80%;
                  background-color: #1F31C4;
                  margin:0 auto;
                //   border-radius: 15px;
                  border:1px solid #fff;
                  display:flex;
                  align-items: center;
                  justify-content: space-around;
                //   padding:10px;
                  height:70px;
                  box-sizing: border-box;
                  .wxin {
                      color:#fff;
                      margin-left:-50px;
                  }
                 animation:  animate 1.2s linear infinite;
                 -webkit-animation:  animate 1.2s linear infinite;
                  @keyframes animate {
                        0%{
                           width:80%;
                           height:70px;                     
                        }
                        50%{
                            width:90%;
                            height:75px;   
                        }
                        100%{
                            width:80%;
                            height:70px;                              
                        }
                    }
              }
           }
           .friends {
               color:#fff;
               margin-top:10px;
           }
          
       }
   }
</style>

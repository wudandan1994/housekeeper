<template>
    <div id="extension">
        <header>
            <span @click="goBack"><van-icon name="arrow-left" size="28px" /></span>
            <span></span>
            <!-- <span @click="showCover"><van-icon name="ellipsis" size="28px" /></span> -->
        </header>
        <div class="container">
          <div class="extension">
              <img src="http://pay.91dianji.com.cn/extension.png" alt="">
          </div>
          <div class="list">
              <ul>
                  <li>
                      <div class="diamonds">
                          <span><van-icon name="http://pay.91dianji.com.cn/diamonds.png" size="60px" /></span>
                          <span>黄金会员</span>
                      </div>
                      <p>直接分享产生5名有效实名认证用户</p>
                  </li>
                   <li>
                      <div class="diamonds">
                          <span><van-icon name="http://pay.91dianji.com.cn/diamonds.png" size="60px" /></span>
                          <span>钻石会员</span>
                      </div>
                      <p>直接分享产生20名有效实名认证用户</p>
                  </li>
                   <li>
                      <div class="diamonds">
                          <span><van-icon name="http://pay.91dianji.com.cn/diamonds.png" size="60px" /></span>
                          <span>城市合伙人</span>
                      </div>
                      <p>直接分享产生10名有效实名认证用户，且直接分享和间接分享中产生5名有效钻石会员</p>
                  </li>
              </ul>
          </div>
           <div class="share" v-show="Sharewxf">
             <div class="wx">
                <!-- <van-button  class="shareBtn" @click="Sharewxf=true" type="default">分享</van-button> -->
                    <ul>
                        <li id="wxF"  @click="wxfri">
                            <p><van-icon name="http://pay.91dianji.com.cn/wx.png" size="40px"/></p>
                            <p>分享给好友</p>
                        </li>
                        <li @click="wxcir">
                            <p><van-icon color="white"  size="40px"  name="http://pay.91dianji.com.cn/pyq.png"/></p>
                            <p>分享到朋友圈</p>
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
export default {
    data() {
        return {
             Sharewxf:false,
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
         showCover(){
           this.Sharewxf=!this.Sharewxf
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
                // alert("分享成功！");
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
        }, function (e) {
            alert("分享失败：" + e.message);
        });
    },

    }
}
</script>

<style lang="less">
   #extension{
       >header {
        //    background: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
        //    color:#fff;
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
           .extension{
               width:100%;
               >img {
                   width:100%;
               }
           }
           .list{
               padding:10px;
               >ul{
                   li{
                        margin-bottom: 15px;
                       .diamonds{
                           display: flex;
                           align-items: center;
                           padding-left:20px;
                           span{
                               &:nth-of-type(2){
                                   font-size: 34px;
                                   font-weight: bold;
                               }
                           }
                       }
                       >p{
                           padding-left:18%;
                           font-size: 30px;
                           line-height: 38px;
                       }
                   }
               }
           }
            .share {
                .shareBtn {
                    margin:100px 0px 50px 100px;
                    width:100px;
                    text-align: center;
                }
                ul{
                    padding-top:50px;
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
       }
   }
</style>

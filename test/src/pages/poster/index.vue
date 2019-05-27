<template>
    <div id="page-poster">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">海报</div>
            <div @click="showCover" class="right-icon center"><van-icon color="white" size="20px" name="weapp-nav"/></div>
        </header>
        <div class="poster-canvas center"><canvas id="poster" width="375" height="667"></canvas>  </div>
        <div class="btn row">
            <div @click="handlechangeRandom" class="change center">换一换</div>
            <div @click="handlePrivacySettings" class="rightnow center">隐私设置</div>
            <div @click="savePoster" class="rightnow center">立即合成</div>
        </div>
        <div class="share" v-show="Sharewxf">
             <div class="wx">
                <van-button  class="shareBtn" @click="Sharewxf=true" type="default">分享</van-button>
                    <ul>
                        <li id="wxF"  @click="wxfri">
                            <p><van-icon name="http://pay.91dianji.com.cn/wx.png" size="40px"/></p>
                            <p>好友</p>
                        </li>
                        <li @click="wxcir">
                            <p><van-icon color="white"  size="30px"  name="http://pay.91dianji.com.cn/pyq.png"/></p>
                            <p>朋友圈</p>
                        </li>
                    </ul>
               <div class="button">
                     <van-button  size="large" @click="Sharewxf=false" type="default">取消</van-button>
               </div>
            </div>
        </div>
        <div class="load center" v-if="imgShow">
            <div v-if="showUpload" >
                <div class="loading center"><van-loading color="white" size="60px" /></div>
                <div class="title center-end">海报合成中</div>
            </div>
            <div class="imgs" v-if="!showUpload">
                <div class="savePoster center"><img :src="imgUrl" ></div>
                <div class="success center">
                    <!-- 海报生成成功，长按保存或分享 -->
                     海报生成成功
                </div>
                
            </div>
        </div>
        <loading :componentload="componentload"></loading>
    </div>

</template>
<script>
import loading from '@/components/loading'
import storage from '@/lib/storage'
import share from '@/lib/share'
import { axiosPost,axiosGet } from '../../lib/http';
export default {
    components:{
      loading
    },
    data() {
        return {
            componentload: true,
            cur:0 ,
            showUpload:true,
            imgUrl: '',
            imgShow: false,
            url: 'http://pay.91dianji.com.cn',
            qrcode: '',
            random: '01',
             shares:null,
            sharewx:null,
            Sharewxf:false
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1);
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
                console.log(JSON.stringify(that.sharewx))
                console.log(new Date())
                 that.sharewxCirMessage()
            }, function (e) {
                alert("获取分享服务列表失败：" + e.message);
            });
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
                console.log(JSON.stringify(that.sharewx))
                console.log(new Date())
                    that.shareWeixinMessage()

            }, function (e) {
                alert("获取分享服务列表失败：" + e.message);
            });
        },
        sharewxCirMessage(){
              let that=this
          that.sharewx.send( 
                // {
                //      type:"image",
                //       pictures: that.imgUrl,
                //     content:"钱夹宝综合金融服务推广平台，点滴成就未来",
                //     // href: "http://pay.91dianji.com.cn/#/home?promotioncode="+that.$store.state.wechat.promotioncode,
                //     extra:{scene:"WXSceneTimeline"}
                // }
                { content: "钱夹宝综合金融服务推广平台，点滴成就未来",title:"钱夹宝",thumbs:"http://pay.91dianji.com.cn/wxc.png", href: "http://pay.91dianji.com.cn/#/home?promotioncode="+that.$store.state.wechat.promotioncode, extra: { scene: "WXSceneTimeline" } }
                , function(){
                alert("分享成功！");
            }, function(e){
                alert("分享失败："+e.message);
            });
        },
         shareWeixinMessage() {
             let that=this
              console.log(JSON.stringify(that.sharewx),"55555555555555555")
              console.log(that.imgUrl)
             that.sharewx.send(
                 { 
                     content: "钱夹宝综合金融服务推广平台，点滴成就未来",title:"钱夹宝", 
                     thumbs:"http://pay.91dianji.com.cn/wxc.png",
                     href: "http://pay.91dianji.com.cn/#/home?promotioncode="+that.$store.state.wechat.promotioncode,
                     extra: { scene: "WXSceneSession" } 
                 }, function () {
            // alert("分享成功！");
        }, function (e) {
            alert("分享失败：" + e.message);
        });
    },
        cancleCover(){
            this.showShare=false
        },
        
        showCover(){
           this.Sharewxf=true
        },
        // save(){
        //     plus.gallery.save( '/wx.png', (result) => {
        //         console.log(result.file)
        //         this.$toast("保存成功")
        //         } ,(e) => {
        //         console.log(JSON.stringify(e))
        //          this.$toast("保存失败")
        //         });
        // },
        // 随机数
        handlechangeRandom(){
            this.componentload = true;
            var ran = Math.ceil((Math.random())*26);
            var random = '';
            if(ran < 10){
                random = '0' + ran;
                console.log('随机数',random);
                this.random = random;
            }else{
                this.random = ran;
                console.log('随机数',ran);
            }
            this.handlePoster();
        },
        handlePosterWithoutDetail(){
            this.componentload = true;
            var poster = document.getElementById("poster");
            var ctx = poster.getContext("2d");
            ctx.fillStyle = "#fff";
            ctx.fillRect(0,0,375,667);

            var bigPoster = new Image();
            
            bigPoster.src = 'http://pay.91dianji.com.cn/pop'+ this.random +'.jpg';
            bigPoster.onload = function(){
                ctx.drawImage(bigPoster,0,0,375,600);
                setTimeout(()=>{
                    this.componentload = false;
                },2500);
            };
            
            var qrcode = new Image();
            qrcode.src = 'http://pay.91dianji.com.cn/' + this.qrcode;
            qrcode.onload = function(){
                ctx.drawImage(qrcode,10,610,50,50);
            };
            ctx.fillStyle="#000";
            ctx.font="14px Arial";
            ctx.fillText('长按识别二维码体验更多惊喜',80,640);
            setTimeout(()=>{
                this.componentload = false;
            },2500);
        },
        handlePoster(){
            this.componentload = true;
            var poster = document.getElementById("poster");
            var ctx = poster.getContext("2d");
            ctx.fillStyle = "#fff";
            ctx.fillRect(0,0,375,667);

            var bigPoster = new Image();
            
            bigPoster.src = 'http://pay.91dianji.com.cn/pop'+ this.random +'.jpg';
            bigPoster.onload = function(){
                ctx.drawImage(bigPoster,0,0,375,600);
                setTimeout(()=>{
                    this.componentload = false;
                },2500);
            };
            
            var qrcode = new Image();
            qrcode.src = 'http://pay.91dianji.com.cn/' + this.qrcode;
            qrcode.onload = function(){
                ctx.drawImage(qrcode,300,610,50,50);
            };
            var headimg = new Image();
            var url = this.$store.state.wechat.headimg;
            var domain = url.split('/mmopen');
            headimg.src = this.url + '/wxAvator' + '/mmopen' + domain[1];
            headimg.onload = function(){
                ctx.drawImage(headimg,10,610,50,50);
            };

            ctx.fillStyle="#000";
            ctx.font="14px Arial";
            ctx.fillText(this.$store.state.wechat.nickname,80,630);
            ctx.fillText(this.$store.state.wechat.promotioncode,80,650);
            setTimeout(()=>{
                this.componentload = false;
            },2500);
        },
        savePoster(){
            this.imgShow = true;
            var poster = document.getElementById("poster");
            var dataURL = poster.toDataURL('image/png');
            this.imgUrl = dataURL;
            if(this.imgUrl != ''){
                setTimeout(() =>{
                    this.showUpload = false;
                },1000)
            }
        },
        // 先判断是否有二维码
        handleJundgeQrCode(){
            let url = '/customer/getQrcode';
            let params = {};
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    if(res.data.data === null){
                        let url = '/customer/downloadQrcode';
                        let params = {
                            code: this.$store.state.wechat.promotioncode
                        };
                        axiosPost(url,params).then(res =>{
                            if(res.data.success){
                                this.qrcode = res.data.data;
                                setTimeout(() =>{
                                    this.componentload = false;
                                },500);
                                this.handlePoster();
                            }else{
                                this.$toast('二维码请求失败');
                            }
                        })
                    }else{
                        this.qrcode = res.data.data;
                        this.handlePoster();
                    }
                }else{
                }
            }).catch(res =>{
            })
        },
        // 隐私设置
        handlePrivacySettings(){
            this.$dialog.confirm({
                title: '提示',
                message: '确定要开启隐私设置吗？开启后将在海报中隐藏您的微信头像、昵称和推荐码等信息',
                confirmButtonText:'开启',
                cancelButtonText: '关闭',
            })
            .then(() => {
                console.log('开启');   
                this.handlePosterWithoutDetail();
            }).catch(() => {
                console.log('关闭');
                this.handlePoster();
            });
        },
        shareApp(){
            let share={}
            share.info={
                id:"",
                name:"",
                head_image:"",
                introduce:""
            }
        }

    },
    created () {
       
    },
    mounted(){
        this.handleJundgeQrCode();
    }
}
</script>

<style lang="less">
   #page-poster{
       position: relative;
       width: 100vw;
       padding-top: 100px;
       height: calc(100vh - 100px);
       background: #F2F2F2;
       .poster-canvas{
           width: 100%;
           height: 970px;
           #poster{
                transform: scale(0.6);
                margin-top: -20px;
            }   
       }
       .btn{
           width: 88vw;
           height: 100px;
           margin-left: auto;
           margin-right: auto;
           font-size: 28px;
           margin-top: -50px;
           .change{
               width: 30%;
               height: 100%;
               background: #4b66af;
               color: #ffffff;
               border-radius: 20px;
           }
           .rightnow{
               width: 30%;
               height: 100%;
               margin-left: 5%;
                background: #4b66af;
                color: #ffffff;
                border-radius: 20px;
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
       .load{
           width: 100vw;
           height: 100vh;
           position: fixed;
           top: 0;
           left: 0;
           z-index: 2;
           background: rgba(0, 0, 0, 0.5);
           .loading{
               width: 100vw;
               height: 100px;
           }
           .title{
               width: 100vw;
               height: 80px;
               font-size: 28px;
               color: #ffffff;
           }
           .imgs{
               width: 100vw;
               height: 100vh;
               background: rgba(0, 0, 0, 0.8);
               .savePoster{
                   width: 100vw;
                   height: auto;
                   margin: 100px auto auto auto;
                   >img{
                       width: 450px;
                       height: 800.4px;
                   }
               }
               .success{
                   width: 100vw;
                   height: 100px;
                   color: #ffffff;
                   font-size: 28px;
                  
                     
               }
           }
       }
        >.cover {
            z-index:1000;
            background-color: rgba(0, 0, 0, 0.1);
            position: fixed;
            top:0px;
            bottom:0px;
            left:0px;
            right:0px;
            >div{
                position: fixed;
                bottom:0;
                left:0px;
                right:0px;
                padding:15px;
                >ul{
                    background-color: #fff;
                    border-radius:20px;
                    display: flex;
                    margin-bottom: 15px;
                    >li {
                        width:20%;
                        text-align: center;
                        >p {
                            &:nth-of-type(2){
                                padding-top:10px;
                                padding-bottom: 10px;
                            }
                            &:nth-of-type(1){
                                font-size: 40px;
                            }
                        }
                    }
                }
               
                >.cancle {
                    //  margin:10px;
                     .van-button--default{
                        background-color: #fff;
                        color:#000;
                        margin-bottom:40px;
                        border-radius: 15px;
                  }
                }
            }
        }
         .van-dialog .van-button {
                /* border: 0; */
                border: 1px solid #4b66af;
            }
   }
</style>

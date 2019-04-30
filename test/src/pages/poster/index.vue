<template>
    <div id="page-poster">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">海报</div>
            <div class="right-icon center"><van-icon color="white" size="20px" name="weapp-nav"/></div>
        </header>
        <div class="poster-canvas center"><canvas id="poster" width="375" height="667"></canvas>  </div>
        <div class="btn row">
            <div @click="handlechangeRandom" class="change center">换一换</div>
            <div @click="savePoster" class="rightnow center">立即合成</div>
        </div>
        <div class="load center" v-if="imgShow">
            <div v-if="showUpload" >
                <div class="loading center"><van-loading color="white" size="60px" /></div>
                <div class="title center-end">海报合成中</div>
            </div>
            <div class="imgs" v-if="!showUpload">
                <div class="savePoster center"><img :src="imgUrl" ></div>
                <div class="success center">海报生成成功,请长按图片保存</div>
            </div>
        </div>
        <loading :componentload="componentload"></loading>
    </div>

</template>


<script>
import loading from '@/components/loading'
import storage from '@/lib/storage'
import { axiosPost } from '../../lib/http';
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
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1);
        },
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
        handlePoster(){
            var poster = document.getElementById("poster");
            var ctx = poster.getContext("2d");
            ctx.fillStyle = "#fff";
            ctx.fillRect(0,0,375,667);

            var bigPoster = new Image();
            
            bigPoster.src = 'http://pay.91dianji.com.cn/pop'+ this.random +'.jpg';
            bigPoster.onload = function(){
                ctx.drawImage(bigPoster,0,0,375,600);
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
            },1000);

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
            let url = 'http://pay.91dianji.com.cn/api/customer/getQrcode';
            let params = {};
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    if(res.data.data === null){
                        let url = 'http://pay.91dianji.com.cn/api/customer/downloadQrcode';
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
        }
    },
    mounted(){
        this.handleJundgeQrCode();
        this.handlePoster();
    }
}
</script>

<style lang="less">
   #page-poster{
       width: 100vw;
       padding-top: 100px;
       height: calc(100vh - 100px);
       background: #F2F2F2;
       .poster-canvas{
           width: 100%;
           height: 970px;
           #poster{
                transform: scale(0.6);
                border: solid 1px red;
            }   
       }
       .btn{
           width: 88vw;
           height: 100px;
           margin-left: auto;
           margin-right: auto;
           font-size: 28px;
           .change{
               width: 45%;
               height: 100%;
               background: #4b66af;
               color: #ffffff;
               border-radius: 20px;
           }
           .rightnow{
               width: 45%;
               height: 100%;
               margin-left: 10%;
                background: #4b66af;
                color: #ffffff;
                border-radius: 20px;
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
   }
</style>

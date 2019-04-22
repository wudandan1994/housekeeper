<template>
    <div id="page-poster">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">海报</div>
            <div class="right-icon center"><van-icon color="white" size="20px" name="weapp-nav"/></div>
        </header>
        <div class="poster-canvas center"><canvas id="poster" width="320" height="480"></canvas>  </div>
        <div @click="savePoster" class="rightnow center">立即合成</div>
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
    </div>

</template>


<script>
import storage from '@/lib/storage'
export default {
    data() {
        return {
            cur:0 ,
            showUpload:true,
            imgUrl: '',
            imgShow: false,
            url: 'http://pay.91dianji.com.cn'
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1);
        },
        handlePoster(){
            var poster = document.getElementById("poster");
            var ctx = poster.getContext("2d");
            ctx.fillStyle = "#ccc";
            ctx.fillRect(0,0,320,480);

            var bigPoster = new Image();
            var random = Math.ceil((Math.random())*6);
            bigPoster.src = 'http://pay.91dianji.com.cn/poster_00'+ random +'.jpg';
            bigPoster.onload = function(){
                ctx.drawImage(bigPoster,0,0,320,380);
            };
            
            var qrcode = new Image();
            qrcode.src = 'http://pay.91dianji.com.cn/qrCode/barCode?site=weixin&url=http://pay.91dianji.com.cn/#/home?promotioncode='+this.$store.state.wechat.promotioncode;
            qrcode.onload = function(){
                ctx.drawImage(qrcode,230,390,80,80);
            };

            var headimg = new Image();
            var url = this.$store.state.wechat.headimg;
            var domain = url.split('/mmopen');
            console.log('头像',this.url + '/wxAvator' + '/mmopen' + domain[1]);
            headimg.src = this.url + '/wxAvator' + '/mmopen' + domain[1];
            headimg.onload = function(){
                ctx.drawImage(headimg,10,390,50,50);
            };

            ctx.fillStyle="#4b66af";
            ctx.font="14px Arial";
            ctx.fillText("name: " + this.$store.state.wechat.nickname,70,405);
            ctx.fillText("code: " + this.$store.state.wechat.promotioncode,70,430);
            ctx.fillStyle="#f00";
            ctx.font="16px Arial";
            ctx.fillText("长按识别二维码体验更多惊喜",10,460);
            
            

        },
        savePoster(){
            this.imgShow = true;
            var poster = document.getElementById("poster");
            var dataURL = poster.toDataURL('image/png');
            console.log('图片',dataURL,1);
            this.imgUrl = dataURL;
            if(this.imgUrl != ''){
                setTimeout(() =>{
                    this.showUpload = false;
                },1000)
            }
        }
    },
    mounted(){
        this.handlePoster();
    }
}
</script>

<style lang="less">
   #page-poster{
       width: 100vw;
       height: calc(100vh - 86px);
       padding-top: 86px;
       .poster-canvas{
           width: auto;
           margin: 50px auto auto auto;
       }
       #scream{
           width: 1px;
           height: 1px;
       }
       #screams{
           width: 100px;
           height: 100px;
       }
       .rightnow{
           width: 88vw;
           height: 100px;
           margin-left: auto;
           margin-right: auto;
           margin-top: 50px;
           font-size: 28px;
           background: #4b66af;
           color: #ffffff;
           border-radius: 20px;
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

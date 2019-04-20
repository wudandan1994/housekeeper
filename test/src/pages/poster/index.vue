<template>
    <div id="page-poster">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">海报</div>
            <div class="right-icon center"><van-icon color="white" size="20px" name="weapp-nav"/></div>
        </header>
        <div class="poster-canvas center"><canvas id="poster" width="320" height="500"></canvas>  </div>
        <div @click="savePoster" class="rightnow center">立即合成</div>
        <div class="load center" v-if="imgShow">
            <div v-if="showUpload" >
                <div class="loading center"><van-loading color="white" size="60px" /></div>
                <div class="title center-end">海报生成中</div>
            </div>
            <div class="imgs center" v-if="!showUpload">
                <img :src="imgUrl" >
                <div class="success center">海报生成成功,请长按图片保存</div>
            </div>
        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {
            cur:0 ,
        showUpload:true,
        imgUrl: '',
        imgShow: false

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
            ctx.fillRect(0,0,320,500);

            var img = new Image();
            img.src = 'http://pay.91dianji.com.cn/poster_002.jpg';
            img.onload = function(){
                ctx.drawImage(img,0,0,320,370);
            };
            
            var imgs = new Image();
            imgs.src = 'http://pay.91dianji.com.cn/giovannicode.png';
            imgs.onload = function(){
                ctx.drawImage(imgs,230,380,80,80);
            };
            ctx.fillStyle="#FF0000";
            ctx.font="14px Georgia";
            ctx.fillText("姓名: GIovanni",20,400);
            ctx.fillText("推荐码: 96582153",20,440);
            
            

        },
        savePoster(){
            this.imgShow = true;
            var poster = document.getElementById("poster");
            var dataURL = poster.toDataURL('image/png');
            console.log('图片',dataURL);
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

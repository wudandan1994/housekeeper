<template>
    <div id="page_video">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">新人教程</div>
            <div class="right-icon center"></div>
        </header>
        <p>视频教学</p>
        <!-- <div class="video center one_video">
            <span>钱夹宝介绍</span>
            <span class="center" @click="handleVideo('https://m.youku.com/video/id_XNDE5MjE3MjYzMg==.html?spm=a2h3j.8428770.3416059.1&source=&sharetype=secondtime&from=singlemessage')">去观看<van-icon name="arrow"/></span>
        </div>
        <div class="video center two_video">
            <span>商户收款教程</span>
            <span class="center" @click="handleVideo('https://v.youku.com/v_show/id_XNDIzMTIzMzA2MA==.html?spm=a2h3j.8428770.3416059.1')">去观看<van-icon name="arrow"/></span>
        </div>
        <div class="video center three_video">
            <span>智能还款教程</span>
            <span class="center" @click="handleVideo('https://v.youku.com/v_show/id_XNDI2NDU1NzA0NA==.html?spm=a2h3j.8428770.3416059.1 ')">去观看<van-icon name="arrow"/></span>
        </div> -->
       <div class="learn">
            <video  src="http://video.91dianji.com.cn/v/qianjiabao.mp4" controls></video>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        handleReturnHome(){
            this.$router.go(-1);
        },
        handleVideo(obj){
            window.location.href = obj;
        }
    }
}
</script>
<style lang="less" scoped>
#page_video{
    width: 100%;
    padding-top: 86px;
    .learn {
        width:100%;
        box-sizing: border-box;
        padding:10px;
        video {
            width:100%;
        }
    }
    .video{
        width: 90%;
        height: 300px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
        box-shadow: 0px 0px 15px 5px #ccc;
        border-radius: 10px;
        position: relative;
        span:nth-child(1){
            color: #fff;
            font-size: 34px;
        }
        span:nth-child(2){
            position: absolute;
            right: 15px;
            bottom: 15px;
            color: #fff;
            font-size: 28px;
            animation: more 1s linear infinite;
            -webkit-animation: more 1s linear infinite;
        }
        @keyframes more{
            0%{
                right: 15px;
            }
            50%{
                right: 25px;
            }
            100%{
                right: 15px;
            }
        }
    }
    .one_video{
        background-image: linear-gradient(100deg, #fe7d64 0%, #ff3f2b 100%), linear-gradient(#4f60c8, #4f60c8);
    }
    .two_video{
        background-image: linear-gradient(100deg, #bb8e6b 0%, #9b6130 100%), linear-gradient(#4f60c8, #4f60c8);
    }
    .three_video{
        background-image: linear-gradient(100deg, #fcc53d 0%, #ffa800 100%), linear-gradient(#4f60c8, #4f60c8);
    }
}
</style>

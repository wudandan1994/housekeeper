<template>
    <div id="radar">
        <div class="header">
            <div class="title center">AI雷达</div>
            <div class="more center" @click="handleExpect"><van-icon name="weapp-nav" size="28px"/></div>
            <div class="AI start-center"><van-icon size="20px" name="aim"/>&nbsp;AI雷达</div>
            <div class="Analysis end-center" @click="handleExpect">数据分析&nbsp; <van-icon size="20px" name="http://fx.91dianji.com.cn/fengxing_jiantou.png"/></div>
            <router-link tag="div" to="/radar" class="circle center">
                <div class="container">
                    <img class="bg" src="http://pay.91dianji.com.cn/AI@2x.png" alt="">
                    <img class="scan" src="http://pay.91dianji.com.cn/pay_AI_center@2x.png" alt="">
                    <img class="logo" src="http://pay.91dianji.com.cn/logo@2x.png" alt="">
                </div>
                
            </router-link>
            <div class="btn">
                <div class="center" @click="handleExpect">AI报表</div>
                <div class="center" @click="handleExpect">客户表单</div>
            </div>
        </div>
        <div class="business">
            <ul>
                <router-link tag="li" to="/share/poster">
                    <p><van-icon name="http://bc.91dianji.com.cn/405.png" /></p>
                    <p>推广海报图</p>
                    <p>分享二维码、快速增粉</p>
                </router-link>
                <li @click="handleExpect">
                    <p><van-icon name="http://bc.91dianji.com.cn/413.png" /></p>
                    <p>推广素材图</p>
                    <p>各种视频+图片</p>
                </li>
                <li @click="handleExpect">
                    <p><van-icon name="http://bc.91dianji.com.cn/414.png" /></p>
                    <p>信用卡推广图</p>
                    <p>信用卡推广图.一键锁粉</p>
                </li>
                <li @click="handleExpect">
                    <p><van-icon name="http://bc.91dianji.com.cn/404.png" /></p>
                    <p>新闻资讯</p>
                    <p>文章可植入广告、锁粉</p>
                </li>
                <li @click="handleExpect">
                    <p><van-icon name="http://bc.91dianji.com.cn/406.png" /></p>
                    <p>邀请好友</p>
                    <p>邀请新人注册,有红包奖励</p>
                </li>
                <li @click="handleExpect">
                    <p><van-icon name="http://bc.91dianji.com.cn/407.png" /></p>
                    <p>钱夹宝视频</p>
                    <p>钱夹宝视频.一键分享</p>
                </li>
                <li @click="handleExpect">
                    <p><van-icon name="http://bc.91dianji.com.cn/408.png" /></p>
                    <p>名片推广</p>
                    <p>分享名片.快速增粉</p>
                </li>
                <li @click="handleExpect">
                    <p><van-icon name="http://bc.91dianji.com.cn/409.png" /></p>
                    <p>生成短链接</p>
                    <p>快速分享短链接</p>
                </li>
                <li @click="handleExpect">
                    <p><van-icon name="http://bc.91dianji.com.cn/410.png" /></p>
                    <p>链接转化二维码</p>
                    <p>快速转粉.一键分享</p>
                </li>
                <li @click="handleExpect">
                    <p><van-icon name="http://bc.91dianji.com.cn/411.png" /></p>
                    <p>信用卡链接</p>
                    <p>分享带锁粉功能哦!</p>
                </li>
                <li @click="handleExpect">
                    <p><van-icon name="http://bc.91dianji.com.cn/412.png" /></p>
                    <p>分享链接</p>
                    <p>分享钱夹宝链接</p>
                </li>
                <li @click="handleExpect">
                    <p><van-icon name="http://bc.91dianji.com.cn/415.png" /></p>
                    <p>物料下载</p>
                    <p>海量宣传资料</p>
                </li>
            </ul>
        </div>
        


        <footerMenu :active="active" @getChange="changeActive"></footerMenu>
    </div>
</template>

<script>
import footerMenu from '@/components/footer'
export default {
    data(){
        return{
            active: 4,
        }
    },
    components: {
        footerMenu
    },
    methods: {
         // 获取更多
        handleExpect(){
            this.$toast("敬请期待")
        },
        changeActive(obj){
            console.log('obj', obj);
        }
    }
}
</script>

<style lang="less" scoped>
    #radar{
        width: 100vw;
        height: calc(100vh - 100px);
        overflow-y: scroll;
        overflow-x: hidden;
        .header{
            width: 100%;
            height: 980px;
            background: #4b66af;
            position: relative;
            z-index: 1;
            .title{
                width: 100%;
                height: 80px;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
                font-size: 34px;
                color: #ffffff;
                font-weight: 700;
            }
            .more{
                width: 15%;
                height: 80px;
                position: absolute;
                top: 0;
                right: 0;
                z-index: 3;
                color: #ffffff;
            }
            .AI{
                width: auto;
                height: 80px;
                position: absolute;
                top: 80px;
                left: 20px;
                z-index: 3;
                color: #ffffff; 
                font-size: 26px;
            }
            .Analysis{
                width: auto;
                height: 80px;
                position: absolute;
                top: 80px;
                right: 20px;
                z-index: 3;
                color: #ffffff; 
                font-size: 26px;
            }
            .circle{
                width: 100%;
                height: auto;
                position: absolute;
                top: 160px;
                right: 0px;
                z-index: 3;
                .container{
                    width: 90%;
                    height: auto;
                    position: relative;
                    z-index: 1;
                    .bg{
                        width: 100%;
                        height: auto;
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 2;
                    }
                    .scan{
                        width: 100%;
                        height: auto;
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 3;
                        animation: myMove1 4s linear infinite normal;
                        -webkit-animation: myMove1 4s linear infinite normal;
                    }
                    .logo{
                        width: 146px;
                        height: auto;
                        position: absolute;
                        top: 265px;
                        left: 265px;
                        z-index: 4;
                    }
                }
                @keyframes myMove1 {
                    from {transform: rotate(360deg);}
                    to {transform: rotate(0deg);}
                }
                
                @-webkit-keyframes myMove1 {
                    from {transform: rotate(360deg);}
                    to {transform: rotate(0deg);}
                }
            }
            .btn{
                width: 100%;
                height: auto;
                position: absolute;
                bottom: 20px;
                right: 0px;
                z-index: 3;
                display: flex;
                display: -webkit-flex;
                justify-content: space-around;
                div:nth-child(1){
                    width: 40%;
                    height: 90px;
                    background-color: rgba(0, 0, 0, 0.5);
                    border-radius: 45px;
                    color: #ffffff;
                    font-size: 30px;
                    font-weight: 700;
                }
                div:nth-child(2){
                    width: 40%;
                    height: 90px;
                    background-color: rgba(0, 0, 0, 0.2);
                    border-radius: 45px;
                    color: #ffffff;
                    font-size: 30px;
                    font-weight: 700;
                }
            }
        }  
        .business {
            margin-top: 50px;
            ul{
                display: flex;
                flex-wrap: wrap;
                position: relative;
                margin-bottom:200px;
                li{
                    width:33%;
                    margin-top:5px;
                    font-size: 14px;
                    color:#eee;
                    text-align: center;
                    padding-top: 20px;
                    padding-bottom: 40px;
                    p{
                        &:nth-of-type(1){
                            font-size: 50px;                                                                       
                        }
                        &:nth-of-type(2){
                            margin-top:30px;
                            margin-bottom: 20px;
                            font-size: 28px;
                        }
                        &:nth-of-type(3){
                            font-size: 24px;
                            margin-bottom: 10px;
                        }
                    }
                    &:nth-of-type(2),&:nth-of-type(5),&:nth-of-type(8),&:nth-of-type(11) {
                        margin-left:0.5%;
                        margin-right: 0.5%;
                    }
                    &:nth-of-type(1){
                        background-color: #6798FF;
                    }
                    &:nth-of-type(2){
                        background-color: #655DA6;
                    }
                    &:nth-of-type(3){
                        background-color: #3366FF;
                    }
                    &:nth-of-type(4){
                        background-color: #2E3C66;
                    }
                    &:nth-of-type(5){
                        background-color: #999868;
                    }
                    &:nth-of-type(6){
                        background-color: #44808F;
                    }
                    &:nth-of-type(7){
                        background-color: #C86F51;
                    }
                    &:nth-of-type(8){
                        background-color: #CF9D5E;
                    }
                    &:nth-of-type(9){
                        background-color: #986766;
                    }
                    &:nth-of-type(10){
                        background-color: #9C9ACC;
                    }
                    &:nth-of-type(11){
                        background-color: #BF3D3F;
                    }
                    &:nth-of-type(12){
                        background-color: #878787;
                    }
                }
                .tips {
                    width:80%;
                    height: 500px;
                    margin-left:10%;
                    position: absolute;
                    bottom:6%;
                    left:0px;
                    h3 {
                        text-align: center;
                        padding:20px 0;
                        background-color: #E8E8E8;
                        border-bottom: 1px solid #ccc;
                        color:#3B3B3D;
                        font-weight: bold;
                    }
                    p {
                        &:nth-of-type(1){
                            line-height: 40px;
                            background-color: #fff;
                            padding:20px;
                        }
                        &:nth-of-type(2){
                            padding-bottom: 20px;
                            line-height: 40px;
                            background-color: #fff;
                            display: flex;
                            justify-content: space-around;
                            span {
                                border:2px solid #ccc;
                                padding:10px 30px;
                                border-radius:20px;
                                &:nth-of-type(2){
                                    background-color: #BD9B5B;
                                    color:#fff;
                                }
                            }
                        }
                    }
                }
            }
        }                                                                                                                                                      
    }
</style>

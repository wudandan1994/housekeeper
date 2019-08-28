<template>
    <div id="radar">
        <div class="header">
            <div class="big-title row">
                <div class="top-title center">AI雷达</div>
                <div class="more center" @click="handleExpect"><van-icon name="weapp-nav" size="28px"/></div>
            </div>
            <div class="AI-Analysis">
                <div class="AI start-center"><van-icon size="20px" name="aim"/>&nbsp;AI雷达</div>
                <div class="Analysis end-center" @click="handleExpect">数据分析&nbsp; <van-icon size="20px" name="http://fx.91dianji.com.cn/fengxing_jiantou.png"/></div>
            </div>
            
            <router-link tag="div" to="/radar" class="circle center">
                <div class="container">
                    <div class="radar"></div>
                    <img class="logo center" src="http://pay.91dianji.com.cn/logo@2x.png" alt="">
                    <img class="click" src="http://pay.91dianji.com.cn/click.png" alt=""> 
                </div>
            </router-link>
            <div class="btn">
                <div class="column" @click="handleRouter('1')">
                    <div class="center">下级浏览数</div>
                    <div class="center">{{browseCount}}</div>
                </div>
                <div class="column" @click="handleRouter('3')">
                    <div class="center">我的团队</div>
                    <div class="center">{{teamCount}}</div>
                </div>
            </div>
        </div>
        <div class="business">
            <ul>
                <!-- 加载图片太多，完整海报分布 -->

                
                <!-- <router-link tag="li" :to="{path: '/share/poster',query:{max: '54',min: '1'}}">
                    <p><van-icon name="http://bc.91dianji.com.cn/405.png" /></p>
                    <p>推广海报图</p>
                    <p>分享二维码、快速增粉</p>
                </router-link>
                 <router-link tag="li" :to="{path: '/share/poster',query:{max: '140',min: '100'}}">
                    <p><van-icon name="http://bc.91dianji.com.cn/413.png" /></p>
                    <p>推广素材图</p>
                    <p>各种视频+图片</p>
                </router-link>
                <router-link tag="li" :to="{path: '/share/poster',query:{max: '208',min: '200'}}">
                    <p><van-icon name="http://bc.91dianji.com.cn/414.png" /></p>
                    <p>信用卡推广图</p>
                    <p>信用卡推广图.一键锁粉</p>
                </router-link> -->




                 <router-link tag="li" :to="{path: '/share/poster',query:{max: '10',min: '1'}}">
                    <p><van-icon name="http://bc.91dianji.com.cn/405.png" /></p>
                    <p>推广海报图</p>
                    <p>分享二维码、快速增粉</p>
                </router-link>
                 <router-link tag="li" :to="{path: '/share/poster',query:{max: '112',min: '100'}}">
                    <p><van-icon name="http://bc.91dianji.com.cn/413.png" /></p>
                    <p>推广素材图</p>
                    <p>各种视频+图片</p>
                </router-link>
                <router-link tag="li" :to="{path: '/share/poster',query:{max: '208',min: '200'}}">
                    <p><van-icon name="http://bc.91dianji.com.cn/414.png" /></p>
                    <p>信用卡推广图</p>
                    <p>信用卡推广图.一键锁粉</p>
                </router-link>

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
                <router-link tag="li" to="/video" >
                    <p><van-icon name="http://bc.91dianji.com.cn/407.png" /></p>
                    <p>钱夹宝视频</p>
                    <p>钱夹宝视频.一键分享</p>
                </router-link>
                <li @click="handleExpect">
                    <p><van-icon name="http://bc.91dianji.com.cn/408.png" /></p>
                    <p>名片推广</p>
                    <p>分享名片.快速增粉</p>
                </li>
                <li @click="handleHref">
                    <p><van-icon name="http://bc.91dianji.com.cn/409.png" /></p>
                    <p>生成短链接</p>
                    <p>快速分享短链接</p>
                </li>
                <li @click="handleExpect">
                    <p><van-icon name="http://bc.91dianji.com.cn/410.png" /></p>
                    <p>链接转化二维码</p>
                    <p>快速转粉.一键分享</p>
                </li>
                <li  @click="handleHref">
                    <p><van-icon name="http://bc.91dianji.com.cn/411.png" /></p>
                    <p>信用卡链接</p>
                    <p>分享带锁粉功能哦!</p>
                </li>
                <li  @click="handleHref">
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
        <transition name="van-slide-down">
            <div id="href" v-if="href">
                <div class="center">您的锁粉链接</div>
                <div class="center" id="mobile"><span>http://pay.91dianji.com.cn/#/home?promotioncode=</span>{{this.$store.state.wechat.promotioncode}}</div>
                <div>
                    <div class="center" @click="href = false">取消</div>
                    <div class="test center" data-clipboard-action="copy" data-clipboard-target="#mobile" @click="handleCopy('suibianshua3')">复制</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import footerMenu from '@/components/footer'
import ClipboardJS from "clipboard"
import storage from '@/lib/storage'
import {axiosPost} from '@/lib/http'
export default {
    data(){
        return{
            active: 3,
            href: false,
            teamCount: '0',
            browseCount: '0'
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
        },
        handleHref(){
            this.href = true;
        },
        // fuzhi
        handleCopy(data){
            var that = this;
            var clipboard = new ClipboardJS('.test');
            //成功回调
            clipboard.on('success', function(e) {
                that.$toast('复制成功');
                e.clearSelection();
                that.href = false;
            });
            //失败回调
            clipboard.on('error', function(e) {
                that.$toast('复制失败');
            });
        },
        // 获取AI雷达统计数据
        handleAIRadar(){
            axiosPost('/behavior/getIndexRecord').then(res =>{
                if(res.data.success){
                    // console.log('AI请求成功',res);
                    this.browseCount = res.data.data.browseCount;
                    this.teamCount = res.data.data.teamCount;
                }else{
                //    console.log('AI请求失败',res); 
                }
            }).catch(res =>{
                // console.log('AI请求失败',res); 
            })
        },
        // 路由
        handleRouter(item){
            if(item == '1'){
                this.$router.push({
                    path: '/nextLevel',
                    query:{
                        title: '下级浏览数',
                        number: this.browseCount,
                        id: '0',
                    }
                })
            }else{
              this.$router.push({
                    path: '/nextLevel',
                    query:{
                        title: '我的团队',
                        number: this.teamCount,
                        id: '3',
                    }
                })  
            }
        }
    },
    created(){
        this.handleAIRadar();
        // console.log(this.$store.state.wechat.promotioncode)
    }
}
</script>

<style lang="less" scoped>
    #radar{
        width: 100vw;
        height: calc(100vh - 100px);
        overflow-y: scroll;   //   1
        overflow-x: hidden; 
         padding-bottom: 10vh;    //   4
        .header{
            width: 100%;
            // height: calc(90vw + 330px);      2
             height: 980px;
            background: #4b66af;
            position: relative;
            .big-title{
                width: 100%;
                height: 80px;
                color: #fff;
                .top-title{
                    flex-basis: 80%;
                    margin-left: 10%;
                    font-size: 32px;
                    font-weight: 700;
                }
                .more{
                    flex-basis: 10%;
                }
            }
            .AI-Analysis{
                width: 96%;
                height: 80px;
                margin: 0px 2%;
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                -webkit-justify-content: space-between;
                color: #fff;
            }
            .circle{
                width: 100%;
                // height: 90vw;   3
                height: auto;
                position: absolute;
                top: 160px;
                right: 0px;
                z-index: 3;
                .container{
                    width: 90vw;
                    height: 90vw;
                    position: relative;
                    z-index: 1;
                    border-radius: 50%;
                    .radar {
                        width: 90vw;
                        height: 90vw;
                        max-height: 90vh;
                        max-width: 90vh;
                        position: relative;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        border-radius: 50%;
                        overflow: hidden;
                        background: url('http://pay.91dianji.com.cn/AI@2x.png');
                        background-size: contain;
                    }
                    .radar:before {
                        content: ' ';
                        display: block;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        animation: blips 5s infinite;
                        animation-timing-function: linear;
                        animation-delay: 1.4s;
                    }
                    .radar:after {
                        content: ' ';
                        display: block;
                        background-image: linear-gradient(44deg, rgba(0, 255, 51, 0) 38%, #ffffff 100%);
                        width: 50%;
                        height: 50%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        animation: radar-beam 5s infinite;
                        animation-timing-function: linear;
                        transform-origin: bottom right;
                        border-radius: 100% 0 0 0;
                    }
                    @keyframes radar-beam {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                    @keyframes blips {
                        14% {
                            background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #ffffff  30%, rgba(255, 255, 255, 0) 100%);
                        }
                        14.0002% {
                            background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #ffffff 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #ffffff 30%, rgba(255, 255, 255, 0) 100%);
                        }
                        25% {
                            background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #ffffff 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #ffffff 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 56% 86%, #ffffff 10%, #ffffff 30%, rgba(255, 255, 255, 0) 100%);
                        }
                        26% {
                            background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #ffffff 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #ffffff 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 56% 86%, #ffffff 10%, #ffffff 30%, rgba(255, 255, 255, 0) 100%);
                            opacity: 1;
                        }
                        100% {
                            background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #ffffff 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #ffffff 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 56% 86%, #ffffff 10%, #ffffff 30%, rgba(255, 255, 255, 0) 100%);
                            opacity: 0;
                        }
                    }
                    .logo{
                        width: 20vw;
                        height: auto;
                        position: absolute;
                        top: 35vw;
                        left: 35vw;
                        z-index: 14;
                        animation:  bling 1s linear infinite;
                        -webkit-animation:  bling 1s linear infinite;
                    }
                    @keyframes bling {
                        0%{
                            transform: scale(0.8);
                        }
                        50%{
                            transform: scale(1);
                        }
                        100%{
                            transform: scale(0.8);
                        }
                    }
                    .click{
                        width: 70px;
                        height: 70px;
                        position: absolute;
                        bottom: 26%;
                        left: calc(50% - 35px);
                        z-index: 10;
                        animation: blings 1s linear infinite;
                        -webkit-animation: blings 1s linear infinite;
                    }
                    @keyframes blings{
                        0%{
                            bottom: 24%;
                            opacity: 0.5;
                        }
                        50%{
                            bottom: 26%;
                            opacity: 1;
                        }
                        100%{
                            bottom: 24%;
                            opacity: 0.5;
                        }
                    }
                }
                
            }
            .btn{
                width: 100%;
                height: auto;
                display: flex;
                display: -webkit-flex;
                justify-content: space-around;
                position: absolute;
                left: 0;
                bottom: 40px;
                >div:nth-child(1){
                    width: 40%;
                    height: 80px;
                    padding: 10px 0px;
                    background: rgba(0, 0, 0, 0.5);
                    border-radius: 50px;
                    color: #fff;
                    div{
                        width: 100%;
                        height: 40px;
                        font-size: 28px;
                    }
                    >div:nth-child(1){
                        font-weight: 700;
                    }
                }
                >div:nth-child(2){
                    width: 40%;
                    height: 80px;
                    padding: 10px 0px;
                    background: rgba(0, 0, 0, 0.5);
                    border-radius: 50px;
                    color: #fff;
                    div{
                        width: 100%;
                        height: 40px;
                        font-size: 28px;
                    }
                    >div:nth-child(1){
                        font-weight: 700;
                    }
                }
            }
        }  
        .business {
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
         #href{
             position: fixed;
             background: #fff;
             width: 95vw;
             height: 400px;
             left: 2.5vw;
             bottom: 30vh;
             z-index: 10;
             border-radius: 15px;
             >div:nth-child(1){
                 width: 100%;
                 height: 80px;
                 font-weight: 700;
                 font-size: 40px;
             }
             >div:nth-child(2){
                width: 100%;
                height: 160px;
                margin: auto;
                font-size: 26px;  
             }
             >div:nth-child(3){
                 width: 90%;
                 height: 80px;
                 display: flex;
                 margin: 20px auto;
                 display:-webkit-flex;
                 justify-content: space-between;
                 -webkit-justify-content: space-between;
                 >div:nth-child(1){
                     width: 40%;
                     height: 100%;
                     background: #ccc;
                     color: #333;
                     border-radius: 5px;
                 }
                 >div:nth-child(2){
                     width: 40%;
                     height: 100%;
                     background: #4b66af;
                     color: #fff;
                     border-radius: 5px;
                 }
             }
         }                                                                                                                                                
    }
</style>

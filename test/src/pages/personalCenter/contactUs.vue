<template>
    <div id="customerService">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">关于我们</div>
            <div class="right-icon varify center"></div>
        </header>
        <div class="banner"><img src="http://pay.91dianji.com.cn/aboutUs_banner.jpg" alt=""></div>
        <div class="circle center" @click="changeLink('https://r.xiumi.us/stage/v5/48UPP/156187349','钱夹宝简介')">
            <div>
                <span class="center">产品介绍</span>
                <span class="center">业务沟通</span>
                <span class="center">商业互动</span>
                <span class="center">合作交流</span>
            </div>
        </div>
        <div class="desc-detail">
            <div class="per-detail" v-for="(item,index) in options" :key="index">
                <div class="title start-center">{{item.title}}</div>
                <div class="content">{{item.content}}</div>
            </div>
        </div>
        <div class="container">
            <div class="title start-center">联系我们</div>
            <div class="contact_us row">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_fuwushijian.png"/></div>
                <div class="contact_title">服务时间:</div>
                <div class="contact_time start-center">周一至周日（09：00-22：00）</div>
            </div>
            <div class="contact_us row">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_dianhua.png"/></div>
                <div class="contact_title">加盟热线:</div>
                <div class="jiameng_rexian">
                    <span>021-60592500</span>
                    <span>朱经理</span>
                </div>
                <div class="btn center">
                    <span @click="contact('11')"><a href="tel:021-60592500">拨打</a></span>
                </div>
            </div>
            <div class="contact_us row">
                <div class="icon center"><van-icon name="http://fx.91dianji.com.cn/fengxing_zuoji.png"/></div>
                <div class="contact_title">客服电话:</div>
                <div class="contact_detail start-center">400-1059-769</div>
                <div class="btn center" @click="contact('12')">
                    <span @click="contact('12')"><a href="tel:400-1059-769">拨打</a></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ClipboardJS from "clipboard";
import { axiosPost } from '../../lib/http';
export default {
    data() {
        return {
            options: [
                {
                    title: '产品介绍',
                    content: '钱夹宝是传帮带（上海）网络科技有限公司自主研发的一款信用卡智能管理APP，是集在线办卡、在线贷款、在线收款、智能还款各种功能为一体的信用卡神器，其中更包含卡测评、垃圾分类、油卡充值等便民服务功能。真正做到让用户体验舒心、使用放心。'
                },
                {
                    title: '商业互动',
                    content: '品牌推广营销需要创新，而创新思维意味着无限可能！提升创新营销理念，是企业核心竞争力的典型提现，也是企业睿智的选择，钱夹宝欢迎每一位有资源、有创意的企业或个人与之进行商业交互。'
                },
                {
                    title: '合作交流',
                    content: '钱夹宝为亿万信用卡用户所信任依赖，如果你希望加入我们或者寻求合作可直接到访公司，或者电话联系我们。自古合作共赢就是真理，我们欢迎您的到来。'
                },
                {
                    title: '业务沟通',
                    content: '公司一直致力于创新和发展，如果你有好的资源、好的项目或者想对接我们的资源和项目请直接联系我们。'
                }
            ]
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1);
        },
          changeLink(url,title){
            //   this.$router.push({
            //          path:"/loan/form/myOrder",
            //          query:{
            //              info:url,
            //              title:title
            //          }
            //      })
            
             if (!navigator.userAgent.match(/iPad|iPhone/i)){
                 this.$router.push({
                     path:"/home/online",
                     query:{
                         info:url,
                         title:title
                     }
                 })
             } else {
                 location.href=url
             }
        },
        contact(i){
            let data={
                type:i
            }
             axiosPost("/behavior/insertBehavior",data)
            .then(res=>{
                
            }).catch((res) =>{})

        },
        // fuzhi
        handleCopy(data){
            var that = this;
            var clipboard = new ClipboardJS('.test');
            //成功回调
            clipboard.on('success', function(e) {
                that.$toast('复制成功');
                e.clearSelection();
            });
            //失败回调
            clipboard.on('error', function(e) {
                that.$toast('复制失败');
            });
        }
    }
}
</script>
<style lang="less">
   #customerService {
        .banner{
            width: 100vw;
            height: auto;
            >img{
                    width: 100%;
                    height: auto;
            }
        }
        .circle{
            width: 100vw;
            height: auto;
            box-sizing: border-box;
            padding: 80px 40px;
            font-size: 26px;
            line-height: 45px;
            >div{
                width: 320px;
                height: 320px;
                border: solid 2px #ccc;
                border-radius: 50%;
                position: relative;
                z-index: 1;
                >span{
                    width: 120px;
                    height: 60px;
                    box-shadow: 0px 0px 1px 1px rgb(177, 142, 96);
                    background: #fff;
                    border-radius: 10px;
                    color: rgb(177, 142, 96);
                }
                >span:nth-child(1){
                    position: absolute;
                    top: -30px;
                    left: 100px;
                }
                >span:nth-child(2){
                    position: absolute;
                    top: 120px;
                    left: -60px;
                }
                >span:nth-child(3){
                    position: absolute;
                    top: 120px;
                    left: 260px;
                }
                >span:nth-child(4){
                    position: absolute;
                    bottom: -30px;
                    left: 100px;
                }
            }
        }
        .desc-detail{
            width: 100vw;
            height: auto;
            background: #000;
            .title{
                width: 92%;
                height: 80px;
                margin: auto;
                color: rgb(244, 197, 128);
                font-size: 32px;
                font-weight: 700;
                border-bottom: solid 2px rgb(244, 197, 128);
            }
            .content{
                width: 92%;
                height: auto;
                margin: auto;
                color: white;
                font-size: 28px;
                box-sizing: border-box;
                line-height: 45px;
                padding-top: 40px;
                padding-bottom: 40px;
                text-align: justify;
                text-indent: 2em;
            }
        }


       .container {
            width: 92%;
            margin: 50px auto;
            height: 400px;
            background-image: linear-gradient(180deg, #1a98ff 0%, #4b66af 100%), linear-gradient(#ffffff, #ffffff);
            background-blend-mode: normal, normal;
            border-radius: 10px;
            border: solid 1px #ffffff;
            .title{
                width: 80%;
                height: 80px;
                margin: 20px auto auto auto;
                border-bottom: solid 1px #fff;
                color: #ffffff;
                font-size: 32px;
                font-weight: 700;
            }
            .contact_us{
                width: 95%;
                height: 80px;
                margin-left: auto;
                margin-right: auto;
                font-size: 28px;
                color: #ffffff;
                .icon{
                    width: 5%;
                    height: 100%;
                }
                .contact_title{
                    width: 25%;
                    height: 100%;
                    line-height: 80px;
                    text-align: center;
                }
                .contact_time{
                    width: 70%;
                    height: 100%;
                    text-align: center;
                    line-height: 80px;
                    a{
                        color: #ffffff; 
                    }
                }

                .jiameng_rexian{
                    width: 45%;
                    height: 100%;
                    line-height: 80px;
                    display: flex;
                    display: -webkit-flex;
                    justify-content: space-between;
                    -webkit-justify-content: space-between;
                }
                .btn{
                    width: 25%;
                    height: 100%;
                    line-height: 80px;
                    span{
                        display: inline-block;
                        width: 80px;
                        height: 36px;
                        text-align: center;
                        line-height: 36px;
                        background: #005e15;
                        border-radius: 4px;
                        a{
                            color: #fff;
                        }
                    }
                }


                .contact_detail{
                    width: 45%;
                    height: 100%;
                }
                .contact_details{
                    width: 70%;
                    height: 100%;
                }
            }
       }
   }
</style>

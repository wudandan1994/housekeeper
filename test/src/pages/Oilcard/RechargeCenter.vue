<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-09 18:02:44
 * @LastEditTime: 2019-08-23 15:49:33
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="page-rechargecenter">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="center">
                   充值中心
                </span>
                <span class="end-center"></span>
            </div>
        </header>
        <div class="big-title start-end">选择充值金额</div>
        <div class="price-list">

            <div v-for="(item,index) in options" :key="index" class="normal column" :class="params.cardQuota == item.price ? 'active' : ''" @click="handleCheckType(item)">
                <div class="center">{{item.price}}元</div>
                <div class="center-start">售价{{item.Discount}}元</div>
            </div>
        </div>
        <div class="buy-detail">
            <div class="big-title start-center">充值详情</div>
            <div class="per-detail">
                <span>充值产品</span>
                <span>中石油加油卡</span>
            </div>
            <div class="per-detail">
                <span>充值金额</span>
                <span>{{params.cardQuota}}元</span>
            </div>
            <div class="per-detail">
                <span>启用方式</span>
                <span>充值后即可使用</span>
            </div>
            <div class="per-detail">
                <span>付款方式</span>
                <span>
                    <span class="normal" :class="paytype == 'wx' ? 'wechat-active' : ''" @click="handleCheckPayType('wx')">微信</span>
                    <span class="normal" :class="paytype == 'aliwap' ? 'alipay-active' : ''" @click="handleCheckPayType('aliwap')">支付宝</span>
                </span>
            </div>
            <div class="submit center" @click="handleSubmit"><button>充值</button></div>
            <div class="agreement  row start-center"><van-checkbox v-model="agree" checked-color="#516BB4"></van-checkbox>&nbsp;&nbsp;我已阅读并同意<span @click="handleShowAgree('Entrust')">《加油卡充值协议》</span></div>
        </div>
        <Agreement :agreeShow="agreeShow" :type="type" @closeAgree="handleCloseAgreement"></Agreement>
    </div>
</template>
<script>
import { CommonPost, axiosPost } from '@/lib/http'
import Agreement from '@/components/Agreement'
export default {
    data(){
        return{
            agree: true,
            options: [],
            paytype: 'wx',
            params: {
                cardType: '',
                cardQuota: '1000.00',
                drivingLicenseID: '',
                gascardNo: '',
                gascardId: '',
                orderType: '2',
                name: '',
                mobile: '',
                address: ''
            },
            drivingLicenseID: '',
            cardType: '',
            price: '500',
            agreeShow: false,
            type: ''
        }
    },
    components:{
        Agreement
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        },
        handleCheckType(item){
            this.params.cardQuota = item.price;
            this.price = item.price;
        },
        handleCheckPayType(obj){
            this.paytype = obj; 
        },
        // 价格数据
        handlePrice(){
            CommonPost('/gasCard/getGascardPrice').then(res =>{
                var options = [];
                for(let i in res.data.data){
                    let item = '{"price":"'+ i +'","Discount":"'+ (res.data.data)[i] +'"}'
                    options.push(JSON.parse(item));
                }
                this.options = options;
                (this.options).forEach((item,index) =>{
                    item.id = index;
                })
            }).catch(res =>{
              
            })
        },
        // 生成油卡订单
        handleGeneratingOrders(){
            
            CommonPost('/gasCard/newGascardOrder',this.params).then(res =>{
              
                let objs = {
                    orderid: res.data.data.parentNo,
                    channel: this.paytype
                };
                if(res.data.data.parentNo != ''){
                    this.handleInitiatePayment(objs);
                }
            }).catch(res =>{
               
            })
        },
        // 发起支付
        handleInitiatePayment(obj){
            CommonPost('/gasCardPay/xhPay',obj).then(res =>{
               
                let ua = navigator.userAgent.toLowerCase();
                if(ua.match(/MicroMessenger/i)=="micromessenger") {
                    // 微信浏览器中打开
                    window.location.href = res.data.data.url
                }else{
                    // 非微信中打开
                    if(this.paytype == 'wx'){
                        // 此时无法在非微信中调用微信支付
                        // console.log('非微信中发起微信支付');
                        this.$router.push({
                            path: '/middle',
                            query:{
                                qrcode: res.data.data.codeUrl
                            }
                        })
                    }else{
                        // console.log('非微信中发起支付宝支付',res.data.data.url);
                        window.location.href = res.data.data.url 
                    }
                }
            }).then(res =>{
                // console.log('支付失败',res);
            })
        },
        // 立即充值
        handleSubmit(){
            if(!this.agree){
                this.$toast('请先阅读协议');
            }else{
            //    充值步骤
            // 1.下单
            // 2.发起支付
            // 3.调用充值接口
               this.handleGeneratingOrders();
            }
        },
        handleShowAgree(obj){
            this.agreeShow = true;
            this.type = obj;
        },
        handleCloseAgreement(){
            this.agreeShow = false;
        }
    },
    created(){
        this.params.gascardNo = this.$route.query.gascardNo;
        this.params.gascardId = this.$route.query.gascardId;
        this.params.drivingLicenseID = this.$route.query.drivingLicenseID;
        this.params.cardType = this.$route.query.cardType;
        this.handlePrice();
    }
}
</script>
<style lang="less" scoped>
#page-rechargecenter{
    width: 100vw;
    padding-top: 86px;
    height: calc(100vh - 86px);
    background:rgba(247,247,247,1);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    header{
        width: 100%;
        height: 86px;
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        background: rgba(60, 60, 60, 0.9);
        .top{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 0px 20px;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            line-height: 86px;
            >span:nth-child(1),>span:nth-child(3){
                width: 15%;
                font-size: 30px;
                color: #ffffff;
            }
            >span:nth-child(2){
                width: 70%;
                height: 100%;
                font-size: 30px;
                color: #fff;
                >span{
                    width: 60%;
                    height: 80%;
                    background:rgba(216,216,216,1);
                    border-radius: 16px;
                    box-shadow: 0px 0px 1px 1px rgba(151,151,151,1);
                    >span{
                        width: 50%;
                        height: 100%;
                        transition: 0.5s;
                    }
                    .active{
                        background:rgba(79,79,79,1);
                        border-radius: 16px;
                        // box-shadow: 0px 0px 1px 1px rgba(151,151,151,1);
                    }
                }
            }
        }
    }
    .big-title{
        width: 90%;
        height: 80px;
        margin: auto;
        font-size: 40px;
        font-weight: 700;
    }
    .price-list{
        width: 90%;
        height: auto;
        margin: auto;
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .normal{
            width: 47%;
            height: 200px;
            background: gba(80, 106, 178, 1);
            margin-top: 5.4vw;
            background:rgba(255,255,255,1);
            border-radius: 12px;
            box-shadow: 0px 0px 1px 1px rgba(82,108,180,1);
            >div:nth-child(1){
                width: 100%;
                height: 60%;
                font-size: 32px;
                color: #516BB4;
            }
            >div:nth-child(2){
                width: 100%;
                height: 40%;
                font-size: 26px;
            }
        }
        .active{
            background: #516BB4;
            >div:nth-child(1),>div:nth-child(2){
                color: #f2f2f2;
            }
        }
    }
    .buy-detail{
        width: 100%;
        height: auto;
        margin-top: 50px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 8px 2px rgba(216,216,216,0.5);
        border-radius:16px 16px 0px 0px;
        border:1px solid rgba(255,255,255,1);
        box-sizing: border-box;
        .big-title{
            width: 90%;
            height: 100px;
            margin: auto;
            font-size: 36px;
            color: #000;
            font-weight: 700;
        }
        .per-detail{
            width: 90%;
            height: 80px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            span:nth-child(1){
                font-size: 32px;
                color: #888888;
            }
            span:nth-child(2){
                font-size: 32px;
                color: #000000;
                .normal{
                    color: #000000;
                    width: 120px;
                    height: 60px;
                    display: inline-block;
                    text-align: center;
                    line-height: 60px;
                    border-radius: 15px;
                }
                .wechat-active{
                    background: #00c250;
                    color: #fff;
                }
                .alipay-active{
                   background: #00AAEE;
                   color: #fff; 
                }
            }
        }
        .submit{
            width: 92%;
            height: 100px;
            margin: 40px auto;
            button{
                width: 100%;
                height: 100%;
                border: none;
                border-radius: 50px;
                background: #516BB4;
                color: #fff;
                font-size: 38px;
            }
        }
        .agreement{
            width: 90%;
            height: auto;
            margin: auto;
            font-size: 26px;
            color: #999999;
            padding-bottom: 20px;
            span{
                color: #D04B4B;
            }
        }
        .desc{
            width: 92%;
            height: auto;
            margin: 40px auto; 
            color: #999999;
            font-size: 26px;
            line-height: 36px;
            text-align: justify;
        }
    }
}
</style>

<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-09 18:02:44
 * @LastEditTime: 2019-08-20 18:44:19
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
                <span class="end-center"><van-icon name="friends-o" color="#fff" size="28px"/></span>
            </div>
        </header>
        <div class="big-title start-end">选择充值金额</div>
        <div class="price-list">

            <div v-for="(item,index) in options" :key="index" class="normal column" :class="type == index ? 'active' : ''" @click="handleCheckType(item)">
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
                <span>{{params.itemPrice}}元</span>
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
            <div class="agreement start-center"><van-checkbox v-model="agree" checked-color="#516BB4">我已阅读并同意<span>《加油卡充值协议》</span></van-checkbox></div>
            <div class="desc">
                <p>使用说明</p>
                <p>
                    1、	本服务为油卡代充服务，不提供充值发票，敬请谅解； <br/>
                    2、	本服务仅支持本平台新发卡，不支持其他渠道办理的加油卡； <br/>
                    3、	请仔细核对加油卡卡号，若因用户自身原因导致的充值账号错误等情况，充值资金不予退还； <br/>
                    4、	本充值暂无法使用XXXXX优惠券/积分卡，敬请谅解； <br/>
                    5、	充值成功后，预计24-48小时内到账，若48小时仍未到账，请及时拨打合作方客服电话XXXXXXX； <br/>
                    6、 如充值失败，退款将于2-7个工作日退还到原支付账户； <br/>
                    7、	充实成功后，需要到中石油、中石化等对应油企站点圈存，圈存成功后，您可以持卡消费； <br/>
                    8、	挂失卡、过期卡、损坏卡、超限卡等卡状态异常等加油卡无法充值； <br/>
                    9、	中石化每日晚上22:50至次日凌晨00:50是网站系统结算时间，在此时间段内不可充值，敬请谅解。
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import { CommonPost, axiosPost } from '@/lib/http'
export default {
    data(){
        return{
            type: '0',
            agree: true,
            options: [
                {
                    price: 500,
                    Discount: 485,
                    id: 0
                },
                {
                    price: 1000,
                    Discount: 970,
                    id: 1
                },
                {
                    price: 2000,
                    Discount: 1940,
                    id: 2
                },
                {
                    price: 5000,
                    Discount: 4850,
                    id: 3
                }
            ],
            paytype: 'wx',
            params: {
                itemPrice: '485',
                ext1: '',
                type: '2',
                amt: '1',
                gascardId: '',
            },
            drivingLicenseID: '',
            cardType: '',
            price: '500',
        }
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        },
        handleCheckType(item){
            this.type = item.id;
            this.params.itemPrice = item.Discount;
            this.price = item.price;
        },
        handleCheckPayType(obj){
            this.paytype = obj; 
        },
        // 价格数据
        handlePrice(){
            CommonPost('/gasCard/getGascardPrice').then(res =>{
                console.log('价格请求成功',res);
            }).catch(res =>{
                console.log('价格请求失败',res);
            })
        },
        // 生成油卡订单
        handleGeneratingOrders(){
            let params = {
                cardType: this.cardType,
                cardQuota: this.price,
                drivingLicenseID: this.drivingLicenseID,
                gascardNo: this.params.gascardId,
                orderType: '1',
            };
            CommonPost('/gasCard/newGascardOrder',params).then(res =>{
                console.log('下单成功',res);
                let objs = {
                    orderid: res.data.data.parentNo,
                    channel: this.paytype
                };
               if(res.data.data.parentNo != ''){
                   this.handleInitiatePayment(objs);
               }
            }).catch(res =>{
                console.log('下单失败',res);
            })
        },
        // 发起支付
        handleInitiatePayment(obj){
            CommonPost('/gasCardPay/xhPay',obj).then(res =>{
                console.log('支付成功',res);
                let ua = navigator.userAgent.toLowerCase();
                if(ua.match(/MicroMessenger/i)=="micromessenger") {
                    // 微信浏览器中打开
                    window.location.href = res.data.data.url
                    console.log('微信');
                    
                }else{
                    // 非微信中打开
                    if(this.paytype == 'wx'){
                        // 此时无法在非微信中调用微信支付
                        console.log('非微信中发起微信支付');
                        this.$router.push({
                            path: '/middle',
                            query:{
                                qrcode: res.data.data.codeUrl
                            }
                        })
                    }else{
                        console.log('非微信中发起支付宝支付',res.data.data.url);
                        window.location.href = res.data.data.url 
                    }
                }
            }).then(res =>{
                console.log('支付失败',res);
            })
        },
        // 立即充值
        handleSubmit(){
            if(!this.agree){
                this.$toast('请先阅读协议');
            }else{
            //    充值步骤
            // 1.下单
            this.handleGeneratingOrders();
            // 2.发起支付
            // 3.调用充值接口
               
            }
        },
        // 选址充值方式
    },
    created(){
        this.params.gascardId = this.$route.query.uid;
        this.drivingLicenseID = this.$route.query.drivingLicenseID;
        this.cardType = this.$route.query.cardType;
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

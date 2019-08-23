<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-10 11:24:45
 * @LastEditTime: 2019-08-23 11:27:46
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="page-activation">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="end-center"></span>
            </div>
        </header>
        <div class="per-list shiyou">
            <div class="top">
                <span>油卡类型</span>
                <span>中石油</span>
            </div>
            <div class="middle center">
                ******************
            </div>
            <div class="bottom center">
                待激活
            </div>
        </div>
        <div class="buied-detail">
            <div class="big-title start-center">已购油卡详情</div>
            <div class="per-detail">
                <div>选购产品</div>
                <div class="shiyou center">中石油</div>
            </div>
            <div class="per-detail">
                <div>购买额度</div>
                <div class="price center" :class="params.cardQuota == item.price ? 'price-check' : ''" v-for="(item,index) in options" :key="index" @click="handleCheckPrice(item.price)">{{item.price}}</div>
            </div>
            <div class="per-detail">
                <div>启用方式</div>
                <div class="mode">领卡激活后圈存使用</div>
            </div>
            <div class="per-detail">
                <span>付款方式</span>
                <span>
                    <span class="normal" :class="paytype == 'wx' ? 'wechat-active' : ''" @click="handleCheckPayType('wx')">微信</span>
                    <span class="normal" :class="paytype == 'aliwap' ? 'alipay-active' : ''" @click="handleCheckPayType('aliwap')">支付宝</span>
                </span>
            </div>
            <div class="activation center"><input type="text" v-model="params.gascardNo" placeholder="请输入16位油卡号来激活油卡"/></div>
            <!-- <div class="activation center"><input type="text" v-model="params.ext1" placeholder="请输入您的手机号"/></div> -->
            <div class="submit center" @click="handleAvation"><button>激活油卡</button></div>
        </div>
    </div>
</template>
<script>
import { CommonPost } from '@/lib/http'
export default {
    data(){
        return{
            params: {
                cardType: '',
                cardQuota: '300.00',
                drivingLicenseID: '',
                gascardNo: '',
                gascardId: '',
                orderType: '1',
                name: '',
                mobile: '',
                address: ''
            },
            options: [],
            paytype: 'wx'
        }
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
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
                console.log('价格请求失败',res);
            })
        },
        // 用户激活时选中价格
        handleCheckPrice(obj){
            console.log('当前价格',obj);
            this.params.cardQuota = obj;
        },
        // 选择付款方式
        handleCheckPayType(obj){
            this.paytype = obj; 
        },
        // 激活
        handleAvation(){
            if(this.params.gascardNo == ''){
                this.$toast('请输入油卡号');
            }
            else{
                CommonPost('/gasCard/newGascardOrder',this.params).then(res =>{
                    console.log('激活成功',res);
                    let objs = {
                        orderid: res.data.data.parentNo,
                        channel: this.paytype
                    };
                    if(res.data.data.parentNo != ''){
                        this.handleInitiatePayment(objs);
                    }
                }).catch(res =>{
                    this.$toast(res.data.message);
                })
            }
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
    },
    created(){
        // this.params.gascardNo = this.$route.query.gascardId;
        this.params.cardType = this.$route.query.cardType;
        this.params.drivingLicenseID = this.$route.query.drivingLicenseID;
        this.params.gascardId = this.$route.query.gascardId;
        this
        this.handlePrice();

    }
}
</script>
<style lang="less" scoped>
#page-activation{
    width: 100vw;
    padding-top: 86px;
    height: 100vh;
    background:#F5F5F5;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
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
            span{
                font-size: 30px;
                color: #ffffff;
            }
        }
    }
    .per-list{
        width: 92%;
        height: 340px;
        border-radius: 40px;
        margin: 40px auto;
        .top{
            width: 90%;
            height: 30%;
            margin: auto;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            align-items: center;
            font-size: 28px;
            color: #fff;
        }
        .middle{
            width: 90%;
            height: 40%;
            margin: auto;
            font-size: 40px;
            color: #fff;
            letter-spacing: 12px;
            box-sizing: border-box;
            padding: 0px 20px;
        }
        .bottom{
            width: 90%;
            height: 30%;
            margin: auto;
            font-size: 28px;
            color: #fff;
            span{
                width: 128px;
                height: 64px;
                border-radius: 10px;
                box-shadow: 0px 0px 1px 1px #fff;
                font-size: 36px;
            }
        }
    }
    .shihua{
        background:rgba(225,135,55,1);
    }
    .shiyou{
        background:rgba(190,2,2,1);
    }
    .buied-detail{
        width: 100vw;
        height: calc(100vh - 506px);
        box-shadow:0px 0px 8px 2px rgba(216,216,216,0.5);
        border-radius:16px 16px 0px 0px;
        // border:1px solid rgba(255,255,255,1);
        background: #fff;
        .big-title{
            width: 92%;
            height: 100px;
            margin: auto;
            border-bottom: solid 1px #EFEFEF;
            font-size: 36px;
            color: #000000;
            font-weight: 700;
        }
        .per-detail{
            width: 92%;
            height: 100px;
            margin: auto;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            align-items: center;
            >span:nth-child(1){
                font-size: 32px;
                color: #888888;
            }
            .shiyou{
                width: 138px;
                height: 68px;
                background:rgba(204,55,55,1);
                border-radius: 12px;
                border:1px solid rgba(216,101,101,1);
                color: #fff;
            }
            .price{
                width: 140px;
                height: 62px;
                
                border-radius: 12px;
                font-size: 28px;
                color: #000;
            }
            .mode{
                color: #000;
                font-size: 32px;
            }
            .price-check{
                background:linear-gradient(180deg,rgba(255,176,9,1) 0%,rgba(245,205,60,1) 100%);
            }
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
        .activation{
            width: 92%;
            height: 100px;
            margin: 20px auto;
            input{
                width: 100%;
                height: 100%;
                border-top: none;
                border-left: none;
                border-right: none;
                border-bottom: solid 1px #EFEFEF;
                text-align: center;
                letter-spacing: 8px;
                font-size: 28px;
            }
            input::-webkit-input-placeholder{
                padding-top: 8px;
            }
        }
        .submit{
            width: 92%;
            height: 100px;
            margin: 20px auto;
            button{
                width: 100%;
                height: 100%;
                border-radius: 50px;
                color: #fff;
                font-size: 38px;
                border: none;
                background: rgba(146,164,216,1);
            }
        }
    }
}
</style>

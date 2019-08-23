<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-08 14:18:18
 * @LastEditTime: 2019-08-23 15:37:00
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="page-collar">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="end-center"></span>
            </div>
        </header>
        <div class="example">
            <div class="top">
                <span>油卡类型</span>
                <span>中石油</span>
            </div>
            <div class="middle center">***************</div>
            <div class="bottom center">示例油卡</div>
        </div>
        <div class="buy-detail">
            <div class="title start-center">选购详情</div>
            <div class="per-detail">
                <div class="start-center">选购产品</div>
                <div class="end-center">
                    <div class="center" :class="params.cardType == '0' ? 'product-active' : 'product-normal'" @click="handleCheckProduct('0')">中石油折扣卡</div>
                    <div class="center" :class="params.cardType == '1' ? 'product-active' : 'product-normal'" @click="handleCheckProduct('1')">中石化折扣卡</div>
                </div>
            </div>
            <div class="per-detail">
                <div class="start-center">邮寄信息</div>
                <div class="price-active end-center" @click="addressShow = true">{{addressTitle}}</div>
            </div>
            <div class="per-detail">
                <div class="start-center">配送方式</div>
                <div class="end-center">
                    <div class="center" :class="checked == '1000' ? 'price-active' : 'price-normal'" @click="handleCheckPrice('1000')">快递费15元</div>
                </div>
            </div>
            
            
            <div class="per-detail">
                <div class="start-center">支付方式</div>
                <div class="end-center">
                    <div class="center pay-normal" :class="paytype == 'wechat' ? 'wechat-pay' : ''" @click="handleCheckPayType('wechat')">微信</div>
                    <div class="center pay-normal" :class="paytype == 'alipay' ? 'ali-pay' : ''" @click="handleCheckPayType('alipay')">支付宝</div>
                </div>
            </div>
            <div class="per-detail">
                <div class="start-center">使用说明</div>
                <div class="price-active end-center" @click="desc = true">详细说明</div>
            </div>
            <div class="tips">备注：本服务为第三方提供的服务，此加油卡仅支持在本平台充值，持卡加油后，不提供消费发票，请谨慎办理。</div>
            <div class="submit center" @click="handleSubmit"><button>立即领卡</button></div>
        </div>
        <transition name="van-fade">
            <div class="desc" v-show="desc">
                加油卡到货后，用户请在“我的油卡”中
                激活，激活成功即可充值使用，充值完成后
                请至中国石油/中国石化的加油网点进行圈存
                圈存成功后，即可使用
                <div class="close center" @click="desc = false">关闭</div>
            </div>
        </transition>
        <div class="address-dialog" v-show="addressShow">
            <header>
                <div class="top">
                    <span class="start-center" @click="addressShow = false"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                    <span class="end-center"></span>
                </div>
            </header>
            <div class="big-title row">
                <div class="start-end">完善信息</div>
                <div class="start-end">我们会把油卡快递到该地址</div>
            </div>
            <div class="input-list">
                <div class="per-input">
                    <div class="start-center">姓名</div>
                    <div><input type="text" v-model="params.name" placeholder="请输入收件人姓名"/></div>
                </div>
                <div class="per-input">
                    <div class="start-center">手机号</div>
                    <div><input type="text" v-model="params.mobile" placeholder="请输入收件人手机号"/></div>
                </div>
                <div class="per-input">
                    <div class="start-center">具体地址</div>
                    <div></div>
                </div>
            </div>
            <div class="address center">
                <textarea cols="30" rows="10" v-model="params.address" placeholder="请输入收件具体地址"></textarea>
            </div>
            <div class="submit center" @click="handleAddress"><button>确定</button></div>
           
        </div>
    </div>
</template>
<script>
import { CommonPost } from '@/lib/http'
export default {
    data(){
        return{
            // shihua: false,
            // shiyou: true,
            checked: '1000',
            paytype: 'wechat',
            // id: '',
            parentNo: '',
            desc: false,
            params: {
                cardType: '0',
                cardQuota: '15',
                drivingLicenseID: '',
                gascardNo: '',
                orderType: '0',
                name: '',
                mobile: '',
                address: '',
            },
            addressShow: false,
            addressTitle: '填写地址'
        }
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        },
        // 选择产品
        handleCheckProduct(item){
            this.params.cardType = item
        },
        // 选择充值金额
        handleCheckPrice(item){
            this.checked = item;
        },
        // 选择支付方式
        handleCheckPayType(obj){
            this.paytype = obj;
        },
         // 提交地址信息
        handleAddress(){
            if(this.params.name == ''){
                this.$toast('请填写姓名');
            }
            else if(!(/^1[3456789]\d{9}$/.test(this.params.mobile))){
                this.$toast('请填写正确的手机号');
            }
            else if(this.params.address == ''){
                this.$toast('请填写具体地址');
            }else{
               this.addressShow = false;
               this.addressTitle = '收货地址已填写';
            }
        },
        // 立即领卡,下单后发起付款
        handleSubmit(){
            if(this.params.name == '' || this.params.mobile == '' || this.params.address == ''){
                this.$toast('请填写地址');
            }else{
                CommonPost('/gasCard/newGascardOrder',this.params).then(res=>{
                    console.log('下单成功',res);
                    this.parentNo = res.data.data.parentNo;
                    let params = '';
                    if(this.paytype == 'wechat'){
                        params = {
                            orderid: this.parentNo,
                            channel: 'wx'
                        }
                    }else{
                        params = {
                            orderid: this.parentNo,
                            channel: 'aliwap'
                        }
                    }
                    CommonPost('/gasCardPay/xhPay',params).then(res =>{
                        console.log('支付成功',res);
                        let ua = navigator.userAgent.toLowerCase();
                        if(ua.match(/MicroMessenger/i)=="micromessenger") {
                            // 微信浏览器中打开
                            window.location.href = res.data.data.url
                            
                        }else{
                            // 非微信中打开
                            if(this.paytype == 'wechat'){
                                // 此时无法在非微信中调用微信支付
                                this.$router.push({
                                    path: '/middle',
                                    query:{
                                        qrcode: res.data.data.codeUrl
                                    }
                                })
                            }else{
                            window.location.href = res.data.data.url 
                            }
                        }
                        // this.$router.push({
                        //     path: '/Address',
                        //     query: {
                        //         parentNo: this.parentNo
                        //     }
                        // })
                    }).catch(res =>{
                        console.log('支付失败',res);
                    })
                }).catch(res =>{
                    console.log('下单失败',res);
                    this.$toast(res.data.message);
                })
            }
            
        },
    },
    created(){
        this.params.drivingLicenseID = this.$route.query.id;
    }
}
</script>
<style lang="less" scoped>
#page-collar{
    width: 100vw;
    padding: 86px 0px;
    height: 100vh;
    box-sizing: border-box;
    background: rgba(248,248,248,1);
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
            span{
                font-size: 30px;
                color: #ffffff;
            }
        }
    }
    .example{
        width: 90vw;
        height: 25.5vh;
        background: rgba(190, 2, 2, 1);
        color: #fff;
        margin: 50px auto;
        opacity:0.62;
        border-radius: 40px;
        box-sizing: border-box;
        .top{
            width: 90%;
            height: 30%;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            align-items: center;
            margin: auto;
            font-size: 28px;
            letter-spacing: 2px;
        }
        .middle{
            width: 95%;
            height: 40%;
            margin: auto;
            font-size: 40px;
            text-align: justify;
            letter-spacing: 20px;
        }
        .bottom{
            width: 95%;
            height: 30%;
            margin: auto;
            font-size: 40px;
            font-size: 34px;
            letter-spacing: 5px;
        }
    }
    .buy-detail{
        width: 100%;
        height: calc(74.5vh - 186px);
        background: #ffffff;
        border-radius: 16px 16px 0px 0px;
        .title{
            width: 92%;
            height: 100px;
            border-bottom: solid 1px rgba(239, 239, 239, 1);
            margin: auto;
            box-sizing: border-box;
            padding-left: 20px;
            color: rgba(0, 0, 0, 1);
            font-size: 36px;
            font-weight: 700;
        }
        .per-detail{
            width: 86%;
            height: 120px;
            border-bottom: solid 1px rgba(239, 239, 239, 1);
            margin: auto;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            >div:nth-child(1){
                width: 25%;
                height: 100%;
                color: #888888;
                font-size: 32px;
            }
            >div:nth-child(2){
                width: 75%;
                height: 100%;
                color: #000000;
                font-size: 32px;
                >div{
                    width: auto;
                    height: 68px;
                    margin-right: 10px;
                    border-radius: 12px;
                }
                .product-normal{
                    background: #CCC;
                    color: #ffffff;
                    font-size: 28px;
                    padding: 0px 10px;
                }
                .product-active{
                    background:rgba(204,55,55,1);
                    color: #ffffff;
                    font-size: 28px;
                    padding: 0px 10px;
                }
                .price-normal{
                    border-radius: 6px;
                    box-shadow: 0px 0px 1px  1px  #FEC808;
                    font-size: 28px;
                    color: #FEB30E;
                    padding: 0px 10px;
                }
                .price-active{
                    background:linear-gradient(180deg,rgba(255,176,9,1) 0%,rgba(245,205,60,1) 100%);
                    color: #000000;
                    font-size: 28px;
                    padding: 0px 10px;
                }
                .pay-normal{
                    box-shadow: 0px 0px 1px 1px #f2f2f2;
                    width: 120px;
                }
                .wechat-pay{
                    background: #00c250;
                    color: #fff;
                }
                .ali-pay{
                    background: #00AAEE;
                    color: #fff;
                }
            }
        }
        .tips{
            width: 86%;
            height: auto;
            padding: 10px 0px;
            margin: auto;
            font-size: 26px;
            color: #be0202;
        }
        .submit{
            width: 92%;
            height: 100px;
            margin: 20px auto auto auto;
            padding-bottom: 20px;
            button{
                width: 100%;
                height: 100%;
                background: #92a4d8;
                color: #ffffff;
                font-size: 38px;
                border: none;
                border-radius: 50px;
            }
        }
    }
    .desc{
        width: 90%;
        height: auto;
        background: rgba(255,176,9,1);
        position: fixed;
        bottom: 30vh;
        left: 5vw;
        box-sizing: border-box;
        padding: 50px 50px 0px 50px;
        font-size: 28px;
        text-align: justify;
        line-height: 50px;
        border-radius: 10px;
        .close{
            width: 100%;
            height: 80px;
            border-top: solid 1px #ccc;
            margin-top: 30px;
        }
    }
    .address-dialog{
        position: fixed;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        z-index: 100;
        background: #fff;
        box-sizing: border-box;
        padding-top: 86px;
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
        .big-title{
            width: 90%;
            height: 100px;
            margin: 20px auto auto auto;
            >div:nth-child(1){
                font-size: 40px;
                font-weight: 700;
            }
            >div:nth-child(2){
                margin-left: 20px;
                font-size: 26px;
                color: #666666;
            }
        }
        .input-list{
            width: 90%;
            height: auto;
            margin: 100px auto auto auto;
            .per-input{
                width: 100%;
                height: 120px;
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                -webkit-justify-content: space-between;
                border-bottom: solid 1px #E3E3E3;
                >div:nth-child(1){
                    width: 25%;
                    height: 100%;
                    font-size: 32px;
                    color: #666666;
                }
                >div:nth-child(2){
                    width: 75%;
                    height: 100%;
                    font-size: 32px;
                    color: #666666;
                    input{
                        width: 100%;
                        height: 85%;
                        text-align: right;
                        border: none;
                        background: transparent;
                    }
                    input::-webkit-input-placeholder{
                        padding-top: 10px;
                        font-size: 28px;
                    }
                }
            }
        }
        .address{
            width: 90%;
            height: 254px;
            margin: 50px auto;
            background: #FCFCFC;
            color: #333;
            textarea{
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                padding: 15px;
                font-size: 28px;
                background: transparent;
                border-radius: 16px;
            }
        }
        .submit{
            width: 90%;
            height: 100px;
            margin: 20px auto auto auto;
            button{
                width: 100%;
                height: 100%;
                color: #fff;
                font-size: 38px;
                border: none;
                border-radius: 50px;
                background: rgba(146,164,216,1);
            }
        }
    }
}
</style>

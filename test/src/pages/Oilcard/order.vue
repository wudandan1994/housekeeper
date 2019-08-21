<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-08 17:33:20
 * @LastEditTime: 2019-08-21 18:41:19
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="page-youorder">
         <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="end-center"><van-icon name="friends-o" color="#fff" size="28px"/></span>
            </div>
        </header>
        <div class="order-detail">
            <div class="big-title start-center">支付详情</div>
            <div class="per-detail">
                <div class="start-center">已选产品</div>
                <div class="end-center">中石化石油卡</div>
            </div>
            <div class="per-detail">
                <div class="start-center">已选额度</div>
                <div class="end-center">1000元</div>
            </div>
            <div class="per-detail">
                <div class="start-center">支付方式</div>
                <div class="end-center">
                    <div class="wechat-normal center" :class="paytype == 'wechat' ? 'wechat' : 'wechat-normal'" @click="handleCheckPayType('wechat')">微信支付</div>
                    <div class="alipay-normal center" :class="paytype == 'alipay' ? 'alipay' : 'alipay-normal'" @click="handleCheckPayType('alipay')">支付宝支付</div>
                </div>
            </div>
            <div class="per-detail">
                <div class="start-center">启用方式</div>
                <div class="end-center">领卡激活后圈存使用</div>
            </div>
        </div>
        <div class="order-price">
            <div class="big-title start-center">支付金额</div>
            <div class="price start-center">¥985</div>
            <div class="desc start-center">实际支付金额包含10元卡费和5元快递费</div>
        </div>
        <div class="submit center"><button>立即支付</button></div>
        <div class="description">
            首次领卡充值970元即可获得价值1000元的油卡另需付10元卡本费+5元快递费油卡支付成功后，我公司会安排将实物油卡快递至您添加的地址
        </div>
        <div class="pay-success">
            <router-link tag="div" to="/Address" class="logo"></router-link>
            <div class="success center">支付成功</div>
            <div class="router center">3s后自动跳到下一页面</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            paytype: 'wechat',
        }
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        },
        handleCheckPayType(item){
            this.paytype = item;
        }
    }
}
</script>
<style lang="less" scoped>
#page-youorder{
    width: 100vw;
    padding-top: 86px;
    height: calc(100vh - 86px);
    background: #D8D8D8;
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
            span{
                font-size: 30px;
                color: #ffffff;
            }
        }
    }
    .order-detail{
        width: 92%;
        height: auto;
        margin: 20px auto auto auto;
        background: #ffffff;
        border-radius: 16px;
        .big-title{
            width: 100%;
            height: 100px;
            border-bottom: solid 1px #EFEFEF;
            box-sizing: border-box;
            padding-left: 6%;
            font-size: 38px;
            color: #000000;
            font-weight: 700;
        }
        .per-detail{
            width: 86%;
            height: 100px;
            display: flex;
            margin: auto;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            border-bottom: solid 1px #EFEFEF;
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
                .wechat-normal{
                    padding: 0px 20px;
                    height: 60%;
                    box-shadow: 0px 0px 1px 1px #25A641;
                    margin-right: 20px;
                    border-radius: 50px;
                    font-size: 28px;
                    color: #25A641;
                }
                .alipay-normal{
                    padding: 0px 20px;
                    height: 60%;
                    box-shadow: 0px 0px 1px 1px #1441BC;
                    border-radius: 50px;
                    font-size: 28px;
                    color: #1441BC;
                }
                .wechat{
                    background: #25A641;
                    color: #ffffff;
                }
                .alipay{
                   background: #1441BC;
                   color: #ffffff; 
                }
            }
        }
    }
    .order-price{
        width: 92%;
        height: auto;
        margin: 20px auto auto auto;
        background: #ffffff;
        border-radius: 16px;  
        .big-title{
            width: 100%;
            height: 100px;
            border-bottom: solid 1px #EFEFEF;
            box-sizing: border-box;
            padding-left: 6%;
            font-size: 38px;
            color: #000000;
            font-weight: 700;
        }
        .price{
            width: 100%;
            height: 100px;
            box-sizing: border-box;
            padding-left: 6%;
            font-size: 40px;
            color: #000000;
            font-weight: 700;
        }
        .desc{
            width: 100%;
            height: auto;
            box-sizing: border-box;
            padding-left: 6%;
            padding-bottom: 20px;
            font-size: 28px;
            color: #c7c7c7;
        }
    }
    .submit{
        width: 92%;
        height: 100px;
        margin: 40px auto auto auto;
        button{
            width: 100%;
            height: 100%;
            background: #92A4D8;
            color: #fff;
            font-size: 38px;
            border: none;
            border-radius: 50px;
        }
    }
    .description{
        width: 92%;
        height: auto;
        margin: 50px auto auto auto;
        font-size: 26px;
        line-height: 40px;
        text-align: justify;
    }
    .pay-success{
        width: 100vw;
        height: calc(100vh - 86px);
        position: fixed;
        z-index: 2;
        top: 86px;
        left: 0px;
        background: #fff;
        .logo{
            width: 176px;
            height: 176px;
            background: #25A641;
            border-radius: 50%;
            margin: 20vh auto auto auto;
        }
        .success{
            width: 100%;
            height: 120px;
            font-size: 38px;
            font-weight: 700;
            color: #25A641;
            line-height: 120px;
        }
        .router{
            width: 100%;
            height: 100px;
            margin: calc(80vh - 482px) auto auto auto;
        }
    }
}
</style>


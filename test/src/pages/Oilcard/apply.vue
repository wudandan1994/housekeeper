<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-05 15:42:48
 * @LastEditTime: 2019-08-23 15:29:00
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="page-apply">
        <header>
            <div class="back start-center"><van-icon name="arrow-left" color="#ffffff" size="24px" @click="handleBack"/></div>
            <div class="slogan">
                <span>中石油</span>
                <span>中石化</span>
            </div>
            <div class="discount center">钻石VIP96折</div>
            <router-link tag="div" :to="{path: '/detailMessage',query:{type: '1'}}" class="apply center">立即办理</router-link>
            <div class="selling center"> 充值有特惠 全国畅心油</div>
            <div class="desc">
                <span>给力加油服务</span>
                <span>银行联合服务</span>
                <span>全国随心畅油</span>
            </div>
        </header>
        <div class="list">
            <div class="per-list" @click="handleMyOilCard">
                <span class="start-center">我的油卡</span>
                <span class="end-center"></span>
                <span class="end-center"><van-icon name="arrow"/></span>
            </div>
            <router-link tag="div" to="/RechargeAllList" class="per-list">
                <span class="start-center">充值详情</span>
                <span class="end-center"></span>
                <span class="end-center"><van-icon name="arrow"/></span>
            </router-link>
            <div class="submit" @click="handleSubmit"><button>充值</button></div>
            <div class="checkbox row start-center"><van-checkbox v-model="Agreement" color="#979797" icon-size="18px" checked-color="#4b66af"></van-checkbox>&nbsp;&nbsp;我已阅读并同意<span style="color: #D04B4B" @click="handleShowAgree('agree')">《钱夹宝加油服务协议》</span><span style="color: #D04B4B" @click="handleShowAgree('Entrust')">《授权委托书》</span></div>
        </div>
        <Agreement :agreeShow="agreeShow" :type="type" @closeAgree="handleCloseAgreement"></Agreement>
    </div>    
</template>
<script>
import Agreement from '@/components/Agreement' 
export default {
    data(){
        return{
            Agreement: true,
            agreeShow: false,
            type: '',
        }
    },
    components: {
        Agreement
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        },
        handleSubmit(){
            if(!this.Agreement){
                this.$toast('请先阅读并同意协议');
            }else{
                // 可正常提交
                this.$router.push({
                    path: '/Recharge',
                    query: {
                        type: '2'
                    }
                })
            }
        },
        // 我的油卡
        handleMyOilCard(){
            this.$router.push({
                path: '/Recharge',
                query: {
                    type: '2'
                }
            })
        },
        handleShowAgree(obj){
            this.agreeShow = true;
            this.type = obj;
        },
        handleCloseAgreement(){
            this.agreeShow = false;
        }
    }
}
</script>
<style lang="less" scoped>
    #page-apply{
        width: 100vw;
        height: 100vh;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        >header{
            width: 100vw;
            height: 440px;
            background: #4B66AF;
            box-shadow:0 25px 25px 15px #4B66AF;
            box-sizing: border-box;
            .back{
                width: 100%;
                height: 80px;
                box-sizing: border-box;
                padding-left: 10px;
            }
            .slogan{
                width: 42%;
                height: 100px;
                margin: 0px auto auto auto;
                color: #fff;
                font-size: 48px;
                font-weight: 700;
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                -webkit-justify-content: space-between;
                align-items: center;
            }
            .discount{
                font-size: 28px;
                color: #fff;
            }
            .apply{
                background-color: #ffffff;
                width: 30%;
                height: 60px;
                margin: 46px auto auto auto;
                transition: opacity 0.5s;
                color: #4b66af;
                font-size: 28px;
                border-radius: 12px;
                letter-spacing: 5px;
            }
            .selling{
                height: 40px;
                font-size: 28px;
                color: #3AAF25;
                margin-top: 22px;
            }
            .desc{
                width: 95%;
                height: 40px;
                margin: 48px auto 20px auto;
                color: #fff;
                font-size: 28px;
                display: flex;
                display: -webkit-flex;
                justify-content: space-around;
                -webkit-justify-content: space-around;
                align-items: center;
            }
        }
        .list{
            width: 100vw;
            height: auto;
            margin: 60px auto auto auto;
            // border: solid 1px red;
            background: #fff;
            box-sizing: border-box;
            padding-top: 100px;
            .per-list{
                width: 100%;
                height: 134px;
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                -webkit-justify-content: space-between;
                box-sizing: border-box;
                padding: 0px 50px;
                font-size: 30px;
                font-weight: 700;
                >span:nth-child(1){
                    width: 80%;
                    border-bottom: solid 1px #ccc;
                }
                >span:nth-child(2){
                    width: 15%;
                    color: #4B66AF;
                    border-bottom: solid 1px #ccc;
                }
                >span:nth-child(3){
                    width: 5%;
                    border-bottom: solid 1px #ccc;
                }
            }
            .submit{
               width: 92%;
               height: 98px; 
               margin: 40px auto;
               button{
                   width: 100%;
                   height: 100%;
                   border: none;
                   background:rgba(146,164,216,1);
                   border-radius: 50px;
                   color: #ffffff;
                   font-size: 30px;
               }
            }
            .checkbox{
                width: 92%;
                height: auto;
                margin: auto; 
                font-size: 24px;
            }
        }
        .instructions{
            width: 92%;
            height: auto;
            margin: 50px auto auto auto;
            p{
                text-align: justify;
                line-height: 35px;
                font-size: 26px;
            }
        }
    }
</style>

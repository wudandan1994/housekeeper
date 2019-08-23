<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-10 10:18:43
 * @LastEditTime: 2019-08-23 11:36:10
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="page-rechargedetail">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="end-center"></span>
            </div>
        </header>
        <div class="oil-card shiyou">
            <div class="top">
                <span>油卡类型</span>
                <span>中石油</span>
            </div>
            <div class="middle center">
                {{cardID}}
            </div>
            <div class="bottom">
                <!-- <router-link tag="span" to="/RechargeCenter" class="center">充值</router-link> -->
            </div>
        </div>
        <div class="recharge-list">
            <div class="big-title start-center">充值明细</div>
            <div class="list-container">
                <div class="per-recharge" v-for="(item,index) in list" :key="index">
                    <div>
                        <div>充值金额: {{item.cardQuota}}元</div>
                        <div>实际支付: {{item.amount}}元</div>
                    </div>
                    <div>
                        <div>油卡号:{{item.cardID}}</div>
                        <div v-if="item.cardType == '0'">中石油</div>
                        <div v-if="item.cardType == '1'">中石化</div>
                    </div>
                    <div>
                        <div v-if="item.status == '0'">处理中</div>
                        <div v-if="item.status == '1'">已充值</div>
                        <div v-if="item.status == '2'">充值失败</div>
                        <div>{{item.createddatetime}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { CommonPost } from '@/lib/http'
export default {
    data(){
        return{
            cardID: '',
            list: []
        }
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        },
        // 充值明细
        handleRechargeDetailList(){
            let params = {
                cardId: this.cardID
            }
            CommonPost('/gasCard/gascardDepositByCard',params).then(res =>{
                console.log('成功',res);
                this.list = res.data.data;
                if(res.data.data.length == '0'){
                    this.$toast('您还没有充值记录');
                }
            }).catch(res =>{
                console.log('失败',res);
                this.$toast(res.data.message);
            })
        }
    },
    created(){
        this.cardID = this.$route.query.cardID;
        this.handleRechargeDetailList();
    }    
}
</script>
<style lang="less" scoped>
#page-rechargedetail{
    width: 100vw;
    padding-top: 86px;
    height: calc(100vh - 86px);
    background: #F5F5F5;
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
    .oil-card{
        width: 92%;
        height: 340px;
        border-radius: 40px;
        margin: 20px auto;
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
            display: flex;
            display: -webkit-flex;
            justify-content: space-around;
            -webkit-justify-content: space-around;
            align-items: center;
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
    .recharge-list{
        width: 100vw;
        height: calc(100vh - 476px);
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 8px 2px rgba(216,216,216,0.5);
        border-radius:16px 16px 0px 0px;
        border:1px solid rgba(255,255,255,1);
        box-sizing: border-box;
        margin-top: 30px;
        position: relative;
        z-index: 1;
        padding-top: 100px;
        .big-title{
            width: 90%;
            height: 100px;
            border-bottom: solid 1px #EBE8E8;
            margin: auto;
            font-size: 36px;
            color: #000;
            font-weight: 700;
            position: absolute;
            z-index: 2;
            top: 0;
            left: 5%;
        }
        .list-container{
            width: 100%;
            height: 100%;
            overflow-y: scroll;
            .per-recharge{
                width: 90%;
                height: auto;
                margin: auto;
                font-size: 28px;
                color: #4F4F4F;
                border-bottom: solid 1px #f2f2f2;
                >div{
                    width: 100%;
                    height: 50px;
                    display: flex;
                    display: -webkit-flex;
                    justify-content: space-between;
                    -webkit-justify-content: space-between;
                    align-items: center;
                }
            }
        }
    }
}
</style>

<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-10 17:27:52
 * @LastEditTime: 2019-08-23 11:34:28
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="page-rechargedetail">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="center">充值详情</span>
                <span class="end-center"></span>
            </div>
        </header>
        <div class="list-container">
            <div class="per-recharge" v-for="(item,index) in list" :key="index">
                <!-- <div>{{item.createddatetime}}</div>
                <div>{{item.amount}}元</div>
                <div v-if="item.cardType == '0'">中石油</div>
                <div v-if="item.cardType == '1'">中石化</div>
                <div v-if="item.status == '0'">处理中</div>
                <div v-if="item.status == '1'">已充值</div>
                <div v-if="item.status == '2'">充值失败</div> -->
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
</template>
<script>
import { CommonPost } from '@/lib/http'
export default {
    data(){
        return{
            params: {
                page: 1,
                pageSize: 500
            },
            list: [],
        }
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        },
        handleRechargeList(){
            CommonPost('/gasCard/allGascardDeposit',this.params).then(res =>{
             
                this.list = res.data.data;
                if(res.data.data.length == '0'){
                    this.$toast('暂无充值记录');
                }
            }).catch(res =>{
              
            })
        }
    },
    created(){
        this.handleRechargeList();
    }    
}
</script>
<style lang="less" scoped>
#page-rechargedetail{
    width: 100vw;
    padding-top: 86px;
    height: calc(100vh - 86px);
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
            }
        }
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
</style>

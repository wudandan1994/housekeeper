<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-09 15:28:03
 * @LastEditTime: 2019-08-21 13:54:11
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="page-rachargelist">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="center">
                    <span class="row">
                        <span class="center" :class="type == '0' ? 'active' : ''" @click="handleCheckType('0')">中石油</span>
                        <span class="center" :class="type == '1' ? 'active' : ''" @click="handleCheckType('1')">中石化</span>
                    </span>
                </span>
                <span class="end-center"><van-icon name="friends-o" color="#fff" size="28px"/></span>
            </div>
        </header>
        <div class="list">
            <div class="per-list shiyou" v-for="(item,index) in list" :key="index" v-show="type == '0'">
                <div class="top">
                    <span>油卡类型</span>
                    <span>中石油</span>
                </div>
                <div class="middle center" v-if="item.cardID === null">
                   ******************
                </div>
                <div class="middle center" v-else>
                   {{item.cardID}}
                </div>
                <div class="bottom" v-if="item.status == '0'">
                    <span class="center" @click="handleActivation(item.id,'1',item.orderNo)">激活</span>
                </div>
                <div class="bottom" v-if="item.status == '3'">
                    <span class="center">激活中</span>
                </div>
                <div class="bottom" v-if="item.status == '1'">
                    <span to="/RechargeCenter" class="center" v-on:click.self="handleRecharge(item.cardID)">充值</span>
                    <span class="center" v-on:click.self="handleRechargeDetail(item.cardID)">明细</span>
                    <!-- <span class="center">挂失</span> -->
                </div>
                <!-- <div class="bottom" v-if="item.status == '2'">
                    <span class="center">已挂失</span>
                </div> -->
            </div>
            <div class="per-list shihua" v-for="(item,index) in list" :key="index" v-show="type == '1'">
                <div class="top">
                    <span>油卡类型</span>
                    <span>中石化</span>
                </div>
                <div class="middle center" v-if="item.cardID === null">
                   ******************
                </div>
                <div class="middle center" v-else>
                   {{item.cardID}}
                </div>
                <div class="bottom" v-if="item.status == '0'">
                    <span class="center" @click="handleActivation(item.id,'1',item.orderNo)">激活</span>
                </div>
                <div class="bottom" v-if="item.status == '3'">
                    <span class="center">激活中</span>
                </div>
                <div class="bottom" v-if="item.status == '1'">
                    <span class="center" v-on:click.self="handleRecharge(item.cardID)">充值</span>
                    <span to="RechargeDetail" class="center" v-on:click.self="handleRechargeDetail(item.cardID)">明细</span>
                    <!-- <span class="center">挂失</span> -->
                </div>
                <!-- <div class="bottom" v-if="item.status == '2'">
                    <span class="center">已挂失</span>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import { CommonPost } from '@/lib/http'
export default {
    data(){
        return{
            type: '0',
            id: '',
            list: [],
        }
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        },
        // 油卡列表
        handleOilCardList(){
            let params = {
                cardType: this.type,
                drivingLicenseID: this.id
            }
            CommonPost('/gasCard/gascardList',params).then(res =>{
                this.list = res.data.data;
            }).catch(res =>{
                this.$toast(res.data.message);
            })
        },
        // 油卡切换
        handleCheckType(item){
            this.type = item;
            this.handleOilCardList();
        },
        // 激活
        handleActivation(gascardId,type,gascardOrderNo){
            this.$router.push({
                path: '/activation',
                query: {
                    gascardId: gascardId,
                    type: type,
                    gascardOrderNo: gascardOrderNo
                }
            })
        },
        // 充值
        handleRecharge(obj){
            // console.log('油卡ID',obj);
            this.$router.push({
                path: '/RechargeCenter',
                query:{
                    uid: obj,
                    drivingLicenseID: this.id,
                    cardType: this.type
                }
            })
        },
        // 明细
        handleRechargeDetail(obj){
            this.$router.push({
                path: '/RechargeDetail',
                query: {
                    cardID: obj
                }
            })
        }
    },
    created(){
        this.id = this.$route.query.id;
        this.handleOilCardList();
    }
}
</script>
<style lang="less" scoped>
#page-rachargelist{
    width: 100vw;
    height: calc(100vh - 86px);
    padding: 86px 0px;
    background:rgba(248,248,248,1);
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
                    // box-shadow: 0px 0px 1px 1px rgba(151,151,151,1);
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
    .list{
        width: 92%;
        height: auto;
        margin: 40px auto;
        .per-list{
            width: 100%;
            height: 340px;
            border-radius: 40px;
            margin-top: 20px;
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
    }
}
</style>

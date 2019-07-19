<template>
    <div id="page-benefit">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">收益详情</div>
            <div class="right-icon center"></div>
        </header>
        <div class="detail">
            <div class="title center">订单金额</div>
            <div class="amount center">¥<span>{{detail.amount}}</span></div>
            <div class="per-list top">
                <div>刷卡人费率</div>
                <div>{{detail.swiperate}}</div>
            </div>
            <div class="per-list">
                <div>收益人费率</div>
                <div>{{detail.dividedrate}}</div>
            </div>
            <div class="per-list">
                <div>费率差</div>
                <div>{{detail.defrate}}</div>
            </div>
            <div class="per-list">
                <div>刷卡人号码</div>
                <div>{{detail.cardno}}</div>
            </div>
            <div class="per-list">
                <div>订单号</div>
                <div>{{detail.oderid}}</div>
            </div>
            <div class="per-list">
                <div>备注</div>
                <div>暂无备注</div>
            </div>
            <div class="benefit">
                <div>
                    <div class="start-center">收益金额</div>
                    <div class="start-center">计算公式: 订单金额*费率差</div>
                </div>
                <div>¥<span>{{detail.divideAmount}}</span></div>
            </div>
            <div class="slogan center">(全民分享经济模式、推广越多、收益越高)</div>
        </div>
    </div>
</template>
<script>
import { axiosPost } from '../../lib/http';
export default {
    data(){
        return{
            orderid: '',
            detail: [],
        }
    },
    methods:{
        handleReturnHome(){
            this.$router.go(-1);
        },
        // 收益详情
        handleBenefitDetail(){
            let params = {
                orderid: this.orderid
            };
            let url = "/creditCard/getDivideDetile";
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    this.detail = res.data.data.data;
                }else{
                    this.$toast('查询失败');
                }
            }).catch(res =>{
                this.$toast('查询失败');
            })
        }
    },
    created(){
        this.orderid = this.$route.query.orderid;
        this.handleBenefitDetail();
    }
}
</script>
<style lang="less" scoped>
#page-benefit{
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 86px;
    background: #F1F5F4;
    .detail{
        width: 90vw;
        height: 70vh;
        position: fixed;
        top: 15vh;
        left: 5vw;
        z-index: 2;
        box-shadow: 0px 0px 8px 2px #ccc;
        background: #fff;
        .title{
            width: 100%;
            height: 10%;
            font-size: 34px;
            font-weight: 700;
        }
        .amount{
            width: 100%;
            height: 7%;
            >span{
                font-size: 36px;
                font-weight: 700;
                color: #E37F67;
            }
        }
        .per-list{
            width: 95%;
            height: 6%;
            margin: auto;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            align-items: center;
            >div:nth-child(1){
                font-size: 28px;
                font-weight: 700;
            }
            >div:nth-child(2){
                font-size: 28px;
                color: #ccc;
            }
        }
        .top{
            margin-top: 10%;
        }
        .benefit{
            width: 95%;
            height: auto;
            margin: 50px auto;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            align-items: center;
            >div:nth-child(1){
                >div:nth-child(1){
                    border-left: solid 5px #257DD6;
                    height: 40px;
                    box-sizing: border-box;
                    font-size: 30px;
                    font-weight: 700;
                }
                >div:nth-child(2){
                    height: 30px;
                    box-sizing: border-box;
                    font-size: 26px;
                    color: #7F8180;
                    padding-left: 5px;
                }
            }
            >div:nth-child(2){
                font-weight: 700;
                font-size: 34px;
                >span{
                    color: #E37F67;
                }
            }
        }
    }
}
</style>

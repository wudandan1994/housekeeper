<template>
    <div id="integral-cash">
         <header class="header-top row">
            <div class="left-icon center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">积分提现</div>
            <div class="right-icon center"><van-icon color="white" size="20px" name="card"/></div>
        </header>
        <div class="cash-top">
            <van-tabs v-model="active">
                <van-tab title="未满7天提现金额">
                    <div class="form-integral row">
                        <div class="now-integral">
                            <div class="count center">123580.00</div>
                            <div class="title center">当前积分</div>
                            <div class="all center">
                                <div class="center">全部提现</div>
                            </div>
                        </div>
                        <div class="apply-card"></div>
                        <router-link tag="div" to="/personalCenter/incomedetail/addcard" class="more center"><i class="iconfont icon-more"></i></router-link>
                    </div>
                    <div class="desc">注:钱夹宝提现秒到账，手续费5%+1元/笔，最低提现金额3元起提。<span>5%的提现手续费将全部作为城主的收益</span></div>
                    <div class="user-input">
                        <div class="input-title"><span>提取积分</span>(1000积分等于1元)</div>
                        <div class="money-input row">
                            <div class="icon-rmb center">¥</div>
                            <div class="getnumber start-center"><input type="number" v-model="cash" placeholder="请输入提现金额"></div>
                        </div>
                    </div>
                    <div class="desc-two">
                        <p>每人当天允许提现2次秒到。超过2次的将进入人工审核状态，工作时间内1-2小时内完成审核！请合理安排提现。</p>
                        <p>审核时间：工作日 9:00 - 12:00、13:00 - 18:00</p>
                    </div>
                    <div class="Immediate-withdrawals center">立即提现</div>
                    <div class="tips">
                        <div>积分提现说明:</div>
                        <div>需1000积分起提，谢谢配合!</div>
                    </div>
                </van-tab>
                <van-tab title="超过7天提现金额">内容 2</van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active: 0,
            cash: ''
        }
    },
    methods:{
        // 返回首页
        handleReturnHome(){
            this.$router.push({
                path:'/ponserCenter/userAccountManage'
            })
        }
    }
}
</script>
<style lang="less" scoped>
    #integral-cash{
        background: #EEEFF1;
        width: 100vw;
        height: 100vh;
        padding-top: 86px;
        overflow: scroll;
        .loan .van-nav-bar {
           background: #4B66AF !important;
       }
        .cash-top{
            width: 100vw;
            height: auto;
            margin-top: 20px;
            .form-integral{
                width: 100%;
                height: 18vh;
                background: white;
                margin-top: 50px;
                .now-integral{
                    width: 30%;
                    height: 100%;
                    .count{
                        width: 90%;
                        height: 25%;
                        margin-top: 10%;
                        margin-left: auto;
                        margin-right: auto;
                        background: url('../../assets/bg1.png');
                        background-size: contain;
                        font-size: 32px;
                        font-weight: bold;
                    }
                    .title{
                        width: 90%;
                        height: 25%;
                        margin-left: auto;
                        margin-right: auto;
                        font-size: 28px;
                    }
                    .all{
                        width: 100%;
                        height: 30%;
                        font-size: 24px;
                        >div{
                            width: 60%;
                            height: 80%;
                            background: #4B66AF;
                            color: white;
                            border-radius: 15px;
                        }
                    }
                }
                .apply-card{
                    width: 60%;
                    height: 100%;
                    background: url('../../assets/bg2.png') no-repeat center center;
                }
                .more{
                    width: 5%;
                    height: 100%;
                    >i{
                        font-size: 60px;
                    }
                }
            }
            .desc{
                width: 95vw;
                height: auto;
                margin-left: auto;
                margin-right: auto;
                padding-top: 20px;
                padding-bottom: 20px;
                line-height: 50px;
                font-size: 26px;
                >span{
                    color: red;
                }
            }
            .user-input{
                width: 100vw;
                height: 200px;
                background: white;
                padding-top: 50px;
                .input-title{
                    width: 90%;
                    height: 50px;
                    margin-left: 10%;
                    color: #ccc;
                    >span{
                        color: black;
                        font-size: 35px;
                        font-weight: bold;
                        text-decoration: underline;
                    }
                }
                .money-input{
                    width: 90%;
                    height: 150px;
                    margin-left: 10%;
                    .icon-rmb{
                        width: 10%;
                        height: 100%;
                        color:black;
                        font-size: 45px;
                        font-weight: bold;
                    }
                    .getnumber{
                        width: 90%;
                        height: 100%;
                        >input{
                            width: 100%;
                            height: 100px;
                            font-size: 30px;
                            border: none;
                        }
                    }
                }
            }
            .desc-two{
                padding: 20px;
                line-height: 40px;
                font-size: 26px;
                p:nth-child(2){
                    margin-top: 30px;
                }

            }
            .Immediate-withdrawals{
                width: 90%;
                padding-top:30px;
                padding-bottom: 30px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 50px;
                background: #4B66AF;
                color: white;
                border-radius: 15px;
                letter-spacing: 10px;
                font-size: 30px;
            }
            .tips{
                width: 90%;
                height: auto;
                margin-left: auto;
                margin-right: auto;
                margin-top: 50px;
                color: #999;
                div:nth-child(1){
                    font-size: 30px;
                }
                div:nth-child(2){
                    margin-top: 20px;
                }
            }
        }
    }
</style>

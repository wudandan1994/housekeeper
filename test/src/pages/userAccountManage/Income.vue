<template>
    <div id="page-income">
        <header class="manage loan">
            <van-nav-bar title="收益明细" left-text="返回" left-arrow @click-left="handleReturnHome" @click-right="handleMore">
            </van-nav-bar>
        </header>
        <div class="top">
            <div class="all-income">总收益</div>
            <div class="integrated-services center">综合业务</div>
            <div class="balance center">20000.00</div>
            <div class="incomes row">
                <div class="today-income">
                    <div class="today center">今日收益</div>
                    <div class="today-number center">78.00</div>
                </div>

                <div class="today-income">
                    <div class="today center">今日收益</div>
                    <div class="today-number center">78.00</div>
                </div>
            </div>
        </div>
        <div class="business-investment row">
            <div class="business">
                <div class="per-business center"><i class="iconfont icon-xianjin"></i>业务收益</div>
                <div class="per-business special center">今日: 0笔</div>
            </div>
            <div class="investment">
                <div class="per-business center"><i class="iconfont icon-xianjin"></i>业务收益</div>
                <div class="per-business special center">今日: 0笔</div>
            </div>
        </div>
        <router-link tag="div" class="running-account row" to="/personalCenter/incomedetail">
            <div class="left-icon center"><i class="iconfont icon-jine1"></i></div>
            <div class="run-title start-center">以入账收入流水</div>
            <div class="right-icon end-center"><i class="iconfont icon-more"></i></div>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
         // 返回首页
        handleReturnHome(){
            this.$router.push({
                path:'/personalCenter/userAccountManage'
            })
        },
        // 更多
        handleMore(){
            this.$toast('尽请期待');
        },
    }
}
</script>
<style lang="less" scoped>
    #page-income{
        .top{
            width: 90vw;
            height: 350px;
            margin-left: auto;
            margin-right: auto;
            border: solid 0.02rem #ccc;
            margin-top: 20px;
            border-radius: 10px;
            position: relative;
            .all-income{
                position: absolute;
                top: 30px;
                left: 20px;
            }
            .integrated-services{
                width: 120px;
                height: 50px;
                position: absolute;
                top: 25px;
                right: 0px;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                background-color: rgb(222, 137, 11);
                color: white;
            }
            .balance{
                width: 100%;
                height: 100px;
                color:rgb(222, 137, 11);
                font-size: 60px;
                font-weight: 700;
                position: absolute;
                top: 100px;
                left: 0px;
            }
            .incomes{
                width: 100%;
                height: 100px;
                position: absolute;
                left: 0;
                bottom: 0;
                .today-income{
                    width: 50%;
                    height: 100%;
                    .today{
                        width: 100%;
                        height: 50%;
                        border-right: solid 2px #ccc;
                    }
                    .today-number{
                        width: 100%;
                        height: 50%;
                        color: rgb(222, 137, 11);
                        font-size: 20px;
                        font-weight: 900;
                    }
                }
            }
        }
        .business-investment{
            width: 99%;
            height: 120px;
            margin-left: auto;
            margin-right:auto;
            border: solid 1px #ccc;
            margin-top:30px;
            .business{
                width: 50%;
                height: 100px;
                margin-top: 10px;
                border-right: solid 1px #ccc;
                .per-business{
                    width: 100%;
                    height: 50%;
                }
                .special{
                    font-size: 30px;
                    font-weight: 800;
                }
            }
            .investment{
                width: 50%;
                height: 100px;
                margin-top: 10px;
                .per-business{
                    width: 100%;
                    height: 50%;
                }
                .special{
                    font-size: 30px;
                    font-weight: 800;
                }
            }
        }
        .running-account{
            width: 95vw;
            height: 100px;
            margin-left: auto;
            margin-right: auto;
            border: solid 0.02rem #ccc;
            border-radius: 15px;
            margin-top: 30px;
            .left-icon,.right-icon{
                width: 10vw;
                height: 100%;
            }
            .run-title{
                width: 73vw;
                height: 100%;
            }
            .icon-jine1{
                font-size: 50px;
                color: #36ACFB;
            }
        }
    }
</style>

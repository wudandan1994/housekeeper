<template>
    <div id="page-income">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">收益明细</div>
            <div class="right-icon center"></div>
        </header>
        <div class="top">
            <div class="all-income">总收益</div>
            <!-- <div class="integrated-services center">综合业务</div> -->
            <div class="balance center">{{amountSum}}</div>
            <!-- <div class="incomes row">
                <div class="today-income">
                    <div class="today center">总计收益</div>
                    <div class="today-number center">78.00</div>
                </div>

                <div class="today-income">
                    <div class="today center">今日收益</div>
                    <div class="today-number center">78.00</div>
                </div>
            </div> -->
        </div>
        <!-- <div class="business-investment row">
            <div class="business">
                <div class="per-business center"><i class="iconfont icon-xianjin"></i>业务收益</div>
                <div class="per-business special center">今日: 0笔</div>
            </div>
            <div class="investment">
                <div class="per-business center"><i class="iconfont icon-xianjin"></i>业务收益</div>
                <div class="per-business special center">今日: 0笔</div>
            </div>
        </div> -->
        <router-link tag="div" class="running-account row" :to="{path: '/personalCenter/incomedetail',query: {amountSum: amountSum}}">
            <div class="left-icon center"><i class="iconfont icon-jine1"></i></div>
            <div class="run-title start-center">以入账收入流水</div>
            <div class="right-icon end-center"><i class="iconfont icon-more"></i></div>
        </router-link>
    </div>
</template>
<script>
import storage from '@/lib/storage'
export default {
    data(){
        return{
            amountSum: '',
            preRouter: '',
        }
    },
    methods:{
         // 返回首页
        handleReturnHome(){
            // this.$router.push({
            //     path: storage.get('preRouter')
            // })
             this.$router.go(-1);
        },
        // 更多
        handleMore(){
            this.$toast('尽请期待');
        },
    },
    created(){
        this.amountSum = this.$route.query.amountSum;
        console.log('路由',this);
        
    }
}
</script>
<style lang="less" scoped>
    #page-income{
        width: 100vw;
        height: auto;
        padding-top: 90px;
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

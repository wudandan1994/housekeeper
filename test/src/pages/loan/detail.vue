<template>
    <div id="page-component-detail">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">贷款详情</div>
            <div class="right-icon center"><van-icon color="white" size="20px" name="weapp-nav"/></div>
        </header>
        <div class="logo">
            <img src="http://img3.imgtn.bdimg.com/it/u=1986179278,1118313821&fm=26&gp=0.jpg" alt="">
            <div class="desc row">
                <div class="desc-title column">
                    <div class="big-title center">当天</div>
                    <div class="small-title center">平均办理时间</div>
                </div>
                <div class="desc-title column">
                    <div class="big-title center">24个月以上</div>
                    <div class="small-title center">借款期限</div>
                </div>
                <div class="desc-titles column">
                    <div class="big-title center">345904人</div>
                    <div class="small-title center">申请人数</div>
                </div>
            </div>
        </div>
        <div class="common-title start-center">
            <van-icon name="bookmark" color="#4B66AF" size="1.5em"/>
            <span>申请条件</span>
        </div>
        <div class="condition">
            <ul>
                <li>年龄18-65周岁</li>
                <li>不限</li>
                <li>不限</li>
            </ul>
        </div>
        <div class="kong"></div>
        <div class="common-title start-center">
            <van-icon name="send-gift" color="#4B66AF" size="1.5em"/>
            <span>所需材料</span>
        </div>
        <div class="condition">
            <ul>
                <li>不限</li>
            </ul>
        </div>
        <div class="kong"></div>
        <div class="common-title start-center">
            <van-icon name="todo-list" color="#4B66AF" size="1.5em"/>
            <span>费率说明</span>
        </div>
        <div class="condition">
            <div class="loan-money start-center">贷款金额: 10000元</div>
        </div>
        <div class="rate-specification row">
            <div class="explain column">
                <div class="explain-big-title center">0.04%/天</div>
                <div class="explain-small-title center">利率</div>
            </div>
            <div class="explain column">
                <div class="explain-big-title center">30天</div>
                <div class="explain-small-title center">贷款期限</div>
            </div>
            <div class="explain column">
                <div class="explain-big-title center">10120.00元</div>
                <div class="explain-small-title center">总还款</div>
            </div>
        </div>
        <div class="kong"></div>
        <div class="common-title start-center">
            <van-icon name="coupon" color="#4B66AF" size="1.5em"/>
            <span>申请攻略</span>
        </div>
        <div class="strategy">
            <p class="way center">如何快速申请？</p>
            <p class="advantage center">门槛低、可取现、额度高、期限长、优惠多、速度快、</p>
        </div>
        <div class="kong"></div>
        <div class="Immediate-apply row">
            <div class="icon-title">
                <div class="im-icon center"><van-icon name="invition" size="2.5em" color="#4B66AF" /></div>
                <div class="im-title center">我要推广</div>
            </div>
            <div class="icon-title">
                <div class="im-icon center"><van-icon name="volume" size="2.5em" color="#4B66AF" /></div>
                <div class="im-title center">申请指南</div>
            </div>
            <router-link tag="div" to="/loan/form">
                <div class="im-btn center">立即申请</div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            fixed: true,
        }
    },
     methods:{
        // 返回首页
        handleReturnHome(){
            this.$router.push({
                path:'/home'
            })
        },
        // 更多
        handleMore(){
            this.$toast('尽请期待');
        }
    }
}
</script>
<style lang="less" scoped>
    #page-component-detail{
        width: 100vw;
        height: 95vh;
        overflow: scroll;
        .loan .van-nav-bar {
            background-color: #4B66AF !important;
        }
        .logo{
            width: 100%;
            height: auto;
            position: relative;
            >img{
                width: 100%;
                height: auto;
            }
            .desc{
                width: 90vw;
                height: 200px;
                position: absolute;
                background: white;
                bottom: 30px;
                left: 5vw;
                z-index: 2;border-radius: 10px;
                box-shadow: 5px 5px  20px #999;
            }
            .desc-title{
                width: 33.3vw;
                height: 80px;
                border-right: solid 1px #ccc;
                margin-top: 60px;
                .big-title{
                    width: 100%;
                    height: 50%;
                    font-weight: 700;
                    font-size: 30px;
                }
                .small-title{
                    width: 100%;
                    height: 50%;
                    font-weight: 400;
                    font-size: 20px;
                    color: #ccc;
                }
            }
            .desc-titles{
                width: 33.3vw;
                height: 80px;
                margin-top: 60px;
                .big-title{
                    width: 100%;
                    height: 50%;
                    font-weight: 700;
                    font-size: 30px;
                }
                 .small-title{
                    width: 100%;
                    height: 50%;
                    font-weight: 400;
                    font-size: 20px;
                    color: #ccc;
                }
            }
        }
        .common-title{
            width: 99vw;
            height: 80px;
            padding-left: 1vw;
            border-bottom: solid 1px #EBEBEB;
            >span{
                font-size: 30px;
                font-weight: 700;
                padding-left: 5px;
            }
        }
        .condition{
            width: 90vw;
            padding-left: 10vw;
            >ul li{
                list-style-type: disc;
                height: 80px;
                text-align: left;
                line-height: 80px;
                font-weight: 600;
                font-size: 24px;
            }
            .loan-money{
                height: 100px;
                font-size: 30px;
                font-weight: 500;
            }
        }
        .rate-specification{
            width: 100vw;
            height: auto;
            .explain{
                width: 30vw;
                height: 100px;
            }
            .explain-big-title{
                width: 100%;
                height: 50%;
                font-size: 32px;
                font-weight: 700;
            }
            .explain-small-title{
                width: 100%;
                height: 50%;
                font-size: 26px;
                font-weight: 400;
                color: #ccc;
            }
        }
        .kong{
            width: 100vw;
            height: 20px;
            background: #EDEEF2;
        }
        .strategy{
            .way{
                color: #4B66AF;
                width: 100vw;
                height: 80px;
                font-size: 25px;
            }
            .advantage{
                width: 100vw;
                height: 80px;
                font-size: 25px;
            }
        }
        .Immediate-apply{
            width: 100vw;
            height: 150px;
            .icon-title{
                width: 20vw;
                height: 100%;
                .im-icon{
                    width: 100%;
                    height: 60%;
                }
                .im-title{
                    width: 100%;
                    height: 30%;
                }
            }
            .im-btn{
                width: 54vw;
                padding-top:30px;
                padding-bottom: 30px;
                margin-left: 2vw;
                background: #4B66AF;
                color: white;
                font-size: 35px;
                margin-top: 30px;
                border-radius: 12px;
            }
        }
    }
</style>


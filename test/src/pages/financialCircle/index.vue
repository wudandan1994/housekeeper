<template>
<div id="financial-circle-component">
    <header class="header">
        <div class="more end-center">
            <van-icon name="weapp-nav" size='20px' @click="handleMore" />
        </div>
        <div class="topTwo row center">
            <div class="center" :class="{ checked: isActive == '1' }" @click="getIndex">金融人脉圈</div>
            <!-- <div class="center" :class="{ checked: isActive == '2' }" @click="getIndex">红包任务</div> -->
        </div>
    </header>
    <div class="container">
        <van-tabs v-model="topactive" :swipe-threshold="threshold" background="black" color="rgb(244, 197, 128)" title-inactive-color="white" title-active-color="rgb(244, 197, 128)">
            <van-tab title="综合">
                <financ></financ>
            </van-tab>
            <van-tab title="信用卡">
                 <financ></financ>
            </van-tab>
            <van-tab title="贷款">
                 <financ></financ>
            </van-tab>
            <van-tab title="POS机">
                 <financ></financ>
            </van-tab>
            <van-tab title="无卡支付">
                 <financ></financ>
            </van-tab>
            <van-tab title="保险">
                 <financ></financ>
            </van-tab>
        </van-tabs>
        <div class="share" v-show="showShare">
            <ul>
               <ul>
                                <li id="wxF"  @click="wxfri">
                                    <p><van-icon name="http://pay.91dianji.com.cn/wx.png"/></p>
                                    <p>好友</p>
                                </li>
                                <li @click="wxcir">
                                    <p><van-icon color="white" size="20px" name="http://pay.91dianji.com.cn/pyq.png"/></p>
                                    <p>朋友圈</p>
                                </li>
                            </ul>
            </ul>
        </div>
    </div>
    
    <footerMenu :active="active" @getChange="changeActive"></footerMenu>
</div>
</template>

<script>
import financ from '@/components/financial/index'
import footerMenu from '@/components/footer'
// import {nativeShare} from '@/lib/share.js'
export default {
    data(){
        return{
            topTwo: 0,
            topactive: 0,
            threshold: 6,
            isActive: '1',
            active: 4,
            showShare:false
        }
    },
    components: {
        financ,
        footerMenu
    },
    methods: {
        getIndex(val){
            val.target.innerText == '金融人脉圈' ? this.isActive = '1' : this.isActive = '2';
        },
        wxfri(){
            let that=this
            plus.share.getServices(function (s) {
                that.shares = s;
                for (var i in s) {
                    if ('weixin' == s[i].id) {
                        that.sharewx = s[i];
                    }
                }
                    that.shareWeixinMessage()

            }, function (e) {
                alert("获取分享服务列表失败：" + e.message);
            });
        },
       
         shareWeixinMessage() {
             let that=this
             that.sharewx.send({ content: "钱夹宝综合金融服务推广平台，点滴成就未来",title:"钱夹宝", href: "http://pay.91dianji.com.cn/#/home?promotioncode=02400219", extra: { scene: "WXSceneSession" } }, function () {
            // alert("分享成功！");
        }, function (e) {
            alert("分享失败：" + e.message);
        });
    },

        // 获取更多
        handleMore(){
            this.showShare=true
            // this.$toast("敬请期待")
           
        },
        changeActive(obj){
            // console.log('obj', obj);
        }
    }
}
</script>

<style lang="less" scoped>
#financial-circle-component{
        color: white;
        .more{
            width: 100%;
            height: 86px;
            font-size: 28px;
             background-color: #4B66AF;
        }
        .topTwo{
            width: 50%;
            height: 100px;
            margin: auto;
            font-size: 28px;
            font-weight: 400;
        >div{
            width: 50%;
            height: 60px;
            border: solid 1px white;
        }                                                                                                                                                                         
}
        >.header{
            width: 100vw;
            height: auto;
            z-index:999;
            background-color: black;
        }
        .checked{
            background-color: white;
            color: black;
        }
        .container{
            height:auto;
        }
        .share {
            background-color: red;
            width:100%;
            height: 300px;
            color:#ccc;
            padding:20px;
            >ul{
                display: flex;
                >li {
                    width:30%;
                }
            }
        }
}
</style>

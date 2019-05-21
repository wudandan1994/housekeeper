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
                <li id="wxF"  @click="wxfri">
                    <p>微信好友</p>
                </li>
                <li>
                    <p>微信朋友圈</p>
                </li>
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
            showShare:false,
            shares:null,
            sharewx:null,
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
                //   var shares = null, sharewx = null;
            
                            plus.share.getServices(function (s) {
                             that.shares = s;
                                for (var i in s) {
                                    if ('weixin' == s[i].id) {
                                      that.sharewx = s[i];
                                    }
                                }
                                console.log(JSON.stringify(that.sharewx))
                                console.log(new Date())
                                 that.shareWeixinMessage()

                            }, function (e) {
                                alert("获取分享服务列表失败：" + e.message);
                            });
        },
        plus(){

        },
         shareWeixinMessage() {
             let that=this
              console.log(JSON.stringify(that.sharewx),"55555555555555555")
             that.sharewx.send({ content: "钱夹宝综合金融服务推广平台，点滴成就未来",title:"钱夹宝", href: "http://pay.91dianji.com.cn/#/home?promotioncode=02400219", extra: { scene: "WXSceneSession" } }, function () {
            alert("分享成功！");
        }, function (e) {
            alert("分享失败：" + e.message);
        });
    },

        // 获取更多
        handleMore(){
            this.showShare=true
            //  let config = {
            //     url:'http://pay.91dianji.com.cn/#/home?promotioncode=02400219',// 分享的网页链接
            //     title:'钱夹宝',// 标题
            //     desc:'金融圈',// 描述
            //     img:'http://pay.91dianji.com.cn/banner03.jpg',// 图片
            //     img_title:'轮播图图片',// 图片标题
            //     from:'钱夹宝APP' // 来源
            // };
           
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

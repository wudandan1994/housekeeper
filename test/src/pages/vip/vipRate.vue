<template>
    <div id="rate_detail">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturn"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">权益说明</div>
            <div class="right-icon varify center"></div>
        </header>
        <div v-if="level == '1'" class="header huangjin">
            <img class="avator" :src="headimg" alt="">
            <div class="level" v-if="level == '1'">黄金会员</div>
            <div class="level" v-if="level == '2'">钻石会员</div>
            <div class="level" v-if="level == '3'">城市合伙人</div>
            <div class="level" v-if="level == '4'">城市运营商</div>
            <div class="slogan start-center" v-if="level == '1'">黄金会员相关权益</div>
            <div class="slogan start-center" v-if="level == '2'">钻石会员相关权益</div>
            <div class="slogan start-center" v-if="level == '3'">城市合伙人相关权益</div>
            <div class="slogan start-center" v-if="level == '4'">城市运营商相关权益</div>
        </div>
        <div v-if="level == '2'" class="header zuanshi">
            <img class="avator" :src="headimg" alt="">
            <div class="level" v-if="level == '1'">黄金会员</div>
            <div class="level" v-if="level == '2'">钻石会员</div>
            <div class="level" v-if="level == '3'">城市合伙人</div>
            <div class="level" v-if="level == '4'">城市运营商</div>
            <div class="slogan start-center" v-if="level == '1'">黄金会员相关权益</div>
            <div class="slogan start-center" v-if="level == '2'">钻石会员相关权益</div>
            <div class="slogan start-center" v-if="level == '3'">城市合伙人相关权益</div>
            <div class="slogan start-center" v-if="level == '4'">城市运营商相关权益</div>
        </div>
        <div v-if="level == '3'" class="header hehuoren">
            <img class="avator" :src="headimg" alt="">
            <div class="level" v-if="level == '1'">黄金会员</div>
            <div class="level" v-if="level == '2'">钻石会员</div>
            <div class="level" v-if="level == '3'">城市合伙人</div>
            <div class="level" v-if="level == '4'">城市运营商</div>
            <div class="slogan start-center" v-if="level == '1'">黄金会员相关权益</div>
            <div class="slogan start-center" v-if="level == '2'">钻石会员相关权益</div>
            <div class="slogan start-center" v-if="level == '3'">城市合伙人相关权益</div>
            <div class="slogan start-center" v-if="level == '4'">城市运营商相关权益</div>
        </div>
        <div v-if="level == '4'" class="header yunyingshang">
            <img class="avator" :src="headimg" alt="">
            <div class="level" v-if="level == '1'">黄金会员</div>
            <div class="level" v-if="level == '2'">钻石会员</div>
            <div class="level" v-if="level == '3'">城市合伙人</div>
            <div class="level" v-if="level == '4'">城市运营商</div>
            <div class="slogan start-center" v-if="level == '1'">黄金会员相关权益</div>
            <div class="slogan start-center" v-if="level == '2'">钻石会员相关权益</div>
            <div class="slogan start-center" v-if="level == '3'">城市合伙人相关权益</div>
            <div class="slogan start-center" v-if="level == '4'">城市运营商相关权益</div>
        </div>
    
        <!-- 黄金会员 -->
        <div class="level" v-if="level == '1'">
            <div class="big_title center">当前费率</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">对应通道</div>
                    <div class="center">对应费率</div>
                </div>
                 <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>优质商户收款费率</div>
                    <div class="end-center"><span>{{levelhj.sd2}}</span>元/笔</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>普通商户收款费率</div>
                    <div class="end-center"><span>{{levelhj.sd1}}</span>元/笔</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>大额还款费率</div>
                    <div class="end-center"><span>{{levelhj.dh2}}</span>元/笔</div>
                </div>
                 <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>小额还款费率</div>
                    <div class="end-center"><span>{{levelhj.dh1}}</span>元/笔</div>
                </div>
            </div>
            <div class="big_title center">推广充值奖励</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">奖励条件</div>
                    <div class="center">领取条件</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推393元/个，奖40元/个</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推393元/个，奖70元/个</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推993元/个，奖100元/个</div>
                    <div class="end-center">升级钻石<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推993元/个，奖150元/个</div>
                    <div class="end-center">升级钻石<br/>会员可领</div>
                </div>
            </div>

            <div class="big_title center">推广佣金</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">佣金比例</div>
                    <div class="center">领取条件</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推分润50%</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推分润10%</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无</div>
                    <div class="end-center">无&nbsp;&nbsp;&nbsp;</div>
                </div>
            </div>


        </div>

        <!-- 钻石会员 -->
        <div class="level" v-if="level == '2'">
            <div class="big_title center">当前费率</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">对应通道</div>
                    <div class="center">对应费率</div>
                </div>
                 <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>优质通道收款费率</div>
                    <div class="end-center"><span>{{levelzs.sd2}}</span>元/笔</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>普通通道收款费率</div>
                    <div class="end-center"><span>{{levelzs.sd1}}</span>元/笔</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>大额还款费率</div>
                    <div class="end-center"><span>{{levelzs.dh2}}</span>元/笔</div>
                </div>
                 <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>小额还款费率</div>
                    <div class="end-center"><span>{{levelzs.dh1}}</span>元/笔</div>
                </div>
            </div>
            <div class="big_title center">推广充值奖励</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">奖励条件</div>
                    <div class="center">领取条件</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推393元/个，奖40元/个</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推393元/个，奖70元/个</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推993元/个，奖100元/个</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推993元/个，奖150元/个</div>
                    <div class="end-center">可领</div>
                </div>
            </div>

            <div class="big_title center">推广佣金</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">佣金比例</div>
                    <div class="center">领取条件</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推分润50%</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推分润10%</div>
                    <div class="end-center">可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无</div>
                    <div class="end-center">无&nbsp;&nbsp;&nbsp;</div>
                </div>
            </div>
        </div>

        <!-- 合伙人 -->
        <div class="level" v-if="level == '3'">
            <div class="big_title center">当前费率</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">对应通道</div>
                    <div class="center">对应费率</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>收款费率</div>
                    <div class="end-center">对应会员等级</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>还款费率</div>
                    <div class="end-center">对应会员等级</div>
                </div>
            </div>
            <div class="big_title center">推广充值奖励</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">奖励条件</div>
                    <div class="center">领取条件</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推393元/个，奖40元/个</div>
                    <div class="end-center">升级任意<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推393元/个，奖70元/个</div>
                    <div class="end-center">升级任意<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推993元/个，奖100元/个</div>
                    <div class="end-center">升级钻石<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推993元/个，奖150元/个</div>
                    <div class="end-center">升级钻石<br/>会员可领</div>
                </div>
            </div>

            <div class="big_title center">推广佣金</div>
            <div class="rate">
                <div class="title row">
                    <div class="center">佣金比例</div>
                    <div class="center">领取条件</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>直推分润&nbsp;50%</div>
                    <div class="end-center">升级任意<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>间推分润&nbsp;10%</div>
                    <div class="end-center">升级任意<br/>会员可领</div>
                </div>
                <div class="rows row">
                    <div class="start-center"><van-icon size="28px" name="http://fx.91dianji.com.cn/yinlian.png"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10%</div>
                    <div class="end-center">升级任意<br/>会员可领</div>
                </div>
            </div>
        </div>
        <!-- 运营商 -->
        <div class="level" v-if="level == '4'">
            <img src="http://pay.91dianji.com.cn/OEM01.jpg" alt="">
            <img src="http://pay.91dianji.com.cn/OEM02.jpg" alt="">
        </div>
        
    </div>
</template>
<script>
import { axiosPost } from '../../lib/http';

export default {
    data(){
        return{
            level: '0',
            headimg: '',
            rates:[],
            levelhj:{},
            levelzs:{},
        }
    },
    methods:{
       handleReturn(){
           this.$router.go(-1);
       },
       getRate(){
           axiosPost("/content/getRate")
           .then(res=>{
            //    console.log(res,"费率")
            //    console.log(res.data.data,'feilv')
               if(res.data.success){
                   this.rates=res.data.data
                   this.rates=JSON.parse(this.rates)
                   this.levelhj=this.rates[1]
                   this.levelzs=this.rates[2]
               } else {
                   this.$toast(res.data.message)
               }
           })
       }
    },
    created(){
        this.getRate()
        this.headimg = this.$store.state.wechat.headimg;
        this.level = this.$route.query.level;
    }
}
</script>
<style lang="less" scoped>
#rate_detail{
    width: 100vw;
    height: 100vh;
    padding-top: 86px;
    .header{
        width: 692px;
        height: 408px;
        background-blend-mode: normal, normal;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.22);
        border-radius: 20px;
        border: solid 3px #ffffff;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
        position: relative;
        z-index: 1;
        .avator{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: absolute;
            z-index: 2;
            top: 30px;
            left: 30px;
        }
        .level{
            font-size: 36px;
            color: #ffffff;
            font-weight: 700;
            position: absolute;
            z-index: 2;
            top: 60px;
            left: 145px;
        }
        .vip_icon{
            width: 113px;
            height: auto;
            position: absolute;
            z-index: 2;
            top: 20px;
            right: 30px;
        }
        .slogan{
            width: 95%;
            padding-left: 5%;
            height: 85px;
            background: rgba(0, 0, 0, 0.18);
            position: absolute;
            z-index: 2;
            left: 0px;
            bottom: 0px;
            color: #ffffff;
            font-size: 26px;
        }
    }
    .huangjin{
        background-image: url('http://pay.91dianji.com.cn/vip001.png');
        background-size: 100% 100%;
    }
    .zuanshi{
        background-image: url('http://pay.91dianji.com.cn/vip002.png');
        background-size: 100% 100%;
    }
    .hehuoren{
        background-image: url('http://pay.91dianji.com.cn/vip003.png');
        background-size: 100% 100%;
    }
    .yunyingshang{
        background-image: url('http://pay.91dianji.com.cn/vip004.png');
        background-size: 100% 100%;
    }
    
    .level{
        margin-top: 50px;
        img{
            width: 90%;
            height: auto;
            margin-left: 5%;
        }
        .big_title{
            width: 100%;
            height: 80px;
            margin-top: 30px;
            font-size: 42px;
            letter-spacing: 0.4px;
            font-weight: 700;
            color: #000000;
        }
        .rate{
            width: 95%;
            height: auto;
            margin: auto;
            .title{
                width: 100%;
                height: 80px;
                display:flex;
                justify-content: space-between;
                >div{
                    width: 30%;
                    height: 100%;
                }
                font-size: 30px;
                color: #333333;
                line-height: 80px;
            }
            .rows{
                width: 90%;
                height: 80px;
                margin: auto;
                font-size: 28px;
                div:nth-child(1){
                    width: 70%;
                    height: 100%;
                }
                div:nth-child(2){
                    width: 30%;
                    height: 100%;
                }
            }
        }
    }
}
</style>


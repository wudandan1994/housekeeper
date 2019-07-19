<template>
    <div id="page-apply">
        <header>
            <div class="slogan">
                <span>先加油</span>
                <span>月结款</span>
            </div>
            <router-link tag="div" to="/detailMessage" class="apply center">申请油卡</router-link>
            <div class="selling center">全国50000余座油站联通</div>
            <div class="desc">
                <span>给力加油服务</span>
                <span>银行联合服务</span>
                <span>全国随心畅油</span>
            </div>
        </header>
        <div class="list">
            <div class="per-list">
                <span class="start-center">我的油卡</span>
                <span class="end-center">2张</span>
                <span class="end-center"><van-icon name="arrow"/></span>
            </div>
            <router-link tag="div" to="/RechargeAllList" class="per-list">
                <span class="start-center">充值详情</span>
                <span class="end-center"></span>
                <span class="end-center"><van-icon name="arrow"/></span>
            </router-link>
            <div class="submit" @click="handleSubmit"><button>充值</button></div>
            <div class="checkbox"><van-checkbox v-model="Agreement" color="#979797" icon-size="18px" checked-color="#4b66af">我已阅读并同意<span style="color: #D04B4B">《钱夹宝加油服务协议》</span><span style="color: #D04B4B">《授权委托书》</span></van-checkbox></div>
        </div>
        <div class="instructions">
            <h1>使用说明</h1>
            <p>1、	本服务为油卡代充服务，不提供充值发票，敬请谅解；</p>
            <p>2、	本服务仅支持本平台新发卡，不支持其他渠道办理的加油卡； </p>
            <p>3、	请仔细核对加油卡卡号，若因用户自身原因导致的充值账号错误等情况，充值资金不予退还；</p>
            <p>4、	本充值暂无法使用XXXXX优惠券/积分卡，敬请谅解；</p>
            <p>5、	充值成功后，预计24-48小时内到账，若48小时仍未到账，请及时拨打合作方客服电话XXXXXXX；</p>
            <p>6、 如充值失败，退款将于2-7个工作日退还到原支付账户；</p>
            <p>7、	充实成功后，需要到中石油、中石化等对应油企站点圈存，圈存成功后，您可以持卡消费； </p>
            <p>8、	挂失卡、过期卡、损坏卡、超限卡等卡状态异常等加油卡无法充值； </p>
            <p>9、	中石化每日晚上22:50至次日凌晨00:50是网站系统结算时间，在此时间段内不可充值，敬请谅解。</p>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            Agreement: false,
        }
    },
    methods:{
        handleSubmit(){
            if(!this.Agreement){
                this.$toast('请先阅读并同意协议');
            }else{
                // 可正常提交
                
            }
        }
    }
}
</script>
<style lang="less" scoped>
    #page-apply{
        width: 100vw;
        height: 100vh;
        >header{
            width: 100vw;
            height: 440px;
            background: #4B66AF;
            box-shadow:0 25px 25px 15px #4B66AF;
            box-sizing: border-box;
            padding-top: 80px;
            .slogan{
                width: 42%;
                height: 100px;
                margin: 0px auto auto auto;
                color: #fff;
                font-size: 48px;
                font-weight: 700;
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                -webkit-justify-content: space-between;
                align-items: center;
            }
            .apply{
                background-color: #ffffff;
                width: 30%;
                height: 60px;
                margin: 46px auto auto auto;
                transition: opacity 0.5s;
                color: #4b66af;
                font-size: 28px;
                border-radius: 12px;
                letter-spacing: 5px;
            }
            .selling{
                height: 40px;
                font-size: 28px;
                color: #3AAF25;
                margin-top: 22px;
            }
            .desc{
                width: 95%;
                height: 40px;
                margin: 48px auto 20px auto;
                color: #fff;
                font-size: 28px;
                display: flex;
                display: -webkit-flex;
                justify-content: space-around;
                -webkit-justify-content: space-around;
                align-items: center;
            }
        }
        .list{
            width: 100vw;
            height: auto;
            margin: 60px auto auto auto;
            // border: solid 1px red;
            background: #fff;
            box-sizing: border-box;
            padding-top: 100px;
            .per-list{
                width: 100%;
                height: 134px;
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                -webkit-justify-content: space-between;
                box-sizing: border-box;
                padding: 0px 50px;
                font-size: 30px;
                font-weight: 700;
                >span:nth-child(1){
                    width: 80%;
                    border-bottom: solid 1px #ccc;
                }
                >span:nth-child(2){
                    width: 15%;
                    color: #4B66AF;
                    border-bottom: solid 1px #ccc;
                }
                >span:nth-child(3){
                    width: 5%;
                    border-bottom: solid 1px #ccc;
                }
            }
            .submit{
               width: 92%;
               height: 98px; 
               margin: 40px auto;
               button{
                   width: 100%;
                   height: 100%;
                   border: none;
                   background:rgba(146,164,216,1);
                   border-radius: 50px;
                   color: #ffffff;
                   font-size: 30px;
               }
            }
            .checkbox{
                width: 92%;
                height: auto;
                margin: auto; 
                font-size: 24px;
            }
        }
        .instructions{
            width: 92%;
            height: auto;
            margin: 50px auto auto auto;
            p{
                text-align: justify;
                line-height: 35px;
                font-size: 26px;
            }
        }
    }
</style>

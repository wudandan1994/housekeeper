<template>
    <div id="add-card">
        <header class="header-top row">
            <div class="left-icon center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">银行卡管理</div>
            <div class="right-icon center"><van-icon color="white" size="20px" name="card"/></div>
        </header>
        <div class="personal row">
            <div class="avator center"><img :src="headimg"></div>
            <div class="name-code">
                <div class="name row">
                    <div class="start-center">{{nickname}}</div>
                    <div class="center">{{level}}</div>
                </div>
                <div class="code start-center">推荐码：{{recommendedcode}}</div>
            </div>
            <div class="status center">(未绑定)</div>
        </div>
        <router-link tag="div" to="/personalCenter/addcard/UnionPay" class="UnionPay row">
            <div class="pay-icon end-center"> <svg class="icon" aria-hidden="true"><use xlink:href="#icon-pay-unionpay"></use></svg></div>
            <div class="add-icon center"><van-icon name="plus"/></div>
            <div class="add-title start-center">添加银行卡</div>
            <div class="more-icon center"><van-icon name="arrow"/></div>
        </router-link>
        <router-link tag="div" to="/personalCenter/addcard/alipay" class="UnionPay row">
            <div class="pay-icon end-center"><van-icon name="alipay" color="#0398E2"/></div>
            <div class="add-icon center"><van-icon name="plus"/></div>
            <div class="add-title start-center">添加支付宝</div>
            <div class="more-icon center"><van-icon name="arrow"/></div>
        </router-link>

    </div>
</template>
<script>
import { axiosPost } from '../../lib/http';
export default {
    data(){
        return {
            nickname:'',
            headimg:'',
            recommendedcode:'',
            level:''
        }
    },
    methods:{
         // 返回首页
        handleReturnHome(){
            this.$router.push({
                path:'/personalCenter/incomedetail/integralCash'
            })
        },
        // 绑定银行卡
        handleAddCard(){

        },
        // 获取已绑定银行卡列表
        handleBankCardList(){
            let url = 'http://pay.91dianji.com.cn/api/customer/getBankCardByOpenid';
            let params = {};
            axiosPost(url,params).then(res =>{
                console.log('获取已绑定银行卡列表成功',res);
            }).catch(res =>{
                console.log('获取已绑定银行卡列表失败',res)
            })
        }
    },
    created () {
        this.nickname = this.$store.state.wechat.nickname;
        this.headimg  = this.$store.state.wechat.headimg;
        this.recommendedcode  = this.$store.state.wechat.recommendedcode; 
        this.level  = this.$store.state.wechat.level; 
        this.handleBankCardList();
    }
}
</script>
<style lang="less" scoped>
    #add-card{
        width: 100vw;
        height: 100vh;
        background: #EEEFF1;
        .loan .van-nav-bar {
            background-color: #4B66AF!important;
      }
        // .loan {
        //     height: 86px;
        //     line-height: 86px;
        //     font-size: 36px;

        // }
        .personal{
            width: 100vw;
            height: 120px;
            background: white;
            padding-top: 20px;
            .avator{
                width: 120px;
                height: 100%;
                img{
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                }
            }
            .name-code{
                width: 60%;
                height: 100%;
                .name{
                    width: 100%;
                    height: 40%;
                    margin-top: 12px;
                    div:nth-child(1){
                        width: auto;
                        height: 100%;
                    }
                    div:nth-child(2){
                        width: auto;
                        height: 100%;
                        margin-left: 30px;
                    }
                }
                .code{
                    width: 100%;
                    height: 50%;
                }
            }
            .status{
                width: auto;
                height: 100%;
            }
        }
        .UnionPay{
            width: 100%;
            height: 100px;
            background: white;
            margin-top: 20px;
            .pay-icon{
                width: 10%;
                height: 100%;
                font-size: 35px;
            }
            .add-icon{
                width: 5%;
                height: 100%;
            }
            .add-title{
                width: 75%;
                height: 100%;
            }
            .more-icon{
                width: 10%;
                height: 100%;
            }
        }
    }
</style>

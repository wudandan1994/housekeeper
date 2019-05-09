<template>
    <div id="add-card">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">银行卡管理</div>
            <div class="right-icon center"></div>
        </header>
        <router-link tag="div" to="/personalCenter/addcard/UnionPay" class="UnionPay row">
            <div class="pay-icon end-center"> <svg class="icon" aria-hidden="true"><use xlink:href="#icon-pay-unionpay"></use></svg></div>
            <div class="add-icon center"><van-icon name="plus" size="20px"/></div>
            <div class="add-title start-center">添加银行卡</div>
            <div class="more-icon center"><van-icon name="arrow"/></div>
        </router-link>
        <div class="card-list">
            <div class="per-card" v-for="(item,index) in bankcardlist" :key="index">
                <div class="name">{{item.name}}</div>
                <div class="bankname">{{item.bankname}}</div>
                <div class="bankcardno">{{item.bankcardno}}</div>
            </div>
        </div>
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
            level:'',
            bankcardlist: [],
        }
    },
    methods:{
         // 返回首页
        handleReturnHome(){
            this.$router.go(-1);
        },
        // 绑定银行卡
        handleAddCard(){

        },
        // 获取已绑定银行卡列表
        handleBankCardList(){
            // let url = '/customer/getBankCardByOpenid';
            let url = 'http://pay.91dianji.com.cn/api/customer/getBankCardByOpenid';
            let params = {};
            axiosPost(url,params).then(res =>{
                // console.log('获取已绑定银行卡列表成功',res);
                if(res.data.success){
                    if(res.data.data.length == '0'){
                        this.$toast('您还未绑定银行卡');
                    }else{
                        this.bankcardlist = res.data.data;
                    }
                }
            }).catch(res =>{
                // console.log('获取已绑定银行卡列表失败',res)
            })
        },
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
        height: calc(100vh - 90px);
        background: #EEEFF1;
        padding-top: 90px;
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
                font-size: 28px;
            }
            .more-icon{
                width: 10%;
                height: 100%;
            }
        }
        .card-list{
            width: 100vw;
            height: calc(100vh - 86px);
            margin-top: 86px;
            .per-card{
                width: 97%;
                height: 200px;
                margin-left: auto;
                margin-right: auto;
                background: #4b66af;
                margin-top: 25px;
                border-radius: 20px;
                position: relative;
                .name{
                    position: absolute;
                    top: 40px;
                    left: 30px;
                    color: #ffffff;
                    font-size: 30px;
                    font-weight: 700;
                }
                .bankname{
                    position: absolute;
                    top: 40px;
                    right: 30px;
                    color: #ffffff;
                    font-size: 30px;
                    font-weight: 700;
                }
                .bankcardno{
                    position: absolute;
                    top: 140px;
                    left: 20px;
                    color: #ffffff;
                    font-size: 30px;
                    font-weight: 700;
                }
            }
        }
    }
</style>

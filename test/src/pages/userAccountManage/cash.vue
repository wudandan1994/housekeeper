<template>
    <div id="cash">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">现金提现</div>
            <div class="right-icon center" @click="handleOpenBankCardList"><van-icon color="white" size="20px" name="card"/></div>
        </header>
        <div class="cash-top">
            <!-- <van-tabs v-model="active">
                <van-tab title="总收益"></van-tab>
                <van-tab title="可提现">内容 2</van-tab>
            </van-tabs> -->
            <div class="form-integral row">
                <div class="now-integral">
                    <div class="count center">{{amount}}</div>
                    <div class="title center">当前余额</div>
                    <div class="all center">
                        <div class="center" @click="handleAllCash">全部提现</div>
                    </div>
                </div>
                <div :class="cardLength == '0' ? 'apply-card-one' : 'apply-card-two' "></div>
                <router-link tag="div" to="/personalCenter/incomedetail/addcard" class="more center"><i class="iconfont icon-more"></i></router-link>
            </div>
            <div class="desc">注:钱夹宝提现秒到账，手续费5%+1元/笔，最低提现金额100元起提。<span>5%的提现手续费将全部作为城主的收益</span></div>
            <div class="user-input">
                <div class="input-title"><span>提取金额</span></div>
                <div class="money-input row">
                    <div class="icon-rmb center">¥</div>
                    <div class="getnumber start-center"><input type="number" v-model="cash" placeholder="请输入提现金额"></div>
                </div>
            </div>
            <div class="desc-two">
                <p>亲爱的钱家宝会员，提现为整百提现。您提交提现申请后将进入人工审核状态，工作时间内1-3天将完成审核！请合理安排提现</p>
            </div>
            <div @click="handleCash" class="Immediate-withdrawals center">立即提现</div>
        </div>
        <div class="card-list" v-if="showbanklist" @click="handleCloseCardList">
            <div class="per-card" v-for="(item,index) in bankcardlist" :key="index" @click="handleCheckCard(item.id)">
                <div class="name">{{item.name}}</div>
                <div class="bankname">{{item.bankname}}</div>
                <div class="bankcardno">{{item.bankcardno}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import storage from '@/lib/storage'
import {axiosPost} from '@/lib/http'
export default {
    data(){
        return{
            active: 0,
            cash: '',
            cardId:'',
            timerId:null,
            amount: '',
            showbanklist: false,
            cardLength: '',
        }
    },
    methods:{
        // 返回首页
        handleReturnHome(){
            this.$router.push({
                path:'/ponserCenter/userAccountManage'
            })
        },
        // 获取已绑定银行卡列表
        handleBankCardList(){
            // let url = '/customer/getBankCardByOpenid';
            let url = 'http://pay.91dianji.com.cn/api/customer/getBankCardByOpenid';
            let params = {};
            axiosPost(url,params).then(res =>{
                console.log('获取已绑定银行卡列表成功',res);
                if(res.data.success){
                    if(res.data.data.length == '0'){
                        this.cardLength = '0'
                        this.$toast('您还未绑定银行卡');
                    }else{
                        // this.showbanklist = true;
                        this.bankcardlist = res.data.data;
                    }
                }
            }).catch(res =>{
                console.log('获取已绑定银行卡列表失败',res)
            })
        },
        // 打开银行卡列表
        handleOpenBankCardList(){
            this.showbanklist = true;
        },
        // 选择银行卡
        handleCheckCard(obj){
            this.showbanklist = false;
            this.cardId = obj;
        },
        // 关闭银行卡列表
        handleCloseCardList(){
            this.showbanklist = false;
        },
        // 全部提现
        handleAllCash(){
            this.cash = this.amount 
        },
        // 提现
        handleCash(){
            if(this.cardLength == '0'){
                this.$toast('您还未绑定银行卡');
            }
            else if(this.cash == ''){
                this.$toast('请输入提现金额')
            }
            else if(this.cardId == ''){
                this.$toast('请点击右上角选择提现银行卡')
            }else{
                let url = 'http://pay.91dianji.com.cn/api/customer/getwithdrawalBank';
                let params = {
                   cid: storage.get('cid'),
                   withdraw_bank_id: this.cardId,
                   withdraw_apply_total: this.cash 
                };
                axiosPost(url,params).then(res =>{
                    console.log('提现申请成功',res);
                    if(res.data.success){
                        this.$toast('提现申请成功');
                    }else{
                        this.$toast(res.data.message);
                    }
                }).catch(res =>{
                    console.log('提现申请失败',res);
                })
            }
            
        }
    },
    created(){
        this.amount = this.$route.query.amount;
        this.handleBankCardList();
    }
}
</script>
<style lang="less" scoped>
    #cash{
        width: 100vw;
        height: auto;
        padding-top: 86px;
        .cash-top{
            width: 100vw;
            height: auto;
            margin-top: 20px;
            .form-integral{
                width: 100%;
                height: 18vh;
                background: white;
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
                        font-size: 30px;
                        font-weight: bold;
                    }
                    .title{
                        width: 90%;
                        height: 25%;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .all{
                        width: 100%;
                        height: 30%;
                        >div{
                            width: 60%;
                            height: 80%;
                            background: #4b66af;
                            color: white;
                            border-radius: 15px;
                        }
                    }
                }
                .apply-card-one{
                    width: 60%;
                    height: 100%;
                    background: url('../../assets/bg2.png') no-repeat center center;
                }
                .apply-card-two{
                    width: 60%;
                    height: 100%;
                    background: url('../../assets/yinhangka.png') no-repeat center center;
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
                margin-bottom:100px;
                padding: 20px;
                line-height: 40px;
                p:nth-child(2){
                    margin-top: 30px;
                }

            }
            .Immediate-withdrawals{
                width: 90%;
                height: 100px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 50px;
                background: #4b66af;
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
        .card-list{
            width: 100vw;
            height: calc(100vh - 86px);
            position: fixed;
            top: 86px;
            left: 0;
            z-index: 10000;
            background: rgba(0, 0, 0, 0.5);
            .per-card{
                width: 90%;
                height: 200px;
                margin-left: auto;
                margin-right: auto;
                background: #8b379a;
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

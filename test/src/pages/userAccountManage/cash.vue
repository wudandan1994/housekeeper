<template>
    <div id="cash">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">现金提现</div>
            <div class="right-icon center"></div>
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
            <div class="desc">注:钱夹宝提现工作日1-2天到账，手续费5%+1元/笔，最低提现金额100元起提。</div>
            <div class="checkbank row">
                <div class="bankname start-center">{{bankname}}</div>
                <div class="selectbank" @click="handleOpenBankList"><i class="iconfont icon-more"></i></div>
            </div>
            <!-- 银行卡选择器 -->
            <div class="bank-picker" v-if="bank_select">
                <div class="close" @click="handleCloseBankList"></div>
                <div class="check-bankname">
                    <div class="select-title">请选择您要提现到哪张银行卡</div>
                    <van-picker show-toolbar :columns="columns" @change="onChange" @confirm="handleConfirm"/>
                </div>
            </div>
            <div class="user-input">
                <div class="input-title"><span>提取金额</span></div>
                <div class="money-input row">
                    <div class="icon-rmb center">¥</div>
                    <div class="getnumber start-center"><input type="number" @input="handleServiceChange" @blur="handleServiceCharge" v-model="cash" placeholder="请输入提现金额"></div>
                </div>
            </div>
            <div class="service">
                <p v-if="service">本次提现所需手续费为<span>¥{{charge}}</span>,实际到账金额为<span>¥{{truecash}}</span></p>
            </div>
            <div class="desc-two">
                <p>亲爱的钱夹宝会员，您提交提现申请后将进入人工审核状态，工作时间内1-2天将完成审核，请合理安排提现。</p>
            </div>
            <div @click="handleCash" class="Immediate-withdrawals center">立即提现</div>
        </div>
        <loading :componentload='componentload'></loading>
        <!-- 提现成功 -->
        <div class="cash_success" v-if="success">
            <div class="cash_title" @click="handleReturnHome">完成</div>
            <div class="avator">
                <img :src="avator" alt="">
                <p>{{nickname}}</p>
            </div>
            <div class="cash_tips">提现申请已发起,等待银行处理</div>
            <div class="cash_detail row">
                <div class="left-title">到账账户</div>
                <div class="right-detail">{{abridge}}</div>
            </div>
            <div class="cash_detail row">
                <div class="left-title">预计到账时间</div>
                <div class="right-detail">{{time}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import loading from '@/components/loading'
import storage from '@/lib/storage'
import {axiosPost} from '@/lib/http'
export default {
    data(){
        return{
            active: 1,
            columns: [
                // "中国民生银行5323"
            ],
            componentload: true,
            active: 0,
            cash: '',
            cardId:'',
            timerId:null,
            amount: '222',
            cardLength: '',
            bankcardlist: [
                // {
                //     abridge: '中国民生银行5323',
                //     id: '2'
                // }
            ],
            abridge: '中国民生银行5323',
            bank_select: false,
            bankname: '请选择您要提现的银行卡',
            avator: 'http://pay.91dianji.com.cn/logo.png',
            nickname: 'JACK',
            time: '',
            success: false,
            charge: 0,
            truecash: 0,
            service: false,
        }
    },
    components:{
        loading
    },
    methods:{
        // 打开选择银行卡列表
        handleOpenBankList(){
            this.bank_select = true;
        },
        // 关闭选择银行卡列表
        handleCloseBankList(){
            this.bank_select = false;
        },
        // 选择银行
        onChange(picker, value, index) {
             if(value.length == '0'){
                 this.bank_select = false;
                this.$toast('请先绑定银行卡');
             }else{
                 this.bank_select = false;
                this.bankname = value;
                this.cardId = ((this.bankcardlist).filter(item =>item.abridge == value))[0].id
             }
        },
        // 应付只绑定一张银行卡的情况
        handleConfirm(value, index){
            if(value.length == '0'){
                this.bank_select = false;
                this.$toast('请先绑定银行卡');
            }else{
                this.bank_select = false;
                this.bankname = value;
                this.cardId = ((this.bankcardlist).filter(item =>item.abridge == value))[0].id;
            }
            
        },
        // 计算手续费
        handleServiceCharge(){
            if(parseInt(this.cash) >= 100){
                this.service = true;
                this.charge =( parseInt(this.cash)*0.05 + 1).toFixed(2);
                this.truecash = (parseInt(this.cash) - (parseInt(this.cash)*0.05 + 1)).toFixed(2);
            }else{
                this.service = false;
            }
        },
        // 输入框内容变化时计算手续费
        handleServiceChange(){
            if(parseInt(this.cash) > parseInt(this.amount)){
                this.$toast('提现金额不能大于余额');
            }else if(parseInt(this.cash) >= 100){
                this.service = true;
                this.charge =( parseInt(this.cash)*0.05 + 1).toFixed(2);
                this.truecash = (parseInt(this.cash) - (parseInt(this.cash)*0.05 + 1)).toFixed(2);
            }
            else{
                this.service = false;
            }
        },
        // 返回首页
        handleReturnHome(){
            this.$router.go(-1);
            this.success = false;
        },
        // 获取已绑定银行卡列表
        handleBankCardList(){
            // let url = '/customer/getBankCardByOpenid';
            let url = '/customer/getBankCardByOpenid';
            let params = {};
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    if(res.data.data.length == '0'){
                        this.cardLength = '0'
                        this.$toast('您还未绑定银行卡');
                    }else{
                        this.bankcardlist = res.data.data;
                        var arr = [];
                        for (var item in this.bankcardlist) {
                            arr.push((this.bankcardlist)[item].abridge)
                        }
                        this.columns = arr;
                    }
                }
            }).catch(res =>{
            })
        },
        // 全部提现
        handleAllCash(){
            if(parseInt(this.amount) < 100){
                this.$toast('余额过低，暂无法提现')
            }else{
                this.cash = this.amount;
                this.service = true;
                this.charge =( parseInt(this.cash)*0.05 + 1).toFixed(2);
                this.truecash = (parseInt(this.cash) - (parseInt(this.cash)*0.05 + 1)).toFixed(2); 
            }
        },
        // 提现
        handleCash(){
            if(this.cardLength == '0'){
                this.$toast('您还未绑定银行卡');
            }
            else if(this.cash == '' && this.cash < this.amount){
                this.$toast('请输入正确金额')
            }
            else if(this.cash < 100){
                this.$toast('金额需大于100')
            }
            else if(this.cardId == ''){
                this.$toast('请选择提现到账银行卡')
            }
            else{
                let url = '/customer/getwithdrawalBank';
                let params = {
                   cid: storage.get('cid'),
                   withdraw_bank_id: this.cardId,
                   withdraw_apply_total: this.cash 
                };
                axiosPost(url,params).then(res =>{
                    if(res.data.success){
                        this.$toast('提现申请成功');
                        this.success = true;
                    }else{
                        this.$toast(res.data.message);
                    }
                }).catch(res =>{
                })
            }
            
        }
    },
    created(){
        this.handleBankCardList();
        this.amount = this.$route.query.amount;
        setTimeout(() =>{
            this.componentload = false;
        },500)
        this.avator = this.$store.state.wechat.headimg;
        this.nickname = this.$store.state.wechat.nickname;
        var d = new Date();
        var tdayLater = d.getTime() + parseInt(172800000);
        var t = new Date(tdayLater);
        var years = t.getFullYear();
        var month = (t.getMonth() + 1) < 10 ? '0' + (t.getMonth() + 1) : (t.getMonth() + 1);
        var day =  (t.getDate()) < 10 ? '0' + t.getDate() : t.getDate();
        var hours = (t.getHours()) < 10 ? '0' +t.getHours() : t.getHours();
        var minutes = (t.getMinutes()) < 10 ? '0' + t.getMinutes() : t.getMinutes();
        var second = (t.getSeconds()) < 10 ? '0' + t.getSeconds() : t.getSeconds();
        var time = years + '-' + month + '-' + day + ' ' + hours + ":" + minutes + ':' + second;
        this.time = time;
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
                        font-size: 28px;
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
                            font-size: 28px;
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
                font-size: 26px;
            }
            .checkbank{
                width: 95vw;
                height: 100px;
                margin-left: auto;
                margin-right: auto;
                background: #f2f2f2;
                .bankname{
                    width: 88%;
                    height: 100%;
                    text-align: left;
                    margin-left: 2%;
                    font-size: 30px;
                    font-weight: 700;
                }
                .selectbank{
                    width: 10%;
                    height: 100%;
                    line-height: 100px;
                    text-align: center;
                    font-size: 1.5em;
                    font-weight: 700;
                    >i{
                        font-size: 45px;
                    }
                }
            }
            .bank-picker{
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.3);
                position: fixed;
                bottom: 0px;
                left: 0px;
                z-index: 10;
                .close{
                    width: 100vw;
                    height: 65vh;
                } 
                .check-bankname{
                    width: 100vw;
                    height: 35vh;
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    z-index: 11;
                    .select-title{
                        width: 100vw;
                        height: 80px;
                        border-bottom: solid 1px #f2f2f2;
                        background: white;
                        font-size: 34px;
                        font-weight: 700;
                        text-align: center;
                        line-height: 80px;
                        color: #4b66af;
                    }
                }
            }
            .user-input{
                width: 100vw;
                height: 200px;
                background: white;
                padding-top: 50px;
                border-bottom: solid 1px #f2f2f2;
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
            .service{
                width: 95vw;
                height: 60px;
                margin-left: auto;
                margin-right: auto;
                line-height: 60px;
                color: red;
                p{
                    >span{
                        color: black;
                        font-weight: 600;
                    }
                }
            }
            .desc-two{
                margin-bottom:100px;
                padding: 5px 20px 0px 20px;
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
        .cash_success{
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 999999;
            background: #fff;
            .cash_title{
                position: absolute;
                top: 20px;
                right: 20px;
                font-size: 30px;
                font-weight: 700;
                color: #4b66af;
            }
            .avator{
                width: 100%;
                height: 200px;
                margin-top: 10vh;
                text-align: center;
                >img{
                    width: 120px;
                    height: 120px;
                    margin-left: auto;
                    margin-right: auto;
                }
                >p{
                    margin-top: 10px;
                    font-size: 28px;
                }
            }
            .cash_tips{
                width: 100%;
                height: 80px;
                text-align: center;
                line-height: 80px;
                font-size: 28px;
            }
            .cash_detail{
                width: 95vw;
                height: 100px;
                line-height: 100px;
                margin-left: auto;
                margin-right: auto;
                font-size: 28px;
                font-weight: 400;
                border-bottom: solid 1px #f2f2f2;
                .left-title{
                    width: 40%;
                    height: 100%;
                    text-align: left;
                }
                .right-detail{
                    width: 60%;
                    height: 100%;
                    text-align: right;
                }
            }
        }
    }
</style>

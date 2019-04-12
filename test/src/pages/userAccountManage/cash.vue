<template>
    <div id="cash">
         <header class="manage loan">
            <van-nav-bar title="现金提现" left-text="返回" left-arrow @click-left="handleReturnHome">
            </van-nav-bar>
        </header>
        <div class="cash-top">
            <van-tabs v-model="active">
                <van-tab title="总收益">
                    <div class="form-integral row">
                        <div class="now-integral">
                            <div class="count center">0.00</div>
                            <div class="title center">当前余额</div>
                            <div class="all center">
                                <div class="center">全部提现</div>
                            </div>
                        </div>
                        <div class="apply-card"></div>
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
                    <div @click="getCash" class="Immediate-withdrawals center">立即提现</div>
                    
                </van-tab>
                <van-tab title="可提现">内容 2</van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
import storage from '@/lib/storage'
import {axiosPost,axiosGet} from '@/lib/http'
export default {
    data(){
        return{
            active: 0,
            cash: '',
            timerId:null
        }
    },
    methods:{
        // 返回首页
        handleReturnHome(){
            this.$router.push({
                path:'/ponserCenter/userAccountManage'
            })
        },
        // 提现
        getCash(){
           let that=this
           let cash=Number(that.cash)
           if(cash % 100 !== 0){
               that.$toast({
                   message:"提现为整百金额"
               })
               return
           }
           //  查询是否有绑卡
           axiosPost("/customer/getBankCardByOpenid",data)
           .then(function(res){
               console.log(res,"result");
               if(res.data.data.length===0){
                   that.$toast({
                       message:"还没有绑定的银行卡，请先绑卡"
                   })
                   that.timerId=setTimeout(function(){
                       that.$router.puth("/personalCenter/incomedetail/addcard")
                   },4000)
               } else {
                    let data={
                    //    cid:storage.get("cid")
                      cid:"5",
                      withdraw_apply_total:cash,
                      withdraw_bank_id:res.data.data[0].bankcardno
                  }
                  axiosPost("/customer/getwithdrawalBank",data)
                  .then(function(res){
                      console.log(res,"提现成功");
                      that.$toast({
                          message:"提现成功"
                      })
                  })
                  .catch(function(err){
                      console.log(err,"操作错误");
                  })
               }
           })
           .catch(function(err){
               console.log(err,"error");
               
           })

            
        }
    }
}
</script>
<style lang="less" scoped>
    #cash{
        background: #EEEFF1;
        width: 100vw;
        height: 100vh;
        overflow: scroll;
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
                            background: #866E38;
                            color: white;
                            border-radius: 15px;
                        }
                    }
                }
                .apply-card{
                    width: 60%;
                    height: 100%;
                    background: url('../../assets/bg2.png') no-repeat center center;
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
                background: #8A6B2B;
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
    }
</style>

<template>
    <div id="receivables">
        <header>
            <p @click="goBack"><span><van-icon name="arrow-left" /></span></p>
            <p>商户收款</p>
            <p><span><van-icon name="ellipsis" /></span> </p>
        </header>
        <div class="container">
            <div class="portrait">
                <p><span><van-icon name="manager" /></span></p>
                <div class="recommend">
                    <p>
                        <span>可乐—5-2</span>
                        <span><van-icon name="info-o" />实习</span>
                    </p>
                    <p>推荐码：10472992</p>
                </div>
                <p>(&nbsp;推荐人&nbsp;)</p>
            </div>
            <div class="merchant">
                <div class="pay">
                    <p>
                        <span><van-icon name="photo" /></span>
                        <span>设置金额</span>
                    </p>
                    <p>
                        <span>￥</span>
                        <input type="number" placeholder="请输入金额最低500元">
                    </p>
                     <p @click="showPay">
                         <span>立即支付</span>
                     </p>
                </div>
                <p>
                    <span><van-icon name="label"/></span>&nbsp;&nbsp;<b class="bold">商户收款</b>，支付通道新开户需要实名注册，信用卡应与绑定的结算卡户名要一致，<span>如出现没到账请及时更换收款储蓄卡后</span>
                     ，及时联系客服登记核查，感谢您的理解 。
                </p>
            </div>
            <div class="transaction">
                <ul>
                    <router-link tag="li" to="/home/receivables/rate">
                        <p><span><van-icon name="gold-coin"/></span></p>
                        <div>
                            <p>我的费率</p>
                            <p>通道费率详细说明</p>
                        </div>
                    </router-link>
                    <router-link tag="li" to="/home/receivables/transactionQuery">
                        <p><span><van-icon name="gold-coin"/></span></p>
                        <div>
                            <p>交易查询</p>
                            <p>交易查询详细记录</p>
                        </div>
                    </router-link>
                    <router-link tag="li" to="/home/receivables/passageway">
                        <p><span><van-icon name="gold-coin"/></span></p>
                        <div>
                            <p>通道说明</p>
                            <p>单笔交易限额明细</p>
                        </div>
                    </router-link>
                    <li @click="changeTips">
                        <p><span><van-icon name="gold-coin"/></span></p>
                        <div>
                            <p>储蓄卡管理</p>
                            <p>添加回款账户储蓄</p>
                        </div>
                    </li>
                    
                </ul>
                <div class="tips" v-show="showTips">
                    <p>温馨提示</p>
                    <div>
                        <p>尊敬的用户，为了确保用户信息的唯一性和安全性，确保账户资金安全，请您先进行银行储蓄卡实名认证，
                            方可免费办理次业务！
                        </p>
                        <p>自家账户不能给他人信用卡支付使用</p>
                        <p>
                            <span @click="cancle">取消</span>
                            <router-link tag="span" to="/home/receivables/storage">实名认证</router-link>
                        </p>
                    </div>
                </div>
            </div>
             <div class="statistics">
                 <ul>
                     <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>操作流程说明</span>&nbsp;&nbsp;<span>(新手必看)</span><span><van-icon name="arrow" /></span> </p>    
                                     
                     </li>
                     <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>实名认证</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li>
                      <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>我的分润</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li>
                      <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>商户收款明细</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li>
                      <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>收款统计</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li>
                 </ul>
             </div>
            <footer>
                
            </footer>
        </div>
    </div>
</template>

<script>
import {axiosPost} from '@/lib/http'
export default {
    data() {
        return {
            showTips:false,
            personInfo:{}
        }
    },
    methods:{
        goBack () {
            this.$router.push('/home')
        },
        changeTips() {
            this.showTips=true
        },
        cancle(){
             this.showTips=false
        },
        showPay(){
             this.showTips=true
        },
        searchInfo(){
            let that=this
            axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberReg")
        .then(function(res){
            console.log(res,"result")
            that.personInfo=res.data.data
        })
        .catch(function(err){
            console.log(err,"error")
            
        })
     }

    },
    created () {
        this.searchInfo()
    }
}
</script>

<style lang="less">
   #receivables {
       >header {
           height: 86px;
           line-height: 86px;
           width:100%;
           padding-top:10px;
           font-size:28px;
            background-color: #4B66AF;
           display: flex;
           justify-content: space-between;
           color:#fff;
           z-index:999;
       }
       >.container {
           background-color:#ECF0F3; 
           >.portrait {
               background-color:#4B66AF; 
               color:#eee;
               display: flex;
               padding-left:40px;
                justify-content: space-between;
                padding-top:20px;
                height: 400px;
                >p {
                    &:nth-of-type(1){
                        font-size:100px;
                        color:pink;
                    }
                }
                >.recommend {
                    margin-left:-150px;
                    >p {
                        &:nth-of-type(1) {
                            font-size: 36px;
                        }
                        &:nth-of-type(2) {
                            color:#ddd;
                            margin-top:30px;
                            margin-bottom:20px;
                            font-size: 20px;
                        }
                    }
                }
                >p {
                    &:nth-of-type(2) {
                        margin-top:50px;
                    }
                }
           }
           >.merchant {
               background-color: #ECF0F3;
               padding-top:160px;
               position: relative;
               >.pay {
                   width:92%;
                   background-color:#fff;
                   position: absolute;
                   top:-280px;
                   left:0px;
                   margin:20px;
                   border-radius: 10px;
                  
                   box-shadow: 0px 1px 2px 3px  #ccc;
                   >P{
                       &:nth-of-type(1){
                           margin-top:40px;
                           font-size:30px;
                           color:#000;
                            padding-left:30px;
                       }
                       &:nth-of-type(2){
                           margin-top:50px;
                           margin-bottom:50px;
                           font-size: 30px;
                            padding-left:30px;
                           >span {
                               font-weight: bold;
                           }
                           >input {
                               border:0px;
                                color:#000;
                           }
                       }
                       &:nth-of-type(3){
                           background-color:#4B66AF; 
                           color:#fff;
                           text-align: center;
                           padding-top:30px;
                           width:90%;
                           margin:0 auto;
                           padding-bottom: 30px;
                           border-radius: 10px;
                           margin-bottom: 40px;
                           font-size: 38px;
                       }
                   }
               }
               >p {
                   line-height:40px;
                   padding-bottom: 20px;
                   color:#C3C7CA;
                   padding-left: 20px;
                   padding-right: 20px;
                   >span{
                       &:nth-of-type(1){
                           color: #ED7930;
                       }
                       &:nth-of-type(2){
                           color:#9E6A14;
                       }
                   }
                   >.bold {
                       font-weight: bold;
                   }
               }
           }
           >.transaction {
               position: relative;
               >ul{
                   display: flex;
                   flex-wrap: wrap;
                   border-bottom: 1px solid #ccc;
                   background-color: #fff;
                   >li {
                       box-sizing: border-box;
                       width:50%;
                       border-top:1px solid #ccc;
                       display: flex;
                       justify-content: center;
                       padding-top:30px;
                       padding-bottom:30px;
                       >p {
                           margin-right:10px;
                           margin-top:20px;
                       }
                       >div {
                           > p {
                               &:nth-of-type(1) {
                                   font-size:30px;
                                   color:#000;
                                   margin-bottom:20px;
                               }
                               &:nth-of-type(2) {
                                   color:#ccc;
                                   font-size:28px;
                               }
                           }
                       }
                       &:nth-of-type(1),
                       &:nth-of-type(3) {
                           border-right: 1px solid #ccc;
                       }
                   }
               }
               >.tips {
                   width:96%;
                   margin-left:20px;
                    position: absolute;
                    top:0px;
                    left:0px;
                    z-index:99;
                    border:1px solid #ccc;
                    >p {
                        background-color: #E1E1E1;
                        text-align: center;
                        padding-top:20px;
                        padding-bottom: 20px;
                        font-size: 30px;
                        font-weight: bold;
                        border-bottom: 1px solid #ccc;
                        border-top:2px solid #544628;
                    }
                    >div {
                        background-color:#fff; 
                        padding: 30px 20px;
                        border-bottom: 1px solid #ccc;
                        border-left: 1px solid #ccc;
                        >p {
                            line-height: 40px;
                            &:nth-of-type(2) {
                                margin:10px 20px;
                                color:#958D6B;
                                font-weight: bold;
                            }
                            &:nth-of-type(3) {
                                display: flex;
                                justify-content: space-around;
                                >span {
                                    border:3px solid #ccc;
                                    padding:10px 30px;
                                    border-radius:30px;
                                    &:nth-of-type(2) {
                                        background-color:#A06914;
                                        color:#fff; 
                                    }
                                }
                            }
                        }
                    }
               }
           }
           >.statistics {
               margin-top:20px;
               background-color: #fff;
               margin-bottom: 100px;
               >ul{
                   >li {
                       display: flex;
                       justify-content: space-between;
                       padding:30px 10px;
                       border-bottom: 1px solid #ccc;
                       >p {
                           display: flex;
                           margin-left:10px;
                           flex: 1;
                           justify-content: space-between;
                       }
                   }
               }
           }
       }
   }
</style>

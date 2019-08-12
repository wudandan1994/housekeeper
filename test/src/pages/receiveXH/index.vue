<template>
    <div id="receivables">
        <header>
            <p @click="goBack"><span><van-icon size="16px" name="arrow-left" /></span></p>
            <p>商户收款</p>
           <span></span> 
        </header>
        <div class="container">
            <div class="portrait">
                <div class="head">
                    <img :src="headimg" alt="">
                </div>
                <div class="recommend">
                    <p>
                        <span>{{nickname}}</span>
                        <span><van-icon name="info-o" />{{lev}}</span>
                    </p>
                    <p>{{recommendedcode}}</p>
                </div>
            </div>
           
            <div class="merchant">
                <div class="pay">
                    <p>
                        <span><van-icon name="gold-coin" /></span>
                        <span>设置金额</span>
                    </p>
                    <p>
                        <span>￥</span>
                        <input type="number" v-model="number" @input="change" placeholder="金额为1000-20000">
                    </p>
                    <div class="card" v-show="showCard">
                        <ul>
                            <li>
                                <p>到账储蓄卡：</p>
                                <p><span>{{nickCX}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{cardCX}}</span></p>
                                <router-link tag="p" to="/home/receiveXH/cardCX" class="change">更换<van-icon  name="arrow"  color="#4B66AF" /></router-link>
                            </li>
                             <li>
                                <p>支付信用卡：</p>
                                <p><span>{{nick}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{cardnumber}}</span></p>
                                <router-link tag="p" :to="{query:{type:'2',merchantno:merchantno},path:'/home/receivables/cards'}"  class="change">选择<van-icon  name="arrow"   color="#4B66AF" /></router-link>
                            </li>
                        </ul>
                    </div>
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
                        <p><span><van-icon color="#4B66AF" size="20px" name="gold-coin"/></span></p>
                        <div>
                            <p>我的费率</p>
                            <p>通道费率详细说明</p>
                        </div>
                    </router-link>
                    <li @click="goRecords">
                        <p><span><van-icon color="#4B66AF" size="20px" name="comment"/></span></p>
                        <div>
                            <p>交易查询</p>
                            <p>交易查询详细记录</p>
                        </div>
                    </li>
                    <router-link tag="li" to="/home/receivables/passageway">
                        <p><span><van-icon color="#4B66AF" size="20px" name="expand"/></span></p>
                        <div>
                            <p>通道说明</p>
                            <p>单笔交易限额明细</p>
                        </div>
                    </router-link>
                    <router-link tag="li" to="/home/receiveXH/cardCX">
                        <p><span><van-icon color="#4B66AF" size="20px" name="card"/></span></p>
                        <div>
                            <p>储蓄卡管理</p>
                            <p>修改储蓄卡信息</p>
                        </div>
                    </router-link>
                    
                </ul>
                <!-- <div class="tips" v-show="showTips">
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
                </div> -->
            </div>
             <div class="statistics">
                 <ul>
                     <router-link tag="li" to="/home/news">
                         <span><van-icon name="column" size="20px" color="#4B66AF" /></span>
                         <p><span>操作流程说明</span><span><van-icon name="arrow" /></span></p>   
                     </router-link>
                     <!-- <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>实名认证</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li> -->
                      <!-- <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>我的分润</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li> -->
                      <li @click="goRecords">
                         <span><van-icon name="underway"  size="20px" color="#4B66AF"  /></span>
                         <p><span>商户收款明细</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li>
                      <!-- <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>收款统计</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li> -->
                 </ul>
             </div>
            <footer>
                
            </footer>
        </div>
         <loading :componentload="componentload"></loading>
    </div>
</template>

<script>
import {axiosPost} from '@/lib/http'
import Bank from '@/lib/bank'
import loading from '@/components/loading'
import storage from '@/lib/storage' 
export default {
    components:{
      loading
    },
    data() {
        return {
            showTips:false,
            headimg:"",
            nickname:"",
            level:"",
            recommendedcode:"",
            info:"",
            chMerCode:"",
            number:"",
            showCard:false,
            info:"",
            flag:false,
            nick:"请选择支付信用卡",
            nickCX:"请选择到账储蓄卡",
            cardCX:"",
            cardnumber:"",
            cardInfo:"",
            ordernumber:"",
            componentload:false,
            merchantno:""
        }
    },
    methods:{
        goBack () {
            this.$router.push('/home')
        },
        change(){
              if(this.number.trim().length==0){
                  this.showCard=false
              } else {
                 this.showCard=true
              }
        },

      
        showPay(){
             this.showTips=true
            //  查询商户号，若没有 商户申请，上传图片 ，若有在查询是否有绑定信用卡
            if(this.number.trim().length=="0"){
                return this.$toast("请输入金额")
            } 
            if(Number(this.number)<1000 || Number(this.number)>20000){
                return this.$toast("请输入正确的金额")
            }
            if(this.nick=="请选择支付信用卡" || this.nick=="" || this.nick==undefined){
               return  this.$toast("请先选择支付信用卡")
            }
             if(this.nickCX=="请选择到账储蓄卡" || this.nickCX==""){
               return  this.$toast("请选择到账储蓄卡")
            }
           

            


            this.$router.push({
                path:"/home/receiveXH/payXH",
                query:{
                     info:this.cardInfo,
                    number:this.number,
                    merchantno:this.merchantno
                }
            })
         
            
          
           

            
        },
        searchInfo(){
            axiosPost("/customer/getCustomer")
           .then(function(res){
                if(res.data.success){

                }
              })
           .catch(function(err){
            
        })
     },
     goRecords(){
          axiosPost("/creditCard/getMemberReg")
            .then(res=>{
                if(!res.data.success){
                    this.$toast({
                        message:res.data.message
                    })
                } else {
                    this.chMerCode=res.data.data.chMerCode
                    this.$router.push({
                        path:"/home/collect/payment/records",
                        query:{
                            chMerCode:this.chMerCode
                        }
                    })
                }

            })
            .catch(err=>{
                // console.log(err,"error");
            })
     }

    },
    created () {
        // this.searchInfo()
        this.nickname=this.$store.state.wechat.nickname;
        this.headimg=this.$store.state.wechat.headimg;
        this.lev=this.$store.state.wechat.level;
        this.cardInfo=this.$route.query.params
        this.merchantno=this.$route.query.merchantno
        this.nickCX=storage.get('cxcard')
        this.cardCX=storage.get('cxcardnumber')
        if(this.cardCX){
            this.cardCX=this.cardCX.substr(this.cardCX.length-4,4)
        }
        
        if(this.cardCX){
            this.showCard=true
        }
        console.log(this.cardInfo,"cardInfo")
        if(this.cardInfo ) {
            this.showCard=true
            this.nick=this.cardInfo.bankname
            this.cardnumber=this.cardInfo.cardNo.substr(this.cardInfo.cardNo.length-4,4)
        }

        if(this.lev=='1') {
            this.lev="黄金会员"
        } else if(this.lev=="2"){
            this.lev="钻石会员"
        } else {
            this.lev="免费粉丝"
        }
    },
    mounted () {
        // this.searchInfo()
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
           padding:0 10px;
           box-sizing: border-box;
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
                .head {
                    width:120px;
                    height: 100px;
                    >img {
                        width:100%;
                        border-radius: 50%;
                    }
                }
                >.recommend {
                    margin-left:20px;
                    flex:1;
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
                   .card {
                      ul{
                        //   padding:15px;
                          li{
                              display: flex;
                              padding:10px 15px;
                              justify-content: space-between;
                              .change {
                                  color:#4B66AF;
                              }
                              p {
                                  &:nth-of-type(2){
                                      flex:1;
                                      padding-left:30px;
                                  }
                              }
                          }
                      }  
                   }
                   >P{
                       &:nth-of-type(1){
                           margin-top:40px;
                           font-size:30px;
                           color:#000;
                            padding-left:30px;
                       }
                       &:nth-of-type(2){
                           margin-top:30px;
                           margin-bottom:30px;
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
                           padding-top:20px;
                           width:90%;
                           margin:0 auto;
                           padding-bottom: 30px;
                           border-radius: 10px;
                           margin-bottom: 20px;
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
                   padding:0 20px;
                   >li {
                       display: flex;
                       justify-content: space-between;
                       align-items: center;
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

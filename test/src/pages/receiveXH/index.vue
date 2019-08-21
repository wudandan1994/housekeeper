<template>
    <div id="receive">
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
                    <p class="union">
                        <span><van-icon size="30px" name="http://pay.91dianji.com.cn/up.png" /></span>
                        <span>设置金额</span>
                    </p>
                    <p>
                        <span>￥</span>
                        <input type="number" v-model="number" @input="change"  placeholder="金额为200-20000">
                    </p>
                    <div class="card" v-show="showCard">
                        <ul>
                            <li>
                                <p>到账储蓄卡：</p>
                                <p><span>{{nickCX}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{cardCX}}</span></p>
                                <!-- <router-link tag="p" to="/home/receiveXH/cardCX" class="change">更换<van-icon  name="arrow"  color="#4B66AF" /></router-link> -->
                                <p  @click="getcxcard" class="change">更换<van-icon  name="arrow"  color="#4B66AF" /></p>
                            </li>
                           
                            
                             <li>
                                <p>支付信用卡：</p>
                                <p><span>{{nick}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{cardnumber}}</span></p>
                                <!-- <router-link tag="p" :to="{query:{type:'2',merchantno:merchantno},path:'/home/receivables/cards'}"  class="change">选择<van-icon  name="arrow"   color="#4B66AF" /></router-link> -->
                                <p  @click="getxycard" class="change">选择<van-icon  name="arrow"   color="#4B66AF" /></p>
                            </li>
                           
                           

                        </ul>
                    </div>
                     <p @click="showPay">
                         <span>立即支付</span>
                     </p>
                </div>
                
                <!-- <p><van-icon size="46px" name="http://pay.91dianji.com.cn/paytype.png" /></p> -->
                <img src="http://pay.91dianji.com.cn/paytype.png" alt="" srcset="">
                <p>
                    <span><van-icon name="label"/></span>&nbsp;&nbsp;<b class="bold">商户收款</b>，支付通道新开户需要实名注册，信用卡应与绑定的结算卡户名要一致，<span>如出现没到账请及时更换收款储蓄卡后</span>
                     ，及时联系客服登记核查，感谢您的理解 。
                </p>
            </div>
            <div class="transaction">
                <ul>
                    <router-link tag="li" to="/home/receivables/rate">
                        <p><span><van-icon color="#4B66AF" size="26px" name="http://pay.91dianji.com.cn/dollar.png"/></span></p>
                        <div>
                            <p>我的费率</p>
                            <p>通道费率详细说明</p>
                        </div>
                    </router-link>
                    <li @click="goRecords">
                        <p><span><van-icon color="#4B66AF" size="26px" name="http://pay.91dianji.com.cn/search.png"/></span></p>
                        <div>
                            <p>交易查询</p>
                            <p>交易查询详细记录</p>
                        </div>
                    </li>
                    
                      <router-link tag="li" :to="{path:'/home/receivables/passageway',query:{type:'1'}}" >
                        <p><span><van-icon color="#4B66AF"  size="26px" name="http://pay.91dianji.com.cn/channel.png"/></span></p>
                        <div>
                            <p>通道说明</p>
                            <p>单笔交易限额明细</p>
                        </div>
                    </router-link>

                    <router-link tag="li" to="/home/receiveXH/cardCX">
                        <p><span><van-icon color="#4B66AF" size="26px" name="http://pay.91dianji.com.cn/card.png"/></span></p>
                        <div>
                            <p>储蓄卡管理</p>
                            <p>修改储蓄卡信息</p>
                        </div>
                    </router-link>
                    
                </ul>
               
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
              <div class="covercx" >
                    <van-popup v-model="showxy" position="right" >
                         <div class="action">
                             <van-icon name="add" @click="addcard"  size="26px" color="#4B66AF" />
                             <van-icon name="clear" @click="closexy" size="26px" color="#4B66AF" />
                            <!-- <van-button  to="/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard" round type="primary">添加信用卡</van-button>
                             <van-button @click="closexy" round type="default">关闭</van-button> -->
                        </div>
                         <div class="cards">
                             <ul>
                                 <li @click="payxy(item)" v-for="(item,index) in xylist" :key="index">
                                     <div class="bank">
                                         <p>{{item.payerName}}</p>
                                         <p>{{item.bankNick}}</p>
                                     </div>
                                     <p>{{item.cardNo}}</p> 
                                     <!-- <div class="pay">
                                         <p class="cardnum">{{item.cardNo}}</p>
                                         <van-button @click="payxy(item)" round type="default">去支付</van-button>
                                     </div> -->
                                 </li>
                             </ul>
                         </div>

                    </van-popup>
             </div>

              <div class="covercx" >
                    <van-popup v-model="showcx" position="right" >
                        <div class="action">
                             <van-icon name="add" @click="addcardcx"  size="26px" color="#4B66AF" />
                             <van-icon name="clear" @click="closecx" size="26px" color="#4B66AF" />
                           
                            <!-- <van-button  to="/personalCenter/addcard/UnionPay" round  type="primary">添加储蓄卡</van-button>
                             <van-button @click="closecx" round type="default">关闭</van-button> -->
                        </div>
                         
                         <div class="cards">
                             <ul>
                                 <li @click="paycx(item)" v-for="(item,index) in cxlist" :key="index">
                                     <div class="bank">
                                         <p>{{item.name}}</p>
                                         <p>{{item.bankname}}</p>
                                     </div>
                                     <p>{{item.bankcardno}}</p> 
                                     <!-- <div class="pay">
                                         <p class="cardnum">{{item.bankcardno}}</p>
                                         <van-button @click="paycx(item)" round type="default">到账卡</van-button>
                                     </div> -->
                                 </li>
                             </ul>
                         </div>
                   </van-popup>
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
import { bankCardAttribution } from '../../lib/bankName'
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
            number:"",
            chMerCode:"",
            componentload:false,
            showCard:false,
            nickCX:"请选择到账储蓄卡",
            cardCX:"",
            nick:"请选择支付信用卡",
            cardnumber:"",
            showcx:false,
            showxy:false,
            cxlist:[],
            xylist:[],
            cxinfo:{},
            xyinfo:{}
        }
    },
    methods:{
        goBack () {
            this.$router.push('/home')
        },
        addcard(){
            this.$router.push("/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard")
        },
        addcardcx(){
            this.$router.push("/personalCenter/addcard/UnionPay")
        },
        chanel(){
            this.$toast("敬请期待")
        },
        closecx(){
            this.showcx=false
        },
        payxy(info){
            this.xyinfo=info
            this.showxy=false
            this.nick=this.xyinfo.bankNick
            this.cardnumber=this.xyinfo.cardNo.substr(this.xyinfo.cardNo.length-4,4)
        },
        paycx(info){
            this.cxinfo=info
            this.showcx=false
            // console.log(this.cxinfo,"储蓄卡信息")
            this.nickCX=this.cxinfo.bankname
            this.cardCX=this.cxinfo.bankcardno.substr(this.cxinfo.bankcardno.length-4,4)
        },
        closexy(){
            this.showxy=false
        },
        getcxcard(){
            this.showcx=true
            this.showxy=false
            this.getcardscx()
        },
        getxycard(){
            this.showxy=true
            this.showcx=false
            this.getcardsxy()

        },

        // 信用卡列表
        getcardsxy(){
             axiosPost("/creditCard/getMyCreditCard")
             .then(res=>{
                 if(res.data.success){
                    //  this.xylist=res.data.
                   
                     let arr= res.data.data
                     let arrXun=[]
                     arr.forEach((item,i) => {
                         item.bankNick=bankCardAttribution(item.cardNo).bankName
                         arrXun.push(item)
                     });
                     this.xylist=arrXun
                 }
             })
        },

        // 储蓄卡列表
        getcardscx(){
            axiosPost("/customer/getBankCardByOpenid")
            .then(res=>{
                if(res.data.success){
                    this.cxlist=res.data.data
                } else {
                    this.$toast(res.data.message)
                }
            })
            .catch(err=>{
                this.$toast("登录超时，请重新登录")
            })
        },
        change(){
              if(this.number.trim().length==0){
                  this.showCard=false
              } else {
                 this.showCard=true
              }
        },


      
        showPay(){
            if(this.number.trim().length=="0"){
                return this.$toast("请输入金额")
            } 
            if(Number(this.number)<200){
                return this.$toast("单笔金额200元起")
            }
            // if(Number(this.number)<1000 || Number(this.number)>20000){
            //     return this.$toast("请输入正确的金额")
            // }
            // if(this.nick=="请选择支付信用卡"){
            //     return this.$toast("请选择支付信用卡")
            // }
            //  if(this.nickCX=="请选择到账储蓄卡"){
            //     return this.$toast("请选择到账储蓄卡")
            // }

            this.$router.push({
                path:"/home/receiveXH/payXH",
                query:{
                    number:this.number,
                    cxinfo:this.cxinfo,
                    xyinfo:this.xyinfo
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
   #receive {
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
           .covercx {
               .action {
                   display: flex;
                   justify-content: space-between;
                   .van-button--primary {
                       background-color: #4B66AF;
                       border:1px solid #4B66AF;
                   }
                   .van-button--default {
                       background-color: #ccc;
                       border:1px solid #ccc;
                       width:120px;
                   }

               }
            .van-popup--right {
                padding:15px;
                top:51%;
                right:0;
                left:0;
                bottom:-100%;
            }
            .cards {
                width:100%;
                margin-top:15px;
                height:100%;
                ul {
                    width:100%;
                    height:100%;
                    overflow-y: scroll;
                    padding-bottom: 30px;
                    li {
                        height: 320px;
                        margin-bottom: 20px;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 20px;
                        background: url('http://pay.91dianji.com.cn/bgc5.jpg') center center no-repeat;
                        background-size: 100% 100%;
                        color:#fff;
                        font-weight: bold;
                        padding:30px;
                        >p {
                            margin-top:100px;
                        }
                        .bank ,
                        .pay{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                        .pay {
                            padding-top:120px;
                            .van-button--default{
                                 background: linear-gradient(to bottom ,rgb(228, 200, 137), #8C6E2A );
                            }
                        }
                    }
                }
            }
        }
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
                    height: 120px;
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
               padding-top:20px;
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
                   img {
                       padding-top:20px;
                   }
                   .union {
                       display:flex;
                       align-items: center;
                   }
                   .card {
                      ul{
                        padding-bottom: 20px;
                        
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
            //    >.tips {
            //        width:96%;
            //        margin-left:20px;
            //         position: absolute;
            //         top:0px;
            //         left:0px;
            //         z-index:99;
            //         border:1px solid #ccc;
            //         >p {
            //             background-color: #E1E1E1;
            //             text-align: center;
            //             padding-top:20px;
            //             padding-bottom: 20px;
            //             font-size: 30px;
            //             font-weight: bold;
            //             border-bottom: 1px solid #ccc;
            //             border-top:2px solid #544628;
            //         }
            //         >div {
            //             background-color:#fff; 
            //             padding: 30px 20px;
            //             border-bottom: 1px solid #ccc;
            //             border-left: 1px solid #ccc;
            //             >p {
            //                 line-height: 40px;
            //                 &:nth-of-type(2) {
            //                     margin:10px 20px;
            //                     color:#958D6B;
            //                     font-weight: bold;
            //                 }
            //                 &:nth-of-type(3) {
            //                     display: flex;
            //                     justify-content: space-around;
            //                     >span {
            //                         border:3px solid #ccc;
            //                         padding:10px 30px;
            //                         border-radius:30px;
            //                         &:nth-of-type(2) {
            //                             background-color:#A06914;
            //                             color:#fff; 
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //    }
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

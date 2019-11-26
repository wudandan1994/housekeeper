<template>
    <div id="aisle-housekeeper">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>智能还款</span>
            <router-link tag="span" to="/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard"><i>添卡</i><van-icon name="add" size="24px" color="#fff" /></router-link>
        </header>
        <div class="container">
           <div class="swipe">
                 <div class="top row">
                    <div class="avator"><img :src="headimg" alt=""></div>
                    <div class="name-code">
                          <p>{{vip}}</p>
                         <p>{{nickname}}</p>
                         <p>推荐码：<span>{{promotioncode}}</span></p>
                    </div>
                 </div>
           </div>
           <!-- <div class="personinfo">
               <div class="up">
                   <div class="photo">
                       <img :src="headimg" alt="">
                   </div>
                   <div class="level">
                       <p>微信昵称：<span>{{nickname}}</span></p> 
                       <p>会员等级：<span>{{vip}}</span></p>
                       <p>推荐码：<span>{{promotioncode}}</span></p>
                   </div>
                   <div class="cardsnum">
                       <p>绑卡：{{cardNum}}张</p>
                       <p @click="toolsflag=!toolsflag">常用工具</p>
                   </div>
               </div>
               <div class="down">
                   <div class="nums">
                       <p>还款金额</p>
                       <p v-if="bankinfo.amount===null">未设置</p>
                       <p v-else>{{bankinfo.amount}}</p>
                   </div>
                   <div class="bankname">
                       <p>{{bankinfo.bankname}}</p>
                       <p>免息期：{{bankinfo.free }}天</p>
                   </div>
                   <div class="days">
                       <p>{{bankinfo.day}}天</p>
                       <p>最后宽限期</p>
                   </div>
               </div>
           </div> -->
           <div class="tools" v-show="toolsflag">
               <div class="lists">
                   <div class="setting">
                       <span><van-icon size="20px" color="#9B9B9B" name="setting"/></span>
                       <span>常用工具</span>
                   </div>
                   <div class="list">
                       <ul>
                           <router-link to="/home/budget" tag="li">
                               <p><van-icon size="20px" color="red" name="http://pay.91dianji.com.cn/icon1.png"/></p>
                               <p>预算费用</p>
                           </router-link>
                            <router-link tag="li" :to="{path:'/home/news',query:{title:'还款流程',url:'http://pay.91dianji.com.cn/newpay.jpg'}}">
                               <p><van-icon size="20px" color="red" name="http://pay.91dianji.com.cn/icon2.png"/></p>
                               <p>流程说明</p>
                            </router-link>
                            <router-link to="/home/cardCenter/liftingAmount" tag="li">
                               <p><van-icon size="20px" color="red" name="http://pay.91dianji.com.cn/icon3.png"/></p>
                               <p>信用卡提额</p>
                            </router-link>
                            <router-link to="/home/query" tag="li">
                               <p><van-icon size="20px" color="red" name="http://pay.91dianji.com.cn/icon4.png"/></p>
                               <p>账单查询</p>
                            </router-link>
                            <router-link to="/home/punch" tag="li">
                               <p><van-icon size="20px" color="red" name="http://pay.91dianji.com.cn/icon5.png"/></p>
                               <p>计划列表</p>
                            </router-link>
                            <router-link to="/personalCenter/contactus" tag="li">
                               <p><van-icon size="20px" color="red" name="http://pay.91dianji.com.cn/icon6.png"/></p>
                               <p>在线客服</p>
                            </router-link>
                            <router-link to="/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard" tag="li">
                               <p><van-icon size="20px" color="red" name="http://pay.91dianji.com.cn/icon7.png"/></p>
                               <p>添加信用卡</p>
                            </router-link>
                            <!-- <li>
                               <p><van-icon size="20px" color="red" name="http://pay.91dianji.com.cn/icon8.png"/></p>
                               <p>信用卡编辑</p>
                           </li> -->
                             <router-link tag="li" :to="{path:'/home/news',query:{title:'',url:'http://pay.91dianji.com.cn/banklimit.png'}}">
                               <p><van-icon size="20px" color="red" name="http://pay.91dianji.com.cn/icon9.png"/></p>
                               <p>还款宽限期</p>
                             </router-link>
                             <router-link tag="li" :to="{path:'/home/news',query:{title:'',url:'http://pay.91dianji.com.cn/query.jpg'}}">
                               <p><van-icon size="20px" color="red" name="http://pay.91dianji.com.cn/icon10.png"/></p>
                               <p>信用卡费用</p>
                             </router-link>
                            <router-link tag="li" to="/cancelCard">
                               <p><van-icon size="20px" color="red" name="http://pay.91dianji.com.cn/icon11.png"/></p>
                               <p>信用卡恢复</p>
                            </router-link>
                       </ul>
                   </div>
               </div>
               <div class="delete">
                   <p @click="toolsflag=false"><van-icon name="close" size="34px" color="#fff" /></p>
               </div>
           </div>
           <div class="bind">
               <ul>
                   <li v-for="(item, index) in cardList" :key="index" @click="getfreeday(item)">
                       <div class="top">
                          <div class="bankName">
                              <p>{{item.bankNick}}</p>
                              <p>*<span>{{item.cardNo.substr(item.cardNo.length-4)}}</span></p>
                              <p>
                                  {{item.payerName.replace(1,"*")}}
                              </p>
                              <p>
                                <span @click="unbinding(item)" style="color:#EC171D;">解绑</span>
                              </p>
                          </div>
                          <div class="now">
                              <div>
                                  <!-- <p class="botton">{{amount}}</p> -->
                                  <p> <van-icon color="white" size="20px" name="edit"/></p>
                                  <router-link :to="{path:'/home/changeBill',query:{info:item}}" tag="p">信用卡编辑</router-link>
                              </div>
                              <div class="pay">
                                  <!-- <p class="days">16</p> -->
                                  <div>
                                      <p class="botton">还款日</p>
                                      <p><span>{{new Date().getMonth()+1}}</span>&nbsp;-&nbsp;<span>{{item.duedate}}</span></p>
                                  </div>
                              </div>
                              <p>
                                  <!-- <van-button @click="repayment(index,item)" class="repayment" round type="info">立即还款</van-button> -->
                                  <van-button @click="repayment(index,item)" class="repayment" round type="info">立即还款</van-button>

                              </p>
                          </div>
                       </div>
                       <div class="bottom"  v-if="item.repaycount !== null">
                           <ul>
                               <li>
                                   <p>{{item.realamount}}</p>
                                   <p>还款金额</p>
                               </li>
                                <li>
                                  <p class="gradient">{{item.already}}/{{item.repaycount}}</p>
                                   <p>还款进度</p>
                               </li>
                                <li>
                                   <p>{{item.poundage}}</p>
                                   <p>手续费</p>
                               </li>
                               <li>
                                
                               </li>
                           </ul>
                       </div>
                        <div class="bottom"  v-else>
                           <ul>
                               <li>
                                   <p>未知</p>
                                   <p>还款金额</p>
                               </li>
                                <li>
                                  <p>未知</p>
                                   <p>还款进度</p>
                               </li>
                                <li>
                                   <p>未知</p>
                                   <p>手续费</p>
                               </li>
                               <li>
                                
                               </li>
                           </ul>
                       </div>
                       <div v-show="showpass" @click.capture="showcover" :class="num==index?'cover':''">
                           <div  v-show="num==index"  class="pop">
                               <h3>还款方式</h3>
                                <p>请选择还款方式</p>
                                <div class="small" @click.stop="smallPass(item,'1')">
                                    <van-icon name="http://pay.91dianji.com.cn/smalle.png" size="26px"/>
                                    <div class="middle">
                                          <p>小额通道</p>
                                          <span class="edu">还款金额为2000-30000</span>
                                    </div>
                                    <p> <van-icon name="checked" :color="colors" size="20px"/></p>
                                </div>
                                <div class="large" @click.stop="largePass(item,'2')">
                                    <van-icon name="http://pay.91dianji.com.cn/bige.png" size="26px"/>
                                   <div class="middle">
                                        <p>大额通道&nbsp;&nbsp;<span>预留额度5%起</span></p>
                                        <span class="edu">还款金额为2000-500000</span>
                                   </div>
                                    <p> <van-icon name="checked" :color="colorl" size="20px"/></p>
                                </div>

                                <div class="sure">
                                    <van-button size="large" @click="selectPass" type="info">确定</van-button>
                                </div>
                             </div>
                       </div>
                       
                   </li>
               </ul>
           </div>
         
           <div class="plansdetail">
               <div class="plans">
                   <router-link tag="div" to="/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard"  class="addcard"><van-icon name="plus" />添加信用卡</router-link>
                   <router-link tag="div" to="/home/punch" class="allplans"><van-icon name="send-gift-o" />查看全部计划</router-link>                 
               </div>
                <router-link tag="div" class="manage" to="/cancelCard"><van-icon name="card" /> 信用卡管理</router-link>
           </div>
          
        </div>
    </div>
</template>



<script>
import { axiosPost,axiosGet }  from '../../lib/http'   
import { bankCardAttribution } from '../../lib/bankName'
import bankfree  from '../../lib/bankfree'   

import loading from '@/components/loading'
import storage from '@/lib/storage' 
export default {
     components:{
      loading
    },
    data() {
        return {
            componentload:true,
            bankList:{},
            timerId:null,
            showCardList:false,
            nickname:"",
            vip:"",
            promotioncode:"",
            headimg:"",
            cardList:[],
            bankname:"",
            amount:"",
            num:null,
            showdis:false,
            showpass:false,
            bankcode:'',
            userId:"",
            colors:"",
            colorl:"",
            cardinfo:"",
            number:"",
            cardNum:0,
            toolsflag:false,
            bankinfo:{
                 "bankname":"光大银行",
                 "free":"50",
                 "day":"undefined"
            },
            nick:""
        }
    },
    mounted () {
       
    },
    methods:{
        goBack() {
            this.$router.push("/home")
        },
        // 点击遮盖层，通道隐藏
        showcover(){
            this.showdis=!this.showdis
            this.showpass=false
        },
        // 解绑信用卡
        unbinding(item){
             let that =this
             that.$dialog.confirm({
                    title: '提示',
                    message: '确定要解绑？',
                    confirmButtonText:'是',
                })
                .then(() => {
                    let data={
                       bindId:item.bindId 
                    }
                  axiosPost("/creditCard/deletedCreditCard",data) 
                  .then(function(res){
                      if(!res.data.success){
                          that.$toast({
                              message:res.data.message
                          })
                          return
                      } else {
                          that.getCardList()
                      }
                     
                  })
                  .catch(function(err){

                  })
                }).catch(() => {
                    // on cancel
                });
        },
        smallPass(info,num){
            this.colors="#007130"
            this.colorl=""
            this.showpass=true
            this.cardinfo=info
            this.number=num
        },
        largePass(info,num){
            this.colorl="#00479D"   
            this.colors=""  
            this.showpass=true
            this.cardinfo=info
            this.number=num
        },
         // 确定按钮
        selectPass(){
           if(this.number=="1"){
               this.small(this.cardinfo)
           } else if(this.number=="2"){
               this.large(this.cardinfo)
           } else {
               this.$toast("请先选择还款通道")
           }

        },

        // 查询小额通道是否签约
        small(i){

            let data={
               bankCard: i.cardNo,
               channel:"1"
            }
            axiosPost("/newscpay/bindCardExist",data)
            .then(res=>{
                if(res.data.success){
                    storage.set('channel',"1");
                        this.$router.push({
                        path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                        query:{
                            info:i
                        }
                    })
                } else {
                    this.$router.push({
                        path:"/home/smallAmountSC",
                        query:{
                            info:i,
                            type:"1"
                        }
                    })
                }
            })
                   
            // let data={
            //     bankAccountNo:i.cardNo
            // }
            // axiosPost("/wyfpay/getWyfMerchant",data)
            // .then(res=>{
            //     if(!res.data.success){
            //     // 注册商户
            //     // console.log("去注册商户")
            //     this.$router.push({
            //         path:"/home/smallAmountWYF",
            //         query:{
            //             info:i
            //         }
            //     })
            //     }else {
            //     let subMerchantNo=res.data.data.subMerchantNo
            //     //查询有没有绑卡  
            //         axiosPost("/wyfpay/getBindCardExist",data)
            //         .then(res=>{
            //             if(res.data.success){
            //                 storage.set('channel',"1");
            //                 this.$router.push({
            //                 path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
            //                 query:{
            //                     info:i
            //                 }
            //             })
            //             } else {
            //             //  去绑卡
                        
            //             let info=i
            //             let params={
            //                     bankAccountName:i.payerName,
            //                     certificateNo:i.idCardNo,
            //                     bankAccountNo:i.cardNo,
            //                     mobile:i.phone,
            //                     subMerchantNo:subMerchantNo,
            //                     cvv:i.cvv2,
            //                     bankAccountExpiry:i.month+i.year
            //                 }
            //                 axiosPost("/wyfpay/bindcard",params)
            //                 .then(res=>{
            //                     if(res.data.success){
            //                         storage.set('channel',"1");
            //                         this.$router.push({
            //                             path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
            //                             query:{
            //                                 info:i
            //                             } 
            //                         })
            //                     }else {
            //                         this.$toast(res.data.message)
            //                     }
            //                 })
            //             }
            //         })

            //     }
            // }) 
               
        },
         // 查询大额通道是否签约
        large(i){
            let data={
                bankcardNum:i.cardNo
            }
            axiosPost("/hcpay/getHcOpenCard",data)
            .then(res=>{
                if(res.data.success){
                    let datas={
                        bankCard:i.cardNo
                    }
                      axiosPost("/scpay/bindCardExist",datas)
                      .then(res=>{
                          if(res.data.success){
                            //     storage.set('channel',"2");
                            //     this.$router.push({
                            //         path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                            //         query:{
                            //         info:i
                            //     }
                            // })  

                              let params={
                                    bankCard: i.cardNo,
                                    channel:"2"
                                    }
                                    axiosPost("/newscpay/bindCardExist",params)
                                    .then(res=>{
                                        if(res.data.success){
                                            storage.set('channel',"2");
                                                this.$router.push({
                                                path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                                                query:{
                                                    info:i,
                                                }
                                            })
                                        } else {
                                            this.$router.push({
                                                path:"/home/smallAmountSC",
                                                query:{
                                                    info:i,
                                                    type:"2"
                                                }
                                            })
                                        }
                                    })


                          }else {
                              this.$router.push({
                                  path:"/home/largeAmountSC",
                                  query:{
                                      info:i
                                  }
                              })
                          }
                      })

                } else {
                    axiosPost("/hcpay/getHcMerchant")
                    .then(res=>{
                        if(res.data.success){   // 如果已注册,则直接去发送短信
                            let merchantno=res.data.data.merchantno
                            this.$router.push({
                            path:"/home/largeAmountHC/sendmsgHC",
                            query:{
                                merchantno:merchantno,
                                info:i
                            }
                      })

                        } else {   // 去注册
                            this.$router.push({
                                path:"/home/largeAmountHC",
                                query:{
                                    info:i
                                }
                            })
                        }
                    })
                }
            })
         } ,
       
        repayment(i,item){
            this.num=i
            this.showdis=true
            this.showpass=true
            // this.$router.push({
            //     path:"/home/billDetails",
            //     query:{
            //         i:item
            //     }
            // })
           
        },
        // 查询绑卡列表
        getCardList(){
             axiosPost("/creditCard/getMyCreditCard")
             .then(res=>{
                 if(res.data.success){
                     let arr= res.data.data
                     if(arr.length===0){
                         this.$toast("您还未绑定信用卡")
                     } else {
                          let arrXun=[]
                        arr.forEach((item,i) => {
                            item.bankNick=bankCardAttribution(item.cardNo).bankName
                            arrXun.push(item)
                     });
                     this.cardList=arrXun
                    //  this.getbankname(this.cardList[0])
                     this.cardNum=this.cardList.length
                     }
                    
                 } else {
                     this.$toast(res.data.message)
                 }
             })
             .catch(err=>{

             })
        },

         handleGetAmount(){
            let url = '/customer/getCustomer';
            let params = {
                openid:this.$store.state.wechat.openid,
            };
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    setTimeout(()=>{
                        this.componentload = false;
                    },500)
                    this.nickname = res.data.data.nickname;
                    this.headimg  = res.data.data.photo;
                    this.promotioncode  = res.data.data.promotioncode; 
                   if(res.data.data.level == '0'){
                        this.vip ="免费粉丝";
                    }
                    else if(res.data.data.level == '1'){
                        this.vip ="黄金会员";
                    }else{
                        this.vip = "钻石会员";
                    }
                }else{
                    setTimeout(()=>{
                        this.componentload = false;
                        this.$toast('查询失败')
                    },500)
                }
            }).catch(res =>{
                setTimeout(()=>{
                    this.componentload = false;
                    this.$toast('查询失败')
                },500)
            })
        },
        getbankname(name){
              bankfree.some(item=>{
                if(name.bankNick===item.bankname){
                    this.bankinfo=item
                    this.bankinfo.amount=name.realamount
                }
             })
             if(this.bankinfo.day==="undefined"){
                 this.bankinfo={amount:"未知",day:"未知",bankname:"未知",free:"未知"}
                 this.bankinfo.day="未知"
             }
        },
        getfreeday(item){
            this.getbankname(item)
        }
    },
    created () {
       this.handleGetAmount()
       this.getCardList()
      
    },
    mounted () {
       
    }
}
</script>

<style lang="less" scope>
   #aisle-housekeeper{
       >header {
           background-color: #4965AE;
        //    background-color: #fff;
           color:#fff;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           z-index:999;
           display: flex;
           position: fixed;
           font-size: 28px;
           justify-content: space-between;
           align-items: center;
           >span {
               &:nth-of-type(1) {
                   margin-left: 10px;
               }
               &:nth-of-type(3) {
                   margin-right: 10px;
                   display: flex;
                   align-items: center;
               }
           }
       }
       >.container {
           padding-top:96px;
           width:100%;
           overflow-x: hidden;
           box-sizing: border-box;
        // margin-top:96px;
           padding-bottom: 50px;
           .tools{
                position: fixed;
                top:0px;
                bottom: 0px;
                left:0px;
                right:0px;
                background-color: rgba(0, 0, 0, .5);
                z-index: 999;
                .lists {
                    width:90%;
                    background-color: #fff;
                    margin-top:30%;
                    margin-left:auto;
                    margin-right: auto;
                    border-radius: 15px;
                    .setting {
                        background-color: #EDEDED;
                        height:100px;
                        display: flex;
                        align-items: center;
                        text-align: center;
                        padding-left:40%;
                        span{
                            &:nth-of-type(2){
                                color:#000;
                                padding-left:20px;
                                font-size: 30px;
                            }
                        }
                    }
                    .list{
                        ul{
                            padding:17px;
                            display: flex;
                            flex-wrap: wrap;
                            justify-items: center;
                            li{
                                width:25%;
                                text-align: center;
                                border-bottom: 1px solid #ccc;
                                padding-top:15px;
                                p{
                                    &:nth-of-type(2){
                                        padding:25px 0px 35px 0px;
                                    }
                                }
                                &:nth-of-type(9),
                                &:nth-of-type(10),
                                &:nth-of-type(11){
                                    border:none;
                                }

                            }
                        }
                    }
                }
                .delete {
                    margin-top:80px;
                    p{
                        text-align: center;
                    }
                }
           }
           .van-button--normal {
               font-size: 34px;
           }
           >.swipe {
               width:100%;
            //    height:200px;
               font-size: 22px;
               margin-bottom:15px;
               box-sizing: border-box;
               .top{
                    height: 120px;
                    padding:15px 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                     background: linear-gradient(to bottom ,rgb(228, 200, 137), #8C6E2A );
                    color:#fff;
                    margin:20px;
                    border-radius: 15px;
                    box-shadow:1px 12px 3px #ccc ;
              .avator{
                  height: 120px;
                  width:  120px;
                  box-sizing: border-box;
                  >img{
                      width: 100%;
                      border-radius: 50%;
                  }
              }
            
              .name-code{
                  flex:1;
                  height: 100%;
                  margin-top:10px;
                  padding-left:30px;
                  >p {
                      font-weight: bold;
                      &:nth-of-type(2){
                        padding:15px 0px;
                      }
                  }
                 
                  .name{
                      height: 50px;
                      margin-top: 10px;
                      font-size: 40px;
                      font-weight: 700;
                       color:#000;
                  }
                  .unset{
                      width: 100%;
                      height: 50px;
                      margin-top: 5px;
                      font-size: 28px;
                      color:#000; 
                      >div{
                        width: auto;
                        border: solid 0.02rem #ccc;
                        border-radius: 20px; 
                        padding: 5px 20px;
                      }
                  }
              }
          }
          .operator {
              margin-right:30px;
          }
           }
           .personinfo {
               width:94%;
               border:2px solid #1890FF;
               height:350px;
               box-sizing: border-box;
               border-radius: 15px;
               background-color: #E7F3FF;
               margin-top:30px;
               margin-left:3%;
               box-sizing: border-box;
               overflow-x: hidden;
               .up {
                   width:100%;
                   height:200px;
                   display: flex;
                   align-items: center;
                   justify-content: space-around;
                   border-bottom: 1px solid #1890FF;
                   .photo {
                       width:150px;
                       img {
                           width:100%;
                           border-radius: 50%;
                       }
                   }
                   .level{
                       margin-left:-50px;
                       p{
                           &:nth-of-type(2){
                               padding:16px 0px;
                           }
                           color:#000;
                           span{
                               color:#999;
                           }
                       }
                   }
                   .cardsnum {
                       p{
                           &:nth-of-type(2){
                               background-color: #223BA8;
                               padding:10px 14px;
                               color:#fff;
                               margin-top:15px;
                           }
                       }
                   }
               }
               .down{
                   display: flex;
                   justify-content: space-around;
                   align-items: center;
                   p {
                       margin-top:30px;
                   }
               }
           }
            .bind {
                box-sizing: border-box;
                 justify-content: space-between;
                 height: 850px;
                 overflow-y: scroll;
              >ul{
                  padding:30px;
                   justify-content: space-between;
                //    overflow-y: scroll;
                  >li {
                      position: relative;
                      width:100%;
                      .cover {
                          position: fixed;
                          top:0px;
                          bottom: 0px;
                          left:0px;
                          right:0px;
                          background-color: rgba(0, 0, 0, .5);
                          z-index: 999;
                          .pop {
                          position: absolute;
                          top:30%;
                          left:9%;
                          width: 600px;
                          padding:10px;
                          background-color: #fff;
                          border:1px solid #ccc;
                          color:#000;
                          z-index: 999;
                          border-radius: 15px;
                          h3 {
                              text-align: center;
                              font-weight: bold;
                              font-size: 34px;
                              padding:30px 0px 15px 0px;
                          }
                          >p {
                              text-align: center;
                              padding:18px 0px;
                              border-bottom: 1px solid #ccc;
                              color:#808080;
                          }
                          .sure {
                              padding:30px;
                          }
                          .van-button--info {
                                background: linear-gradient(to right,#D8B56D, #886929 );
                                height: 80px;
                                line-height: 80px;
                          }
                          >.small ,
                           .large {
                              display: flex;
                              justify-content: space-between;
                              padding-bottom: 20px;
                              align-items: center;
                              z-index: 999;
                              background-color: #fff;
                              padding:15px;
                              .middle {
                                  flex:1;
                                  padding-left:20px;
                                  padding-bottom: 10px;
                                  span {
                                      font-size: 24px;
                                  }
                                  .edu {
                                      color:#BCB291;
                                      background-color: rgba(223, 219, 191, .2);
                                  }
                              }
                              p {
                                  font-size: 32px;
                                  font-weight: bold;
                                  padding: 25px 0;
                                  span{
                                      font-weight: normal;
                                      font-size: 26px;
                                      color:#808080;
                                  }
                              }
                          }
                          .small {
                              border-bottom: 1px solid #ccc;
                          }
                           .large {
                               margin-top:5px;
                           }
                      }
                      }
                      color:#fff;
                    //   padding:10px;
                       box-sizing: border-box;
                       margin-bottom: 15px;
                    //    background-image:url("http://pay.91dianji.com.cn/gd.jpg");
                     &:nth-of-type(10n+1){
                         background-image: url("http://pay.91dianji.com.cn/bgc5.jpg")
                     }
                      &:nth-of-type(10n+2){
                         background-image: url("http://pay.91dianji.com.cn/bgc6.jpg")
                     }
                     &:nth-of-type(10n+3){
                         background-image: url("http://pay.91dianji.com.cn/bgc3.jpg")
                     }
                      &:nth-of-type(10n+4){
                         background-image: url("http://pay.91dianji.com.cn/bgc7.jpg")
                     }
                      &:nth-of-type(10n+5){
                         background-image: url("http://pay.91dianji.com.cn/bgc8.jpg")
                     }
                      &:nth-of-type(10n+6){
                         background-image: url("http://pay.91dianji.com.cn/bgc9.jpg")
                     }
                      &:nth-of-type(10n+7){
                         background-image: url("http://pay.91dianji.com.cn/bgc2.jpg")
                     }
                      &:nth-of-type(10n+8){
                         background-image: url("http://pay.91dianji.com.cn/bgc1.jpg")
                     }
                      &:nth-of-type(10n+9){
                         background-image: url("http://pay.91dianji.com.cn/bgc4.jpg")
                     }
                      &:nth-of-type(10n+10){
                         background-image: url("http://pay.91dianji.com.cn/bgc10.jpg")
                     }
                        height: 410px;
                        background-repeat: no-repeat;
                       background-size:100%;
                       >.top {
                           padding-bottom: 150px;
                        //    padding-top:10px;
                           .bankName {
                          display: flex;
                          justify-content: space-around;
                          align-items: center;
                          margin-bottom: 15px;
                          background-color: rgba(0, 0, 0, .2);
                          padding:20px 0px;
                          margin-top:8px;
                            .van-dialog .van-button{
                                height: 80px;
                              }
                            .van-dialog .van-button {
                                 border: 1px solid #4965AE;
                                }
                            .van-dialog,
                            .van-dialog__message,
                            .van-button {
                                font-size: 30px;
                            }
                             .van-button--default{
                                    background-color: #4965AE;
                                }
                             .van-button .van-button--default .van-button--large .van-dialog__confirm .van-hairline--left{
                                height:70px;
                            }
                        }
                          }
                      .bottom {
                          position: absolute;
                          bottom: 0px;
                          left:0px;
                          right:0px;
                          >ul{
                              display: flex;
                              justify-content: space-around;
                              >li {
                                  width:25%;
                                  text-align: center;
                                  margin-bottom: 15px;
                                  color:#000;
                                  padding-bottom: 30px;
                                  .van-icon--image {
                                      font-size: 40px;
                                  }
                                  >p {
                                      color:#fff;
                                      &:nth-of-type(1){
                                          margin-bottom:30px;
                                      }
                                      &:nth-of-type(2){
                                          margin-top:10px;
                                      }
                                      &.gradient{
                                         background: -webkit-gradient(linear, left top, right top, from(#D3B773), color-stop(170%, #553400));
                                        background: linear-gradient(to right, #D3B773 0%, #553400 170%);
                                        padding: 8px 0px;
                                        border-radius: 15px;
                                      }
                                  }
                              }
                          }
                      }
                      .now {
                          display: flex;
                          justify-content: space-around;
                          align-items: center;
                          padding-top:40px;
                          >div{
                              &:nth-of-type(1){
                                >p{
                                    &:nth-of-type(1){
                                        margin-top: -5px;
                                        margin-left:30px;
                                    }
                                }
                              }
                          }
                          >.pay {
                              display: flex;
                              >.days {
                                  font-size: 38px;
                                  font-weight: bold;
                                  margin-right: 10px;
                                  margin-top:10px;
                              }
                          }
                          .repayment {
                            //   padding:5px 10px;
                            height: 60px;
                            background: linear-gradient(to right,#D9B36C,#876A26  );
                            color:#593303;
                            font-size: 24px;
                          }
                          .botton {
                              margin-bottom: 10px;
                          }
                      }
                  }
              }
          }
           >.plan {
               margin:20px;
               >p {
                   >span {
                   &:nth-of-type(1){
                        display:line-block;
                        width:5px;
                        background-color:#A89749; 
                   }
                 }
               }
           }
           >.example {
               margin:20px;
               >img {
                   width:100%;
               }
           }
           >.plansdetail {
            //    width: 88%;
            //    height: auto;
            //    margin: auto;
            //    display: flex;
            //    display: -webkit-flex;
            //    justify-content: space-between;
            //    -webkit-justify-content: space-between;
            // position: fixed;
            // bottom:0;
            // right:30px;
            // left:30px;
            width:100%;
            box-sizing: border-box;
            padding:0 20px;
            margin-top:30px;
            .plans {
                width:100%;
                display: flex;
                justify-content: space-between;
                .allplans,
                .addcard {
                    font-size: 32px;
                }
                div {
                    width:49%;
                    text-align: center;
                    background-color: #ccc;
                    padding:16px 0px;
                    border-right: 1% dotted #fff;
                    background-color: #ccc;
                    color:#D2AD66;
                    border-radius: 20px;
                    padding:25px 0px;
                }
                .addcard {
                     border-right: 1px dotted #fff;
                }
            }
            .manage {
                width:100%;
                margin-top:25px;
                padding:15px 0px;
                text-align: center;
                background-color: #ccc;
                color:#D2AD66;
                 border-radius: 20px;
                 font-size: 32px;
                 padding:25px 0px;
            }
           }
       }
   }
</style>

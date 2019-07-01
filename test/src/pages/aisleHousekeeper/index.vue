<template>
    <div id="credit-housekeeper">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>信用卡管家</span>
            <span></span>
        </header>
        <div class="container">
           <div class="swipe">
                 <div class="top row">
                    <div class="avator"><img :src="headimg" alt=""></div>
                    <div class="name-code">
                        <div class="name start-center">
                            <span>{{nickname}}</span>&nbsp;&nbsp;&nbsp;
                            <span>{{vip}}</span>
                        </div>
                        <div class="unset start-center">
                           <p>推荐码：<span>{{promotioncode}}</span></p>
                         </div>
                    </div>
                     <!-- <div  class="operator end-center">
                         <span>绑卡：<span>{{cardNum}}</span>张</span>
                     </div> -->
                 </div>
               
           </div>
           <div class="bind">
               <ul>
                   <li v-for="(item, index) in cardList" :key="index">
                       <div class="top">
                          <div class="bankName">
                              <p>{{item.bankNick}}</p>
                              <p>*<span>{{item.cardNo.substr(item.cardNo.length-4)}}</span></p>
                              <p>
                                  {{item.payerName.replace(1,"*")}}
                              </p>
                              <p>
                                 <!-- <van-button @click="unbinding(item)" round type="default">解绑</van-button>   -->
                                <span @click="unbinding(item)">解绑</span>
                              </p>
                          </div>
                          <div class="now">
                              <div>
                                  <p class="botton">{{amount}}</p>
                                   <p>本期账单</p>
                              </div>
                              <div class="pay">
                                  <!-- <p class="days">16</p> -->
                                  <div>
                                      <p class="botton">还款日</p>
                                      <!-- <p><span>{{String(new Date().getMonth()+1)+-&nbsp;+item.duedate}}</span></p> -->
                                      <p><span>{{new Date().getMonth()+1}}</span>&nbsp;-&nbsp;<span>{{item.duedate}}</span></p>
                                  </div>
                              </div>
                              <p>
                                  <van-button @click="repayment(index)" round type="info">立即还款</van-button>
                              </p>
                          </div>
                       </div>
                       <div class="bottom">
                           <ul>
                               <li>
                                   <p>{{item.realamount}}</p>
                                    <p>还款金额</p>
                               </li>
                               <li>
                                    <p v-if="item.state=='0'">待执行</p>
                                    <p v-if="item.state=='1'">已成功</p>
                                    <p v-if="item.state=='2'">已取消</p>
                                    <p v-if="item.state=='3'">进行中</p>
                                    <p v-if="item.state=='4'">失败</p>
                                    <p>还款状态</p>
                               </li>

                                <li>
                                   <p>{{item.repaycount}}</p>
                                   <p>还款笔数</p>
                               </li>
                                <li>
                                   <p>{{item.poundage}}</p>
                                   <p>手续费</p>
                               </li>
                               <li>
                                
                               </li>
                           </ul>
                       </div>
                       <div v-show="showpass" @click.capture="showcover" :class="num==index?'cover':''">
                           <div  v-show="num==index"  class="pop">
                                <div class="small" @click.stop="smallPass(item)">
                                    <van-icon name="http://pay.91dianji.com.cn/putong.png" size="40px"/>
                                    <p>小额通道&nbsp;&nbsp;<span>(还款金额低于20000)</span></p>
                                    <p> <van-icon name="arrow" size="30px"/></p>
                                </div>
                                <div class="large" @click.stop="largePass(item)">
                                        <van-icon name="http://pay.91dianji.com.cn/dae.png" size="40px"/>
                                        <p>大额通道</p>
                                        <p> <van-icon name="arrow" size="30px"/></p>
                                </div>
                                 <div class="large" @click.stop="thirdPass(item)">
                                        <van-icon name="http://pay.91dianji.com.cn/dae.png" size="40px"/>
                                        <p>智能通道</p>
                                        <p> <van-icon name="arrow" size="30px"/></p>
                                </div>
                             </div>
                       </div>
                       
                   </li>
               </ul>
           </div>
         
           <div class="detail">
                <van-button  plain to="/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard" size="normal" type="default">添加信用卡</van-button>
                <van-button plain to="/home/punch" size="normal" type="default">查看全部计划</van-button>
           </div>
          
        </div>
    </div>
</template>



<script>
import { axiosPost } from '../../lib/http'
import { bankCardAttribution } from '../../lib/bankName'
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
            showpass:false
        }
    },
    mounted () {
        // this.amount=storage.get("amount")
    },
    methods:{
        goBack() {
            this.$router.push('/home/creditHousekeeper')
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
        // 查询小额通道是否签约
        smallPass(i){
            let data={
               bindId:i.bindId 
            }
             axiosPost("/creditCard/getEsicashExist",data)
             .then(res=>{
                 if(!res.data.success){
                     this.$router.push({
                         path:"/home/insertEsiCash",
                         query:{info:i}
                     })
                   
                 } else {
                       storage.set('channel',"1");
                     this.$router.push({
                         path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                         query:{
                             info:i
                         }
                     })
                 }
             })
             .catch(err=>{
                //  console.log(err)
                //  if(!err.data.success){
                //       this.$router.push({
                //     path:"/home/insertEsiCash",
                //     query:{info:i}
                //    })
                //  }
             })
        },
         // 查询大额通道是否签约
        largePass(i){
             let data={                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
               bindId:i.bindId 
            }
             axiosPost("/vtdcreditCard/getEnterNet",data)
             .then(res=>{
                  if(res.data.success === false){
                     this.$router.push({
                         path:"/home/largeAmount",
                         query:{
                             info:i
                          }
                     })
                 } else  {
                     if(res.data.data.user_no && res.data.data.state==="0"){
                        this.$router.push({
                            path:"/home/active",
                            query:{
                                user:res.data.data.user_no,
                                info:i
                            }
                        })

                    }  else {
                        storage.set('channel',"2");
                        this.$router.push({
                            path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                            query:{
                                info:i
                            }
                        })
                    }
                    } 
             })
             .catch(err=>{
               
             })
        },
        // 智能通道是否签约
        thirdPass(i){
            // 查询是否绑卡
             axiosPost("/dhcreditCard/getDHBindExist")
             .then(res=>{
                 console.log(res,"是否绑卡")
                 if(res.data.success) {



                 } else { 

                    // 查询是否签约
                     axiosPost("/dhcreditCard/getDHRegisterExist")
                     .then(res=>{
                         if(res.data.success){
                            //  注册
                            let  data={
                               userName: i.payerName,
                               certificateNum:i.idCardNo
                            }
                             axiosPost("/dhcreditCard/getDHRegisterExist",data)
                             .then(res=>{
                                //  userid   
                                 console.log(res)
                                 if(res.data.success){
                                    //  绑卡
                                    // let userId=
                                    let params={
                                      userId,
                                      cardNum:i.cardNo,
                                      userName:i.payerName,
                                      certificateNum:i.idCardNo,
                                      mobile:i.phone
                                    }
                                    axiosPost("/dhcreditCard/dhBind",params)
                                    .then(res=>{
                                        
                                    })
                                    .catch(err=>{

                                    })


                                 }

                             })
                             .catch(err=>{

                             })


                         } else {
                            //  绑卡

                         }
                     })


                     
                 }
                 
             })

        },

        repayment(i){
            this.num=i
            this.showdis=true
            this.showpass=true
           
        },
        // 查询绑卡列表
        getCardList(){
             axiosPost("/creditCard/getMyCreditCard")
             .then(res=>{
                 if(res.data.success){
                     let arr= res.data.data
                     let arrXun=[]
                     arr.forEach((item,i) => {
                         item.bankNick=bankCardAttribution(item.cardNo).bankName
                         arrXun.push(item)
                     });
                     this.cardList=arrXun
                    //  this.cardNum=this.cardList.length
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
                        this.vip ="白金会员";
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
        }
    },
    created () {
       this.handleGetAmount()
       this.getCardList()
    }
}
</script>

<style lang="less" scope>
   #credit-housekeeper{
       >header {
           background-color: #4965AE;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           z-index:999;
           display: flex;
           position: fixed;
           font-size: 28px;
           justify-content: space-between;
           >span {
               &:nth-of-type(1) {
                   margin-left: 10px;
               }
               &:nth-of-type(3) {
                   margin-right: 10px;
               }
           }
       }
       >.container {
           padding-top:96px;
           padding-bottom: 50px;
           .van-button--normal {
               font-size: 34px;
           }
           >.swipe {
               width:100%;
               height:200px;
               font-size: 28px;
               margin-bottom:15px;
               .top{
                   padding-top:15px;
                    width: 90%;
                    height: 120px;
                    margin-left: auto;
                    margin-right: auto;
              .avator{
                  width: 18%;
                  height: 100%;
                  >img{
                      width: 120px;
                      height: 120px;
                      border-radius: 50%;
                  }
              }
              .name-code{
                  width: 72%;
                  margin-left: 15px;
                  height: 100%;
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
            .bind {
                box-sizing: border-box;
              >ul{
                  padding:30px;
                  >li {
                      position: relative;
                      width:100%;
                      border-radius: 10px;
                      .cover {
                          position: fixed;
                          top:0px;
                          bottom: 0px;
                          left:0px;
                          right:0px;
                          background-color: rgba(0, 0, 0, .5);
                          z-index: 99;
                          .pop {
                          position: absolute;
                          top:40%;
                          left:6%;
                          width: 600px;
                          padding:10px;
                          background-color: #fff;
                          border:1px solid #ccc;
                            z-index: 999;
                          >.small ,
                           .large {
                              display: flex;
                              justify-content: space-between;
                              padding-bottom: 20px;
                              align-items: center;
                              z-index: 999;
                              background-color: #fff;
                              >p {
                                  font-size: 32px;
                                  color:#4965AE;
                                  font-weight: bold;
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
                      padding:10px;
                       box-sizing: border-box;
                       margin-bottom: 15px;
                       background-image:url("http://pay.91dianji.com.cn/big2.png");
                        height: 350px;
                        background-repeat: no-repeat;
                       background-size:100%;
                       >.top {
                           padding-bottom: 150px;
                           padding-top:10px;
                           .bankName {
                          display: flex;
                          justify-content: space-around;
                          align-items: center;
                          margin-bottom: 15px;
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
                        //   background-color: rgba(0, 0, 0, .2);
                          >ul{
                              display: flex;
                              justify-content: space-around;
                              >li {
                                  width:20%;
                                  text-align: center;
                                  margin-bottom: 15px;
                                  color:#000;
                                      padding-bottom: 13px;
                                  .van-icon--image {
                                      font-size: 40px;
                                  }
                                  >p {
                                      color:#fff;
                                      &:nth-of-type(1){
                                          margin-top:20px;
                                          margin-bottom:10px;
                                      }
                                      &:nth-of-type(2){
                                          margin-bottom: 20px;
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
                          >.pay {
                              display: flex;
                              >.days {
                                  font-size: 38px;
                                  font-weight: bold;
                                  margin-right: 10px;
                                  margin-top:10px;
                              }
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
           >.detail {
               box-sizing: border-box;
               margin-left: 50px;
               padding:0 20px;
               display: flex;
               justify-content: space-between;
               >button {
                   &:nth-of-type(1){
                       margin-right:20px;
                   }
               }
               .van-button--default {
                   height:60px;
                   font-size: 30px;
                   background-color: #4965AE;
               }
           }
       }
   }
</style>

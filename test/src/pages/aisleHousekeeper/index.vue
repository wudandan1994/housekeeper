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
                          <p>{{vip}}</p>
                         <p>{{nickname}}</p>
                         <p>推荐码：<span>{{promotioncode}}</span></p>
                    </div>
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
                                      <p><span>{{new Date().getMonth()+1}}</span>&nbsp;-&nbsp;<span>{{item.duedate}}</span></p>
                                  </div>
                              </div>
                              <p>
                                  <van-button @click="repayment(index)" class="repayment" round type="info">立即还款</van-button>
                              </p>
                          </div>
                       </div>
                       <div class="bottom"  v-if="item.repaycount !== null">
                           <ul>
                               <li>
                                   <p>{{item.realamount}}</p>
                                   <p>还款金额</p>
                               </li>
                               <!-- <li>
                                    <p v-if="item.state=='0'">待执行</p>
                                    <p v-if="item.state=='1'">已成功</p>
                                    <p v-if="item.state=='2'">已取消</p>
                                    <p v-if="item.state=='3'">进行中</p>
                                    <p v-if="item.state=='4'">失败</p>
                                    <p>还款状态</p>
                               </li> -->

                                <li>
                                   <!-- <p>{{item.repaycount}}</p> -->
                                  <p>{{item.already}}/{{item.repaycount}}</p>
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
                       <div v-show="showpass" @click.capture="showcover" :class="num==index?'cover':''">
                           <div  v-show="num==index"  class="pop">
                               <h3>还款方式</h3>
                                <p>请选择还款方式</p>
                                <div class="small" @click.stop="smallPass(item,'1')">
                                    <van-icon name="http://pay.91dianji.com.cn/smalle.png" size="26px"/>
                                    <div class="middle">
                                          <p>小额通道</p>
                                          <span class="edu">还款金额为2000-20000</span>
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


                                 <!-- <div class="small" @click.stop="thirdPass(item)">
                                        <van-icon name="http://pay.91dianji.com.cn/dae.png" size="40px"/>
                                        <p>小额通道&nbsp;&nbsp;<span>(还款金额低于20000)</span></p>
                                        <p> <van-icon name="arrow" size="30px"/></p>
                                </div> -->
                                
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
            number:""
        }
    },
    mounted () {
        // this.amount=storage.get("amount")
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
               bindId:i.bindId 
            }
             axiosPost("/creditCard/getEsicashExist",data)     // 查询是否签约  通道一
             .then(res=>{
                 if(!res.data.success){
                     this.$router.push({
                         path:"/home/insertEsiCash",
                         query:{info:i}
                     })
                   
                 } else {
                      let params={
                                bankCardNo:i.cardNo,
                                channel:"1"
                            }
                         axiosPost("/wfpay/getBindCardExist",params)
                         .then(res=>{
                                if(res.data.data==null || res.data.data.state!="1"){ //去签约    通道二
                                     this.$router.push({
                                        path:"/home/largeWFxe",
                                        query:{
                                            info:i
                                        }
                                  })
                                } else {
                            //         let datas={
                            //             cardId:i.cardNo
                            //         }
                            //         axiosPost("/fwspay/getFwsMerchant",datas)   // 查询有没有商户号   通道三
                            //         .then(res=>{
                            //             console.log(res,"第三个通道查询结果")
                                       
                            //        if(res.data.success){ 

                            //              let subMerchId=res.data.data.subMerchId

                            //            axiosPost("/fwspay/getBindCardExist",datas)    // 继续查询有没有绑卡
                            //            .then(res=>{
                            //                console.log(res,"查询是否绑卡")
                            //                if(res.data.success){
                                                storage.set('channel',"1");
                                            this.$router.push({
                                                path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                                                query:{
                                                    info:i
                                                }
                                            })
                            //                } else {
                            //                    this.$router.push({
                            //                        path:"/home/easyPay/easycard",
                            //                        query:{
                            //                            info:i,
                            //                            subMerchId,
                            //                        }
                            //                    })
                            //                }
                            //            })

                            //             }  else {
                            //                 console.log("查询失败了，因为没有签约")
                            //                 this.$router.push({
                            //                     path:"/home/easypay",
                            //                     query:{
                            //                         info:i
                            //                     }
                            //                 })
                            //             }
                            //         })
                               }
                         })
                         .catch(err=>{
                            this.$toast("登录失败")
                         })
                    }
             })
             .catch(err=>{
                 this.$toast("登录失败")
             })
        },
         // 查询大额通道是否签约
        large(i){

            let data={
                accountNumber:i.cardNo
            }
                axiosPost("/zypay/getZYPayExist",data)
                .then(res=>{
                    if(!res.data.success && res.data.code=='100'){
                        this.$router.push({
                            path:"/home/largeZY",
                            query:{
                                info:i
                            }
                        })
                    } else {
                            let params={
                                bankCardNo:i.cardNo,
                                channel:"2"
                            }
                         axiosPost("/wfpay/getBindCardExist",params)
                         .then(res=>{
                            //  console.log(res,'resultWF')
                            if(res.data.success){

                                if(res.data.data==null || res.data.data.state!="1"){ //去签约
                                     this.$router.push({
                                        path:"/home/largeWFcard",
                                        query:{
                                            info:i
                                        }
                                  })
                                } else {
                                     storage.set('channel',"2");
                                     this.$router.push({
                                        path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                                        query:{
                                            info:i
                                        }
                                    })  
                                }

                            } else {
                                this.$toast(res.data.message)
                            }
                         })
                         .catch(err=>{
                            this.$toast("登录超时，请重新登录")
                         })
                     }
                })


         } ,
       
       
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
           width:100%;
           overflow-x: hidden;
           box-sizing: border-box;
        // margin-top:96px;
           padding-bottom: 50px;
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
                          z-index: 99;
                          .pop {
                          position: absolute;
                          top:40%;
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
                      padding:10px;
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
                                  }
                                  &:nth-of-type(2){
                                       >p:nth-child(1){
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

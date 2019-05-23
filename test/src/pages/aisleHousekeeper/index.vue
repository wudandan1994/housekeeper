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
                            <span>{{nickname}}</span>
                            <span>{{vip}}</span>
                        </div>
                        <div class="unset start-center">
                           <p>推荐码：<span>{{promotioncode}}</span></p>
                         </div>
                    </div>
                 </div>
                <div  class="operator end-center">
                     <span>绑卡：<span>{{cardNum}}</span>张</span>
                </div>
           </div>
           <div class="bind">
               <ul >
                   <li v-for="(item, index) in cardList" :key="index">
                       <div class="top">
                          <div class="bankName">
                              <p>{{item.bankNick}}</p>
                              <p>*<span>{{item.cardNo.substr(item.cardNo.length-4)}}</span></p>
                              <p>
                                  {{item.payerName.replace(1,"*")}}
                              </p>
                          </div>
                          <div class="now">
                              <div>
                                  <p class="botton">未添加</p>
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
                                  <van-button @click="repayment(item)" round type="info">立即还款</van-button>
                              </p>
                          </div>
                       </div>
                       <div class="bottom">
                           <ul>
                               <li>
                                   <p>未知</p>
                                   <p>还款金额</p>
                               </li>
                               <li>
                                   <p>智能还款</p>
                                   <p>还款模式</p>
                               </li>
                                <li>
                                   <p>未知</p>
                                   <p>还款笔数</p>
                               </li>
                                <li>
                                   <p>未知</p>
                                   <p>手续费</p>
                               </li>
                               <!-- <li>
                                   <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
                               </li> -->
                           </ul>
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
            cardNum:'',
            // cardname:"",
            bankname:""
        }
    },
    mounted () {
        
    },
    methods:{
        goBack() {
            this.$router.push('/home/creditHousekeeper')
        },

        repayment(item){
            this.$router.push({
                path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                query:{
                    info:item
                }
            })
        },
        // 查询绑卡列表
        getCardList(){
             axiosPost("/creditCard/getMyCreditCard")
             .then(res=>{
                 if(res.data.success){
                    //  console.log(res)
                     let arr= res.data.data
                     let arrXun=[]
                     arr.forEach((item,i) => {
                        //  console.log(item)
                         item.bankNick=bankCardAttribution(item.cardNo).bankName
                        //  console.log(item)
                         arrXun.push(item)
                     });
                     this.cardList=arrXun
                     this.cardNum=this.cardList.length
                 }
             })
             .catch(err=>{

             })
        },


        // repay(item){
        //     this.$router.push({
        //         path:"/home/creditHousekeeper/aisleHousekeeper/repayment",
        //         query:{
        //             info:item
        //         }
        //     })
        // },
        // getBankList(){
        //     let that=this
        //     axiosPost("/creditCard/getBankCardbindList")
        //     .then(function(res){
        //         that.showCardList=true
        //         if(!res.data.success){
        //             that.$toast=({
        //                 message:res.data.message
        //             })
        //         }
        //         let list=JSON.parse(res.data.data.rt5_bindCardList)
        //         if(!res.data.success){
        //             that.$toast({
        //                 message:res.data.message
        //             })
        //         }
        //         that.bankList=list
        //     })
        //     .catch(function(err){
        //         // console.log(err,"error")
        //     })
        // },
         handleGetAmount(){
            let url = '/customer/getCustomer';
            let params = {
                openid:this.$store.state.wechat.openid,
            };
            axiosPost(url,params).then(res =>{
                // console.log('查询个人设置成功',res)
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
           background-color: #4B66AF;
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
                    //   border:2px solid #ccc;
                    //   background-color:#4AA3E2;
                      color:#fff;
                      padding:10px;
                       box-sizing: border-box;
                       margin-bottom: 15px;
                       background-image:url("http://pay.91dianji.com.cn/big2.png");
                       background-size:100%;
                       >.top {
                           padding-bottom: 150px;
                           padding-top:10px;
                           .bankName {
                          display: flex;
                          justify-content: space-around;
                          margin-bottom: 15px;
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
                          padding-top:15px;
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
                //    width:50%;
                   font-size: 30px;
               }
           
           }
       }
   }
</style>

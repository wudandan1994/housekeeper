<template>
    <div id="payment">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>快捷支付</span>
            <span @click="showCard"><van-icon name="card"/>选卡</span>
        </header>
        <div class="container">
            <div class="popup">
                <van-popup v-model="show" :overlay="true" >
                     <div class="pop">
                        
                         <div class="binding" v-show="showBinding">
                              <p>您还没有绑定信用卡</p>
                              <div class="butt">
                                  <!-- <van-button round  size="normal"  >取消</van-button> -->
                                  <div class="cancle" @click="show=flase">取消</div>
                                  <div class="bindCard" @click="gobindCard">去绑卡</div>

                                  <!-- <van-button round size="normal" to="/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard" type="default">去绑卡</van-button> -->
                              </div>
                         </div>
                         <ul v-show="showCardList">
                              <p>请选择支付卡</p>
                             <li v-for="(item,index)   in cardList" :key="index" >
                                 <div @click.self="getCard(item ,index)"   :class="showClass == index ? 'round':''"></div>
                                 <div class="info">
                                     <p><span>{{item.bankNick}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{item.payerName}}</span></p>
                                    
                                     <!-- <p>尾号：*<span>{{item.cardNo.substr(item.cardNo.length-4)}}</span></p> -->
                                     <p><span>{{item.cardNo.replace(/^(\d{4})\d+(\d{4})$/,"$1 ****  **** $2")}}</span></p>
                                      <p></p>
                                     <!-- "6226621406110260".replace(/^(\d{4})\d+(\d{4})$/,"$1 **** **** $2" -->
                                 </div>
                             </li>
                         </ul>
                     </div>
                </van-popup>
            </div>
           <div class="phone">
               <ul>
                    <li>
                        <span>订单金额：<span>￥</span></span>
                       <input v-model="orderAmount" type="number" placeholder="付款金额">
                   </li>
                    <li>
                        <span>真实姓名：</span>
                       <input v-model="realName"  type="text" placeholder="真实姓名">
                   </li>
                    <li>
                        <span>证件号：</span>
                       <input v-model="idCard"  type="text" placeholder="身份证号码">
                   </li>
                    <li>
                        <span>卡号：</span>
                       <input v-model="accNo"  type="number" placeholder="信用卡卡号">
                   </li>
                   <li>
                       <span>手机号：</span>
                       <input type="number" v-model="mobile" placeholder="手机号码">
                   </li> 
               </ul>
           </div>
           <div class="at-once">
                   <van-button  @click="pay" size="large" round type="info">确认</van-button>
           </div>
           <div class="record">
                <!-- <van-button to="/home/collect/payment/records"  round size="middle"  type="default">交易查询</van-button> -->
                <van-button   :to="{path: '/home/collect/payment/records',query: {chMerCode:chMerCode}}" round size="middle"  type="default">交易查询</van-button>

                 <!-- :to="{path: '/loan/form/myOrder',query: {info: 'http://chaxun.weizhang8.cn/guanfangwang.php',title: '违章查询'}}" -->
                <van-button  @click="change" round size="middle"  type="default">更改收款账户</van-button>
           </div>
           <!-- <div class="trade" v-show="showrecord">
               <div>
                   <p>交易状态：{{record.resMsg}}</p>
                   <p>交易金额：{{record.tranAmount}}</p>
                   <p>交易时间：{{record.tranTime}}</p>
               </div>
           </div> -->
        </div>
        <loading :componentload="componentload"></loading>
    </div>
</template>


<script>
import storage from '@/lib/storage'
import {axiosPost} from '@/lib/http'
import loading from '@/components/loading'
import { bankCardAttribution } from '../../lib/bankName'
export default {
    data() {
        return {
           componentload: true,
           orderAmount:"",
           realName:"",
           idCard:"",
           accNo:"",
           mobile:"",
           chMerCode:"",
           number:"",
           record:{},
        //    showrecord:false,
           show:false,
           showClass:'',
        //    cardList:[],
            cardList:[
               {
                bankNick:"华夏银行",
                payerName:"吴",
                cardNo:"6226621406110260"
               }
           ],
           showCardList:false,
           showBinding:false,
        //    showCardList:true,
        //    showBinding:true
        }
    },
     components:{
      loading
    },
    methods:{
       goBack(){
           this.$router.push("/home")              
       },
       gobindCard(){
            this.$router.push("/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard")      
       },
       showCard(){
           this.show=!this.show
        //    请求卡列表
         axiosPost("/creditCard/getMyCreditCard")
         .then(res=>{
             if(!res.data.success){
                 this.$toast({
                     message:res.data.message
                 })
             } else {
                     let arr= res.data.data
                     let arrXun=[]
                     arr.forEach((item,i) => {
                         item.bankNick=bankCardAttribution(item.cardNo).bankName
                         arrXun.push(item)
                     });
                     this.cardList=arrXun
                 if(this.cardList.length===0){
                     this.showBinding=true
                 } else {
                     this.showCardList=true
                 }
             }

         })
       },
       change(){
           this.$router.push("/home/changeCard")
       },
       getCard(item,i){
           this.showClass=i
           console.log(this.showClass)
           this.realName=item.payerName
            this.idCard=item.idCardNo
            this.accNo=item.cardNo
            this.mobile=item.phone
            this.show=false
       },
       
    //    recordSearch(){
        //    let data={
        //        chMerCode:this.chMerCode,
        //        orderCode:this.number
        //    }
        //    axiosPost("/creditCard/getTradeQuery",data)
        //    .then(res=>{
        //        if(!res.data.success){
        //            this.$toast({
        //                message:res.data.message
        //            })
        //        } else {
        //         //    this.showrecord=true
        //             this.record=res.data.data
        //        }
        //    })
        //    .catch(err=>{
        //    })
    //    },
       pay(){
           let partten=/0?(13|14|15|17|18|19)[0-9]{9}/ 
           if(this.orderAmount.trim().length===0 || this.realName.trim().length===0 || this.idCard.trim().length===0
           || this.accNo.trim().length===0 || this.mobile.trim().length===0){
                this.$toast({
                    message:"请将信息填写完整"
                })
                return
           }
           if(!partten.test(this.mobile)){
                this.$toast({
                    message:"请填写11位手机号码"
                })
                return
            }

            let parttenId=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
            if(!parttenId.test(this.idCard)){
                this.$toast({
                    message:"请填写正确的身份证号"
                })
                return
            }

            var rand = "";
                for(var i = 0; i < 2; i++){
                    var r = Math.floor(Math.random() * 10);
                    rand += r
                }
             this.number= new Date().getTime()+rand
    
                    function generateTimeReqestNumber() {
                            var date = new Date();
                            return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) 
                            + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds())
                        }
                    
                    function pad2(n) { return n < 10 ? '0' + n : n }
            let data={
                busCode:"2001",
                orderAmount:this.orderAmount,
                realName:this.realName,
                idCard:this.idCard,
                accNo:this.accNo,
                mobile:this.mobile,
                orderCode:this.number,
                chMerCode:this.chMerCode,
                orderTime:generateTimeReqestNumber()
            }
            this.componentload = true;
            axiosPost("/creditCard/quickPay",data)
            .then(res=>{
                if(!res.data.success){
                    setTimeout(() =>{
                        this.componentload = false;
                    },2000)
                    this.$toast({
                        message:res.data.message
                    })
                    return
                } else {
                     // location.href=res.data.data.url.replace("http://localhost:8080","http://test.man-opaydev.ncfgroup.com/fusionPosp")
                //  location.href=res.data.data.url
                let url=res.data.data.url.replace("http://localhost:8080","http://test.man-opaydev.ncfgroup.com/fusionPosp")
                        setTimeout(() =>{
                            this.componentload = false;
                        },2000)
                        this.$router.push({
                            path:"/loan/form/myOrder",
                            query:{
                                info:url,
                                title:"支付"
                              }
                        })
                   }
               })
            .catch(err=>{
            })
       },
    //    查询商户编号
        search(){
            axiosPost("/creditCard/getMemberReg")
            .then(res=>{
                if(!res.data.success){
                    this.$toast({
                        message:res.data.message
                    })
                    return
                }
                 this.chMerCode=res.data.data.chMerCode
            })
            .catch(err=>{
                // console.log(err,"error");
            })
        },
        sureSubmit(){
            let data={
                chMerCode:this.chMerCode
            }
            axiosPost("/creditCard/getMemberRegLine",data)
            .then(res=>{
                let type=res.data.data.uploadStatus
                if(res.data.data.uploadStatus!="0"){
                     setTimeout(()=>{
                        this.componentload=false
                    },500)
                     this.$router.push("/home/collect/open")
                  } else {
                      this.componentload=false
                  }
            })
            .catch(err=>{

            })
            
        },
        
    },
    created () {
         this.chMerCode=this.$route.query.info
        //  this.search()
         this.sureSubmit()
    },
   
    mounted () {
      
    }
}
</script>

<style lang="less">
   #payment {
       >header {
           background-color: #4965AE;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           font-size:30px;
           display: flex;
           z-index:999;
           position: fixed;
           justify-content: space-between;
           >span {
               &:nth-of-type(1) {
                   margin-left: 10px;
               }
               &:nth-of-type(3) {
                   margin-right: 10px;
                   display:flex;
                   align-items: center;
               }
           }
       }
       >.container {
           padding-top:96px;
           padding-bottom: 50px;
           background-color: #EEEFF1;
           font-size:30px;
                input::-webkit-input-placeholder{
                    font-size: 26px;
                    padding-top:4px;
                    background-color: red;
                }
           >.popup {
               .pop {
                    width:600px;
                  background-color: #fff;
                    overflow-y: scroll;
                  >p {
                      margin-top:15px;
                      text-align: center;
                      font-weight: bold;
                  }
                  >.binding {
                      margin-top:30px;
                      padding:10px;
                      >p {
                          margin-bottom: 40px;
                          text-align: center;
                      }
                      >div {
                          display: flex;
                          justify-content: space-around;
                          margin-bottom: 30px;
                          text-align: center;
                          >.cancle {
                              width:30%;
                              border:1px solid #ccc;
                              padding:10px 0px;
                          }
                          >.bindCard {
                             width:30%;
                              border:1px solid #ccc;
                              padding:10px 0px;
                               background-color: #4965AE;
                              color:#fff;
                          }
                      }
                  }
                      >ul {
                          width:100%;
                          box-sizing: border-box;
                          padding:15px;
                          >li {
                              display: flex;
                             position: relative;
                              width:100%;
                              justify-content: space-between;
                              align-items: center;
                              margin-bottom:30px;
                               box-sizing: border-box;
                             >div{
                                  &:nth-of-type(1){
                                    width:40px;
                                    height:40px;
                                    border:2px solid #ccc;
                                    border-radius: 50%;
                                    margin-right: 15px;
                                   }
                                  &.round {
                                       background-color: #4965AE;
                                  }
                              }
                              >.info {
                                  flex:1;
                                  border:2px solid #ccc;
                                  background-image: -webkit-linear-gradient(0deg, #57A4DD, #B8DDFF);
                                  border-radius: 10px;
                                  padding:10px 0px 20px 15px;
                                  color:#fff;
                                //   color:#fff;
                                  >p {
                                      &:nth-of-type(1){
                                          padding:10px 0px;
                                      }
                                      &:nth-of-type(2){
                                          padding:15px 0px;
                                          text-align: center;
                                      }
                                  }
                              }
                          }
                      }
               }
           }
           >button {
               margin:30px;
               height: 90px;
               font-size: 40px;
           }
           >p {
               padding:30px;
               font-size: 30px;
               color:#767677;
               font-weight: bold;
           }
           >.phone {
               >ul{
                   padding-left:30px;
                   background-color: #fff;
                   >li{
                       display: flex;
                       flex-wrap: nowrap;
                       border-bottom: 1px solid #ccc;
                       padding-top:40px;
                       padding-bottom: 40px;
                       height: 60px;
                       line-height: 60px;
                       color:#000;
                       >span {
                           font-weight: bold;
                       }
                       &:last-child {
                           border:none;
                       }
                       >span {
                           &:nth-of-type(2){
                               padding:0 10px;
                               margin-right:20px;
                               line-height: 60px;
                               border-radius: 10px;
                           }
                        }
                       >input {
                           border:none;
                           flex: 1;
                           margin-right:50px;
                       }
                   }
               }
           }
           >.at-once {
               margin-top:100px;
               padding:0 20px;
               .van-button--info {
                   background-color: #4965AE;
               }
               >button {
                   height: 90px;
                   font-size: 28px;
                   font-size: 40px;
                 }
           }
           >.record {
               margin-top:50px;
               padding: 0px 50px;
               display: flex;
               justify-content: space-between;
               >button {
                   padding:5px 20px;
                   height: 70px;
                   font-size: 40px;               }
            //    .van-button--primary {
            //        background-color: #767677;
            //        border:1px solid #ccc;
            //    }
           }
           >.trade{
               margin-top:20px;
               >div {
                   display:flex;
                   justify-content: space-around;
                   font-size: 30px;
               }
           }
       }
   }
</style>

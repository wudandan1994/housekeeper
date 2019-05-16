<template>
    <div id="payment">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>快捷支付</span>
            <span @click="showCard"><van-icon name="card"/>选择卡</span>
        </header>
        <div class="container">
            <div class="popup">
                <van-popup v-model="show" :overlay="true" >
                     <div class="pop">
                         <p>请选择支付卡</p>
                         <div class="binding" v-show="showBinding">
                              <p>您还没有绑定信用卡</p>
                              <div>
                                  <van-button round @click="show=flase" size="normal"  >取消</van-button>
                                  <van-button round size="normal" to="/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard" type="default">去绑卡</van-button>
                              </div>
                         </div>
                         <ul v-show="showCardList">
                             <li v-for="(item,index) in cardList" :key="index">
                                 <div @click="getCard(item)" :class="showClass ? 'round':''"></div>
                                 <div class="info">
                                     <p>华夏银行</p>
                                     <p>{{item.payerName}}</p>
                                     <p>尾号：*<span>{{item.cardNo.substr(item.cardNo.length-4)}}</span></p>
                                 </div>
                             </li>
                         </ul>
                     </div>
                </van-popup>
                
            </div>
           <div class="phone">
               <ul>
                    <li>
                        <span>订单金额：</span>
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
                <van-button  @click="recordSearch" size="middle" round type="primary">交易查询</van-button>
                <van-button  @click="change" size="middle" round type="primary">更改收款账户</van-button>
           </div>
           <div class="trade" v-show="showrecord">
               <div>
                   <p>交易状态：{{record.resMsg}}</p>
                   <p>交易金额：{{record.tranAmount}}</p>
                   <p>交易时间：{{record.tranTime}}</p>
               </div>
           </div>
        </div>
    </div>
</template>


<script>
import storage from '@/lib/storage'
import {axiosPost} from '@/lib/http'
export default {
    data() {
        return {
           orderAmount:"",
           realName:"",
           idCard:"",
           accNo:"",
           mobile:"",
           chMerCode:"",
           number:"",
           record:{},
           showrecord:false,
           show:false,
           showClass:false,
           cardList:[],
           showCardList:false,
           showBinding:false
        }
    },
    methods:{
       goBack(){
           this.$router.push("/home")              
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
                 this.cardList=res.data.data
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
       getCard(item){
           this.showClass=!this.showClass
           this.realName=item.payerName
            this.idCard=item.idCardNo
            this.accNo=item.cardNo
            this.mobile=item.phone
            this.show=false
       },
       
       recordSearch(){
           let data={
               chMerCode:this.chMerCode,
               orderCode:this.number
           }
           axiosPost("/creditCard/getTradeQuery",data)
           .then(res=>{
               if(!res.data.success){
                   this.$toast({
                       message:res.data.message
                   })
               } else {
                   this.showrecord=true
                    this.record=res.data.data
               }
           })
           .catch(err=>{
           })
       },
       pay(){
           let partten=/^1\d{10}$/
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
            axiosPost("/creditCard/quickPay",data)
            .then(res=>{
                if(!res.data.success){
                    this.$toast({
                        message:res.data.message
                    })
                    return
                } else {
                     // location.href=res.data.data.url.replace("http://localhost:8080","http://test.man-opaydev.ncfgroup.com/fusionPosp")
                //  location.href=res.data.data.url
                let url=res.data.data.url.replace("http://localhost:8080","http://test.man-opaydev.ncfgroup.com/fusionPosp")
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
        }
        
    },
    created () {
        
    },
   
    mounted () {
       this.search()
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
           font-size:40px;
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
               }
           }
       }
       >.container {
           padding-top:96px;
           padding-bottom: 50px;
           background-color: #EEEFF1;
           font-size:30px;
           >.popup {
               .pop {
                  width:600px;
                //   height: 800px;
                  background-color: #fff;
                  >p {
                      margin-top:15px;
                      text-align: center;
                      font-weight: bold;
                  }
                  >.binding {
                      margin-top:30px;
                      padding-left:20px;
                      padding-right: 20px;
                      >p {
                          margin-bottom: 20px;
                      }
                      >div {
                          display: flex;
                          justify-content: space-around;
                          margin-bottom: 30px;
                      }
                  }
                      >ul {
                          padding:15px;
                          >li {
                              display: flex;
                              justify-content: space-around;
                              align-items: center;
                              margin-bottom: 15px;
                              >div{
                                  &:nth-of-type(1){
                                       width:30px;
                                    height:30px;
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
                                  display: flex;
                                  justify-content: space-between;
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
               padding-left:50px;
               display: flex;
               justify-content: space-around;

               >button {
                   padding:5px 20px;
                   height: 70px;
                   font-size: 40px;               }
               .van-button--primary {
                   background-color: #767677;
                   border:1px solid #ccc;
               }
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

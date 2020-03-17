<template>
    <div id="bill-details">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center"></div>
            <div class="right-icon center"><van-icon color="white" size="20px" name="edit"/></div>
        </header>
        <div class="container">
            <div class="methods">
                <p class="edit">还款方式</p>
                <div class="channels">
                    <ul>
                        <li @click="selectsmalss" :class="channel=='1'?'selectcolor':''">
                             <h2><van-checkbox class="checkbox" v-model="checked"   checked-color="#4694FF"></van-checkbox> </h2>
                             <p  :class="channel=='1'?'skyblue':''">小额通道</p>
                             <p  :class="channel=='1'?'skyblue':''">还款金额2000-30000</p>
                        </li>
                         <li  @click="selectlarge" :class="channel=='2'?'selectcolor':''" >
                             <h2><van-checkbox class="checkbox" v-model="selected"  checked-color="#4694FF"></van-checkbox> </h2>
                             <p :class="channel=='2'?'skyblue':''">大额通道</p> 
                             <p :class="channel=='2'?'skyblue':''">还款金额2000-500000</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bill">
                <p>当前账单&nbsp;&nbsp;&nbsp;<span>{{info.bankNick}}</span> </p>
                <div class="detail">
                    <p class="gray">本期账单</p>
                    <p>￥{{info.repaycount}}</p>
                    <div class="cardinfo">
                        <ul>
                            <li>
                                <p  class="gray">持卡人</p>
                                <p>{{info.payerName}}</p>
                            </li>
                             <li v-if="info.repaycount!==null">
                                <p  class="gray">还款金额</p>
                                <p>￥{{info.repaycount}}</p>
                            </li>
                             <li v-else>
                                <p  class="gray">还款金额</p>
                                <p>未知</p>
                            </li>
                             <li >
                                <p  class="gray">还款日</p>
                                <p>{{data}}</p>
                            </li>
                        </ul>
                    </div>
                   <p  class="gray">还款卡号</p>
                   <!-- <p class="num">{{info.cardNo}}</p> -->
                    <!-- {{item.accountNo.replace(/^(\d{4})\d+(\d{4})$/,"$1 ****  **** $2")}} -->
                    <p class="num">{{info.cardNo.replace(/^(\d{4})\d+(\d{4})$/,"$1 ****  **** $2")}}</p>
                </div>
            </div>
            <div @click="repayment" class="payment">立即还款</div>
            <div class="details">

            </div>
        </div>
    </div>    
</template>
<script>
import { axiosPost } from '../../lib/http';
import storage from '@/lib/storage' 
export default {
    data(){
        return{
           checked:false,
           selected:false,
           channel:'',
           info:"",
           due:"",
           data:""
        }
    },
    methods: {
        handleReturnHome(){
            this.$router.go(-1);
        },
        selectsmalss(){
            this.checked=true
            this.selected=false
            this.channel='1'
        },
        selectlarge(){
            this.selected=true
            this.checked=false
            this.channel='2'
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
                   
            let datas={
                cardId:i.cardNo
                }
            axiosPost("/fwspay/getFwsMerchant",datas)   // 查询有没有商户号   通道三
            .then(res=>{
                if(res.data.success){ 

                    let subMerchId=res.data.data.subMerchId

                axiosPost("/fwspay/getBindCardExist",datas)    // 继续查询有没有绑卡
                .then(res=>{
                    if(res.data.success){

                    // 查询mc是否有绑卡，若有则直接提交计划，若无，则去签约

                        // let cards={
                        //     creditCardNo:i.cardNo
                        // }
                        // axiosPost("/mcpay/getBindCardExist",cards)
                        // .then(res=>{
                        //     // console.log(res,"mc通道")
                        //     if(res.data.success){
                                storage.set('channel',"1");
                                this.$router.push({
                                    path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                                    query:{
                                        info:i
                                    }
                                })
                            // } else {
                            //     this.$router.push({
                            //         path:"/home/smallAmountMC",
                            //         query:{
                            //             cardnumber:i
                            //         }
                            //     })
                        //     }
                        // })  
                    } else {
                        this.$router.push({
                            path:"/home/easyPay/easycard",
                            query:{
                                info:i,
                                subMerchId,
                            }
                        })
                    }
               })
                        
            .catch(err=>{
            this.$toast("登录失败")
            })
            } else {
                 this.$router.push({
                    path:"/home/easyPay",
                    query:{
                        info:i
                    }
                 })
                    }
                })
             .catch(err=>{
                 this.$toast("登录失败")
             })
               }
             })
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
                                storage.set('channel',"2");
                                this.$router.push({
                                    path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                                    query:{
                                    info:i
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
        repayment(){
            if(this.checked===true && this.channel==="1"){
                this.small(this.info)
            } else if(this.selected===true && this.channel==="2"){
                this.large(this.info)
            }
        },
        getday(){
              let date=new Date();
              let month=date.getMonth() + 1   //当前月份
              let day = date.getDate()   //day是当天日期  
              if(Number(day)<Number(this.due)){
                  this.data=month+'-'+this.due
              } else {
                  this.data=month+1+'-'+this.due
              }
        }
      
    },
    created(){
       this.info=this.$route.query.i
       this.due=this.info.duedate
        this.getday()
    }
}
</script>
<style lang="less" scoped>
#bill-details{
    width: 100vw;
    height: calc(100vh - 86px);
    padding-top: 86px;
    .container{
       
        overflow-x: hidden;
        .methods{
            background-color: #5471CB;
           
            >p{
                color:#fff;
                padding:50px 0px 50px 30px;
                font-size: 32px;
            }
            .channels{
                ul{
                    display: flex;
                    justify-content: space-around;
                    padding:10px;
                    li{
                        width:40%;
                        padding:15px;
                        // background-color: #F5F7FF;
                        background-color: #8696D8;
                        border-radius: 15px;
                        margin-bottom: 20px;
                        &.selectcolor {
                            // background-color: #8696D8;
                        background-color: #F5F7FF;
                        }
                        h2{
                            text-align: right;
                        }
                        p{
                            text-align: center;
                            color:#6F48E7;
                            &:nth-of-type(1){
                                font-size: 34px;
                                font-weight: bold;
                                padding-bottom: 25px;
                            }
                        }
                        .skyblue{
                            color:#5D7AE4;
                        }
                    }
                }
            }
        }
        .bill{
            background-color: #FCFCFC;
            // background-color: red;
            margin:20px 30px;
          
            >p{
                &:nth-of-type(1){
                    font-size: 32px;
                    padding:20px 0px;
                    span{
                        font-size: 24px;
                    }
                }
            }
            .detail{
                background-color: #fff;
                width:98%;
                padding:30px;
                box-sizing: border-box;
                margin-top:20px;
                box-shadow: 2px 2px 5px 5px #EEF1F9;
                .gray{
                    color:#BCBFC9;
                }
                >p{
                    &:nth-of-type(2){
                        padding:15px 0px;
                        font-size: 38px;
                    }
                }
                .cardinfo{
                    padding:30px 0px;
                    ul{
                        display: flex;

                        li{
                            width:33%;
                            p{
                                &:nth-of-type(2){
                                    padding:15px 0px;
                                    font-size: 30px;
                                }
                            }

                        }
                    }
                }
                .num{
                    padding:20px 0;
                }
               
            }
        }
         .payment{
            background-color: #4B66AF;
            color:#fff;
            text-align: center;
            height: 80px;
            font-size: 34px;
            line-height: 80px;
            margin:-20px 42px 0 30px;
            border-radius: 0px 0px 15px 15px;
        }

    }
    
}
</style>

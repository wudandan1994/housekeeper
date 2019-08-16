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
                        <span>{{lev}}</span>
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
                        <input type="number" v-model="number" @input="change" placeholder="请输入金额最低500元">
                    </p>
                    <div class="card" v-show="showCard">
                        <ul>
                            <!-- <li>
                                <p>到账储蓄卡：</p>
                                <p><span>民生银行</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>5323</span></p>
                                <p class="change">更换<van-icon  name="arrow"  color="#4B66AF" /></p>
                            </li> -->
                             <li>
                                <p>支付信用卡：</p>
                                <p><span>{{nick}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{{cardnumber}}</span></p>
                                <p @click="getxycard" class="change">选择<van-icon  name="arrow"   color="#4B66AF" /></p>
                              
                                <!-- <router-link tag="p" :to="{query:{type:'1',},path:'/home/receivables/cards'}"  class="change">选择<van-icon  name="arrow"   color="#4B66AF" /></router-link> -->
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
                    <router-link tag="li" to="/home/changeCard">
                        <p><span><van-icon color="#4B66AF" size="20px" name="card"/></span></p>
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
            <footer>
                
            </footer>
             <div class="covercx" >
                    <van-popup v-model="showxy" position="right" :overlay="true">
                         <div class="action">
                           
                            <van-button  to="/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard" round type="primary">添加信用卡</van-button>
                             <van-button @click="closexy" round type="default">关闭</van-button>
                        </div>
                         <div class="cards">
                             <ul>
                                 <li v-for="(item,index) in xylist" :key="index">
                                     <div class="bank">
                                         <p>{{item.payerName}}</p>
                                         <p>{{item.bankNick}}</p>
                                     </div>
                                     <!-- <p>{{item.name}}</p> bankname -->
                                     <div class="pay">
                                         <p class="cardnum">{{item.cardNo}}</p>
                                         <van-button @click="payxy(item)" round type="default">去支付</van-button>
                                     </div>
                                 </li>
                             </ul>
                         </div>

                    </van-popup>
             </div>
        </div>
         <loading :componentload="componentload"></loading>
    </div>
</template>

<script>
import {axiosPost} from '@/lib/http'
import Bank from '@/lib/bank'
import loading from '@/components/loading'
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
            chMerCode:"",
            number:"",
            showCard:false,
            info:"",
            flag:false,
            nick:"请选择支付信用卡",
            cardnumber:"",
            cardInfo:"",
            ordernumber:"",
            componentload:false,
            merchantno:"",
            showxy:false,
            xylist:[],
            xyinfo:{}
        }
    },
    methods:{
        goBack () {
            this.$router.push('/home')
        },
        closexy(){
            this.showxy=false
        },
        payxy(info){
            this.xyinfo=info
            console.log(this.xyinfo,'xyinfo')
            this.showxy=false
            this.nick=this.xyinfo.bankNick
            this.cardnumber=this.xyinfo.cardNo.substr(this.xyinfo.cardNo.length-4,4)
        },
        getxycard(){
            this.showxy=true
               // 信用卡列表
            this.getcardsxy()
        },
          getcardsxy(){
             axiosPost("/creditCard/getMyCreditCard")
             .then(res=>{
                 if(res.data.success){
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

        change(){
              if(this.number.trim().length==0){
                  this.showCard=false
              } else {
                 this.showCard=true
              }
        },
        showPay(){
             if(this.number.trim().length==0){
                return this.$toast("请输入金额")
            } 
            if(this.nick=="请选择支付信用卡"){
                return this.$toast("请先选择支付信用卡")
            }
            this.componentload=true
            // 查询是否有商户号
             axiosPost("/creditCard/getMemberReg")
           .then(res=>{
                if(res.data.success){  //已申请商户

                // 通道一的商户号
                 this.chMerCode=res.data.data.chMerCode


                     var rand = "";
                 for(var i = 0; i < 2; i++){
                     var r = Math.floor(Math.random() * 10);
                     rand += r
                 }
                this.ordernumber= new Date().getTime()+rand
        
                function generateTimeReqestNumber() {
                        var date = new Date();
                        return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) 
                        + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds())
                    }
                        
                function pad2(n) { return n < 10 ? '0' + n : n }

                let datapay={
                    busCode:"2001",
                    orderAmount:this.number, //金额
                    realName:this.xyinfo.payerName,  //姓名
                    idCard:this.xyinfo.idCardNo, //身份证
                    accNo:this.xyinfo.cardNo, // 信用卡卡号
                    mobile:this.xyinfo.phone, // 手机号
                    orderCode:this.ordernumber, // 订单号
                    chMerCode:this.chMerCode, // 商户编号
                    orderTime:generateTimeReqestNumber()
                }  

                axiosPost("/creditCard/quickPay",datapay)
                .then(res=>{
                    if(!res.data.success){
                        setTimeout(() =>{
                            this.componentload = false;
                            this.$toast({
                            message:res.data.message
                            })
                        },1000)
                    } else {
                    let url=res.data.data.url.replace("http://localhost:8080","http://test.man-opaydev.ncfgroup.com/fusionPosp")
                            setTimeout(() =>{
                                this.componentload = false;
                                
                            //      this.$router.push({
                            //     path:"/loan/form/myOrder",
                            //     query:{
                            //         info:url,
                            //         title:"支付"
                            //       }
                            // })
                            
                            if (!navigator.userAgent.match(/iPad|iPhone/i)){
                                this.$router.push({
                                path:"/loan/form/myOrder",
                                query:{
                                    info:url,
                                    title:"支付"
                                    }
                                    })
                                } else {
                                    this.componentload=false
                                    location.href=url
                                }

                            },2000)
                    }
                })
                .catch(err=>{
                })




                } else { // 去注册商户
                      this.$router.push({
                      path:"/home/collect"
                  })
                  this.componentload=false
                }
           })
           
         
        },

        // showPay(){

               
        //     if(this.number.trim().length==0){
        //         return this.$toast("请输入金额")
        //     } 
        //     if(this.nick=="请选择支付信用卡"){
        //         return this.$toast("请先选择支付信用卡")
        //     }
         
        //      // 请求接口，判断用那个通道支付  
        //     let banks={
        //         cardNo:this.cardnumber,
        //         amount:this.number,
        //     }
        //     axiosPost("/creditCard/getPayChannel",banks)
        //     .then(res=>{
        //         if(!res.data.success){
        //             this.$toast(res.data.message)
        //         } else {
        //             console.log(res.data.data,'判读是一还是二')
        //             if(res.data.data=='1') {  // 通道一的支付

        //             // 查询支付信息

        //             axiosPost("/creditCard/getMemberReg")
        //             .then(res=>{
        //                 console.log(res,"查询信息")
        //                 if(res.data.success){
        //                     let name=res.data.data.accountName
        //                     let idcard=res.data.data.idCard
        //                     let mobile=res.data.data.reservedMobile
                            
        //                 } else {
                            
        //                 }
                      

        //             })


        //          var rand = "";
        //          for(var i = 0; i < 2; i++){
        //              var r = Math.floor(Math.random() * 10);
        //              rand += r
        //          }
        //         this.ordernumber= new Date().getTime()+rand
        
        //         function generateTimeReqestNumber() {
        //                 var date = new Date();
        //                 return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) 
        //                 + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds())
        //             }
                        
        //         function pad2(n) { return n < 10 ? '0' + n : n }

        //         let datapay={
        //             busCode:"2001",
        //             orderAmount:this.number, //金额
        //             realName:name,  //姓名
        //             idCard:idcard, //身份证
        //             accNo:this.cardnumber, // 信用卡卡号
        //             mobile:mobile, // 手机号
        //             orderCode:this.ordernumber, // 订单号
        //             chMerCode:this.chMerCode, // 商户编号
        //             orderTime:generateTimeReqestNumber()
        //         }  

        //         axiosPost("/creditCard/quickPay",datapay)
        //         .then(res=>{
        //             if(!res.data.success){
        //                 setTimeout(() =>{
        //                     this.componentload = false;
        //                     this.$toast({
        //                     message:res.data.message
        //                     })
        //                 },1000)
        //             } else {
        //             let url=res.data.data.url.replace("http://localhost:8080","http://test.man-opaydev.ncfgroup.com/fusionPosp")
        //                     setTimeout(() =>{
        //                         this.componentload = false;
                                
        //                     //      this.$router.push({
        //                     //     path:"/loan/form/myOrder",
        //                     //     query:{
        //                     //         info:url,
        //                     //         title:"支付"
        //                     //       }
        //                     // })
                            
        //                     if (!navigator.userAgent.match(/iPad|iPhone/i)){
        //                         this.$router.push({
        //                         path:"/loan/form/myOrder",
        //                         query:{
        //                             info:url,
        //                             title:"支付"
        //                             }
        //                             })
        //                         } else {
        //                             this.componentload=false
        //                             location.href=url
        //                         }

        //                     },1000)
                        
        //             }
        //         })
        //         .catch(err=>{
        //         })


        //             } else if(res.data.data=='2') { //通道2的支付

        //                 let datachannel={
        //                     bankcardNum:this.cardnumber,
        //                     merchantno:this.merchantno,
        //                     amount:this.number,
        //                 }
        //                 axiosPost("/jxpay/repaymentConsume",datachannel)
        //                 .then(res=>{
        //                     console.log(res,"通道二支付结果")
        //                     if(res.data.success){
        //                         this.$toast(res.data.message)
        //                         console.log(res.data.data,'支付地址，然后跳转')
        //                     } else {
        //                         this.$toast(res.data.message)
        //                     }
        //                 })
        //             }
        //         }
        //     })

        // },

       
        // showPay(){
            
        //     //  查询商户号，若没有 商户申请，上传图片 ，若有在查询是否有绑定信用卡
        //     if(this.number.trim().length==0){
        //         return this.$toast("请输入金额")
        //     } 
        //     if(this.nick=="请选择支付信用卡"){
        //         return this.$toast("请先选择支付信用卡")
        //     }
         
        //     // 查询通道一有没有商户，如果没有去注册商户，如果有查询通道二     注：注册商户时用同一个储蓄卡
        //     // 查询通道二有没有商户，如果没有去注册商户，如果有，根据金额查询用那个通道支付
        //     // 根据返回的‘1’或者‘2’去支付

        //     // console.log(this.cardnumber,"cardnumber信用卡卡号")

        //     axiosPost("/creditCard/getMemberReg")
        //    .then(res=>{
        //     if(res.data.success){  //已申请商户

        //         // 通道一的商户号
        //          this.chMerCode=res.data.data.chMerCode


        //         // // 通道一注册商户使用的储蓄卡,名字，卡号，身份证号
        //         let  accountNo=res.data.data.accountNo
        //         let  mobile=res.data.data.reservedMobile
        //         let  idcard=res.data.data.idCard
        //         let  name=res.data.data.accountName

        //         // 查询第二条通道是否注册
        //          let params={
        //                 bank_cardno:accountNo
        //             }
        //             axiosPost("/jxpay/getJxMerchant",params)
        //             .then(res=>{
        //                 console.log(res,'查询第二个道')
        //                 if(!res.data.success) {

        //                     // 如果第二个通道没有注册，隐式注册

        //                     let datas={
        //                         merchant_name:name,
        //                         id_cardno:idcard,
        //                         phone:mobile,
        //                         bank_cardno:accountNo,
        //                     }
        //                     axiosPost("/jxpay/insertRegister",datas)
        //                     .then(res=>{
        //                         console.log(res,"第二个通道注册")
        //                         if(!res.data.success) {
        //                             this.$toast(res.data.message)
        //                         } else {
        //                             // 第二个通道生成的商户号
        //                             let responce=res.data.data
        //                             responce=JSON.parse(responce)
        //                             this.merchantno=responce.merchantno
        //                         }
        //                     })


        //                 } else {

        //                       // 第二个通道生成的商户号
        //                       console.log(res.data.data,'生成的商户号')
        //                       this.merchantno=res.data.data.merchantno

        //                 }

        //                  // 请求接口，判断用那个通道支付  
        //                  let banks={
        //                      cardNo:this.cardnumber,
        //                      amount:this.number,
        //                  }
        //                  axiosPost("/creditCard/getPayChannel",banks)
        //                  .then(res=>{
        //                      console.log(res,'请求用哪个通道支付')
        //                      if(!res.data.success){
        //                          this.$toast(res.data.message)
        //                      } else {
        //                          console.log(res.data.data,'判读是一还是二')
        //                          if(res.data.data=='1') {  // 通道一的支付


        //                          var rand = "";
        //                          for(var i = 0; i < 2; i++){
        //                                 var r = Math.floor(Math.random() * 10);
        //                                 rand += r
        //                             }
        //                         this.ordernumber= new Date().getTime()+rand
                        
        //                         function generateTimeReqestNumber() {
        //                                 var date = new Date();
        //                                 return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) 
        //                                 + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds())
        //                             }
                                        
        //                         function pad2(n) { return n < 10 ? '0' + n : n }

        //                         let datapay={
        //                             busCode:"2001",
        //                             orderAmount:this.number, //金额
        //                             realName:name,  //姓名
        //                             idCard:idcard, //身份证
        //                             accNo:this.cardnumber, // 信用卡卡号
        //                             mobile:mobile, // 手机号
        //                             orderCode:this.ordernumber, // 订单号
        //                             chMerCode:this.chMerCode, // 商户编号
        //                             orderTime:generateTimeReqestNumber()
        //                         }  

        //                         axiosPost("/creditCard/quickPay",datapay)
        //                         .then(res=>{
        //                             if(!res.data.success){
        //                                 setTimeout(() =>{
        //                                     this.componentload = false;
        //                                     this.$toast({
        //                                     message:res.data.message
        //                                     })
        //                                 },1000)
        //                             } else {
        //                             let url=res.data.data.url.replace("http://localhost:8080","http://test.man-opaydev.ncfgroup.com/fusionPosp")
        //                                     setTimeout(() =>{
        //                                         this.componentload = false;
                                                
        //                                     //      this.$router.push({
        //                                     //     path:"/loan/form/myOrder",
        //                                     //     query:{
        //                                     //         info:url,
        //                                     //         title:"支付"
        //                                     //       }
        //                                     // })
                                            
        //                                     if (!navigator.userAgent.match(/iPad|iPhone/i)){
        //                                         this.$router.push({
        //                                         path:"/loan/form/myOrder",
        //                                         query:{
        //                                             info:url,
        //                                             title:"支付"
        //                                           }
        //                                          })
        //                                         } else {
        //                                             this.componentload=false
        //                                             location.href=url
        //                                         }

        //                                     },1000)
                                        
        //                             }
        //                         })
        //                         .catch(err=>{
        //                         })


        //                          } else if(res.data.data=='2') { //通道2的支付

        //                                 let datachannel={
        //                                     bankcardNum:this.cardnumber,
        //                                     merchantno:this.merchantno,
        //                                     amount:this.number,
        //                                 }
        //                                 axiosPost("/jxpay/repaymentConsume",datachannel)
        //                                 .then(res=>{
        //                                     console.log(res,"通道二支付结果")
        //                                     if(res.data.success){
        //                                         this.$toast(res.data.message)
        //                                         console.log(res.data.data,'支付地址，然后跳转')
        //                                         let responce=res.data.data
        //                                         responce=JSON.parse(responce)
        //                                         let url=responce.message

        //                                             //   this.$router.push({
        //                                             //     path:"/loan/form/myOrder",
        //                                             //     query:{
        //                                             //         info:url,
        //                                             //         title:"支付"
        //                                             //       }
        //                                             // })
                        
        //                                         if (!navigator.userAgent.match(/iPad|iPhone/i)){
        //                                             this.$router.push({
        //                                             path:"/loan/form/myOrder",
        //                                             query:{
        //                                                 info:url,
        //                                                 title:"支付"
        //                                               }
        //                                              })
        //                                             } else {
                                                    
        //                                                 location.href=url
        //                                             }

        //                                     } else {
        //                                         this.$toast(res.data.message)
        //                                     }
        //                                 })
        //                          }
        //                      }
        //                  })


        //             })




        //     // 通道一的支付

        //     //      var rand = "";
        //     //     for(var i = 0; i < 2; i++){
        //     //         var r = Math.floor(Math.random() * 10);
        //     //         rand += r
        //     //     }
        //     //    this.ordernumber= new Date().getTime()+rand
    
        //     //  function generateTimeReqestNumber() {
        //     //         var date = new Date();
        //     //         return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) 
        //     //         + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds())
        //     //     }
                    
        //     //  function pad2(n) { return n < 10 ? '0' + n : n }

        //     //  let data={
        //     //     busCode:"2001",
        //     //     orderAmount:this.number, //金额
        //     //     realName:this.cardInfo.payerName,  //姓名
        //     //     idCard:this.cardInfo.idCardNo, //身份证
        //     //     accNo:this.cardInfo.cardNo, // 卡号
        //     //     mobile:this.cardInfo.phone, // 手机号
        //     //     orderCode:this.ordernumber, // 订单号
        //     //     chMerCode:info, // 商户编号
        //     //     orderTime:generateTimeReqestNumber()
        //     // }  

        //     // axiosPost("/creditCard/quickPay",data)
        //     //  .then(res=>{
        //     //     if(!res.data.success){
        //     //         setTimeout(() =>{
        //     //             this.componentload = false;
        //     //              this.$toast({
        //     //               message:res.data.message
        //     //             })
        //     //         },1000)
        //     //     } else {
        //     //     let url=res.data.data.url.replace("http://localhost:8080","http://test.man-opaydev.ncfgroup.com/fusionPosp")
        //     //             setTimeout(() =>{
        //     //                 this.componentload = false;
                            
        //     //             //      this.$router.push({
        //     //             //     path:"/loan/form/myOrder",
        //     //             //     query:{
        //     //             //         info:url,
        //     //             //         title:"支付"
        //     //             //       }
        //     //             // })
                        
        //     //               if (!navigator.userAgent.match(/iPad|iPhone/i)){
        //     //                 this.$router.push({
        //     //                 path:"/loan/form/myOrder",
        //     //                 query:{
        //     //                     info:url,
        //     //                     title:"支付"
        //     //                   }
        //     //                  })
        //     //                 } else {
        //     //                      this.componentload=false
        //     //                      location.href=url
        //     //                 }

        //     //             },1000)
                       
        //     //        }
        //     //    })
        //     // .catch(err=>{
        //     // })

            
        //     }else {    // 通道一没有注册
                
        //          this.$router.push({
        //              path:"/home/collect"
        //          })
        //     }

        //     // 查询是否有绑定信用卡，
            
        // })
        // .catch(err=>{
        //     // console.log(err,"error个人信息")
        // })
 
        // },
        
        searchInfo(){
            axiosPost("/customer/getCustomer")
           .then(function(res){
               console.log(res,'data')
                if(res.data.success){
                    console.log(res.data.data.nickname)
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
        if(this.cardInfo) {
            this.showCard=true
            this.nick=this.cardInfo.bankname
            this.cardnumber=this.cardInfo.cardNo
        }
        // console.log(this.cardInfo,'cardinfo')

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
                    //    padding:5px 20px;
                       width:120px;
                   }

               }
            .van-popup--right {
                padding:15px;
                top:80%;
                right:0;
                left:0;
                bottom:-100%;
            }
            .cards {
                margin-top:15px;
                ul {
                    // padding:30px;
                    overflow-y: scroll;
                    li {
                        //  padding:20px;
                        //   border:2px solid #4B66AF;
                        //   border-radius: 10px;
                        //  width: 95%;
                        height: 320px;
                        margin-bottom: 20px;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 20px;
                        position: relative;
                        background: url('http://pay.91dianji.com.cn/bgc5.jpg') center center no-repeat;
                        background-size: 100% 100%;
                        color:#fff;
                        font-weight: bold;
                        padding:30px;
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
                              align-items: center;
                              div {
                                  flex:1;
                                  padding-left: 20px;
                                  >p {
                                      &:nth-of-type(2){
                                          padding:10px 0px;
                                      }
                                  }
                              }
                              .change {
                                  color:#4B66AF;
                              }
                            //   p {
                            //       &:nth-of-type(2){
                            //           flex:1;
                            //           padding-left:30px;
                            //       }
                            //   }
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

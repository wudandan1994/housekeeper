<template>
    <div id="binding-credit-card">
        <header class="manage loan">
            <van-nav-bar title="添加信用卡" left-text="返回" left-arrow @click-left="handleReturnHome" >
               
            </van-nav-bar>
        </header>
        <div class="container">
             <div class="phone">
               <ul>
                    <li>
                        <span>真实姓名</span>
                       <input v-model="name" type="text" placeholder="姓名">
                   </li>
                    <li>
                        <span>身份证号</span>
                       <input v-model="idCard"  type="text" placeholder="所持身份证号码">
                   </li>
                    <li>
                        <span>银行卡号</span>
                       <input v-model="bankcardno"  type="number" placeholder="所持银行卡号">
                   </li>
                   <div class="shadow"></div>
                    <li>
                        <span>有效期年份</span>
                       <input v-model="year"  type="number" placeholder="信用卡有效期年份如 22">
                   </li>
                   <li>
                       <span>有效期月份</span>
                       <input type="number" v-model="month" placeholder="信用卡有效期月份 如 05">
                   </li> 
                    <li>
                       <span>安全码</span>
                       <input type="number" v-model="safeCode" placeholder="信用卡后三位安全码">
                   </li> 
                     <div class="shadow"></div>
                     <li>
                       <span>手机号</span>
                       <input type="number" v-model="phone" placeholder="银行卡预留手机号">
                   </li> 
                    <li>
                       <span>账单日</span>
                       <input type="number" v-model="billdate" placeholder="账单日 如 06">
                   </li> 
                    <li>
                       <span>最后还款日</span>
                       <input type="number" v-model="duedate" placeholder="还款日 如 23">
                   </li> 
                     <div class="shadow"></div>
               </ul>
              <div @click="bindingCard" class="btn">
                <van-button round size="large" type="info">确认绑定</van-button>
             </div>
           </div>
        </div>
         <loading :componentload="componentload"></loading>
    </div>
</template>
<script>
// import area from '@/config/area.js'
import loading from '@/components/loading'
import {axiosPost,axiosGet} from '@/lib/http'
// import { bankCardAttribution } from '../../lib/bankName'
import Bank from '@/lib/bank'
import storage from '@/lib/storage'
export default {
     components:{
      loading
    },
    data(){
        return{
            // area: '请选择支行地址',
            show: false,
            title: '获取验证码',
            areaList:{},
            name:"",
            phone:"",
            bankcardno:"",
             componentload:false,
            idCard:"",
            year:"",
            month:"",
            safeCode:"",
            // autoCode:"",
            // orderId:"",
            billdate:"",
            duedate:"",
            bankcode:""
        }
    },
    created(){
        
    },
    methods:{
        handleReturnHome(){
            this.$router.go(-1)
        },
       

       
           
        // 绑卡
        bindingCard(){
             let partern=/0?(13|14|15|16|17|18|19)[0-9]{9}/
             if(!partern.test(this.phone)){
                 this.$toast({
                    message:"请输入11位手机号码"
                })
                return
             }

            if(this.name.trim().length===0 || this.phone.trim().length===0 || this.bankcardno.trim().length===0 || this.idCard.trim().length===0){
                 this.$toast({
                    message:"请将信息填写完整"
                })
                return
            }

             if(this.month.length==1){
                this.month='0'+this.month
            }
            if(this.duedate.length==1){
                this.duedate='0'+this.duedate
            }
            if(this.billdate.length==1){
                this.billdate=='0'+this.billdate
            }

            this.componentload=true
            axios.get('https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?_input_charset=utf-8&cardNo='+this.bankcardno+'&cardBinCheck=true')
             .then(responce=>{
                 if(responce.data.bank){
                      this.bankcode=responce.data.bank
                      Bank.forEach(info => {
                        if(this.bankcode==info.bankCode){
                            this.bankcode=info.bankName
                        }
                    });
                 }
                
             })
             .catch(err=>{
                 console.log(err,"error")
             })


             setTimeout(()=>{
                              let data={
                                cardNo:this.bankcardno,
                                phone:this.phone,
                                idCardNo:this.idCard,
                                idCardType:"身份证",
                                payerName:this.name,
                                year:this.year,
                                month:this.month,
                                cvv2:this.safeCode,
                                billdate:this.billdate,
                                duedate:this.duedate,
                                bankname:this.bankcode
                          }
                        //   console.log(data,"data绑卡中的参数")
                        
                        axiosPost("/creditCard/bindCreditCard",data)
                            .then(res=>{
                                    if(!res.data.success){
                                    this.$toast({
                                        message:res.data.message
                                    })
                                    this.componentload=false
                                } else {
                                    this.$router.go(-1)
                                    this.componentload=false
                                }  
                            })
                            .catch(err=>{
                                
                            })

                        },100)
            // this.$http.get('https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?_input_charset=utf-8&cardNo='+this.bankcardno+'&cardBinCheck=true')
            //         .then(responce=>{
            //             let bank=responce.data.bank
            //              Bank.forEach(item => {
            //                 if(item.bankCode==bank){
            //                     this.bankcode=item.bankName
            //                 }
            //             });

            //         })
             
              

        }

       
    }    
}
</script>
<style lang="less" >
    #binding-credit-card{
        background: #EEEFF1;
        width: 100vw;
        height: 120vh;
        .container {
           padding-bottom: 50px;
           background-color: #EEEFF1;
           font-size:30px;
            >.phone {
                .btn {
                        margin-top:30px;
                        padding-left:20px;
                        padding-right: 20px;
                        font-size: 30px;
                        >button {
                            height:80px;
                            background-color: #4B66AF;
                            border-color: #4B66AF;
                        }
                    }
               >ul{
                  
                   background-color: #fff;
                    .shadow {
                        height:20px;
                        width:100%;
                        background-color: rgb(243, 239, 239);
                        }
                   >li{
                       display: flex;
                       flex-wrap: nowrap;
                        padding-left:30px;
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
                           height: 100px;
                            margin-top:-26px;
                            font-size: 30px;
                            text-align: right;
                       }
                        ::-webkit-input-placeholder{
                            font-size:28px;
                            margin-top:-22px;
                        }
                   }
               }
           }
        }
        .loan .van-nav-bar {
          background-color: #4B66AF !important;
          height: 96px;
          line-height: 96px;
         }
         .van-nav-bar__title {
             color:#fff;
             font-size: 30px;
         }
         .tips {
             margin:20px;
         }
         .van-nav-bar .van-icon  {
             color:#fff;
              font-size: 30px;
         }
         .van-nav-bar__text{
             color:#fff;
              font-size: 30px;
         }
        .top{
            margin-top: 20px;
        }
        .user-input{
            width: 100%;
            height: 100px;
            background: white;
            >.title{
                width: 25vw;
                height: 90%;
                margin-top: 10px;
                margin-left: 5vw;
                font-weight: bold;
                font-size: 0.4rem;
                &.year {
                     width:40vw;
                }
            }
            .input{
                width: 70vw;
                height: 100%;
                 box-sizing: border-box;
                // >input{
                //     width: 100%;
                //     height: 90%;
                //     margin-top: 5px;
                //     border: none;
                // }
                >input{
                    width: 100%;
                    height: 90%;
                    margin-top: 5px;
                    border: none;
                    font-size: 30px;
                     box-sizing: border-box;
                     background-color: yellow;
                  }
                 ::-webkit-input-placeholder{
                    font-size:28px;
                    margin-top:0px;
                    background-color: red;
                    position: relative;
                    bottom:0px;
                 }
                 
            }
            .safe-code{
                width: 40vw;
                height: 100%;
                >input{
                    width: 100%;
                    height: 90%;
                    border: none;
                     margin-top:5px;
                    font-size: 30px;
                    box-sizing: border-box;
                       background-color: yellow;
                  }
                   ::-webkit-input-placeholder{
                    font-size:28px;
                    margin-top:22px;
                     box-sizing: border-box;
                     background-color: red;
                     position: relative;
                   bottom:0px;
                }
                
            }
            .get-code{
                width: 30vw;
                height: 100%;
                >div{
                    background: #4B66AF;
                    color: white;
                    padding: 15px;
                    border-radius: 10px;
                }
            }
        }
        .next-stop{
            width: 90vw;
            padding-top:30px;
            padding-bottom: 30px;
            margin-left: auto;
            margin-right: auto;
            background-color: #4B66AF;
            color: white;
            margin-top: 50px;
            border-radius: 20px;
        }
        .position{
            width: 100vw;
            z-index: 2;
            position: fixed;
            left: 0;
            bottom: 0;
        }
    }
</style>

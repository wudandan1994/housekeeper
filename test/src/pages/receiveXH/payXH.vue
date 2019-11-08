<template>
    <div id="payxh">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>确认支付</span>
            <span></span>
        </header>
        <div class="container">
           <div class="phone">
               <ul>
                    <li>
                        <span>姓名</span>
                       <input v-model="realName" type="text" placeholder="姓名">
                   </li>
                    <li>
                        <span>身份证</span>
                       <input v-model="idCardNo"  type="text" placeholder="身份证号码">
                   </li>
                    <div class="shadow"></div>
                    <li>
                        <span>有效期</span>
                       <input v-model="valiateDate"  type="number" placeholder="信用卡有效期 如 03/21 填写 0321">
                   </li>
                    <li>
                        <span>安全码</span>
                       <input v-model="cvv2"  type="number" placeholder="安全码">
                   </li>
                    <div class="shadow"></div>
                   <li>
                        <span>信用卡卡号</span>
                       <input v-model="payBankCard"  type="number" placeholder="支付信用卡卡号">
                   </li>
                    <li>
                       <span>信用卡手机号</span>
                       <input type="number" v-model="payPhoneNum" placeholder="信用卡预留手机">
                   </li> 
                    <div class="shadow"></div>
                   <li>
                        <span>储蓄卡卡号</span>
                       <input v-model="intoBankCard"  type="number" placeholder="储蓄卡卡号">
                   </li>
                    <li>
                       <span>储蓄卡手机号</span>
                       <input type="number" v-model="intoPhoneNum" placeholder="储蓄卡预留手机号">
                   </li> 
                    <li>
                        <span>订单金额</span>
                       <input v-model="payMoney" type="number" placeholder="付款金额">
                   </li>
                   
                  
                    <!-- <li>
                        <span>到账卡号</span>
                       <input v-model="accountNum"  type="number" placeholder="到账卡号">  
                   </li> -->
                   
                    <div class="shadow"></div>
                  
                   <!-- <li>
                       <span>地区</span>
                       <input   v-model="area" placeholder="选择消费地区">
                       <span @click="selectArea"> <van-icon size="24px" name="arrow"/></span>
                   </li> 
                   <van-popup v-model="show" position="bottom"  >
                       <van-picker  show-toolbar   @cancel="onCancel"  title="选择地区" :columns="columns" @change="onChange"  @confirm="onConfirm" />
                   </van-popup> -->
               </ul>
           </div>
           <div class="at-once">
                   <van-button  @click="pay" size="large" round type="info">确认</van-button>
           </div>
        </div>
        <loading :componentload="componentload"></loading>
    </div>
</template>


<script>
import storage from '@/lib/storage'
import {axiosPost} from '@/lib/http'
import loading from '@/components/loading'
import { citys } from '../../lib/city.js'
export default {
    data() {
        return {
           componentload: false,
           amount:"",
           realName:"",
           idCardNo:"",
           payBankCard:"",
           payPhoneNum:"",
           area:"",
           cvv2:"",
           intoBankCard:"",
           valiateDate:"",
           intoPhoneNum:"",
           payMoney:"",
           show:false,
           columns: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: citys['浙江'],
          className: 'column2',
          defaultIndex: 2
        }
      ],
        cxinfo:{},
        xyinfo:{}

        }
    },
     components:{
      loading
    },
    methods:{
       goBack(){
           this.$router.push({
               path:"/home/receiveXH",
           })       
       },
       selectArea(){
        this.show=!this.show
       },
    //    onConfirm(value){
    //       this.area=value.join("-")
    //       if(this.area=='北京市-'){
    //             this.area='北京市-北京市'
    //         }
    //       this.show=false
    //    },
    //    onCancel(){
    //        this.show=false
    //    },
    //    onChange(picker,values){
    //         picker.setColumnValues(1, citys[values[0]])
    //    },
       pay(){

           if(this.realName.trim().length==0 ||this.idCardNo.trim().length==0 ||this.payBankCard.trim().length==0 ||this.payPhoneNum.trim().length==0 ||this.intoBankCard.trim().length==0 ||
           this.intoPhoneNum.trim().length==0 ||this.payMoney.trim().length==0 ||this.valiateDate.trim().length==0 ||this.cvv2.trim().length==0  ) {
               return this.$toast("请将信息填写完整")
           }

             if(Number(this.payMoney)<200){
                return this.$toast("单笔金额200元起")
            }


           let data={
              realName:this.realName,
              idCardNo:this.idCardNo,
              payBankCard:this.payBankCard,
              payPhoneNum:this.payPhoneNum,
              intoBankCard:this.intoBankCard,
              intoPhoneNum:this.intoPhoneNum,
              payMoney:this.payMoney,
              valiateDate:this.valiateDate,
              cvv2:this.cvv2
           }

           this.componentload=true
           axiosPost("/creditCard/zlpayment",data)
           .then(res=>{
               if(res.data.success) {
                   let responce=res.data.data
                   responce=JSON.parse(responce)
                   let url=responce.payUrl

                    // this.$router.push({
                    //     path:"/home/online",
                    //     query:{
                    //         info:url,
                    //         title:"支付"
                    //     }
                    // })


                    if (!navigator.userAgent.match(/iPad|iPhone/i)){
                        this.$router.push({
                            path:"/loan/form/myOrder",
                            query:{
                                info:url,
                                title:"支付"
                            }
                        })
                         this.componentload=false
                        } else {
                            this.componentload=false
                            location.href=url
                        }
               } else {
                   setTimeout(()=>{
                       this.componentload=false
                       this.$toast(res.data.message)
                   },1500)
                     
               }
           })
       }
     
      
    
    
    },
    created () {
        this.payMoney=this.$route.query.number
        if(this.xyinfo){
             this.xyinfo=this.$route.query.xyinfo
            this.cxinfo=this.$route.query.cxinfo
            this.realName=this.xyinfo.payerName
            this.idCardNo=this.xyinfo.idCardNo
            this.valiateDate=this.xyinfo.month+this.xyinfo.year
            this.cvv2=this.xyinfo.cvv2
            this.payBankCard=this.xyinfo.cardNo
            this.payPhoneNum=this.xyinfo.phone
        }  
        if(this.cxinfo){
            this.intoBankCard=this.cxinfo.bankcardno
            this.intoPhoneNum=this.cxinfo.phone
        } 
       
        





    },
   
    mounted () {
      
    }
}
</script>

<style lang="less">
   #payxh {
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
           .van-picker__cancel{
                color:#000;
            }
            .van-picker__toolbar{
                padding:10px 15px;
            }
             .van-picker-column__item--selected{
                color:#4B66AF;
                font-weight: bold;
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
                   background-color: #fff;
                    .shadow {
                            height:20px;
                            width:100%;
                            background-color: rgb(243, 239, 239);
                        }
                   >li{
                       display: flex;
                       flex-wrap: nowrap;
                       border-bottom: 1px solid #ccc;
                       padding-top:30px;
                       padding-bottom: 30px;
                       padding-left:30px;
                       height: 60px;
                       line-height: 50px;
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
                   font-size: 40px;   
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

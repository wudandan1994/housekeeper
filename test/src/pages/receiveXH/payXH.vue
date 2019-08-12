<template>
    <div id="payment">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>确认支付</span>
            <span></span>
        </header>
        <div class="container">
           <div class="phone">
               <ul>
                    <li>
                        <span>订单金额</span>
                       <input v-model="amount" type="number" placeholder="付款金额">
                   </li>
                    <li>
                        <span>证件号</span>
                       <input v-model="id_cardno"  type="text" placeholder="身份证号码">
                   </li>
                   <div class="shadow"></div>
                    <li>
                        <span>到账卡号</span>
                       <input v-model="accountNum"  type="number" placeholder="到账卡号">  
                   </li>
                    <li>
                        <span>支付卡号</span>
                       <input v-model="bankcardNum"  type="number" placeholder="支付信用卡卡号">
                   </li>
                    <div class="shadow"></div>
                   <li>
                       <span>手机号</span>
                       <input type="number" v-model="phone" placeholder="手机号码">
                   </li> 
                   <li>
                       <span>地区</span>
                       <input   v-model="area" placeholder="选择消费地区">
                       <span @click="selectArea"> <van-icon size="24px" name="arrow"/></span>
                   </li> 
                   <van-popup v-model="show" position="bottom"  >
                       <van-picker  show-toolbar   @cancel="onCancel"  title="选择地区" :columns="columns" @change="onChange"  @confirm="onConfirm" />
                   </van-popup>
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
           account_name:"",
           id_cardno:"",
           bankcardNum:"",
           phone:"",
           info:"",
           cardNum:"",
           merchantno:"",
           accountNum:"",
           area:"",
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
      ]

        }
    },
     components:{
      loading
    },
    methods:{
       goBack(){
           this.$router.push({
               path:"/home/receiveXH",
               query:{
                   params:this.info
               }
           })       
       },
       selectArea(){
        this.show=!this.show
       },
       onConfirm(value){
          this.area=value.join("-")
          if(this.area=='北京市-'){
                this.area='北京市-北京市'
            }
          this.show=false
       },
       onCancel(){
           this.show=false
       },
       onChange(picker,values){
            picker.setColumnValues(1, citys[values[0]])
       },
       pay(){
           let data={
               bankcardNum:this.bankcardNum,
               merchantno:this.merchantno,
               account_name:this.info.payerName,
               amount:this.amount,
               phone:this.phone,
               id_cardno:this.id_cardno,
               accountNum:this.accountNum,
               area:this.area
           }

           this.componentload=true
           axiosPost("/txstar/repaymentConsume",data)
           .then(res=>{
               console.log(res,'支付结果')
               setTimeout(()=>{
                    if(res.data.success){
                        this.$toast(res.data.message)
                    } else {
                        this.$toast(res.data.message)
                    }
                 this.componentload=false

               },1500)
             
           })
       }
     
      
    
    
    },
    created () {
        this.info=this.$route.query.info
        this.amount=this.$route.query.number
        this.merchantno=this.$route.query.merchantno
        console.log(this.merchantno,'merchantno')
        this.accountNum=storage.get("cxcardnumber")
        this.bankcardNum=this.info.cardNo
        this.phone=this.info.phone
        this.id_cardno=this.info.idCardNo


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

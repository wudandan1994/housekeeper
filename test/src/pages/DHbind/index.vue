<template>
    <div id="dhbind">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>绑定信用卡</span>
            <span></span>
        </header>
        <div class="container">
            <div class="phone">
               <ul>
                   <li>
                        <span>用户名：</span>
                       <input  v-model="name" type="text" placeholder="开户姓名">
                   </li>
                    <li>
                        <span>银行卡号：</span>
                       <input v-model="accountNo"  type="number" placeholder="银行卡号">
                   </li>
                   <li>
                       <span>手机号：</span>
                       <input type="number" v-model="mobileNo" placeholder="手机号码">
                   </li>
                   <li>
                       <span>身份证号：</span>
                       <input type="text"  v-model="idcardNo" placeholder="身份证号码" >
                   </li>
                    <li>
                       <span>验证码：</span>
                       <input type="text"  v-model="code" placeholder="短信验证码" >
                   </li>
                 
                   
               </ul>
           </div>
           <div class="submit">
                <van-button size="large" @click="binding" round type="default">立即绑卡</van-button>
           </div>
            <div>
               
            </div>
        </div>
    </div>

</template>



<script>
import { axiosPost } from '../../lib/http'
export default {
    data() {
        return {
            name:"",
            accountNo:"",
            mobileNo:"",
            idcardNo:"",
            area:"",
            item:"",
            userId:"",
            code:"",
            tranSerialNum:""
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
        getCode(){
             this.$http.get('https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?_input_charset=utf-8&cardNo='+this.accountNo+'&cardBinCheck=true')
             .then(res=>{
                    let bankcode=res.data.bank
                    let data={
                        userId:this.userId,
                        cardNum:this.accountNo,
                        bankAgentId:bankcode,
                        userName:this.name,
                        certificateNum:this.idcardNo,
                        mobile:this.mobileNo
                    }
                    axiosPost("/dhcreditCard/dhBind",data)
                    .then(res=>{
                        // console.log(res,'result')
                        this.tranSerialNum=res.data.data.tranSerialNum
                        // console.log(this.tranSerialNum)
                    })
             })
            



        },

        binding(){
            let data={
                // userId:this.userId,
                // cvn2:this.item.cvv2,
                // valid:this.item.month+this.item.year,
                // phoneCode:this.code

                 userId:'e677f85fee57649f810315145cd5ab95',
                cvn2:'123',
                valid:'1123',
                 phoneCode:this.code,
                 tranSerialNum:this.tranSerialNum
            }
            axiosPost("dhcreditCard/dhBackVerifyBind",data)
            .then(res=>{
                console.log(res,"短信")
            })

            
          
        }
    },
    created () {
        this.item=this.$route.query.info 
        // this.name=this.item.payerName
        // this.accountNo=this.item.cardNo
        // this.mobileNo=this.item.phone
        //  this.idcardNo=this.item.idCardNo
        //  this.userId=this.$route.query.userId

         this.name="互联网"
        this.accountNo="6221558812340000"
        this.mobileNo='13552535506'
         this.idcardNo="341126197709218366"
          this.userId='e677f85fee57649f810315145cd5ab95'
         this.getCode()
    }
}
</script>

<style lang="less">
   #dhbind {
       >header {
            background: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           font-size:28px;
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
                       padding-right: 40px;
                       height: 60px;
                       line-height: 60px;
                       color:#000;
                       .area {
                           margin-right: 20px;
                       }
                       >span {
                           &:nth-of-type(1){
                               font-weight: bold;
                           }
                       }
                       
                       >span {
                           &:nth-of-type(2){
                               padding:0 10px;
                               margin-right:20px;
                               margin-top:8px;
                               line-height: 60px;
                               border-radius: 10px;
                           }
                        }
                       input {
                           border:none;
                           flex: 1;
                           font-size: 30px;
                           text-align: right;

                       }
                       input::-webkit-input-placeholder {
                           font-size: 28px;
                           padding-top: 8px;
                           height: 30px;
                           line-height: 30px;
                       }
                   }
               }
               .van-picker__cancel{
                   font-size:30px;
                   color:#000;
               }
               .van-picker-column__item--selected {
                   color:#4B66AF;
                   font-weight: bold;
               }
               .van-picker__toolbar{
                   height: 40px;
                   line-height: 40px;
                   font-size: 30px;
               }
           }
           >.submit {
               margin-top:30px;
               padding:0 30px;
           }
       }
   }
</style>

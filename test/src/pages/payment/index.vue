<template>
    <div id="payment">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>快捷支付</span>
            <span></span>
        </header>
        <div class="container">
           <div class="phone">
               <ul>
                    <li>
                        <span>订单金额:</span>
                       <input v-model="orderAmount" type="number" placeholder="请填写付款金额">
                   </li>
                    <li>
                        <span>真实姓名:</span>
                       <input v-model="realName"  type="text" placeholder="请填写真实姓名">
                   </li>
                    <li>
                        <span>证件号</span>
                       <input v-model="idCard"  type="text" placeholder="请填写身份证号码">
                   </li>
                    <li>
                        <span>卡号</span>
                       <input v-model="accNo"  type="number" placeholder="请填写信用卡卡号">
                   </li>
                   <li>
                       <span>手机号</span>
                       <input type="number" v-model="mobile" placeholder="请输入手机号码">
                   </li>
               </ul>
           </div>
           <div class="at-once">
                   <van-button  @click="pay" size="large" round type="info">确认</van-button>
           </div>
           <div class="record">
                <van-button  @click="record" size="middle" round type="primary">交易查询</van-button>
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
           number:""
        }
    },
    methods:{
       goBack(){
           this.$router.push("/home")              
       },
       record(){
           let data={
               chMerCode:this.chMerCode,
               orderCode:this.number
           }
           axiosPost("http://pay.91dianji.com.cn/api/creditCard/getTradeQuery",data)
           .then(res=>{
               console.log(res,"查看历史记录成功");
               
           })
           .catch(err=>{
               console.log(err,"查看历史记录失败")
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
            axiosPost("http://pay.91dianji.com.cn/api/creditCard/quickPay",data)
            .then(res=>{
                if(!res.data.success){
                    this.$toast({
                        message:res.data.message
                    })
                    return
                }
                location.href=res.data.data.url.replace("http://localhost:8080","http://test.man-opaydev.ncfgroup.com/fusionPosp")
                //  location.href=res.data.data.url
            })
            .catch(err=>{
                console.log(err,"调取失败");
            })
       },
    //    查询商户编号
        search(){
            axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberReg")
            .then(res=>{
                console.log(res,"result");
                if(!res.data.success){
                    this.$toast({
                        message:res.data.message
                    })
                    return
                }
                 this.chMerCode=res.data.data.chMerCode
            })
            .catch(err=>{
                console.log(err,"error");
                
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
           font-size:28px;
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
                           margin-left:10px;
                       }
                   }
               }
           }
           >.at-once {
               margin-top:200px;
               padding:0 20px;
               >button {
                   height: 90px;
                   font-size: 28px;
               }
           }
           >.record {
               margin-top:50px;
               padding-left:50px;
               >button {
                   padding:5px 20px;
                   height: 70px;
               }
               .van-button--primary {
                   background-color: #767677;
                   border:1px solid #ccc;
               }
           }
       }
   }
</style>

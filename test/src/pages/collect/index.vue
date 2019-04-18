<template>
    <div id="collect">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>商户收款</span>
            <span></span>
        </header>
        <div class="container">
           <div class="phone">
               <ul>
                   <li>
                       <span>输入预留手机号</span>
                       <input type="number" v-model="reservedMobile" placeholder="输入银行预留手机号码">
                       <!-- <span>
                            <span v-show="showCount">{{count}}秒后再次获取</span>
                            <span @click="getCode" v-show="showCode">获取验证码</span>
                       </span> -->
                   </li>
                    <li>
                        <span>商户名称:</span>
                       <input v-model="merName" type="text" placeholder="请填写商户名称">
                   </li>
                    <li>
                        <span>真实姓名:</span>
                       <input v-model="realName"  type="text" placeholder="请填写真实姓名">
                   </li>
                    <li>
                        <span>地址:</span>
                       <input  v-model="merAddress"   type="text" placeholder="请填写除省份、城市和区县外的地址信息">
                   </li>
                    <li>
                        <span>证件号</span>
                       <input v-model="idCard"  type="text" placeholder="请填写身份证号码">
                   </li>
                   <li>
                        <span>结算户名</span>
                       <input  v-model="accountName" type="text" placeholder="真实姓名与结算户名必须一致">
                   </li>
                    <li>
                        <span>卡号</span>
                       <input v-model="accountNo"  type="number" placeholder="请填写储蓄卡卡号">
                   </li>
                   <li>
                       <span>手机号</span>
                       <input type="number" v-model="mobile" placeholder="请输入手机号码">
                   </li>
                   <li>
                        <span>联行号</span>
                       <input v-model="subBankCode"  type="number" placeholder="请输入改支行联行号">
                   </li>
                    <li>
                        <span>结算户类型</span>
                       <input v-model="settleAccType"  type="text" placeholder="请选择结算户类型">
                       <span><van-icon name="arrow"/></span>
                   </li>
                   <li>
                        <span>商户类型</span>
                       <input  v-model="merType" type="text" placeholder="请选择商户类型">
                        <span><van-icon name="arrow"/></span>
                   </li>
               </ul>
           </div>
           <div class="at-once">
                   <van-button  @click="register" size="large" round type="info">注册店铺</van-button>
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
            reservedMobile:"",
             mobile:"",
            merName:"",
           realName:"",
           merAddress:"",
           idCard:"",
           accountName:"",
           accountNof:"",
           subBankCode:"",
           settleAccType:"",
           merType:"",
        }
    },
    methods:{
        goBack() {
            this.$router.push('/logIn')
        },
        register(){
            let that=this
            let partten=/^1\d{10}$/
            if(that.reservedMobile.trim().length===0 || that.mobile.trim().length===0){
                that.$toast({
                    message:"手机号码不能为空"
                })
                return
            }
            if(!partten.test(that.reservedMobile) || !partten.test(that.mobile)){
                that.$toast({
                    message:"请填写11位手机号码"
                })
                return
            }
            if(that.realName.trim().length===0 || that.merName.trim().length===0 || that.merAddress.trim().length===0 || that.idCard.trim().length===0 || that.accountName.trim().length===0
            
            ){
                that.$toast({
                    message:"请将信息填写完整"
                })
            }









        }
      
    }
}
</script>

<style lang="less">
   #collect {
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
       }
   }
</style>

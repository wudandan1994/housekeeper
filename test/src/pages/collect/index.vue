<template>
    <div id="collect">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>商户申请</span>
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
                       <span @click="showAcc"><van-icon name="arrow"/></span>
                             <van-actionsheet
                            v-model="show"
                            :actions="actions"
                            cancel-text="取消"
                            @select="onSelect"
                            @cancel="onCancel"
                            />
                   </li>
                   <li>
                        <span>商户类型</span>
                       <input  v-model="merType" type="text" placeholder="请选择商户类型">
                        <span @click="showMer"><van-icon name="arrow"/></span>
                         <van-actionsheet
                            v-model="showTwo"
                            :actions="action"
                            cancel-text="取消"
                            @select="onSelectTwo"
                            @cancel="onCancelTwo"
                            />
                   </li>
               </ul>
           </div>
           <div class="at-once">
                   <van-button  @click="register" size="large" round type="info">下一步</van-button>
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
           accountNo:"",
           subBankCode:"",
           settleAccType:"",
           merType:"",
           show:false,
           showTwo:false,
            actions: [
                {
                    name: '公户'
                },
                {
                    name:"私户"
                }
             ],
             action:[
                 {
                     name: '个人户' 
                 },
                 {
                      name: '小微户' 
                 },
                  {
                      name: '个体户' 
                 },
                  {
                      name: '公司户' 
                 },
             ]
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home')
        },
        onSelect(item){
             this.show = true;
            this.settleAccType=item.name
        },
        onCancel(){
            this.show=false
        },
        showAcc(){
            this.show=true
            
        },
        showMer(){
            this.showTwo=true
        },
        onSelectTwo(item){
            this.showTwo=true
             this.merType=item.name
        },
        onCancelTwo(){
            this.showTwo=false
        },
        // 申请商铺
        register(){
            let that=this
            let type=""
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
            || that.accountNo.trim().length===0 || that.subBankCode.trim().length===0 || that.settleAccType.trim().length===0 || that.merType.trim().length===0
            ){
                that.$toast({
                    message:"请将信息填写完整"
                })
                return
            }
            if(that.realName!==that.accountName){
                 that.$toast({
                    message:"姓名与结算户名不一致"
                })
                return
            }

            if(that.merType==="个人户"){
                type="1"
            } else if(that.merType==="小微户"){
                type="2"
            } else if(that.merType==="个体户"){
                type="3"
            } else {
                type="4"
            }
            let data={
                merName:that.merName,
                realName:that.realName,
                merAddress:that.merAddress,
                idCard:that.idCard,
                mobile:that.mobile,
                accountName:that.accountName,
                accountNo:that.accountNo,
                reservedMobile:that.reservedMobile,
                subBankCode:that.subBankCode,
                settleAccType:that.settleAccType==="公户"? "1":"2",
                merType:type
            }
            axiosPost("http://pay.91dianji.com.cn/api/creditCard/memberReg",data)
            .then(function(res){
                console.log(res,"result");
                if(!res.data.success){
                    that.$toast({
                        message:res.data.message
                    })
                    return
                }
                that.$toast({
                    message:res.data.message
                })
                let info=res.data.data.chMerCode
                that.$router.push({
                    path:"/home/collect/open",
                    query:{
                        info,
                    }
                })
            })
            .catch(function(err){
                console.log(err,"error")
                
            })

        },
        // 查询个人信息
         searchInfo(){
             let that=this
            axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberReg")
        .then(function(res){
           let info=res.data.data.chMerCode
            if(res.data.success){
                that.$router.push({
                     path:"/home/collect/open",
                    query:{
                        info,
                    }
                })
            }
            
        })
        .catch(function(err){
            console.log(err,"error个人信息")
            
        })
     }
        
    },
   
    mounted () {
        this.searchInfo()

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

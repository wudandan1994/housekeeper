<template>
    <div id="logOut">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>注册</span>
            <span></span>
        </header>
        <div class="container">
           <p>请获取短信验证，并设置新的登录密码</p>
           <div class="phone">
               <ul>
                   <li>
                       <span>+86</span>
                       <input type="number" v-model="mobile" placeholder="输入11位手机号码">
                       <span>
                            <span v-show="showCount">{{count}}秒后再次获取</span>
                            <span @click="getCode" v-show="showCode">获取验证码</span>
                       </span>
                   </li>
                    <li>
                        <span>输入验证码:</span>
                       <input v-model="authcode" type="number" placeholder="输入验证码">
                   </li>
                    <li>
                        <span>新密码:</span>
                       <input v-model="newPassword" type="password" placeholder="输入6-18位字母加数字新密码">
                   </li>
                    <li>
                        <span>再次输入新密码:</span>
                       <input v-model="suerPassword" type="password" placeholder="输入新密码">
                   </li>
                    <li>
                        <span>输入推荐码</span>
                       <input v-model="code" type="number" placeholder="输入推荐码">
                   </li>
               </ul>
           </div>
           <div @click="modify" class="at-once">立即注册</div>
        </div>
    </div>
</template>


<script>
import storage from '@/lib/storage'
import {axiosPost} from '@/lib/http'
export default {
    data() {
        return {
            count:60,
            showCount:false,
            showCode:true,
            mobile:"",
            authcode:"",
            newPassword:"",
            suerPassword:"",
            code:"",
        }
    },
    methods:{
        goBack() {
            this.$router.push('/logIn')
        },
        // 获取验证码
        getCode(){
            let that=this
            let partten=/^1\d{10}$/
            if(!partten.test(that.mobile)){
                 that.$toast({
                    message:"请填写11位手机号码"
                })
                 return
            }  else  {
                let data={
                    mobile:that.mobile,
                    type:"2"
                }
                let url="http://pay.91dianji.com.cn/api/customer/sendSms"
                 axiosPost(url,data)
                .then(function(res){
                    if(!res.data.success){
                        that.$toast({
                            message:res.data.message
                        })
                    } else {
                         that.showCount=true
                         that.showCode=false
                    }
                    if(that.showCount){
                        that.timerId=setInterval(function(){
                            that.count--
                            if(that.count<=0){
                                that.showCount=false
                                that.showCode=true
                                that.count=60
                                clearInterval(that.timerId)
                            }
                        },1000)
                    }
                })
                .catch(function (err) {
                   that.$toast({
                    message:"请勿重复发送短信"
                  })
                })
            }
        },
        // 注册
        modify(){
             let that=this
            let partten=/^1\d{10}$/  // 11位手机号的正则
            if(!partten.test(that.mobile)){
                 that.$toast({
                    message:"请填写11位手机号码"
                })
                 return
            }
            
            if(that.authcode.trim().length===0){
                 that.$toast({
                    message:"请输入验证码"
                })
                 return
            }
            if(that.newPassword.trim().length===0){
                 that.$toast({
                    message:"请输入新密码"
                })
                 return
            }
            
            if(that.suerPassword.trim().length===0){
                 that.$toast({
                    message:"请确认密码"
                })
                 return
            }
            if(that.newPassword !== that.suerPassword){
                 that.$toast({
                    message:"两次输入的密码不一致，请重新填写"
                })
                 return
            }
            if(that.code.trim().length===0){
                 that.$toast({
                    message:"请输入推荐码"
                })
                 return
            }


            let data={
                mobile:that.mobile,
                authcode:that.authcode,
                recommendedcode:that.code,
                password:that.suerPassword,
            }
                 // 注册
             axiosPost("http://pay.91dianji.com.cn/api/customer/insertPhoneRegistered",data)
             .then(function(res){
                 if(!res.data.success){
                     that.$toast({
                         message:res.data.message
                     })
                     return
                 }
                 let datas={
                     mobile:that.mobile,
                     password:that.password
                 }
                //  登录
                 axiosPost("http://pay.91dianji.com.cn/api/customer/login",datas)
                 .then(function(res){
                     that.$router.push("/home")
                 })
                 .catch(function(err){
                 })
             })
             .catch(function(err){
                 console.log(err,"error");
             })
           
        }
    },
    created(){
        this.code = storage.get('recommendedcode');
    }
}
</script>

<style lang="less">
   #logOut {
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
                               color:white;
                               background-color: #4965AE;
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
               width:90%;
               background-color: #4965AE;
               color:white;
               margin-top:200px;
               margin-left:5%;
               text-align: center;
               padding:30px;
               border-radius: 10px;
           }
       }
   }
</style>

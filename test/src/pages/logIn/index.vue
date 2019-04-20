<template>
    <div id="progress-query">
        <div class="container">
           <div class="logo">
               <img src="http://pay.91dianji.com.cn/logo.png" alt="">
           </div>
           <div class="info">
                <p>
                    <span><van-icon name="phone" size="28px"/></span>
                    <input type="number" v-model="phone" placeholder="请输入手机号码">
                </p>
                <p>
                    <span><van-icon name="lock" size="28px"/></span>
                    <input type="password" v-model="password" placeholder="请输入密码">
                </p>
           </div>
           <div class="password">
               <p>
                    <van-checkbox v-model="checked" shape="square" checked-color="#4b66af">记住密码</van-checkbox>
                    <span>&nbsp;</span>
               </p>
               <p @click="forgetPassword">忘记密码？</p>
           </div>
           <van-button @click="logInPass" class="login center" type="default">登录</van-button>
            <div class="wx-login row">
                <div class="logIn start-center" @click="logIn">
                    <span class="wx-logo"><van-icon name="http://pay.91dianji.com.cn/wx.png"/></span>
                    <span>微信登录</span>
                </div>
                <div class="register end-center" @click="register">注册</div>
            </div>
        </div>
    </div>

</template>


<script>
import qs from 'qs'
import {axiosPost} from '@/lib/http'
export default {
    data() {
        return {
            radio:"1",
            checked:false,
            phone:"",
            password:""
        }
    },
    methods:{
        // password(){
        // },
        forgetPassword() {
            this.$router.push('/forgetPassword')
        },
        register(){
             this.$router.push('/logOut')
        },
        logInPass(){
             
            let that=this
            if(that.phone.trim().length===0){
                that.$toast({
                    message:"请输入手机号码"
                })
                return
            }
            if(that.password.trim().length===0){
                that.$toast({
                    message:"请输入密码"
                })
                 return
            }
            let data={
                mobile:that.phone,
                password:that.password
            }
            that.$http.post("http://pay.91dianji.com.cn/api/customer/login",qs.stringify(data))
            .then(function(res){
                if(res.data.success){
                    that.$router.push('/home')
                }else{
                    that.$toast({
                        message:res.data.message
                    })
                }
                 
               
            })
            .catch(function(err){
                console.log(err,"error");  
            })
        },
        logIn(){
            location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx779a30a563ad570d&redirect_uri=http%3a%2f%2fpay.91dianji.com.cn%2f%23%2fhome&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
        }
    }
}
</script>

<style lang="less">
   #progress-query {
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
        //    padding-top:96px;
           padding-bottom: 50px;
           background-color: #fff;
           >.logo {
               padding-top:100px;
               width:40%;
                margin:0 auto;
               >img {
                   display: block;
                   width:100%;
                   padding-bottom: 20px;
               }
           }
           >.info {
               width:80%;
               margin:80px 10% 0px 10%;
               >p {
                   background-color: #f2f2f2;
                   color:#fff;
                   display: flex;
                   padding:20px 10px;
                   >span {
                      color: #4B66AF;
                   }
                   &:nth-of-type(1) {
                       margin-bottom: 40px;
                   }
                   >input {
                       border:none;
                       flex: 1;
                       color:#000;
                       background-color: #f2f2f2;
                       font-size: 28px;
                   }
                    input::-webkit-input-placeholder{
                        padding-top: 10px;
                        font-size: 26px;
                    }
               }
           }
           >.password {
               width:80%;
               margin:0 auto;
               display: flex;
               justify-content: space-between;
               padding-bottom: 20px;
               >p {
                    padding:20px 0px;
                    font-size:26px;
                    &:nth-of-type(1) {
                        display: flex;
                       padding-bottom: 20px;
                    }
                    
               }
           }
           >.login {
               width:80%;
               height: 100px;
               border-radius: 10px;
               background-color: #4B66AF;
               margin-left: auto;
               margin-right: auto;
               color:#fff;
               text-align: center;
               border: none;
               font-size: 28px;
           }
           >.wx-login {
                width:80%;
                height: 80px;
                margin-left: 10%;
                display: flex;
                justify-content: space-around;
                margin-top:20px;
                font-size: 32px;
                .logIn{
                    width: 70%;
                    height: 100%;
                }
                .register{
                    width: 30%;
                    height: 100%;
                }

           }
       }
   }
</style>

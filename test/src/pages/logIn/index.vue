<template>
    <div id="progress-query">
        <div class="container">
           <div class="logo">
               <img src="http://pay.91dianji.com.cn/logo.png" alt="">
           </div>
           <div class="info">
                <p>
                    <span><van-icon name="phone"/></span>
                    <input type="number" v-model="phone" placeholder="请输入手机号码">
                </p>
                <p>
                    <span><van-icon name="lock"/></span>
                    <input type="password" v-model="password" placeholder="请输入密码">
                </p>
           </div>
           <div class="password">
               <p>
                   <!-- <van-radio-group   @click="password"  v-model="radio" >
                             <van-radio checked-color="#A5854B" name="1"></van-radio>
                    </van-radio-group> -->
                    <van-checkbox v-model="checked" checked-color="#000">记住密码</van-checkbox>
                    <span>&nbsp;</span>
               </p>
               <p @click="forgetPassword">忘记密码？</p>
           </div>
           <div @click="logInPass" class="login">
               登录
           </div>
            <div class="wx-login">
                <p @click="logIn">
                    <span class="wx-logo"><van-icon name="http://pay.91dianji.com.cn/wx.png"/></span>
                    <span>微信登录</span>
                </p>
                <p @click="register">注册</p>
            </div>
        </div>
    </div>

</template>


<script>
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
        register() {
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
            axiosPost("/customer/login",data)
            .then(function(res){
                console.log(res,"result");
                if(res.data.success){
                    let url = '/customer/login';
                    let params = {
                        mobile:that.phone,
                        password:that.password
                    };
                    axiosPost(url,params).then(res =>{
                        console.log('登陆成功',res);
                        if(res.data.success){
                            // that.$router.push('/home');
                        }
                    }).catch(res =>{
                        console.log('登录失败',res);
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
               padding-top:100px;
               width:80%;
               margin:0 auto;
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
               margin-left:10%;
               margin-top:10px;
               border-radius: 10px;
               background-color: #4B66AF;
               padding:30px 0px;
               color:#fff;
               text-align: center;
           }
           >.wx-login {
               width:80%;
               margin-left: 10%;
               display: flex;
               justify-content: space-around;
               margin-top:50px;
               >p {
                   font-size: 36px;
                   .wx-logo{
                       font-size: 60px;
                       display: inline-block;
                       vertical-align: middle;
                   }
                   &:nth-of-type(3) {
                       color:#4B66AF;
                   }
               }
           }
       }
   }
</style>

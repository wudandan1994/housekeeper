<template>
    <div id="progress-query">
        <header>
            <span @click="goBack"><van-icon name="close"/></span>
            <span>登录</span>
            <span></span>
        </header>
        <div class="container">
           <div class="logo">
               <img src="http://pay.91dianji.com.cn/logo.png" alt="">
           </div>
           <div class="info">
                <p>
                    <span><van-icon name="phone"/></span>
                    <input type="number" placeholder="请输入手机号码">
                </p>
                <p>
                    <span><van-icon name="lock"/></span>
                    <input type="text" placeholder="请输入密码">
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
           <div class="login">
               登录
           </div>
            <div class="wx-login">
                <p @click="logIn">
                    <span><van-icon name="like"/></span>
                    <span>微信登录</span>
                </p>
                <!-- <p @click="register">注册</p> -->
            </div>
        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {
            radio:"1",
            checked:false,
        }
    },
    methods:{
        // password(){
            
        // },
        goBack() {
            this.$router.push('/home')
        },
        forgetPassword() {
            this.$router.push('/forgetPassword')
        },
        register() {
             this.$router.push('/logOut')
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
           background: #000;
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
           background-color: #fff;
           >.logo {
               padding-top:200px;
               width:40%;
                margin:0 auto;
               >img {
                   display: block;
                   width:100%;
                   padding-bottom: 50px;
               }
           }
           >.info {
               padding-top:160px;
               width:60%;
               margin:0 auto;
               >p {
                   background-color: #ccc;
                   color:#fff;
                   display: flex;
                   padding:20px 10px;
                   >span {
                       color:#A5854B;
                   }
                   &:nth-of-type(1) {
                       margin-bottom: 60px;
                   }
                   >input {
                       border:none;
                       flex: 1;
                       color:#000;
                       background-color: #ccc;
                   }
               }
           }
           >.password {
               width:60%;
               margin:0 auto;
               display: flex;
               justify-content: space-between;
               >p {
                   padding:20px 0px;
                   font-size: 30px;
                    &:nth-of-type(1) {
                        display: flex;
                        font-size:18px;
                    }
                    
               }
           }
           >.login {
               width:60%;
               margin-left:20%;
               margin-top:20px;
               border-radius: 10px;
               background-color: #A5854B;
               padding:30px 0px;
               color:#fff;
               text-align: center;
           }
           >.wx-login {
               width:60%;
               margin-left: 20%;
               display: flex;
               justify-content: space-around;
               margin-top:50px;
               
               >p {
                   font-size: 36px;
                   &:nth-of-type(1) {
                       >span {
                           &:nth-of-type(2) {
                           }
                       }
                   }
                   &:nth-of-type(3) {
                       color:#A5854B;
                   }
               }
           }
       }
   }
</style>

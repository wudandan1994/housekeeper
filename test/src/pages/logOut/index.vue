<template>
    <div id="log-out">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span></span>
            <span></span>
        </header>
        <div class="container">
           <div class="register">
               <p>注册</p>
           </div>
           <div class="info">
               <div class="phone">
                   <span>手机号</span>
                   <input type="number" >
               </div>
                <div class="code">
                     <span>验证码</span>
                   <input type="number" >
                   <span class="getcode">获取验证码</span>
               </div>
                <div class="password">
                     <span>密码</span>
                   <input type="text" >
               </div>
               <div class="sure-password">
                    <span>确认密码</span>
                   <input type="text" >
               </div>
                <p id="logOut">注册</p>
                <p @click="goLogIn" class="check">已有账号？去登陆</p>
           </div>
           
        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        // goBack() {
        //     this.$router.push('/logIn')
        // },
        goLogIn(){
            this.$router.push('/logIn')
        }
    }
}
</script>

<style lang="less">
   #log-out{
       >header {
           background: #000;
           width:100%;
           height: 46px;
           line-height: 46px;
           padding-top:10px;
           color:#fff;
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
           padding-top:56px;
           padding-bottom: 50px;
           >.register {
               text-align: center;
               margin:50px;
               font-size: 60px;
           }
           >.info {
               margin:100px;
               >div {
                    padding:20px 40px;
                     background-color: #525252;
                     color:#FFFFFF;
                     margin-bottom: 40px;
                     border-radius: 10px;
                     display: flex;
                     &.code {
                         position: relative;
                         >.getcode{
                                position: absolute;
                                top:5px;
                                right:5px;
                                padding:20px 10px;
                                background-color: #DE890B;
                                border-radius: 10px;
                         }
                     }
                   >input {
                       border:none;
                      background-color: #525252;
                      margin-left:15px;

                   }
               }
                >#logOut {
               background-color: #A08653;
               margin-top:100px;
               padding:40px;
               text-align: center;
               color:#fff;
               border-radius: 10px;
               margin-bottom: 30px;
           }
           >.check {
               text-align: center;
               margin-top:50px;
           }
        }
          
       }
   }
</style>

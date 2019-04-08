<template>
    <div id="modify-login-password">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>修改登录密码</span>
            <span></span>
        </header>
        <div class="container">
           <p>请获取短信验证，并设置新的登录密码</p>
           <div class="phone">
               <ul>
                   <li>
                       <span>+86</span>
                       <input type="number" placeholder="输入手机号码">
                       <span>获取验证码</span>
                   </li>
                    <li>
                        <span>输入验证码:</span>
                       <input type="number" placeholder="输入验证码">
                   </li>
                    <li>
                        <span>新密码:</span>
                       <input type="text" placeholder="输入新密码">
                   </li>
                    <li>
                        <span>再次输入新密码:</span>
                       <input type="text" placeholder="输入新密码">
                   </li>
               </ul>
           </div>
           <div class="at-once">
                   立即修改
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
        goBack() {
            this.$router.push('/home/accountManagement')
        }
    }
}
</script>

<style lang="less">
   #modify-login-password {
       >header {
           background: #000;
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
                               background-color: #B39956;
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
               width:60%;
               background-color: #B39956;
               color:white;
               margin-top:200px;
               margin-left:20%;
               text-align: center;
               padding:30px;
               border-radius: 10px;
           }
       }
   }
</style>

<template>
    <div id="modify-login-password">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>忘记密码</span>
            <span></span>
        </header>
        <div class="container">
           <div class="phone">
               <ul>
                   <li>
                       <span><van-icon name="phone" />&nbsp;&nbsp;&nbsp;手机号</span>
                       <input type="number" placeholder="请输入11位手机号码">
                       
                   </li>
                    <li>
                        <span><van-icon name="checked" />&nbsp;&nbsp;&nbsp;验证码</span>
                       <input type="number" placeholder="注意查收短信">
                       <span>获取验证码</span>
                   </li>
                    <li>
                        <span><van-icon name="lock" />&nbsp;&nbsp;&nbsp;新密码</span>
                       <input type="text" placeholder="6-16位数字或字母">
                   </li>
                    <li>
                        <span><van-icon name="lock" />&nbsp;&nbsp;&nbsp;确认密码</span>
                       <input type="text" placeholder="再次输入密码">
                   </li>
               </ul>
           </div>
           <div class="at-once">
                   提交
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
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="less">
   #modify-login-password {
       >header {
           background: #000;
           width:100%;
           height: 46px;
           line-height: 46px;
           padding-top:10px;
           color:#fff;
           display: flex;
           position: fixed;
           z-index:999;
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
           background-color: #EEEFF1;
           
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
                           &:nth-of-type(1) {
                               margin-right:10px;
                           }
                           &:nth-of-type(2){
                               color:white;
                               background-color: #FDA426;
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
               background-color: #4A4849;
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

<template>
    <div id="modify-login-password">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>设置登录密码</span>
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
                             <van-button size="middle" @click="getCode" v-show="showCode"  round type="info">获取验证码</van-button>
                       </span>
                      
                   </li>
                    <li>
                        <span>验证码:</span>
                       <input v-model="authcode" type="number" placeholder="输入验证码">
                   </li>
                    <li>
                        <span>密码:</span>
                       <input v-model="newPassword" type="password" placeholder="输入6-18位字母加数字密码">
                   </li>
                    <li>
                        <span>确认密码:</span>
                       <input v-model="suerPassword" type="password" placeholder="确认密码">
                   </li>
               </ul>
           </div>
           <div @click="modify" class="at-once">
                  <van-button size="large" round type="info">立即修改</van-button>
               </div>
        </div>
    </div>
</template>


<script>
import {axiosPost} from '@/lib/http'
import storage from '@/lib/storage'
export default {
    data() {
        return {
            count:60,
            showCount:false,
            showCode:true,
            mobile:"",
            authcode:"",
            newPassword:"",
            suerPassword:""
        }
    },
    methods:{
        // 判断是否绑定手机号
        handleJundeMobile(){
            let url = 'http://pay.91dianji.com.cn/api/customer/getCustomer';
            // let url = '/customer/getCustomer';
            let params = {
                openid:this.$store.state.wechat.openid,
            };
            axiosPost(url,params).then(res =>{
                console.log('查询个人设置成功',res)
                if(res.data.success){
                    if(res.data.data.mobile === null){
                        this.$alert('请先绑定手机号', '提示', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.$router.push({
                                    path: '/home/bindingPhone'
                                })
                            }
                        });
                    }else{
                        this.mobile = res.data.data.mobile;
                    }
                }
            }).catch(res =>{
                console.log('查询个人设置失败',res);
            })
        },
        goBack() {
            this.$router.push('/home/accountManagement')
        },
        getCode(){
            let that=this
            let partten=/^1\d{10}$/
            if(!partten.test(that.mobile)){
                 that.$toast({
                    message:"请填写11位手机号码"
                })
                 return
            } else  {
                let data={
                    mobile:this.mobile,
                    type:"3"
                }
                axiosPost("http://pay.91dianji.com.cn/api/customer/sendSms",data)
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
        modify(){
             let that=this
            let partten=/^1\d{10}$/  // 11位手机号的正则
            //  let code=/[0-9A-Za-z] {6,18} /  //密码的正则
            if(!partten.test(that.mobile)){
                 that.$toast({
                    message:"请填写11位手机号码"
                })
                 return
            }
            // if(!code.test(that.newPassword)){
            //      that.$toast({
            //         message:"输入6-18位字母加数字新密码"
            //     })
            //      return
            // }
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
            let data={
                password:that.suerPassword,
                mobile:this.mobile,
                authcode:this.authcode
            }
             axiosPost("http://pay.91dianji.com.cn/api/customer/updatePassWord",data)
             .then(function(res){
                 console.log(res,"result");
                 that.$toast({
                     message:res.data.message
                 })
                 that.mobile=""
                 that.authcode=""
                 that.newPassword=""
                 that.suerPassword=""
             })
             .catch(function(err){
                 console.log(err,"error");
                 
             })
        }
    },
    created(){
        this.handleJundeMobile();
    }
}
</script>

<style lang="less">
   #modify-login-password {
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
           overflow-x: hidden;
           font-size: 34px;
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
                           font-weight: bold;
                          >button {
                              height: 60px;
                              padding:0 8px;
                              margin-right:15px;
                          }
                       }
                       >input {
                           border:none;
                           flex: 1;
                           margin-right:20px;
                           text-align: right;
                       }
                   }
               }
           }
           >.at-once {
               margin-top:200px;
               border-radius: 10px;
               padding-left: 30px;
               padding-right:30px;
               >button {
                   height: 90px;
                   font-size: 30px;
               }
           }
       }
   }
</style>

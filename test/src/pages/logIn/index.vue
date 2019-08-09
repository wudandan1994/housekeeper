<template>
    <div id="progress-query">
        <div class="container">
            <div class="logo center">
                <img src="http://pay.91dianji.com.cn/top_icon.png" alt="">
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
                    <van-checkbox class="checkbox" v-model="checked" shape="square" checked-color="#4b66af">记住密码</van-checkbox>
                    <span>&nbsp;</span>
               </p>
               <p @click="forgetPassword">忘记密码？</p>
           </div>
           <div class="button">
                <!-- <van-button @click="logInPass" class=" center" size="large" type="default">账号密码登录</van-button> -->
                <div @click="logInPass" class="log">
                    <p>登录</p>
                </div>
           </div>
            <!-- <div class="wx-login" @click="logIn">
                <div class="center">———————其他登录方式———————</div>
                <div class="center"><van-icon size="28px" name="http://pay.91dianji.com.cn/wx.png"/></div>
            </div> -->
        </div>
    </div>

</template>


<script>
import qs from 'qs'
import {axiosPost} from '@/lib/http'
import storage from '@/lib/storage'
export default {
    data() {
        return {
            radio:"1",
            checked:false,
            phone:"",
            password:"",
        }
    },

    methods:{
        forgetPassword() {
            this.$router.push('/forgetPassword')
        },
        register(){
             this.$router.push('/logOut')
        },
        logInPass(){
            let that=this
            if(that.phone.trim().length===0 || that.phone.trim()===""){
                that.$toast({
                    message:"请输入手机号码"
                })
                return
            }
            if(that.password.trim().length===0 || that.phone.trim()===""){
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
                if(res.data.success){
                    storage.set('cid',res.data.data.id);
                    storage.set('promotioncode',res.data.data.promotioncode);
                    that.$store.commit('iscertification',res.data.data.iscertification);
                    that.$store.commit('level',res.data.data.level);
                    that.$store.commit('promotioncode',res.data.data.promotioncode);
                    that.$store.commit('mobile',res.data.data.mobile);
                    that.$store.commit('vip',res.data.data.vip);
                    that.$store.commit('recommendedcode',res.data.data.recommendedcode);
                    that.$store.commit('amount',res.data.data.amount);
                    that.$store.commit('openid',res.data.data.openid);
                    that.$store.commit('nickname',res.data.data.nickname);
                    that.$store.commit('headimg',res.data.data.photo);
                    that.$toast('登陆成功');
                    if(that.checked){
                        storage.set('rempass',true);
                    }else{
                        // 不记住密码
                        storage.remove('username');
                        storage.remove('password');
                        storage.remove('rempass');
                    }
                     storage.set('username',that.phone);
                     storage.set('password',that.password);
                    //  setTimeout(()=>{
                         that.$router.push('/home');
                    //  },2000)
                     
                }else{
                    that.$toast({
                        message:res.data.message
                    })
                }
            })
            .catch(function(err){
                that.$toast('登录失败')  
            })
        },
        // 登录
            logIn(){
                window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx779a30a563ad570d&redirect_uri=http%3a%2f%2fpay.91dianji.com.cn%2f%23%2fhome&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
          
        //    var auths=null
        //    let that=this
        //    plus.oauth.getServices( function(services){
		//    auths = services;
		// for(var k in auths){
		// 	console.log(auths[k].id)
		// }
		// var s;
		// for (var i = 0; i < auths.length; i++){
		// 	if (auths[i].id == 'weixin'){
        //         s = auths[i];
        //         break; 
        //     }
        //   }
        //   if(!s.authResult){
		// 	s.login(function(e){
		// 		// 获取登录操作结果
		// 		s.getUserInfo( function(e){
		// 			console.log( "获取用户信息成功："+JSON.stringify(s.userInfo) );
        //             that.$toast('登录成功');
        //            that.$router.push('/home');
		// 		}, function(e){
		// 			console.log( "获取用户信息失败："+e.message+" - "+e.code );
		// 			that.$toast('获取用户信息失败');
		// 		});
				
		// 	}, function(e){
		// 		that.$toast('登录认证失败');
		// 	});
		// }else{
		// 	//已经登录认证
		// 	that.$toast('登录成功');
		// }

        // },function(e){
        //     that.$toast("登录认证失败")
        // })
          }
    },

    created(){
        this.phone = storage.get('username');
        this.password = storage.get('password');
        this.checked= storage.get('rempass');
    },
}
</script>

<style lang="less">
   #progress-query {
       >header {
           background: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
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
            padding-bottom: 50px;
            background-color: #fff;
            .logo{
                width: 100%;
                height: 200px;
                margin-top: 50px;
                img{
                    width: 200px;
                    height: 200px;
                    animation: myfirst 5s ease-in-out infinite;
                    -moz-animation: myfirst 5s ease-in-out infinite;	/* Firefox */
                    -webkit-animation: myfirst 5s ease-in-out infinite;	/* Safari 和 Chrome */
                    -o-animation: myfirst 5s ease-in-out infinite;
                }
                @keyframes myfirst {
                    0%{
                        transform: rotateY(0deg);
                        opacity: 1;
                    }
                    50%{
                        transform: rotateY(360deg);
                        opacity: 0.8;
                    }
                    100%{
                        transform: rotateY(0deg);
                        opacity: 1;
                    }
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
               margin-top:50px;
               .van-checkbox__icon .van-icon{
                    border:1px solid #000;
                    margin-bottom: 8px !important;
                }
               >p {
                    padding:15px 0px;
                    font-size:28px;
                    &:nth-of-type(1) {
                        display: flex;
                        padding-bottom: 20px;
                    }
                    
               }
           }
           .button {
               width:80%;
                 margin:0 auto;
               padding:0 30px;
               
               >.log {
                   width:100%;
                   height: 100px;
                   background-color: #4B66AF;
                   >p {
                       color:#fff;
                       line-height: 100px;
                       text-align: center;
                       font-size: 30px;
                   }
               }

            //    >button {
            //        border-radius: 10px;
            //        text-align: center;
            //    }
           }
           
            .wx-login {
                 width: 100%;
                 height: 100px;
                 margin: 50px auto;   
                 >div{
                     width: 100%;
                     height: 50px;
                 }
            }
       }
   }
</style>





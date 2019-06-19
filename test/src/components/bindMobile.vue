<template>
    <transition name="van-fade">
        <div id="bindMobile" v-if="show">
            <div class="bind">
                <div class="title center">绑定手机号</div>
                <div class="mobile"><input type="text" v-model="mobile" placeholder="请输入手机号"/></div>
                <div class="mobile"><input type="password" v-model="newPassword" placeholder="请输入密码" /></div>
                <div class="mobile"><input type="password" v-model="suerPassword" placeholder="请确认密码" /></div>
                <div class="mobile row">
                    <input type="number" v-model="authcode" placeholder="请输入验证码" />
                    <span @click="getCode" v-show="showCode">获取验证码</span>
                    <span v-show="showCount">{{count}}s</span>
                </div>
                <div @click="modify" class="submits center">确认绑定</div>
                <div @click="handleLate" class="late center">稍后绑定</div>
            </div>
        </div>
    </transition>
</template>
<script>
import {axiosPost} from '@/lib/http'
export default {
    data(){
        return{
            mobile:"",
            authcode:"",
            newPassword:"",
            suerPassword:"",
            showCount:false,
            showCode:true,
            count:60,
            show:false,
        }
    },
    methods:{
        getCode(){
            let partten = /^1[3456789]\d{9}$/;
            if(!partten.test(this.mobile)){
                 this.$toast('请填写正确的手机号')
            }else{
                let data={
                    mobile:this.mobile,
                    type:"3"
                }
                axiosPost("/customer/sendSms",data).then(res =>{
                    if(!res.data.success){
                        this.$toast({
                            message:res.data.message
                        })
                    } else {
                        this.showCount=true
                        this.showCode=false
                        let that = this;
                        this.timerId=setInterval(function(){
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
                .catch(res =>{
                   this.$toast("请勿重复发送短信");
                })
            }
        },
        modify(){
            let partten=/^1[3456789]\d{9}$/  // 11位手机号的正则
            if(!partten.test(this.mobile)){
                 this.$toast({
                    message:"请填写11位手机号码"
                })
                 return
            }
            if(this.authcode.trim().length===0){
                 this.$toast({
                    message:"请输入验证码"
                })
                 return
            }
            if(this.newPassword.trim().length===0){
                 this.$toast({
                    message:"请输入新密码"
                })
                 return
            }
            
            if(this.suerPassword.trim().length===0){
                 this.$toast({
                    message:"请确认密码"
                })
                 return
            }
            if(this.newPassword !== this.suerPassword){
                 this.$toast({
                    message:"两次输入的密码不一致，请重新填写"
                })
                 return
            }
            let data={
                password:this.suerPassword,
                mobile:this.mobile,
                authcode:this.authcode
            }
             axiosPost("/customer/updatePassWord",data)
             .then(res =>{
                //  console.log('绑定成功',res);
                 this.$toast({
                     message:res.data.message
                 })
                 this.show = false;
             })
             .catch(res =>{
                //  console.log('绑定失败',res);
             })
        },
        handleLate(){
            this.show = false;
        }
    },
    mounted(){
        console.log('手机号',this.$store.state.wechat);
        setTimeout(() =>{
            if(this.$store.state.wechat.mobile){
                this.show = false;
            }else{
                this.show = true;
            }
        },2000)
    }
}
</script>
<style lang="less">
    #bindMobile{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 5;
        // display: none;
        .bind{
            width: 80vw;
            height: auto;
            background: white;
            margin-left: auto;
            margin-top: 20vh;
            margin-right: auto;
            padding-bottom: 50px;
            .title{
                width: 100%;
                height: 80px;
                font-size: 32px;
                font-weight: 700;
            }
            .mobile{
                width: 90%;
                height: 80px;
                padding-top: 10px;
                padding-bottom: 10px;
                margin-top: 10px;
                margin-left: auto;
                margin-right: auto;
                border-bottom: solid 1px #4B66AF;
                >input{
                    width: 100%;
                    height: 75px;
                    border: none;
                    font-size: 28px;
                    padding-top: 5px;
                }
                
                input:nth-child(4){
                    width: 60%;
                    height: 100%;
                }
                span{
                    display: inline-block;
                    width: 40%;
                    height: 80px;
                    text-align: center;
                    line-height: 80px;
                    background: #4B66AF;
                    color:#f2f2f2;
                    font-size: 26px;
                }
            }
            .submits{
                width: 90%;
                height: 80px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 40px;
                background: #4B66AF;
                color: #f2f2f2;
            }
            .submits:hover{
                background: rgba(41, 48, 92, 0.6);
                color: gold;
            }
            .late{
                height: 40px;
            }
        }
    }
</style>

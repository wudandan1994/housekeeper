<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-09 16:57:17
 * @LastEditTime: 2019-08-21 16:01:47
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="page-alipay">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">短信验证</div>
            <div class="right-icon center"></div>
        </header>
       
        <div class="user-input row">
            <div class="title start-center">信用卡卡号</div>
            <div class="input start-center"><input type="text" v-model="creditCardNo" placeholder="所持银行卡号"></div>
        </div>
        <div class="user-input top row">
            <div class="title start-center">验证码</div>
            <div class="input start-center"><input type="number" v-model="smsCode" placeholder="短信验证码"></div>
        </div>
        
        <div @click="bindingCard" class="next-stop center">确认</div>
        <loading :componentload="componentload"></loading>
    </div>
</template>
<script>
import loading from '@/components/loading'
import {axiosPost} from '@/lib/http'
import storage from '@/lib/storage'
export default {
     components:{
      loading
    },
    data(){
        return{
           creditCardNo:"",
           smsCode:"",
           requestNo:"",
           componentload:false,
            info:{}
        }
    },
  
    methods:{
        handleReturnHome(){
            this.$router.go(-1);
        },

        // 获取验证码
        getcode(){
            let data={
                creditCardNo:this.creditCardNo
            }
            axiosPost("/mcpay/bindcard",data)
            .then(res=>{
                if(res.data.success){
                    this.requestNo=res.data.data.result
                } else {
                    this.$toast(res.data.message)
                }
            })
        },
       
        // 绑卡
        bindingCard(){
           if(this.creditCardNo.trim().length==0 ||this.smsCode.trim().length==0){
               return this.$toast("请将信息填写完整")
           }
           this.componentload=true
           let datas={
               creditCardNo:this.creditCardNo,
               requestNo:this.requestNo,
               smsCode:this.smsCode
           }
           axiosPost("/mcpay/confirmBindCard",datas)
           .then(res=>{
                setTimeout(()=>{
                    if(res.data.success){
                        this.$toast(res.data.message)
                         storage.set('channel',"1");
                        this.$router.push({
                            path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                            query:{
                                info:this.info
                            }
                        })
                    } else {
                        this.$toast(res.data.message)
                    }
                    this.componentload=false
                },1500)
           })
        },
    }   ,
    created () {
        this.info=this.$route.query.cardnumber
        this.creditCardNo=this.info.cardNo
        this.getcode()
    } 
}
</script>
<style lang="less" scoped>
    #page-alipay{
        background: #EEEFF1;
        width: 100vw;
        padding-top: 86px;
        height:calc(100vh - 86px);
        font-size: 34px;
        .top{
            margin-top: 20px;
        }
        .user-input{
            width: 100%;
            height: 100px;
            background: white;
            .title{
                width: 25vw;
                height: 90%;
                margin-top: 10px;
                margin-left: 5vw;
                font-weight: bold;
                font-size: 0.4rem;
            }
            .input{
                width: 70vw;
                height: 100%;
                >input{
                    width: 100%;
                    height: 80%;
                    margin-top: 5px;
                    border: none;
                    font-size: 28px;
                }
                input::-webkit-input-placeholder{
                    padding-top: 10px;
                    font-size: 28px;
                }
            }
        }
        .next-stop{
            width: 95vw;
            padding-top:30px;
            padding-bottom: 30px;
            margin-left: auto;
            margin-right: auto;
            background-color: #4B66AF;
            color: white;
            margin-top: 50px;
            font-size: 28px;
            border-radius: 30px;
        }
        .position{
            width: 100vw;
            z-index: 2;
            position: fixed;
            left: 0;
            bottom: 0;
        }
    }
</style>

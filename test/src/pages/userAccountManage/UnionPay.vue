<template>
    <div id="page-alipay">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">添加银行卡</div>
            <div class="right-icon center"></div>
        </header>
        <div class="user-input row">
            <div class="title start-center">真实姓名</div>
            <div class="input start-center"><input type="text" v-model="name" placeholder="请填写姓名"></div>
        </div>
        <div class="user-input row">
            <div class="title start-center">银行卡号</div>
            <div class="input start-center"><input type="text" v-model="bankcardno" placeholder="请填写所持银行卡号"></div>
        </div>
        <div class="user-input top row">
            <div class="title start-center">手机号</div>
            <div class="input start-center"><input type="number" v-model="phone" placeholder="请填写银行卡预留手机号"></div>
        </div>
        
        <div @click="bindingCard" class="next-stop center">确认绑定</div>
    </div>
</template>
<script>
import area from '@/config/area.js'
import {axiosPost,axiosGet} from '@/lib/http'
import storage from '@/lib/storage'
export default {
    data(){
        return{
            area: '请选择支行地址',
            show: false,
            title: '获取验证码',
            areaList:{},
            name:"",
            phone:"",
            bankcardno:""
        }
    },
    created(){
        this.areaList = area;
    },
    methods:{
        handleReturnHome(){
            this.$router.go(-1);
        },
        // 更多
        handleMore(){
            this.$toast('尽请期待')
        },
        // 绑卡
        bindingCard(){
            let that=this
            let partern=/^1\d{10}$/
            if(that.name.trim().length===0){
                that.$toast({
                    message:"请填写姓名"
                })
                return
            }
            if(that.phone.trim().length===0){
                that.$toast({
                    message:"请填写手机号"
                })
                return
            }
            if(that.bankcardno.trim().length===0){
                that.$toast({
                    message:"请填写姓名银行卡号码"
                })
                return
            }
            if(!partern.test(that.phone)){
                 that.$toast({
                    message:"请输入11位手机号码"
                })
                return
            }
            let data={
                cid:storage.get("cid"),
                name:that.name,
                phone:that.phone,
                bankcardno:that.bankcardno
            }
            axiosPost("http://pay.91dianji.com.cn/api/customer/checkBankCard",data)
            .then(function(res){
                if(!res.data.success){
                    that.$toast({
                        message:res.data.message
                    })
                    return
                }
                if(res.data.success){
                    that.$toast({
                    message:res.data.message
                  })
                    that.name=""
                    that.phone=""
                    that.bankcardno=""
                } else {
                     that.$toast({
                     message:res.data.message
                  })
                }
            })
            .catch(function(err){
               that.$toast({
                   message:err.message
               })
                
            })
        }
    }    
}
</script>
<style lang="less" scoped>
    #page-alipay{
        background: #EEEFF1;
        width: 100vw;
        padding-top: 86px;
        height:calc(100vh - 86px);
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

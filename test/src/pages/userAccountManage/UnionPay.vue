<template>
    <div id="page-alipay">
        <header class="manage loan">
            <van-nav-bar title="添加银行卡" left-text="返回" left-arrow @click-left="handleReturnHome" @click-right="handleMore">
                <van-icon name="weapp-nav" slot="right" />
            </van-nav-bar>
        </header>
        <div class="user-input row">
            <div class="title start-center">真实姓名</div>
            <div class="input start-center"><input type="text" v-model="name" placeholder="请填写姓名"></div>
        </div>
        <div class="user-input row">
            <div class="title start-center">银行卡号</div>
            <div class="input start-center"><input type="text" v-model="bankcardno" placeholder="请填写所持银行卡号"></div>
        </div>
        <!-- <div class="user-input top row">
            <div class="title start-center">发卡行</div>
            <div class="input start-center"><input type="number" placeholder="请填写发卡行"></div>
        </div>
        <div class="user-input top row">
            <div class="title start-center">支行地址</div>
            <div class="input start-center" @click="handleArea">{{area}}</div>
        </div> -->
        <!-- <van-area v-if="show" class="position" :area-list="areaList" @confirm="handleAreas" /> -->
        <div class="user-input top row">
            <div class="title start-center">手机号</div>
            <div class="input start-center"><input type="number" v-model="phone" placeholder="请填写银行卡预留手机号"></div>
        </div>
        <!-- <div class="user-input row">
            <div class="title start-center">验证码</div>
            <div class="safe-code start-center"><input type="number" placeholder="请填写您收到的验证码"></div>
            <div class="get-code center" @click="handleSafeCode"><div>{{title}}</div></div>
        </div> -->
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
            this.$router.push({
                path:'/personalCenter/incomedetail/addcard'
            })
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
                //    cid:storage.get("cid"),
                cid:"5",
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
        // 获取验证码
        // handleSafeCode(){
        //     console.log('title',this.title);
        //     if(this.title == '获取验证码'){
        //         let num = 60;
        //         let codetitle = '';
        //         let timer = setInterval(() => {
        //             num = num - 1;
        //             codetitle = '已发送' + '(' + num + ' s)';
        //             this.title = codetitle
        //             // console.log(this.title)
        //         }, 1000)
        //         setTimeout(() => {
        //             clearInterval(timer);
        //             this.title = '获取验证码';
        //         }, 60000)
        //     }else{
        //         this.$toast('验证码已发送，请勿重复操作');
        //     }
        // },
        // 打开获取地区
        // handleArea(val){
        //     this.show = true;
        // },
        // 获取地区
        // handleAreas(val){
        //     this.show = false;
        //     this.area = val[0].name+'/'+val[1].name+'/'+val[2].name
        // }
    }    
}
</script>
<style lang="less" scoped>
    #page-alipay{
        background: #EEEFF1;
        width: 100vw;
        height: 100vh;
        .loan .van-nav-bar {
          background-color: #4B66AF!important;
         }
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
                    height: 90%;
                    margin-top: 5px;
                    border: none;
                }
            }
            .safe-code{
                width: 40vw;
                height: 100%;
                 >input{
                    width: 100%;
                    height: 90%;
                    margin-top: 5px;
                    border: none;
                }
            }
            .get-code{
                width: 30vw;
                height: 100%;
                >div{
                    background: #8C6C2A;
                    color: white;
                    padding: 15px;
                    border-radius: 10px;
                }
            }
        }
        .next-stop{
            width: 90vw;
            padding-top:30px;
            padding-bottom: 30px;
            margin-left: auto;
            margin-right: auto;
            background-color: #4B66AF;
            color: white;
            margin-top: 50px;
            border-radius: 20px;
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

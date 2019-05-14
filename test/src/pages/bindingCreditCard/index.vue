<template>
    <div id="binding-credit-card">
        <header class="manage loan">
            <van-nav-bar title="添加信用卡" left-text="返回" left-arrow @click-left="handleReturnHome" >
               
            </van-nav-bar>
        </header>
        <div class="user-input row">
            <div class="title start-center">真实姓名</div>
            <div class="input start-center"><input type="text" required v-model="name" placeholder="姓名"></div>
        </div>
        <div class="user-input row">
            <div class="title start-center">身份证号</div>
            <div class="input start-center"><input type="text" required v-model="idCard" placeholder="所持身份证号码"></div>
        </div>
        <div class="user-input row">
            <div class="title start-center">银行卡号</div>
            <div class="input start-center"><input type="number" required v-model="bankcardno" placeholder="所持银行卡号"></div>
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
        
        <!-- <p class="tips"> 提示：若您绑定的是信用卡，以下信息为必填项</p> -->
         <div class="user-input top row">
            <div class="title year start-center">有效期年份</div>
            <div class="input start-center"><input type="number" v-model="year" placeholder="信用卡有效期年份"></div>
        </div>
         <div class="user-input  row">
            <div class="title year start-center">有效期月份</div>
            <div class="input start-center"><input type="number" v-model="month" placeholder="信用卡有效期月份"></div>
        </div>
         <div class="user-input  row">
            <div class="title year start-center">安全码</div>
            <div class="input start-center"><input type="number"  v-model="safeCode" placeholder="信用卡后三位安全码"></div>
        </div>

        <div class="user-input top row">
            <div class="title start-center">手机号</div>
            <div class="input start-center"><input type="number" v-model="phone" required placeholder="银行卡预留手机号"></div>
        </div>
         <div class="user-input  row">
            <div class="title start-center">账单日</div>
            <div class="input start-center"><input type="number" v-model="billdate" required placeholder="账单日"></div>
        </div>
        <div class="user-input  row">
            <div class="title start-center">最后还款日</div>
            <div class="input start-center"><input type="number" v-model="duedate" required placeholder="还款日"></div>
        </div>
        
        <!-- <div class="user-input row">
            <div class="title start-center">验证码</div>
            <div class="safe-code start-center"><input type="number" v-model="autoCode" required placeholder="验证码"></div>
            <div class="get-code center" @click="handleSafeCode"><div>{{title}}</div></div>
        </div> -->

        <!-- <div @click="bindingCard" class="next-stop center">确认绑定</div> -->
        <div @click="bindingCard" class="btn">
            <van-button round size="large" type="info">确认绑定</van-button>
        </div>
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
            bankcardno:"",
            idCard:"",
            year:"",
            month:"",
            safeCode:"",
            // autoCode:"",
            // orderId:"",
            billdate:"",
            duedate:""
        }
    },
    created(){
        
    },
    methods:{
        handleReturnHome(){
            this.$router.push({
                path:'/home/creditHousekeeper/aisleHousekeeper'
            })
        },
         // 获取验证码
        // handleSafeCode(){
        //     let that=this
        //     if(this.title == '获取验证码'){
        //         let num = 60;
        //         let codetitle = '';
        //         let timer = setInterval(() => {
        //             num = num - 1;
        //             codetitle = '已发送' + '(' + num + ' s)';
        //             this.title = codetitle
                   
        //         }, 1000)

        //     let partern=/^1\d{10}$/

        //     if(that.name.trim().length===0){
        //         that.$toast({
        //             message:"请填写姓名"
        //         })
        //         return
        //     }
        //     if(that.phone.trim().length===0){
        //         that.$toast({
        //             message:"请填写手机号"
        //         })
        //         return
        //     }
        //     if(that.bankcardno.trim().length===0){
        //         that.$toast({
        //             message:"请填写持有银行卡号码"
        //         })
        //         return
        //     }
        //     if(!partern.test(that.phone)){
        //          that.$toast({
        //             message:"请输入11位手机号码"
        //         })
        //         return
        //     }
        //     if(that.idCard.trim().length===0){
        //         that.$toast({
        //             message:"请填写身份证号码"
        //         })
        //         return
        //     }
        //      if(that.year.trim().length===0){
        //         that.$toast({
        //             message:"请填写信用卡有效年份"
        //         })
        //         return
        //     }
        //      if(that.month.trim().length===0){
        //         that.$toast({
        //             message:"请填写信用卡有效月份"
        //         })
        //         return
        //     }
        //      if(that.safeCode.trim().length===0){
        //         that.$toast({
        //             message:"请填写信用卡安全码"
        //         })
        //         return
        //     }

        //      let data={
        //         P10_payerName:that.name,
        //         P7_phone:that.phone,
        //         P6_cardNo:that.bankcardno,
        //         P8_idCardNo:that.idCard,
        //         P12_year:that.year,
        //         P13_month:that.month,
        //         P14_cvv2:that.safeCode
        //      }
        //         axiosPost("http://pay.91dianji.com.cn/api/creditCard/agreementBindCardValidateCode",data)
        //         .then(res=>{
        //             if(!res.data.success){
        //                 that.$toast({
        //                     message:res.data.message
        //                 })
        //             }
        //             that.orderId=res.data.data.orderId
        //         })
        //         .catch(err=>{
        //             // console.log(err,"error");
                    
        //         })
        //         setTimeout(() => {
        //             clearInterval(timer);
        //             this.title = '获取验证码';
        //         }, 60000)
        //     }else{
        //         this.$toast('验证码已发送，请勿重复操作');
        //     }
        // }, :"",
           
        // 绑卡
        bindingCard(){
             let partern=/^1\d{10}$/
             if(!partern.test(this.phone)){
                 this.$toast({
                    message:"请输入11位手机号码"
                })
                return
            }
            if(this.name.trim().length===0 || this.phone.trim().length===0 || this.bankcardno.trim().length===0 || this.idCard.trim().length===0 ||
                this.year.trim().length===0 || this.month.trim().length===0 || this.safeCode.trim().length===0 || this.billdate.trim().length===0 || this.duedate.trim().length===0 
            ){
                 this.$toast({
                    message:"请将信息填写完整"
                })
                return
            }
             let data={
                 cardNo:this.bankcardno,
                 phone:this.phone,
                 idCardNo:this.idCard,
                 idCardType:"身份证",
                 payerName:this.name,
                 year:this.year,
                 month:this.month,
                 cvv2:this.safeCode,
                 billdate:this.billdate,
                 duedate:this.duedate
             }
              axiosPost("http://pay.91dianji.com.cn/api/creditCard/bindCreditCard",data)
              .then(res=>{
                  console.log(res)
                  if(!res.data.success){
                      this.$toast({
                          message:res.data.message
                      })
                  } else {
                      this.$router.push("/home/creditHousekeeper/aisleHousekeeper")
                  }               
              })
              .catch(err=>{

              })











            //   let that =this
            //   if(that.autoCode.trim().length===0){
            //       that.$toast({
            //           message:"请输入验证码"
            //       })
            //       return
            //   }
            //       let validateCode=that.autoCode
            //         let datas={
            //             orderId:that.orderId,
            //             validateCode,
            //         }
            //         axiosPost("http://pay.91dianji.com.cn/api/creditCard/bindCard",datas)
            //         .then(function(res){
            //             if(!res.data.success){
            //                 that.$toast({
            //                 message:res.data.message
            //               })
            //             } else {
            //             }
            //         })
            //         .catch(function(err){
            //             that.$toast({
            //                 message:err.message
            //             })
            //         })
        }

       
    }    
}
</script>
<style lang="less" scoped >
    #binding-credit-card{
        background: #EEEFF1;
        width: 100vw;
        height: 120vh;
        .loan .van-nav-bar {
          background-color: #4B66AF!important;
         }
         .van-nav-bar__title {
             color:#fff;
             font-size: 30px;
         }
         .tips {
             margin:20px;
         }
         .van-nav-bar .van-icon  {
             color:#fff;
              font-size: 30px;
         }
         .van-nav-bar__text{
             color:#fff;
              font-size: 30px;
         }
        .top{
            margin-top: 20px;
        }
        .user-input{
            width: 100%;
            height: 100px;
            background: white;
            >.title{
                width: 25vw;
                height: 90%;
                margin-top: 10px;
                margin-left: 5vw;
                font-weight: bold;
                font-size: 0.4rem;
                &.year {
                     width:40vw;
                }
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
                    background: #4B66AF;
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
        .btn {
            margin-top:30px;
            padding-left:20px;
            padding-right: 20px;
            font-size: 30px;
            >button {
                height:80px;
                background-color: #4B66AF;
            }
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

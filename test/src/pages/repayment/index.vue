<template>
    <div id="repayment">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>还款</span>
            <span></span>
        </header>
        <div class="container">
            <div class="amount">
              
                <div class="number">
                    <span class="bold">￥</span>
                    <input type="number" v-model="repayment" placeholder="请输入不低于200元的还款金额">
                </div>
                <div class="btn" >
                    <van-button round size="large" @click="search" type="info">下一步</van-button>
                    <div class="num" v-show="shownumber" >
                        <p>本次实际支付金额为：<span>{{number.endamount}}</span>元</p>
                        <p>本次实际还款金额为：<span>{{number.realamount}}</span>元</p>
                        <p>本次支付手续费为：<span>{{number.poundage}}</span>元</p>
                        <div class="pay">
                            <van-button @click="hidenumber" round type="danger">取消</van-button>
                            <van-button @click="pay" round type="info">确认付款</van-button>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
import {axiosPost} from '@/lib/http'
export default {
    
    data() {
        return {
            repayment:"",
            cardInfo:"",
            number:{},
            shownumber:false
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home/creditHousekeeper/aisleHousekeeper')
        },
        search(){
            let that=this
            if(that.repayment != ''){
                that.shownumber=true
                let data={
                    amount:that.repayment
                }
                axiosPost("http://pay.91dianji.com.cn/api/creditCard/getPoundage",data)
                .then(function(res){
                    console.log(res);
                    if(!res.data.message){
                        that.$toast({
                            message:res.data.message
                        })
                        return
                    }
                    that.number=res.data.data
                })
            }
            else{
                this.$toast('请输入金额');
            }
        },
        pay(){
            let that=this
            if(Number(that.repayment)<200){
                that.$toast({
                    message:"请确认输入的金额不少于200元"
                })
                return
            }
            let data={
                P3_bindId:that.cardInfo,
                P8_orderAmount:that.repayment,
                P11_terminalType:"IMEI",
                P12_terminalId:"122121212121",
            }
            axiosPost("http://pay.91dianji.com.cn/api/creditCard/bindCardPayWithoutCode",data)
            .then(function(res){
                console.log(res,"result")
                if(!res.data.success){
                    that.$toast({
                        message:res.data.message
                    })
                }
                 that.$toast({
                        message:res.data.message
                    })
            })
            .catch(function(err){
                console.log(err,"error");
                
            })

        },
        hidenumber(){
            this.shownumber=false
        }
    },
    created () {
         this.cardInfo=this.$route.query.info
    }
}
</script>

<style lang="less">
   #repayment{
       >header {
           background-color: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           font-size:28px;
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
           padding-top:96px;
           padding-bottom: 50px;
           >.amount {
               padding:20px;
               >p {
                   padding-top:50px;
                   font-size: 30px;
                   margin-bottom: 200px;
                   text-align: center;
               }
               >.number {
                   margin-top:300px;
                   font-size: 36px;
                   margin-bottom: 20px;
                   display: flex;
                   >input {
                        border:none;
                        display: inline-block;
                        width:100%;
                   }
                   >.bold {
                       font-size: 40px;
                       font-weight: bold;
                   }
               }
               >.btn {
                   position: relative;
                  > button {
                      height: 90px;
                      font-size: 30px;
                  }
                   >.num {
                       width:80%;
                    margin-top:10px;
                    overflow-x: hidden;
                    position: absolute;
                    border-radius: 10px;
                        top:200%;
                        left:5%;
                        border:2px solid #ccc;
                        padding:20px;
                   >p {
                       margin-top:20px;
                   }
                   >.pay {
                       margin-top:10px;
                       display: flex;
                       justify-content: space-between;
                       >button {
                           font-size: 28px;
                       }
                   }
               }
               }
           }
       }
   }
</style>

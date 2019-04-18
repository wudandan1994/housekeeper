<template>
    <div id="repayment">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>还款</span>
            <span></span>
        </header>
        <div class="container">
            <div class="amount">
                <p>还款说明</p>
               <h3>输入金额之后点立即查询，即可查看支付详情</h3>
                <div class="number">
                    <span class="bold">￥</span>
                    <input type="number" v-model="repayment" placeholder="请输入不低于500元的还款金额">
                </div>
                <p @click="search">立即查询</p>
                <div class="btn" @click="pay">
                    <van-button round size="large" type="info">立即支付</van-button>
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
            cardInfo:""
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home/creditHousekeeper/aisleHousekeeper')
        },
        search(){
            let that=this
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
                 that.$toast({
                         message:res.data.message
                     })

                 
             })

        },
        pay(){
            let that=this
            if(Number(that.repayment)<500){
                that.$toast({
                    message:"请确认输入的金额不少于500元"
                })
                return
            }
            let data={
                P4_bindId:that.cardInfo,
                P8_orderAmount:that.repayment
            }
            axiosPost("http://pay.91dianji.com.cn/api/creditCard/creditCardRepayment",data)
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
                  > button {
                      height: 90px;
                  }
               }
           }
       }
   }
</style>

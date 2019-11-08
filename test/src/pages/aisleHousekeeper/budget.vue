<template>
    <div id="budget">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>预算费用</span>
            <span></span>
        </header>
        <div class="container">
           <div class="cost">
               <ul>
                   <li>
                       <span>还款金额：</span>
                       <input type="number" v-model="budget" placeholder="请输入还款金额">
                       <span>元</span>
                   </li>
                    <li>
                       <span>预留金额：</span>
                       <input type="number" @input="setamount" v-model="reserve" placeholder="请输入预留金额">
                       <span>元</span>
                   </li>
                    <li v-show="showdetail">
                       <span>还款笔数：</span>
                       <input type="text" readonly v-model="num" >
                       <span>笔</span>
                   </li >
                     <li v-show="showdetail">
                       <span>手续费约：</span>
                       <input type="text" readonly  v-model="charge" >
                       <span>元</span>
                   </li>
                     <li v-show="showdetail">
                       <span>刷卡费率：</span>
                       <input type="text" readonly  v-model="cardrate" >
                       <span>元</span>
                   </li>
                    

               </ul>
           </div>
           <div :class="selectclolr?'calculation':''" @click="getnum">
               {{text}}
           </div>
        </div>
    </div>

</template>


<script>
import { axiosPost } from '../../lib/http';
export default {
    data() {
        return {
            budget:'',
            reserve:'',
            selectclolr:false,
            num:"",
            charge:"",
            rate:"",
            space:"",
            showdetail:false,
            text:"点击预算",
            rate:0,
            lev:0,
            rates:"",
            cardrate:""
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
        setamount(){
            this.selectclolr=true
        },
        getnum(){
            if(this.text==="重新计算"){
                this.showdetail=false
                this.text="点击预算"
                this.budget=""
                this.reserve=""
                this.selectclolr=false
                return
            }

             if(this.budget.length===0 || this.reserve.length===0){
                return this.$toast("请填写金额")
            }
             this.showdetail=true

            let repayment=Number(this.budget)  // 还款金额

            let amount=Number(this.reserve)  // 预留金额

            if(repayment<amount){
                amount=repayment/2
            }
           
            this.num=Math.ceil(repayment/(amount*0.9)) % 2===0?Math.ceil(repayment/(amount*0.9)):Math.ceil(repayment/(amount*0.9))+1

            this.charge='￥'+(repayment*this.rate+this.lev*this.num)

            this.cardrate=this.rates

            this.text="重新计算"
        },
         handleGetAmount(){
            axiosPost("/customer/getCustomer")
            .then(res =>{
                if(res.data.success){
                   if(res.data.data.level == '0'){
                        this.rate =0.008;
                        this.lev=3
                        this.rates='0.8%'
                    }
                    else if(res.data.data.level == '1'){
                        this.rate =0.007 
                         this.lev=2
                         this.rates='0.7%'
                    }else{
                        this.rate = 0.006
                         this.lev=2
                         this.rates='0.6%'
                    }
                }else{
                     this.$toast('查询失败')
                }
            }).catch(res =>{
                    this.$toast('查询失败')
            })
        }
    },
    created () {
        this.handleGetAmount()
    }
}
</script>

<style lang="less">
   #budget {
       >header {
           background: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           position: fixed;
           font-size:28px;
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
           overflow-x: hidden;
           box-sizing: border-box;
           .cost {
               padding:20px;
               ul{
                   li{
                       display: flex;
                       flex-wrap: nowrap;
                       align-items: center;
                       border-bottom: 1px solid #ccc;
                       padding-top:30px;
                       height: 60px;
                       line-height: 60px;
                       color:#000;
                       font-size: 30px;
                      input {
                           border:none;
                           flex: 1;
                           font-size: 30px;
                           text-align: right;
                           height: 60px;
                           margin-top:-26px;
                           margin-right:20px;
                       }
                       input::-webkit-input-placeholder {
                           font-size: 28px;
                           padding-top: 8px;
                           margin-top:-22px;
                       }
                   }
               }
           }
           >div{
               &:nth-of-type(2){
                //    calculation
                    width:90%;
                    height: 80px;
                    background-color: #C9C9C9;
                    color:#fff;
                    text-align: center;
                    line-height: 80px;
                    font-size: 30px;
                    box-sizing: border-box;
                    overflow-x: hidden;
                    margin:30px auto 0px auto;
                    border-radius: 10px;
                    &.calculation{
                        background: linear-gradient(to right, #9FB0DF, #223BA8);
                    }
               }
              
           }
       }
   }
</style>

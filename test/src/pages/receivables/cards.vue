<template>
    <div id="page_cancelCard">
        <header class=" head">
            <div class="center"  @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div>信用卡</div>
            <router-link tag="div" to="/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard" class="add">添加信用卡</router-link>
        </header>
        <!-- <div class="per_card" v-for="(item,index) in form" :key="index">
            <div class="bank">
                 <div class="payer">{{item.payerName}}</div>
                 <div class="payer">{{item.bankname}}</div>
            </div>
           
            <div class="cardNo">{{item.cardNo}}</div>
            <div class="back" @click="handleBack(item.bindId)">选择</div>
        </div> -->
        <div class="list">
            <ul>
                <li v-for="(item,index) in form" :key="index" >
                    <div class="cardnum">
                        <div class="color">{{item.payerName}}</div>
                        <div class="color">{{item.bankname}}</div>
                    </div>
                    <div class="cardnum">
                         <div class="color">{{item.cardNo}}</div>
                         <div class="select" @click="selectCard(item)">选择</div>
                    </div>
                </li>
            </ul>
        </div>
         <div class="sure">
              <van-button type="info" @click="sure" size="large">确定</van-button>
        </div>
    </div>    
</template>
<script>
import { axiosPost } from '../../lib/http';
import Bank from '@/lib/bank'
export default {
    data(){
        return{
            form: [],
            type:"",
            info:"",
            card:"",
            merchantno:""
        }
    },
    methods: {
        handleReturnHome(){
            this.$router.go(-1);
        },
        sure(){

             if(this.type=="1"){
                 this.$router.push({
                    path:"/home/receivables",
                    query:{
                        params:this.card
                    }
              })
            } else {
                // 如果是第二条通道，首先查询是否签约
                let data={
                    bankcardNum:this.card.cardNo,
                    merchantno:this.merchantno
                }
                axiosPost("/txstar/getTxOpenCard",data)
                .then(res=>{
                    console.log(res,'查询签约结果结果')
                    if(!res.data.success){  // 若没有签约，去签约
                        this.$router.push({
                         path:"/home/receiveXH/signXH",
                         query:{
                             info:this.card,
                             merchantno:this.merchantno
                         }
                     })
                    } else { // 商户已存在 ，查询是否签约
                     let merchantno=res.data.data.merchantno //商户号
                     this.$router.push({
                         path:"/home/receiveXH",
                         query:{
                            params:this.card,
                            merchantno:merchantno
                         }
                     })
                    }
                })
                .catch(err=>{
                    console.log(err,'第一个error')
                })

               
            }
        },
        selectCard(info){
           this.card=info
           console.log(this.card,'card')
        },


        // 绑卡列表
        getCards(){
             axiosPost("/creditCard/getMyCreditCard") 
             .then(res=>{
                 if(res.data.success){
                       if(res.data.data.length == '0'){
                           this.$toast("您还未绑定信用卡")
                       } else {
                          let arr=res.data.data
                          arr.forEach(item=>{

                              if(item.bankname=="" || item.bankname==null){
                                this.$http.get('https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?_input_charset=utf-8&cardNo='+item.cardNo+'&cardBinCheck=true')
                                    .then(responce=>{
                                    let bankcode=responce.data.bank
                                     Bank.forEach(info => {
                                        if(info.bankCode==bankcode){
                                            item.bankname=info.bankName
                                        }
                                    });
                                }) 
                         }
                          this.form.push(item)

                         })
                       }


                 } else{
                     this.$toast(res.data.message)
                 }
             })
        },

    },
    created(){
        this.getCards()
        this.type=this.$route.query.type
      
       
        this.merchantno=this.$route.query.merchantno
         if(this.type=="2" && this.merchantno=='' ){
            this.$toast("请先选择储蓄卡")
        }
          console.log(this.merchantno,'merchantno')
    }
}
</script>
<style lang="less" scoped>
#page_cancelCard{
    .head {
         background: #4B66AF;
         width:100%;
         height: 86px;
         line-height: 86px;
         color:#fff;
         display: flex;
         position: fixed;
         top:0px;
         font-size:28px;
         z-index:999;
         justify-content: space-between;
         .add {
             padding-right:20px;
         }
     }
      .sure {
        padding:30px;
      .van-button--info{
        background-color: #4B66AF;
        font-size: 30px;
    }    
    }
   
    .list {
        margin-top:20px;
        padding-top:96px;
        >ul {
            padding:15px;
            >li {
                box-sizing: border-box;
                margin-bottom: 30px;
                padding:30px;
                background-color: #4b66af;
                border-radius: 15px;
                .cardnum {
                    display: flex;
                    justify-content: space-between;
                    .color {
                        color:#ffff;
                        font-weight: bold;
                    }
                    .select {
                       background-color: #fff;
                       padding:8px 25px;
                       border-radius: 20px;
                       color:#4b66af;
                        
                    }
                    div {
                        &:nth-of-type(1){
                            margin-bottom: 30px;
                        }
                        &:nth-of-type(2){
                            margin-top: 15px;
                        }
                    }
                }
            }
        }
    }
    .per_card{
        width: 95%;
        height: 200px;
        margin: 30px auto auto auto;
        position: relative;
        z-index: 1;
        color: #fff;
        background: #4b66af;
        border-radius: 15px;
        .bank {
            width:100%;
            display: flex;
            justify-content: space-between;
            padding:30px 50px;
        }
        .name{
            position: absolute;
            z-index: 2;
            top: 18%;
            left: 10%;
            font-size: 36px;
            font-weight: 700;
            color: #fff;
        }
        .cardNo{
            position: absolute;
            z-index: 2;
            top: 60%;
            left: 10%;
            font-size: 32px;
            font-weight: 700;
        }
        .back{
            position: absolute;
            z-index: 2;
            bottom: 20px;
            right: 20px;
            font-size: 26px;
            text-decoration: underline;
            color: red;
        }
    }
}
</style>

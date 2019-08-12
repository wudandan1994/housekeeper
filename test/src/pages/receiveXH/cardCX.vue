<template>
    <div id="page_cancelCard">
        <header class=" head">
            <div class="center"  @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div>信用卡</div>
            <router-link tag="div" to="/personalCenter/addcard/UnionPay" class="add">添加储蓄卡</router-link>
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
                        <div class="color">{{item.name}}</div>
                        <div class="color">{{item.bankcardno}}</div>
                    </div>
                    <div class="cardnum">
                         <div class="color">{{item.bankname}}</div>
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
import storage from '@/lib/storage' 
export default {
    data(){
        return{
            form: [],
            info:{},
            idcard:"",
            merchantno:""
        }
    },
    methods: {
        handleReturnHome(){
            this.$router.go(-1);
        },
        selectCard(card){
            this.info=card
            console.log(this.info,'info')
            // storage.set("cxcard",card.bankname)
            // storage.set("cxcardnumber",card.bankcardno)


            // this.$router.push({
            //     path:"/home/receiveXH",
            // })
        },
        sure(){

            if(this.info=={}){
                return this.$toast("请选择储蓄卡")
            }

             storage.set("cxcard",this.info.bankname)
            storage.set("cxcardnumber",this.info.bankcardno)
            let data={
                bank_cardno:this.info.bankcardno
            }
            axiosPost("/txstar/getTXMerchant",data)
            .then(res=>{
                console.log(res,'注册的商户信息')
                if(!res.data.success){  // 注册商户
                   let datas={
                       merchant_name:this.info.name,
                       id_cardno:this.idcard,
                       phone:this.info.phone,
                       bank_cardno:this.info.bankcardno,
                   }
                   axiosPost("/txstar/insertRegister",datas)
                   .then(res=>{
                    //    console.log(res,'注册成功')
                       let responce=res.data.data
                       responce=JSON.parse(responce)
                    //    console.log(responce,'responce')

                       if(res.data.success){
                           this.merchantno=res.data.data.merchantno
                           this.$router.push({
                               path:"/home/receiveXH",
                               query:{
                                 merchantno:responce.merchantno
                               }
                           })
                       } else {
                           this.$toast(res.data.message)
                       }

                   })

                } else {

                    this.merchantno=res.data.data.merchantno
                     this.$router.push({
                        path:"/home/receiveXH",
                        query:{
                            merchantno:this.merchantno
                        }
                    })

                }
            })
            .catch(err=>{
                console.log(err,'error')
            })

         

        },

       
        // 获取身份证号码
        getIdent(){
            axiosPost("/customer/getIdentification")
            .then(res=>{
                if(res.data.success){
                    this.idcard=res.data.data.idcardnumber
                }
            })
            .catch(err=>{
                console.log(err)
            })
        },


        // 绑卡列表
        getCards(){
             axiosPost("/customer/getBankCardByOpenid") 
             .then(res=>{
                if(res.data.success) {
                   
                    if(res.data.data.length==0){
                        this.$toast("请先添加储蓄卡")
                    } else {
                        this.form=res.data.data
                    }
                }
             })
             .catch(err=>{
               this.$toast("登录超时，请重新登录")
             })
        },
       
    },
    created(){
        // this.handleDeletedCreditCard();
        this.getCards()
        this.getIdent()
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
    .sure {
        padding:30px;
    .van-button--info{
        background-color: #4B66AF;
        font-size: 30px;
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

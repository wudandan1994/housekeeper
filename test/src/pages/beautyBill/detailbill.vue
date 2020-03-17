<template>
    <div id="detailbill">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span></span>
            <span></span>
        </header>
        <div class="container">
            <div class="info">
                <p><van-icon :name="url+info.icon" size="50px" /></p>
                <div>
                    <p>{{info.titl+info.baseCurrencyCode}}</p>
                    <p>实时汇率：1  <span>{{info.titl}}</span> = <span>{{info.cnyAmount}}</span> 人民币</p>
                </div>
            </div>
            <div class="detaill">
              
                <ul>
                    <li v-for="(item,index) of array" :key="index" @click="selectAmount(item,index)">
                        <p>{{item.price+info.titl}}</p>
                        <p></p>
                        <div :class="i===index?'back':''">
                             <van-icon name="success" v-show="i===index" size="20px" color="#fff" />
                        </div>
                    </li>
                </ul>
            </div>
            <div class="sure">
                <van-button type="info" size="large" @click="pay">确认支付</van-button>
            </div>
             <div class="cover" v-show="showCover" @click.self="showCover=false">
               <div class="infomation">
                   <div class="title">
                       <p></p>
                       <p>信用卡信息</p>
                       <p @click="showCover=false"> <van-icon name="close" size="20px"  /></p>
                   </div>
                   <div class="cardnumber">
                       <div class="number">信用卡号:</div>
                       <input type="number" placeholder="请输入您要验证的信用卡卡号" v-model="cardnumber">
                   </div>
                   <div class="tips">
                       <p>特别说明:</p>
                       <p>支付将跳转银联页面完成，为完成支付验证，需要先确定您需要验证的信用卡卡号。</p>
                   </div>
                   <div class="sure">
                       <van-button type="info" size="large" @click="surePay" >确定</van-button>
                   </div>
               </div>
           </div>
        </div>
    </div>

</template>


<script>
import { axiosPost } from '../../lib/http'
export default {
    data() {
        return {
            array:[],
            info:{},
            url:"http://pay.91dianji.com.cn/",
            i:0,
            amount:{},
            showCover:false,
            cardnumber:""
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
        selectAmount(detail,num){
            this.i=num
            this.amount=detail
        },
        pay(){
            this.showCover=true
        },
        surePay(){
            if(this.cardnumber.trim().length===0){
                return this.$toast("请填写卡号")
            }
            let data={
                foreignAmt:this.amount.price  , // wai
                prepayId: this.cardnumber,   // 
                currercyCode:this.amount.currercyCode,
                exchangeRate:this.info.cnyAmount,
                goodsNo:this.amount.goodsNo
            }
            axiosPost("/creditCard/insertBillOrderPay",data)
            .then(res=>{
                if(res.data.success){
                    let url=res.data.data
                    let str=url.substring(27,url.length-66)
                    window.location.href=str
                }
            })
            .catch(err=>{
               
            })
        }
    },
    created () {
        this.info=this.$route.query.info
        this.array=this.$route.query.array
        this.amount=this.array[0]
    }
}
</script>

<style lang="less">
   #detailbill {
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
        //    height: calc(100%-96px);
           height: calc(100vh - 100px);
           background-color:#F7F7F7;
           .info{
               padding:20px;
               display: flex;
               align-items: center;
               background-color: #fff;
               div{
                   padding-left:30px;
                   p{
                       padding:5px 0;
                   }
               }
           }
           .detaill{
           
              margin-top:20px;
              .van-cell{
                  height:70px;
                  line-height: 58px;
                  font-size: 30px;
                  margin-bottom: 10px;
              }
              ul{
                  margin-bottom: 50px;
                  width:100%;
                  li{
                      background-color: #fff;
                      width:100%;
                      margin-bottom: 10px;
                      padding:15px 30px;
                      box-sizing: border-box;
                      font-size: 30px;
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      div{
                          width:50px;
                          height:50px;
                          text-align: center;
                          line-height: 50px;
                          border-radius: 50%;
                          border:2px solid #1989FA;
                          &.back{
                              background-color: #1989FA;
                          }
                      }
                  }
              }
            
           }
          .sure{
              width:80%;
              margin:0 auto;
              .van-button--info{
                  background-color: #2D74FF;
                  border-radius: 10px;
                  border:1px solid #2D74FF;
              }
          }
           .cover{
               position: fixed;
               top:0;
               right:0;
               bottom:0;
               left:0;
               z-index: 1000;
               background-color: rgba(0, 0, 0, 0.2);
               .infomation{
                   width:80%;
                //    margin-top:40%;
                   background-color: #fff;
                //    padding-left:10%;
                   margin:40% auto 0 auto;
                   padding:30px;
                   box-sizing: border-box;
                   border-radius: 15px;
                   .title{
                       display: flex;
                       align-items: center;
                       justify-content: space-between;
                       p{
                           &:nth-of-type(2){
                               font-size: 34px;
                               font-weight: bold;
                           }
                       }
                       margin-bottom: 10px;
                   }
                   .cardnumber{
                       border-top:1px solid #ddd;
                       border-bottom:1px solid #ddd;
                       padding-top:80px;
                       padding-bottom: 20px;
                       display: flex;
                       align-items: center;
                       margin-bottom: 30px;
                       input{
                           border:none;
                           padding-left:20px;
                           flex:1;
                       }
                   }
                   .tips{
                       margin-top:45px;
                       p{
                           line-height: 43px;
                       }
                   }
                   .sure{
                       margin-top:80px;
                       .van-button--info{
                           background-color: #2F65FF;
                           border:1px solid #2F65FF;
                           border-radius: 10px;
                           height:80px;
                           line-height: 80px;
                       }
                   }
               }
           }
          
       }
   }
</style>

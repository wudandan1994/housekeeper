<template>
    <div id="credit-housekeeper">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>信用卡管家</span>
            <span></span>
        </header>
        <div class="container">
           <div class="swipe">
               <!-- 轮播图部分 -->
               <!-- <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(image, index) in images" :key="index">
                        <img v-lazy="image" />
                    </van-swipe-item>
               </van-swipe> -->
               <img src="http://bc.91dianji.com.cn/zhaoshang.png" alt="">
           </div>
           <div class="plan">
               <p>
                   <span>&nbsp;</span>
                   <span>已绑定卡示例</span>
               </p>
           </div>
           <div class="example">
               <img src="http://bc.91dianji.com.cn/ka.png" alt="">
           </div>
           <div class="detail">
              <p @click="getBankList">查看已绑定的信用卡 </p>
              <ul v-show="showCardList" >
                   <li v-for="(item, index) in bankList" :key="index" >
                       <div class="info">
                           <p>{{item.payerName}}</p>
                            <p>{{item.cardNo}}</p>
                            <p>{{item.phone}}</p>
                           
                       </div>
                       <div @click="repay(item.bindId)">
                           <van-button round size="normal" type="info">去还款</van-button>
                       </div>
                   </li>
              </ul>
              <router-link to="/home/creditHousekeeper/aisleHousekeeper/bindingCreditCard" tag="h3">去绑定信用卡</router-link>
           </div>
        </div>
    </div>
</template>


<script>
import { axiosPost } from '../../lib/http'
export default {
    data() {
        return {
           bankList:{},
            timerId:null,
            showCardList:false
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home/creditHousekeeper')
           
        },
        repay(item){
            this.$router.push({
                path:"/home/creditHousekeeper/aisleHousekeeper/repayment",
                query:{
                    info:item
                }
            })
        },
        getBankList(){
            let that=this
            axiosPost("http://pay.91dianji.com.cn/api/creditCard/getBankCardbindList")
            .then(function(res){
                that.showCardList=true
                if(!res.data.success){
                    that.$toast=({
                        message:res.data.message
                    })
                }
                let list=JSON.parse(res.data.data.rt5_bindCardList)
                if(!res.data.success){
                    that.$toast({
                        message:res.data.message
                    })
                }
                that.bankList=list
            })
            .catch(function(err){
                console.log(err,"error")
            })
        }
    },
    created () {
       
    }
}
</script>

<style lang="less">
   #credit-housekeeper{
       >header {
           background-color: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           z-index:999;
           display: flex;
           position: fixed;
           font-size: 28px;
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
           >.swipe {
               width:100%;
               height: 300px;
               background-color: red;
               margin-bottom:60px;
               >img {
                   width:100%;
               }
           }
           >.plan {
               margin:20px;
               >p {
                   >span {
                   &:nth-of-type(1){
                        display:line-block;
                        width:5px;
                        background-color:#A89749; 
                   }
                 }
               }
               
           }
           >.example {
               margin:20px;
               >img {
                   width:100%;
               }
           }
           >.detail {
               padding-left:20px;
            >ul{
                padding:20px;
                
                >li {
                    border:2px solid #ccc;
                    padding:20px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .info {
                         >p {
                        font-size: 30px;
                        padding-top:10px;
                        margin-bottom: 10px;
                      }
                    }
                    // >button {
                    //     padding-top:5px;
                    //     padding-bottom: 10px;
                    // }
                    .van-button--normal {
                        padding:4px 16px;
                    }
                }
            }
            >h3 {
               margin-top:20px;
            }
           }
           
       }
   }
</style>

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
              <ul>
                  <li></li>
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
           
            timerId:null
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home/creditHousekeeper')
        },
        getBankList(){
            let that=this
            axiosPost("/creditCard/getBankCardbindList")
            .then(function(res){
                console.log(res,"success")
                if(!res.data.success){
                    that.$toast=({
                        message:res.data.message
                    })
                }
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
              margin:20px;
              >p {
                  
              }
              >h3{
                  margin-top:20px;
                  color:#4B66AF;
              }
           }
       }
   }
</style>

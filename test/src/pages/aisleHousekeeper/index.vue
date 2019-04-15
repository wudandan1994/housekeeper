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
           </div>
           <div class="plan">
               <p>
                   <span>&nbsp;</span>
                   <span>绑定信用卡</span>
               </p>
           </div>
           <div class="example">
               <img src="http://pay.91dianji.com.cn/Superior.jpg" alt="">
           </div>
           <div class="detail">
               <p>您已绑定的信用卡</p>
              <ul>
                  <li></li>
              </ul>
           </div>
        </div>
    </div>
</template>


<script>
import { axiosPost } from '../../lib/http'
export default {
    data() {
        return {
            images:[],//轮播图信息
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home/creditHousekeeper')
        },
        getBankList(){
            axiosPost("/creditCard/getBankCardbindList")
            .then(function(res){
                console.log(res,"success")
            })
            .catch(function(err){
                console.log(err,"error")
            })
        }
    },
    created () {
        this.getBankList()
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
              
           margin-top:20px;
           }
       }
   }
</style>

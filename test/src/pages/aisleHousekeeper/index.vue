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
                   <span>还款计划</span>
               </p>
           </div>
           <div class="example">
               <img src="" alt="">
           </div>
           <div class="detail">
               <ul>
                   <li>
                        <span><van-icon name="gold-coin"/></span>
                        预算费用
                        <span><van-icon name="arrow-down"/></span>
                   </li>
                   <li>
                        <span><van-icon name="graphic"/></span>
                        预算费用
                        <span><van-icon name="arrow-down"/></span>
                   </li>
               </ul>
           </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            images:[],
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home/creditHousekeeper')
        }
    }
}
</script>

<style lang="less">
   #credit-housekeeper{
       >header {
           background: #000;
           width:100%;
           height: 46px;
           line-height: 46px;
           padding-top:10px;
           color:#fff;
           z-index:999;
           display: flex;
           position: fixed;
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
           padding-top:56px;
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
               margin-left:20px;
               margin-right:20px;
               height: 300px;
               background-color: orange;
           }
           >.detail {
            
             >ul{
                  display: flex;
                  justify-content: space-around;
                  border-bottom: 1px solid #ccc;
                 >li {
                     text-align: center;
                     width:49%;
                     margin:20px 0px;
                     padding:10px 0px;
                     color:#2E2E2E;
                     >span {
                         &:nth-child(2){
                             margin-left:20px;
                         }
                     }
                     &:nth-of-type(1){
                         border-right:1px solid #ccc;
                         >span{
                             &:nth-of-type(1){
                                 color:#E9752C;
                             }
                         }
                     }
                     &:nth-of-type(2){
                         >span {
                              &:nth-of-type(1){
                                 color:#619FDC;
                             }
                         }
                     }
                 }
             }
           }
       }
   }
</style>

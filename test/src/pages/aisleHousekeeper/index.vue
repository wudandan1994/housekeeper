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
               <p><span>更多计划</span><span><van-icon name="arrow"/></span></p>
               <img src="" alt="">
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
               display:flex;
               justify-content: space-around;
           }
       }
   }
</style>

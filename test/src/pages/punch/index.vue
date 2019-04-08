<template>
    <div id="punch">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>排行榜</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
           <div class="order">
               <img src="" alt="">
           </div>
           <div class="ranking">
               <van-tabs
                padding-top="10px"
                title-active-color="#807957"
                color="#777237"
               >
                    <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
                        内容 {{ index }}
                    </van-tab>
                </van-tabs>
           </div>
           <div class="check-in">
               <img @click="goCheckIn" src="../../../static/images/flower.jpg.jpg" alt="">
              
           </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        goBack() {
            this.$router.push('/home')
        },
        goCheckIn() {
             this.$router.push('/home/punch/totalPunch')
        }
    }
}
</script>

<style lang="less">
   #punch {
       >header {
           background: #000;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           font-size:28px;
           color:#fff;
           display: flex;
           z-index:999;
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
           padding-top:96px;
           padding-bottom: 50px;
           >.order {
               width:100%;
               height: 300px;
               background-color: pink;
           }
           >.check-in {
               position: relative;
               >img {
                   position: absolute;
                   top:0px;
                   left:0px;
                   width:60%;
               }
           }

       }
   }
</style>

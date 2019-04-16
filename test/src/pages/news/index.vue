<template>
    <div id="news">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
        </header>
        <div class="container">
            <van-tabs
                padding-top="10px"
                title-active-color="#F3C480"
                background="#020202"
                color="#F3C480"
                title-inactive-color="#fff"
                :swipeable="true"
               >
                    <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
                        内容 {{ index }}
                    </van-tab>
                </van-tabs>
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
        }
    }
}
</script>

<style lang="less">
   #news {
       >header {
           background-color:#8E9CCE;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           font-size:28px;
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
           .van-tab{
               font-size: 30px;
           }
       }
   }
</style>

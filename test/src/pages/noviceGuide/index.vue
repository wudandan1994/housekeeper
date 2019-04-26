<template>
    <div id="novice-guide">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">新手指南</div>
            <div class="right-icon center"></div>
        </header>
        <div class="container">
           <img src="http://pay.91dianji.com.cn/xinyongka.jpg" alt="">
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
        handleReturnHome() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less">
   #novice-guide {
       width: 100vw;
       height: calc(100vh - 86px);
       padding-top: 86px;
       .container{
           width: 100vw;
           height: auto;
           >img{
               width: 100%;
               height: auto;
           }
       }
       >.container {
           padding-top:96px;
            >.image {
                width:100%;
                >img {
                    width:100%;
                }
            }
       }
   }
</style>

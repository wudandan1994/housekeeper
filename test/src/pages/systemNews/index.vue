<template>
    <div id="system-news">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">系统消息</div>
            <div class="right-icon center"><van-icon color="white" size="20px" name="weapp-nav"/></div>
        </header>
        <div class="container">
            传帮带（上海）网络科技有限公司在四月二十日正式上线银联手机POS应用APP钱夹宝1.0，实现在线信用卡智能还款，信用卡办理，商户收款和贷款等功能。以后一部手机就能化身pos机，随时随地享受刷卡，闪付，收款和还款等功能。
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
            this.$router.push('/home')
        }
    }
}
</script>

<style lang="less">
   #system-news {
       width: 100vw;
       height: calc(100vh - 160px);
       >header {
           background-color: #4965AE;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           font-size:28px;
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
       .container {
           width: 96%;
           height: auto;
           margin-left: auto;
           margin-right: auto;
           margin-top: 160px;
           text-align: justify;
           line-height: 40px;
           font-size: 28px;
       }
   }
</style>

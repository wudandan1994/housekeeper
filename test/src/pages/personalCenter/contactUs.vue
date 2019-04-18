<template>
    <div id="contactus">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">联系我们</div>
            <div class="right-icon varify center"></div>
        </header>
        <div class="big-title">联系我们</div>
        <div class="small-title">
            公司名称：传帮带(上海)网络科技有限公司
        </div>
        <div class="small-title">
            邮箱：chuanbangdai@126.com
        </div>
        <div class="small-title">
            电话：4001059769
        </div>
         <div class="small-title">
            公司地址：上海市宝山区泰和路2038号A座303室
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        handleReturnHome() {
            this.$router.push({path:'/personalCenter'})
        },
    }
}
</script>
<style lang="less" scoped>
    #contactus{
        width: 100vw;
        height: auto;
        padding-top: 90px;
        padding-bottom: 50px;
        .big-title{
            width: 95%;
            height: auto;
             margin-left: auto;
            margin-right: auto;
            margin-top: 50px;
            font-size: 34px;
            font-weight: bold;
        }
        .small-title{
            width: 94%;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            font-size: 28px;
            line-height: 40px;
            letter-spacing: 3px; 
        }
    }
</style>

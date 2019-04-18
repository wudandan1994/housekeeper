<template>
    <div id="cooperation">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">商务合作</div>
            <div class="right-icon varify center"></div>
        </header>
        <div class="big-title">商务合作</div>
        <div class="small-title">
            如果您想对接我们的渠道资源，或是您有更好的渠道资源，请留下您的联系方式，我们会尽快和您联系，或者您也可以拨打我们的客服电话，钱夹宝欢迎您的来电。
            电话：<a href="tel:021-51695695">021-51695695</a>
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
    #cooperation{
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

<template>
    <div id="page-scan-pay">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturn"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">扫码支付</div>
            <div class="right-icon varify center"></div>
        </header>
        <div class="code center">
            <img :src="url+src"/>
        </div>
        <div class="tips center">
            使用手机微信扫一扫或长按识别二维码完成支付
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            url: 'http://pay.91dianji.com.cn/',
            src: ''
        }
    },
    methods:{
        handleReturn(){
            this.$router.go(-1);
        }
    },
    created(){
        console.log('参数',this.$route.query.qrcode);
        this.src = this.$route.query.qrcode;
    }
}
</script>
<style scoped lang="less">
#page-scan-pay{
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 100px;
}
</style>

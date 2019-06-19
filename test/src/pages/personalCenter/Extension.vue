<template>
    <div id="page_extension">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">推广原则</div>
            <div class="right-icon center"></div>
        </header>
        <img src="http://pay.91dianji.com.cn/tuiguang_detail.jpg" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
    #page_extension{
        width: 100vw;
        height: auto;
        padding-top: 86px;
        img{
            width: 100%;
            height: auto;
        }
    }
</style>

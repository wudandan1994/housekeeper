<template>
    <div id="page_url">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">{{title}}</div>
            <div class="right-icon center"></div>
        </header>
        <iframe class="iframe" :src="url" frameborder="0"></iframe>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title: '',
            url: ''
        }
    },
    methods:{
        handleReturnHome(){
            this.$router.go(-1);
        }
    },
    created(){
        // console.log('传递参数',this.$router.currentRoute.query);
        this.url = this.$router.currentRoute.query.url;
        this.title = this.$router.currentRoute.query.title;
    }
}
</script>
<style lang="less" scoped>
    #page_url{
        width: 100vw;
        padding-top: 86px;
        .iframe{
            width: 100%;
            height: calc(100vh - 86px);
        }
    }
</style>

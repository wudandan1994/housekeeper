<!--
 * @Author: your name
 * @Date: 2019-11-26 15:19:01
 * @LastEditTime: 2019-11-26 15:44:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\src\pages\mall\MallmiddleWare.vue
 -->
<template>
    <div class="container">
        <div class="back start-center" @click="handleBack">
            <div class="icon center"><van-icon name="arrow-left" size="26px" color="#ffffff"/></div>
            <div class="title center">{{params.title}}</div>
            <div class="more"></div>
        </div>
        <iframe :src="params.link" frameborder="0" class="iframe"></iframe>
    </div>
</template>
<script>
export default {
    data(){
        return{
            params: ''
        }
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        }
    },
    created(){
        this.params = this.$route.query.url;
    }
}
</script>
<style lang="less" scoped>
.container{
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    .back{
        width: 100vw;
        height: 90px;
        background: #4b66af;
        .icon{
            width: 10%;
            height: 100%;
        }
        .title{
            width: 80%;
            height: 100%;
            font-size: 28px;
            color: #ffffff;
        }
        .more{
            width: 10%;
            height: 100%;
        }
    }
    .iframe{
        width: 100vw;
        height: calc(100vh - 90px);
    }
}
</style>
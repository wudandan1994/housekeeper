<template>
    <div id="page_next">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">{{title}}</div>
            <div class="right-icon center"></div>
        </header>
        <scroll></scroll>
    </div>
</template>
<script>
import scroll from '@/components/radar/scroll'
export default {
    data(){
        return{
            title: '测试'
        }
    },
    components:{
        scroll
    },
    methods:{
        handleReturnHome(){
            this.$router.go(-1);
        },
    },
    created(){
        this.title = this.$route.query.title;
    }
}
</script>
<style lang="less" scoped>

</style>

<template>
    <div id="footer-com">
         <footer class="foot">
            <van-tabbar v-model="nowactive" active-color="#DAB17C" @change="handleChange">
                    <van-tabbar-item icon="other-pay" to="/home">首页</van-tabbar-item>
                    <van-tabbar-item icon="vip-card-o" to="/vip">VIP</van-tabbar-item>
                    <van-tabbar-item icon="manager" to="/personalCenter">个人中心</van-tabbar-item>
                    <van-tabbar-item icon="star-o" to="/share" dot>分享</van-tabbar-item>
                    <van-tabbar-item icon="more" to="/financialCircle">金融圈</van-tabbar-item>
            </van-tabbar>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            nowactive: this.active 
        }
    },
    props:{
        active: {
            type: Number,
            default: 0
        }
    },
    methods:{
        handleChange(){
            this.$emit('getChange',this.nowactive);
        }
    }
}
</script>
<style lang="less" scoped>
    #footer-com{
        .van-tabbar-item{
            font-size:40px;
        }
    }
</style>

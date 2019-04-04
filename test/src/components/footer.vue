<template>
    <div id="footer-com">
         <footer class="foot">
            <!-- <van-tabbar v-model="nowactive" active-color="#DAB17C" @change="handleChange">
                    <van-tabbar-item icon="http://bc.91dianji.com.cn/icon_71.png" to="/home">首页</van-tabbar-item>
                    <van-tabbar-item icon="http://bc.91dianji.com.cn/icon_72.png" to="/vip">VIP</van-tabbar-item>
                    <van-tabbar-item icon="http://bc.91dianji.com.cn/icon_73.png" to="/personalCenter">个人中心</van-tabbar-item>
                    <van-tabbar-item icon="http://bc.91dianji.com.cn/icon_74.png" to="/share" dot>分享</van-tabbar-item>
                    <van-tabbar-item icon="http://bc.91dianji.com.cn/icon_75.png" to="/financialCircle">金融圈</van-tabbar-item>
            </van-tabbar> -->

            <van-tabbar v-model="nowactive" active-color="#DAB17C" >
                    <van-tabbar-item  to="/home" >
                        <span>首页</span>
                        <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon.active : icon.normal"
                        >
                       
                    </van-tabbar-item>
                    <van-tabbar-item to="/vip" >
                        <span>VIP</span>
                        <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon.vipActive : icon.vipNomal"
                        >
                        </van-tabbar-item>
                    <van-tabbar-item to="/personalCenter" >
                         <span>个人中心</span>
                        <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon.personActive : icon.personNomal"
                        >
                        </van-tabbar-item>
                     <van-tabbar-item  to="/share">
                        <span>分享</span>
                        <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon.shareActive : icon.shareNomal"
                        >
                    </van-tabbar-item>
                     <van-tabbar-item  to="/financialCircle">
                        <span>金融圈</span>
                        <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon.circleActive : icon.circleNomal"
                        >
                    </van-tabbar-item>
            </van-tabbar>




        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            nowactive: this.active ,
             icon: {
                normal: 'http://bc.91dianji.com.cn/icon_71.png',
                active: 'http://bc.91dianji.com.cn/icon_82.png',
                vipActive:'http://bc.91dianji.com.cn/icon_83.png',
                vipNomal:'http://bc.91dianji.com.cn/icon_72.png',
                personActive:'http://bc.91dianji.com.cn/icon_84.png',
                personNomal:'http://bc.91dianji.com.cn/icon_73.png',
                 shareActive:'http://bc.91dianji.com.cn/icon_85.png',
                shareNomal:'http://bc.91dianji.com.cn/icon_74.png',
                circleActive:'http://bc.91dianji.com.cn/icon_86.png',
                circleNomal:'http://bc.91dianji.com.cn/icon_75.png',
            }
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
<style lang="less">
    #footer-com{
        .foot{
            z-index:99;
        }
        .van-tabbar {
            height: 100px;
        }
        .van-tabbar-item{
            font-size: 22px;
        }
         .van-tabbar-item__icon{
            font-size: 44px  !important;
            margin-bottom: 14px !important;
        }
        .van-tabbar-item__icon img {
            height: 40px;
        }
        
    }
</style>

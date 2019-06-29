<template>
    <div id="footer-com">
         <footer class="foot">
            <!-- <van-tabbar v-model="nowactive" active-color="#4B66AF" >
                <van-tabbar-item  to="/home" >
                   <span>首页</span>
                   <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
                </van-tabbar-item>
                <van-tabbar-item to="/vip" >
                   <span>VIP</span>
                   <img slot="icon" slot-scope="props" :src="props.active ? icon.vipActive : icon.vipNomal">
                </van-tabbar-item>
                <van-tabbar-item to="/personalCenter">
                   <span>个人中心</span>
                   <img slot="icon" slot-scope="props" :src="props.active ? icon.personActive : icon.personNomal">
                </van-tabbar-item>
                <van-tabbar-item  to="/share">
                   <span>AI雷达</span>
                   <img slot="icon" slot-scope="props" :src="props.active ? icon.shareActive : icon.shareNomal">
                </van-tabbar-item>
                <van-tabbar-item  to="/financialCircle">
                   <span>金融圈</span>
                   <img slot="icon" slot-scope="props" :src="props.active ? icon.circleActive : icon.circleNomal"> 
                </van-tabbar-item>
            </van-tabbar> -->



             <van-tabbar v-model="nowactive"  >
                <van-tabbar-item  to="/home" >
                   <svg class="icon"  aria-hidden="true">
                        <use xlink:href="#iconshouye"></use>
                   </svg>
                   <p>首页</p>
                   <!-- <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal"> -->
                </van-tabbar-item>
                <van-tabbar-item to="/vip" >
                     <svg class="icon"  aria-hidden="true">
                        <use xlink:href="#iconvip2"></use>
                     </svg>
                   <p>VIP</p>
                </van-tabbar-item>
                <van-tabbar-item to="/personalCenter">
                    <svg class="icon"  aria-hidden="true">
                        <use xlink:href="#icongerenzhongxin"></use>
                     </svg>
                   <p>个人中心</p>
                </van-tabbar-item>
                <van-tabbar-item  to="/share">
                   <svg class="icon"  aria-hidden="true" >
                        <use xlink:href="#iconiconset0398"></use>
                    </svg>
                   <p>AI雷达</p>
                </van-tabbar-item>
                <van-tabbar-item  to="/financialCircle">
                   <svg class="icon"  aria-hidden="true">
                        <use xlink:href="#iconjinrongquan"></use>
                    </svg>
                   <p>金融圈</p>
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
                normal: 'http://pay.91dianji.com.cn/footer_01.png',
                active: 'http://pay.91dianji.com.cn/footer_01-1.png',
                vipActive:'http://pay.91dianji.com.cn/footer_02-1.png',
                vipNomal:'http://pay.91dianji.com.cn/footer_02.png',
                shareActive:'http://pay.91dianji.com.cn/LEIDA-ICON@2x.png',
                shareNomal:'http://pay.91dianji.com.cn/LEIDA-ICON-01@2x.png',
                circleActive:'http://pay.91dianji.com.cn/footer_05-1.png',
                circleNomal:'http://pay.91dianji.com.cn/footer_05.png',
                personActive:'http://pay.91dianji.com.cn/footer_03-1.png',
                personNomal:'http://pay.91dianji.com.cn/footer_03.png'
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
        .icon {
            width:30%;
            height:60px;
            text-align: center;
        }
        .foot{
            z-index:99;
            text-align: center;

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

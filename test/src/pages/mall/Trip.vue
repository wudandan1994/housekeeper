<!--
 * @Author: your name
 * @Date: 2019-11-26 10:09:37
 * @LastEditTime: 2019-11-26 15:56:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\src\pages\mall\Trip.vue
 -->
<template>
    <div class="container">
        <img :src="url+'tripbg-1.1.jpg'">
        <!-- 返回 -->
        <div class="back" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="30px"/></div>
        <!-- 火车票 -->
        <div class="train-ticket" id="train" @click="handleJumpMall(train)"></div>
        <!-- 酒店 -->
        <div class="hotel-ticket" id="hotel" @click="handleJumpMall(hotel)"></div>
        <!-- 机票 -->
        <div class="airplane-ticket" id="airplane" @click="handleJumpMall(airplane)"></div>
        <!-- 景点 -->
        <div class="scenic-ticket" id="scenic" @click="handleJumpMall(scenic)"></div>
        <!-- 酒店+门票专区 -->
        <div class="hotel-scenic-ticket" id="hotel-scenic" @click="handleJumpMall(sale)"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            url: 'http://pay.91dianji.com.cn/',
            type: '',
            train: {
                title: '购票限时抢',
                link: "https://union.lvmama.com/tnt_cps/cps/newRedirect2.do?source=83008&lvmamakey=4ePo&isNew=new"
            },
            hotel: {
                title: '酒店大折扣',
                link: "https://union.lvmama.com/tnt_cps/cps/newRedirect2.do?source=83008&lvmamakey=4eQ2&isNew=new"
            },
            airplane: {
                title: '机票低价抢',
                link: "https://union.lvmama.com/tnt_cps/cps/newRedirect2.do?source=83008&lvmamakey=4eQ4&isNew=new"
            },
            scenic: {
                title: '景点随心逛',
                link: "https://union.lvmama.com/tnt_cps/cps/newRedirect2.do?source=83008&lvmamakey=4eQ6&isNew=new"
            },
            sale: {
                title: '大牌特卖',
                link: "https://union.lvmama.com/tnt_cps/cps/newRedirect2.do?source=83008&lvmamakey=4eQ8&isNew=new"
            }

        }
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        },
        // 根据屏幕宽度自适应热区
        handleAutoArea(){
            // 默认屏幕宽度，以iphone6的双尺寸为标准
            let oldWidth = 750;
            // 火车票热区自适应定位
            let train = document.getElementById('train');
            let clientWidth = document.body.clientWidth;
            train.style.left = (48*clientWidth/oldWidth) + 'px';
            train.style.top = (835*clientWidth/oldWidth) + 'px';
            train.style.height = (184*clientWidth/oldWidth) + 'px';

            // 酒店热区自适应定位
            let hotel = document.getElementById('hotel');
            hotel.style.left = (48*clientWidth/oldWidth) + 'px';
            hotel.style.top = (1028*clientWidth/oldWidth) + 'px';
            hotel.style.height = (184*clientWidth/oldWidth) + 'px';

            // 机票热区自适应定位
            let airplane = document.getElementById('airplane');
            airplane.style.left = (48*clientWidth/oldWidth) + 'px';
            airplane.style.top = (1223*clientWidth/oldWidth) + 'px';
            airplane.style.height = (184*clientWidth/oldWidth) + 'px';

            // 景点热区自适应定位
            let scenic = document.getElementById('scenic');
            scenic.style.left = (48*clientWidth/oldWidth) + 'px';
            scenic.style.top = (1419*clientWidth/oldWidth) + 'px';
            scenic.style.height = (184*clientWidth/oldWidth) + 'px';

            // 酒店+门票专区自适应定位
            let scenicHotel = document.getElementById('hotel-scenic');
            scenicHotel.style.bottom = (94*clientWidth/oldWidth) + 'px';
            scenicHotel.style.height = (71.3*clientWidth/oldWidth) + 'px';
        },
        // 判断设备类型
        handleJudgeMobile(){
            let type = navigator.userAgent;
            if(type.indexOf('Andrioid') > -1 || type.indexOf('Linux') > -1){
                this.type = 'Android';
            }
            else if(type.indexOf('iPhone') > -1){
                this.type = 'iPhone';
            }
        },
        // 商城跳转
        handleJumpMall(params){
            if(this.type == 'iPhone'){
                location.href = params.link;
            }else{
                this.$router.push({
                    path: '/MallmiddleWare',
                    query: {
                        url: params
                    }
                })
            }
        }
    },
    created(){
        this.handleJudgeMobile();
    },
    mounted(){
        this.handleAutoArea();
    }
}
</script>
<style lang="less" scoped>
.container{
    width: 100vw;
    height: auto;
    position: relative;
    >img:nth-child(1){
        width: 100%;
        height: auto;
        // pointer-events: none;
    }
    // 返回
    .back{
        position: absolute;
        top: 25px;
        left: 15px;
    }
    // 火车票
    .train-ticket{
        width: 87.2%;
        background: red;
        position: absolute;
        z-index: 2;
        opacity: 0;
    }
    // 酒店
    .hotel-ticket{
        width: 87.2%;
        background: black;
        position: absolute;
        z-index: 2;
        opacity: 0;
    }
    // 机票
    .airplane-ticket{
        width: 87.2%;
        background: pink;
        position: absolute;
        z-index: 2;
        opacity: 0;
    }
    // 景点
    .scenic-ticket{
        width: 87.2%;
        background: blue;
        position: absolute;
        z-index: 2;
        opacity: 0;
    }
    // 酒店+门票专区
    .hotel-scenic-ticket{
        width: 71.65%;
        position: absolute;
        z-index: 2;
        background: orchid;
        left: calc(calc(100% - 71.65%) / 2);
        border-radius: 35.62px;
        opacity: 0;
    }
}
</style>
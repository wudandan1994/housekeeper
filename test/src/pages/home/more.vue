<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-27 15:10:51
 * @LastEditTime: 2019-10-08 09:48:22
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="more">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="black" size="20px" name="arrow-left"/></div>
            <div class="top-title center">特权列表</div>
            <div class="right-icon center"></div>
        </header>
        <transition name="van-slide-left">
            <div class="menus">
                <div class="title start-center">全球出行</div>
                <div class="goodsList">
                    <div class="per-goods" v-for="(item,index) in goodsOne" :key="index">
                        <div class="center"><img :src="url + item.icon" alt=""></div>
                        <div class="center">{{item.title}}</div>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="van-slide-left">
            <div class="menus">
                <div class="title start-center">大牌美食</div>
                <div class="goodsList">
                    <div class="per-goods" v-for="(item,index) in goodsTwo" :key="index">
                        <div class="center"><img :src="url + item.icon" alt=""></div>
                        <div class="center">{{item.title}}</div>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="van-slide-left">
            <div class="menus">
                <div class="title start-center">生活服务</div>
                <div class="goodsList">
                    <div class="per-goods" v-for="(item,index) in goodsThree" :key="index">
                        <div class="center"><img :src="url + item.icon" alt=""></div>
                        <div class="center">{{item.title}}</div>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="van-slide-left">
            <div class="menus">
                <div class="title start-center">爱车特权</div>
                <div class="goodsList">
                    <div class="per-goods" v-for="(item,index) in goodsFour" :key="index">
                        <div class="center"><img :src="url + item.icon" alt=""></div>
                        <div class="center">{{item.title}}</div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return{
            url: 'http://pay.91dianji.com.cn/',
            goodsOne: [
                {
                    icon: 'more01.png',
                    title: '机票',
                    router: '',
                    id: 0
                },
                {
                    icon: 'more02.png',
                    title: '连锁酒店',
                    router: '',
                    id: 1
                },
                {
                    icon: 'more03.png',
                    title: '火车票',
                    router: '',
                    id: 2
                },
                {
                    icon: 'more04.png',
                    title: '星级酒店',
                    router: '',
                    id: 3
                },
                {
                    icon: 'more05.png',
                    title: '景点门票',
                    router: '',
                    id: 4
                },
                {
                    icon: 'more06.png',
                    title: '国际机票',
                    router: '',
                    id: 5
                },
                {
                    icon: 'more07.png',
                    title: '机场贵宾厅',
                    router: '',
                    id: 6
                },
                {
                    icon: 'more08.png',
                    title: '全球旅行',
                    router: '',
                    id: 7
                },
            ],
            goodsTwo: [
                {
                    icon: 'more09.png',
                    title: '肯德基快餐',
                    router: '',
                    id: 0
                },
                {
                    icon: 'more10.png',
                    title: '必胜客快餐',
                    router: '',
                    id: 1
                },
                {
                    icon: 'more11.png',
                    title: '好利来蛋糕',
                    router: '',
                    id: 2
                },
                {
                    icon: 'more12.png',
                    title: '星巴克咖啡',
                    router: '',
                    id: 3
                },
                {
                    icon: 'more01.png',
                    title: '机票',
                    router: '',
                    id: 4
                },
                {
                    icon: 'more14.png',
                    title: '吉野家',
                    router: '',
                    id: 5
                },
                {
                    icon: 'more15.png',
                    title: '汉堡王',
                    router: '',
                    id: 6
                },
                {
                    icon: 'more16.png',
                    title: '米其林餐厅',
                    router: '',
                    id: 7
                },
                {
                    icon: 'more17.png',
                    title: '满记甜点',
                    router: '',
                    id: 8
                },
                {
                    icon: 'more18.png',
                    title: '汉拿山',
                    router: '',
                    id: 9
                },
                {
                    icon: 'more19.png',
                    title: '呷哺呷哺',
                    router: '',
                    id: 10
                },
                {
                    icon: 'more20.png',
                    title: '百果园',
                    router: '',
                    id: 11
                }
            ],
            goodsThree: [
                {
                    icon: 'more21.png',
                    title: '电影票',
                    router: '',
                    id: 0
                },
                {
                    icon: 'more22.png',
                    title: '优惠券',
                    router: '',
                    id: 1
                },
                {
                    icon: 'more23.png',
                    title: '信用卡通道',
                    router: '',
                    id: 2
                },
                {
                    icon: 'more24.png',
                    title: '迪士尼',
                    router: '',
                    id: 3
                },
                {
                    icon: 'more25.png',
                    title: '同陈闪送',
                    router: '',
                    id: 4
                },
                {
                    icon: 'more26.png',
                    title: '海外签证',
                    router: '',
                    id: 5
                },
                {
                    icon: 'more27.png',
                    title: '基因检测',
                    router: '',
                    id: 6
                },
                {
                    icon: 'more29.png',
                    title: '法律咨询',
                    router: '',
                    id: 7
                },
                {
                    icon: 'more30.png',
                    title: '意外保险',
                    router: '',
                    id: 8
                },
                {
                    icon: 'more31.png',
                    title: '卡·测评',
                    router: '',
                    id: 9
                }
            ],
            goodsFour: [
                {
                    icon: 'more32.png',
                    title: '机动车保险',
                    router: '',
                    id: 0
                },
                {
                    icon: 'more33.png',
                    title: '国际驾照',
                    router: '',
                    id: 1
                },
                {
                    icon: 'more34.png',
                    title: '豪车租赁',
                    router: '',
                    id: 2
                }
            ],
        }
    },
    methods:{
        handleReturnHome(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
#more{
    background: #F0F2F5;
    padding: 86px 0px;
    header{
        background: #FFFFFF;
        .top-title{
            color: #000000;
        }
    }
    .menus{
        width: 95%;
        height: auto;
        background:rgba(255,255,255,1);
        border-radius: 8px;
        margin: 20px auto 0px auto;
        padding-bottom: 20px;
        .title{
            width: 100%;
            height: 80px;
            color: #505050;
            box-sizing: border-box;
            padding-left: 20px;
            font-size: 30px;
            font-weight: 700;
        }
        .goodsList{
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            .per-goods{
                width: 25%;
                height: calc(95vw / 4);
                >div:nth-child(1){
                    width: 100%;
                    height: 70%;
                    img{
                        width: 82px;
                        height: 82px;
                    }
                }
                >div:nth-child(2){
                    width: 100%;
                    height: 30%;
                    color: #505050;
                    font-size: 28px;
                }
            }
        }
    }
}
</style>
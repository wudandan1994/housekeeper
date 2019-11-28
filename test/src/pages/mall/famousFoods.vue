<!--
 * @Author: your title
 * @Date: 2019-11-26 15:58:30
 * @LastEditTime: 2019-11-28 17:51:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\src\pages\mall\famousFoods.vue
 -->
<template>
    <div class="container">
        <div class="back" @click="HandleBack"><van-icon name="arrow-left" color="#ffffff" size="24px"/></div>
        <div class="banner"><img src="http://pay.91dianji.com.cn/foods-1.1.png"></div>
        <div class="content">
            <div class="menus">
                <img :src="url + 'meishixingdong.png'" alt="">
                <div class="per-menus" v-for="(item,index) in BrandList" :key="index" @click="HandleJump(item)">
                    <div class="icon center"><van-icon :name="url+item.icon" size="60px"/></div>
                    <div class="title center">{{item.title}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            url: 'http://pay.91dianji.com.cn/',
            BrandList: [
                {
                    icon: '/foods-kfc.png',
                    title: '肯德基',
                    link: 'https://m.4008823823.com.cn/kfcmwos/indexMenu.htm?classId=115&utm_source=baidu&utm_medium=mobilebrandzone&utm_content=title&utm_campaign=order'
                },
                {
                    icon: '/foods-bsk.png',
                    title: '必胜客',
                    link: 'https://m.4008123123.com/PHHSMWOS/homeMenu.htm?utm_source=wap%20sogou%20android&utm_medium=cpc&utm_campaign=%E5%BF%85%E8%83%9C%E5%AE%A2&utm_content=%E5%93%81%E7%89%8C%E5%AE%98%E7%BD%91-android'
                },
                {
                    icon: '/hanbaowang.png',
                    title: '汉堡王',
                    link: 'https://bkchina.cn/'
                },
                {
                    icon: '/haidilao.png',
                    title: '海底捞',
                    link: 'https://www.haidilao.com/zh/hdlms/index.html'
                },
                {
                    icon: '/foods-xbk.png',
                    title: '星巴克',
                    link: 'https://www.starbucks.com.cn/'
                },
                {
                    icon: '/maidanglao.png',
                    title: '麦当劳',
                    link: 'https://www.mcdonalds.com.cn/'
                },
                {
                    icon: '/costa.png',
                    title: 'Costa',
                    link: 'http://costa.net.cn/-77.html'
                },
                {
                    icon: '/hagendasi.png',
                    title: '哈根达斯',
                    link: 'http://m.4009870870.com'
                },
                {
                    icon: '/JIYEJIA.png',
                    title: '吉野家',
                    link: 'http://jyj.4008-197-197.com/#/index'
                }
            ],
        }
    },
    methods:{
        HandleBack(){
            this.$router.go(-1);
        },
        // 跳转
        HandleJump(params){
            location.href = params.link;
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    width: 100vw;
    height: 100vh;
    position: relative;
    background: url('http://pay.91dianji.com.cn/famousfoodsbg-1.1.png') no-repeat;
    background-size: cover;
    .back{
        position: absolute;
        z-index: 2;
        top: 20px;
        left: 20px;
    }
    .banner{
        width: 100vw;
        height: auto;
        border: none;
        >img{
            width: 100%;
            height: auto;
        }
    }
    .content{
        width: 100vw;
        box-sizing: border-box;
        padding:20px 40px;
        .menus{
            width: 100%;
            height: 100%;
            background: #ffffff;
            margin: auto;
            box-shadow: 0px 0px 5px 5px #ccc;
            border-radius: 10px;
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            padding-top: 180px;
            padding-bottom: 20px;
            position: relative;
            overflow: hidden;
            >img:nth-child(1){
                width: 40%;
                height: auto;
                position: absolute;
                top: -90px;
                left: 30%;
            }
            .per-menus{
                width: 25%;
                height: calc(calc(100vw - 80px) / 4);
                .icon{
                    width: 100%;
                    height: 70%;
                }
                .title{
                    width: 100%;
                    height: 30%;
                }
            }
        }
    }
}
</style>
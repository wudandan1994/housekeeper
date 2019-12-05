<!--
 * @Author: your title
 * @Date: 2019-11-28 15:23:29
 * @LastEditTime: 2019-11-28 17:21:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\src\pages\mall\lifeservice.vue
 -->
<template>
    <div class="container">
        <div class="back" @click="HandleBack"><van-icon name="arrow-left" color="#ffffff" size="24px"/></div>
        <div class="banner"><img src="http://pay.91dianji.com.cn/lifeservice-1.1.png" alt=""></div>
        <div class="content">
            <div class="per-menus" v-for="(item,index) in BrandList" :key="index" @click="HandleJump(item)">
                <div class="icon center"><van-icon :name="url+item.icon" size="60px"/></div>
                <div class="title center">{{item.title}}</div>
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
                    icon: '/life-tj.png',
                    title: '体检中心',
                    link: 'http://m.guanaihui.com/sh/shoplistModel '
                },
                {
                    icon: '/dishini.png',
                    title: '迪士尼',
                    link: 'https://wx.shanghaidisneyresort.com/57a183fcfa2f94704d8b4624/h5/disney/index.html?1574660046031=#!/ticket/home/?agencyId=menu&isActivated=false&memberId=5ddb676519bed800b2e137ab&openId=osYopt5J57QIVNaL-YPE2VKQFCGI&channelId=57a2d5a0f601a20d23aeffde'
                },
                // {
                //     icon: '/',
                //     title: '同城闪送',
                //     link: 'https://h5.ele.me/msite/'
                // },
                {
                    icon: '/life-yyyl.png',
                    title: '影音娱乐',
                    link: 'https://v.qq.com/'
                },
                {
                    icon: '/life-qcs.png',
                    title: '屈臣氏',
                    link: 'https://h5.watsons.com.cn'
                },
                {
                    icon: '/life-fl.png',
                    title: '法律咨询',
                    link: 'http://m.110.com/'
                },
                {
                    icon: '/life-dyp.png',
                    title: '电影票',
                    link: 'https://maoyan.com/?merCode=1000056#movie'
                }
            ],
        }
    },
    methods: {
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
    background: #4B66AF;
    .back{
        position: absolute;
        z-index: 2;
        top: 20px;
        left: 20px;
    }
    .banner{
        img{
            width: 100%;
            height: auto;
        }
    }
    .content{
        width: 100%;
        height: auto;
        background: #ffffff;
        width: calc(100vw - 80px);
        height: auto;
        margin: 60px auto auto auto;
        display: flex;
        flex-wrap: wrap;
        border-radius: 10px;
        padding: 50px 0px;
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
</style>
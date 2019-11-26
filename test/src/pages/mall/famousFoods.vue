<!--
 * @Author: your name
 * @Date: 2019-11-26 15:58:30
 * @LastEditTime: 2019-11-26 16:40:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\src\pages\mall\famousFoods.vue
 -->
<template>
    <div class="container">
        <div class="back"><van-icon name="arrow-left"/></div>
        <div class="banner"><img src="http://pay.91dianji.com.cn/foods-1.1.png" alt=""></div>
        <div class="content"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.container{
    width: 100vw;
    height: auto;
    .banner{
        width: 100vw;
        height: auto;
        >img{
            width: 100%;
            height: auto;
        }
    }
    .content{
        width: 100vw;
        height: 400px;
        background: url('http://pay.91dianji.com.cn/famousfoodsbg-1.1.png') no-repeat;
        background-size: cover;
    }
}
</style>
<template>
    <div id="ads-news">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>新闻资讯</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
            <van-tabs
                title-active-color="orange"
                color="orange"
            >
                <van-tab v-for="index in 8" 
                :title="'标签 ' + index"
                 :key="index"
                 
                 >
                    内容 {{ index }}
                </van-tab>
            </van-tabs>
        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        goBack() {
            this.$router.push('/share')
        }
    }
}
</script>

<style lang="less">
   #ads-news {
       >header {
           background: #000;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           z-index:999;
           display: flex;
           position: fixed;
           font-size: 28px;
           justify-content: space-between;
           >span {
               &:nth-of-type(1) {
                   margin-left: 10px;
               }
               &:nth-of-type(3) {
                   margin-right: 10px;
               }
           }
       }
       >.container {
           padding-top:96px;
           padding-bottom: 50px;
       }
   }
</style>

<template>
    <div id="news">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>{{title}}</span>
            <span></span>
        </header>
        <div class="container">
           <!-- <img src="http://pay.91dianji.com.cn/collet.jpg" alt=""> -->
           <img :src="url" alt="">

        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
             url:"",
             title:"",
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        }
    },
    created () {
        this.title=this.$route.query.title
        this.url=this.$route.query.url

    }
}
</script>

<style lang="less">
   #news {
       >header {
           background-color:#4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           font-size:28px;
           display: flex;
           z-index:999;
           position: fixed;
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
           >img {
               width:100%;
           }
       }
   }
</style>

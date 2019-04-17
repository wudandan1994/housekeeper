<template>
    <div id="system-news">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>系统消息</span>
            <span></span>
        </header>
        <div class="container">
            <h1>如何使用</h1>
            <p>尊敬的钱夹宝用户您好</p>
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
            this.$router.push('/home')
        }
    }
}
</script>

<style lang="less">
   #system-news {
       >header {
           background-color: #4965AE;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           font-size:28px;
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
       }
   }
</style>

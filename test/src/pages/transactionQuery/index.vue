<template>
    <div id="transaction-query">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>交易查询</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
            334893479
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
            this.$router.push('/home/receivables')
        }
    }
}
</script>

<style lang="less">
   #transaction-query{
       >header {
            background-color: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           font-size:28px;
           color:#fff;
           display: flex;
           position: fixed;
           z-index:999;
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

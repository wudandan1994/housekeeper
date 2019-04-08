<template>
    <div id="credit-data-query">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>征信大数据查询</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
           
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
            this.$router.push('/home/creditEnquiry')
        }
    }
}
</script>

<style lang="less">
   #credit-data-query {
       >header {
           background: #000;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           z-index:999;
           position: fixed;
           font-size:28px;
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

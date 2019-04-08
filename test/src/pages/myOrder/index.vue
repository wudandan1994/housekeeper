<template>
    <div id="my-order">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>大数据查询订单</span>
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
            this.$router.push('/home/creditEnquiry')
        }
    }
}
</script>

<style lang="less">
   #my-order {
       >header {
           background: #000;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           z-index:999;
           font-size:28px;
           display: flex;
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
       }
   }
</style>

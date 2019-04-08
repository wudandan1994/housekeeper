<template>
    <div id="principle">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <!-- <span></span> -->
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
            <p>关于钱夹宝推广原则</p>
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
   #principle {
       >header {
           background: #000;
           width:100%;
           height: 86px;
           padding-top:10px;
           line-height:86px;
           color:#fff;
           display: flex;
           font-size:28px;
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
           >p {   
               color:#E42D34;
                padding:30px 0px;
                text-align: center;
                font-size:50px;
            }
       }
   }
</style>

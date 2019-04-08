<template>
    <div id="report-example">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            
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
   #report-example {
       >header {
           background: #000;
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
   }
</style>

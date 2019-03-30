<template>
    <div id="poster">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>海报</span>
            <span></span>
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
            this.$router.push('/share')
        }
    }
}
</script>

<style lang="less">
   #poster {
       >header {
           background: #000;
           width:100%;
           height: 46px;
           padding-top:10px;
           line-height:46px;
           color:#fff;
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
           padding-top:56px;
           padding-bottom: 50px;
       }
   }
</style>

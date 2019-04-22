<template>
    <div id="novice-guide">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
             <span>新手指南</span>
             <span></span>
        </header>
        <div class="container">
           <div class="image">
               <img src="../../../static/images/intro.jpg" alt="">
           </div>
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
            this.$router.push('/home/cardCenter')
        }
    }
}
</script>

<style lang="less">
   #novice-guide {
       >header {
          background-color: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           font-size:28px;
           z-index:999;
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
           padding-top:96px;
            >.image {
                width:100%;
                >img {
                    width:100%;
                }
            }
       }
   }
</style>

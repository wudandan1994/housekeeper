<template>
    <div id="customerService">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>在线客服</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
            <div class="logo center"><van-icon name="http://pay.91dianji.com.cn/logo.png" size="250px"/></div>
            <div class="per-detail row">
                <div class="per-icon center"><van-icon clase="center" name="phone" size="18px" color="rgb(75, 102, 175)"/></div>
                <div class="detail start-center">4001059769</div>
            </div>
            <div class="per-detail row">
                <div class="per-icon center"><van-icon clase="center" name="card" size="18px" color="rgb(75, 102, 175)"/></div>
                <div class="detail start-center">chuanbangdai@126.com</div>
            </div>
            <div class="per-detail row">
                <div class="per-icon center"><van-icon clase="center" name="location" size="18px" color="rgb(75, 102, 175)"/></div>
                <div class="detail start-center">上海市宝山区泰和路2038号A座303室</div>
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
            this.$router.push('/home')
        }
    }
}
</script>

<style lang="less">
   #customerService {
       >header {
           background-color: #4965AE;
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
           .logo{
               width: 100%;
               height: auto;
               margin-top: 50px;
            }
            .per-detail{
                width: 70%;
                height: 60px;
                margin-left: auto;
                margin-right: auto;
                .per-icon{
                    line-height: 22px;
                }
                .detail{
                    line-height: 22px;
                    margin-left: 10px;
                    font-size: 28px;
                }
            }
            
       }
   }
</style>

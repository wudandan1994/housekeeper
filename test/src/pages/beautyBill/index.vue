<template>
    <div id="beautybill">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>美化账单</span>
            <span></span>
        </header>
        <div class="container">
            <div class="title">
                <img src="http://pay.91dianji.com.cn/beautytitle.png" alt="">
            </div>
            <div class="card">
                <div class="search">
                    <router-link to="/home/beautyBill/exchangeRate" tag="p">
                        <span></span>
                        <span>查询汇率</span>
                    </router-link>
                     <router-link to="/home/beautyBill/check" tag="p">
                        <span></span>
                        <span>我要验证</span>
                     </router-link>
                </div>
                <div class="tip">
                    <p>用户须知：</p>
                    <p>1.本服务帮助有境外旅游消费需求的用户，验证是否具备旅游目的地国家及地区对应币种的支付权限（请提前联系银行开通对应服务）。</p>
                    <p>2.支持美元（USD）、欧元（EUR）、港币（HKD）、英镑（GBP）、日元（JPY）等多种币种的验证服务及汇率实时查询服务。</p>
                    <p>3.本次验证服务过程中，输入信息均须跳转银联页面完成，本服务不会获取用户信息。</p>
                    <p>4.验证成功说明具备赌赢国家及地区的支付权限，验证金额不支持退款。</p>
                    <p>请仔细阅读以上须知后再进行自主操作</p>
                </div>
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
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less">
   #beautybill {
       >header {
        //    background: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
        //    color:#fff;
           color: #4B66AF;
           display: flex;
           position: fixed;
           font-size:28px;
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
           position: relative;
           .title{
               width:100%;
               img{
                   width:100%;
               }
           }
           .card{
               background-color: #fff;
               width:100%;
               height:55%;
               position: absolute;
               border-radius: 30px 30px 0px 0px;
               top:45%;
               left:0;
               .search{
                   display: flex;
                   justify-content: space-around;
                   color:#397CFF;
                   font-size: 34px;
                   padding:30px 0;
               }
               .tip{
                   padding:10px 40px;
                   p{
                       line-height: 45px;
                       &:nth-of-type(1){
                           font-size: 34px;
                           font-weight: bold;
                           padding-bottom: 30px;
                       }
                       &:nth-of-type(6){
                           color:red;
                       }
                      
                   }
               }
           }
       }
   }
</style>

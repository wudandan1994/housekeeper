<template>
    <div id="passageway">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>设置金额</span>
             <span></span>
        </header>
        <div class="container">
             <div class="trade">
                 <p><span><van-icon name="label"/></span> <span>交易说明</span></p>
                 <ul>
                     <li>1.交易单笔最高限额：<span>50000元</span>整</li>
                     <li>2.交易单笔最低限额：<span>500元</span>整</li>
                     <li>3.交易单日最高限额：<span>50000元</span>整</li>
                     <li>4.交易手续费扣率： A通道<span>0.65%+1.5元/笔</span></li>
                     <li>5.交易时间：A通道&nbsp;00:00-20:00</li>
                 </ul>
                 <p class="read">有部分银行限额会有略微调整，详情请查阅各通道相关政策！</p>
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
            this.$router.push('/home/receivables')
        }
    }
}
</script>

<style lang="less">
   #passageway {
       >header {
           background-color: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           z-index:999;
           font-size:28px;
           padding-top:10px;
           color:#fff;
           display: flex;
           position: fixed;
           justify-content: space-between;
           >span {
               &:nth-of-type(1) {
                   margin-left: 10px;
               }
           }
       }
       >.container {
           padding-top:96px;
           padding-left:15px;
           >.trade {
               padding-top:50px;
               >P{
                border-bottom: 1px solid #ccc;
                 padding-bottom:50px;
                >span {
                 &:nth-of-type(1) {
                    color:#F67333;
                    margin-right: 10px;
                }
               }
             }
             >ul{
                 padding:30px 20px;
                 color:#000;
                 >li {
                     line-height:50px;
                     >span {
                         color:#989566;
                     }
                 }
             }
             >.read {
                 padding-top:20px;
                 line-height: 40px;
                 border-top: 2px solid #ccc;
                 color:#bbb;
             }
           }
       }
   }
</style>

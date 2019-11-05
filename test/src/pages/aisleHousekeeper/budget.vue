<template>
    <div id="budget">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>预算费用</span>
            <span></span>
        </header>
        <div class="container">
           <div class="cost">
               <ul>
                   <li>
                       <span>还款金额：</span>
                       <input type="text" v-model="budget" placeholder="请输入还款金额">
                       <span>元</span>
                   </li>
                    <li>
                       <span>还款金额：</span>
                       <input type="text" v-model="reserve" placeholder="请输入预留金额">
                       <span>元</span>
                   </li>
               </ul>
           </div>
           
        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {
            budget:"",
            reserve:"",
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
   #budget {
       >header {
           background: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
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
           .cost {
               padding:20px;
               ul{
                   li{
                       display: flex;
                       flex-wrap: nowrap;
                       align-items: center;
                       border-bottom: 1px solid #ccc;
                       padding-top:30px;
                       height: 60px;
                       line-height: 60px;
                       color:#000;
                       font-size: 30px;
                      input {
                           border:none;
                           flex: 1;
                           font-size: 30px;
                           text-align: right;
                           height: 60px;
                           margin-top:-26px;
                           margin-right:20px;
                       }
                       input::-webkit-input-placeholder {
                           font-size: 28px;
                           padding-top: 8px;
                           margin-top:-22px;
                       }
                   }
               }
           }
       }
   }
</style>

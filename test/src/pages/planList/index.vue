<template>
    <div id="violation-inquiry">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>设置还款计划</span>
            <span></span>
        </header>
        <div class="container">
            <div class="info">
                <p>招商银行</p>
                <p>尾号0551</p>
                <p>还款日:<span>还剩11天</span></p>
            </div>
            <div class="time">
                <p>制定时间：</p>
                <div class="num">
                    <p>消费笔数：<span>12+6</span>笔</p>
                    <p>笔数费：<span>6</span>元</p>
                </div>
                <div class="num">
                    <p>还款金额：<span>2010.74</span>元</p>
                    <p>手续费：<span>15.27</span>元</p>
                </div>
            </div>
            <div class="list">
                <table class="table">
                    <thead>
                        <tr class="crow">
                            <th>账户动态</th>
                            <th>交易时间</th>
                            <th>交易金额</th>
                            <th>手续费</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <tr v-for="(data,index) in planlist.plans" :key="index">
                            <td>{{data.type}}</td>
                            <td>{{data.date}}</td>
                            <td>{{data.amount}}</td>
                            <td>{{data.poundage}}</td>
                        </tr> -->
                    </tbody>
                </table>
            </div>
        </div>
        
    </div>

</template>

<script>
export default {
    data() {
        return {
            planlist:{}
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home/creditHousekeeper/aisleHousekeeper/makePlan')
        }
    },
    created () {
        this.planlist=this.$route.params.list
        console.log(this.planlist)
    }
}
</script>

<style lang="less">
   #violation-inquiry {
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
           >.info {
               display: flex;
               justify-content: space-between;
               margin-top:10px;
               padding:10px;
               border-bottom: 1px solid #ccc;
           }
           >.time {
               padding: 15px;
               >p {
                   margin-bottom: 10px;
               }
               >.num {
                   display: flex;
                   justify-content: space-between;
                   >p {
                       width:50%;
                       margin:15px 0px;
                   }
               }
           }
           .list {
               table {
                 border:1;
                 width:100%;

               }
               tr,th {
                   text-align: center;
                   border:1px solid #ccc;
                   padding:5px;
               }
               .crow {
                   padding:5px 10px;
               }
           }
       }
   }
</style>

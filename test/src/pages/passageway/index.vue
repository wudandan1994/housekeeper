<template>
    <div id="passageway">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>通道说明</span>
             <span></span>
        </header>
        <div class="container">
             <!-- <div class="trade">
                 <p><span><van-icon name="label"/></span> <span>交易说明</span></p>
                 <ul>
                     <li>1.交易单笔最高限额：<span>50000元</span>整</li>
                     <li>2.交易单笔最低限额：<span>500元</span>整</li>
                     <li>3.交易单日最高限额：<span>50000元</span>整</li>
                     <li>4.交易手续费扣率： A通道<span>0.65%+1.5元/笔</span></li>
                     <li>5.交易时间：A通道&nbsp;00:00-20:00</li>
                 </ul>
                 <p class="read">有部分银行限额会有略微调整，详情请查阅各通道相关政策！</p>
             </div> -->
             <div class="data" v-show="type=='2'">
                 <p class="trade">交易银行额度表</p>
                   <table class="table">
                    <thead>
                        <tr class="crow">
                            <th>银行名称</th>
                            <th>单笔限额</th>
                            <th>单日限额</th>
                            <th>交易时间</th>
                        </tr>
                    </thead>
                    <tbody class="tbody">
                        <tr v-for="(data,index) in details" :key="index" >
                            <td>{{data.bankname}}</td>
                            <td>{{data.number}}</td>
                            <td>{{data.limit}}</td>
                            <td>{{data.time}}</td>
                        </tr>
                    </tbody>
                </table>
             </div>
              <div class="data" v-show="type=='1'">
                 <p class="trade">交易银行额度表</p>
                   <table class="table">
                    <thead>
                        <tr class="crow">
                            <th>银行名称</th>
                            <!-- <th>单笔下限</th> -->
                            <th>单笔上限</th>
                            <th>单日限额</th>
                            <th>交易时间</th>
                        </tr>
                    </thead>
                    <tbody class="tbody">
                        <tr v-for="(data,index) in banktype" :key="index" >
                            <td>{{data.bankname}}</td>
                            <!-- <td>{{data.low}}</td> -->
                            <td>{{data.up}}</td>
                            <td>{{data.limit}}</td>
                            <td>{{data.time}}</td>
                        </tr>
                    </tbody>
                </table>
             </div>
             <p  v-show="type=='2'" class="part">有部分银行限额会有略微调整，详情请联系客服。</p>
             <p  v-show="type=='1'" class="partone">地方性银行多数不支持作收款，建议不要使用地方性银行作为收款卡。</p>


        </div>
    </div>

</template>


<script>
import banklimit from '@/lib/banklimit'
import banktype from '@/lib/banktype'

export default {
    data() {
        return {
            details:[],
            banktype:[],
            type:"",
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        }
    },
    created () {
        this.details=banklimit
        this.banktype=banktype
        this.type=this.$route.query.type
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
           .part {
               text-align: right;
               margin-top:30px;
               color:#999;
               line-height: 34px;
           }
           .partone {
                margin-top:30px;
                color:#999;
               line-height: 34px;

           }
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
           .data {
               margin-top:50px;
               .trade {
                //    color:#4B66AF;
                   text-align: center;
                   margin-bottom: 30px;
                   font-size: 36px;
                   font-weight: bold;
               }
           }
            table {
                 border:1;
                 width:100%;
                 td{
                     padding:10px;
                 }
                 >.tbody {
                     tr {
                         text-align: center;
                         td{
                             border:1px solid #ccc;
                         }
                     }
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

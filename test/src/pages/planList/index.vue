<template>
    <div id="violation-inquiry">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>设置还款计划</span>
            <span></span>
        </header>
        <div class="container">
            <div class="info">
                <!-- <p>招商银行</p>
                <p>尾号0551</p> -->
                <!-- <p>还款日:<span>还剩11天</span></p> -->
                 <p >{{item.bankNick}}</p>
                <p >{{item.payerName}}</p>
                <p>*<span>{{item.cardNo.substr(item.cardNo.length-4)}}</span></p>
            </div>
            <div class="time">
                <p>制定时间：{{currentTime}}</p>
                <div class="num">
                    <p>消费笔数：<span>{{planlist.paycount}} + {{planlist.repaycount}}</span>笔</p>
                    <p>笔数费：<span>{{planlist.countamount}}</span>元</p>
                </div>
                <div class="num">
                    <p>还款金额：<span>{{planlist.realamount}}</span>元</p>
                    <p>手续费：<span>{{planlist.poundage}}</span>元</p>
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
                    <tbody class="tbody">
                        <tr v-for="(data,index) in details" :key="index" >
                        <!-- <tr v-for="(data,index) in plans" :key="index" > -->
                        <!-- <tr v-for="(data,index) in plans.slice((currentPage-1)*10,10)" :key="index" > -->
                            <td>消费</td>
                            <td>{{data.date}}</td>
                            <td>{{data.amount}}</td>
                            <td>{{data.poundage}}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="page">
                    <van-pagination 
                    v-model="currentPage" 
                    :items-per-page="size"
                    :page-count="total"
                    :total-items="page"
                    mode="simple" 
                   @change="changePage"
                    />
                </div>
            </div>
            <div class="submit">
                 <van-button size="large" @click="makePlan" round type="default">提交计划</van-button>
                  <van-button size="large" to="/home/creditHousekeeper/aisleHousekeeper" type="info" round >取消计划</van-button>
            </div>
        </div>
         <loading :componentload="componentload"></loading>
        
    </div>

</template>

<script>
import { axiosPost } from '../../lib/http'
import loading from '@/components/loading'
import qs from 'qs'
export default {
      components:{
      loading
    },
    data() {
        return {
            planlist:{},
            currentPage:1,
            page:0,
            currentTime:"",
            size:10,
            componentload:false,
            area:"",
            item:"",
            total:0,
            plans:[],
            details:[],
        }
    },
    methods:{
        goBack() {
            this.$router.push({
                path:"/home/creditHousekeeper/aisleHousekeeper/makePlan",
                query:{
                    info:this.item
                }
            })
        },
        changePage(){
           this.details= this.plans.splice((this.currentPage-1)*10,10)
          this.plans.splice((this.currentPage-1)*10,0,...this.details)
        },
        makePlan(){
            let datas={
                data:JSON.stringify(this.planlist),
                area:this.area
            }
            axiosPost("/creditCard/insertPlans",datas)
            .then(res=>{
                if(!res.data.success){
                    this.$toast({
                        message:res.data.message
                    })
                } else {
                        this.componentload=true
                        setTimeout(()=>{
                            this.componentload=false
                            this.$toast(res.data.message)
                                 this.$router.push({
                                    path:"/home/punch",
                                    query:{
                                        bindId:this.planlist.bindId
                                    }
                                })
                          },2000)
                   }
            })
            .catch(err=>{
            })
        },
        fnDate(){
                var date=new Date();
                var year=date.getFullYear();//当前年份
                var month=date.getMonth();//当前月份
                var data=date.getDate();//天
                var hours=date.getHours();//小时
                var minute=date.getMinutes();//分
                var second=date.getSeconds();//秒
                this.currentTime=year+"-"+this.fnW((month+1))+"-"+this.fnW(data)+" "+this.fnW(hours)+":"+this.fnW(minute)+":"+this.fnW(second);
            },
            //补位 当某个字段不是两位数时补0
            fnW(str){
                var num;
                str>9?num=str:num="0"+str;
                return num;
            } 
    },
    created () {
        this.planlist=this.$route.query.list 
        this.item=this.$route.query.item
         this.area=this.$route.query.area 
        let arr=[]
        this.planlist.plans.forEach(element => {
            if(element.type !=9){
                this.num++;
                arr.push(element)
            }
             this.plans=arr
        });
        this.fnDate();
    },
    mounted () {
         this.total=Math.ceil(this.plans.length/this.size)
        this.details=this.plans.splice((this.currentPage-1)*10,10) 
        this.plans.splice((this.currentPage-1)*10,0,...this.details)

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
                 td{
                     padding:10px;
                 }
                 >.tbody {
                     tr {
                         td{
                             border:1px solid #ccc;
                         }
                     }
                 }
               }
               .page {
                   height:60px;
                   .van-pagination {
                       width:50%;
                       text-align: right;
                       font-size: 30px;
                       float: right;
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
           .submit {
               margin-top:20px;
               padding:0 30px;
               .van-button--info {
                   color:#000;
                   background-color: #fff;
                   border: 2px solid #ccc;
               }
               >button {
                   &:nth-of-type(1){
                       margin-bottom:50px;
                   }
               }
           }
       }
   }
</style>

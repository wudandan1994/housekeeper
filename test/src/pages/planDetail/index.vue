<template>
    <div id="plan-detail">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>计划详情</span>
            <span></span>
        </header>
        <div class="container">
               <div class="card">
                  <p class="top">
                      <span>信用卡</span> &nbsp;&nbsp;<span>落地通道</span>
                  </p>
                  <div class="waiting">
                      <p>{{bankName}}</p>
                      <p>尾号：{{name.substr(name.length-4)}}</p>   
                      <p v-if="cardInfo.type=='0'">等待中</p>
                      <p v-if="cardInfo.type=='1'">已成功</p>
                      <p v-if="cardInfo.type=='2'">已取消</p>
                      <p v-if="cardInfo.type=='3'">进行中</p>
                      <p v-if="cardInfo.type=='4'">失败</p>


                  </div>
                  <div class="amount">
                      <ul>
                          <li>总额度：￥<span>{{Number(cardInfo.countamount)+Number(cardInfo.poundage)+Number(cardInfo.realamount)}}</span></li>
                          <li>本期账单：￥<span>{{cardInfo.realamount}}</span></li>
                          <li>预留额度：<span>{{cardInfo.balance}}</span></li>
                          <li>已还金额：<span>￥0</span></li>
                      </ul>
                  </div>
                  <div class="num">
                       <ul>
                          <li>消费笔数：<span>{{cardInfo.paycount}}</span></li>
                          <li>消费手续费：￥<span>{{cardInfo.poundage}}</span></li>
                          <li>还款笔数：<span>{{cardInfo.repaycount}}</span></li>
                          <li>还款笔数费：￥<span>{{cardInfo.countamount}}</span></li>
                      </ul>
                  </div>
                  <div class="button">
                     <van-button @click="stopPlan(cardInfo.id)" v-show="cardInfo.type=='0' || cardInfo.type=='3'" round size="large" type="default">终止计划</van-button>
                  </div>
               </div>
               <div class="detail">
                   <ul>
                        <li v-for="(item,index) in listOut" :key="index">
                           <div class="top">
                               <p>{{bankName}}：{{name.substr(name.length-4)}}</p>
                               <p>主订单：{{cardInfo.orderId.substr(cardInfo.orderId.length-6)}}</p>
                               <p>手续费：<span>{{rate[index]}}</span>元</p>
                           </div>
                           <div class="list">
                              <ul>
                                  <li v-for="(info,i) in item" :key="i">
                                      <div class="left">
                                          <p><span>消费账单&nbsp;</span><span class="gray">{{info.date}}</span></p>
                                          <p><span class="gray">订单号：</span><span>{{info.parentNo}}</span></p>
                                          <p class="gray">智还&nbsp;落地通道&nbsp;持卡者：{{nick}}</p>
                                      </div>
                                      <div class="right">
                                          <p class="bold">{{info.amount}}</p>
                                          <!-- <p class="gray">{{info.type==type[i]?type[i]:info.type}}</p> -->
                                          <p class="gray" v-if="info.type=='1'">消费</p>
                                          <p class="gray" v-if="info.type=='2'">消费</p>
                                          <p class="gray" v-if="info.type=='3'">消费</p>
                                          <p class="gray" v-if="info.type=='9'">还款</p>
                                      </div>
                                  </li>
                                 
                              </ul>
                           </div>
                       </li>
                   </ul>
               </div>
           </div>
       
    </div>

</template>

<script>
import { axiosPost } from '../../lib/http'
export default {
    data() {
        return {
            id:"",
            cardInfo:{},
            list:[],
            bankName:"",
            name:"",
            nick:"",
            listOut:[],
            rate:{},
            type:{
                 "0":"等待中",
                 "1":"已成功",
                 "2":"已取消",
                 "3":"进行中",
                 "4":"失败",
            }
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home/punch')
        },
        stopPlan(id){
             this.$dialog.confirm({
                    title: '提示',
                    message: '确定要取消计划？',
                    confirmButtonText:'是',
                })
                .then(()=>{
                     let data={
                  id,
              }
              axiosPost("/creditCard/cancelMainPlan",data)
              .then(res=>{
                  console.log(res)
                  if(!res.data.success){
                      this.$toast({
                          message:res.data.message
                      })
                  } else {
                       this.getMainPlan()
                  }
              })
              .catch(err=>{
                  console.log(err)
              })
                })
                .catch(()=>{
                    //on cancel
                })


        },
        getPlans(){
             let data={
                 id:this.id
             }
             axiosPost("creditCard/getMainPlanAndPlans",data)
             .then(res=>{
                 console.log(res,"主计划和子计划")
                 if(!res.data.success){
                     this.$toast({
                         message:res.data.message
                     })
                 } else {
                     this.cardInfo=res.data.data
                     this.list=res.data.data.plans
                     let type=res.data.data.type
                     let arr=[]
                     let arrOut=[]
                     this.list.forEach((item ,i)=> {
                         arr.push(item)
                         if(type=="1" && arr.length==3){
                                 arrOut.push(arr)
                                arr=[]
                             
                         } else if(type=="2" && arr.length==4) {
                                arrOut.push(arr)
                                arr=[]
                             }
                     });
                     arrOut.forEach((ele,i)=>{
                         let num=0
                         ele.forEach(list=>{
                             if(list.type!=9){
                                 num+=Number(list.poundage)
                             }
                         })
                        //  四舍五入
                         this.rate[i]=num.toFixed(2)
                     })
                      this.listOut=arrOut
                 }
             })
             .catch(err=>{
                 console.log(err,"子计划")
             })
        }
    },
    created () {
         this.id= this.$route.query.id 
          this.bankName= this.$route.query.bankName
         this.name= this.$route.query.name 
         this.nick= this.$route.query.nick

         this.getPlans()
    }
}
</script>

<style lang="less">
   #plan-detail {
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
             >.card {
                  padding-top:30px;
                  >.top {
                      font-weight: bold;
                      padding:10px 0px 10px 10px;
                      margin:0 !important;
                      >span {
                          &:nth-of-type(2){
                              color:#4B66AF;
                          }
                      }
                  }
                  >.waiting {
                      display:flex;
                      background-color: rgb(123, 148, 218);
                      box-sizing: border-box;
                      margin:5px 15px 20px 15px;
                      padding:15px 10px;
                      color:#fff;
                      justify-content: space-around;
                      border-radius: 8px 8px 0px 0px;
                      >p {
                          &:nth-of-type(1),
                          &:nth-of-type(2){
                              margin-top:5px;
                          }
                      }
                  }
                  >.amount {
                      border-bottom: 1px solid #ccc;
                      padding-bottom: 10px;
                      >ul {
                          display: flex;
                          justify-content: space-between;
                          flex-wrap: wrap;
                          >li {
                              width:48%;
                              padding:5px 0px 10px 10px;
                              >span {
                                  color:red;
                              }
                          }
                      }
                  }
                  >.num {
                      >ul {
                          display: flex;
                          justify-content: space-between;
                          flex-wrap: wrap;
                          >li {
                              width:48%;
                              padding:10px 0px;
                              text-align: center;
                          }
                      }
                  }
                  >.button {
                      margin-top:20px;
                      padding:0 30px;
                      .van-button--default {
                          background-color: #666;
                      }
                         margin-top:20px;
                            .van-dialog,
                            .van-dialog__message,
                            .van-button {
                                font-size: 30px;
                            }
                                .van-button .van-button--default .van-button--large .van-dialog__confirm .van-hairline--left{
                                height:70px;
                            }
                                .van-dialog .van-button{
                                height: 80px;
                            }


                  }
              }
              >.detail {
                  margin-top:20px;
                  background-color: #eee;
                  margin-bottom: 20px;
                  width:100% !important;
                  >ul {
                      box-sizing: border-box;
                      margin:30px 15px;
                      >li {
                          margin-bottom: 15px;
                           background-color: #fff;
                          >.top {
                              display: flex;
                              justify-content: space-between;
                              background-color: #7B94DA;
                              padding:15px 10px;
                              border-radius: 8px 8px 0px 0px;
                          }
                          .list {
                              >ul {
                                  border-radius: 0px 0px 8px 8px;
                                  box-shadow: 0px 5px 0px 0px #bbb;
                                  >li {
                                      border-bottom: 1px solid #eee;
                                      display: flex;
                                      align-items: center;
                                      justify-content: space-between;
                                      padding:20px 10px;
                                      p {
                                          padding-bottom: 15px;
                                      }
                                      .gray {
                                          color:#aaa;
                                      }
                                      .bold {
                                          font-weight: bold;
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          
       }
   }
</style>

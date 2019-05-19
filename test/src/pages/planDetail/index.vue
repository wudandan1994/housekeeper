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
                      <p>
                          <van-button type="info">等待执行</van-button>
                      </p>
                  </div>
                  <div class="amount">
                      <ul>
                          <li>总额度：<span>￥3041</span></li>
                          <li>本期账单：￥<span>{{cardInfo.realamount}}</span></li>
                          <li>预留额度：<span>￥1000</span></li>
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
                     <van-button round size="large" type="default">终止计划</van-button>
                  </div>
               </div>
               <div class="detail">
                   <ul>
                        <li v-for="(item,index) in listOut" :key="index">
                           <div class="top">
                               <p>{{bankName}}：{{name.substr(name.length-4)}}</p>
                               <p>主订单：{{cardInfo.orderId.substr(cardInfo.orderId.length-6)}}</p>
                               <p>手续费：5.05元</p>
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
                                          <p class="gray">等待执行</p>
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
            listOut:[]
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home/punch')
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
                     let arr=[]
                     let arrOut=[]
                     this.list.forEach((item ,i)=> {
                         arr.push(item)
                         if(arr.length==3){
                             arrOut.push(arr)
                             arr=[]
                            //  console.log(arr)
                            //  console.log(arrOut)
                         }
                     });
                      this.listOut=arrOut
                    //   console.log(this.listOut)
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

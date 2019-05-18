<template>
    <div id="violation-inquiry">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>设置还款计划</span>
            <span></span>
        </header>
        <div class="container">
            <div class="bind">
               <ul >
                   <li >
                       <div class="top">
                          <div class="bankName">
                              <p >{{item.bankNick}}</p>
                              <p>*<span>{{item.cardNo.substr(item.cardNo.length-4)}}</span></p>
                              <!-- <p>
                                  还款状态
                              </p> -->
                          </div>
                          <div class="now">
                              <div>
                                  <!-- <p class="botton">未添加</p> -->
                              </div>
                              <div class="pay">
                                  <!-- <p class="days">16</p> -->
                                  <div>
                                      <!-- <p class="botton">天后还款日</p> -->
                                  </div>
                              </div>
                             
                          </div>
                       </div>
                       <div class="bottom">
                           <ul>
                               <li>
                                   <p>未设置</p>
                                   <p>本期账单</p>
                               </li>
                               <li>
                                   <p>{{item.billdate}}<span>日</span></p>
                                   <p>账单日</p>
                               </li>
                                <li>
                                   <p>{{item.duedate}}<span>日</span></p>
                                   <p>还款日</p>
                               </li>
                                <li>
                                   <p>3天</p>
                                   <p>还款宽限期</p>
                               </li>
                              
                           </ul>
                       </div>
                   </li>
               </ul>
           </div>
           <div class="notice">
               <p>*在经济条件允许范围内，不要长期低于总额度30%，可以降低银行系统风控</p>
           </div>
           <div class="plan">
               <p><van-icon name="setting" />系统计划</p>
               <div class="content">
                  <div class="eara">
                      <p>请输入还款金额</p>
                      <input class="input" v-model="payment" type="number" placeholder="请输入还款金额">
                  </div>
                  <div class="eara">
                      <p>当前账户可用余额</p>
                      <input class="input" v-model="amount" type="number" placeholder="当前账户可用余额(不能低于还款额的5%)">
                  </div>
                   <div class="eara">
                      <p>请选择消费城市</p>
                      <div class="last">
                          <van-icon name="location"/>
                          <input class="city" v-model="city" type="number" placeholder="位置">
                          <van-icon name="arrow-down"/>
                      </div>
                      
                  </div>
               </div>
           </div>
            <div class="make">
                <van-button size="large" @click="makePlan" round type="info">制定计划</van-button>
            </div>
        </div>
        <div class="li">

        </div>
    </div>
</template>

<script>
import { axiosPost } from '../../lib/http'
export default {
    data() {
        return {
           payment:"",
           amount:"",
           item:"",
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home/creditHousekeeper/aisleHousekeeper')
        },
        makePlan(){
            if(this.payment.trim().length===0 || this.amount.trim().length===0){
                this.$toast({
                    message:"请输入金额"
                })
                return
            }
            if(Number(this.amount)<Number(this.payment)*0.05){
                this.$toast({
                    message:"当前账户可用余额不能低于还款额的5%"
                })
                return
            }
            let data={
                bindId:this.item.bindId,
                amount:this.amount,
                payment:this.payment
            }
             axiosPost("/creditCard/getPlan",data)
             .then(res=>{
                  if( res.data.code=="1001" && res.data.success==false){
                      this.$toast({
                          message:res.data.message
                        })
                     this.$router.push("/home/insertEsiCash")
                 } else if (res.data.success) {
                    let planList=res.data.data
                     this.$router.push({
                         path:"/home/creditHousekeeper/aisleHousekeeper/planList",
                         query:{list:planList}
                     })
                   }
                 else {
                      this.$toast({
                         message:res.data.message
                     })
                 }
             })
             .catch(err=>{
                 console.log(err)
             })
        }
    },
    created () {
         this.item=this.$route.query.info 
        //  console.log(this.item)
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
           .bind {
                box-sizing: border-box;
              >ul{
                  padding:30px;
                  >li {
                      position: relative;
                      width:100%;
                      border-radius: 10px;
                      border:2px solid #ccc;
                      color:#000;
                      padding:10px;
                       box-sizing: border-box;
                       >.top {
                           padding-bottom: 150px;
                           .bankName {
                          display: flex;
                          justify-content: space-around;
                          margin-bottom: 15px;
                         }
                       }
                      .bottom {
                          position: absolute;
                          bottom: 0px;
                          left:0px;
                          right:0px;
                          >ul{
                              display: flex;
                              justify-content: space-around;
                              >li {
                                  width:25%;
                                  text-align: center;
                                  .van-icon--image {
                                      font-size: 40px;
                                  }
                                  >p {
                                      &:nth-of-type(1){
                                          margin-top:20px;
                                          margin-bottom: 20px;
                                      }
                                      &:nth-of-type(2){
                                          margin-bottom: 20px;
                                      }
                                  }

                              }
                          }
                      }
                      .now {
                          display: flex;
                          justify-content: space-around;
                          >.pay {
                              display: flex;
                              >.days {
                                  font-size: 38px;
                                  font-weight: bold;
                                  margin-right: 10px;
                                  margin-top:10px;
                              }
                          }
                          .botton {
                              margin-bottom: 10px;
                          }
                      }
                  }
              }
          }
          >.notice {
              background-color: #eee;
              line-height: 38px;
              padding:10px 0px;
          }
          >.plan {
            //  padding:15px;
            // margin:15px;
             >p {
                 margin:20px;
                 color:#4B66AF;
             }
             >.content {
                  margin:15px;
                 >.eara {
                     margin-bottom: 15px;
                     >p {
                     margin-bottom: 10px;
                   }
                   >.last {
                        width:100%;
                       height:60px;
                       line-height:55px;
                       border:2px solid #ccc;
                       background-color: #eee;
                       border-radius: 10px;
                        >.city {
                         border:none;
                         background-color: #eee;
                       }
                   }
                   >.input {
                       border:none;
                       width:100%;
                       height:60px;
                       border:2px solid #ccc;
                       background-color: #eee;
                       border-radius: 10px;
                       padding-left:20px;
                       box-sizing: border-box;
                   }
                 }
                 
             }
          }
          >.make {
              margin-top:50px;
              padding:0 30px;
              .van-button--info {
                  background-color: #4B66AF;
              }
          }
       }
   }
</style>

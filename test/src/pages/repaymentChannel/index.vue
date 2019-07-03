<template>
    <div id="repayment-channel">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>智能还款</span>
            <span></span>
        </header>
        <div class="container">
            <div class="bind">
               <ul >
                   <li>
                       <div class="top">
                          <div class="bankName">
                              <p >{{item.bankNick}}</p>
                               <p >{{item.payerName}}</p>
                              <p>*<span>{{item.cardNo.substr(item.cardNo.length-4)}}</span></p>
                              <!-- <p>
                                  还款状态
                              </p> -->
                          </div>
                          <div class="now">
                              <div>
                                  <!-- <p class="botton">未添加</p> -->
                                   <!-- <p>本期账单</p> -->
                              </div>
                              <div class="pay">
                                  <!-- <p class="days">16</p> -->
                                  <div>
                                      <!-- <p class="botton">天后还款日</p> -->
                                      <!-- <p><span>{{item.billdate}}</span>-<span>{{item.duedate}}</span></p> -->
                                  </div>
                              </div>
                             
                          </div>
                       </div>
                       <div class="bottom">
                           <ul>
                               <li>
                                   <p>未知</p>
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
                           </ul>
                       </div>
                   </li>
               </ul>
           </div>
           <div class="type">
               <ul>
                   <li @click="makePlan('1')">
                       <div class="image">
                            <van-icon name="http://pay.91dianji.com.cn/luodi.png" size="40px" />
                       </div>
                       <div class="middle">
                           <h3><span class="bold">本地真实落地商户</span>&nbsp;&nbsp;<span class="orange">还款通道&nbsp;</span>(预留5%起)</h3>
                           <p>智能精养信用卡，设置计划智能养信用卡</p>
                       </div>
                       <div class="arrow">
                            <van-icon name="arrow" size="30px" />
                       </div>
                   </li>
                   <li @click="makePlan('2')">
                       <div class="image">
                            <van-icon name="http://pay.91dianji.com.cn/shau3huan1.png" size="40px" />
                       </div>
                       <div class="middle">
                           <h3><span class="bold">刷3还1</span>&nbsp;(预留5%起)</h3>
                           <p>落地商户，完美模拟真实消费账单</p>
                       </div>
                       <div class="arrow">
                            <van-icon name="arrow" size="30px" />
                       </div>
                   </li>
               </ul>
           </div>
           <div class="tips">
               <h3>温馨提示</h3>
               <div class="channel">
                   <p>&nbsp;&nbsp;&nbsp;尊敬的用户您好！本支付通道为真实商户消费通道，为了修复完善您信用卡账单就，建议您最好预留<span class="red">11%-12%</span>的资金，
                   要确保在执行消费还款计划期间，卡内有足够的金额（期间尽量避免使用：<span class="bold">微信扫码、支付宝、京东</span>等地方消费使用，并注意卡内临时额、
                   产生分期费用等），否则可能会导致余额不足或扫码消费笔数限制，还款计划执行失败。</p>
                   <div>注：请如实填写账单日、还款日，如填写不实导致未全额还款的，责任由客户自行承担。
                        <div class="center"><van-checkbox v-model="checked" @change="handleAgree" shape="square" checked-color="#4b66af">本人已阅读同意</van-checkbox></div>
                   </div>
               </div>
           </div>
        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {
            item:"",
            checked:false,
        }
    },
    methods:{
        goBack() {
            this.$router.push("/home/creditHousekeeper/aisleHousekeeper");
        },
        handleAgree(val){
        },
      
        makePlan(i){
            if(!this.checked){
                this.$toast({
                    message:"请阅读并同意协议"
                })
                return
            }
            this.$router.push({
                path:"/home/creditHousekeeper/aisleHousekeeper/makePlan",
                query:{
                    info:this.item,
                    type:i
                }
            })

        }

    },
    created () {
       this.item=this.$route.query.info 
    }
}
</script>

<style lang="less">
   #repayment-channel {
       >header {
           background-color: #4B66AF;
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
                      color:#fff;
                      border-radius: 10px;
                      box-sizing: border-box;
                      margin-bottom: 15px;
                      background-image:url("http://pay.91dianji.com.cn/big2.png");
                      background-repeat: no-repeat;
                      height: 350px;
                      background-size:100%;
                      padding:10px;
                       >.top {
                           padding-top:13px;
                           height:20px !important;
                           .bankName {
                          display: flex;
                          justify-content: space-around;
                          margin-bottom: 15px;
                         }
                       }
                      .bottom {
                         margin-bottom:35px;
                          >ul{
                              display: flex;
                              justify-content: space-around;
                              margin-top:10px;
                              >li {
                                  width:33%;
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
                     
                  }
              }
          }
          .type {
              padding:10px 15px;
              >ul {
                  >li {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      border-bottom: 1px solid #ccc;
                      margin-bottom:20px;
                      padding-bottom:15px;
                      >.middle {
                          flex:1;
                          margin-left:20px;
                          >p {
                              color:#999;
                              font-weight:bold;
                              margin-top:10px;
                          }
                          >h3 {
                              margin-bottom: 10px;
                              >.bold {
                                  font-weight: bold;
                              }
                              >.orange {
                                  color:cornflowerblue;
                              }
                          }
                      }
                      &:nth-of-type(2){
                          border:none;
                      }
                  }
              }
          }
          >.tips {
               padding:20px;
              >h3 {
                  font-weight: bold;
                  margin-bottom: 10px;
              }
              >.channel {
                  background-color: #eee;
                  padding:10px;
                  line-height: 38px;
                  border-radius: 10px;
                  border:2px solid #ccc;
                  .center {
                      justify-content: space-between;
                      margin-top:10px;
                  }
                  .van-checkbox__icon .van-icon{
                      border:1px solid #000;
                      margin-bottom: 8px !important;
                  }
                  .red {
                      color:red;
                  }
                  .bold {
                      font-weight: bold;
                  }
              }
          }
          .button {
                  padding:0 30px;
                  .van-button--info {
                      background-color: #4B66AF;
                  }
              }
       }
   }
</style>

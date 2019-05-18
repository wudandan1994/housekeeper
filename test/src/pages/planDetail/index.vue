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
                      <p>招商银行</p>
                      <p>5187******0551</p>
                      <p>
                          <van-button type="info">等待执行</van-button>
                      </p>
                  </div>
                  <div class="amount">
                      <ul>
                          <li>总额度：<span>￥3041</span></li>
                          <li>本期账单：<span>￥3010.61</span></li>
                          <li>预留额度：<span>￥1000</span></li>
                          <li>已还金额：<span>￥0</span></li>
                      </ul>
                  </div>
                  <div class="num">
                       <ul>
                          <li>消费手续费：<span>￥18.39</span></li>
                          <li>消费笔数：<span>18+6</span></li>
                          <li>自用减免：<span>0.61</span></li>
                          <li>还款笔数：<span>￥12</span></li>
                      </ul>
                  </div>
                  <div class="button">
                     <van-button round size="large" type="default">终止计划</van-button>
                  </div>
               </div>
               <div class="detail">
                   <ul>
                       <li>
                           <div class="top">
                               <p>招商银行：0551</p>
                               <p>主订单：588051</p>
                               <p>手续费：5.05元</p>
                           </div>
                           <div class="list">
                              <ul>
                                  <li>
                                      <div class="left">
                                          <p><span>消费账单&nbsp;</span><span class="gray">2019-05-18</span></p>
                                          <p><span class="gray">订单号：</span><span>201905171757354950</span></p>
                                          <p class="gray">智还&nbsp;落地通道&nbsp;持卡者：江*锋</p>
                                      </div>
                                      <div class="right">
                                          <p class="bold">-￥179.00</p>
                                          <p class="gray">等待执行</p>
                                      </div>
                                  </li>
                                  <li>
                                      <div class="left">
                                          <p><span>消费账单&nbsp;</span><span class="gray">2019-05-18</span></p>
                                          <p><span class="gray">订单号：</span><span>201905171757354950</span></p>
                                          <p class="gray">智还&nbsp;落地通道&nbsp;持卡者：江*锋</p>
                                      </div>
                                      <div class="right">
                                          <p class="bold">-￥179.00</p>
                                          <p class="gray">等待执行</p>
                                      </div>
                                  </li>
                              </ul>
                           </div>
                       </li>
                        <li>
                           <div class="top">
                               <p>招商银行：0551</p>
                               <p>主订单：588051</p>
                               <p>手续费：5.05元</p>
                           </div>
                           <div class="list">
                              <ul>
                                  <li>
                                      <div class="left">
                                          <p><span>消费账单&nbsp;</span><span class="gray">2019-05-18</span></p>
                                          <p><span class="gray">订单号：</span><span>201905171757354950</span></p>
                                          <p class="gray">智还&nbsp;落地通道&nbsp;持卡者：江*锋</p>
                                      </div>
                                      <div class="right">
                                          <p class="bold">-￥179.00</p>
                                          <p class="gray">等待执行</p>
                                      </div>
                                  </li>
                                  <li>
                                      <div class="left">
                                          <p><span>消费账单&nbsp;</span><span class="gray">2019-05-18</span></p>
                                          <p><span class="gray">订单号：</span><span>201905171757354950</span></p>
                                          <p class="gray">智还&nbsp;落地通道&nbsp;持卡者：江*锋</p>
                                      </div>
                                      <div class="right">
                                          <p class="bold">-￥179.00</p>
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
export default {
    data() {
        return {

        }
    },
    methods:{
        goBack() {
            this.$router.push('/home/punch')
        }
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

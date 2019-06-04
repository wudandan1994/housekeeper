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
                               <p >{{item.payerName}}</p>
                              <p>*<span>{{item.cardNo.substr(item.cardNo.length-4)}}</span></p> 
                              <!-- <p>
                                  还款状态
                              </p> -->
                          </div>
                          <!-- <div class="now">
                              <div>
                                  <p class="botton">未添加</p>
                              </div>
                              <div class="pay">
                                <p class="days">16</p> 
                                  <div>
                                    <p class="botton">天后还款日</p> 
                                  </div>
                              </div>
                          </div> -->
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
                                   <!-- <p>3天</p>
                                   <p>还款宽限期</p> -->
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


                  <!-- <div class="eara">
                      <p>开始还款时间</p>
                      <input class="input" v-model="startdate" type="text" placeholder="开始还款时间">
                  </div> -->

                   <div class="eara">
                      <p>开始还款时间</p>
                      <div class="last">
                           <p> <van-icon  size="20px" name="todo-list-o"/></p>
                          <input class="city" readonly  v-model="startdate" type="text" >
                          <p><span @click="showStartpicker"><van-icon size="20px" name="arrow"/></span></p>
                      </div>
                       <van-datetime-picker
                        v-model="currentDate"
                        type="date"
                          @confirm="confirmStart"
                        v-show="showStart"
                         @cancel="cancelStart"
                        />
                  </div>

                     <!-- <div class="eara">
                       <p>还款结束时间</p>
                      <input class="input" v-model="enddate" type="text" placeholder="还款结束时间">
                    </div> -->

                   <div class="eara">
                      <p>还款结束时间</p>
                      <div class="last">
                           <p> <van-icon  size="20px" name="todo-list-o"/></p>
                          <input class="city" readonly  v-model="enddate" type="text" >
                          <p><span @click="showEndpicker"><van-icon size="20px" name="arrow"/></span></p>
                      </div>
                       <van-datetime-picker
                        v-model="currentDate"
                        type="date"
                        @confirm="confirmEnd"
                        v-show="showEnd"
                        @cancel="cancelEnd"
                        />
                  </div>
                   <div class="eara">
                      <p>请选择消费城市</p>
                      <div class="last">
                          <p> <van-icon  size="20px" name="location"/></p>
                          <input class="city" readonly  v-model="area" type="text" placeholder="位置">
                          <p><span @click="showPick"><van-icon size="20px" name="arrow"/></span></p>
                      </div>
                         <van-picker v-show="showFlag" :columns="columns" @change="onChange"   @confirm="onConfirm"    @cancel="onCancel"  :default-index="0"   show-toolbar/>
                  </div>
               </div>
           </div>
            <div class="make">
                <van-button size="large" @click="makePlan" round type="info">制定计划</van-button>
            </div>
        </div>
       
    </div>
</template>

<script>
import { axiosPost } from '../../lib/http'
import { citys } from '../../lib/city.js'
import storage from '@/lib/storage'
export default {
    data() {
        return {
           payment:"",
           amount:"",
           currentDate: new Date(),
           item:"",
           type:"",
           area:"",
           startdate:"",
           showFlag:false,
           showStart:false,
           showEnd:false,
           enddate:"",
           columns: [
                {
                values: Object.keys(citys),
                className: 'column1'
                },
                {
                values: citys['浙江'],
                className: 'column2',
                defaultIndex: 2
                }
            ],
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home/creditHousekeeper/aisleHousekeeper')
        },
         onChange(picker, values) {
            picker.setColumnValues(1, citys[values[0]]);
         }, 
         confirmEnd(value){
              var date=value
              var year=date.getFullYear();//当前年份
              var month=date.getMonth();//当前月份
              var data=date.getDate();//天
              this.enddate=year+"-"+this.fnW((month+1))+"-"+this.fnW(data);
              this.showEnd=false
         },
         confirmStart(value){
             console.log(value)
              var date=value
              var year=date.getFullYear();//当前年份
              var month=date.getMonth();//当前月份
              var data=date.getDate();//天
              this.startdate=year+"-"+this.fnW((month+1))+"-"+this.fnW(data);
              this.showStart=false
         },
          fnDate(time){
                var date=time
                var year=date.getFullYear();//当前年份
                var month=date.getMonth();//当前月份
                var data=date.getDate();//天
                this.startdate=year+"-"+this.fnW((month+1))+"-"+this.fnW(data);
            },
            //补位 当某个字段不是两位数时补0
            fnW(str){
                var num;
                str>10?num=str:num="0"+str;
                return num;
            } ,
          onCancel(){
             this.showFlag=false
         },
         cancelEnd(){
             this.showEnd=false
         },
         cancelStart(){
             this.showStart=false
         },
         showStartpicker(){
             this.showStart=true
         },
         showEndpicker(){
             this.showEnd=true
         },
         onConfirm(value){
            this.area=value.join("-")
            this.showFlag=false
         },
         showPick(){
             this.showFlag=true
         },
        makePlan(){
            if(this.payment.trim().length===0 || this.amount.trim().length===0 || this.area.trim().length===0 || this.startdate.trim().length===0 || this.enddate.trim().length===0){
                this.$toast({
                    message:"请将信息填写完整"
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
                payment:this.payment,
                type:this.type,
                enddate:this.enddate,
                startdate:this.startdate
            }
             axiosPost("/creditCard/getPlan",data)
             .then(res=>{
                  if( res.data.code=="1001" && res.data.success==false){
                      this.$toast({
                          message:res.data.message
                        })
                     this.$router.push({
                         path:"/home/insertEsiCash",
                         query:{info:this.item}
                     })
                 } else if (res.data.success) {
                          storage.set('amount',this.amount);
                    let planList=res.data.data
                    // console.log(this.area)
                     this.$router.push({
                         path:"/home/creditHousekeeper/aisleHousekeeper/planList",
                         query:{
                             list:planList,
                             area:this.area,
                             item:this.item
                         }
                     })
                   }
                 else {
                      this.$toast({
                         message:res.data.message
                     })
                 }
             })
             .catch(err=>{
                //  console.log(err)
             })
        }
    },
    created () {
         this.item=this.$route.query.info 
          this.type=this.$route.query.type
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
                    //   border:2px solid #ccc;
                      color:#000;
                      padding:10px;
                      box-sizing: border-box;
                      margin-bottom: 15px;
                      background-image:url("http://pay.91dianji.com.cn/big2.png");
                      background-repeat: no-repeat;
                      height: 350px;
                      background-size:100%;
                      color:#fff;
                      padding:10px;
                       box-sizing: border-box;
                       >.top {
                           padding-top:13px;
                           padding-bottom: 150px;
                            height:20px !important;
                           .bankName {
                          display: flex;
                          justify-content: space-around;
                          margin-bottom: 15px;
                         }
                       }
                      .bottom {
                           padding-top:13px;
                            margin-bottom:35px;
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
                                          margin-bottom:10px;
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
                     .van-picker-column__item--selected{
                         color:#4B66AF;
                         font-weight: bold;
                     }
                     margin-bottom: 15px;
                     >p {
                     margin-bottom: 10px;
                   }
                   >.last {
                        width:100%;
                       height:60px;
                       line-height:53px;
                       border:2px solid #ccc;
                       background-color: #eee;
                       border-radius: 10px;
                       display:flex;
                       justify-content: space-around;
                        >.city {
                         border:none;
                         background-color: #eee;
                       }
                   }
                   >.input {
                       background:none;  
                        outline:none;  
                        border:0px;
                       width:100%;
                       height:60px;
                       border:2px solid #ccc;
                       background-color: #eee;
                       border-radius: 10px;
                       padding-left:20px;
                       box-sizing: border-box;
                       -webkit-appearance: none;
                       &:focus {
                           outline: none;
                       }
                   }
                    .van-picker__cancel{
                      color:#000;
                      font-size: 30px;
                    }
                    .van-picker__toolbar{
                        height: 40px;
                        line-height: 40px;
                        font-size: 30px;
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

<template>
    <div id="violation-inquiry">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>设置还款计划</span>
            <span></span>
        </header>
        <div class="container">
            <!-- <div class="bind">
               <ul >
                   <li >
                       <div class="top">
                          <div class="bankName">
                              <p >{{item.bankNick}}</p>
                               <p >{{item.payerName}}</p>
                              <p>*<span>{{item.cardNo.substr(item.cardNo.length-4)}}</span></p> 
                         
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
                               </li>
                           </ul>
                       </div>
                   </li>
               </ul>
           </div> -->
           <div class="makes">
               <img src="http://pay.91dianji.com.cn/make.png" alt="">
           </div>
           <div class="notice">
               <p>*在经济条件允许范围内，不要长期低于总额度30%，可以降低银行系统风控</p>
           </div>
           <div class="plan">
               <!-- <p><van-icon name="setting" />系统计划</p> -->
               <!-- <div class="content">
                  <div class="eara">
                      <p>请输入还款金额</p>
                      <input class="input" v-model="payment" type="number" placeholder="请输入还款金额">
                  </div>
                   <div class="eara">
                      <p>当前账户可用余额</p>
                      <input class="input" v-model="amount" type="number" :placeholder="place">
                  </div>


                   <div class="eara">
                      <p>请选择消费城市</p>
                      <div class="last">
                          
                          <p> <van-icon  size="20px" name="location"/></p>
                          <input class="city" readonly  v-model="area" type="text" placeholder="位置">
                          <p><span @click="showPick"><van-icon size="20px" name="arrow"/></span></p>
                      </div>
                        <van-popup v-model="citypopup" position="bottom" :overlay="false">
                           <van-picker v-show="showFlag" :columns="columns" @change="onChange"   @confirm="onConfirm"    @cancel="onCancel"  :default-index="0"   show-toolbar/>
                      </van-popup>  
                  </div>


                   <div class="eara">
                      <p>开始还款时间</p>
                      <div class="last">
                           <p> <van-icon  size="20px" name="todo-list-o"/></p>
                          <input class="city" readonly  v-model="startdate" type="text" >
                          <p><span @click="showStartpicker"><van-icon size="20px" name="arrow"/></span></p>
                      </div>
                     
                     <van-popup v-model="startpop" position="bottom" :overlay="false">
                             <van-datetime-picker
                            v-model="currentDate"
                            type="date"
                            @confirm="confirmStart"
                            v-show="showStart"
                            @cancel="cancelStart"
                            />
                       </van-popup>
                  </div>

                    
                   <div class="eara">
                      <p>还款结束时间</p>
                      <div class="last">
                           <p> <van-icon  size="20px" name="todo-list-o"/></p>
                          <input class="city" readonly  v-model="enddate" type="text" >
                          <p><span @click="showEndpicker"><van-icon size="20px" name="arrow"/></span></p>
                      </div>
                      
                         <van-popup v-model="endpopup" position="bottom" :overlay="false">
                            <van-datetime-picker
                            v-model="currentDate"
                            type="date"
                            @confirm="confirmEnd"
                            v-show="showEnd"
                            @cancel="cancelEnd"
                            />
                      </van-popup>

                  </div>
                  
               </div> -->
           </div>
           <div class="lists">
               <ul>
                   <li>
                       <p>还款金额</p>
                       <input  v-model="payment" type="number" placeholder="输入还款金额">
                       <p></p>
                   </li>
                   <li>
                       <p>预留金额</p>
                       <input  v-model="amount" type="number" :placeholder="place">
                       <p></p>
                   </li>
                    <li>
                       <p>选择消费城市</p>
                        <input class="city" readonly  v-model="area" type="text" placeholder="位置">
                        <p @click="showPick"><span @click="showPick"><van-icon size="24px" name="arrow"/></span></p>
                   </li>
                    <li>
                       <p>消费开始时间</p>
                        <input class="city" readonly     v-model="startdate" type="text" >
                        <p><span @click="showStartpicker"><van-icon size="24px" name="arrow"/></span></p>
                   </li>
                    <li>
                       <p>消费结束时间</p>
                        <input class="city" readonly  v-model="enddate" type="text" >
                         <p><span @click="showEndpicker"><van-icon size="24px" name="arrow"/></span></p>
                   </li>
               </ul>
           </div>
            <van-popup v-model="citypopup" position="bottom" :overlay="false">
                <van-picker v-show="showFlag" :columns="columns" @change="onChange"   @confirm="onConfirm"    @cancel="onCancel"  :default-index="0"   show-toolbar/>
            </van-popup>  

             <van-popup v-model="startpop" position="bottom" :overlay="false">
                    <van-datetime-picker
                v-model="currentDate"
                type="date"
                @confirm="confirmStart"
                v-show="showStart"
                @cancel="cancelStart"
                />
            </van-popup>

               <van-popup v-model="endpopup" position="bottom" :overlay="false">
                            <van-datetime-picker
                            v-model="currentDate"
                            type="date"
                            @confirm="confirmEnd"
                            v-show="showEnd"
                            @cancel="cancelEnd"
                            />
                      </van-popup>


            <div class="make">
                <van-button size="large" @click="makePlan"  type="info">制定计划</van-button>
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
           citypopup:false,
           startpop:false,
           endpopup:false,
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
            place:"",
            limit:""
        }
    },
    methods:{
        goBack() {
            this.$router.push({
                path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                query:{
                     info:this.item
                }
            })
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
                str>9?num=str:num="0"+str;
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
              this.startpop=true
         },
         showEndpicker(){
             this.showEnd=true
             this.endpopup=true
         },
         onConfirm(value){
             this.area=value.join("-")
             if(this.area=='北京市-'){
                this.area='北京市-北京市'
            }
            this.showFlag=false
         },
         showPick(){
             this.showFlag=true
             this.citypopup=true
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
                type:storage.get('type'),
                enddate:this.enddate,
                startdate:this.startdate,
                channel:storage.get('channel') 
            }
             axiosPost("/creditCard/getPlan",data)
             .then(res=>{
                  if(!res.data.success){
                      this.$toast({
                          message:res.data.message
                        })

                 } else {
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
             })
             .catch(err=>{
                //  console.log(err)
             })
        }
    },
    created () {
         this.item=this.$route.query.info 
        //   this.type=this.$route.query.type
           this.limit=localStorage.getItem("channel")
         if(this.limit=='1'){
             this.place="预留5%-2000"
         } else {
             this.place="预留金额5%起"
         }
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
           overflow-x: hidden;
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
                      background-image:url("http://pay.91dianji.com.cn/bgc5.jpg");
                      background-repeat: no-repeat;
                      height: 410px;
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
                            margin-top:40px;
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
                                          margin-bottom:26px;
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
          .makes{
              width:100%;
              >img {
                  width:100%;
              }
          }
          >.notice {
              background-color: #eee;
              line-height: 38px;
              padding:10px 0px;
          }
          >.plan {
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
          .lists{
              padding:15px;
              ul{
                  li{
                      display: flex;
                      align-items: center;
                      padding:20px 0px;
                      border-bottom: 1px solid #ccc;
                      font-size: 30px;
                      >p{
                          &:nth-of-type(1){
                              width:30%;
                          }
                          &:nth-of-type(2){
                              width:18%;
                              text-align: center;
                          }
                      }
                      input {
                          border:none;
                          flex: 1;

                          text-align: right;
                          background-color: #F2F2F4;
                      }
                      ::-webkit-input-placeholder{
                            background-color: #F2F2F4;
                        }
                  }
              }
          }
          >.make {
              margin-top:50px;
              padding:0 40px;
              .van-button--info {
                  background-color: #4B66AF;
              }
              .van-button--large{
                  height: 80px;
                  line-height: 80px;
                  border-radius: 10px;
              }
          }
       }
   }
</style>

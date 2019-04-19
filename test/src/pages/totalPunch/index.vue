<template>
    <div id="total-punch">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>打卡签到</span>
            <span></span>
        </header>
        <div class="container">
           <div class="task">
               <div class="punch">
                   <div class="left">
                       <p>我的金币</p>
                       <p>
                           <span></span>
                           <span>{{gold}}</span>
                       </p>
                   </div>
                   <div @click="sign" class="middle">
                      <p>{{isPunch?"已签到":"未签到"}}</p>
                   </div>
                   <div class="right">
                       <p>当月累计签到</p>
                           <span>{{signcount}}</span>
                           天
                   </div>
               </div>
               <p>每月累计签到5天即可获得金币</p>
               <div class="gold">
                   <ul>
                       <li>
                           <p>5天</p>
                           <span></span>
                       </li>
                        <li>
                           <p>10天</p>
                           <span></span>
                       </li>
                        <li>
                           <p>15天</p>
                           <span></span>
                       </li>
                        <li>
                           <p>20天</p>
                           <span></span>
                       </li>
                        <li>
                           <p>25天</p>
                           <span></span>
                       </li>
                        <li>
                           <p>全</p>
                           <span></span>
                       </li>
                   </ul>
               </div>
           </div>
            <div class="rule">
                   <ul>
                       <li>签到规则</li>
                       <li>兑换奖品库</li>
                       <li>我的任务</li>
                   </ul>
            </div>
             <div class="calendar">
                 <!-- 年份 -->
                 <div class="month">
                    <ul>
                        <!--点击会触发pickpre函数，重新刷新当前日期 @click(vue v-on:click缩写) -->
                        <li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
                        <li class="year-month" @click="pickYear(currentYear,currentMonth)">
                            <span class="choose-year">{{ currentYear }}</span>
                            <span class="choose-month">{{ currentMonth }}月</span>
                        </li>
                        <li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
                    </ul>
               </div>

                <!-- 星期 -->
            <ul class="weekdays">
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li style="color:red">六</li>
                <li style="color:red">日</li>
            </ul>

                <!-- 日期 -->
            <ul class="days">
                <!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
                <li v-for="(dayobject,index) in days" :key="index" >
                    <!--本月-->
                    <!--如果不是本月  改变类名加灰色-->

                    <span v-if="dayobject.day.getMonth()+1 != currentMonth" class="other-month">{{ dayobject.day.getDate() }}</span>

                    <!--如果是本月  还需要判断是不是这一天-->
                    <span v-else>
                        <!--今天  同年同月同日-->
                        <span v-if="dayobject.day.getFullYear() == new Date().getFullYear() && dayobject.day.getMonth() == new Date().getMonth() && dayobject.day.getDate() == new Date().getDate()"
                            class="active">{{ dayobject.day.getDate() }}</span>
                        <span v-else>{{ dayobject.day.getDate() }}</span>
                    </span>

                </li>
            </ul>
             </div>
        </div>
    </div>

</template>


<script>
import {axiosPost} from '@/lib/http'
export default {
    data() {
        return {
            currentDay: 1,
            currentMonth: 1,
            currentYear: 1970,
            currentWeek: 1,
            days: [],
            isPunch:false,
             signcount:0,//连续签到
             gold:0  //金币数量
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home')
        },
        sign(){
            let that =this
                 axiosPost("http://pay.91dianji.com.cn/api/customer/getSignDetail")
                 .then(function(res){
                    if(!res.data.success){
                        that.$toast({
                            message:res.data.message
                        })
                        return
                    }

                axiosPost("http://pay.91dianji.com.cn/api/customer/insertSign")
               .then(function(res){
                 if(!res.data.success){
                    that.$toast({
                    message:res.data.message
                })
               }
                that.isPunch=true
                that.$toast({
                    message:res.data.message
                   })
                 })
   
                 })
            
        },
         searchPunch(){
             let that = this
           axiosPost("http://pay.91dianji.com.cn/api/customer/getSignDetail")
           .then(function(res){ 
               console.log(res);
               
                if(!res.data.success){
                    // that.isPunch=true
                    that.$toast({
                        message:res.data.message
                    })
                    return
                }
                 that.signcount=res.data.data.signcount
                 that.gold=res.data.data.gold
           })
         },
         initData: function (cur) {
                    let that = this;
                    let leftcount = 0; //存放剩余数量
                    let date;
                    if (cur) {
                        date = new Date(cur);
                    } else {
                        let now = new Date();
                        let d = new Date(that.formatDate(now.getFullYear(), now.getMonth(), 1));
                        d.setDate(35);
                        date = new Date(that.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
                    }
                    that.currentDay = date.getDate();
                    that.currentYear = date.getFullYear();
                    that.currentMonth = date.getMonth() + 1;
                    that.currentWeek = date.getDay(); // 1...6,0
                    if (that.currentWeek == 0) {
                        that.currentWeek = 7;
                    }
                    let str = that.formatDate(that.currentYear, that.currentMonth, that.currentDay);
                    that.days.length = 0;
                    // 今天是周日，放在第一行第7个位置，前面6个
                    //初始化本周
                    for (let i = that.currentWeek - 1; i >= 0; i--) {
                        let d = new Date(str);
                        d.setDate(d.getDate() - i);
                        let dayobject = {}; //用一个对象包装Date对象  以便为以后预定功能添加属性
                        dayobject.day = d;
                        that.days.push(dayobject); //将日期放入data 中的days数组 供页面渲染使用
                    }
                    //其他周
                    for (let i = 1; i <= 35 - that.currentWeek; i++) {
                        let d = new Date(str);
                        d.setDate(d.getDate() + i);
                        let dayobject = {};
                        dayobject.day = d;
                        that.days.push(dayobject);
                    }

                },
                pickPre: function (year, month) {
                    let that = this;
                    // setDate(0); 上月最后一天
                    // setDate(-1); 上月倒数第二天
                    // setDate(dx) 参数dx为 上月最后一天的前后dx天
                    let d = new Date(that.formatDate(year, month, 1));
                    d.setDate(0);
                    that.initData(that.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
                },
                pickNext: function (year, month) {
                    let that = this;
                    let d = new Date(that.formatDate(year, month, 1));
                    d.setDate(35);
                    that.initData(that.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
                },
                pickYear: function (year, month) {
                    alert(year + "," + month);
                },
                // 返回 类似 2016-01-02 格式的字符串
                formatDate: function (year, month, day) {
                    let y = year;
                    let m = month;
                    if (m < 10) m = "0" + m;
                    let d = day;
                    if (d < 10) d = "0" + d;
                    return y + "-" + m + "-" + d
                },
         },
      
    created () {
         let that = this
         that.initData(null)
          this.searchPunch()
    }
}
</script>

<style lang="less">
   #total-punch {
       >header {
           background-color: #4B66AF;
           width:100%;
           height: 86px;
           line-height:86px;
           padding-top:10px;
           z-index:999;
           font-size:28px;
           color:#fff;
           display: flex;
           position: fixed;
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
           >.task{
               background-color: #4B66AF;
               color:#FFF1F6;
               padding:20px 30px;
               >.punch {
                   display: flex;
                   justify-content: space-between;
                   >.middle {
                       width:200px;
                       height: 200px;
                       background-color: #fff;
                       border:10px solid #fff;
                       border-radius: 50%;
                       color:#000;
                       >p {
                           text-align: center;
                           line-height: 200px;
                           font-size: 40px;
                       }
                   }
                   >.left,
                   .right {
                       padding-top:50px;
                   }
                   >.left {
                       >p {
                           &:nth-of-type(1){
                               padding-bottom:20px;
                           }
                           &:nth-of-type(2){
                               text-align: center;
                               >span {
                                   &:nth-of-type(1){
                                       display: inline-block;
                                       width:40px;
                                       height:40px;
                                       background-color:#FCDD6D; 
                                       border-radius: 50%;
                                       margin-right:10px;
                                   }
                               }
                           }
                       }
                       
                   }
                   >.right {
                       text-align: center;
                      >p{
                           padding-bottom:10px;
                      }
                      >span {
                          display:inline-block;
                          width:40px;
                          height: 40px;
                          line-height: 40px;
                          color:#7E1113;
                          background-color: #fff;
                          margin-top:10px;
                      }
                   }
               }
               >p {
                   padding:30px 0px;
               }
               >.gold{
                   >ul{
                       display: flex;
                       >li{
                           width:15%;
                           background-color: #fff;
                           color:#8E3E3F;
                           border-radius:30px;
                           text-align: center;
                           margin-right:5%;
                           >p {
                               margin-top:20px;
                               margin-bottom:10px;
                           }
                           >span {
                               display: inline-block;
                               width:30px;
                               height: 30px;
                               border-radius: 50%;
                               background-color: #FFDC6D;
                               margin-top:10px;
                               margin-bottom:10px;
                           }
                       }
                   }
               }
               
           }
           >.rule{
               background-color: #4B66AF;
               color:#fff;
               >ul{
                   display: flex;
                   padding:20px 0px;
                   >li {
                            width:33%;
                            border-right: 1px solid #fff;
                            text-align: center;
                       &:nth-of-type(3){
                           border:none;
                       }
                   }
               }
           }
           >.calendar{
               margin-top:30px;
                width: 98%;
                border: 2px solid #A4A7B0;
                margin-left: 0.5%;
                >.month {
                    width: 92%;
                    height: 48px;
                    border: 2px solid #FFFFFF;
                    margin-left: 3%;
                    margin-top: 20px;
                    >ul {
                         margin: 0;
                        padding: 0;
                        display: flex;
                        margin-top: 11px;
                        justify-content: space-between;
                        >li {
                            color: #999;
                            font-size: 20px;
                            text-transform: uppercase;
                            letter-spacing: 3px;
                            list-style: none;
                            &.arrow {
                            width: 3%;
                            height: 25px;
                            }
                            &.year-month {
                            flex-direction: column;
                            align-items: center;
                            justify-content: space-around;
                            > .choose-year {
                                padding: 0 20px;
                                font-size: 16px;
                                font-weight: 200;
                            }
                            >.choose-month {
                                text-align: center;
                                font-size: 16px;
                                font-weight: 200;
                            }
                           }
                        }
                    }
                  }
                > .weekdays {
                    margin: 0;
                    color: #FFFFFF;
                    background: #A4A7B0;
                    width: 96.6%;
                    margin-top: 26px;
                    height: 34px;
                    line-height: 34px;
                    margin-left: 2.2%;
                    >li {
                         display: inline-block;
                        text-align: center;
                        color: #11616f;
                        font-size: 14px;
                        font-weight: 100;
                        width: 13.3%;
                    }
                }
                > .days {
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                     margin-left: 2.2%;
                      width: 96.6%;
                    //   margin-right: 2.2%;
                    >li {
                         list-style-type: none;
                        display: inline-block;
                        width: 12.9%;
                        text-align: center;
                        padding-bottom:10px;
                        padding-top: 15px;
                        font-size: 26px;
                        // color: rgb(14, 220, 235);
                        color:#000;
                        font-weight: 200;
                        >span {
                            >span {
                                height: 29.5px;
                                width: 27px;
                                line-height: 29.5px;
                                display: inline-block;
                                &:active {
                                    background-color: red;
                                }
                            }
                        }
                    }
                }
           }
       }
   }
</style>

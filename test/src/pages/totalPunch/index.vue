<!--
 * @Description: In User Settings Edit
 * @Author: Giovanni
 * @Date: 2019-08-14
 * @LastEditTime: 2019-08-15 18:57:38
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="total-punch">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="#ffffff" size="20px" name="arrow-left"/></div>
            <div class="top-title center">任务中心</div>
            <!-- <div class="right-icon center"><van-icon name="gold-coin" size="24px" color="#FCDD6D"/>245300</div> -->
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
            <!-- <div class="avator-signin">
                <div class="avator"><img src="http://pay.91dianji.com.cn/wx.png" alt=""></div>
                <div class="signin">
                    <div class="normal center">签到</div>
                </div>
            </div> -->
            <!-- <div class="desc">
                <div class="desc-title">每月累计签到5天即可获得金币</div>
                <div class="desc-list">
                    <div class="coin">
                        <div class="center">5天</div>
                        <div class="center">5</div>
                    </div>
                    <div class="coin">
                        <div class="center">10天</div>
                        <div class="center">5</div>
                    </div>
                    <div class="coin">
                        <div class="center">15天</div>
                        <div class="center">5</div>
                    </div>
                    <div class="coin">
                        <div class="center">25天</div>
                        <div class="center">5</div>
                    </div>
                    <div class="coin">
                        <div class="center">25天</div>
                        <div class="center">5</div>
                    </div>
                </div>
            </div>
            <div class="rule-prize-task">
                <div class="center">签到规则</div>
                <div class="center">兑换奖品库</div>
                <div class="center">我的任务</div>
            </div> -->
            <!-- <div class="calendar">
                <div class="year-month center">{{year}}年{{month}}月</div>
                <div class="days-content">
                    <div class="center" v-for="(item,index) in DateArray" :key="index">{{item}}</div>
                </div>
                <div class="task">
                    <div class="task-title center">今日任务</div>
                    <div class="task-share center"></div>
                </div>
                <div class="bottom"></div>
            </div> -->
        </div>
        <!-- <div class="task-list">
            <div class="start-center">
                <van-icon name="card" color="#ECC648" size="28px"/>
                <span>任务记录</span>
            </div>
            <span>210</span>
        </div>
        <div class="record-list">
            <div class="task-record">
                <div>
                    <div class="start-center">璀璨钻石任务(第一次)</div>
                    <div class="start-center">2019-08-15 09:11:43</div>
                </div>
                <div>+30</div>
            </div>
            <div class="task-record">
                <div>
                    <div class="start-center">璀璨钻石任务(第一次)</div>
                    <div class="start-center">2019-08-15 09:11:43</div>
                </div>
                <div>+30</div>
            </div>
            <div class="task-record">
                <div>
                    <div class="start-center">璀璨钻石任务(第一次)</div>
                    <div class="start-center">2019-08-15 09:11:43</div>
                </div>
                <div>+30</div>
            </div>
            <div class="task-record">
                <div>
                    <div class="start-center">璀璨钻石任务(第一次)</div>
                    <div class="start-center">2019-08-15 09:11:43</div>
                </div>
                <div>+30</div>
            </div>
        </div> -->
        <!-- 签到规则 -->
        <div class="sign-rule">
            <div></div>
        </div>
    </div>
</template>
<script>
import {axiosPost} from '@/lib/http'
export default {
    data() {
        return {
            year: '',
            month: '',
            DateArray: [],
             days: [],
            isPunch:false,
             signcount:0,//连续签到
             gold:0 , //金币数量
            currentTime:""
        }
    },
    methods:{
        handleReturnHome() {
            this.$router.go(-1);
        },
         sign(){
            //  console.log("签到打卡")
            let that =this
            axiosPost("/customer/insertSign")
           .then(function(res){
            //    console.log(res,"每日签到")
            if(!res.data.success){
                    that.$toast({
                    message:res.data.message
             })
        } else {
                that.isPunch=true
                that.$toast({
                    message:res.data.message
                   })
                axiosPost("/customer/getSignDetail")
                .then(function(res){
                    that.signcount=res.data.data.signcount
                    that.gold=res.data.data.gold
                })
            }
          })   
        },
         searchPunch(){
             let that = this
           axiosPost("/customer/getSignDetail")
           .then(function(res){
            //    console.log(res,"created中的签到详情") 
                if(!res.data.success){
                    that.$toast({
                        message:res.data.message
                    })
                    return
                } else {
                     that.signcount=res.data.data.signcount
                     that.gold=res.data.data.gold
                     that.days=res.data.data.list
                     that.days.forEach(element => {
                         if(element.signtime==that.currentTime){
                             that.isPunch=true
                         }
                     })
                }
           })
         },



        // 获取当前月份天数
        handleCurrentTime(){
            let date = new Date();
            this.year = date.getFullYear();
            this.month = date.getMonth() + 1;
            let days = new Date(this.year,this.month,0).getDate();
            // console.log('天数',days);
            let arr = [];
            for(var i = 1; i <= days; i++){
                if(i < 10){
                    i = 0 + i;
                    arr.push(i);
                }else{
                    arr.push(i);
                }
            }
            this.DateArray = arr;
        }
    },
    created () {
          this.handleCurrentTime();
           this.searchPunch()
    }
}
</script>
<style lang="less">
#total-punch {
    padding-top: 86px;
    .header-top{
        color: #fff;
    }
    .container {
        >.task{
               background-color: #4b66af;
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
        background: #4b66af;
        .avator-signin{
            width: 85%;
            height: 150px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .avator{
                width: 120px;
                height: 120px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .signin{
                .normal{
                    width: 120px;
                    height: 60px;
                    color: #fff; 
                    background: url('http://pay.91dianji.com.cn/signIn.png');
                    background-size: 100% 100%;
                    font-size: 32px;
                }
            }
        }
        .desc{
            width: 85%;
            height: auto;
            margin: auto;
            .desc-title{
                padding: 30px 0px;
                color: #fff;
                font-size: 26px;
            }
            .desc-list{
                width: 100%;
                height: 120px;
                display: flex;
                justify-content: space-between;
                .coin{
                    width: 85px;
                    height: 100%;
                    background: #fff;
                    border-radius: 40px;
                    font-size: 26px;
                    >div{
                        width: 100%;
                        height: 50%;
                    }
                }
            }
        }
        .rule-prize-task{
            width: 100%;
            height: 60px;
            margin: 20px auto auto auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 26px;
            color: #fff;
            >div{
                width: calc(100% / 3);
            }
            >div:nth-child(1),div:nth-child(2){
                border-right: solid 1px #fff;
            }
        }
        .calendar{
            width: 90%;
            height: auto;
            margin: 20px auto auto auto;
            background: #fff;
            box-shadow: 0px 0px 2px 2px #f2f2f2;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            .year-month{
                width: 95%;
                height: 80px;
                margin: auto;
                font-size: 30px;
                font-weight: 700;
            }
            .days-content{
                width: 95%;
                margin: auto;
                display: flex;
                flex-wrap: wrap;
                padding-bottom: 50px;
                border-bottom: 10px solid rgba(235,232,232,1);
                >div{
                    width: calc(100% / 7);
                    height: 60px;
                    font-size: 28px;
                    font-weight: 700;
                }
            }
            .task{
                width: 100%;
                height: auto;
                background:rgba(254,254,254,1);
                background: #DBE4FC;
                margin-top: 50px;
                padding-bottom: 50px;
                .task-title{
                    width: 100%;
                    height: 100px;
                    color: #C63232;
                    font-weight: 700;
                    font-size: 48px;
                }
                .task-share{
                    width: 210px;
                    height: 210px;
                    background:linear-gradient(180deg,rgba(237,128,128,1) 0%,rgba(173,21,51,1) 100%);
                    box-shadow:0px 3px 4px 0px rgba(234,156,156,0.5);
                    border-radius:8px;
                    opacity:0.96;
                    margin: auto;
                }
            }
            .bottom{
                width: 100%;
                height: 46px;
                background:rgba(216,216,216,1);
                opacity:0.17;
                border:1px solid rgba(151,151,151,1);
                margin-top: 80px;
            }
        }
    }
    .task-list{
        width: 100%;
        background: #4b66af;  
        height: 80px;
        box-sizing: border-box;
        padding: 0px 5%;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 30px;
        >div{
            span:last-child{
                margin-left: 10px;
            }
        }
    }
    .record-list{
        .task-record{
            width: 100%;
            height: 120px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 0px 5%;
            border-bottom: 1px solid rgba(235,232,232,1);
            >div:nth-child(1){
                height: 100%;
                >div{
                    height: 50%;
                    &:nth-of-type(1){
                        font-weight: 700;
                        font-size: 32px;
                    }
                    &:nth-of-type(2){
                        color: #060606;
                        font-size: 26px;
                    }
                }
            }
            >div:nth-child(2){
                color: #A71818;
                font-size: 48px;
            }
        }
    }
    // .sign-rule{
        
    // }
}
</style>

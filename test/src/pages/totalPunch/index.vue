<!--
 * @Description: In User Settings Edit
 * @Author: Giovanni
 * @Date: 2019-08-14
 * @LastEditTime: 2019-08-26 23:15:00
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="total-punch">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="#ffffff" size="20px" name="arrow-left"/></div>
            <div class="top-title center">任务中心</div>
            <!-- <div class="right-icon center"><van-icon name="gold-coin" size="24px" color="#FCDD6D"/>245300</div> -->
            <div class="top-title center" @click="rule=true">规则说明</div>

        </header>
        <div class="container">
            <div class="cover" v-show="rule">
                <p class="close" @click="rule=false"><van-icon name="close" color="#fff" size="36px" /></p>
                <div class="rule">
                    <p>领取推广活动任务</p>
                    <div>
                       直推一个黄金会员，开启7天推广任务红包奖励，上午分享链接领取5元红包，下午分享链接领取10元红包
                    </div>
                    <div>
                       直推一个钻石会员，开启7天推广任务红包奖励，上午分享链接领取15元红包，下午分享链接领取25元红包
                    </div>
                    <div>
                        任务说明：分享任务页面链接至微信群或朋友圈
                    </div>
                </div>
            </div>
            <div class="avator-signin">
                <div class="avator"><img :src="headimg" alt=""></div>
                <div class="signin">
                    <div class="normal center" :id="Sign=='签到'?'sign':''" @click="handleSign">{{Sign}}</div>
                </div>
            </div>
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
            </div> -->
            <div class="rule-prize-task">
                <div class="center" @click="getMore">签到规则</div>
                <div class="center" @click="getMore">兑换奖品库</div>
                <div class="center" @click="getMore">我的任务</div>
            </div>
            <div class="calendar">
                <div class="year-month center">{{year}}年{{month}}月</div>
                <div class="days-content">
                    <div class="center" v-for="(item,index) in DateArray" :key="index" :class="item.signed == 'true' ? 'active' : ''">{{item.date}}</div>
                </div>
                <div class="task">
                    <div class="task-title center">今日任务</div>
                     <div @click="getTask" class="task-share center">
                        <img src="http://pay.91dianji.com.cn/renwu @3x.png" alt="" srcset="">
                    </div>
                    <div class="dollars">
                        <img src="http://pay.91dianji.com.cn/dollars.png" alt="" srcset="">
                    </div>
                </div>
                <div class="bottom"></div>
            </div>
        </div>
        <!-- <div class="task-list">
            <div class="start-center">
                <van-icon name="http://pay.91dianji.com.cn/jiluhb.png" color="#ECC648" size="24px"/>
                <span>任务记录</span>
            </div>
            <span>{{sum}}</span>
        </div>
        <div class="record-list">
            <div class="task-record" v-for="(item,index) in taskList" :key="index" v-show="taskList.length != '0'">
                <div>
                    <div class="start-center">{{item.title}}</div>
                    <div class="start-center">{{item.createddatetime}}</div>
                </div>
                <div>+{{item.amount}}</div>
            </div>
            <div class="none center" v-if="taskList.length == '0'">暂无任务记录</div>
            
        </div>  -->
        <!-- 签到规则 -->
        <div class="sign-rule">
            <div></div>
        </div>
        <!-- <games></games> -->
        <!-- <gameElsb></gameElsb> -->
    </div>
</template>
<script>
import {CommonPost} from '@/lib/http'
import games from '@/components/games.vue'
import {axiosPost} from '@/lib/http'

import gameElsb from '@/components/gameElsb.vue'


export default {
    components: {
        games,
        gameElsb,
    },
    data() {
        return {
            Sign: '签到',
            year: '',
            month: '',
            date: '',
            DateArray: [],
            days: [],
            current: '',
            Signed: [],
            headimg: '',
            taskList: [],
            sum: 0,
            task:"",
            rule:false
        }
    },
    methods:{
        handleReturnHome() {
            this.$router.go(-1);
        },
        showrule(){

        },
        getMore(){
            this.$toast("敬请期待")
        },
        //查询任务
        getTask(){
            axiosPost("/activity/getAmount")
            .then(res=>{
                if(!res.data.success) {
                    this.$toast(res.data.message)
                } else {
                    if(res.data.code=="0"){
                        this.$router.push({
                            path:"/home/totalPunch/wallet",
                            query:{
                                amount:res.data.data.amount
                            }
                        })

                    } else {


                    let type=res.data.data.type
                    if(type=='1'){
                        this.task="炫彩黄金任务"
                    } else if(type=='2'){
                        this.task="璀璨钻石任务"
                    }
                        this.$router.push({
                            path:"/home/totalPunch/tasked",
                            query:{
                                task:res.data.message,
                                amount:res.data.data.amount,
                                info:this.task                                
                            }
                        })
                    }

                }
            })

        },
        // 查询签到详情
        handleSignDetail(){
            CommonPost('/customer/getSignDetail').then(res =>{
                let s = (res.data.data.list).find(i =>i.signtime == this.current);
                (res.data.data.list).forEach((item,index) =>{
                    (this.DateArray).forEach((element,key) =>{
                        if(element.date == (item.signtime).substr(8,2)){
                            element.signed = 'true';
                        }
                    })
                    
                })
                if(typeof s == 'undefined'){
                    this.Sign = '签到'
                }else{
                    this.Sign = '已签到'
                }
            }).catch(res =>{
                // console.log('签到详情失败',res);
            })
        },
        // 签到
        handleSign(){
            if(this.Sign == '签到'){
                CommonPost('/customer/insertSign').then(res =>{
                    this.Sign = '已签到';
                    this.$toast('签到成功');
                    this.handleSignDetail()
                }).catch(res =>{
                    // console.log('签到失败',res);
                })
            }else{
                this.$toast('今日已签到');
            }
            
        },
        // 获取当前月份天数
        handleCurrentTime(){
            let date = new Date();
            this.year = date.getFullYear();
            date.getMonth() + 1 < 10 ? this.month = '0' + parseInt(date.getMonth() + 1) : this.month = parseInt(date.getMonth() + 1);
            date.getDate() < 10 ? this.date = '0' + date.getDate() : this.date = date.getDate(); 
            this.current =  this.year + '-' + this.month + '-' + this.date;
            let days = new Date(this.year,this.month,0).getDate();
            let arr = [];
            let item = '';
            for(var i = 1; i <= days; i++){
                if(i < 10){
                    item = '{"date":"' + '0' + i + '","signed":"false"}';
                    arr.push(JSON.parse(item));
                }else{
                    item = '{"date":"' + i + '","signed":"false"}';
                    arr.push(JSON.parse(item));
                }
            }
            this.DateArray = arr;
            // console.log(arr);
        },
        // 查询任务记录
        handleTaskList(){
            CommonPost('/activity/getActivityList').then(res =>{
                this.taskList = res.data.data.activityList;
                this.sum = res.data.data.sum;
            }).catch(res =>{
                // console.log('查询失败',res);
            })
        }
        
    },
    created () {
        this.handleSignDetail();
        this.handleCurrentTime();
        this.handleTaskList();
        this.headimg = this.$store.state.wechat.headimg;
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
        background-color: #ccc;
        .cover{
            position: fixed;
            top:0;
            right:0;
            bottom:0;
            left:0;
            background-color: rgba(0, 0, 0, .2);
            .close{
                font-size: 34px;
                margin-top:20%;
                text-align: center;
            }
            .rule{
                width:80%;
                height: 500px;
                background-color: #fff;
                margin-left:8%;
                margin-top:10%;
                padding:20px;
                border-radius: 15px;
                p{
                    padding-bottom: 20px;
                    text-align: center;
                    font-size: 32px;
                    color:royalblue;
                }
                div{
                    font-size: 30px;
                    line-height: 34px;
                    margin-bottom: 40px;
                    &:nth-of-type(3){
                        font-weight: bold;
                    }   
                }
            }
        }
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
                #sign {
                     animation:  tosign .8s linear infinite;
                     -webkit-animation:  tosign .8s linear infinite;
                 }
                 @keyframes tosign {
                        0%{
                           margin-top:0;
                           transform: scale(0.8);
                        }
                        50%{
                           margin-top:40px;
                           transform: scale(1);
                        }
                        100%{
                           margin-top:0;
                           transform: scale(0.8);
                        }
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
                     margin:3px;
                    box-sizing: border-box;
                }
                .active{
                    background: #ed8080;
                    color: #fff;
                    border-radius: 15px;
                    margin:3px;
                }
            }
            .task{
                width: 100%;
                height: auto;
                background:rgba(254,254,254,1);
                background: #DBE4FC;
                margin-top: 50px;
                padding-bottom: 50px;
                position: relative;
                .dollars {
                    width:120px;
                    height:120px;
                    position: absolute;
                    top:30%;
                    left:45%;
                     animation:  dollars .8s linear infinite;
                    -webkit-animation:  dollars .8s linear infinite;
                    >img {
                        width:100%;
                        animation:  self .8s linear infinite;
                       -webkit-animation:  self .8s linear infinite;




                      @keyframes self {
                        0%{
                             transform: scale(0.6);
                        }
                        50%{
                            transform: scale(1.5);
                        }
                        100%{
                             transform: scale(0.6);
                        }
                    }



                    }
                     @keyframes dollars {
                        0%{
                            top:45%;
                        }
                        50%{
                            top:-5%;
                        }
                        100%{
                             top:45%;
                        }
                    }
                }
                .task-title{
                    margin-bottom:20px;
                    width: 100%;
                    height: 100px;
                    color: #C63232;
                    font-weight: 700;
                    font-size: 48px;
                    margin-bottom: 10px;
                    animation:  renwu .8s linear infinite;
                    -webkit-animation:  renwu .8s linear infinite;
                }

                 @keyframes renwu {
                        0%{
                            opacity: 1;
                        }
                        50%{
                            opacity: 0;
                        }
                        100%{
                             opacity: 1;
                        }
                    }


                .task-share{
                    width: 230px;
                    height:230px;
                    background:linear-gradient(180deg,rgba(237,128,128,1) 0%,rgba(173,21,51,1) 100%);
                    box-shadow:0px 3px 4px 0px rgba(234,156,156,0.5);
                    border-radius:8px;
                    opacity:0.96;
                    margin: auto;
                    img {
                        width:100%;
                    }
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
        .none{
            width: 100%;
            height: 100px;
        }
    }
    // .sign-rule{
        
    // }
}
</style>

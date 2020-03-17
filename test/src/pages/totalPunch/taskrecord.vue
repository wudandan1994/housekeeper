<template>
    <div class="taskrecord">
          <header>
            <span @click="goBack"><van-icon size="20px" name="arrow-left"/></span>
            <span>任务记录</span>
            <span></span>
          </header>

        <div class="container">
          <div class="task-list">
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
            
        </div> 
        </div>


    </div>
</template>

<script>
import {CommonPost} from '@/lib/http'

export default {

    data () {
        return {
            taskList:[],
            sum: 0,
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
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
        this.handleTaskList()
    },
    
}
</script>


<style lang="less">
      .taskrecord {
           >header {
           background: #35447A;
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

           .task-list{
               margin-top:20px;
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

       }

      }
</style>
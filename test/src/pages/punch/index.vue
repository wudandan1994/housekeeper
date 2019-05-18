<template>
    <div id="punch">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>计划列表</span>
            <span></span>
        </header>
        <div class="container">
           <div class="ranking">
               <!-- <van-tabs
                padding-top="10px"
                title-active-color="#807957"
                color="#777237"
               >
                    <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
                        内容 {{ index }}
                    </van-tab>
                </van-tabs> -->
                <van-tabs  @click="onClick"  v-model="active"  title-active-color="#4B66AF" color="#4B66AF" >
                    <van-tab title="全部">
                         <div class="waiting">
                            <ul>
                                <li @click="goPlanDetail" v-for="(item,index) in list" :key="index">
                                    <div class="top">
                                        <p>0551</p>
                                        <p>江</p>
                                        <p>7天后到期</p>
                                        <p>本期账单：￥<span>{{item.realamount}}</span></p>
                                    </div>
                                    <div class="middle">
                                        <div class="m-left">
                                            <p>招商银行</p>
                                            <p>等待执行：2019/5/17:14:33:37</p>
                                        </div>
                                        <div class="m-right">
                                            <p>执行状态</p>
                                            <van-button type="default" round>停止计划</van-button>
                                            
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <ul>
                                            <li>
                                                <p>0</p>
                                                <p>已消费金额</p>
                                            </li>
                                              <li>
                                                <p>0</p>
                                                <p>还款金额</p>
                                            </li>
                                              <li>
                                                <p>￥30.37</p>
                                                <p>手续费</p>
                                            </li>
                                              <li>
                                                <p>6</p>
                                                <p>还款笔数</p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </van-tab>
                    <van-tab title="等待执行">
                       
                    </van-tab>
                    <van-tab title="执行中">333333</van-tab>
                    <van-tab title="失败">内容 4</van-tab>
                     <van-tab title="成功">内容 5</van-tab>
                      <van-tab title="取消">内容 6</van-tab>
                </van-tabs>
           </div>
           
        </div>
    </div>

</template>

<script>
import { axiosPost } from '../../lib/http'
export default {
    data() {
        return {
            active:0,
            bindId:"",
            list:[]
        }
    },
    methods:{
        goBack(){
            this.$router.push('/home/creditHousekeeper/aisleHousekeeper')
        },
        goPlanDetail(){
            this.$router.push("/home/punch/planDetail")
        },
        onClick(index, title){
             this.$toast(title);
        },
        //获取主还款
        getMainPlan(){
            //  console.log(this.bandId)
            let data={
                bindId:this.bindId,
                page:"1",
                pageSize:"100",
                state:""
            }
            axiosPost("/creditCard/getMainPlan",data)
            .then(res=>{
                console.log(res)
                if(!res.data.success){
                    this.$toast({
                        message:res.data.message
                    })
                } else {
                    this.list=res.data.data.data
                    console.log(this.list)
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },
    created () {
        this.bindId=  this.$route.query.bindId 
        this.getMainPlan()
    },
    mounted () {

    }

}
</script>

<style lang="less">
   #punch {
       >header {
          background-color: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           font-size:28px;
           color:#fff;
           display: flex;
           z-index:999;
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
           >.ranking {
               .waiting {
                   >ul{
                       padding:15px;
                       >li {
                          border:2px solid #ccc;
                          background-color:#4AA3E2;
                          color:#fff;
                          border-radius: 10px;
                          >.top {
                              background-color: rgba(0, 0, 0, .5);
                              padding:20px 5px;
                              display: flex;
                              justify-content: space-around;
                          }
                          >.middle{
                               display: flex;
                              justify-content: space-around;
                              margin-top:20px;
                              >.m-left {
                                  >p {
                                      &:nth-of-type(1){
                                          margin-bottom: 15px;
                                      }
                                      &:nth-of-type(2){
                                          background-color: rgba(0, 0, 0, .2);
                                          padding:15px;
                                          border-radius:20px;
                                      }
                                  }
                              }
                              >.m-right{
                                  >p {
                                      &:nth-of-type(1){
                                          padding-bottom: 10px;
                                      }
                                  }
                                  .van-button--default{
                                      color:#000;
                                      background-color: #fff;

                                  }
                              }
                          }
                          >.bottom {
                              margin-top:30px;
                              >ul{
                                  display: flex;
                                  padding:20px 5px;
                                  background-color: rgba(0, 0, 0, .1);
                                  >li {
                                      width:25%;
                                      text-align: center;
                                      >p {
                                          &:nth-of-type(1){
                                              padding-bottom: 10px;
                                          }
                                      }
                                  }
                              }
                          }
                       }
                   }
               }
              
             .van-tabs .van-tab__pane {
                  margin-top:40px;
             }

           }



          
       }
   }
</style>

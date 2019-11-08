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
                                <li @click="goPlanDetail(item.id,item.bankNick,item.cardNo,item.payerName)" v-for="(item,index) in list" :key="index">
                                    <div class="top">
                                        <!-- <p>{{item.cardNo.substr(item.cardNo.length-4)}}</p> -->
                                        <p>{{item.bankNick}}</p>
                                        <p>{{item.payerName}}</p>
                                        <p>本期账单：￥<span>{{item.realamount}}</span></p>
                                    </div>
                                    <div class="middle">
                                        <div class="m-left">
                                          
                                             <div   class="sign-out">
                                                <van-button v-show="item.state=='0' || item.state=='3'" @click.stop="stopPlan(item.id)" type="default" round>停止计划</van-button>
                                                <van-button v-show="item.state=='1' || item.state=='2'" @click.stop="stopPlan(item.id)" type="disabled" round>停止计划</van-button>

                                                <!-- <van-button  @click.stop="stopPlan(item.id)" type="default" round>停止计划</van-button> -->

                                            </div> 
                                            <!-- <p v-show="item.state=='4'"> <span>{{item.remark}}</span></p> -->
                                        </div>
                                        <div class="m-right">
                                            <!-- <p>{{item.state}}</p> -->
                                            <!-- <p v-if="item.state=='0'">待执行</p>
                                            <p v-else-if="item.state=='1'">已成功</p>
                                            <p v-else-if="item.state=='2'">已取消</p>
                                            <p v-else-if="item.state=='3'">进行中</p> -->
                                            <p v-if="item.state=='0'"><van-icon size="120px" name="http://pay.91dianji.com.cn/waiting.png"/></p>
                                             <p v-else-if="item.state=='1'"><van-icon size="120px" name="http://pay.91dianji.com.cn/chenggong.png"/></p>
                                            <p v-else-if="item.state=='2'"><van-icon size="120px" name="http://pay.91dianji.com.cn/quxiao.png"/></p>
                                            <p v-else-if="item.state=='3'"><van-icon size="120px" name="http://pay.91dianji.com.cn/zhixing.png"/></p>
                                            <p v-show="item.state=='4' || item.state=='5' "><span>{{item.remark}}</span>&nbsp; <span v-if="item.state=='4'"><van-icon size="120px" name="http://pay.91dianji.com.cn/shibai.png"/></span></p>    

                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <ul>
                                            <li>
                                                <p>{{item.poundage}}</p>
                                                <p>手续费</p>
                                            </li>
                                              <li>
                                                <p>{{item.repaycount}}</p>
                                                <p>还款笔数</p>
                                            </li>
                                            <li>
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </van-tab>
                    <van-tab title="等待执行">
                         <div class="waiting">
                            <ul>
                                <li v-show="item.state=='0'" @click="goPlanDetail(item.id,item.bankNick,item.cardNo,item.payerName)" v-for="(item,index) in planList" :key="index">
                                    <div class="top">
                                        <!-- <p>{{item.cardNo.substr(item.cardNo.length-4)}}</p> -->
                                          <p>{{item.bankNick}}</p>
                                        <p>{{item.payerName}}</p>
                                        <p>本期账单：￥<span>{{item.realamount}}</span></p>
                                    </div>
                                    <div class="middle">
                                        <div class="m-left">
                                          
                                            <!-- <p>等待执行：2019/5/17:14:33:37</p> -->
                                        </div>
                                        <div class="m-right">
                                            <p><van-icon size="100px" name="http://pay.91dianji.com.cn/waiting.png"/></p>
                                            
                                            <van-button @click.stop="stopPlan(item.id)" type="default" round>停止计划</van-button>
                                            
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <ul>
                                            <li>
                                                <p>{{item.poundage}}</p>
                                                <p>手续费</p>
                                            </li>
                                              <li>
                                                <p>{{item.repaycount}}</p>
                                                <p>还款笔数</p>
                                            </li>
                                            <li>
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </van-tab>
                    <van-tab title="已成功">
                         <div class="waiting">
                            <ul>
                                <li v-show="item.state=='1'" @click="goPlanDetail(item.id,item.bankNick,item.cardNo,item.payerName)" v-for="(item,index) in planList" :key="index">
                                    <div class="top">
                                        <!-- <p>{{item.cardNo.substr(item.cardNo.length-4)}}</p> -->
                                         <p>{{item.bankNick}}</p>
                                        <p>{{item.payerName}}</p>
                                        <p>本期账单：￥<span>{{item.realamount}}</span></p>
                                    </div>
                                    <div class="middle">
                                        <div class="m-left">
                                           
                                            <!-- <p>等待执行：2019/5/17:14:33:37</p> -->
                                        </div>
                                        <div class="m-right">
                                            <p>执行状态</p>
                                            <p><van-icon size="100px" name="http://pay.91dianji.com.cn/chenggong.png"/></p>
                                            <!-- <van-button @click.self="stopPlan(item.id)" type="default" round>停止计划</van-button> -->
                                            
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <ul>
                                            <li>
                                                <p>{{item.poundage}}</p>
                                                <p>手续费</p>
                                            </li>
                                              <li>
                                                <p>{{item.repaycount}}</p>
                                                <p>还款笔数</p>
                                            </li>
                                            <li>
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </van-tab>
                    <van-tab title="已取消">
                         <div class="waiting">
                            <ul>
                                <li v-show="item.state=='2'" @click="goPlanDetail(item.id,item.bankNick,item.cardNo,item.payerName)" v-for="(item,index) in planList" :key="index">
                                    <div class="top">
                                        <!-- <p>{{item.cardNo.substr(item.cardNo.length-4)}}</p> -->
                                         <p>{{item.bankNick}}</p>
                                        <p>{{item.payerName}}</p>
                                        <p>本期账单：￥<span>{{item.realamount}}</span></p>
                                    </div>
                                    <div class="middle">
                                        <div class="m-left">
                                            
                                            <!-- <p>已手动取消</p> -->
                                        </div>
                                        <div class="m-right">
                                            <p>执行状态</p>
                                            <p><van-icon size="100px" name="http://pay.91dianji.com.cn/quxiao.png"/></p>
                                            <!-- <van-button @click.self="stopPlan(item.id)" type="default" round>停止计划</van-button> -->
                                            
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <ul>
                                            <li>
                                              
                                                <p>{{item.poundage}}</p>
                                                <p>手续费</p>
                                            </li>
                                              <li>
                                                <p>{{item.repaycount}}</p>
                                                <p>还款笔数</p>
                                            </li>
                                            <li>
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </van-tab>
                     <van-tab title="进行中">
                          <div class="waiting">
                            <ul>
                                <li v-show="item.state=='3'" @click="goPlanDetail(item.id,item.bankNick,item.cardNo,item.payerName)" v-for="(item,index) in planList" :key="index">
                                    <div class="top">
                                        <!-- <p>{{item.cardNo.substr(item.cardNo.length-4)}}</p> -->
                                           <p>{{item.bankNick}}</p>
                                        <p>{{item.payerName}}</p>
                                        <p>本期账单：￥<span>{{item.realamount}}</span></p>
                                    </div>
                                    <div class="middle">
                                        <div class="m-left">
                                           
                                            <!-- <p>进行中</p> -->
                                        </div>
                                        <div class="m-right">
                                            <p>执行状态</p>
                                            <p><van-icon size="100px" name="http://pay.91dianji.com.cn/zhixing.png"/></p>
                                            <van-button @click.stop="stopPlan(item.id)" type="default" round>停止计划</van-button>
                                            
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <ul>
                                              <li>
                                                <p>{{item.poundage}}</p>
                                                <p>手续费</p>
                                            </li>
                                              <li>
                                                <p>{{item.repaycount}}</p>
                                                <p>还款笔数</p>
                                            </li>
                                            <li>
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                     </van-tab>
                      <van-tab title="失败">
                           <div class="waiting">
                            <ul>
                                <li v-show="item.state=='4'" @click="goPlanDetail(item.id,item.bankNick,item.cardNo,item.payerName)" v-for="(item,index) in planList" :key="index">
                                    <div class="top">
                                        <!-- <p>{{item.cardNo.substr(item.cardNo.length-4)}}</p> -->
                                           <p>{{item.bankNick}}</p>
                                        <p>{{item.payerName}}</p>
                                        <p>本期账单：￥<span>{{item.realamount}}</span></p>
                                    </div>
                                    <div class="middle">
                                        <div class="m-left">
                                          
                                            <!-- <p>失败</p> -->
                                        </div>
                                        <div class="m-right">
                                            <p>执行状态</p>
                                            <p><van-icon size="100px" name="http://pay.91dianji.com.cn/shibai.png"/></p>
                                            <!-- <van-button @click.self="stopPlan(item.id)" type="default" round>停止计划</van-button> -->
                                            
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <ul>
                                            <li>
                                                <p>{{item.poundage}}</p>
                                                <p>手续费</p>
                                            </li>
                                              <li>
                                                <p>{{item.repaycount}}</p>
                                                <p>还款笔数</p>
                                            </li>
                                            <li>
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                      </van-tab>
                </van-tabs>
           </div>
           
        </div>
    </div>

</template>

<script>
import { axiosPost } from '../../lib/http'
import { bankCardAttribution } from '../../lib/bankName'
export default {
    data() {
        return {
            active:0,
            bindId:"",
            list:[],
            planList:[],
            i:"",
        }
    },
    methods:{
        goBack(){
            this.$router.push("/home/creditHousekeeper/aisleHousekeeper")
        },
        goPlanDetail(id,bankName,name,nick){
            this.$router.push({
                path:"/home/punch/planDetail",
                query:{
                    id:id,
                    bankName:bankName,
                    name:name,
                    nick:nick
                }
            })
        },
        stopPlan(id){
                 this.$dialog.confirm({
                    title: '提示',
                    message: '确定要取消计划？',
                    confirmButtonText:'是',
                })
                .then(()=>{
                     let data={
                  id,
              }
              axiosPost("/creditCard/cancelMainPlan",data)
              .then(res=>{
                //   console.log(res)
                  if(!res.data.success){
                      this.$toast({
                          message:res.data.message
                      })
                  } else {
                       this.getMainPlan()
                  }
              })
              .catch(err=>{
                //   console.log(err)
              })
                })
                .catch(()=>{
                    //on cancel
                })

             
        },
        onClick(index, title){
             let data={
                  bindId:this.bindId,
                    page:"1",
                    pageSize:"100",
                    state:index-1
                }
                if(data.state=='4'){
                    data.state='5'
                }
                if(data.state=="-1"){
                    this.getMainPlan()
                } else{
                     axiosPost("/creditCard/getMainPlan",data)
                 .then(res=>{
                if(!res.data.success){
                    this.$toast({
                        message:res.data.message
                    })
                } else {
                     let arr= res.data.data.data
                     let arrXun=[]
                     arr.forEach((item,i) => {
                         item.bankNick=bankCardAttribution(item.cardNo).bankName
                         arrXun.push(item)
                     });
                     this.planList=arrXun
                     if(this.planList.length==0){
                         this.$toast("暂无数据")
                     }
                }
            })
            .catch(err=>{
                // console.log(err)
            })
                }
                
        },
        //获取主还款
        getMainPlan(){
            this.i="1"
            let data ={
                page:"1",
                pageSize:"100",
                state:""
            }
            axiosPost("/creditCard/getMainPlan",data)
            .then(res=>{
                if(!res.data.success){
                    this.$toast({
                        message:res.data.message
                    })
                } else {
                     let arr= res.data.data.data
                     let arrXun=[]
                     arr.forEach((item,index) => {
                         item.bankNick=bankCardAttribution(item.cardNo).bankName
                         arrXun.push(item)
                     });
                     this.list=arrXun
                }
            })
            .catch(err=>{
                // console.log(err)
            })
        }
    },
    created () {
        this.bindId=  this.$route.query.bindId 
        // this.getMainPlan()
    },
    mounted () {
        this.getMainPlan()
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
           overflow-y: scroll;
            .van-dialog .van-button {
                /* border: 0; */
                border: 1px solid #4b66af;
            }
           >.ranking {
               .waiting {
                   >ul{
                       padding:15px;
                       >li {
                        //   border:2px solid #ccc;
                        //   background-color:#4AA3E2;
                          color:#fff;
                          border-radius: 10px;
                          box-sizing: border-box;
                        margin-bottom: 15px;
                        background-repeat: no-repeat;
                        height: 410px;
                        background-size:100%;
                        // padding:10px;
                         &:nth-of-type(10n+1){
                         background-image: url("http://pay.91dianji.com.cn/bgc5.jpg")
                        }
                        &:nth-of-type(10n+2){
                            background-image: url("http://pay.91dianji.com.cn/bgc6.jpg")
                        }
                        &:nth-of-type(10n+3){
                            background-image: url("http://pay.91dianji.com.cn/bgc3.jpg")
                        }
                        &:nth-of-type(10n+4){
                            background-image: url("http://pay.91dianji.com.cn/bgc7.jpg")
                        }
                        &:nth-of-type(10n+5){
                            background-image: url("http://pay.91dianji.com.cn/bgc8.jpg")
                        }
                        &:nth-of-type(10n+6){
                            background-image: url("http://pay.91dianji.com.cn/bgc9.jpg")
                        }
                        &:nth-of-type(10n+7){
                            background-image: url("http://pay.91dianji.com.cn/bgc2.jpg")
                        }
                        &:nth-of-type(10n+8){
                            background-image: url("http://pay.91dianji.com.cn/bgc1.jpg")
                        }
                        &:nth-of-type(10n+9){
                            background-image: url("http://pay.91dianji.com.cn/bgc4.jpg")
                        }
                        &:nth-of-type(10n+10){
                            background-image: url("http://pay.91dianji.com.cn/bgc10.jpg")
                        }

                          >.top {
                             padding-top:13px;
                             height:20px !important;
                              padding:20px 10px;
                              display: flex;
                              justify-content: space-between;
                              background-color: rgba(0, 0, 0, .2);
                              margin-top:10px;
                          }
                          >.middle{
                               display: flex;
                              justify-content: space-around;
                              align-items: center;
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
                                        margin-left:50px;
                                      }
                                  }
                                  .sign-out {
                                       margin-top:50px;
                                        .van-dialog,
                                        .van-dialog__message,
                                        .van-button {
                                            font-size: 30px;
                                        }
                                        .van-button--round{
                                            width:100px !important;
                                            height:40px !important;
                                        }


                                         .van-button .van-button--default .van-button--large .van-dialog__confirm .van-hairline--left{
                                            height:70px;
                                        }
                                         .van-dialog .van-button{
                                            height: 80px;
                                        }
                                  }

                                  
                              }
                          }
                          >.bottom {
                              >ul{
                                  display: flex;
                                  padding:10px 5px;
                                  >li {
                                      width:33%;
                                      text-align: center;
                                      >p {
                                          &:nth-of-type(1){
                                              padding-bottom: 30px;
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

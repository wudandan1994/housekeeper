<template>
    <div id="records">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>订单详情</span>
            <span></span>
        </header>
        <div class="container">
          <div class="record">
              <ul>
                  <li  v-for="(item,index)   in recordList" :key="index">
                      <h3>订单信息</h3>
                      <p><span>订单编号：</span><span>{{item.orderCode}}</span></p>
                      <p><span>创建时间：</span><span>{{item.createddatetime}}</span></p>
                      <!-- <p><span>支付卡号：</span><span>{{item.accNo.replace(/^(\d{4})\d+(\d{4})$/,"$1 ****  **** $2")}}</span></p>
                      <p><span>到账卡号：</span><span>{{item.accountNo.replace(/^(\d{4})\d+(\d{4})$/,"$1 ****  **** $2")}}</span></p> -->
                      <p><span>支付卡号：</span><span>{{item.accNo}}</span></p>
                      <p v-show="item.accountNo"><span>到账卡号：</span><span>{{item.accountNo}}</span></p>
                      <p><span>付款金额：</span><span>{{item.orderAmount}}</span></p>
                      <p><span>手续金额：</span><span>{{item.handingFee}}</span></p>
                  </li>
              </ul>
          </div>
        </div>
          <loading :componentload="componentload"></loading>
    </div>

</template>


<script>
import {axiosPost} from '@/lib/http'
import loading from '@/components/loading'

export default {
     components:{
      loading
    },
    data() {
        return {
            recordList:[],
            componentload:false,
          
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
        getRecord(){
            let data={
                page:"1",
                pageSize:"100"
            }
            
            axiosPost("/creditCard/getTradeQueryList",data)
            .then(res=>{
                if(!res.data.success){
                    this.$toast({
                        message:res.data.message
                    })
                } else {
                      this.recordList=res.data.data.data
                     if(this.recordList.length===0){
                        this.$toast("暂无记录")
                    } else {
                        let arr=this.recordList
                        arr=arr.reverse()
                        let arrlist=[]
                        arr.forEach(item=>{
                            if(item.accNo){
                                item.accNo=item.accNo.replace(/^(\d{4})\d+(\d{4})$/,"$1 ****  **** $2")
                            }
                            if(item.accountNo) {
                               item.accountNo=item.accountNo.replace(/^(\d{4})\d+(\d{4})$/,"$1 ****  **** $2")
                            }
                             arrlist.push(item)
                            
                        })
                        this.recordList=arrlist
                    }
                }
            })
            .catch(err=>{

            })
        }
    },
    created () {
        // this.getRecord()
        
    },
    mounted () {
        this.getRecord()
    }
}
</script>

<style lang="less">
   #records {
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
           >.record {
               padding:20px;
               >ul {
                   list-style: none;
                   >li {
                       border:2px solid #ccc;
                       border-radius: 10px;
                       padding:15px;
                       margin-bottom: 15px;
                       h3{
                            color:#4B66AF;
                            text-align: center;
                            font-weight: bold;
                            padding-bottom: 15px;
                       }
                       >p {
                           padding-bottom: 15px;
                           display: flex;
                           justify-content: space-between;
                           margin:0 10px;
                           >span {
                               &:nth-of-type(2){
                                   margin-left:30px;
                                   flex:1;
                               }
                           }
                       }
                   }
               }
           }
        
       }
   }
</style>

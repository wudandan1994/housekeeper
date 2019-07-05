<template>
    <div id="violation-inquiry">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">提现记录</div>
            <div class="right-icon center"></div>
        </header>
        <div class="container">
           <div  v-show="showRecord" class="total">
               <div class="per-list" v-for="(item, index) in recordList" :key="index">
                   <div class="start-center">提现金额: {{item.withdraw_apply_total}}</div>
                   <div class="end-center" v-if="item.status == 0">被驳回</div>
                   <div class="end-center" v-if="item.status == 1">待审核</div>
                   <div class="end-center" v-if="item.status == 3">已完成</div>
                   <div class="start-center">到账金额: <span style="font-weight: 700;color:red">&nbsp;{{item.withdraw_apply_amount}}</span></div>
                   <div class="end-center">{{item.withdraw_apply_time}}</div>
               </div>
           </div>
        </div>
    </div>

</template>


<script>
import storage from '@/lib/storage'
import {axiosPost} from '@/lib/http'
export default {
    data() {
        return {
            recordList:[],
            showRecord:false
        }
    },
    methods:{
        handleReturnHome() {
            this.$router.go(-1);
        },
        getRecord(){
            let that = this
            let cid=storage.get("cid")
            let data={
                page:1,
                pageSize: 2000
            }
             axiosPost("/customer/getWithdrawalList",data)
             .then(function(res){
                 console.log(res.data);
                 if(!res.data.success){
                     that.$toast({
                         message:res.data.message
                     })
                     return
                 }
                 if(res.data.data.data.length===0){
                     that.$toast({
                         message:"您还没有提现记录哦！"
                     })
                 } else {
                     that.showRecord=true
                      that.recordList=res.data.data.data
                 }
             })
             .catch(function(err){
                that.$toast({
                    message:"请先登录"
                })
                 
             })
        }
    },
    created () {
       this.getRecord()   
    }
}
</script>

<style lang="less">
   #violation-inquiry {
       
       .container {
            padding-top:96px;
            .total {
                .per-list{
                    width: 95%;
                    height: 80px;
                    border: solid 1px #ccc;
                    margin: 10px auto;
                    display: flex;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                    padding: 5px;
                    div{
                        width: 50%;
                        height: 50%;
                    }
                }
            }
       }
   }
</style>

<template>
    <div id="violation-inquiry">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>提现记录</span>
            <span></span>
        </header>
        <div class="container">
           <div  v-show="showRecord" class="total">
               <ul>
                   <li v-for="(item, index) in recordList" :key="index">
                       <span>+{{item.withdraw_apply_total}}</span>
                       <span>提现</span>
                       <span>{{item.withdraw_apply_time}}</span>
                   </li>
               </ul>
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
        goBack() {
            this.$router.push('/ponserCenter/userAccountManage')
        },
        getRecord(){
            let that = this
            // let cid=storage.get("cid")
            let data={
                cid:"5"
            }
             axiosPost("http://pay.91dianji.com.cn/api/customer/getWithdrawalById",data)
             .then(function(res){
                 if(!res.data.success){
                     that.$toast({
                         message:res.data.message
                     })
                     return
                 }
                 if(res.data.data.length===0){
                     that.$toast({
                         message:"您还没有提现记录哦！"
                     })
                 } else {
                     that.showRecord=true
                      that.recordList=res.data.data
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
       >header {
           background: #000;
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
          >.total {
              margin:20px 30px;
              >ul {
                  border:2px solid #ccc;
                  border-radius: 10px;
                  padding:20px;
                  >li {
                      display: flex;
                      justify-content: space-between;
                      >span{
                          &:nth-of-type(1){
                              color: red;
                          }
                      }
                  }
              }
          }
       }
   }
</style>

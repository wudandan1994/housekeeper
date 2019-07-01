<template>
    <div id="large-amount">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>绑定信用卡</span>
            <span></span>
        </header>
        <div class="container">
            <div class="info">
                 <div class="user-input row">
                    <div class="title start-center">真实姓名</div>
                    <div class="input start-center"><input type="text" required v-model="paymer_name" placeholder="姓名"></div>
                </div>
                <div class="user-input row">
                    <div class="title start-center">身份证号码</div>
                    <div class="input start-center"><input type="text" required v-model="paymer_idcard" placeholder="身份证号码"></div>
                </div>
                <div class="user-input row">
                    <div class="title start-center">卡号</div>
                    <div class="input start-center"><input type="number" required v-model="paymer_bank_no" placeholder="信用卡卡号"></div>
                </div>
                 <div class="user-input row">
                    <div class="title start-center">手机号码</div>
                    <div class="input start-center"><input type="number" required v-model="paymer_phone" placeholder="预留手机号码"></div>
                </div>
            </div>
            <div class="submit">
                <van-button @click="submit" round size="large" type="default">提交</van-button>
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
           paymer_name:"",
           paymer_idcard:"",
           paymer_bank_no:"",
           paymer_phone:"",
           info:"",
            componentload: false,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home/creditHousekeeper/aisleHousekeeper')
        },
        submit(){
            let partten=/0?(13|14|15|17|18|19)[0-9]{9}/ 
             if(!partten.test(this.paymer_phone)){
                 this.$toast("请填写正确的手机号")
                 return
             }

             let parttenId=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
            if(!parttenId.test(this. paymer_idcard)){
                this.$toast({
                    message:"请填正确的身份证号码"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                })
                return
            }
            if(this.paymer_name.trim().length===0 || this. paymer_idcard.trim().length===0 || this.paymer_bank_no.trim().length===0 || this.paymer_phone.trim().length===0){
                this.$toast({
                    message:"请将信息填写完整"
                })
                 return
            }

                let data={
                    paymer_name:this.paymer_name,
                    paymer_idcard:this.paymer_idcard,
                    paymer_bank_no:this.paymer_bank_no,
                    paymer_phone:this.paymer_phone,
                    bindId:this.info.bindId
                   };
                    this.componentload=true

                axiosPost("/vtdcreditCard/insertAuthent",data)
                .then(res=>{
                   
                    setTimeout(()=>{
                         this.componentload=false
                         if(!res.data.success && res.data.code=='100'){
                          this.$router.push({
                             path:"/home/largeCard",
                             query:{
                                 info:this.info
                             }
                         })
                     } else if(!res.data.success){
                               this.$toast({
                            message:res.data.message
                         })
                     }   else  {
                         this.$router.push({
                             path:"/home/largeCard",
                             query:{
                                 info:this.info
                             }
                         })
                      }
                    },1000)
                })
                .catch(err=>{
                })
            
        },
    },
    created(){
        this.info=this.$route.query.info
        this.paymer_name=this.info.payerName
        this.paymer_idcard=this.info.idCardNo
        this.paymer_bank_no=this.info.cardNo
        this.paymer_phone=this.info.phone
    }
}
</script>

<style lang="less">
   #large-amount{
       >header {
           background-color: #4965AE;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           font-size:28px;
           color:#fff;
           display: flex;
           position: fixed;
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
           font-size: 34px;
           >.info {
                .user-input{
            width: 100%;
            height: 100px;
            background: white;
            >.title{
                width: 25vw;
                height: 90%;
                margin-top: 10px;
                margin-left: 5vw;
                font-weight: bold;
                font-size: 0.4rem;
                &.year {
                     width:40vw;
                }
            }
            .input{
                width: 70vw;
                height: 100%;
                >input{
                    width: 100%;
                    height: 90%;
                    margin-top: 5px;
                    border: none;
                }
            }
            .safe-code{
                width: 40vw;
                height: 100%;
                 >input{
                    width: 100%;
                    height: 90%;
                    margin-top: 5px;
                    border: none;
                }
            }
            .get-code{
                width: 30vw;
                height: 100%;
                >div{
                    background: #4965AE;
                    color: white;
                    padding: 15px;
                    border-radius: 10px;
                }
            }
        }
           }
           >.submit {
               padding-left:30px;
               padding-right: 30px;
               >button{
                   height: 90px;
                   font-size: 28px;
               }
               .van-button--default {
                   background-color: #4965AE;
               }
           }
       }
   }
</style>

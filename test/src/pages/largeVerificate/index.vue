<template>
    <div id="large-amount">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>短信验证</span>
            <span></span>
        </header>
        <div class="container">
            <div class="info">
                 <div class="user-input row">
                    <div class="title start-center">真实姓名</div>
                    <div class="input start-center"><input type="text" required v-model="holderName" placeholder="姓名"></div>
                </div>
                <div class="user-input row">
                    <div class="title start-center">身份证号码</div>
                    <div class="input start-center"><input type="text" required v-model="idcard" placeholder="身份证号码"></div>
                </div>
                  <div class="user-input row">
                    <div class="title start-center">手机号码</div>
                    <div class="input start-center"><input type="number" required v-model="tel" placeholder="预留手机号码"></div>
                </div>
                <div class="user-input row">
                    <div class="title start-center">卡号</div>
                    <div class="input start-center"><input type="number" required v-model="accountNumber" placeholder="信用卡卡号"></div>
                </div>
               
                 <div class="user-input row">
                    <div class="title start-center">安全码</div>
                    <div class="input start-center"><input type="number" required v-model="cvv2" placeholder="信用卡安全码"></div>
                </div>
                 <div class="user-input row">
                    <div class="title start-center">有效期</div>
                    <div class="input start-center"><input type="number" required v-model="expired" placeholder="信用卡有效期"></div>
                </div>
                 <div class="user-input row">
                    <div class="title start-center">验证码</div>
                    <div class="input start-center"><input type="number" required v-model="smsCode" placeholder="短信验证码"></div>
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
import storage from '@/lib/storage' 

export default {
    components:{
      loading
    },
    data() {
        return {
          expired:"",
           cvv2:"",
           idcard:"",
           holderName:"",
           accountNumber:"",
           tel:"",
           info:"",
           componentload: false,    
           bizOrderNumber:"" ,
           smsCode:""                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
        submit(){
            let partten=/0?(13|14|15|16|17|18|19)[0-9]{9}/ 
             if(!partten.test(this.tel)){
                 this.$toast("请填写正确的手机号")
                 return
             }

             let parttenId=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
            if(!parttenId.test(this.idcard)){
                this.$toast({
                    message:"请填正确的身份证号码"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                })
                return
            }
            if(this.expired.trim().length===0 || this.cvv2.trim().length===0 || this.smsCode.trim().length===0 || this.idcard.trim().length===0 || this.holderName.trim().length===0 || this.accountNumber.trim().length===0 || this.tel.trim().length===0){
                this.$toast({
                    message:"请将信息填写完整"
                })
                 return
            }

                let data={
                    expired:this.expired,
                    cvv2:this.cvv2,
                    idcard:this.idcard,
                    holderName:this.holderName,
                    accountNumber:this.accountNumber,
                    tel:this.tel,
                    bizOrderNumber:this.bizOrderNumber,
                    smsCode:this.smsCode
                   };

                 this.componentload=true
                axiosPost("/zypay/checkSms",data)
                .then(res=>{
                      let responce=res.data.data
                      responce=JSON.parse(responce)
                     setTimeout(()=>{
                        if(responce.data.isSign=='t'){
                        this.$toast(responce.message)
                         storage.set('channel',"2");
                        this.$router.push({
                            path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                                        query:{
                                            info:this.info
                                        }
                                })
                            } else {
                                this.componentload=false
                                this.$toast(responce.message)
                            }

                      },1000)
                })
                .catch(err=>{
                })
            
        },
    },
    created(){
        this.info=this.$route.query.info
        this.holderName=this.info.payerName
        this.idcard=this.info.idCardNo
        this.accountNumber=this.info.cardNo
        this.tel=this.info.phone
        this.cvv2=this.info.cvv2
        this.expired=this.info.year+this.info.month
        this.bizOrderNumber=this.$route.query.bizOrderNumber
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

<template>
    <div id="largewfcard">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>协议申请</span>
            <span></span>
        </header>
        <div class="container">
            <div class="info">
                 <!-- <div class="user-input row">
                    <div class="title start-center">生效日期</div>
                    <div class="input start-center"><input type="text" required v-model="startDate" placeholder="生效日期"></div>
                    <span @click="startSelect" class="arrow"><van-icon size="20px" name="arrow"/></span>
                </div> -->

                <!-- 生效日期选择    开始日期-->
                <!-- <van-popup v-model="show" position="bottom" :overlay="true">
                     <van-datetime-picker
                        v-model="start"
                        v-show="showStart"
                        @confirm="confirmStart"
                        @cancel="cancelStart"
                        type="date"
                        :min-date="minDate"
                        />
                </van-popup> -->


                 <!-- <div class="user-input row">
                    <div class="title start-center">失效日期</div>
                    <div class="input start-center"><input type="text" required v-model="endDate" placeholder="失效日期"></div>
                     <span @click="endSelect" class="arrow"><van-icon size="20px" name="arrow"/></span>
                </div> -->
                 <!-- 失效日期选择   结束日期  -->

                 <!-- <van-popup v-model="showend" position="bottom" :overlay="true">
                      <van-datetime-picker
                        v-model="end"
                        v-show="showEnd"
                        @confirm="confirmEnd"
                        @cancel="cancelEnd"
                        type="date"
                        :min-date="minDate"
                        />
                 </van-popup> -->

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
                    <div class="input start-center"><input type="number" required v-model="cvv2" placeholder="信用卡安全码 "></div>
                </div>
                 <div class="user-input row">
                    <div class="title start-center">有效期</div>
                    <div class="input start-center"><input type="number" required v-model="expired" placeholder="如03/22 请填写0322"></div>
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
          expired:"",
           cvv2:"",
           idcard:"",
           holderName:"",
           accountNumber:"",
           tel:"",
           info:"",
           componentload: false, 
           startDate:"",
           endDate:"" ,
           minDate: new Date(),
           start:"",
           end:"",
           showStart:false,
           showEnd:false,
           show:false,
           showend:false,

        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
        startSelect(){
            this.show=!this.show
            this.showStart=true
        },
        endSelect(){
            this.showend=!this.showend
            this.showEnd=true
        },
        cancelStart(){
            this.show=false
        },
        cancelEnd(){
            this.showend=false
        },
         fnW(str){
                var num;
                str>9?num=str:num="0"+str;
                return num;
            } ,
          fnDate(time){
                let date=time
                let year=date.getFullYear();//当前年份
                let month=date.getMonth();//当前月份
                let data=date.getDate();//天
              return   year+''+this.fnW((month+1))+''+this.fnW(data);
            },
        confirmStart(value){
            this.startDate= this.fnDate(value)
            this.show=false
        },
        confirmEnd(value){
            this.endDate= this.fnDate(value)
            this.showend=false
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
            if(this.expired.trim().length===0 || this.cvv2.trim().length===0 || this.idcard.trim().length===0 || this.holderName.trim().length===0 ||
             this.accountNumber.trim().length===0 || this.tel.trim().length===0 ){
                this.$toast({
                    message:"请将信息填写完整"
                })
                 return
            }

                let data={
                    custCardValidDate:this.expired,
                    custCardCvv2:this.cvv2,
                    certificateNo:this.idcard,
                    holderName:this.holderName,
                    bankCardNo:this.accountNumber,
                    mobileNo:this.tel,
                    startDate:this.fnDate(new Date()),
                    endDate:'20'+this.info.year+this.info.month+"01",
                    channel:"1",
                   };

                    // console.log(data,'data')

                 this.componentload=true

                axiosPost("/wfpay/bindCardInit",data)
                .then(res=>{
                //    console.log(res,"第一次签约")
                   setTimeout(()=>{
                       if(res.data.success){
                           let orderNo=res.data.data.orderNo
                           let smsSeq=res.data.data.smsSeq
                           this.$router.push({
                               path:"/home/largeWFxe/verify",
                               query:{
                                   orderNo,
                                   smsSeq,
                                   info:this.info
                               }
                           })
                       } else {
                           this.$toast(res.data.message)
                       }
                       this.componentload=false
                   },2000)

                  
                })
                .catch(err=>{
                    this.$toast("登录超时，请重新登录")
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
        this.expired=this.info.month+this.info.year

    }
}
</script>

<style lang="less">
   #largewfcard{
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
           .van-picker__cancel {
               color:#000;
           }
           .van-picker__cancel {
               height:80px ;
               line-height: 80px;
           }
           .van-picker__confirm {
               line-height: 80px;
           }
           .van-picker-column__item--selected{
                color:#4B66AF;
                font-weight: bold;
            }
           >.info {
                .user-input{
            width: 100%;
            height: 100px;
            background: white;
            .arrow {
                display: inline-block;
                line-height: 100px;
                padding-right: 20px;
            }
            >.title{
                width: 26vw;
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
                width: 62vw;
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

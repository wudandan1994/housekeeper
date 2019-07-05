<template>
    <div id="DHregister">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>绑定信用卡</span>
            <span></span>
        </header>
        <div class="container">
            <div class="info">
                 <div class="user-input row">
                    <div class="title start-center">真实姓名</div>
                    <div class="input start-center"><input type="text" required v-model="name" placeholder="姓名"></div>
                </div>
                <div class="user-input row">
                    <div class="title start-center">身份证号码</div>
                    <div class="input start-center"><input type="text" required v-model="idCard" placeholder="身份证号码"></div>
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
            name:"",
            idCard:"",
            phone:"",
            componentload: false,
            info:'',
            userId:""
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
        submit(){
             let parttenId=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
            if(this.name.trim().length===0 || this.idCard.trim().length===0  || !parttenId.test(this.idCard)){
                this.$toast({
                    message:"请填写正确的信息"
                })
            }else{
                let data={
                    userName:this.name,
                    certificateNum:this.idCard,
                   
                };
                this.componentload=true
                axiosPost("/dhcreditCard/dhRegister",data)
                .then(res=>{
                    if(!res.data.success){
                        this.$toast({
                            message:res.data.message
                        })
                    }  else {
                          this.userId=res.data.data.userId   //  去绑卡   

                        setTimeout(()=>{
                            this.componentload=false
                            this.$router.push({
                                path:"/home/DHbind",
                                query:{
                                    userId:this.userId,
                                    info:this.info
                                }
                            })


                        },1000)
                       
                       
                    }
                })
                .catch(err=>{
                })
            }
        },
        
    },
    created(){
        // this.handleGetAOuth();
        this.info=this.$route.query.info
        this.name=this.info.payerName
        this.idCard=this.info.idCardNo
    }
}
</script>

<style lang="less">
   #DHregister{
       >header {
            background-color: #4B66AF;
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
                    background: #4B66AF;
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
           }
       }
   }
</style>

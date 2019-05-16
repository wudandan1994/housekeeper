<template>
    <div id="transaction-query">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>绑定信用卡</span>
            <span></span>
        </header>
        <div class="container">
            <div class="info">
                 <div class="user-input row">
                    <div class="title start-center">真实姓名</div>
                    <div class="input start-center"><input type="text" required v-model="name" placeholder="请填写姓名"></div>
                </div>
                <div class="user-input row">
                    <div class="title start-center">身份证号码</div>
                    <div class="input start-center"><input type="text" required v-model="idCard" placeholder="请填写所持身份证号码"></div>
                </div>
                <div class="user-input row">
                    <div class="title start-center">手机号码</div>
                    <div class="input start-center"><input type="number" required v-model="phone" placeholder="请填写预留手机号码"></div>
                </div>
            </div>
            <div class="submit">
                <van-button @click="submit" round size="large" type="info">提交</van-button>
            </div>
        </div>
    </div>

</template>


<script>
import {axiosPost} from '@/lib/http'
export default {
    data() {
        return {
            name:"",
            idCard:"",
            phone:""
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home')
        },
        submit(){
            if(this.name.trim().length===0 || this.idCard.trim().length===0 || this.phone.trim().length===0){
                this.$toast({
                    message:"请将信息填写完整"
                })
            }else{
                let data={
                    merchantname:this.name,
                    idcardno:this.idCard,
                    phone:this.phone
                };
                axiosPost("/creditCard/merchantSettled",data)
                .then(res=>{
                    if(!res.data.success){
                        this.$toast({
                            message:res.data.message
                        })
                        return
                    }  else {
                        window.location.href=res.data.data
                        // let url=res.data.data
                        // this.$router.push({
                        //     path:"/home/cardCenter/progressQuery",
                        //     query:{
                        //         info:url,
                        //         title:"信用卡办理"
                        //       }
                        // })
                    }
                })
                .catch(err=>{
                    // console.log(err,"error");
                })
            }
        },
        // 获取实名认证信息
        handleGetAOuth(){
            let url = '/customer/getIdentification';
            let params = {};
            axiosPost(url,params).then(res =>{
                // console.log('获取实名认证状态成功',res);
                if(res.data.data.status != '0'){
                    this.name = res.data.data.name;
                    this.idCard = res.data.data.idcardnumber;
                    this.phone = this.$store.state.wechat.mobile;
                   
                }
            }).catch(res =>{
                // console.log('获取实名认证状态失败',res);
            })
        }
    },
    created(){
        this.handleGetAOuth();
    }
}
</script>

<style lang="less">
   #transaction-query{
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

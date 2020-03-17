<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-18 09:22:42
 * @LastEditTime: 2019-08-21 15:53:06
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="rhbinding">
        <header class="manage loan">
            <van-nav-bar title="绑卡" left-text="" left-arrow @click-left="handleReturnHome" >
               
            </van-nav-bar>
        </header>
        <div class="container">
             <div class="phone">
               <ul>
                    <li>
                        <span>真实姓名：</span>
                       <input v-model="accName" type="text" placeholder="姓名">
                   </li>
                    <li>
                        <span>身份证号：</span>
                       <input v-model="idCard"  type="text" placeholder="所持身份证号码">
                   </li>
                    <li>
                        <span>信用卡卡号：</span>
                       <input v-model="bank_cardno"  type="number" placeholder="信用卡卡号">
                   </li>
                    <li>
                       <span>手机号：</span>
                       <input type="number" v-model="phone" placeholder="信用卡预留手机号">
                   </li> 
                    <li>
                       <span>安全码：</span>
                       <input type="number" v-model="cvv2" placeholder="信用卡安全码">
                   </li> 
                    <li>
                       <span>有效期：</span>
                       <input type="number" v-model="validityDate" placeholder="信用卡有效期">
                   </li> 
              
                   
               </ul>
              <div @click="bindingCard" class="btn">
                <van-button round size="large" type="info">确认绑定</van-button>
              </div>
           </div>
        </div>
        <loading :componentload="componentload"></loading>
    </div>
</template>
<script>
import loading from '@/components/loading'
import {axiosPost,axiosGet} from '@/lib/http'
import storage from '@/lib/storage'
export default {
     components:{
      loading
    },
    data(){
        return{
            componentload: false,
            bank_cardno:"",
            phone:"",
            info:{},
            chMerCode:"",
            cvv2:"",
            validityDate:"",
            idCard:"",
            accName:""
        }
    },
    created(){
        if(this.info){
            this.info=this.$route.query.info
            console.log(this.info,"info")
            this.chMerCode=this.$route.query.chMerCode
            this.bank_cardno=this.info.cardNo
            this.phone=this.info.phone
            this.cvv2=this.info.cvv2
            this.validityDate=this.info.month+this.info.year
            this.accName=this.info.payerName
            this.idCard=this.info.idCardNo
        }
    },
    methods:{
        handleReturnHome(){
            this.$router.go(-1)
        },
           
        // 绑卡
        bindingCard(){
             let partern=/0?(13|14|15|16|17|18|19)[0-9]{9}/
             if(!partern.test(this.phone)){
                  return   this.$toast("请输入11位手机号码")
             }

            if(   this.bank_cardno.trim().length===0||  this.phone.trim().length===0 ){
                 this.$toast({
                    message:"请将信息填写完整"
                })
  
             return
            } 

             let data={
                 accNo:this.bank_cardno,
                 mobile:this.phone,
                 accName:this.accName,
                 idCard:this.idCard,
                 cvv2:this.cvv2,
                 validityDate:this.validityDate,
                 chMerCode:this.chMerCode
             }
                // this.componentload=true
              axiosPost("/jftpay/bindcard",data)
              .then(res=>{
                        console.log(res,"绑卡结果")
                       if(res.data.success){

                           let responce=res.data.data
                           responce=JSON.parse(responce)
                           location.href=responce.url


                        //    let url=res.data.data
                        //    let first=url.split('<!--')
                        //   let second=first[1].split('//-->')
                        //   let address=first[0]+second[0]+second[1]
                        //     document.write(address)
                        //     document.close()
                       } else {
                          
                           setTimeout(()=>{
                               this.componentload=false
                              this.$toast(res.data.message)
                           },1500)
                       }      
              })
              .catch(err=>{
                  console.log(err)
                   
              })
          }
    }    
}
</script>
<style lang="less" >
    #rhbinding{
        background: #EEEFF1;
        width: 100vw;
        height: 120vh;
        .container {
           padding-bottom: 50px;
           background-color: #EEEFF1;
           font-size:30px;
            >.phone {
                .btn {
                        margin-top:30px;
                        padding-left:20px;
                        padding-right: 20px;
                        font-size: 30px;
                        >button {
                            height:80px;
                            line-height: 80px;
                            background-color: #4965AE;
                            border:1px solid #4965AE;
                        }
                    }
               >ul{
                  
                   background-color: #fff;
                    
                   >li{
                       display: flex;
                       flex-wrap: nowrap;
                        padding-left:30px;
                       border-bottom: 1px solid #ccc;
                       padding-top:40px;
                       padding-bottom: 40px;
                       height: 60px;
                       line-height: 60px;
                       color:#000;
                       >span {
                           font-weight: bold;
                       }
                       &:last-child {
                           border:none;
                       }
                       >span {
                           &:nth-of-type(2){
                               padding:0 10px;
                               margin-right:20px;
                               line-height: 60px;
                               border-radius: 10px;
                           }
                        }
                       >input {
                           border:none;
                           flex: 1;
                           margin-right:50px;
                           height: 100px;
                            margin-top:-26px;
                            font-size: 30px;
                       }
                        ::-webkit-input-placeholder{
                            font-size:28px;
                            margin-top:-22px;
                        }
                   }
               }
           }
        }
        .loan .van-nav-bar {
          background-color: #4965AE!important;
          height: 96px;
          line-height: 96px;
         }
         .van-nav-bar__title {
             color:#fff;
             font-size: 30px;
         }
         .tips {
             margin:20px;
         }
         .van-nav-bar .van-icon  {
             color:#fff;
              font-size: 30px;
         }
         .van-nav-bar__text{
             color:#fff;
              font-size: 30px;
         }
        .top{
            margin-top: 20px;
        }
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
                 box-sizing: border-box;
                >input{
                    width: 100%;
                    height: 90%;
                    margin-top: 5px;
                    border: none;
                    font-size: 30px;
                     box-sizing: border-box;
                     background-color: yellow;
                  }
                 ::-webkit-input-placeholder{
                    font-size:28px;
                    margin-top:0px;
                    background-color: red;
                    position: relative;
                    bottom:0px;
                 }
                 
            }
            .safe-code{
                width: 40vw;
                height: 100%;
                >input{
                    width: 100%;
                    height: 90%;
                    border: none;
                     margin-top:5px;
                    font-size: 30px;
                    box-sizing: border-box;
                       background-color: yellow;
                  }
                   ::-webkit-input-placeholder{
                    font-size:28px;
                    margin-top:22px;
                     box-sizing: border-box;
                     background-color: red;
                     position: relative;
                   bottom:0px;
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
        .next-stop{
            width: 90vw;
            padding-top:30px;
            padding-bottom: 30px;
            margin-left: auto;
            margin-right: auto;
            background-color: #4965AE;
            color: white;
            margin-top: 50px;
            border-radius: 20px;
        }
        .position{
            width: 100vw;
            z-index: 2;
            position: fixed;
            left: 0;
            bottom: 0;
        }
    }
</style>

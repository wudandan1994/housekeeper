<template>
    <div id="largeCard">
        <header class="manage loan">
            <van-nav-bar title="添加信用卡" left-text="返回" left-arrow @click-left="handleReturnHome" >
               
            </van-nav-bar>
        </header>
        <div class="container">
             <div class="phone">
               <ul>
                    <li>
                        <span>真实姓名：</span>
                       <input v-model="user_name" type="text" placeholder="姓名">
                   </li>
                    <li>
                        <span>身份证号：</span>
                       <input v-model="id_no"  type="text" placeholder="所持身份证号码">
                   </li>
                    <li>
                        <span>银行卡号：</span>
                       <input v-model="card_no"  type="number" placeholder="所持银行卡号">
                   </li>
                    <li>
                       <span>手机号：</span>
                       <input type="number" v-model="phone" placeholder="银行卡预留手机号">
                   </li> 
                    <li>
                        <span>有效期：</span>
                       <input v-model="validity"  type="number" placeholder="信用卡有效期如05/22 请填写0522">
                   </li>
                    <li>
                       <span>安全码：</span>
                       <input type="number" v-model="cvv2" placeholder="信用卡后三位安全码">
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
import area from '@/config/area.js'
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
            area: '请选择支行地址',
            show: false,
            title: '获取验证码',
            areaList:{},
            user_name:"",
            id_no:"",
            card_no:"",
            phone:"",
            validity:"",
            cvv2:"",
            info:"",
            //  auth_order_no:""
        }
    },
    created(){
        this.info=this.$route.query.info
        // console.log(this.info)
        // this.auth_order_no=this.$route.query.auth
        this.user_name=this.info.payerName
        this.id_no=this.info.idCardNo
        this.card_no=this.info.cardNo
        this.phone=this.info.phone
        this.cvv2=this.info.cvv2
        this.validity=this.info.year+this.info.month
    },
    methods:{
        handleReturnHome(){
            this.$router.go(-1)
        },
           
        // 绑卡
        bindingCard(){
             let partern=/0?(13|14|15|17|18|19)[0-9]{9}/
             if(!partern.test(this.phone)){
                 this.$toast({
                    message:"请输入11位手机号码"
                })
                return
             }
             
              let parttenId=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
               if(!parttenId.test(this. id_no)){
                 this.$toast({
                    message:"请填写正确的身份证号"
                })
                return
             }


            if(this.user_name.trim().length===0 ||  this. id_no.trim().length===0 ||  this. card_no.trim().length===0||  this.phone.trim().length===0||  this.validity.trim().length===0||  this.cvv2.trim().length===0){
                 this.$toast({
                    message:"请将信息填写完整"
                })
                return
            } 

             let data={
                // auth_order_no:this.auth_order_no,
                user_name:this.user_name,
                id_no:this.id_no,
                card_no:this.card_no,
                phone:this.phone,
                validity:this.validity,
                cvv2:this.cvv2,
                bank_type:"6",
                bindId:this.info.bindId
             }
              axiosPost("/vtdcreditCard/insertEnterNet",data)
              .then(res=>{
                this.componentload=true
                setTimeout(()=>{
                     this.componentload=false
                      if(!res.data.success){
                      this.$toast({
                          message:res.data.message
                      })
                  } else {
                      let user_no=res.data.data.user_no
                      this.$router.push({
                          path:"/home/active",
                          query:{
                              user:user_no,
                              info:this.info
                          }
                      })
                  }  

                },1000)
                              
              })
              .catch(err=>{
                   if(!err.data.success){
                       this.$toast({
                           message:err.data.message
                       })
                   }
              })
          }
    }    
}
</script>
<style lang="less" >
    #largeCard{
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
                            background-color: #4965AE;
                            border:1px solid #4965AE;
                        }
                    }
               >ul{
                   padding-left:30px;
                   background-color: #fff;
                    
                   >li{
                       display: flex;
                       flex-wrap: nowrap;
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
                // >input{
                //     width: 100%;
                //     height: 90%;
                //     margin-top: 5px;
                //     border: none;
                // }
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
                //  >input{
                //     width: 100%;
                //     height: 90%;
                //     margin-top: 5px;
                //     border: none;
                // }
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

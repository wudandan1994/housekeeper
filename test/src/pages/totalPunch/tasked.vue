<template>
    <div id="tasked">
        <header>
            <span @click="goBack"><van-icon size="20px" name="arrow-left"/></span>
            <span></span>
            <router-link to="/home/totalPunch/taskrecord" tag="span">任务记录</router-link>
        </header>
        <div class="container">
           <div class="nationwide">
               <p class="first">{{task}}</p>
               <p class="second">{{info}}</p>
           </div>
           <div class="wallet">
              <div class="open">
                  <img src="http://pay.91dianji.com.cn/silk.png" alt="" srcset="">
                   <div class="dollars">
                       <img src="http://pay.91dianji.com.cn/opened.png" alt="" srcset="">
                   </div>
                  
                   <div class="coin">
                       <img src="http://pay.91dianji.com.cn/coin.png" alt="" srcset="">
                   </div>
                    <div class="coverrw">
                        <img src="http://pay.91dianji.com.cn/coverrw.png" alt="" srcset="">
                   </div>
                  
              </div>
               <div class="circle" :id="animate?'circle':''">
                       <img src="http://pay.91dianji.com.cn/circleinner.png" alt="">
                       <p><span>{{amount}}</span>现金红包到账</p>
                </div>
           </div>
           <div class="invite">
               <div class="share" @click="handleGetAmount">
                    <p>现金红包已存至您的账户，前往查看</p>
               </div>
           </div>

        </div>
    </div>

</template>


<script>
import {axiosPost} from '@/lib/http'

export default {
    data() {
        return {
            task:"",
            amount:"",
            info:"",
            animate:false,
            amountSum:''
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
     
         handleGetAmount(){
            let url = '/customer/getCustomer';
            let params = { };
            axiosPost(url,params).then(res =>{
                if(res.data.success){
                    this.amountSum = res.data.data.amountSum;
                    this.$router.push({
                        path:"/personalCenter/income",
                        query:{
                             amountSum:this.amountSum
                        }
                    })
                } else {
                    this.$toast(res.data.message)
                }
            })
         },
    },
    created () {
        this.task=this.$route.query.task
        this.amount=this.$route.query.amount
        this.info=this.$route.query.info
        setTimeout(()=>{
             this.animate=true
        },100)
    }
}
</script>

<style lang="less" scope>
   #tasked {
       >header {
           background: #35447A;
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
           background-color: #35447A;
           .wallet {
               margin:30px 0;
               width:100%;
               position: relative;


                 #circle{
                  animation:  down .3s linear 1;
                 -webkit-animation:  down .3s linear 1;

                     @keyframes down {
                        0%{
                              bottom:500px;             
                        } 
                        100%{
                               bottom:0;                            
                        }
                    }
                 }

                .circle {
                    width:300px;
                    position: absolute;
                    bottom:0;
                    left:30%;
                    p{
                        color:#fff;
                        position: absolute;
                        bottom:40%;
                        left:20%;
                        span {
                            font-weight: bold;
                            font-size: 30px;
                        }
                    }
                    img {
                        width:100%;
                    }
                   }
               .open {
                   width:100%;
                   height: 100%;
                   position: relative;
              
                   .coin {
                       width:500px;
                       height:500px;
                       position: absolute;
                       top:10%;
                       left:16%;
                       img {
                           width:100%;
                       }
                   }
                   .coverrw {
                       width:66%;
                       margin:0 auto;
                       position: absolute;
                       bottom:-10%;
                       left:17%;
                       img {
                           width:100%;
                       }
                   }
                   .dollars {
                       width:70%;
                       margin:0 auto;
                       position: absolute;
                       top:10%;
                       left:15%;
                       img {
                           width:100%;
                       }
                   }
                   >img {
                       width:100%;
                   }
               }
           }
           .nationwide {
               p {
                   text-align: center;
                   color:#FEE891;
                   &.first {
                    font-size: 34px;
                    padding-bottom: 20px;
                    span {
                        font-weight: bold;
                        display: inline-block;
                        font-size: 40px;
                    }
                 }
                 &.second {
                     font-size: 28px;
                     padding-bottom: 20px;
                 }
                  &.third {
                     font-size: 28px;
                     padding-bottom: 15px;
                 }
               }
             
           }
          
           .invite {
              width:100%;
              box-sizing: border-box;
              margin-top:200px;
              .share {
                  width:80%;
                  background-color: #1F31C4;
                  margin:0 auto;
                  height:60px;
                  border-radius: 15px;
                  border:1px solid #fff;
                  line-height: 60px;
                  text-align: center;
                  box-sizing: border-box;
                  color:#fff;
                //  animation:  star 1.2s linear infinite;
                //  -webkit-animation:  star 1.2s linear infinite;


                //   @keyframes star {
                //         0%{
                //            width:80%;
                //            height:60px;                     
                //         }
                //         50%{
                //             width:90%;
                //             height:70px;   
                //         }
                //         100%{
                //             width:80%;
                //             height:60px;                              
                //         }
                //     }
              }
           }
       }
   }
</style>

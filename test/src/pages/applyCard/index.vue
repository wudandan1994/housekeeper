<template>
    <div id="apply-card">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>办卡中心</span>
            <span></span>
        </header>
        <div class="container">
            <div class="info">
                <div class="image">
                    <img :src="info.merCardImg" >
                </div>
               <div class="area">
                   <ul>
                      
                       <li>
                           <p><span><van-icon name="map-marked"/></span> 姓名</p>
                           <p>
                               <input type="text" v-model="merName" placeholder="请填写申请人姓名"> 
                           </p>
                       </li>
                        <li>
                           <p><span><van-icon name="phone"/></span> 手机号</p>
                           <p>
                               <input type="number" v-model="merMobile" placeholder="请填写申请人手机号"> 
                           </p>
                       </li>
                        <li>
                           <p><span><van-icon name="card"/></span> 证件</p>
                           <p>
                               <input type="text" v-model="merIdentityNo" placeholder="请填写申请人身份证号"> 
                           </p>
                       </li>
                       
                   </ul>
               </div>
                <div @click="getCard" class="next">
                    <span>下一步</span>
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
           info:"",
           merName:"",
           merMobile:"",
           merIdentityNo:""
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home/cardCenter')
        },
        getCard(){
            let that=this
            let partern=/^1\d{10}$/
            if(that.merName.trim().length===0){
                that.$toast({
                    message:"请填写姓名用户名"
                })
                return
            }
            if(that.merMobile.trim().length===0){
                that.$toast({
                    message:"请填写姓名手机号"
                })
                return
            }
            if(that.merIdentityNo.trim().length===0){
                that.$toast({
                    message:"请填写姓名身份证号码"
                })
                return
            }
            if(!partern.test(that.merMobile)){
                 that.$toast({
                    message:"请输入11位手机号码"
                })
                return
            }
            let data={
                merMobile:that.merMobile,
                merIdentityNo:that.merIdentityNo,
                merName:that.merName,
                bankId:that.info.bankId,
                merCardName:that.info.merCardName,
                bankCardId:that.info.merCardId
            }
            axiosPost("http://pay.91dianji.com.cn/api/creditCard/insertCreditCard",data)
            .then(function(res){

                if(!res.data.success){
                    that.$toast({
                        message:res.data.message
                    })
                    return
                }
                location.href=res.data.data.data
            })
            .catch(function(err){
                 that.$toast({
                    message:err.message
                })
                return
            })
            
            
        }
       
    },
    created () {
      this.info=this.$route.query.info
    //   console.log(this.info);
      
    },
}
</script>

<style lang="less">
   #apply-card{
       >header {
           background: #000;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           font-size:28px;
           color:#fff;
           display: flex;
           z-index:999;
           position: fixed;
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
        //    background-color:#E2E3E5; 
           >.info {
               >.area {
                   padding-left:15px;
                   background-color: #fff;
                   >ul {
                       padding:20px;
                       >li {
                           display: flex;
                           margin-top:20px;
                           padding-bottom: 20px;
                           >p {
                               &:nth-of-type(2){
                                   flex:1;
                                   border-bottom: 2px solid #ccc;
                                   margin-left:50px;
                                   margin-right: 30px;
                               }
                                input {
                                    border:none;
                                    text-align: left;
                                    margin-bottom: 5px;
                             }
                           }
                          
                       }
                   }
               }
               >.image {
                   margin-top:30px;
                   padding:30px;
                   margin:0 auto;
                   margin-bottom: 20px;
                   >img {
                       width:100%;
                       
                   }
               }
               >.next {
                   padding-top:30px;
                   padding-bottom: 30px;
                   text-align: center;
                   color:#fff;
                   background-color: #9F6711;
                   width:60%;
                   margin-top:60px;
                   margin-left:20%;
                   margin-bottom: 100px;
                   border-radius: 15px;

             }
           }
          
           
       }
   }
</style>

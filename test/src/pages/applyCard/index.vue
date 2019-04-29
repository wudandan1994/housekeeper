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
                               <input type="text" v-model="merName" placeholder="姓名"> 
                           </p>
                       </li>
                        <li>
                           <p><span><van-icon name="phone"/></span> 手机</p>
                           <p>
                               <input type="number" v-model="merMobile" placeholder="手机号"> 
                           </p>
                       </li>
                        <li>
                           <p><span><van-icon name="card"/></span> 证件</p>
                           <p>
                               <input type="text" v-model="merIdentityNo" placeholder="身份证号"> 
                           </p>
                       </li>
                       
                   </ul>
               </div>
                <div @click="getCard" class="next">
                     <van-button size="large" round type="info">下一步</van-button>
                </div>
            </div>
        </div>
         <loading :componentload="componentload"></loading>
    </div>

</template>

<script>
import loading from '@/components/loading'
import {axiosPost} from '@/lib/http'
export default {
     components:{
      loading
    },
    data() {
        return {
           componentload:false,
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
                } else {
                    that.componentload=true
                     let url=res.data.data.data
                    setTimeout(()=>{
                         that.$router.push({
                            path:"/loan/form/myOrder",
                            query:{
                                info:url
                              }
                        })
                    },1000)
                   
                       
                    //  location.href=res.data.data.data
                }
               
            })
            .catch(function(err){
                 that.$toast({
                    message:err.message
                })
                return
            })
            
            
        },
        // 获取实名认证信息
        handleGetAOuth(){
            let url = 'http://pay.91dianji.com.cn/api/customer/getIdentification';
            let params = {};
            axiosPost(url,params).then(res =>{
                if(res.data.data.status != '0'){
                    this.merName = res.data.data.name;
                    this.merIdentityNo = res.data.data.idcardnumber;
                    this.merMobile = this.$store.state.wechat.mobile;
                }
            }).catch(res =>{
                // console.log('获取实名认证状态失败',res);
            })
        }
       
    },
    created () {
      this.info=this.$route.query.info
    this.handleGetAOuth();
      
    },
}
</script>

<style lang="less">
   #apply-card{
       >header {
           background-color: #4965AE;
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
           font-size: 34px;
           >.info {
               >.image{
                   padding:20px;
                   >img {
                       width:100%;
                   }
               }
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
               >.next {
                   margin-top:100px;
                   padding:0 30px;
                   >button {
                       height: 90px;
                       font-size: 30px;
                   }

             }
           }
          
           
       }
   }
</style>

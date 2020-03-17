<template>
    <div id="dhbind">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>绑定信用卡</span>
            <span></span>
        </header>
        <div class="container">
            <div class="phone">
               <ul>
                   <li>
                        <span>账单日：</span>
                       <input  v-model="billdate" type="number" placeholder="账单日">
                   </li>
                    <li>
                        <span>还款日 ：</span>
                       <input v-model="duedate"  type="number" placeholder="还款日">
                   </li>
                   <li>
                       <span>手机号：</span>
                       <input type="number" v-model="phone" placeholder="手机号">
                   </li>
                   <li>
                       <span>安全码：</span>
                       <input type="number"  v-model="cvv2" placeholder="安全码" >
                   </li>
               </ul>
           </div>
           <div class="submit">
                <van-button size="large" @click="binding" round type="default">立即修改</van-button>
           </div>
            <div>
               
            </div>
        </div>
          <loading :componentload="componentload"></loading>
    </div>

</template>


<script>
import { axiosPost } from '../../lib/http'
import loading from '@/components/loading'
export default {
      components:{
      loading
    },
    data() {
        return {
            billdate:"",
            duedate:"",
            phone:"",
            cvv2:"",
            info:"",
            componentload: false,
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
    
        binding(){
            if(this.billdate.trim().length==0 || this.duedate.trim().length==0 || this.phone.trim().length==0 || this.cvv2.trim().length==0){
                this.$toast("请将信息填写完整")
                return
            }
            if(this.phone.length!=11){
                this.$toast("请填写11位手机号码")
                 return
            }

            if (parseInt(this.duedate)<10 && this.duedate.length==1){
                this.duedate='0'+this.duedate
            }
             if (parseInt(this.billdate )<10 && this.billdate.length==1){
                this.billdate='0'+this.billdate
            }
           
            this.componentload=true
            let data={
                bindId:this.info.bindId,
                phone:this.phone,
                cvv2:this.cvv2,
                billdate:this.billdate,
                duedate:this.duedate,
             }
             axiosPost("/creditCard/updateCreditCard",data)
             .then(res=>{
                 if(res.data.success){
                     setTimeout(()=>{
                         this.componentload=false
                         this.$toast({
                             message:res.data.message
                         })
                         
                         this.phone=""
                         this.cvv2=""
                         this.billdate=""
                         this.duedate=""
                         this.$router.go(-1)
                     },1000)
                 } else {
                     setTimeout(()=>{
                         this.componentload=false
                         this.$toast({
                             message:res.data.message
                         })

                     },1000)
                 }
             })
            
          
        }
    },
    created () {
        this.info=this.$route.query.info
        this.billdate=this.info.billdate
        this.duedate=this.info.duedate
        this.phone=this.info.phone
        this.cvv2=this.info.cvv2

    }
}
</script>

<style lang="less">
   #dhbind {
       >header {
            background: #4965AE;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           font-size:28px;
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
           >.phone {
               >ul{
                   padding-left:30px;
                   background-color: #fff;
                   >li{
                       display: flex;
                       flex-wrap: nowrap;
                       border-bottom: 1px solid #ccc;
                       padding-top:40px;
                       padding-bottom: 40px;
                       padding-right: 40px;
                       height: 60px;
                       line-height: 60px;
                       color:#000;
                       .code {
                           background-color: #4B66AF;
                           color:#fff;
                           width:150px;
                           text-align: center;
                           margin-left:20px;
                       }
                       .area {
                           margin-right: 20px;
                       }
                       >span {
                           &:nth-of-type(1){
                               font-weight: bold;
                           }
                       }
                       input {
                           border:none;
                           flex: 1;
                           font-size: 30px;
                           text-align: right;

                       }
                       input::-webkit-input-placeholder {
                           font-size: 28px;
                           padding-top: 8px;
                           height: 30px;
                           line-height: 30px;
                       }
                   }
               }
               .van-picker__cancel{
                   font-size:30px;
                   color:#000;
               }
               .van-picker-column__item--selected {
                   color:#4B66AF;
                   font-weight: bold;
               }
               .van-picker__toolbar{
                   height: 40px;
                   line-height: 40px;
                   font-size: 30px;
               }
           }
           >.submit {
               margin-top:30px;
               padding:0 30px;
           }
       }
   }
</style>

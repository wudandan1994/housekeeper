<template>
    <div id="active">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>短信验证</span>
            <span></span>
        </header>
        <div class="container">
           <div class="dx">
               <p>输入短信验证码</p>
               <input type="text" v-model="code" placeholder="短信验证码">
               <div class="button">
                   <van-button size="large" @click="sure" round type="default">确定</van-button>
               </div>
           </div>
        </div>
    </div>

</template>


<script>
import {axiosPost} from '@/lib/http'
import storage from '@/lib/storage'
export default {
    data() {
        return {
            code:"",
            user_no:"",
            info:"",
            ticket:""
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
        sure(){
            if(this.code.trim().length===0){
                this.$toast("请填写验证码")
                return
            }
                let datas={
                        user_no:this.user_no,
                        ticket:this.ticket,
                        smsCode:this.code
                    }
                    axiosPost("/vtdcreditCard/entryCardConfirm",datas)
                    .then(res=>{
                        if(!res.data.success){
                            this.$toast({
                                message:res.data.message
                            })
                        } else {
                            this.$toast({
                                message:res.data.message
                            })
                            setTimeout(()=>{
                            this.$router.push({
                                path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                                query:{
                                    info:this.info
                                }
                            })
                        },1000)
                        }
                    //  console.log(res,"激活res")
                    })
                    .catch(err=>{
                    //  console.dir(err,"激活err")
                    })
            },
          activation(){
             let data = {
                user_no: this.user_no
            }
             axiosPost("/vtdcreditCard/insertEntryCard",data)
             .then(res=>{
                // console.log('success',res);
                if(res.data.success){
                    if(res.data.data.smsVerify==="2"){
                           this.$toast("激活成功")
                            //   storage.set('channel',"2");
                        setTimeout(()=>{
                            this.$router.push({
                                path:"/home/creditHousekeeper/aisleHousekeeper",
                                // query:{
                                //     info:this.info,
                                //  }
                             })
                         },1000)
                    } else if(res.data.data.smsVerify==="1") {
                        // 短信激活
                        this.ticket=res.data.data.ticket
                    }
                   
                } else {
                    if(res.data.code === "1001"){
                        storage.set('channel',"2");
                        setTimeout(()=>{
                            this.$router.push({
                                path:"/home/creditHousekeeper/aisleHousekeeper/repaymentChannel",
                                query:{
                                    info:this.info
                                 }
                             })
                         },1000)
                    }else{
                        this.$toast({
                            message:res.data.message
                        })
                    }
                }
            }).catch(err=>{
                // console.log(err,"err")
            })
        },   
       
    },
    created () {
        // console.log(this);
        this.user_no=this.$route.query.user
        this.activation()
        this.info = this.$route.query.info;
    }
}
</script>

<style lang="less">
   #active {
       >header {
           background: #4B66AF;
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
           .dx {
               padding:30px;
               >p {
                   color:#4B66AF;
                   font-weight: bold;
                   text-align: center;
                   padding:20px 0px;

               }
               >input {
                   border:none;
                   width:100%;
                   height: 80px;
                   margin-top:30px;
                   border:2px solid #ccc;
                   border-radius: 10px;
                   padding-left:15px;
                   box-sizing: border-box;
               }
               >.button {
                   margin-top:100px;
                     .van-button--default{
                       background-color: #4B66AF;
                   }
               }
           }
       }
   }
</style>

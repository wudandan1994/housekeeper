<template>
    <div id="verified-name">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>绑定手机号</span>
            <span></span>
        </header>
        <div class="container">
            <div class="phone-numer">
                <div>
                    <span>手机号：</span>
                    <input type="number" v-model="mobile"  placeholder="请输入手机号">
                </div>
                <div>
                    <span>输入验证码：</span>
                    <p>
                        <input type="number" v-model="authcode" placeholder="请输入验证码">
                        <span @click="getCode"><span v-show="showCount">{{count}}秒后再次</span>获取验证码</span>
                    </p>
                </div>
            </div>
            <div class="at-once" @click="isShow">立即绑定</div>
           
                <van-popup v-model="show">
                    <div class="cover">绑定成功</div>
                </van-popup>
          
          </div>
    </div>

</template>


<script>
import {axiosPost,axiosGet} from '@/lib/http'
export default {
    data() {
        return {
            show:false,
            mobile:"",
            authcode:"",
            count:60,
            showCount:false
        }
    },
    created(){
        
    },
    methods:{
        // 获取验证码
        getCode(){
            console.log(this);
            let that=this
            if(that.mobile.trim().length===0){
                that.$toast({
                    message:"请填写手机号码"
                })
            } else {
                let data={
                    mobile:this.mobile,
                    type:"1"
                }
                axiosPost("/customer/sendSms",data)
                .then(function(res){
                    console.log(that);
                    
                    console.log(res);
                    if(res.data.success) {
                        console.log(252525);
                        that.showCount=true;
                         if(that.showCount){
                        that.count--
                      }
                    }
                    
                })
                .catch(err=>{
                    console.log(err);
                    
                })
               
            }
            
        },
        goBack() {
            this.$router.push('/home')
        },
        isShow() {
            this.show=true
        }
    }
}
</script>

<style lang="less">
   #verified-name {
       >header {
           background: #000;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           z-index:999;
           position: fixed;
           font-size:28px;
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
           >.phone-numer {
               padding-left:30px;
               >div {
                   padding-top:40px;
                   font-size:36px;
                   display: flex;
                   flex-wrap: nowrap;
                   border-bottom: 1px solid #ccc;
                   padding-bottom:40px;
                   &:nth-of-type(2){
                       >p {
                           >input {
                               padding-bottom: 15px;
                           }
                       }
                   }
                   >input {
                       border:none;
                   }
                   >p {
                       flex:1;
                       >input {
                           border:none;
                           width:240px;
                       }
                       >span {
                               color:#fff;
                               background-color: #B39956;
                               padding:15px 10px;
                               border-radius: 10px;
                           }
                   }
               }
           }
           >.at-once {
              color:#fff;
              background-color: #B39A57;
              margin-top:300px;
              text-align: center;
              width:60%;
              margin-left:20%;
              padding:30px 0px;
              border-radius: 10px;
           }
           .cover {
               width:500px;
               text-align: center;
               line-height: 400px;
               border-radius: 10px;
               height: 400px;
               background-color: #fff;
           }
       }
   }
</style>

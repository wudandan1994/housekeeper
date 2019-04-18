 <template>
    <div id="binding-phone">
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
                         <span>
                                <span v-show="showCount">{{count}}秒后获取</span>
                                <span v-show="showCode" @click="getCode">获取验证码</span>
                         </span>
                        
                    </p>
                </div>
            </div>
            <div class="at-once" @click="bindingPhone">立即绑定</div>
           
                <van-popup >
                    <div class="cover">绑定成功</div>
                </van-popup>
          
          </div>
    </div>

</template>

<script>
import {axiosPost} from '@/lib/http'
export default {
    data() {
        return {
            show:false,
            mobile:"",
            authcode:"",
            count:60,
            showCount:false,
            showCode:true,
            timerId:null,
        }
    },
    created(){
        
    },
    methods:{
        // 获取验证码
        getCode(){
            let that=this
            let partten=/^1\d{10}$/
            if(that.mobile.trim().length===0){
              
                
                that.$toast({
                    message:"手机号码不能为空"
                })
                return

            } else if(!partten.test(that.mobile)){
                 that.$toast({
                    message:"请填写11位手机号码"
                })
                 return
            }
            
            else  {
                let data={
                    mobile:this.mobile,
                    type:"1"
                }
                axiosPost("http://pay.91dianji.com.cn/api/customer/sendSms",data)
                .then(function(res){
                    if(!res.data.success){
                        that.$toast({
                            message:res.data.message
                        })
                        return
                    }
                    if(res.data.success) {
                        that.showCount=true
                         that.showCode=false
                    }
                    if(that.showCount){
                        that.timerId=setInterval(function(){
                            that.count--
                            if(that.count<=0){
                                that.showCount=false
                                that.showCode=true
                                that.count=60
                                clearInterval(that.timerId)
                            }
                        },1000)
                    }
                })
                .catch(function (err) {
                //    that.$toast({
                //     message:"请勿重复发送短信"
                //   })
                })
            }
            
        },
        goBack() {
            this.$router.push('/home')
        },
        bindingPhone() {
            let that=this
            let partten=/^1\d{10}$/
            if(this.mobile.trim().length===0){
                 that.$toast({
                    message:"手机号码不能为空"
                })
                return
            }
            if(!partten.test(that.mobile)){
                 that.$toast({
                    message:"请填写11位手机号码"
                })
                 return
            }
            if(that.authcode.trim().length===0){
                that.$toast({
                    message:"验证码不能为空"
                })
                 return
            }
            let data={
                mobile:that.mobile,
                authcode:that.authcode
            }
             axiosPost("http://pay.91dianji.com.cn/api/customer/updateMobile",data)
             .then(function(res){
                 if(res.success){
                      that.$toast({
                    message:"操作成功"
                })
              }
               this.show=true

             })
             .catch(function(err){
                 if(!res.success){
                      that.$toast({
                    message:"操作有误"
                 })
                }
             })
           
        }
    }
}
</script>

<style lang="less">
   #binding-phone {
       >header {
           background-color: #4965AE;
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
                               background-color: #4965AE;
                               padding:15px 10px;
                               border-radius: 10px;
                           }
                   }
               }
           }
           >.at-once {
              color:#fff;
              background-color: #4965AE;
              margin-top:300px;
              text-align: center;
              width:90%;
              margin-left:5%;
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

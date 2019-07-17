 <template>
    <div id="binding-phone">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">修改手机</div>
            <div class="right-icon center"></div>
        </header>
        <div class="phone-numer">
            <div class="per-input row">
                <div class="input-icon"><van-icon color="#4b66af" size="20px" name="phone"/></div>
                <div class="input-title center">手机号</div>
                <div class="safecode"><input type="number" v-model="mobile"  placeholder="请输入手机号"></div>
                <div class="getcode center">
                    <span>
                        <span class="codebtn" @click="change = !change">修改手机</span>
                    </span>
                </div>
                
            </div>
            <div class="per-input row" v-if="change">
                 <div class="input-icon"><van-icon color="#4b66af" size="20px" name="graphic"/></div>
                <div class="input-title center">验证码</div>
                <div class="safecode"><input type="number" v-model="authcode" placeholder="请输入验证码"></div>
                <div class="getcode center">
                    <span>
                        <span class="codebtn" v-show="showCount">{{count}}秒后获取</span>
                        <span class="codebtn" @click="getCode" v-show="showCode">获取验证码</span>
                    </span>
                </div>
                
            </div>
        </div>
        <div id="tips" class="start-center">*验证码有效期为半小时,请勿重复发送</div>
        <div class="at-once">
                <van-button size="large"  @click="bindingPhone" round>立即修改</van-button>
        </div>
        <van-popup >
            <div class="cover">绑定成功</div>
        </van-popup>
        
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
            change: false,
        }
    },
    created(){
        
    },
    methods:{
        // 获取验证码
        getCode(){
            let that=this
            let partten=/0?(13|14|15|16|17|18|19)[0-9]{9}/
            if(!partten.test(that.mobile)){
                 that.$toast({
                    message:"请填写11位手机号码"
                })
            }
            else {
                let data={
                    mobile:this.mobile,
                    type:"1"
                }
                axiosPost("/customer/sendSms",data)
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
            let partten = /0?(13|14|15|16|17|18|19)[0-9]{9}/
            if(this.mobile.trim().length===0){
                 that.$toast({
                    message:"手机号码不能为空"
                })
            }
            else if(!partten.test(that.mobile)){
                 that.$toast({
                    message:"请填写11位手机号码"
                })
            }
            else if(that.authcode.trim().length===0){
                that.$toast({
                    message:"验证码不能为空"
                })
            }
            else{
                let data={
                    mobile:that.mobile,
                    authcode:that.authcode
                };
                axiosPost("/customer/updateMobile",data)
                .then(function(res){
                    if(res.data.success){
                        that.$toast({
                            message:res.data.message
                        })
                        that.$router.push('/home');
                    }else{
                        that.$toast({
                            message:res.data.message
                        })
                    }
                })
                .catch(function(res){
                    that.$toast({
                        message:res.data.message
                    })
                })
            } 
        },
        // 查询是否绑定手机号
        handleCheckMobile(){
            axiosPost('/customer/getCustomer').then(res =>{
                this.mobile = res.data.data.mobile;
            }).catch(res =>{
            })
        }
    },
    created(){
        this.handleCheckMobile();
    }
}
</script>

<style lang="less">
   #binding-phone {
       width: 100vw;
       height: (100vh - 86px);
       padding-top: 86px;
        .phone-numer {
            .per-input{
                width: 95vw;
                height: 100px;
                line-height: 100px;
                margin-left: auto;
                margin-right: auto;
                border-bottom: solid 1px #ccc;
                .input-icon {
                    height: 100%;
                    line-height: 130px;
                    margin:0 5px;
                }
                .input-title{
                    width: 15%;
                    height: 100%;
                    font-size: 30px;
                    font-weight: bold;
                }
                .user-input{
                    margin-left: 5%;
                    width: 80%;
                    height: 100%;
                    input{
                        width: 100%;
                        height: 88%;
                        border: none;
                        background: transparent;
                    }
                    input::-webkit-input-placeholder{
                        padding-top: 5px;
                        font-size: 26px;
                    }
                }
                .safecode{
                    margin-left: 5%;
                    width: 50%;
                    height: 100%;
                    input{
                        width: 100%;
                        height: 88%;
                        border: none;
                        background: transparent;
                    }
                    input::-webkit-input-placeholder{
                        padding-top: 5px;
                        font-size: 26px;
                    }
                }
                .getcode{
                    width: 30%;
                    height: 100%;
                    font-size: 28px;
                    .codebtn{
                        padding: 15px;
                        background: #4b66af;
                        color: white;
                        border-radius: 40px;
                    }
                }
            }
        }
        >.at-once {
            margin-top:100px;
            padding-left:30px;
            padding-right: 30px;
            >button {
                height: 90px;
                font-size: 28px;
            }
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
</style>

<template>
    <div id="page-component-form">
         <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">申请贷款</div>
            <div class="right-icon center"><van-icon color="white" size="20px" name="weapp-nav"/></div>
        </header>
        <!-- 轮播图 -->
        <div class="swipe">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in images" :key="index"><img class="imgs" :src="item" alt=""></van-swipe-item>
          </van-swipe>
        </div>
        <div class="title center">选择或添加申请人信息</div>
        <div class="detail">请确保选择或添加的申请人信息与贷款申请表所填信息保持真实一致，以免影响信用贷款进度；本平台对此信息保密，仅作提交金融机构工作人员审核，审核通知将以短信形式发送至该号码</div>
        <div class="per-input top row">
            <div class="icon end-center"><van-icon name="manager" size="1.5em" /></div>
            <div class="label start-center">姓名</div>
            <div class="user-input"><input type="text" v-model='form.name' class="end-center" placeholder="请填写申请人姓名"/></div>
        </div>

        <div class="per-input  row">
            <div class="icon end-center"><van-icon name="card" size="1.5em" /></div>
            <div class="label start-center">证件</div>
            <div class="user-input"><input type="text" v-model="form.idcardnumber" class="end-center" placeholder="请填写申请人身份证号码"/></div>
        </div>

        <div class="per-input  row">
            <div class="icon end-center"><van-icon name="graphic" size="1.5em" /></div>
            <div class="label start-center">电话</div>
            <div class="user-input"><input type="number" v-model="form.mobile" class="end-center" placeholder="请填写申请人手机号码"/></div>
        </div>

        <div class="per-input  row">
            <div class="icon end-center"><van-icon name="coupon" size="1.5em" /></div>
            <div class="label start-center">验证码</div>
            <div class="user-code"><input type="text" v-model="form.code" class="end-center" placeholder="请输入验证码"/></div>
            <div class="safe-code center" @click="changeCode">{{realCode}}</div>
        </div>

        <div class="btns row">
            <van-button type="default" class="cancel">取消</van-button>
            <van-button type="primary" class="sure" @click="handleSubmit">确认</van-button>
        </div>
        <div class="clause">
            <div class="center"><van-checkbox v-model="checked" @change="handleAgree" shape="square" checked-color="#87682F">阅读并同意<span @click="handleShow">《钱夹宝服务协议》</span></van-checkbox></div>
            <div class="remarks">{{remarks}}</div>
        </div>
        <van-popup class="popup" v-model="show" position="right">
           <div class="pop-clause"> 
               <div class="pop-close end-center"><van-icon name="cross" size="1.5em" @click="handleClose"/></div>
               <div class="pop-title center">钱夹宝服务协议</div>
                <div class="pop-content">
                    1.并返回真的尺寸把日本发酵液杀人回忆雪兆丰年这边支付宝在总不能自动发货香港姊妹系统工具这边支付宝在总不能自动发货香港姊妹系统工具这边支付宝在总不能自动发货香港姊妹系统工具
                这边支付宝在总不能自动发货香港姊妹系统工具<br><br>
                2.并返回真的尺寸把日本发酵液杀人回忆雪兆丰年这边支付宝在总不能自动发货香港姊妹系统工具这边支付宝在总不能自动发货香港姊妹系统工具这边支付宝在总不能自动发货香港姊妹系统工具
                这边支付宝在总不能自动发货香港姊妹系统工具<br><br>
                3.并返回真的尺寸把日本发酵液杀人回忆雪兆丰年这边支付宝在总不能自动发货香港姊妹系统工具这边支付宝在总不能自动发货香港姊妹系统工具这边支付宝在总不能自动发货香港姊妹系统工具
                这边支付宝在总不能自动发货香港姊妹系统工具<br><br>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
import {axiosPost} from '@/lib/http'
export default {
    data(){
        return{
            fixed: true,
            images:[
                'http://pay.91dianji.com.cn/01.png',
                'http://pay.91dianji.com.cn/02.jpg',
                'http://pay.91dianji.com.cn/04.png',
                'http://pay.91dianji.com.cn/06.jpg',
                'http://pay.91dianji.com.cn/08.jpg'
            ],
            form:{
                name: '',
                idcardnumber: '',
                mobile: '',
                code: ''
            },
            checked: false,
            show: false,
            remarks: '注:在钱夹宝申请贷款一律不收取任何费用，如有向您索要手续费的请拨打111-222-3333向平台举报',
            codeLength: 4,
            realCode: ''
        }
    },
    methods:{
        // 返回首页
        handleReturnHome(){
            this.$router.push({
                path:'/loan/detail'
            })
        },
        // 更多
        handleMore(){
            this.$toast('尽请期待');
        },
        // 钱夹宝服务协议
        handleShow(){
            this.show = true;
        },
        // 关闭协议弹窗
        handleClose(){
            this.show = false;
        },
        // 验证码
        safeCode(){
            var codeLength = this.codeLength;
            var ran = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z')
            for(var i = 0; i < codeLength; i++ ){
                var index = Math.floor(Math.random()*36);
                this.realCode += ran[index];
            }
            
        },
        // 切换验证码
        changeCode(){
            this.realCode = '';
            this.safeCode();
        },
        // 服务条款
        handleAgree(val){
        },
        // 表单提交
        handleSubmit(){
           if(this.form.name == ''){
               this.$toast('请填写申请人姓名');
           }else if(this.form.idcardnumber == ''){
               this.$toast('请填写申请人身份证号')
           }else if(this.form.mobile == ''){
               this.$toast('请填写申请人手机号');
           }else if(this.form.code == '' || this.form.code != this.realCode){
               this.$toast('请检查验证码');
           }else if(this.checked == false){
               this.$toast('请阅读并同意服务协议');
           }
           else{
               let data={
                   realName:this.form.name,
                   mobile:this.form.mobile,
                   certcode:this.form.idcardnumber
               }
               axiosPost("http://pay.91dianji.com.cn/api/creditCard/getLoanUrl",data)
              
               .then(function(res){
                   if(!res.data.success){
                       this.$toast({
                           message:res.data.message
                       })
                       return
                   }
                    location.href=res.data.data
               })
               .catch(function(err){
                   
               })
           }
        }
    },
    created(){
        this.safeCode();
    }
}
</script>
<style lang="less" scoped>
    #page-component-form{
        width: 100vw;
        height: auto;
        padding-top: 86px;
        .swipe{
            width: 100vw;
            height: auto;
            .imgs{
                width: 100vw;
                height: 400px;
            }
        }
        .title{
            width: 100vw;
            height: 100px;
            font-size: 32px;
            font-weight: 600;
            margin-top: 30px;
        }
        .detail{
            width: 90vw;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            padding: 20px;
            line-height: 40px;
            color: #4B66AF;
            font-size: 26px;
            background: #F5F5F4;
            -moz-box-shadow:0px 0px 15px #999 inset;               /* For Firefox3.6+ */
            -webkit-box-shadow:0px 0px 15px #999 inset;            /* For Chrome5+, Safari5+ */
            box-shadow:0px 0px 15px #999 inset;   
        }
        .top{
            margin-top: 30px;
        }
        .per-input {
            width: 100vw;
            height: 80px;
            .icon{
                width:8vw;
                height: 100%;
            }
            .label{
                width: 10vw;
                height: 100%;
                font-weight: 600;
                font-size: 26px;
                margin-left: 2vw;
            }
            .user-input{
                width: 75vw;
                height: 100%;
                >input::-webkit-input-placeholder{
                    font-size:24px;
                    padding-top: 10px;
                }
                >input{
                    width: 100%;
                    height: 99%;
                    border: none;
                    text-align: right;
                    font-size: 26px;
                }
            }
            .user-code{
                width: 50vw;
                height: 100%;
               input::-webkit-input-placeholder{
                    font-size:24px;
                    padding-top: 10px;
                }
                >input{
                    width: 100%;
                    height: 92%;
                    border: none;
                    font-size: 26px;
                    text-align: right;
                }
            }
            .safe-code{
                width: 25vw;
                height: 100%;
                margin-left: 2vw;
                font-size: 30px;
                letter-spacing: 5px;
                background: #F7F8FC;
                color: #236B8F;
                font-weight: 700;
            }
        }
        .btns{
            width: 85vw;
            height: 100px;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
            .cancel{
                width: 70%;
                height: 100%;
                background: #CACACA;
                color: white;
                font-size: 30px;
                border-radius: 10px;
                border: none;
            }
            .sure{
                width: 70%;
                height: 100%;
                margin-left: 10%;
                background: #4B66AF;
                color: white;
                font-size: 30px;
                border-radius: 10px;
                border: none;
            }
        }
        .clause{
            width: 100vw;
            height: 100px;
            margin-top: 50px;
            padding-top: 40px;
            padding-bottom: 50px;
            background: #F7F6FB;
            span{
                color: #4B66AF;
            }
            .remarks{
                width: 90vw;
                height: auto;
                margin-left: auto;
                margin-right: auto;
                margin-top: 40px;
                line-height: 40px;
            }
        }
        .popup{
            .pop-clause{
                width: 100vw;
                height: 100vh;
                background: white;
                .pop-close{
                    width: 98vw;
                    height: 50px;
                }
                .pop-title{
                    font-size: 35px;
                    font-weight: 700;
                    color: #4B66AF;
                }
                .pop-content{
                    padding: 5vw;
                    line-height: 40px;
                }
            }
        }
    }
</style>

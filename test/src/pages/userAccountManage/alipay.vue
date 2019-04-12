<template>
    <div id="page-alipay">
        <header class="manage loan">
            <van-nav-bar title="添加支付宝" left-text="返回" left-arrow @click-left="handleReturnHome" @click-right="handleMore">
                <van-icon name="weapp-nav" slot="right" />
            </van-nav-bar>
        </header>
        <div class="user-input row">
            <div class="title start-center">真实姓名</div>
            <div class="input start-center"><input type="text" placeholder="请填写支付宝姓名"></div>
        </div>
        <div class="user-input row">
            <div class="title start-center">支付宝账号</div>
            <div class="input start-center"><input type="text" placeholder="请填写支付宝账号"></div>
        </div>
        <div class="user-input top row">
            <div class="title start-center">手机号</div>
            <div class="input start-center"><input type="number" placeholder="请填写支付宝绑定的手机号"></div>
        </div>
        <div class="user-input row">
            <div class="title start-center">验证码</div>
            <div class="safe-code start-center"><input type="number" placeholder="请填写您收到的验证码"></div>
            <div class="get-code center" @click="handleSafeCode"><div>{{title}}</div></div>
        </div>
        <div class="next-stop center">下一步</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title: '获取验证码'
        }
    },
    methods:{
        handleReturnHome(){
            this.$router.push({
                path:'/personalCenter/incomedetail/addcard'
            })
        },
        // 更多
        handleMore(){
            this.$toast('尽请期待');
        },
        // 获取验证码
        handleSafeCode(){
            console.log('title',this.title);
            if(this.title == '获取验证码'){
                let num = 60;
                let codetitle = '';
                let timer = setInterval(() => {
                    num = num - 1;
                    codetitle = '已发送' + '(' + num + ' s)';
                    this.title = codetitle
                    // console.log(this.title)
                }, 1000)
                setTimeout(() => {
                    clearInterval(timer);
                    this.title = '获取验证码';
                }, 60000)
            }else{
                this.$toast('验证码已发送，请勿重复操作');
            }
        }
    }    
}
</script>
<style lang="less" scoped>
    #page-alipay{
        background: #EEEFF1;
        width: 100vw;
        height: 100vh;
        .top{
            margin-top: 20px;
        }
        .user-input{
            width: 100%;
            height: 100px;
            background: white;
            .title{
                width: 25vw;
                height: 90%;
                margin-top: 10px;
                margin-left: 5vw;
                font-weight: bold;
                font-size: 0.4rem;
            }
            .input{
                width: 70vw;
                height: 100%;
                >input{
                    width: 100%;
                    height: 90%;
                    margin-top: 5px;
                    border: none;
                }
            }
            .safe-code{
                width: 40vw;
                height: 100%;
                 >input{
                    width: 100%;
                    height: 90%;
                    margin-top: 5px;
                    border: none;
                }
            }
            .get-code{
                width: 30vw;
                height: 100%;
                >div{
                    background: #8C6C2A;
                    color: white;
                    padding: 15px;
                    border-radius: 10px;
                }
            }
        }
        .next-stop{
            width: 60vw;
            height: 100px;
            margin-left: auto;
            margin-right: auto;
            background: #8C6C2A;
            color: white;
            margin-top: 50px;
            border-radius: 20px;
        }
    }
</style>

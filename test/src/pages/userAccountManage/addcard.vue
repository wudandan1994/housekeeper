<template>
    <div id="add-card">
        <header class="manage loan">
            <van-nav-bar title="银行卡管理" left-text="返回" left-arrow @click-left="handleReturnHome" @click-right="handleMore">
                <van-icon name="weapp-nav" slot="right" />
            </van-nav-bar>
        </header>
        <div class="personal row">
            <div class="avator center"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553937143739&di=6455bedd462d2fd8679cece7475fe8a0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F22%2F20170622131955_h4eZS.thumb.700_0.jpeg" alt=""></div>
            <div class="name-code">
                <div class="name row">
                    <div class="start-center">Giovanni</div>
                    <div class="center">实习</div>
                </div>
                <div class="code start-center">推荐码：25489658</div>
            </div>
            <div class="status center">(未绑定)</div>
        </div>
        <router-link tag="div" to="/personalCenter/addcard/UnionPay" class="UnionPay row">
            <div class="pay-icon end-center"> <svg class="icon" aria-hidden="true"><use xlink:href="#icon-pay-unionpay"></use></svg></div>
            <div class="add-icon center"><van-icon name="plus"/></div>
            <div class="add-title start-center">添加银行卡</div>
            <div class="more-icon center"><van-icon name="arrow"/></div>
        </router-link>
        <router-link tag="div" to="/personalCenter/addcard/alipay" class="UnionPay row">
            <div class="pay-icon end-center"><van-icon name="alipay" color="#0398E2"/></div>
            <div class="add-icon center"><van-icon name="plus"/></div>
            <div class="add-title start-center">添加支付宝</div>
            <div class="more-icon center"><van-icon name="arrow"/></div>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    methods:{
         // 返回首页
        handleReturnHome(){
            this.$router.push({
                path:'/personalCenter/incomedetail/integralCash'
            })
        },
        // 更多
        handleMore(){
            this.$toast('尽请期待');
        },
        // 绑定银行卡
        handleAddCard(){

        }
    }
}
</script>
<style lang="less" scoped>
    #add-card{
        width: 100vw;
        height: 100vh;
        background: #EEEFF1;
        .loan {
            height: 86px;
            line-height: 86px;
            font-size: 36px;

        }
        .personal{
            width: 100vw;
            height: 120px;
            background: white;
            .avator{
                width: 120px;
                height: 100%;
                img{
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                }
            }
            .name-code{
                width: 60%;
                height: 100%;
                .name{
                    width: 100%;
                    height: 40%;
                    margin-top: 12px;
                    div:nth-child(1){
                        width: auto;
                        height: 100%;
                    }
                    div:nth-child(2){
                        width: auto;
                        height: 100%;
                        margin-left: 30px;
                    }
                }
                .code{
                    width: 100%;
                    height: 50%;
                }
            }
            .status{
                width: auto;
                height: 100%;
            }
        }
        .UnionPay{
            width: 100%;
            height: 100px;
            background: white;
            margin-top: 20px;
            .pay-icon{
                width: 10%;
                height: 100%;
                font-size: 35px;
            }
            .add-icon{
                width: 5%;
                height: 100%;
            }
            .add-title{
                width: 75%;
                height: 100%;
            }
            .more-icon{
                width: 10%;
                height: 100%;
            }
        }
    }
</style>

<template>
    <div id="page-recharge">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="end-center"><van-icon name="friends-o" color="#fff" size="28px"/></span>
            </div>
        </header>
        <div class="tips start-center">请选择您要查看油卡的行驶证，并点击确定</div>
        <div class="list" :class="active == '0' ? 'active' : ''" @click="handleChecked('0')">
            <div class="per-detail">
                <div>所有人</div>
                <div>小明</div>
            </div>
            <div class="per-detail">
                <div>车牌号码</div>
                <div>京AA5599</div>
            </div>
            <div class="per-detail">
                <div>车辆识别代号</div>
                <div>HHGHH555778802669</div>
            </div>
            <div class="per-detail">
                <div>发动机号码</div>
                <div>1122444</div>
            </div>
        </div>
        <div class="list" :class="active == '1' ? 'active' : ''" @click="handleChecked('1')">
            <div class="per-detail">
                <div>所有人</div>
                <div>小明</div>
            </div>
            <div class="per-detail">
                <div>车牌号码</div>
                <div>京AA5599</div>
            </div>
            <div class="per-detail">
                <div>车辆识别代号</div>
                <div>HHGHH555778802669</div>
            </div>
            <div class="per-detail">
                <div>发动机号码</div>
                <div>1122444</div>
            </div>
        </div>
        <div class="submit center" @click="handleSubmit"><button>确定</button></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active: '0',
        }
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        },
        handleChecked(item){
            this.active = item;
        },
        handleSubmit(){
            this.$router.push('/RechargeList');
        }
    }
}
</script>
<style lang="less" scoped>
#page-recharge{
    width: 100vw;
    padding-top: 86px;
    height: calc(100vh - 86px);
    background:rgba(248,248,248,1);
    header{
        width: 100%;
        height: 86px;
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        background: rgba(60, 60, 60, 0.9);
        .top{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 0px 20px;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            line-height: 86px;
            span{
                font-size: 30px;
                color: #ffffff;
            }
        }
    }
    .tips{
        width: 90%;
        height: 80px;
        font-size: 32px;
        color: #666;
        margin: auto;
    }
    .list{
        width: 92%;
        height: auto;
        margin: 0px auto 40px auto;
        background: rgba(235, 235, 235, 0.5);
        box-shadow: 0px 0px 1px 1px rgba(232,232,232,1);
        border-radius: 16px;
        .per-detail{
            width: 100%;
            height: 100px;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 0px 20px;
            >div:nth-child(1){
                font-size: 32px;
                color: #666666;
            }
            >div:nth-child(2){
                font-size: 32px;
                color: #000000;
            }
        }
    }
    .active{
        background: #fff;
    }
    .submit{
        width: 92%;
        height: 100px;
        margin: 80px auto auto auto;
        button{
            width: 100%;
            height: 100%;
            background: #E5E5E5;
            color: #fff;
            font-size: 38px;
            border: none;
            border-radius: 50px;
        }
    }
}
</style>

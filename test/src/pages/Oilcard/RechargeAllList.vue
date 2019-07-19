<template>
    <div id="page-rechargedetail">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="center">充值详情</span>
                <span class="end-center"><van-icon name="friends-o" color="#fff" size="28px"/></span>
            </div>
        </header>
        <div class="list-container">
            <div class="per-recharge">
                <div>2019年07月10日 14：00</div>
                <div>500元</div>
                <div>中石油</div>
                <div>已充值</div>
            </div>
            <div class="per-recharge">
                <div>2019年07月10日 14：00</div>
                <div>500元</div>
                <div>中石油</div>
                <div>已充值</div>
            </div>
            <div class="per-recharge">
                <div>2019年07月10日 14：00</div>
                <div>500元</div>
                <div>中石油</div>
                <div>已充值</div>
            </div>
            <div class="per-recharge">
                <div>2019年07月10日 14：00</div>
                <div>500元</div>
                <div>中石油</div>
                <div>已充值</div>
            </div>
            <div class="per-recharge">
                <div>2019年07月10日 14：00</div>
                <div>500元</div>
                <div>中石油</div>
                <div>已充值</div>
            </div>
            <div class="per-recharge">
                <div>2019年07月10日 14：00</div>
                <div>500元</div>
                <div>中石油</div>
                <div>已充值</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        },
    }    
}
</script>
<style lang="less" scoped>
#page-rechargedetail{
    width: 100vw;
    padding-top: 86px;
    height: calc(100vh - 86px);
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
            >span:nth-child(1),>span:nth-child(3){
                width: 15%;
                font-size: 30px;
                color: #ffffff;
            }
            >span:nth-child(2){
                width: 70%;
                height: 100%;
                font-size: 30px;
                color: #fff;
            }
        }
    }
    .list-container{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        .per-recharge{
            width: 90%;
            height: 100px;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            align-items: center;
            margin: auto;
            font-size: 28px;
            color: #4F4F4F;
        }
    }
}
</style>

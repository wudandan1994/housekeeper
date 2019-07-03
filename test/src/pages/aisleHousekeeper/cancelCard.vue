<template>
    <div id="page_cancelCard">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">解绑卡</div>
            <div class="right-icon center"></div>
        </header>
        <div class="per_card" v-for="(item,index) in form" :key="index">
            <div class="name">{{item.payerName}}</div>
            <div class="cardNo">{{item.cardNo}}</div>
            <div class="back" @click="handleBack(item.bindId)">恢复</div>
        </div>
    </div>    
</template>
<script>
import { axiosPost } from '../../lib/http';
export default {
    data(){
        return{
            form: [],
        }
    },
    methods: {
        handleReturnHome(){
            this.$router.go(-1);
        },
        // 恢复信用卡列表
        handleDeletedCreditCard(){
            axiosPost('/creditCard/getDeletedCreditCard').then(res =>{
                console.log('请求成功',res);
                if(res.data.data.length == '0'){
                    this.$toast('您没有待恢复的信用卡');
                    setTimeout(()=>{
                        this.$router.go(-1);
                    },3000)
                }
                this.form = res.data.data;
            }).catch(res =>{
                console.log('请求失败',res);
            })
        },
        // 恢复信用卡
        handleBack(obj){
            let params = {
                bindId: obj
            };
            axiosPost('/creditCard/updateCreditCardByBack',params).then(res =>{
                console.log('恢复成功');
                if(res.data.success){
                    this.$toast('恢复成功');
                    this.handleDeletedCreditCard();
                }else{
                    this.$toast('恢复失败');
                }
            }).catch(res =>{
                this.$toast('恢复失败');
            })
        }
    },
    created(){
        this.handleDeletedCreditCard();
    }
}
</script>
<style lang="less" scoped>
#page_cancelCard{
    width: 100vw;
    height: calc(100vh - 86px);
    padding-top: 86px;
    .per_card{
        width: 95%;
        height: 200px;
        margin: 30px auto auto auto;
        position: relative;
        z-index: 1;
        color: #fff;
        background: #4b66af;
        border-radius: 15px;
        .name{
            position: absolute;
            z-index: 2;
            top: 18%;
            left: 10%;
            font-size: 36px;
            font-weight: 700;
            color: #fff;
        }
        .cardNo{
            position: absolute;
            z-index: 2;
            top: 60%;
            left: 10%;
            font-size: 32px;
            font-weight: 700;
        }
        .back{
            position: absolute;
            z-index: 2;
            bottom: 20px;
            right: 20px;
            font-size: 26px;
            text-decoration: underline;
            color: red;
        }
    }
}
</style>

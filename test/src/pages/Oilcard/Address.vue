<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-09 11:04:05
 * @LastEditTime: 2019-08-21 18:06:20
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="page-address">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="end-center"><van-icon name="friends-o" color="#fff" size="28px"/></span>
            </div>
        </header>
        <div class="big-title row">
            <div class="start-end">完善信息</div>
            <div class="start-end">我们会把油卡快递到该地址</div>
        </div>
        <div class="input-list">
            <div class="per-input">
                <div class="start-center">姓名</div>
                <div><input type="text" v-model="params.name" placeholder="请输入收件人姓名"/></div>
            </div>
            <div class="per-input">
                <div class="start-center">手机号</div>
                <div><input type="text" v-model="params.mobile" placeholder="请输入收件人手机号"/></div>
            </div>
            <div class="per-input">
                <div class="start-center">具体地址</div>
                <div></div>
            </div>
        </div>
        <div class="address center">
            <textarea cols="30" rows="10" v-model="params.address" placeholder="请输入收件具体地址"></textarea>
        </div>
        <div class="submit center" @click="handleSubmit"><button>确定</button></div>
        <div class="success" v-if="success">
            <div class="tips">
                请等待后台审核，审核通过后我们会将油卡送至该地址，请您注意查收，并在收到油卡后点击“收到油卡”来激活您的油 卡。油卡成功激活后圈存即可正常使用！
            </div>
            <div class="close center" @click="success = false">知道了</div>
        </div>
    </div>
</template>
<script>
import { CommonPost } from '@/lib/http'
export default {
    data(){
        return{
            success: false,
            params: {
                name: '',
                mobile: '',
                address: '',
                parentNo: '',
            }
        }
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        },
        // 提交地址信息
        handleSubmit(){
            if(this.params.name == ''){
                this.$toast('请填写姓名');
            }
            else if(!(/^1[3456789]\d{9}$/.test(this.params.mobile))){
                this.$toast('请填写正确的手机号');
            }
            else if(this.params.address == ''){
                this.$toast('请填写具体地址');
            }else{
               CommonPost('/gasCard/addAddress',this.params).then(res =>{
                   console.log('成功',res);
                   this.$toast('添加成功');
               }).catch(res =>{
                   console.log('失败',res);
                   this.$toast(res.data.message);
               }) 
            }
        }
    },
    created(){
        this.params.parentNo = this.$route.query.parentNo;
    }            
}
</script>
<style lang="less" scoped>
#page-address{
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
            span{
                font-size: 30px;
                color: #ffffff;
            }
        }
    }
    .big-title{
        width: 90%;
        height: 100px;
        margin: 20px auto auto auto;
        >div:nth-child(1){
            font-size: 40px;
            font-weight: 700;
        }
        >div:nth-child(2){
            margin-left: 20px;
            font-size: 26px;
            color: #666666;
        }
    }
    .input-list{
        width: 90%;
        height: auto;
        margin: 100px auto auto auto;
        .per-input{
            width: 100%;
            height: 120px;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            border-bottom: solid 1px #E3E3E3;
            >div:nth-child(1){
                width: 25%;
                height: 100%;
                font-size: 32px;
                color: #666666;
            }
            >div:nth-child(2){
                width: 75%;
                height: 100%;
                font-size: 32px;
                color: #666666;
                input{
                    width: 100%;
                    height: 85%;
                    text-align: right;
                    border: none;
                }
                input::-webkit-input-placeholder{
                    padding-top: 10px;
                    font-size: 28px;
                }
            }
        }
    }
    .address{
        width: 90%;
        height: 254px;
        margin: 50px auto;
        background: #FCFCFC;
        color: #333;
        textarea{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 15px;
            font-size: 28px;
            background: transparent;
            border-radius: 16px;
        }
    }
    .submit{
        width: 90%;
        height: 100px;
        margin: 20px auto auto auto;
        button{
            width: 100%;
            height: 100%;
            color: #fff;
            font-size: 38px;
            border: none;
            border-radius: 50px;
            background: rgba(146,164,216,1);
        }
    }
    .success{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top:0;
        left: 0;
        z-index: 2;
        background:rgba(0,0,0,0.5);
        .tips{
            background: #fff;
            width: 85vw;
            height: auto;
            box-sizing: border-box;
            margin: 30vh auto auto auto;
            padding: 50px;
            font-size: 36px;
            line-height: 60px;
            color: #000;
            text-align: justify;
        }
        .close{
            width: 30vw;
            height: 100px;
            background: #fff;
            color: #000;
            margin: 150px auto auto auto;
            border-radius: 48px;
            font-size: 36px;
        }
    }
}
</style>


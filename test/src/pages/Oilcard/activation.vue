<template>
    <div id="page-activation">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="end-center"><van-icon name="friends-o" color="#fff" size="28px"/></span>
            </div>
        </header>
        <div class="per-list shiyou">
            <div class="top">
                <span>油卡类型</span>
                <span>中石油</span>
            </div>
            <div class="middle center">
                ******************
            </div>
            <div class="bottom center">
                待激活
            </div>
        </div>
        <div class="buied-detail">
            <div class="big-title start-center">已购油卡详情</div>
            <div class="per-detail">
                <div>选购产品</div>
                <div class="shiyou center">中石油</div>
            </div>
            <div class="per-detail">
                <div>购买额度</div>
                <div class="price center">1000元</div>
            </div>
            <div class="per-detail">
                <div>启用方式</div>
                <div class="mode">领卡激活后圈存使用</div>
            </div>
            <div class="activation center"><input type="text" v-model="params.uid" placeholder="请输入16位油卡号来激活油卡"/></div>
            <div class="activation center"><input type="text" v-model="params.ext1" placeholder="请输入您的手机号"/></div>
            <div class="submit center" @click="handleAvation"><button>激活油卡</button></div>
        </div>
    </div>
</template>
<script>
import { CommonPost } from '@/lib/http'
export default {
    data(){
        return{
            params: {
                uid: '',
                ext1: '',
                gascardId: '',
                type: '',
                itemPrice: '1000',
                amt: '1',
                gascardOrderNo: ''
            }
        }
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        },
        // 激活
        handleAvation(){
            if(this.params.uid == ''){
                this.$toast('请输入油卡号');
            }
            else if(!(/^1[3456789]\d{9}$/.test(this.params.ext1))){
                this.$toast('请输入正确的手机号');
            }
            else{
                CommonPost('/gasCard/newChange',this.params).then(res =>{
                    console.log('激活成功',res);
                    this.$toast('激活成功');
                    setTimeout(() =>{
                        this.$router.push({
                            path: '/RechargeList'
                        })
                    },3000);
                }).catch(res =>{
                    this.$toast(res.data.message);
                })
            }
        }
    },
    created(){
        this.params.gascardId = this.$route.query.gascardId;
        this.params.type = this.$route.query.type;
        this.params.gascardOrderNo = this.$route.query.gascardOrderNo;
    }
}
</script>
<style lang="less" scoped>
#page-activation{
    width: 100vw;
    padding-top: 86px;
    height: calc(100vh - 86px);
    background:#F5F5F5;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
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
    .per-list{
        width: 92%;
        height: 340px;
        border-radius: 40px;
        margin: 40px auto;
        .top{
            width: 90%;
            height: 30%;
            margin: auto;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            align-items: center;
            font-size: 28px;
            color: #fff;
        }
        .middle{
            width: 90%;
            height: 40%;
            margin: auto;
            font-size: 40px;
            color: #fff;
            letter-spacing: 12px;
            box-sizing: border-box;
            padding: 0px 20px;
        }
        .bottom{
            width: 90%;
            height: 30%;
            margin: auto;
            font-size: 28px;
            color: #fff;
            span{
                width: 128px;
                height: 64px;
                border-radius: 10px;
                box-shadow: 0px 0px 1px 1px #fff;
                font-size: 36px;
            }
        }
    }
    .shihua{
        background:rgba(225,135,55,1);
    }
    .shiyou{
        background:rgba(190,2,2,1);
    }
    .buied-detail{
        width: 100vw;
        height: calc(100vh - 506px);
        box-shadow:0px 0px 8px 2px rgba(216,216,216,0.5);
        border-radius:16px 16px 0px 0px;
        border:1px solid rgba(255,255,255,1);
        background: #fff;
        .big-title{
            width: 92%;
            height: 100px;
            margin: auto;
            border-bottom: solid 1px #EFEFEF;
            font-size: 36px;
            color: #000000;
            font-weight: 700;
        }
        .per-detail{
            width: 92%;
            height: 100px;
            margin: auto;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            align-items: center;
            >div:nth-child(1){
                font-size: 32px;
                color: #888888;
            }
            .shiyou{
                width: 138px;
                height: 68px;
                background:rgba(204,55,55,1);
                border-radius: 12px;
                border:1px solid rgba(216,101,101,1);
                color: #fff;
            }
            .price{
                width: 140px;
                height: 62px;
                background:linear-gradient(180deg,rgba(255,176,9,1) 0%,rgba(245,205,60,1) 100%);
                border-radius: 12px;
                font-size: 28px;
                color: #000;
            }
            .mode{
                color: #000;
                font-size: 32px;
            }
        }
        .activation{
            width: 92%;
            height: 100px;
            margin: 20px auto;
            input{
                width: 100%;
                height: 100%;
                border-top: none;
                border-left: none;
                border-right: none;
                border-bottom: solid 1px #EFEFEF;
                text-align: center;
                letter-spacing: 8px;
                font-size: 28px;
            }
            input::-webkit-input-placeholder{
                padding-top: 8px;
            }
        }
        .submit{
            width: 92%;
            height: 100px;
            margin: 20px auto;
            button{
                width: 100%;
                height: 100%;
                border-radius: 50px;
                color: #fff;
                font-size: 38px;
                border: none;
                background: rgba(146,164,216,1);
            }
        }
    }
}
</style>
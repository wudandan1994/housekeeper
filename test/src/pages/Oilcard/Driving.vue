<template>
    <div id="page-detail">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="center">行驶证</span>
                <span class="end-center"><van-icon name="friends-o" color="#fff" size="28px"/></span>
            </div>
        </header>
        <div class="big-title start-center">上传行驶证照片</div>
        <div class="upload center">
            <div>
                <van-icon name="photograph" color="#979797" size="2rem"/>
                <img v-if="uploaded" src="" alt="">
            </div>
        </div>
        <div class="person-detail">
            <div class="per-detail">
                <div class="title start-center">所有人</div>
                <div class="input end-center"><input type="text" v-model="name" placeholder="请输入您的行驶证姓名"/></div>
            </div>
            <div class="per-detail">
                <div class="title start-center">车牌号码</div>
                <div class="input end-center"><input type="text" v-model="carNo" placeholder="请输入您的车牌号码"/></div>
            </div>
            <div class="per-detail">
                <div class="title start-center">车辆识别代号</div>
                <div class="input end-center"><input type="text" v-model="distinguishNo"  placeholder="请输入您的车辆识别代号"/></div>
            </div>
            <div class="per-detail">
                <div class="title start-center">发动机号码</div>
                <div class="input end-center"><input type="text" v-model="engineNo" placeholder="请输入您的发动机号码"/></div>
            </div>
        </div>
        <div class="submit center"><button>确定</button></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uploaded: false,
            name: '',
            carNo: '',
            distinguishNo: '',
            engineNo: ''
        }
    },
    methods: {
        handleBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
#page-detail{
    padding-top: 86px;
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
        width: 92%;
        height: 100px;
        border-bottom: solid 1px rgba(227, 227, 227, 1);
        margin: 20px auto auto auto;
        font-size: 32px;
        color: rgba(102, 102, 102, 1);
    }
    .upload{
        width: 85%;
        height: 316px;
        background:rgba(248,248,248,1);
        margin: 20px auto auto auto;
    }
    .person-detail{
        width: 89%;
        height: auto;
        margin: auto;
        .per-detail{
            width: 100%;
            height: 120px;
            border-bottom: solid 1px rgba(227, 227, 227, 1);
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            .title{
                font-size: 32px;
                color: #666666;
            }
            .input{
                input{
                    font-size: 28px;
                    text-align: right;
                    padding-right: 5px;
                    border: none;
                }
                input::-webkit-input-placeholder{
                    font-size: 28px;
                    padding-top: 8px;
                }
            }
        }
    }
    .submit{
        width: 92%;
        height: 100px;
        margin: 40px auto auto auto;
        button{
            width: 100%;
            height: 100%;
            background: rgba(229, 229, 229, 1);
            color: #ffffff;
            border: none;
            border-radius: 50px;
            font-size: 38px;
        }
    }
}
</style>



<template>
    <div id="page-collar">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="end-center"><van-icon name="friends-o" color="#fff" size="28px"/></span>
            </div>
        </header>
        <div class="example">
            <div class="top">
                <span>油卡类型</span>
                <span>中石油</span>
            </div>
            <div class="middle center">12347*******9689</div>
            <div class="bottom center">示例油卡</div>
        </div>
        <div class="buy-detail">
            <div class="title start-center">选购详情</div>
            <div class="per-detail">
                <div class="start-center">选购产品</div>
                <div class="end-center">
                    <div class="center" :class="shiyou == true ? 'product-active' : 'product-normal'" @click="handleCheckProduct('shiyou')">中石油</div>
                    <div class="center" :class="shihua == true ? 'product-active' : 'product-normal'" @click="handleCheckProduct('shihua')">中石化</div>
                </div>
            </div>
            <div class="per-detail">
                <div class="start-center">购买额度</div>
                <div class="end-center">
                    <div class="center" :class="checked == '1' ? 'price-active' : 'price-normal'" @click="handleCheckPrice('1')">1000元</div>
                    <div class="center" :class="checked == '2' ? 'price-active' : 'price-normal'" @click="handleCheckPrice('2')">5000元</div>
                    <div class="center" :class="checked == '3' ? 'price-active' : 'price-normal'" @click="handleCheckPrice('3')">8000元</div>
                </div>
            </div>
            <div class="per-detail">
                <div class="start-center">启用方式</div>
                <div class="end-center">领卡激活后圈存使用</div>
            </div>
            <router-link tag="div" to="/youKaPay" class="submit center"><button>立即领卡</button></router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            shihua: false,
            shiyou: true,
            checked: '1',
        }
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        },
        // 选择产品
        handleCheckProduct(item){
            // console.log('选中产品',item);
            if(item == 'shiyou'){
                this.shiyou = !this.shiyou;
            }else{
                this.shihua = !this.shihua;
            }
        },
        // 选择充值金额
        handleCheckPrice(item){
            this.checked = item;
        }
    }
}
</script>
<style lang="less" scoped>
#page-collar{
    width: 100vw;
    padding-top: 86px;
    height: calc(100vh - 86px);
    background: rgba(248,248,248,1);
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
    .example{
        width: 90vw;
        height: 25.5vh;
        background: rgba(190, 2, 2, 1);
        color: #fff;
        margin: 50px auto;
        opacity:0.62;
        border-radius: 40px;
        box-sizing: border-box;
        .top{
            width: 90%;
            height: 30%;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            align-items: center;
            margin: auto;
            font-size: 28px;
            letter-spacing: 2px;
        }
        .middle{
            width: 95%;
            height: 40%;
            margin: auto;
            font-size: 40px;
            text-align: justify;
            letter-spacing: 20px;
        }
        .bottom{
            width: 95%;
            height: 30%;
            margin: auto;
            font-size: 40px;
            font-size: 34px;
            letter-spacing: 5px;
        }
    }
    .buy-detail{
        width: 100%;
        height: calc(74.5vh - 186px);
        background: #ffffff;
        border-radius: 16px 16px 0px 0px;
        .title{
            width: 92%;
            height: 100px;
            border-bottom: solid 1px rgba(239, 239, 239, 1);
            margin: auto;
            box-sizing: border-box;
            padding-left: 20px;
            color: rgba(0, 0, 0, 1);
            font-size: 36px;
            font-weight: 700;
        }
        .per-detail{
            width: 86%;
            height: 120px;
            border-bottom: solid 1px rgba(239, 239, 239, 1);
            margin: auto;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            >div:nth-child(1){
                width: 25%;
                height: 100%;
                color: #888888;
                font-size: 32px;
            }
            >div:nth-child(2){
                width: 75%;
                height: 100%;
                color: #000000;
                font-size: 32px;
                >div{
                    width: 30%;
                    height: 68px;
                    margin-right: 10px;
                    border-radius: 12px;
                }
                .product-normal{
                    background: #E18737;
                    color: #ffffff;
                    font-size: 32px;
                }
                .product-active{
                    background:rgba(204,55,55,1);
                    color: #ffffff;
                    font-size: 32px;
                }
                .price-normal{
                    border-radius: 6px;
                    box-shadow: 0px 0px 1px  1px  #FEC808;
                    font-size: 28px;
                    color: #FEB30E;
                }
                .price-active{
                    background:linear-gradient(180deg,rgba(255,176,9,1) 0%,rgba(245,205,60,1) 100%);
                    color: #000000;
                    font-size: 28px;
                }
            }
        }
        .submit{
            width: 92%;
            height: 100px;
            margin: 100px auto auto auto;
            button{
                width: 100%;
                height: 100%;
                background: #E5E5E5;
                color: #ffffff;
                font-size: 38px;
                border: none;
                border-radius: 50px;
            }
        }
    }
}
</style>

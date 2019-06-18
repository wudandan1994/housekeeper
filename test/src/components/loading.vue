<template>
    <transition name="van-fade">
        <div id="loading-components" class="center" v-if="componentload">
            
            <div class="loading">
                <!-- <div class="logo"><img src="http://pay.91dianji.com.cn/loading-icon.png" alt=""></div> -->
                <!-- <div class="moneybay center">钱夹宝</div> -->
                <div class="spinner">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
            </div>
        </div>   
    </transition> 
</template>
<script>
export default {
    data(){
        return{
        }
    },
    props:{
        componentload:{
            type: Boolean,
            default: true
        }
    }
}
</script>
<style lang="less">
    #loading-components{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999999;
        background: rgba(0, 0, 0, 0.5);
        .loading{
            width: 200px;
            height: auto;
            .logo{
                width: 80px;
                height: 80px;
                margin-left: auto;
                margin-right: auto;
                >img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            // .moneybay{
            //     width: 100%;
            //     height: 50px;
            //     margin-left: auto;
            //     margin-right: auto;
            //     font-size: 30px;
            //     color: #ffffff;
            //     letter-spacing: 5px;
            // }
            .spinner {
                margin: 10px auto 0;
                width: 150px;
                text-align: center;
            >div {
                    width: 28px;
                    height: 28px;
                    background-color: sandybrown;
                    border-radius: 100%;
                    display: inline-block;
                    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
                    animation: bouncedelay 1.4s infinite ease-in-out;
                    -webkit-animation-fill-mode: both;
                    animation-fill-mode: both;
                }
                .bounce1 {
                    -webkit-animation-delay: -0.32s;
                    animation-delay: -0.32s;
                }
                .bounce2 {
                    -webkit-animation-delay: -0.16s;
                    animation-delay: -0.16s;
                }
                @-webkit-keyframes bouncedelay {
                    0%, 80%, 100% { -webkit-transform: scale(0.0) }
                    40% { -webkit-transform: scale(1.0) }
                }
                @keyframes bouncedelay {
                    0%, 80%, 100% {
                        transform: scale(0.0);
                        -webkit-transform: scale(0.0);
                    } 
                    40% {
                        transform: scale(1.0);
                        -webkit-transform: scale(1.0);
                    }
                }
            }
        }
        
    }
</style>

<template>
    <div id="footer-com">
         <footer class="foot row">
            <div class="foot_menus" @click="handlenow('0','/home')">
                <div class="foot_icon center">
                    <img class="icon_active" v-if="now == '0'" src="http://pay.91dianji.com.cn/footer_01-1.png" alt="">
                    <img class="icon_normal" v-else src="http://pay.91dianji.com.cn/footer_01.png" alt="">
                </div>
                <div class="foot_title center" :class="now == '0' ? 'now' : ''">首页</div>
            </div>
            <div class="foot_menus" @click="handlenow('1','/vip')">
                <div class="foot_icon center">
                    <img class="icon_active" v-if="now == '1'" src="http://pay.91dianji.com.cn/footer_02-1.png" alt="">
                    <img class="icon_normal" v-else src="http://pay.91dianji.com.cn/footer_02.png" alt="">
                </div>
                <div class="foot_title center" :class="now == '1' ? 'now' : ''">VIP</div>
            </div>
            <div class="foot_menus" @click="handlenow('2','/personalCenter')">
                <div class="foot_icon center">
                    <img class="icon_active" v-if="now == '2'" src="http://pay.91dianji.com.cn/footer_03-1.png" alt="">
                    <img class="icon_normal" v-else src="http://pay.91dianji.com.cn/footer_03.png" alt="">
                </div>
                <div class="foot_title center" :class="now == '2' ? 'now' : ''">个人中心</div>
            </div>
            <div class="foot_menus" @click="handlenow('3','/share')">
                <div class="foot_icon center">
                    <img class="icon_active" v-if="now == '3'" src="http://pay.91dianji.com.cn/LEIDA-ICON@2x.png" alt="">
                    <img class="icon_normal" v-else src="http://pay.91dianji.com.cn/LEIDA-ICON-01@2x.png" alt="">
                </div>
                <div class="foot_title center" :class="now == '3' ? 'now' : ''">AI雷达</div>
            </div>
            <div class="foot_menus" @click="handlenow('4','/financialCircle')">
                <div class="foot_icon center">
                    <img class="icon_active" v-if="now == '4'" src="http://pay.91dianji.com.cn/footer_05-1.png" alt="">
                    <img class="icon_normal" v-else src="http://pay.91dianji.com.cn/footer_05.png" alt="">
                </div>
                <div class="foot_title center" :class="now == '4' ? 'now' : ''">金融圈</div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            now: this.active,
        }
    },
    props:{
        active: {
            type: Number,
            default: 1
        }
    },
    methods:{
        handleChange(){
            this.$emit('getChange',this.nownow);
        },
        // 切换
        handlenow(obj,router){
            console.log('obj',obj,router);
            this.now = obj;
            this.$router.push(router);
        }
    }
}
</script>
<style lang="less">
    #footer-com{
        width: 100vw;
        height: 100px;
        background: #f2f2f2;
        position: fixed;
        z-index: 100;
        bottom: 0;
        left: 0;
        .foot{
            width: 100%;
            height: 100%;
            .foot_menus{
                width: 20%;
                height: 100%;
                .now{
                    color: #4b66af;
                }
                .foot_icon{
                    width: 100%;
                    height: 70%;
                    .icon_normal{
                        width: 40px;
                        height: 40px;
                    }
                    .icon_active{
                        width: 50px;
                        height: 50px;
                        animation: enlarge 0.8s ease-in-out;
                        -webkit-animation: enlarge 0.8s ease-in-out;
                    }
                    @keyframes enlarge {
                        0%{
                            transform: scale(0.5);
                        }
                        25%{
                            transform: scale(1.2);
                        }
                        50%{
                            transform: scale(1);
                        }
                        75%{
                            transform: scale(1.2);
                        }
                        100%{
                            transform: scale(1);
                        }
                    }
                }
                .foot_title{
                    width: 100%;
                    height: 30%;
                }
            }
        }
        
    }
</style>

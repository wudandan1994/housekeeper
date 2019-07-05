<template>
    <div id="component-notice" v-if="notice" @click="handleCloseNotice">
        <div class="notice">
            <div class="notice-title center">重要通知</div>
            <p>钱夹宝1.2版本即将上线,本次更新内容如下:</p>

            <p>(1):全新页面升级</p>
            <p>(2):升级VIP后个人中心背景对应VIP图</p>
            <p>(3):增加VIP“权益明细”，包含具体优惠费率，分润比例，奖励等内容</p>
            <p>(4):增加“垃圾分类”便民功能</p>
            <p>(5):取消普通代还，保留完美还款——小额还款20000以下，大额还款50万左右</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            notice: null,
            type: true,
        }
    },
    methods:{
        handleCloseNotice(){
            this.notice = false;
            localStorage.setItem("notice",'false')
        }
    },
    created () {
         this.notice =  localStorage.getItem("notice")
         if(this.notice===null){
             this.notice=true
         } else if(this.notice=="false"){
             this.notice=false
         }
        
    },
    mounted(){
       
    }

}
</script>
<style lang="less">
    #component-notice{
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 100000;
        top: 0;
        left: 0;
        .notice{
            width: 80vw;
            height: 50vh;
            box-sizing: border-box;
            padding: 0px 40px;
            margin: 25vh auto auto auto;
            background: #FFD700;
            border-radius: 10px;
            .notice-title{
                width: 100%;
                height: 20%;
                font-size: 36px;
                font-weight: 700;
            }
            p{
                font-size: 26px;
                text-align: justify;
                line-height: 50px;
                text-indent: -40px;
                padding-left: 35px;
            }
        }
    }
</style>

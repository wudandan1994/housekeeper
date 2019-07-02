<template>
    <div id="component-notice" v-if="notice" @click="handleCloseNotice">
        <div class="notice">
            <div class="notice-title center">重要通知</div>
            <p>钱夹宝1.2版本即将上线,本次更新内容如下:</p>
            <p>(1):全新页面升级</p>
            <p>(2):普通代还通道即将下架，更新后若在普通代还通道仍有任务的请联系客服查询任务进度</p>
            <p>(3):1.2新版本需卸载后重新下载</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            notice: false,
            type: true,
        }
    },
    methods:{
        handleCloseNotice(){
            this.notice = false;
            this.$store.commit('notice',false);
        }
    },
    mounted(){
        setTimeout(() =>{
            if(this.type){
                this.notice = true;
            } 
        },1000);
        this.type = this.$store.state.wechat.notice;
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

<template>
    <div id="component-notice" v-if="notice" @click="handleCloseNotice">
        <div class="notice">
            <div class="notice-title center">重要通知</div>
            <p>最新推广活动:</p>

            <p>7月16日～8月31日，推广成功10个钻石会员，可免费升级永久钻石会员，费率低至0.47，并领取1000元现金奖励！活动详情，请联系您的专属客服！</p>
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
            }
        }
    }
</style>

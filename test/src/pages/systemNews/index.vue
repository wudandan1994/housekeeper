<template>
    <div id="system-news">
        <header class="header-top row">
            <div class="left-icon start-center" @click="handleReturnHome"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">系统消息</div>
            <div class="right-icon center"></div>
        </header>
        <div class="container">
            {{text}}
        </div>
</div>

</template>


<script>
import {axiosPost} from '@/lib/http'

export default {
    data() {
        return {
            text:""
        }
    },
    methods:{
        handleReturnHome() {
            this.$router.push('/home')
        },
        getNews(){
            axiosPost("/content/getSystem")
            .then(res=>{
                if(res.data.success){
                    this.text=res.data.data

                } else {
                    this.text="敬请期待"
                }
            })
        }

    },
    created () {
        this.getNews()
    }
}
</script>

<style lang="less">
   #system-news {
       width: 100vw;
       height: calc(100vh - 160px);
       >header {
           background-color: #4965AE;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           font-size:28px;
           z-index:999;
           position: fixed;
           justify-content: space-between;
           >span {
               &:nth-of-type(1) {
                   margin-left: 10px;
               }
               &:nth-of-type(3) {
                   margin-right: 10px;
               }
           }
       }
       .container {
           width: 96%;
           height: auto;
           margin-left: auto;
           margin-right: auto;
           margin-top: 160px;
           text-align: justify;
           line-height: 40px;
           font-size: 28px;
       }
   }
</style>

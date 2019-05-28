<template>
    <div id="progress-query">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">信用卡管家</div>
            <div class="right-icon center"></div>
        </header>
        <!-- <iframe class="iframe" src="http://pay.91dianji.com.cn/container.html" frameborder="0"> -->
            <iframe class="iframe"  :src="url" frameborder="0" target="_self"></iframe>
        <!-- </iframe> -->
    </div>

</template>
 

<script>
import storage from '@/lib/storage'
export default {
    data() {
        return {
            url:""
        }
    },
    methods:{
        goBack() {
            // plus.webview.close( "yinlian")
            this.$router.push("/home")
        },
        webview(){
            if(window.plus){  
                let self= plus.webview.currentWebview(); 
                var yinlian= plus.webview.create(this.url, "yinlian", {  
                top: "40px",  
                bottom: 0 ,
                left:0,
                right:0
                });  
                self.append(yinlian)
            }else{  
                document.addEventListener('plusready',function () {  
                    let self= plus.webview.currentWebview(); 
                        var yinlian= plus.webview.create(this.url, "yinlian", {  
                        top: "80px",  
                        bottom: 0  
                    });  
                    self.append(yinlian)
                },false);  
            }  
        }
    },
    
    created(){
        //  this.webview();
        this.url = storage.get('cardManager');
        // console.log('链接',window.location);
    }
}
</script>

<style lang="less">
   #progress-query{
       width: 100vw;
       height: calc(100vh - 86px);
       padding-top: 86px;
        .iframe{
            width: 100vw;
            height: calc(100vh - 86px);
        }
   }
</style>

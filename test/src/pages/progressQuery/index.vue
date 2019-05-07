<template>
    <div id="progress-query">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">{{title}}</div>
            <div class="right-icon center"></div>
        </header>
        <iframe class="iframe"  :src="url" frameborder="0"></iframe>
    </div>

</template>
 

<script>
export default {
    data() {
        return {
            url:"",
            title:""
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
        this.url=this.$route.query.info
         this.title=this.$route.query.title
        //  this.webview();
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

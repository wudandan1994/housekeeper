<template>
    <div id="progress-query">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>信用卡业务</span>
            <span></span>
        </header>
        <div class="container">
           
        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {
            url:""
        }
    },
    methods:{
        goBack() {
            plus.webview.close( "yinlian")
            this.$router.push("/home")
        },
        webview(){
            if(window.plus){  
                let self= plus.webview.currentWebview(); 
            var yinlian= plus.webview.create(this.url, "yinlian", {  
            top: "80px",  
            bottom: 0  
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
            
        },
    },
    // mounted(){
    //     this.url=this.$route.query.info
    //     console.log(this.url)
    //     this.webview();
    // },
    created(){
        this.url=this.$route.query.info
        this.webview();
    }
}
</script>

<style lang="less">
   #progress-query{
       >header {
            background-color: red;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           z-index:999;
           font-size:28px;
           display: flex;
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
       >.container {
           padding-top:96px;
       }
   }
</style>

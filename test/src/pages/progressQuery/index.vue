<template>
    <div id="progress-query">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">{{title}}</div>
            <div class="right-icon center"></div>
        </header>
         <div class="box" style="overflow-y: scroll;">　
            <!-- 　<iframe :src="url"  ref="iframe" id="bdIframe" class="iframe"  scrolling="no"  frameborder="0" ></iframe> -->
         </div>
    </div>

</template>
 

<script>
export default {
    data() {
        return {
            url:"",
            title:"",
             type: null
        }
    },
    methods:{
        goBack() {
            plus.webview.close( "yinlian")
            this.$router.push("/home")
        },
       
        webview(){
            if(window.plus){  
             var yinlian= plus.webview.create(this.url, "yinlian");  
               yinlian.setStyle({
                   width:"100%",
                   top:"40px",
                   left:"0px",
                  right:"0px",
                  bottom:"10px",
                  scalable: true,
                  margin:"auto",
               })
                yinlian.show()
            }else{  
                document.addEventListener('plusready',function () {  
                         var yinlian= plus.webview.create(this.url, "yinlian");  
                            yinlian.setStyle({
                                width:"100%",
                                top:"40px",
                                left:"0px",
                                right:"0px",
                                margin:"auto",
                        })
                            yinlian.show()
                },false);  
            }  
        }
    },
    mounted () {

    },
    
    created(){
        this.url=this.$route.query.info
         this.title=this.$route.query.title
         this.webview();
        
    }
}
</script>

<style lang="less">
   #progress-query{
       header {
            background-color: #4965AE;
       }
        .box {
              padding-top:96px;
            overflow-y: scroll;
             .iframe{
                    // width:1px;
                    // min-width: 100%;
                    // *width:100%;
                    width:100vw;
                    height: 100vh;
                 }
      }
  }
</style>

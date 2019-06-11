<template>
    <div id="online">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">{{title}}</div>
            <div class="right-icon center"></div>
        </header>
         <div class="box" style="width:100vw;height:100vh;">　
            　　<iframe v-if="type" :src="url" scrolling="auto" class="iframe" frameborder="0" width="100vw" height="100vh"></iframe>
            　　<iframe v-else :src="url" frameborder="0" class="iframe" height="100vh" scrolling='auto' style="width: 1px; min-width: 100vw; *width: 100vw;"></iframe>
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
            // plus.webview.close( "yinlian")
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
        //  this.webview();
          var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        if(isAndroid){
        　　this.type = true
        }else{
        　　this.type = false
        }
    }
}
</script>

<style lang="less">
   #online{
       header {
            background-color: #4965AE;
       }
        .box {
               overflow-x: hidden;
           }
       .iframe{
               width: 100%;
               height:100vh !important;
               overflow-x:hidden;
           }
   }
</style>

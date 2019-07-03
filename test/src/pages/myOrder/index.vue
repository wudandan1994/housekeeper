<template>
    <div id="my-order">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>{{title}}</span>
            <span></span>
        </header>
        <div class="container">
            <div class="box" >　
            　　<iframe :src="url"  ref="iframe" id="bdIframe" class="iframe"  scrolling="no"  frameborder="0" ></iframe>
            </div>
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
            this.$router.go(-1);
        },
       
        webview(){
            if(window.plus){  
                 var yinlian= plus.webview.create(this.url, "yinlian",{
                     width:"100%",
                     top:"40px",
                     left:"0px",
                     right:"0px",
                      bottom:"10px",
                  });  
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
        },
    },
    created(){
        this.url=this.$route.query.info;
        this.title=this.$route.query.title;
        // this.webview();
       
    },
    mounted () {
       
    }
}
</script>

<style lang="less">
   #my-order {
       height: 100%;
       >header {
            background-color: #29305C;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           z-index:999;
           font-size:34px;
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
            height: 100%;
            width:100%;
             overflow-y: scroll;
           .box {
                overflow: auto;
                -webkit-overflow-scrolling:touch;
                width:100%;
                height: 100%;
                 .iframe{
                    // width:1px;
                    // min-width: 100%;
                    // *width:100%;
                    width:100vw;
                    height: 100vh;
                 }
           }
         
       }
   }
</style>

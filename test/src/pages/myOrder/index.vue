<template>
    <div id="my-order">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>{{title}}</span>
            <span></span>
        </header>
        <div class="container">
             <div class="box" style="overflow-y: scroll;">　
            　　<iframe v-if="type" :src="url" scrolling="auto"  class="iframe" frameborder="0" ></iframe>
            　　<iframe v-else :src="url" frameborder="0"  class="iframe" scrolling="no"  ></iframe>
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
                        //     yinlian.setStyle({
                        //         width:"100%",
                        //         top:"40px",
                        //         left:"0px",
                        //         right:"0px",
                        //         margin:"auto",
                        // })
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
    created(){
        this.url=this.$route.query.info;
        this.title=this.$route.query.title;
        // this.webview();
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
   #my-order {
       >header {
            background-color: #4965AE;
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
           .box {
               overflow-y: scroll;
           }
           .iframe{
                width: 1px;
                min-width: 100%;
                *width: 100%;
                height: 100% !important;
            }
       }
   }
</style>

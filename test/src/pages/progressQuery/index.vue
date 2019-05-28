<template>
    <div id="progress-query">
        <header class="header-top row">
            <div class="left-icon start-center" @click="goBack"><van-icon color="white" size="20px" name="arrow-left"/></div>
            <div class="top-title center">{{title}}</div>
            <div class="right-icon center"></div>
        </header>

        <!-- <div style="webkit-overflow-scrolling: touch;overflow-y: scroll;width:100%;">
            <iframe class="iframe" id="ifram" :src="url" frameborder="0"></iframe>
        </div> -->
       
         <!-- <div style="overflow: auto;-webkit-overflow-scrolling:touch;width:100%;height:100%;">　
            　　<iframe v-if="type" :src="url" scrolling="auto" frameborder="0" width="100%" height="100%"></iframe>
            　　<iframe v-else :src="url" frameborder="0" height="100%" scrolling='no' style="width: 1px; min-width: 100%; *width: 100%;"></iframe>
        </div> -->
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
        // getIfram(){
        //     let ifram = document.getElementById('ifram');
        //     if (navigator.userAgent.match(/iPad|iPhone/i)) {
        //     let iframe_box = document.getElementById('iframe-box');
        //     iframe_box.style.width = 100 + '%';
        //     iframe_box.style.overflowX = 'hidden';
        //     iframe_box.style.overflowY = 'scroll';
        //     iframe_box.style.webkitOverflowScrolling = 'touch';
        //     ifram.setAttribute('scrolling', 'no');
        //     iframe_box.appendChild(ifram)
        //     console.log("ifram")
        //     }
        // },
        webview(){
            if(window.plus){  
                let self= plus.webview.currentWebview(); 
                var yinlian= plus.webview.create(this.url, "yinlian", {  
                top: "40px",  
                // width:"100%",
                bottom: "0px",
                 right:"0px",
                left:"0px",
                scrollIndicator:"vertical"
                });  
                // self.append(yinlian)
                yinlian.show()
            }else{  
                document.addEventListener('plusready',function () {  
                    let self= plus.webview.currentWebview(); 
                        var yinlian= plus.webview.create(this.url, "yinlian", {  
                        top: "40px",  
                        width:'100%',
                        bottom: '0px',
                        left:'0px',
                        scrollIndicator:'none'
                    });  
                    self.append(yinlian)
                },false);  
            }  
        }
    },
    mounted () {
        // this.getIfram()  
        // console.log("mounted中的ifram")
    },
    
    created(){
        this.url=this.$route.query.info
         this.title=this.$route.query.title
         this.webview();
        //   var u = navigator.userAgent;
        // var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        // if(isAndroid){
        // 　　this.type = true
        // }else{
        // 　　this.type = false
        // }
    }
}
</script>

<style lang="less">
   #progress-query{
       header {
            background-color: #4965AE;
       }
       width: 100vw;
       height: calc(100vh - 86px);
       padding-top: 86px;
        .iframe{
            width: 100vw;
            height: calc(100vh - 86px);
        }
        .out {
            overflow: auto;
            -webkit-overflow-scrolling:touch;
            width:100%;
        }
   }
</style>

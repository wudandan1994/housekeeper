<template>
    <div id="my-order">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>{{title}}</span>
            <span></span>
        </header>
        <div class="container">
            <!-- <div style="overflow: auto;-webkit-overflow-scrolling:touch;width:100%;height:100%;">　
            　　<iframe v-if="type" :src="url" scrolling="auto" frameborder="0" width="100%" height="100%"></iframe>
            　　<iframe v-else :src="url" frameborder="0" height="100%" scrolling='no' style="width: 1px; min-width: 100%; *width: 100%;"></iframe>
            </div> -->
             <!-- <iframe class="iframe"  :src="url" frameborder="0" target="_self"></iframe> -->
               <!-- <div style="webkit-overflow-scrolling: touch;overflow-y: scroll;width:100%;">
                    <iframe class="iframe" id="ifram" :src="url" frameborder="0"></iframe>
                </div> -->
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
            this.$router.go(-1);
        },
        // getIfram(){
        //     let ifram = document.getElementById('ifram');
        //         if (navigator.userAgent.match(/iPad|iPhone/i)) {
        //         let iframe_box = document.getElementById('iframe-box');
        //         iframe_box.style.width = 100 + '%';
        //         iframe_box.style.overflowX = 'hidden';
        //         iframe_box.style.overflowY = 'scroll';
        //         iframe_box.style.webkitOverflowScrolling = 'touch';
        //         ifram.setAttribute('scrolling', 'no');
        //         iframe_box.appendChild(ifram)
        //         console.log(222)
        //         }
        // },
        webview(){
            let self= plus.webview.currentWebview(); 
            var yinlian= plus.webview.create(this.url, "yinlian", {  
            top: "40px",  
            bottom: "0px",
            left:"0px",
            right:"0px",
            scrollIndicator:"vertical"
        });  
        //    self.append(yinlian)
          yinlian.show()
        },
        mounted () {
            // this.getIfram()
        }

       
    },
    created(){
        this.url=this.$route.query.info;
        this.title=this.$route.query.title;
        // window.location.href = this.url;
        this.webview();
        // var u = navigator.userAgent;
        // var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        // if(isAndroid){
        // 　　this.type = true
        // }else{
        // 　　this.type = false
        // }
        // // console.log(this.type)
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
           .iframe{
               width: 100vw;
               height: calc(100vh - 86px);
           }
       }
   }
</style>

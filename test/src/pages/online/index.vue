<template>
    <div id="violation-inquiry">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>在线查询</span>
            <span></span>
        </header>
        <div class="container">
           <div class="online">
                <div class="ring">
                    <van-notice-bar
                        text="提示：选择地区，开户银行，输入支行名称，点击搜索即可查询联行号。"
                    />
                </div>

           </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        goBack() {
             plus.webview.close( "yinlian");
            this.$router.push('/home/collect')
        },
        webview(){
            let self= plus.webview.currentWebview(); 
            var yinlian= plus.webview.create("http://www.kaihuhang.cn/", "yinlian", {  
            top: "80px",  
            bottom: 0  
        });  
        self.append(yinlian);
        },
        
    },
    created(){
        this.webview()
    }
}
</script>

<style lang="less">
   #violation-inquiry {
       >header {
          background-color: #4965AE;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           position: fixed;
           font-size:28px;
           z-index:999;
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
           padding-bottom: 50px;
             >.online {
                 margin-top:15px;
             .van-notice-bar__wrap{
                    color:#4B66AF;
                }
           }
       }
   }
</style>

<template>
    <div id="share-link">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>分享链接</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
           <ul>
               <li>
                   <van-collapse v-model="activeNames">
                         <van-collapse-item name="1">
                            <div slot="title"> <span><van-icon name="more" /></span>官网首页链接&nbsp;<span>（可锁粉）</span></div>
                            <a :href="link">点击分享</a>
                                <!-- <p>{{link}}</p> -->
                              <!-- （点击复制链接） -->
                        </van-collapse-item>
                    </van-collapse>
               </li>
               
           </ul>
        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {
            activeNames:["1","2","3","4","5","6","7"],
            link:""
        }
    },
    methods:{
        goBack() {
            this.$router.push('/share')
        }
    },
    created () {
        this.link='http://pay.91dianji.com.cn/#/home?promotioncode=' + this.$store.state.wechat.promotioncode
    }
}
</script>

<style lang="less">
   #share-link {
       >header {
            background-color: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           z-index:999;
           font-size:28px;
           padding-top:10px;
           color:#fff;
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
           padding-bottom: 50px;
           >ul {
               padding-left:15px;
               >li {
                   padding:20px 0px;
                   .van-cell{
                       font-size: 30px;
                   }
                   .van-collapse-item__content {
                       font-size: 28px;
                   }
                   span {
                       &:nth-of-type(1){
                           color:#F8A934;
                           margin-right: 20px;
                       }
                       &:nth-of-type(2){
                           color:#AEAEAE;
                       }
                   }
               }
           }
       }
   }
</style>

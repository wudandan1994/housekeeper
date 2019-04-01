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
                            <div slot="title"> <span><van-icon name="like" /></span>官网首页链接&nbsp;<span>（可锁粉）</span></div>
                             https://m.kakoim.cn/tool/videointroduce
                             <!-- （点击复制链接） -->
                        </van-collapse-item>
                    </van-collapse>
               </li>
                <li>
                   <van-collapse v-model="activeNames">
                         <van-collapse-item name="2">
                            <div slot="title"> <span><van-icon name="like" /></span>官网升级链接&nbsp;<span>（可锁粉）</span></div>
                             https://m.kakoim.cn/tool/videointroduce
                             <!-- （点击复制链接） -->
                        </van-collapse-item>
                    </van-collapse>
               </li>
                <li>
                   <van-collapse v-model="activeNames">
                         <van-collapse-item name="3">
                            <div slot="title"> <span><van-icon name="like" /></span>官网视频链接&nbsp;<span>（可锁粉）</span></div>
                             https://m.kakoim.cn/tool/videointroduce
                             <!-- （点击复制链接） -->
                        </van-collapse-item>
                    </van-collapse>
               </li>
                <li>
                   <van-collapse v-model="activeNames">
                         <van-collapse-item name="4">
                            <div slot="title"> <span><van-icon name="like" /></span>官网邀请好友链接&nbsp;<span>（可锁粉）</span></div>
                             https://m.kakoim.cn/tool/videointroduce
                             <!-- （点击复制链接） -->
                        </van-collapse-item>
                    </van-collapse>
               </li>
                <li>
                   <van-collapse v-model="activeNames">
                         <van-collapse-item name="5">
                            <div slot="title"> <span><van-icon name="like" /></span>官网APP下载链接&nbsp;<span>（可锁粉）</span></div>
                             https://m.kakoim.cn/tool/videointroduce
                             <!-- （点击复制链接） -->
                        </van-collapse-item>
                    </van-collapse>
               </li>
                <li>
                   <van-collapse v-model="activeNames">
                         <van-collapse-item name="6">
                            <div slot="title"> <span><van-icon name="like" /></span>官网信用卡首页链接&nbsp;<span>（可锁粉）</span></div>
                             https://m.kakoim.cn/tool/videointroduce
                             <!-- （点击复制链接） -->
                        </van-collapse-item>
                    </van-collapse>
               </li>
                <li>
                   <van-collapse v-model="activeNames">
                         <van-collapse-item name="7">
                            <div slot="title"> <span><van-icon name="like" /></span>官网我的微名片链接&nbsp;<span>（可锁粉）</span></div>
                             https://m.kakoim.cn/tool/videointroduce
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
            activeNames:["1","2","3","4","5","6","7"]
        }
    },
    methods:{
        goBack() {
            this.$router.push('/share')
        }
    }
}
</script>

<style lang="less">
   #share-link {
       >header {
           background: #000;
           width:100%;
           height: 46px;
           line-height: 46px;
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
           padding-top:56px;
           padding-bottom: 50px;
           >ul {
               padding-left:15px;
               >li {
                   padding:20px 0px;
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

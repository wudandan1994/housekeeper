<template>
    <div id="invite-friends">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>邀请好友</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
           <div class="image">
               <img src="" alt="">
           </div>
           <div class="sweep">
               <p @click="showFlag">好友扫一扫</p>
                 <van-popup
                 v-model="show"
                 :overlay=false
                 >
                    <div class="cover">
                        <div class="image">
                            <!-- <img src="../../../static/images/flower.jpg.jpg" alt=""> -->
                        </div>
                    </div>
                </van-popup>
               <p @click="shareinvite">分享我的邀请</p>
               <van-popup 
               v-model="showSave"
               :overlay=false
               >
                    <div class="save">
                        <p>保存图片成功</p>
                        <p>海报已保存到手机相册，你可以分享给好友</p>
                        <span>确定</span>
                    </div>
                </van-popup>
           </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            show:false,
            showSave:false,
        }
    },
    methods:{
        goBack() {
            this.$router.push('/share/inviteFriends')
        },
        showFlag(){
            this.show=!this.show
            this.showSave=false
        },
        shareinvite(){
            this.showSave=!this.showSave
            this.show=false
        }
    }
}
</script>

<style lang="less">
   #invite-friends {
       >header {
           background: #000;
           width:100%;
           height: 86px;
           line-height:86px;
           font-size:28px;
           z-index:999;
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
            >.image {
                width:100%;
                height:1200px;
                background-color: orange;
            }
            
            >.sweep {
                margin-top:50px;
                display: flex;
                justify-content: space-around;
                color:#fff;
                .cover {
                        width:600px;
                        height:600px;
                     }
                .save {
                    width:600px;
                    height:300px;
                    text-align: center;
                    color:#666666;
                    >p {
                        &:nth-of-type(1){
                            padding:20px 0px;
                            color:#9F6711;
                        }
                        &:nth-of-type(2){
                            padding:20px 0px;
                            padding-bottom: 50px;
                            border-bottom: 1px solid #ccc;
                            margin-bottom:50px;
                        }

                     }

                }
                >p {
                    padding:20px 50px;
                    border-radius:40px;
                    
                    &:nth-of-type(1){
                        background-color: #498EFD;
                    }
                    &:nth-of-type(2){
                        background-color: #E78D17;
                    }
                }
            }
       }
   }
</style>

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
               <p>好友扫一扫</p>
               <p>分享我的邀请</p>
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
            this.$router.push('/share/inviteFriends')
        }
    }
}
</script>

<style lang="less">
   #invite-friends {
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
            >.image {
                width:100%;
                height: 500px;
                background-color: orange;
            }
       }
   }
</style>

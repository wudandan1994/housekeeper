<template>
    <div id="invite-friends">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>邀请好友</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
           <router-link to="/share/inviteFriends/inviteShare" tag="div" class="invite">
              立即邀请好友加入
           </router-link>
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
            this.$router.push('/share')
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
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           font-size:28px;
           z-index:999;
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
           >.invite {
               width:70%;
               margin-left:15%;
               text-align: center;
               padding:30px 0;
               background-color: #AA6808;
               color:#fff;
               border:1px solid #fff;
               border-radius: 10px;
               position: fixed;
               left:0px;
               bottom:100px;
           }
       }
   }
</style>

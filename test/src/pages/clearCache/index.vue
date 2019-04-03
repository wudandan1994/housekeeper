<template>
    <div id="clear-cache">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>清除缓存</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
            <div class="space">
                <p>缓存已用空间</p>
                <p>100.00MB</p>
            </div>
             <div class="at-once" @click="isShow">一键清除缓存</div>
           
                <van-popup v-model="show">
                    <div class="cover">清除完成！</div>
                </van-popup>
        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {
            show:false,
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home')
        },
        isShow() {
            this.show=true
        }
    }
}
</script>

<style lang="less">
   #clear-cache {
       >header {
           background: #000;
           width:100%;
           height: 46px;
           line-height: 46px;
           padding-top:10px;
           color:#fff;
           display: flex;
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
           padding-top:56px;
           padding-bottom: 50px;
           >.space {
               padding-top:100px;
               text-align: center;
               >p {
                   &:nth-of-type(2) {
                       font-size: 60px;
                       padding-top:50px;
                   }
                
               }
           }
           >.at-once {
              color:#000;
              background-color: #F2F2F2;
              margin-top:300px;
              text-align: center;
              width:40%;
              margin-left:30%;
              padding:30px 0px;
              border-radius: 10px;
              border:2px solid #ccc;
           }
           .cover {
               width:500px;
               text-align: center;
               line-height: 400px;
               border-radius: 10px;
               height: 400px;
               background-color: #fff;
           }
       }
   }
</style>

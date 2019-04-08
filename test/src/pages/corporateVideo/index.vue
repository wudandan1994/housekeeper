<template>
    <div id="progress-query">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>钱夹宝企业视频</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
           <div class="time">
              <ul>
                  <li>
                       <video src=""></video>
                       <p>小程序+时代&nbsp;&nbsp;五大趋势不容错过</p>
                  </li>
              </ul>
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
            this.$router.push('/share')
        }
    }
}
</script>

<style lang="less">
   #progress-query {
       >header {
           background: #000;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           z-index:999;
           position: fixed;
           font-size:28px;
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
           >.time {
               text-align: center;
               margin-top:30px;
               >ul{
                   >li{
                       background-color: red;
                       >p {
                           margin-top:10px;
                       }
                   }
               }
           }
       }
   }
</style>

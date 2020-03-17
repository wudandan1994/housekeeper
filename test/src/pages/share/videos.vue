<template>
    <div id="videos">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>视频</span>
            <span></span>
        </header>
        <div class="container">
            <div class="list">
                <ul>
                    <li>
                        <video src="../../assets/mp4/video1.mp4" controls></video>
                    </li>
                    <li>
                        <video src="../../assets/mp4/video2.mp4" controls></video>
                    </li>
                     <li>
                        <video src="../../assets/mp4/video3.mp4" controls></video>
                    </li>
                     <li>
                        <video src="../../assets/mp4/video4.mp4" controls></video>
                    </li>
                     <li>
                        <video src="../../assets/mp4/video5.mp4" controls></video>
                    </li>
                     <li>
                        <video src="../../assets/mp4/video6.mp4" controls></video>
                    </li>
                     <li>
                        <video src="../../assets/mp4/video7.mp4" controls></video>
                    </li>
                     <li>
                        <video src="../../assets/mp4/video8.mp4" controls></video>
                    </li>
                     <li>
                        <video src="../../assets/mp4/video9.mp4" controls></video>
                    </li>
                     <li>
                        <video src="../../assets/mp4/video10.mp4" controls></video>
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
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less">
   #videos {
       >header {
           background: #4B66AF;
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
           overflow-x: hidden;
           .list{
               width:100%;
               padding:20px;
               box-sizing: border-box;
               ul{
                   display: flex;
                   justify-content: space-between;
                   flex-wrap: wrap;
                   li {
                       width:46%;
                       height:500px;
                       margin-bottom:15px;
                       video{
                           width:100%;
                           height:100%;
                       }
                   }
               }
           }
       }
   }
</style>

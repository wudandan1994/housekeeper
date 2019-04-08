<template>
    <div id="violation-inquiry">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span></span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
           <div class="nationwide">
               <div class="image"></div>
               <ul>
                   <li> <span><van-icon name="arrow-left"/></span><router-link to="/home/violationInquiry/addCar" tag="span">添加车辆信息</router-link></li>
                   <li> <span><van-icon name="arrow-left"/></span><span>我的订单</span></li>
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
            this.$router.push('/home')
        }
    }
}
</script>

<style lang="less">
   #violation-inquiry {
       >header {
           background: #000;
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
           >.nationwide {
               >.image {
                   width:100%;
                   height: 400px;
                   background-color:pink;
               }
               >ul {
                   display: flex;
                   justify-content: space-around;
                   >li {
                       display: flex;
                       width:50%;
                       margin-top:30px;
                       margin-bottom: 30px;
                       justify-content: space-around;
                       &:nth-of-type(1) {
                           border-right: 1px solid #ccc;
                       }
                   }
               }
           }
       }
   }
</style>

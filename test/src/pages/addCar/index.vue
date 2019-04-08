<template>
    <div id="add-card">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>添加车辆</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
             <div class="description">
                 <p>说明</p>
                 <div></div>
                 <div class="car-number">
                     <p>
                         <span><van-icon name="phone"/></span>
                         <span>车牌号码</span>
                     </p>
                     <p>
                         <span>皖<van-icon name="arrow"/></span>
                         <input type="text" placeholder="请输入车票号码">
                     </p>
                 </div>
             </div>
             <router-link to="/home/violationInquiry/addCar/addSave" tag="div" class="save">新添保存</router-link>
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
            this.$router.push('/home/violationInquiry')
        }
    }
}
</script>

<style lang="less">
   #add-card {
       >header {
           background: #000;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           position: fixed;
           z-index:999;
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
           >.description {
               line-height: 50px;
               > p {
                   text-align: right;
                   margin-right: 20px;
                   color:orange;
               }
               >.car-number {
                   padding:20px;
                   display: flex;
                   justify-content: space-between;
                   border-top: 1px solid #ccc;
                   border-bottom: 1px solid #ccc;
                   >p {
                       >span {
                           &:nth-of-type(1) {
                               margin-right: 5px;
                           }
                       }
                       &:nth-of-type(2) {
                           >input {
                               border:none;
                           }
                       }
                   }
               }
           }
           >.save{
               text-align: center;
               color:white;
               background-color: orange;
               padding-top:20px;
               padding-bottom: 20px;
               width:92%;
               margin-left:4%;
               margin-right: 4%;
               margin-top:50px;
               border-radius: 10px;
           }
       }
   }
</style>

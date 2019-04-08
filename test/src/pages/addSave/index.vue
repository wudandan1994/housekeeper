<template>
    <div id="add-save">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>身份验证</span>
            <span><van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
            <div class="car-deatil">
                <p><span><van-icon name="star"/></span>鄂D&nbsp;S0V09</p>
                <ul>
                    <li>
                        <p>0</p>
                        <p>违章</p>
                    </li>
                    <li>
                        <p>0</p>
                        <p>扣分</p>
                    </li>
                    <li>
                        <p>0</p>
                        <p>罚款</p>
                    </li>
                </ul>
            </div>
             <div class="car-info">
                 <p><span>&nbsp;</span>选择验证方式</p>
                 <div class="car-message"></div>
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
            this.$router.push('/home/violationInquiry/addCar')
        }
    }
}
</script>

<style lang="less">
   #add-save {
       >header {
           background: #000;
           width:100%;
           height: 46px;
           line-height: 46px;
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
           >.car-deatil {
               >p {
                   text-align: center;
                   line-height: 50px;
                   border-bottom: 1px solid #ccc;
               }
               >ul {
                   display: flex;
                   flex-wrap: nowrap;
                   justify-content: space-around;
                   >li {
                       width:33.33%;
                       text-align: center;
                       padding-top: 20px;
                       >p {
                           padding-top:30px;
                       }
                   }
               }
           }
           >.car-info {
               padding: 50px 30px;
               >p {
                   display: flex;
                   >span {
                       display: block;
                       width:5px;
                       height: 100%;
                       background-color: orange;
                       margin-right: 10px;
                   }
               }
           }
       }
   }
</style>

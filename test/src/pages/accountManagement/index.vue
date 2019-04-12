<template>
    <div id="account-management">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>账户管理</span>
            <span></span>
        </header>
        <div class="container">
            <div class="management">
                <p>
                    <span>修改登录密码</span>
                    <router-link to="/home/accountManagement/modifyLoginPassword" tag="span"><van-icon name="arrow"/></router-link>
                </p>
                <p>
                    <span>手机号</span>
                    <router-link to="/home/bindingPhone" tag="span"><van-icon name="arrow"/></router-link>
                </p>
                <!-- <p>
                    <span>修改手势密码</span>
                    <span  @click="changeGesture"><van-icon name="arrow"/></span>
                </p> -->
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
        },
          changeGesture() {
              this.$dialog.confirm({
                    title: '温馨提示',
                    message: '当前未开启手势密码，是否开启？',
                    confirmButtonText:'开启',
                }).then(() => {
//                     点击确定按钮时做什么？
                }).catch(() => {
                    // on cancel
                });
          }   
    }
}
</script>

<style lang="less">
   #account-management {
       >header {
           background-color: #4965AE;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           position: fixed;
           z-index:999;
           font-size: 28px;
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
           >.management {
               padding-left: 20px;
               >p {
                   padding:30px 10px;
                   border-bottom: 2px solid #ccc;
                   font-size:30px;
                   display: flex;
                   justify-content: space-between;
               }
                        
           }
       }
   }
</style>

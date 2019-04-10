<template>
    <div id="modify-phone">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>实名认证</span>
            <span></span>
        </header>
        <div class="container">
            <div class="phone-numer">
                <div>
                    <span>手机号：</span>
                    <input type="number" placeholder="请输入手机号">
                </div>
                <div>
                    <span>输入验证码：</span>
                    <p>
                        <input type="number" placeholder="请输入验证码">
                        <span>获取验证码</span>
                    </p>
                </div>
            </div>
            <div class="at-once" @click="isShow">立即绑定</div>
           
                <van-popup v-model="show">
                    <div class="cover">绑定成功</div>
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
    created(){
        
    },
    methods:{
        goBack() {
            this.$router.push('/home/accountManagement')
        },
        isShow() {
            this.show=true
        }
    }
}
</script>

<style lang="less">
   #modify-phone{
       >header {
           background: #000;
           width:100%;
           height: 86px;
           line-height: 86px;
           font-size:28px;
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
           padding-top:96px;
           padding-bottom: 50px;
           >.phone-numer {
               padding-left:30px;
               >div {
                   padding-top:40px;
                   font-size:36px;
                   display: flex;
                   flex-wrap: nowrap;
                   border-bottom: 1px solid #ccc;
                   padding-bottom:40px;
                   >input {
                       border:none;
                   }
                   >p {
                       flex:1;
                       >input {
                           border:none;
                           width:240px;
                       }
                       >span {
                               color:#fff;
                               background-color: #B39956;
                               padding:15px 10px;
                               border-radius: 10px;
                           }
                   }
               }
           }
           >.at-once {
              color:#fff;
              background-color: #B39A57;
              margin-top:300px;
              text-align: center;
              width:60%;
              margin-left:20%;
              padding:30px 0px;
              border-radius: 10px;
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

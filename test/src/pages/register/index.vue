<template>
    <div id="storage">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>个人设置</span>
            <span>保存&nbsp;<van-icon name="ellipsis"/></span>
        </header>
        <div class="container">
            <div class="info">
               <div class="area">
                   <ul>
                       <li>
                           <p><span><van-icon name="manager"/></span> 头像</p>
                           <div class="uploadimg">
                               <input type="file" name="file" multiple>
                               <img src="" alt="">
                               <span><van-icon name="star" /></span>
                               <span><van-icon name="arrow" /></span>
                           </div>
                       </li>
                       <li>
                           <p><span><van-icon name="map-marked"/></span> 昵称</p>
                          <input type="text" class="nickname" placeholder="可乐-5-2">
                          <span><van-icon name="arrow" /></span>
                       </li>
                        <li>
                           <p><span><van-icon name="phone"/></span> 手机号</p>
                           <p>
                               <input type="number" placeholder="请输入常用手机号码"> <span><van-icon name="arrow" /></span>
                           </p>
                       </li>
                       <li>
                           <p><span><van-icon name="lock"/></span> 登录密码</p>
                           <p>
                               <input type="text" placeholder="请设置登录密码"> <span><van-icon name="arrow" /></span>
                           </p>
                       </li>
                       <li>
                          <p><span><van-icon name="lock"/></span> 确认密码</p>
                           <p>
                               <input type="text" placeholder="请再次输入登录密码"> <span><van-icon name="arrow" /></span>
                           </p>
                       </li>
                        <li>
                          <p><span><van-icon name="location"/></span> 所在地</p>
                           <p>
                               <input type="text" placeholder="请选择"> <span><van-icon name="arrow" /></span>
                           </p>
                       </li>
                       <li>
                          <p><span><van-icon name="card"/></span> 身份情况</p>
                           <p>
                               <input type="text" placeholder="请选择"> <span><van-icon name="arrow" /></span>
                           </p>
                       </li>
                   </ul>
               </div>
               <div class="phone">
                   <ul>
                       <li>
                         <p><span><van-icon name="lock"/></span> 是否有信用卡</p>
                         
                       </li>
                       <li>
                          <p><span><van-icon name="lock"/></span> 是否有车</p>
                       </li>
                        <li>
                          <p><span><van-icon name="lock"/></span> 微信号</p>
                           <p>
                               <input type="text" placeholder="请输入微信号"> <span><van-icon name="arrow" /></span>
                           </p>
                       </li>
                       <li>
                            <p><span><van-icon name="lock"/></span> 上传微信二维码</p>
                           <div class="uploadimg">
                               <input type="file" placeholder="请上传" name="file" multiple>
                               <span><van-icon name="close"/>请上传</span>
                               <span><van-icon name="arrow" /></span>
                           </div>
                       </li>
                        <li>
                          <p><span><van-icon name="volume"/></span> 消息声音开关</p>
                           <p>
                                <van-switch
                         size="20px" 
                         inactive-color="#DDDDDD"
                         active-color="#CDB168" 
                         active-value="ON"
                         inactive-value="OFF"
                         v-model="checked" 
                         />
                           </p>
                       </li>
                       
                   </ul>
               </div>
               <div class="card-id">
                    <p><span><van-icon name="friends"/></span> 实名认证</p>
                    <p @click="modify">
                        <span>未认证</span> <span><van-icon name="arrow" /></span>
                    </p>
               </div>
            </div>
           
            <div class="next">
                <span>注册</span>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            checked:true,
        }
    },
    methods:{
        goBack() {
            this.$router.push('/login')
        },
        modify(){
            this.$router.push('/home/verified')
        }
    }
}
</script>

<style lang="less">
   #storage {
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
           background-color:#E2E3E5; 
           >.info {
               >.area {
                   padding-left:15px;
                   background-color: #fff;
                   >ul {
                       >li {
                           display: flex;
                           justify-content: space-between;
                           border-bottom: 1px solid #ccc;
                           padding-top:30px;
                           padding-bottom:30px;
                           >div{
                               cursor: pointer;
                               position: relative;
                               >input {
                                   position: absolute;
                                   right:0px;
                                   top:0px;
                                   opacity: 0;
                                    cursor: pointer;
                               }
                           }
                           input {
                               border:none;
                               text-align: right;
                           }
                       }
                   }
               }
               >.phone {
                   margin-top: 20px;
                   background-color: #fff;
                   padding-left:8px;
                   >ul{
                       >li{
                           display: flex;
                           justify-content: space-between;
                           padding-top:30px;
                           padding-bottom:30px;
                           padding-right: 10px;
                            border-bottom: 1px solid #ccc;
                            >div {
                                  cursor: pointer;
                               position: relative;
                               >input {
                                   position: absolute;
                                   right:0px;
                                   top:0px;
                                   opacity: 0;
                                    cursor: pointer;
                               }
                            }
                           >p {
                               &:nth-of-type(2) {
                                   >input {
                                       border:none;
                                       text-align: right;
                                   }
                               }
                           }
                       }
                   }
               }
               >.card-id {
                   margin-top: 20px;
                   background-color: #fff;
                   padding-left: 15px;
                   display: flex;
                   justify-content: space-between;
                   padding:15px 0px;
                  
               }
           }
           >.safe {
              display: flex;
              padding-top:20px;
              justify-content: space-around; 
              >div {
                  display: flex;
                  >span {
                      font-size:60px;
                  }
                  >h3 {
                      margin-left:15px;
                      color:#CBCCCE;
                      >p {
                          margin-bottom: 20px;
                      }
                  }
              }
           }
           >.next {
              padding-top:30px;
              padding-bottom: 30px;
              text-align: center;
              color:#fff;
              background-color: #9F6711;
              width:60%;
              margin-top:60px;
              margin-left:20%;
              margin-bottom: 100px;
              border-radius: 15px;

           }
       }
   }
</style>

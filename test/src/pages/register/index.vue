<template>
    <div id="register">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>个人设置</span>
            <span>保存</span>
        </header>
        <div class="container">
            <div class="info">
               <div class="area">
                   <ul>
                       <li>
                           <p><span><van-icon name="manager"/></span> 头像</p>
                           <div class="uploadimg">
                               <!-- <input type="file" id="photo" name="file" multiple> -->
                               <input type="text">
                                <div class="images">
                                     <img :src="personInfo.photo" alt="">
                                </div>
                               
                               <span><van-icon name="arrow" /></span>
                           </div>
                       </li>
                       <li>
                           <p><span><van-icon name="map-marked"/></span> 昵称</p>
                          <input type="text" class="nickname" :placeholder="personInfo.nickname">
                          <span><van-icon name="arrow" /></span>
                       </li>
                        <li>
                           <p><span><van-icon name="phone"/></span> 手机号</p>
                           <p>
                               <input type="number" :placeholder="personInfo.mobile"> <span><van-icon name="arrow" /></span>
                           </p>
                       </li>
                       <li>
                           <p><span><van-icon name="lock"/></span> 登录密码</p>
                           <p>
                               <input type="password" :placeholder="personInfo.password"> <span><van-icon name="arrow" /></span>
                           </p>
                       </li>
                       <li>
                          <p><span><van-icon name="lock"/></span> 确认密码</p>
                           <p>
                               <input type="password" :placeholder="personInfo.password"> <span><van-icon name="arrow" /></span>
                           </p>
                       </li>
                        <li>
                          <p><span><van-icon name="location"/></span>所在地</p>
                           <p>
                               <input type="text" :placeholder="personInfo.city"> <span><van-icon name="arrow" /></span>
                           </p>
                       </li>
                       <li>
                          <p><span><van-icon name="card"/></span> 身份情况</p>
                           <p>
                               <input type="text" @focus="showInfo"  :placeholder="identity"> <span><van-icon name="arrow" /></span>
                               <van-actionsheet
                                v-model="show"
                                :actions="actions"
                                cancel-text="取消"
                                @select="onSelect"
                                @cancel="onCancel"
                                />
                           </p>
                       </li> 
                   </ul>
               </div>
               <div class="phone">
                   <ul>
                       <li>
                         <p><span><van-icon name="lock"/></span> 是否有信用卡</p>
                          <!-- <van-switch v-model="checked"  size="20px" /> -->
                           <van-switch
                         size="20px" 
                         inactive-color="#DDDDDD"
                         active-color="#4B66AF" 
                         active-value="ON"
                         inactive-value="OFF"
                         v-model="checkedCard" 
                         />
                       </li>
                       <li>
                          <p><span><van-icon name="lock"/></span> 是否有车</p>
                          <van-switch
                         size="20px" 
                         inactive-color="#DDDDDD"
                         active-color="#4B66AF" 
                         active-value="ON"
                         inactive-value="OFF"
                         v-model="checkedCar" 
                         />
                       </li>
                        <li>
                          <p><span><van-icon name="lock"/></span> 微信号</p>
                           <p>
                               <input type="text" :placeholder="personInfo.wechat"> <span><van-icon name="arrow" /></span>
                           </p>
                       </li>
                       <li>
                            <p><span><van-icon name="lock"/></span> 上传微信二维码</p>
                           <div class="uploadimg">
                               <input type="file" placeholder="请上传" name="file" multiple>
                               <span>请上传</span>
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
                         v-model="checkedVoice" 
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
                <span>更新信息</span>
            </div>
        </div>
    </div>

</template>

<script>
import {axiosPost,axiosGet} from '@/lib/http'
import storage from '@/lib/storage'
export default {
    
    data() {
        return {
            personInfo:{},
            checkedCard:"",
            checkedCar:"",
            checkedVoice:"",
            show:false,
            actions:[
                { name:"上班族"},
                { name:"个体户"},
                { name:"自由职业者"},
                { name:"企业主"},
            ],
            identity:""
        }
    },
    methods:{
        goBack() {
            this.$router.push('/personalCenter')
        },
        onCancel(){

        },
        showInfo(){
            this.show=true
        },
        onSelect(item){
             this.show = false;
        //    console.log(item.name);
           this.identity=item.name;
        },
        modify(){
            this.$router.push('/home/verified')
        },
        getSet(){
            // 查询个人设置
            let data={
                // openid:this.$store.state.wechat.openid,
                openid:"ohwrlwlEuphjdvOimvqkhplpzEqo"
            }
            let that=this
            axiosPost("/customer/getCustomer",data)
            .then(function(res){
                    if(res.status===200){
                        that.personInfo=res.data.data
                        that.checkedCard=Number(that.personInfo.iscreditcard)
                        that.checkedCar=Number(that.personInfo.iscar)
                        that.checkedVoice=that.personInfo.voice
                        // localStorage.setItem("personInfo",JSON.stringify(that.personInfo))
                        // set(name,val){
                        //         localStorage.setItem(name,val);
                        //     }
                    }
            })
            .catch(function(err){
                // console.log(err,"error");
            })
        },
        // 更新个人设置
        updateSet(){

        }
    },
    created () {
        this.getSet()

    },
}
</script>

<style lang="less">
   #register {
       >header {
           background-color: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           font-size:28px;
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
           background-color:#E2E3E5; 
           >.info {
               >.area {
                   padding-left:15px;
                   background-color: #fff;
                   >ul {
                       >li {
                           padding-left:20px;
                           padding-right: 20px;
                           display: flex;
                           justify-content: space-between;
                           border-bottom: 1px solid #ccc;
                           padding-top:30px;
                           padding-bottom:30px;
                           >p {
                               font-size: 30px;
                           }
                           &:nth-of-type(1){
                            //    display: flex;
                               >div {
                                   flex:1;
                                   width:100px;
                                   display: flex;
                                   justify-content: space-around;
                                   padding-left:10px;
                                  >.images {
                                      width:200px;
                                      >img {
                                          width:100%;
                                      }
                                  }
                                  >#photo {
                                      width:300px;
                                  }

                                   >img {
                                       width:100%;
                                   }
                               }
                           }
                           >div{
                               cursor: pointer;
                            //    position: relative;
                               >input {
                                //    position: absolute;
                                //    left:0px;
                                //    top:0px;
                                //    opacity: 0;
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
                           padding-right: 20px;
                           padding-left:20px;
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
                               font-size: 30px;
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
                   display: flex;
                   justify-content: space-between;
                   padding:30px 0px;
                   >p {
                       font-size: 30px;
                      &:nth-of-type(1){
                          margin-left:20px;
                      }
                      &:nth-of-type(2){
                          margin-right:20px;
                      }
                   }
                  
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
              background-color: #4B66AF;
              width:92%;
              margin-top:60px;
              margin-left:4%;
              margin-bottom: 100px;
              border-radius: 15px;

           }
       }
   }
</style>

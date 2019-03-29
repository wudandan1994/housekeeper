<template>
    <div id="personal-center-component">
        <header>个人中心</header>
        <div class="container">
            <div class="top">
                <div class="background"></div>
                <div class="yellow"></div>
                <div class="person">
                   <div class="detail">
                       <p class="arrow">详情&nbsp;&nbsp;<van-icon name="arrow" /></p>
                       <div class="user">
                           <div class="watch">
                                <h3>
                                    <span>王多鱼</span>&nbsp;&nbsp;
                                    <span>
                                        <van-icon name="gem" />
                                    </span>
                                </h3>
                                <p>您是链名片的第100位用户</p>
                                <p>
                                    <router-link to="/vip" tag="span">升VIP</router-link>
                                    <router-link to="/vip/realName" tag="span">去实名</router-link>
                                </p>
                           </div>
                           <div class="forward">
                                <p>
                                    <van-icon name="manager" />
                                </p>
                           </div>
                       </div>
                       <div class="send">
                           <p>
                               <span>300</span>&nbsp;&nbsp;&nbsp; 看过我的人
                           </p>
                           <p>
                               <span>55</span>&nbsp;&nbsp;&nbsp;转发我的人
                           </p>
                       </div>
                   </div>
                   <div class="more">
                       <p>专享更多会员权益</p>
                       <p>
                           <span>会员升级</span>
                       </p>
                   </div>
                </div>
            </div>
            <div class="goods">
                <ul>
                    <li>
                        <span>
                            <van-icon name="comment" />
                        </span>
                        <a href="#">
                            我的名片
                            <van-icon name="arrow" />
                        </a>
                    </li>
                    <li>
                        <span>
                            <van-icon name="comment" />
                        </span>
                        <a href="#">
                            名片夹
                            <van-icon name="arrow" />
                        </a>
                    </li>
                    <li>
                        <span>
                            <van-icon name="comment" />
                        </span>
                        <a href="#">
                            商品中心
                            <van-icon name="arrow" />
                        </a>
                    </li>
                    <li>
                        <span>
                            <van-icon name="comment" />
                        </span>
                        <a href="#">
                            我的账户
                            <van-icon name="arrow" />
                        </a>
                    </li>
                    <li>
                        <span>
                            <van-icon name="comment" />
                        </span>
                        <a href="#">
                            我的卡券
                            <van-icon name="arrow" />
                        </a>
                    </li>
                    <li>
                        <span>
                            <van-icon name="comment" />
                        </span>
                        <a href="#">
                            已购买
                            <van-icon name="arrow" />
                        </a>
                    </li>
                    <li>
                        <span>
                            <van-icon name="comment" />
                        </span>
                        <a href="#">
                            推荐给好友
                            <van-icon name="arrow" />
                        </a>
                    </li>
                    <li>
                        <span>
                            <van-icon name="comment" />
                        </span>
                        <a href="#">
                            关于我们
                            <van-icon name="arrow" />
                        </a>
                    </li>
                    <li>
                        <span>
                            <van-icon name="comment" />
                        </span>
                        <a href="#">
                            帮助中心
                            <van-icon name="arrow" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>

<style lang="less">
  #personal-center-component {
      >header {
          height: 46px;
          width:100%;
          background-color: #0A0E15;
          color: #fff;
          line-height: 46px;
          text-align: center;
          position: fixed;
      }
      >.container {
          width:100%;
          padding-top:45px;
          padding-bottom: 50px;
          box-sizing: border-box;
          >.top{
              position: relative;
              >.background {
                  width:100%;
                  height: 400px;
                  background-color:#222222; 
              }
              >.yellow {
                  width:100%;
                  height:100px;
                  background-color:#F8BA6D; 
              }
              >.person {
                  position: absolute;
                  width:96%;
                  margin:20px 20px;
                  box-sizing: border-box;
                  position: absolute;
                  top:0px;
                  left:0px;
                  box-shadow: 1px 1px 1px 2px #ccc;
                  border-radius:2px;
                  >.detail {
                      background-color:#343434; 
                      color:#ddd;
                      padding-top:20px;
                      padding-bottom: 20px;
                      padding-left:30px;
                      padding-right: 20px;
                      >.arrow {
                          text-align: right;
                      }
                      >.user {
                          display: flex;
                          justify-content: space-between;
                          >.watch {
                              >h3 {
                                  font-size: 40px;
                                  >span {
                                      &:nth-of-type(1){
                                          color:#DAC795;
                                          font-weight: bolder;
                                      }
                                  }
                                  >span {
                                      &:nth-of-type(2){
                                          padding-top:5px;
                                      }
                                  }
                              }
                              > P{
                                 &:nth-of-type(1){
                                     margin-top:20px;
                                     margin-bottom: 30px;
                                     color:#ddd;
                                 } 
                              }
                              >p {
                                  &:nth-of-type(2) { 
                                      padding-top:15px;
                                      padding-bottom:15px;
                                      >span {
                                          background-color: #fff;
                                          color:#000;
                                          padding:3px 20px;
                                          border:1px solid #D0C19A;
                                          margin:4px;
                                          font-size: 30px;
                                          font-weight: bolder;
                                      }
                                  }
                              }
                          }
                          >.forward {
                              >p {
                                  font-size:130px;
                                  margin-top:30px;
                              }
                          }
                      }
                      >.send {
                          display: flex;
                          justify-content: space-between;
                          margin-top:30px;
                          margin-bottom: 20px;
                          >p {
                               font-size: 36px;
                              >span {
                                  color:#D9CFA7;
                              }
                              
                          }
                      }
                  }
                  >.more {
                      background-color: #fff;
                      display: flex;
                      justify-content: space-between;
                      padding:30px;
                      font-size:40px;
                      color:#000;
                      border-radius:10px;
                      >p{
                          &:nth-of-type(2){
                              >span {
                                  background-color:#F8BA71;
                                  padding:10px 20px; 
                                  border-radius:30px;
                              }
                          }
                      }
                  }
              }
          }
          >.goods {
              >ul{
                  padding-left:20px;
                  >li {
                      height: 60px;
                      line-height:40px;
                      display: flex;
                      font-size: 30px;
                      justify-content: space-between;
                    //   padding:20px 0px 20px 5px;
                    margin:20px 0px;
                      >span {
                          color:#F8BA6D;
                      }
                      >a {
                          display: flex;
                          flex:1;
                          margin-left:20px;
                          justify-content: space-between;
                          color:#000;
                          border-bottom: 1px solid #ccc;
                          padding-bottom: 20px;
                      }
                  }
              }
          }
      }
  }
</style>

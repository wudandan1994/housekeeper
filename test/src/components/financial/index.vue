<template>
    <div id="financial-component">
       <div class="per-message top row">
           <div class="avator  center"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554102237&di=98f8ab1d8a034d1c6b7b96842732022e&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F22%2F20170622131955_h4eZS.thumb.700_0.jpeg"></div>
           <div class="detail column">
               <div class="name-top row">
                   <div class="name start-center">任我行</div>
       
       
                   <div class="top center"><div class="toTop center">已置顶</div></div>
               </div>
               <div class="company">传帮带(上海)网络科技有限公司</div>
               <div class="bank"><span>所属银行:招商银行</span></div>
           </div>
           <div class="add-friends column">
               <div class="add center"><div>加好友</div></div>
               <div class="address center">
                   <van-icon name="location"/>信阳市
                </div>
           </div>
       </div>
       <div class="per-message row">
           <div class="avator center">
               <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554102237&di=98f8ab1d8a034d1c6b7b96842732022e&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F22%2F20170622131955_h4eZS.thumb.700_0.jpeg">
               </div>
           <div class="detail column">
               <div class="name-top row">
                   <div class="name start-center">任我行</div>
                   <div class="top center"><div class="toTop center">已置顶</div></div>
               </div>
               <div class="company">传帮带(上海)网络科技有限公司</div>
               <div class="bank"><span>所属银行:招商银行</span></div>
           </div>
           <div class="add-friends column">
               <div class="add center"><div>加好友</div></div>
               <div class="address center">
                   <van-icon name="location"/>信阳市
                </div>
           </div>
       </div>
       <div class="per-message row">
           <div class="avator center"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554102237&di=98f8ab1d8a034d1c6b7b96842732022e&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F22%2F20170622131955_h4eZS.thumb.700_0.jpeg"></div>
           <div class="detail column">
               <div class="name-top row">
                   <div class="name start-center">任我行</div>
                   <div class="top center"><div class="toTop center">已置顶</div></div>
               </div>
               <div class="company">传帮带(上海)网络科技有限公司</div>
               <div class="bank"><span>所属银行:招商银行</span></div>
           </div>
           <div class="add-friends column">
               <div class="add center"><div>加好友</div></div>
               <div class="address center">
                   <van-icon name="location"/>信阳市
                </div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
         
        }
    },
    methods: {
       
    }
}
</script>

<style lang="less" >
    #financial-component{
        color: black;
        margin-bottom: 100px;
    }
   .per-message{
       width: 100vw;
       height: 120px;
       padding:20px 0px;
       border-bottom: solid 1px rgb(204, 204, 204);
       margin-bottom: 10px;
       >.detail {
         margin-left:10px;
       }
   }
   .van-tabs__content{
       margin-top:40px;
   }
   .avator{
        width: 100px;
       height: 100px;
       margin-left:20px;
       border-radius: 50%;
    //    border:5px solid red;
       overflow: hidden;
   }
   .avator img{
     width:100%;
     display: block;
   }
   .detail{
       width: 65%;
       height: 100%;
   }
   .name-top{
       width: 100%;
       height: 40%;
   }
   .name{
       width: auto;
       height: 100%;
       font-size: 26px;
       padding-left: 2px;
       padding-right: 2px;
       font-weight: 700;
       padding-top:3px;
       padding-bottom: 10px;
       color: rgb(51, 51, 51);
       overflow: hidden;
   }
   .top{
       width: auto;
       height: 100%;
       margin-left: 10px;
   }
   .toTop{
       width: auto;
       height: auto;
       padding: 5px;
       font-size: 11px;
       color: white;
       border-radius: 10px;
       background-color: rgb(189, 59, 60);
       border: 1px solid rgb(207, 158, 94);
   }
   .company{
       width: 100%;
       height: 25%;
        font-size: 12px;
        font-weight: 400;
        color: rgb(102, 102, 102);
        margin-bottom:15px;
        margin-top:15px;
   }
   .bank{
       width: 100%;
       height: 35%;
       margin-bottom: 10px;
   }
   .bank span{
       padding: 5px 10px;
       font-size: 24px;
       color: rgb(185, 117, 12);
       border-radius:10px;
       background-color: rgb(242, 242, 242);
       border: 2px solid #888;
   }
   .add-friends{
       width: 20%;
       height: 100%;
   }
   .add{
       width: 100%;
       height: 60%;
   }
   .add div{
        width: auto;
        height: auto;
        border-radius: 4px;
        background-color: rgb(159, 103, 17);
        color: white;
        padding:8px;
        margin-bottom: 30px;
   }
   .address{
       width: 100%;
       height: 40%;
   }
</style>

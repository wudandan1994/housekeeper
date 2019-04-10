<template>
    <div id="page-user-AccountManage">
        <header class="manage loan">
            <van-nav-bar title="账户管理" left-text="返回" left-arrow @click-left="handleReturnHome" @click-right="handleMore">
                <van-icon name="weapp-nav" slot="right" />
            </van-nav-bar>
        </header>
        <div class="personalCenter row">
            <div class="avator center"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553937143739&di=6455bedd462d2fd8679cece7475fe8a0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F22%2F20170622131955_h4eZS.thumb.700_0.jpeg" alt=""></div>
            <div class="name-details">
                <div class="name-level row">
                    <div class="name start-center">Giovanni</div>
                    <div class="level center"><div>实习</div></div>
                </div>
                <div class="code start-center"><div class="center">推荐码:65824538</div></div>
            </div>
        </div>
        <div class="integral-cash row">
            <div class="integral">
                <div class="can-title center">可提现积分</div>
                <div class="can-number center">123</div>
            </div>
            <div class="integral">
                <div class="can-title center">可提现金额</div>
                <div class="can-number center">123</div>
            </div>
        </div>
        <router-link tag="div" class="per-menu toTop row" to="/personalCenter/incomedetail/integralCash">
            <div class="icon start-center"><i class="iconfont icon-jine"></i></div>
            <div class="menu-name start-center">积分提现</div>
            <div class="insert-icon center"><i class="iconfont icon-more"></i></div>
        </router-link>
         <router-link to="/personalCenter/incomedetail/cash" tag="div" class="per-menu row">
            <div class="icon start-center"><i class="iconfont icon-xianjin"></i></div>
            <div class="menu-name start-center">现金提现</div>
            <div class="insert-icon center"><i class="iconfont icon-more"></i></div>
         </router-link>
        <router-link tag="div" to="/personalCenter/incomedetail/addcard" class="per-menu toTop row">
            <div class="icon start-center"><i class="iconfont icon-yinhangqia"></i></div>
            <div class="menu-name start-center">银行卡</div>
            <div class="insert-icon center"><i class="iconfont icon-more"></i></div>
        </router-link>
        <router-link tag="div" class="per-menu toTop row" to="/personalCenter/income">
            <div class="icon start-center"><i class="iconfont icon-jine"></i></div>
            <div class="menu-name start-center">收益明细</div>
            <div class="insert-icon center"><i class="iconfont icon-more"></i></div>
        </router-link>
         <router-link tag="div" class="per-menu row" to="/personalCenter/incomedetail/integralDetail">
            <div class="icon start-center"><i class="iconfont icon-xianjin"></i></div>
            <div class="menu-name start-center">积分明细</div>
            <div class="insert-icon center"><i class="iconfont icon-more"></i></div>
        </router-link>
        <div class="agree row">
            <div class="checkbox"><van-checkbox v-model="checked" shape="square" checked-color="rgb(133, 107, 48)"></van-checkbox></div>
            <div class="check-title">我已认真阅读<span>《钱夹宝平台推广规范》</span>,认同平台的经营模式,并且自愿接受协议中的条款</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checked: false
        }
    },
    methods:{
         // 返回首页
        handleReturnHome(){
            this.$router.push({
                path:'/personalCenter'
            })
        },
        // 更多
        handleMore(){
            this.$toast('尽请期待');
        },
        showError(error){ 
            switch(error.code) { 
                case error.PERMISSION_DENIED: 
                alert("定位失败,用户拒绝请求地理定位"); 
                break; 
                case error.POSITION_UNAVAILABLE: 
                alert("定位失败,位置信息是不可用"); 
                break; 
                case error.TIMEOUT: 
                alert("定位失败,请求获取用户位置超时"); 
                break; 
                case error.UNKNOWN_ERROR: 
                alert("定位失败,定位系统失效"); 
                break; 
            } 
        },
        showPosition(position){ 
            var lat = position.coords.latitude; //纬度 
            var lag = position.coords.longitude; //经度 
            alert('纬度:'+lat+',经度:'+lag); 
        }, 

        getLocation(){ 
            if (navigator.geolocation){ 
                navigator.geolocation.getCurrentPosition(this.showPosition,this.showError); 
            }else{ 
                alert("浏览器不支持地理定位。"); 
            } 
        } 
    },
    created(){
        this.getLocation();
    }
}
</script>
<style lang="less" scoped>
    #page-user-AccountManage{
        background: #F7F7F9;
        
        .personalCenter{
            width: 100vw;
            height:200px;
            background: #2C2D31;
            color: white;
            .avator{
                width: 20vw;
                height: 100%;
                >img{
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                }
            }
            .name-details{
                width: 80vw;
                height: 100px;
                margin-top: 50px;
                .name-level{
                    width: 100%;
                    height: 50%;
                    .name{
                        width: auto;
                        height: 100%;
                    }
                    .level{
                        width: auto;
                        height: auto;
                        margin-left: 5%;
                    }
                }
                .code{
                    width: 100%;
                    height: 50%;
                    >div{
                        width: auto;
                        height: 50%;
                        border: solid 0.02rem #ccc;
                        border-radius: 20px;
                        padding: 5px;
                    }
                }
            }
        }
        .integral-cash{
            width: 100vw;
            height: 180px;
            background: #2C2D31;
            color: white;
            .integral{
                width: 50%;
                height: 100%;
                .can-title,.can-number{
                    width: 100%;
                    height: 50%;
                }
            }
        }
        .toTop{
            margin-top: 20px;
        }
        .per-menu{
            width: 100vw;
            height: 100px;
            background: white;
            .icon{
                width: 10vw;
                height: 100%;
                margin-left: 3vw;
                border-bottom: solid 1px #EDEDED;
                >i{
                    font-size: 35px;
                    color: black;
                }
            }
            .menu-name{
                width: 77vw;
                height: 100%;
                border-bottom: solid 1px #EDEDED;
            }
            .insert-icon{
                width: 7vw;
                height: 100%;
                border-bottom: solid 1px #EDEDED;
                >i{
                    font-size: 35px;
                    color: black;
                }
            }
        }
        .agree{
            width: 90vw;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            .check-title{
                font-size: 10px;
            }
        }
    }
</style>


<template>
    <div id="page-detail">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="end-center"><van-icon name="friends-o" color="#fff" size="28px"/></span>
            </div>
        </header>
        <div class="big-title start-center">完善详细信息</div>
        <div class="menus">
            <div class="per-menu">
                <div class="title start-center">实名认证</div>
                <div class="state center"><div class="active center">已完成</div></div>
                <div class="more end-center"><van-icon name="arrow"/></div>
            </div>
            <router-link tag="div" to="Driving" class="per-menu">
                <div class="title start-center">行驶证</div>
                <div class="state center"><div class="normal center">未完成</div></div>
                <div class="more end-center"><van-icon name="arrow"/></div>
            </router-link>
            <div class="per-menu">
                <div class="title start-center">车辆信息</div>
                <div class="state center"><div class="normal center">未完成</div></div>
                <div class="more end-center"><van-icon name="arrow"/></div>
            </div>
        </div>
        <router-link tag="div" to="/collar" class="next center"><button>下一步</button></router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods: {
        handleBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
#page-detail{
    padding-top: 86px;
    header{
        width: 100%;
        height: 86px;
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        background: rgba(60, 60, 60, 0.9);
        .top{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 0px 20px;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            line-height: 86px;
            span{
                font-size: 30px;
                color: #ffffff;
            }
        }
    }
    .big-title{
        width: 92%;
        height: 100px;
        border-bottom: solid 1px rgba(227, 227, 227, 1);
        margin: 20px auto auto auto;
        font-size: 40px;
        font-weight: 600;
        box-sizing: border-box;
        padding-left: 1em;
    }
    .menus{
        width: 84.8%;
        height: auto;
        margin: 20px auto auto auto;
        .per-menu{
            width: 100%;
            height: 120px;
            border-bottom: solid 1px rgba(227, 227, 227, 1);
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            box-sizing: border-box;
            .title{
                width: 75%;
                color: rgba(102, 102, 102, 1);
                font-size: 32px;
            }
            .state{
                width: 20%;
                height: 100%;
                .normal{
                    width: 95%;
                    height: 50%;
                    border-radius: 28px;
                    color: rgba(197, 197, 197, 1);
                    box-shadow: 0px 0px 2px 2px rgba(197, 197, 197, 1);
                }
                .active{
                    width: 95%;
                    height: 50%;
                    border-radius: 28px;
                    box-shadow: 0px 0px 2px 2px rgba(123, 201, 140, 1);
                    color: rgba(123, 201, 140, 1);
                }
            }
            .more{
                width: 5%;
                height: 100%;
            }
            
        }
    }
    .next{
        width: 92%;
        height: 100px;
        margin: 300px auto auto auto;
        button{
            width: 100%;
            height: 100%;
            background: rgba(229,229,229,1);
            color: #ffffff;
            border: none;
            border-radius: 50px;
            font-size: 38px;
        }
    }
}
</style>



<template>
    <div id="integral-detail">
        <header class="manage loan">
            <van-nav-bar title="积分明细" left-text="返回" left-arrow @click-left="handleReturnHome" @click-right="handleMore">
                <van-icon name="weapp-nav" slot="right" />
            </van-nav-bar>
        </header>
        <div class="integral">
            <div class="avator"><img src="http://img007.hc360.cn/g6/M00/42/87/wKhQsVQZOgKEK5FZAAAAAANX5o4873.jpg" alt=""></div>
            <div class="name-level start-center">
                <div class="name">Giovanni</div>
                <div class="level">实习</div>
            </div>
            <div class="centers">
                <div class="number center">25.00</div>
                <div class="title center">当前积分</div>
            </div>
            <div class="other center">车险奖励基金: 0(冻结)</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        // 返回首页
        handleReturnHome(){
            this.$router.push({
                path:'/ponserCenter/userAccountManage'
            })
        },
        // 更多
        handleMore(){
            this.$toast('尽请期待');
        },
    }
}
</script>
<style lang="less" scoped>
    #integral-detail{
        width: 100vw;
        height: 100vh;
        overflow: scroll;
        background: #EEEFF1;
        .integral{
            width: 100vw;
            height: 20vh;
            background: white;
            position: relative;
            .avator{
                width: 12vw;
                height: 12vw;
                position: absolute;
                top: 2vh;
                left: 2vw;
                >img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .name-level{
                width: auto;
                height: 2vh;
                position: absolute;
                top: 3vh;
                left: 18vw;
                .name{
                    font-weight: bold;
                }
                .level{
                    margin-left: 2vw;
                    color: blue;
                }

            }
            .centers{
                width: 50vw;
                height: 8vh;
                background: #ccc;
                position: absolute;
                left: 25vw;
                top: 6vh;
                .number{
                    width: 100%;
                    height: 60%;
                    font-size: 35px;
                    font-weight: bold;
                }
                .title{
                    width: 100%;
                    height: 40%;
                }
            }
            .other{
                width: 100vw;
                height: auto;
                position: absolute;
                left: 0;
                bottom: 2vh;
            }
        }
    }
</style>

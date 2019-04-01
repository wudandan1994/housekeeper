<template>
    <div id="IncomeDetail">
         <header class="manage loan">
            <van-nav-bar title="收入明细" left-text="返回" left-arrow @click-left="handleReturnHome">
            </van-nav-bar>
        </header>
        <div class="card row">
            <div class="children">
                <div class="number center">2554</div>
                <div class="title center">邀请成功(人)</div>
            </div>
            <div class="children">
                <div class="number center">2554</div>
                <div class="title center">红包奖励(元)</div>
            </div>
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
                path:'/personalCenter/income'
            })
        }
    }
}
</script>
<style lang="less" scoped>
    #IncomeDetail{
        .card{
            width: 95%;
            height:400px;
            margin-left: auto;
            margin-top: 100px;
            margin-right: auto;
            border: solid 0.02rem #ccc;
            border-radius: 40px;
            .children{
                width: 50%;
                height: 100%;
                .number{
                    width: 100%;
                    height: 50px;
                    margin-top: 150px;
                    color: #D09F60;
                    font-weight: bold;
                }
                .title{
                    width: 100%;
                    height: 50px;
                }
            }
        }
    }
</style>

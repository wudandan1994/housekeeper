<template>
    <div id="page-user-AccountManage">
        <header class="manage loan">
            <van-nav-bar title="账户管理" left-text="返回" :fixed="fixed" left-arrow @click-left="handleReturnHome" @click-right="handleMore">
                <van-icon name="weapp-nav" slot="right" />
            </van-nav-bar>
        </header>
    </div>
</template>
<script>
export default {
    data(){
        return{
            fixed: true
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
    }
}
</script>
<style lang="less" scoped>
    #page-user-AccountManage{
        background: #F7F7F9;
    }
</style>


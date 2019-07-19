<template>
    <transition name="van-slide-left">
        <div id="component-order" v-if="order_show" @click="handleClose">
            <van-radio-group v-model="order" @change="handleChangeCheck">
                <div class="order">
                    <div class="start-center" @click="handleChangeCheck('date')">
                        <span class="start-center">
                            <van-icon name="checked" color="#4b66af" size="18px" v-if="order == 'date'"/>
                            <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                        </span>
                        <span class="start-center" style="box-sizing:border-box;padding-left:4px">最后访问时间</span>
                    </div>
                    <div class="start-center" @click="handleChangeCheck('count')">
                        <span class="start-center">
                            <van-icon name="checked" color="#4b66af" size="18px" v-if="order == 'count'"/>
                            <van-icon name="circle" color="#cccccc" size="18px" v-else/>
                        </span>
                        <span class="start-center" style="box-sizing:border-box;padding-left:4px">访问次数</span>
                    </div>
                </div>
            </van-radio-group>
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return{
            order: '',
        }
    },
    props: {
        order_show: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        handleClose(){
            this.$emit('closeOrder');
        },
        handleChangeCheck(item){
            this.order = item;
            this.$emit('changeCheck',item);
        }
    }
}
</script>
<style lang="less">
#component-order{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    box-sizing: border-box;
    padding-top: 300px;
    .order{
        width: 100vw;
        height: auto;
        background: #fff;
        box-sizing: border-box;
        padding-left: 30px;
        >div{
            height: 80px;
            font-size: 30px;
        }
    }
}
</style>

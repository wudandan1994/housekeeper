<template>
    <div id="component-scroll">
        <div class="scroll center">
           <DigitRoll ref='digitroll' :rollDigits='digits'/>
        </div>
        <div class="big-title">{{title}}</div>
    </div>
</template>
<script>
import DigitRoll from '@huoyu/vue-digitroll'
export default {
    data(){
        return{
           digits: 5786786, 
        }
    },
    components: { DigitRoll },
    methods:{
    },
    created(){
    }
}
</script>
<style lang="less" scoped>
    #component-scroll{
       .scroll{
           width: 85%;
           height: 100px;
           background: #4b66af;
           overflow: hidden;
           margin: 20px auto auto auto;
           color: #fff;
           font-size: 50px;
           font-weight: 700;
           border-radius: 10px;
           box-shadow: 0px 0px 8px 2px #008080;
       }
       .big-title{
            width: 85%;
            height: 80px;
            margin: auto;
            border: solid 1px red;
       }
    }
</style>

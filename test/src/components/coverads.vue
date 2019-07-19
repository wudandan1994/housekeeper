<template>
      <div class="covertop" v-show="showads">
            <img src="http://pay.91dianji.com.cn/ads.jpg" alt="">
            <div class="enter">
                <van-button round size="normal" type="default">{{count}}秒</van-button>
            </div>
      </div>
</template>

<script>
export default {
    data () {
        return {
            showads :true,
            count:3,
            timeId:null
        }
    },
    created () {
        
    },
    mounted () {
        this.timeId=setInterval(()=>{
            this.count--
            if(this.count<1){
                 this.showads=false
                 this.count=3
                 clearInterval(this.timeId)
             }
        },1000)
       
        
    }                                      

}
</script>

<style lang="less" scoped>
  
   .covertop {
            position: fixed;
            top:0;
            left:0;
            bottom: 0;
            right: 0;
            opacity: 1;
            transition: opacity .3s ease;
            box-sizing: border-box;
            &.fade-enter,
            &.fade-leave-to {
                opacity: 0;
            }
            z-index: 9999;
            >img {
            width: 100%;
            }
            .enter{
                position: absolute;
                right:0;
                top:20px;
                .van-button--default {
                    // background-color: #ddd;
                    background-color: rgba(221, 221, 221, .3);
                    color:#fff;
                    // padding:10px 15px;
                    width:140px;
                    height: 60px;
                    border:1px solide #fff;
                }
            }
        }

</style>

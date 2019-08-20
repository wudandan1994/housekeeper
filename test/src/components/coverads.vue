<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-19 11:17:47
 * @LastEditTime: 2019-08-13 14:19:33
 * @LastEditors: Please set LastEditors
 -->
<template>
    <transition name="van-fade">
        <div class="covertop" v-show="showads">
            <img :src="poster" alt="" v-on:click.self="handleUrl">
            <div class="enter">
                <van-button round size="normal" type="default">{{count}}秒</van-button>
            </div>
            <div class="skip center" @click="showads = false">跳过</div>
        </div>
    </transition>
</template>

<script>
import {axiosPost} from '@/lib/http'
export default {
    data () {
        return {
            showads :true,
            count:4,
            timeId:null,
            poster: '',
            path: '',
        }
    },
    methods: {
        getImg(){
              axiosPost("/customer/showAdvertisement")
              .then(res=>{
                  if(res.data.success){
                    //   console.log(res,'result')
                      this.poster = res.data.data.img;
                      this.path = res.data.data.url;
                  }else{
                    //   console.log(err,'error')
                  }
              })
              .catch(err=>{
                //   console.log(err,'error')
              })
        },
        handleUrl(){
            window.location.href= this.path;
        }
    },
    created () {
        this.getImg()
        
    },
    mounted () {
        this.timeId=setInterval(()=>{
            this.count--
            if(this.count == 0){
                 this.showads=false
                //  this.count=3
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
                right:10px;
                top:20px;
                .van-button--normal {
                    font-size: 30px;
                }
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
            .skip{
                padding: 15px 20px;
                background-color: rgba(221, 221, 221, 0.8);
                position: absolute;
                z-index: 2;
                color: #fff;
                bottom: 20%;
                right: 5%;
                font-size: 30px;
                border-radius: 50px;
            }
        }

</style>

<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-02 18:39:54
 * @LastEditTime: 2019-08-20 19:34:32
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="component-notice" v-if="notice" @click="handleCloseNotice(data.id)">
        <div class="notice">
            <div class="notice-title center">{{data.title}}</div>
            <div class="notice-content" v-html="data.content"></div>
        </div>
    </div>
</template>
<script>
import { axiosPost } from '@/lib/http'
export default {
    data(){
        return{
            notice: false,
            type: true,
            data: [],
        }
    },
    methods:{
        handleCloseNotice(obj){
            this.notice = false;
            let params = {
                id: obj
            };
            axiosPost('/customer/insertRead',params).then(res =>{
                if(res.data.success){
                }else{
                }
            }).catch(res =>{
            })
        },
        // 请求通告详情
        handleObtainNotice(){
            axiosPost('/customer/getNotice').then(res =>{
                if(res.data.success){
                    if(res.data.data === null){
                        this.notice = false;
                    }else{
                        this.notice = true;
                        this.data = res.data.data;
                    }
                }else{
                }
            }).catch(res =>{
            })
        }
    },
    created () {
        this.handleObtainNotice();
    }
}
</script>
<style lang="less">
    #component-notice{
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 100000;
        top: 0;
        left: 0;
        .notice{
            width: 80vw;
            height: auto;
            box-sizing: border-box;
            margin: 20vh auto auto auto;
            background: #FFD700;
            border-radius: 10px;
            .notice-title{
                width: 100%;
                height: 150px;
                font-size: 32px;
                font-weight: 700;
            }
            .notice-content{
                width: 100%;
                height: auto;
                font-size: 26px;
                line-height: 50px;
                text-align: justify;
                letter-spacing: 1px;
                box-sizing: border-box;
                padding: 0px 30px 100px 30px;
            }
        }
    }
</style>

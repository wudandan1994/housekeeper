<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-09 14:37:30
 * @LastEditTime: 2019-08-23 09:24:35
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="page-recharge">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="end-center"></span>
            </div>
        </header>
        <div class="tips start-center">请选择您要查看油卡的行驶证，并点击确定</div>
        <div class="list" v-for="(item,index) in list" :key="index" :class="active == index ? 'active' : ''" @click="handleChecked(index,item.id)">
            <div class="per-detail">
                <div>所有人</div>
                <div>{{item.name}}</div>
            </div>
            <div class="per-detail">
                <div>车牌号码</div>
                <div>{{item.carNum}}</div>
            </div>
        </div>
        <div class="submit center" @click="handleSubmit"><button>确定</button></div>
    </div>
</template>
<script>
import { CommonPost } from '@/lib/http'
export default {
    data(){
        return{
            active: '0',
            list: [],
            checkid: '',
            type: '',
            length: '',
        }
    },
    methods:{
        handleBack(){
            this.$router.go(-1);
        },
        handleChecked(item,id){
            this.active = item;
            this.checkid = id;
        },
        handleSubmit(){
            // type = 1表示首次申请油卡，type = 2表示已经申请过油卡
            if(this.length == '0'){
                this.$toast('请先添加行驶证');
            }else{
                if(this.type == '1'){
                    this.$router.push({
                        path: '/Collar',
                        query:{
                            id: this.checkid
                        }
                    });
                }else{
                    this.$router.push({
                        path: '/RechargeList',
                        query:{
                            id: this.checkid
                        }
                    });
                }
            }
        },
         // 查询行驶证
        handleDriving(){
           CommonPost('/gasCard/gascardDrivingList').then(res =>{
               this.list = res.data.data;
               if(Object.keys(res.data.data).length == '0'){
                   this.length = '0';
                   this.$toast('请先添加行驶证');
                //    setTimeout(() =>{
                //        this.$router.push({
                //            path: '/Driving'
                //        })
                //    },1000)
               }else{
                    this.checkid = (res.data.data)[0].id;
               }
               
           }).catch(res =>{
            //    console.log('行驶证查询失败',res);
           })
        },
    },
    created(){
        this.handleDriving();
        this.type = this.$route.query.type;
    }
}
</script>
<style lang="less" scoped>
#page-recharge{
    width: 100vw;
    box-sizing: border-box;
    height: 100vh;
    padding: 86px 0px;
    background:rgba(248,248,248,1);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
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
    .tips{
        width: 90%;
        height: 80px;
        font-size: 32px;
        color: #666;
        margin: auto;
    }
    .list{
        width: 92%;
        height: auto;
        margin: 0px auto 40px auto;
        background: rgba(235, 235, 235, 0.5);
        box-shadow: 0px 0px 1px 1px rgba(232,232,232,1);
        border-radius: 16px;
        .per-detail{
            width: 100%;
            height: 100px;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 0px 20px;
            >div:nth-child(1){
                font-size: 32px;
                color: #666666;
            }
            >div:nth-child(2){
                font-size: 32px;
                color: #000000;
            }
        }
    }
    .active{
        background: #92a4d8;
        .per-detail{
            width: 100%;
            height: 100px;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 0px 20px;
            >div:nth-child(1){
                font-size: 32px;
                color: #f2f2f2;
            }
            >div:nth-child(2){
                font-size: 32px;
                color: #ffffff;
            }
        }
    }
    .submit{
        width: 92%;
        height: 100px;
        margin: 80px auto auto auto;
        button{
            width: 100%;
            height: 100%;
            background: #92a4d8;
            color: #fff;
            font-size: 38px;
            border: none;
            border-radius: 50px;
        }
    }
}
</style>

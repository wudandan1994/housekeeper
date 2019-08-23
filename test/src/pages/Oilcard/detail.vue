<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-08 10:13:21
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * @LastEditTime: 2019-08-21 11:06:06
=======
 * @LastEditTime: 2019-08-21 18:40:43
>>>>>>> cd7a66aec11b130f6c842a20ab278b9f2f1c2285
=======
 * @LastEditTime: 2019-08-23 11:35:11
>>>>>>> cd7a66aec11b130f6c842a20ab278b9f2f1c2285
=======
 * @LastEditTime: 2019-08-21 18:40:43
>>>>>>> cd7a66aec11b130f6c842a20ab278b9f2f1c2285
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="page-detail">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="end-center"></span>
            </div>
        </header>
        <div class="big-title start-center">完善详细信息</div>
        <div class="menus">
            <router-link tag="div" to="/home/verified/verifiedName" class="per-menu">
                <div class="title start-center">实名认证</div>
                <div class="state center"><div class="active center">已完成</div></div>
                <div class="more end-center"><van-icon name="arrow"/></div>
            </router-link>
            <router-link tag="div" to="Driving" class="per-menu">
                <div class="title start-center">添加行驶证</div>
                <!-- <div class="state center"><div class="center" :class="DrivingLicense == '已完成' ? 'active' : 'normal'">未完成</div></div> -->
                <div class="more end-center"><van-icon name="arrow"/></div>
            </router-link>
            <!-- <div class="per-menu">
                <div class="title start-center">车辆信息</div>
                <div class="state center"><div class="normal center">未完成</div></div>
                <div class="more end-center"><van-icon name="arrow"/></div>
            </div> -->
        </div>
        <div class="next center" @click="handleNextStep"><button>下一步</button></div>
    </div>
</template>
<script>
import { CommonPost } from '@/lib/http'
export default {
    data(){
        return{
            have: false,
            list: [],
            type: ''
        }
    },
    methods: {
        handleBack(){
            this.$router.go(-1);
        },
        // 查询行驶证
        handleDriving(){
           CommonPost('/gasCard/gascardDrivingList').then(res =>{
                Object.keys(res.data.data).length == '0' ? this.have = false : this.have = true;
                this.list = res.data.data;
           }).catch(res =>{
            //    console.log('行驶证查询失败',res);
           })
        },
        // 下一步
        handleNextStep(){
            if(this.have){
                this.$router.push({
                    path: '/Recharge',
                    query:{
                        type: this.type
                    }
                })
            }else{
                this.$toast('请先添加行驶证');
            }
        }
    },
    created(){
        this.handleDriving();
        this.type = this.$route.query.type;
    }
}
</script>
<style lang="less" scoped>
#page-detail{
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 86px;
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
            background: #92a4d8;
            color: #ffffff;
            border: none;
            border-radius: 50px;
            font-size: 38px;
        }
    }
}
</style>



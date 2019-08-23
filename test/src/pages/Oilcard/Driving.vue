<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-08 11:17:46
<<<<<<< HEAD
 * @LastEditTime: 2019-08-21 18:41:12
=======
 * @LastEditTime: 2019-08-23 11:35:31
>>>>>>> 4b755bac520ec00aee31ded0e6c4ebc8fb767ed1
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="page-detail">
        <header>
            <div class="top">
                <span class="start-center" @click="handleBack"><van-icon name="arrow-left" color="#ffffff" size="22px"/>返回</span>
                <span class="center">行驶证</span>
                <span class="end-center"></span>
            </div>
        </header>
        <div class="big-title start-center">上传行驶证照片</div>
        <div class="upload center">
            <div>
                <van-uploader :after-read="afterRead" class="center">
                    <van-icon v-if="!uploaded" name="photograph" color="#979797" size="2rem"/>
                    <img class="upload-img" v-if="uploaded" :src="fileList">
                </van-uploader>
            </div>
        </div>
        <div class="person-detail">
            <div class="per-detail">
                <div class="title start-center">所有人</div>
                <div class="input end-center"><input type="text" v-model="params.name" placeholder="请输入行驶证姓名"/></div>
            </div>
            <div class="per-detail">
                <div class="title start-center">车牌号码</div>
                <div class="input end-center"><input type="text" v-model="params.carNum" placeholder="请输入车牌号码"/></div>
            </div>
            <!-- <div class="per-detail">
                <div class="title start-center">车辆识别代号</div>
                <div class="input end-center"><input type="text" v-model="params.carCode"  placeholder="请输入车辆识别代号"/></div>
            </div>
            <div class="per-detail">
                <div class="title start-center">发动机号码</div>
                <div class="input end-center"><input type="text" v-model="params.engineNum" placeholder="请输入发动机号码"/></div>
            </div> -->
        </div>
        <div class="submit center" @click="handleSubmit"><button>确定</button></div>
        <loading :componentload="componentload"></loading>
    </div>
</template>
<script>
import loading from '@/components/loading'
import {CommonPost} from '@/lib/http'
import axios from 'axios'
export default {
    data(){
        return{
            componentload: false,
            uploaded: false,
            name: '',
            carNo: '',
            distinguishNo: '',
            engineNo: '',
            fileList: '',
            params: {
                name: '',
                carNum: '',
                // carCode: '',
                // engineNum: '',
                photo: 'sd',
            }
        }
    },
    components: {
        loading
    },
    methods: {
        handleBack(){
            this.$router.go(-1);
        },
        // 驾驶证上传
        afterRead(file){
            this.componentload = true;
            console.log('驾驶证',file.content);
            this.fileList = file.content;
            this.uploaded = true;
            let formData = new FormData();
            formData.append('file',file.file);
            let url = 'http://pay.91dianji.com.cn/api/upload/uploadImg'
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            };
             axios.post(url,formData,config).then(res =>{
                 if(res.data.success){
                     this.params.photo = res.data.data.imgUrl
                 }else{
                     this.$toast('驾驶证上传失败');
                 }
             }).catch(res =>{
                 this.$toast('驾驶证上传失败');
             })
            setTimeout(() =>{
                this.componentload = false;
            },1000);
        },
        // 提交
        handleSubmit(){
            if(this.params.photo == ''){
                this.$toast('请上传行驶证照片');
                return false;
            }
            else if(this.params.name == ''){
                this.$toast('请输入驾驶证姓名');
                return false;
            }
            else if(this.params.carNum == ''){
                this.$toast('请输入车牌号');
                return false;
            }
            // else if(this.params.carCode == ''){
            //     this.$toast('请输入车辆识别代码');
            //     return false;
            // }
            // else if(this.params.engineNum == ''){
            //     this.$toast('请输入发动机号码');
            //     return false;
            // }
            else{
                CommonPost('/gasCard/bindDrivingLicense',this.params).then(res =>{
                    // console.log('行驶证添加成功',res);
                    this.$toast('行驶证添加成功');
                    setTimeout(() =>{
                        this.$router.go(-1);
                    },2000);
                }).catch(res =>{
                    // console.log('行驶证添加失败',res);
                })
            }
        }
    }
}
</script>
<style lang="less" scoped>
#page-detail{
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 86px 0px;
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
        font-size: 32px;
        color: rgba(102, 102, 102, 1);
    }
    .upload{
        width: 85%;
        height: 316px;
        background:rgba(248,248,248,1);
        margin: 20px auto auto auto;
        >div{
             height: 100% !important;
             width: 100% !important;
             .van-uploader{
                height: 100% !important;
                width: 100% !important;   
                .upload-img{
                    width: 100%;
                    height: 100%;
                }
             }
            
        }
    }
    .person-detail{
        width: 89%;
        height: auto;
        margin: auto;
        .per-detail{
            width: 100%;
            height: 120px;
            border-bottom: solid 1px rgba(227, 227, 227, 1);
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            .title{
                font-size: 32px;
                color: #666666;
            }
            .input{
                input{
                    font-size: 28px;
                    text-align: right;
                    padding-right: 5px;
                    border: none;
                    background: transparent;
                }
                input::-webkit-input-placeholder{
                    font-size: 28px;
                    padding-top: 8px;
                }
            }
        }
    }
    .submit{
        width: 92%;
        height: 100px;
        margin: 40px auto auto auto;
        button{
            width: 100%;
            height: 100%;
            background: rgba(146,164,216,1);
            color: #ffffff;
            border: none;
            border-radius: 50px;
            font-size: 38px;
        }
    }
}
</style>



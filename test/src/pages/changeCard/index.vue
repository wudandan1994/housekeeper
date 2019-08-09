<template>
    <div id="collect">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>修改商户信息</span>
            <span></span>
        </header>
        <div class="container">
           <div class="phone">
               <ul>
                   <li>
                        <span>结算户名</span>
                       <input  v-model="accountName" type="text" placeholder="结算户名">
                   </li>
                     <div class="shadow"></div>
                    <li>
                        <span>结算卡号</span>
                       <input v-model="accountNo"  type="number" placeholder="储蓄卡卡号">
                   </li>
                   <li>
                       <span>手机号</span>
                       <input type="number" v-model="mobile" placeholder="手机号码">
                   </li>
                     <div class="shadow"></div>
                   <li>
                       <span>开户行</span>
                       <input type="text"  @click="handleBankNumber" :placeholder="bankName">
                   </li>
                   <li>
                        <span>联行号</span>
                       <input v-model="subBankCode" type="number" placeholder="输入该支开户行行号或者联行号">
                   </li>
                     <div class="shadow"></div>
                    <!-- <li>
                        <span>结算户类型：</span>
                       <input v-model="settleAccType"  type="text" placeholder="选择结算户类型">
                       <span @click="showAcc"><van-icon name="arrow"/></span>
                             <van-actionsheet
                            v-model="show"
                            :actions="actions"
                            cancel-text="取消"
                            @select="onSelect"
                            @cancel="onCancel"
                            />
                   </li> -->
                   
               </ul>
           </div>
           <!-- <router-link to="/home/online" tag="p">联行号在线查询</router-link> -->
           <div class="at-once">
                   <van-button  @click="register" size="large" round type="info">确认修改</van-button>
            </div>
        </div>
         <!-- <loading :componentload="componentload"></loading> -->
         <div class="meng" v-if="bankNumberShow">
             <div class="close" @click="handleClose"></div>
             <div class="picker">
                <input type="text" @input="handleChangeSearchName" v-model="searchName" placeholder="搜索开户行,如忘记请搜索总行">
                <van-picker show-toolbar :columns="columns" @change="onChange" @confirm="onConfirm" />
            </div>
         </div>
    </div>
</template>

<script>
// 联行号JSON文件
import bankNumber from '@/lib/banklist'
import loading from '@/components/loading'
import storage from '@/lib/storage'
import {axiosPost} from '@/lib/http'
export default {
     components:{
      loading
    },
    data() {
        return {
            componentload:true,
            value: '',
            mobile:"",
            accountName:"",
            accountNo:"",
            subBankCode:"",
            // settleAccType:"",
            merType:"",
            show:false,
            bankName: '请选择开户行',
            actions: [
                {
                    name: '公户'
                },
                {
                    name:"私户"
                }
             ],
             columns: [],
             searchName: '',
             bankNumber: [],
             bankNumberShow: false,
             info:""
        }
    },
    methods:{
        onChange(picker, value, index) {
            // console.log('当前值：',value);
            this.bankName = value;
            // 根据当前关键字查询联行号
            var subBankCode = bankNumber.filter(item =>item.bankName == value);
            // console.log('联行号',subBankCode[0].bankCode);
            this.subBankCode = subBankCode[0].bankCode;
        },
        // 选择器确定时间
        onConfirm(value){
            // console.log('当前选择',value);
            this.bankName = value;
            // 根据当前关键字查询联行号
            var subBankCode = bankNumber.filter(item =>item.bankName == value);
            // console.log('联行号',subBankCode[0].bankCode);
            this.subBankCode = subBankCode[0].bankCode;
            this.bankNumberShow = false;
        },
        goBack() {
            this.$router.go(-1);
        },
        
        onSelect(item){
            this.settleAccType=item.name
             this.show = false;
        },
        onCancel(){
            this.show=false
        },
        showAcc(){
            this.show=true
            
        },
        // 选择联行号
        handleBankNumber(){
            this.bankNumberShow = true;
        },
        // 搜索关键字
        handleChangeSearchName(obj){
            // console.log('当前关键字',obj.target.value);
            // 根据关键字过滤json
            var list = bankNumber.filter(item =>(item.bankName).indexOf(obj.target.value) > -1);
            // console.log('关键字过滤后',list);
            if(list.length == '0'){
                this.$toast('查询为空');
            }else{
                this.columns = [];
                for(var item in list){
                    this.columns[item] = list[item].bankName
                }
                // console.log(this.columns);
            }
        },
        // 关闭联行号选择器
        handleClose(){
            this.bankNumberShow = false;
        },
        // 申请商铺
        register(){
            let that=this
            let type=""
            let partten=/0?(13|14|15|16|17|18|19)[0-9]{9}/
            if(that.mobile.trim().length===0){
                that.$toast({
                    message:"手机号码不能为空"
                })
                return
            }
            if( !partten.test(that.mobile)){
                that.$toast({
                    message:"请填写11位手机号码"
                })
                return
            }
            // let parttenCard=/^([1-9]{1})(\d{15}|\d{18})$/
            //  if( !parttenCard.test(that.accountNo)){
            //     that.$toast({
            //         message:"请填写正确卡号"
            //     })
            //     return
            // }


            if( that.accountName.trim().length===0 || that.mobile.trim().length===0
            || that.accountNo.trim().length===0 || that.subBankCode.trim().length===0){
                that.$toast({
                    message:"请将信息填写完整"
                })
                return
            }
           
            let data={
                chMerCode:that.info,
                accountName:that.accountName,
                accountNo:that.accountNo,
                reservedMobile:that.mobile,
                subBankCode:that.subBankCode,
                settleAccType:"2"
              }
            axiosPost("/creditCard/bankCardModify",data)
            .then(function(res){
                if(!res.data.success){
                    that.$toast({
                        message:res.data.message
                    })
                    return
                } else {
                    that.$toast({
                        message:res.data.message
                    })
                   
                }
            })
            .catch(function(err){
                // console.log(err,"error")
            })
        },
        // 查询个人信息
         searchInfo(){
            axiosPost("/creditCard/getMemberReg")
           .then(res=>{
            if(res.data.success){
                 this.info=res.data.data.chMerCode
             }
        })
        .catch(err=>{
            // console.log(err,"error个人信息")
        })
     },
     // 获取实名认证信息
        handleGetAOuth(){
            let url = '/customer/getIdentification';
            let params = {};
            axiosPost(url,params).then(res =>{
                if(res.data.data.status != '0'){
                    this.mobile = this.$store.state.wechat.mobile;
                }
            }).catch(res =>{
                // console.log('获取实名认证状态失败',res);
            })
        }
    },
   
    created () {
        this.searchInfo();
        this.handleGetAOuth();
        // 将json对象转换为数组
        for(var item in bankNumber){
            // console.log('循环',bankNumber[item].bankName);
            this.columns[item] = bankNumber[item].bankName
        }
        // this.columns = bankNumber.bankName;
        // console.log(bankNumber);
    }
}
</script>

<style lang="less">
   #collect {
       >header {
           background-color: #4965AE;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           font-size:28px;
           display: flex;
           z-index:999;
           position: fixed;
           justify-content: space-between;
           >span {
               &:nth-of-type(1) {
                   margin-left: 10px;
               }
               &:nth-of-type(3) {
                   margin-right: 10px;
               }
           }
       }
       >.container {
           padding-top:96px;
           padding-bottom: 50px;
           background-color: #EEEFF1;
           font-size: 34px;
           >.phone {
               >ul{
                 
                   background-color: #fff;
                    .shadow {
                       height:20px;
                       width:100%;
                       background-color: rgb(243, 239, 239);
                   }
                   >li{
                       padding-left:30px;
                       display: flex;
                       flex-wrap: nowrap;
                       border-bottom: 1px solid #ccc;
                       padding-top:40px;
                       padding-bottom: 40px;
                       padding-right: 40px;
                       height: 60px;
                       line-height: 60px;
                       color:#000;
                       >span {
                           &:nth-of-type(1){
                               font-weight: bold;
                           }
                       }
                       &:last-child {
                           border:none;
                       }
                       >span {
                           &:nth-of-type(2){
                               padding:0 10px;
                               margin-right:20px;
                               margin-top:8px;
                               line-height: 60px;
                               border-radius: 10px;
                           }
                        }
                       input {
                           border:none;
                           flex: 1;
                           font-size: 30px;
                        //    text-align: right;
                           height: 100px;
                           margin-top:-26px;
                       }
                       ::-webkit-input-placeholder {
                            font-size:28px;
                            margin-top:-22px;
                       }
                   }
               }
           }
          >.online {
              padding:30px;
               font-size: 30px;
               color:blue;
               font-weight: bold;
               text-align: right;
          }
           
           >.at-once {
               margin-top:60px;
               padding:0 20px;
               .van-button--info {
                   background-color: #4965AE;
               }
               >button {
                   height: 90px;
                   font-size: 28px;
               }
           }
           .van-actionsheet__item {
               height: 90px;
           }
            .van-actionsheet__cancel, .van-actionsheet__item{
               font-size: 28px;
               line-height: 90px;
           }
       }
       .meng{
            width: 100vw;
            height: calc(100vh - 96px);
            background: rgba(0, 0, 0, 0.5);
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 10000;
            .close{
                width: 100vw;
                height: calc(100% - 500px);
            }
           .picker{
                width: 100vw;
                height: 500px;
                background: white;
                background: #F2F2F2;
                >input{
                    width: 98vw;
                    height: 80px;
                    padding-left: 2vw;
                    font-size: 26px;
                    color: #333;
                    border: none;
                    background: #D9D9D9;
                    font-size: 26px;
                }
                input::-webkit-input-placeholder{
                    font-size: 26px;
                    padding-top: 5px;
                }
            }
       }
   }
</style>

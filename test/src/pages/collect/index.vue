<template>
    <div id="collect">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>商户申请</span>
            <router-link to="/home/news" tag="span">操作说明</router-link>
        </header>
        <div class="container">
           <div class="phone">
               <ul>
                   <li>
                       <span>手机号：</span>
                       <input type="number" v-model="reservedMobile" placeholder="输入银行预留手机号码">
                       <!-- <span>
                            <span v-show="showCount">{{count}}秒后再次获取</span>
                            <span @click="getCode" v-show="showCode">获取验证码</span>
                       </span> -->
                   </li>
                    <li>
                        <span>商户名称：</span>
                       <input v-model="merName" type="text" placeholder="商户名称">
                   </li>
                    <li>
                        <span>真实姓名：</span>
                       <input v-model="realName"  type="text" placeholder="真实姓名">
                   </li>
                    <li>
                        <span>地址：</span>
                       <input  v-model="merAddress"   type="text" placeholder="地址信息">
                   </li>
                    <li>
                        <span>证件号：</span>
                       <input v-model="idCard"  type="text" placeholder="身份证号码">
                   </li>
                   <li>
                        <span>结算户名：</span>
                       <input  v-model="accountName" type="text" placeholder="真实姓名与结算户名必须一致">
                   </li>
                    <li>
                        <span>卡号：</span>
                       <input v-model="accountNo"  type="number" placeholder="储蓄卡卡号">
                   </li>
                   <li>
                       <span>手机号：</span>
                       <input type="number" v-model="mobile" placeholder="手机号码">
                   </li>
                   <li>
                       <span>开户行：</span>
                       <!-- <span class="bank" @click="handleBankNumber">{{bankName}}</span> -->
                       <input type="text"  @click="handleBankNumber" :placeholder="bankName">
                       <!-- <span @click="handleBankNumber">测试</span> -->
                   </li>
                   <li>
                        <span>联行号：</span>
                       <input v-model="subBankCode" type="number" placeholder="输入该支开户行行号或者联行号">
                   </li>
                    <li>
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
                   </li>
                   <li>
                        <span>商户类型：</span>
                       <input  v-model="merType" type="text" placeholder="选择商户类型">
                        <span @click="showMer"><van-icon name="arrow"/></span>
                         <van-actionsheet
                            v-model="showTwo"
                            :actions="action"
                            cancel-text="取消"
                            @select="onSelectTwo"
                            @cancel="onCancelTwo"
                            />
                   </li>
               </ul>
           </div>
           <!-- <router-link to="/home/online" tag="p">联行号在线查询</router-link> -->
           <div class="at-once">
                   <van-button  @click="register" size="large" round type="info">下一步</van-button>
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
            reservedMobile:"",
            mobile:"",
            merName:"",
            realName:"",
            merAddress:"",
            idCard:"",
            accountName:"",
            accountNo:"",
            subBankCode:"",
            settleAccType:"",
            merType:"",
            show:false,
            showTwo:false,
            bankName: '请选择开户行',
            actions: [
                {
                    name: '公户'
                },
                {
                    name:"私户"
                }
             ],
             action:[
                 {
                     name: '个人户' 
                 },
                 {
                      name: '小微户' 
                 },
                  {
                      name: '个体户' 
                 },
                  {
                      name: '公司户' 
                 },
             ],
             columns: [],
             searchName: '',
             bankNumber: [],
             bankNumberShow: false,
        }
    },
    methods:{
        onChange(picker, value, index) {
            console.log('当前值：',value);
            this.bankName = value;
            // 根据当前关键字查询联行号
            var subBankCode = bankNumber.filter(item =>item.bankName == value);
            console.log('联行号',subBankCode[0].bankCode);
            this.subBankCode = subBankCode[0].bankCode;
        },
        // 选择器确定时间
        onConfirm(value){
            console.log('当前选择',value);
            this.bankName = value;
            // 根据当前关键字查询联行号
            var subBankCode = bankNumber.filter(item =>item.bankName == value);
            console.log('联行号',subBankCode[0].bankCode);
            this.subBankCode = subBankCode[0].bankCode;
            this.bankNumberShow = false;
        },
        goBack() {
            this.$router.push('/home')
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
        showMer(){
            this.showTwo=true
        },
        onSelectTwo(item){
             this.merType=item.name
              this.showTwo=false
        },
        onCancelTwo(){
            this.showTwo=false
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
                console.log(this.columns);
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
            let partten=/^1\d{10}$/
            if(that.reservedMobile.trim().length===0 || that.mobile.trim().length===0){
                that.$toast({
                    message:"手机号码不能为空"
                })
                return
            }
            if(!partten.test(that.reservedMobile) || !partten.test(that.mobile)){
                that.$toast({
                    message:"请填写11位手机号码"
                })
                return
            }
            if(that.realName.trim().length===0 || that.merName.trim().length===0 || that.merAddress.trim().length===0 || that.idCard.trim().length===0 || that.accountName.trim().length===0
            || that.accountNo.trim().length===0 || that.subBankCode.trim().length===0 || that.settleAccType.trim().length===0 || that.merType.trim().length===0
            ){
                that.$toast({
                    message:"请将信息填写完整"
                })
                return
            }
            if(that.realName!==that.accountName){
                 that.$toast({
                    message:"姓名与结算户名不一致"
                })
                return
            }
            if(that.merType==="个人户"){
                type="1"
            } else if(that.merType==="小微户"){
                type="2"
            } else if(that.merType==="个体户"){
                type="3"
            } else {
                type="4"
            }
            let data={
                merName:that.merName,
                realName:that.realName,
                merAddress:that.merAddress,
                idCard:that.idCard,
                mobile:that.mobile,
                accountName:that.accountName,
                accountNo:that.accountNo,
                reservedMobile:that.reservedMobile,
                subBankCode:that.subBankCode,
                settleAccType:that.settleAccType==="公户"? "1":"2",
                merType:type
            }
            axiosPost("http://pay.91dianji.com.cn/api/creditCard/memberReg",data)
            .then(function(res){
                // console.log(res,"注册之后的第一次信息");
                if(!res.data.success){
                    that.$toast({
                        message:res.data.message
                    })
                    return
                } else {
                    axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberReg")
                    .then(function(res){
                        // console.log(res,"个人信息查询的结果")
                        if(res.data.success){
                            let info=res.data.data.chMerCode
                            that.componentload=true
                            setTimeout(()=>{
                                that.$router.push({
                                path:"/home/collect/open",
                                query:{
                                   info,
                                }
                             })
                            },500)
                            
                       } else {
                           that.$toast({
                               message:res.data.message
                           })
                       }
                    })
                    .catch(function(err){
                        // console.log(err,"错误的信息");

                    })
                }
            })
            .catch(function(err){
                // console.log(err,"error")
            })
        },
        // 查询个人信息
         searchInfo(){
            axiosPost("http://pay.91dianji.com.cn/api/creditCard/getMemberReg")
           .then(res=>{
            if(res.data.success){
             setTimeout(()=>{
                 this.componentload=false
             },500)
             let info=res.data.data.chMerCode
             this.$router.push({
                     path:"/home/collect/open",
                    query:{
                        info,
                     }
                 })
               
            }else {
                 this.componentload=false
            }
        })
        .catch(err=>{
            // console.log(err,"error个人信息")
        })
     },
     // 获取实名认证信息
        handleGetAOuth(){
            let url = 'http://pay.91dianji.com.cn/api/customer/getIdentification';
            let params = {};
            axiosPost(url,params).then(res =>{
                if(res.data.data.status != '0'){
                    this.reservedMobile = res.data.data.mobile;
                    this.realName = res.data.data.name;
                    this.idCard = res.data.data.idcardnumber;
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
                   padding-left:30px;
                   background-color: #fff;
                   >li{
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
                           text-align: right;

                       }
                       input::-webkit-input-placeholder {
                           font-size: 28px;
                           padding-top: 8px;
                           height: 30px;
                           line-height: 30px;
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
               margin-top:150px;
               padding:0 20px;
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

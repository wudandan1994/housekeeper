<template>
    <div id="collect">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>商户申请</span>
            <!-- <router-link to="/home/news" tag="span">操作说明</router-link> -->
            <span></span>
        </header>
        <div class="container">
           <div class="phone">
               <ul>
                    <!-- <li>
                        <span>商户名称：</span>
                       <input v-model="merName" type="text" placeholder="商户名称">
                   </li> -->
                    <li>
                        <span>真实姓名</span>
                       <input v-model="realName"  type="text" placeholder="真实姓名">
                   </li>
                    <li>
                       <span>手机号</span>
                       <input type="number" v-model="reservedMobile" placeholder="输入银行预留手机号码">
                   </li>
                   <div class="shadow"></div>
                    <!-- <li>
                        <span>地址：</span>
                       <input  v-model="merAddress"   type="text" placeholder="地址信息">
                   </li> -->
                    <li>
                        <span>证件号</span>
                       <input v-model="idCard"  type="text" placeholder="身份证号码">
                   </li>
                   <!-- <li>
                        <span>结算户名：</span>
                       <input  v-model="accountName" type="text" placeholder="真实姓名与结算户名必须一致">
                   </li> -->
                    <li>
                        <span>卡号</span>
                       <input v-model="accountNo"  type="number" placeholder="储蓄卡卡号">
                   </li>
                     <div class="shadow"></div>
                   <!-- <li>
                       <span>手机号：</span>
                       <input type="number" v-model="mobile" placeholder="手机号码">
                   </li> -->
                   <li>
                       <span>开户行</span>
                       <!-- <span class="bank" @click="handleBankNumber">{{bankName}}</span> -->
                       <input type="text"  @click="handleBankNumber" :placeholder="bankName">
                       <span><van-icon name="search" size="20px" /></span>
                       <!-- <span @click="handleBankNumber">测试</span> -->
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
                   <!-- <li>
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
                   </li> -->
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
                 <div class="select">
                     
                <input type="text" @input="handleChangeSearchName" v-model="searchName" placeholder="搜索开户行,如忘记请搜索总行">
                <span><van-icon name="search" size="20px" /></span>
                 </div>
                  
                <van-picker show-toolbar :columns="columns" @change="onChange" @confirm="onConfirm" />
            </div>
         </div>
          <loading :componentload="componentload"></loading>
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
            // componentload:true,
            componentload:false,

            value: '',
            reservedMobile:"",
            mobile:"",
            // merName:"",
            realName:"",
            merAddress:"",
            idCard:"",
            // accountName:"",
            accountNo:"",
            subBankCode:"",
            // settleAccType:"",
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
            this.bankName = value;
            // 根据当前关键字查询联行号
            var subBankCode = bankNumber.filter(item =>item.bankName == value);
            this.subBankCode = subBankCode[0].bankCode;
        },
        // 选择器确定时间
        onConfirm(value){
            this.bankName = value;
            // 根据当前关键字查询联行号
            var subBankCode = bankNumber.filter(item =>item.bankName == value);
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
            // 根据关键字过滤json
            var list = bankNumber.filter(item =>(item.bankName).indexOf(obj.target.value) > -1);
            if(list.length == '0'){
                this.$toast('查询为空');
            }else{
                this.columns = [];
                for(var item in list){
                    this.columns[item] = list[item].bankName
                }
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
            if(that.reservedMobile.trim().length===0 ){
                that.$toast({
                    message:"手机号码不能为空"
                })
                return
            }
            if(!partten.test(that.reservedMobile) ){
                that.$toast({
                    message:"请填写11位手机号码"
                })
                return
            }
            let parttenId=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
            if(!parttenId.test(that.idCard)){
                that.$toast({
                    message:"请填正确的身份证号码"
                })
                return
            }
          
            if(that.realName.trim().length===0  ||  that.idCard.trim().length===0 || that.accountNo.trim().length===0 || that.subBankCode.trim().length===0    ){
                that.$toast({
                    message:"请将信息填写完整"
                })
                return
            }
          
            let data={
                merName:that.realName,
                realName:that.realName,
                merAddress:that.realName,
                idCard:that.idCard,
                mobile:that.reservedMobile,
                accountName:that.realName,
                accountNo:that.accountNo,
                reservedMobile:that.reservedMobile,
                subBankCode:that.subBankCode,
                settleAccType:"2",
                merType:"1"
            }
            that.componentload=true
            axiosPost("/creditCard/memberReg",data)
            .then(function(res){
                if(!res.data.success){
                    that.componentload=false
                    that.$toast({
                        message:res.data.message
                    })
                   
                } else {

                  setTimeout(()=>{
                        that.componentload=false
                        that.$router.go(-1)
                    },500)

                          // axiosPost("/creditCard/getMemberReg")
                    // .then(function(res){
                    //     if(res.data.success){
                    //         let info=res.data.data.chMerCode
                    //         that.componentload=true
                    //         setTimeout(()=>{
                    //             that.componentload=false
                    //             that.$router.push({
                    //             path:"/home/receivables",
                    //             query:{
                    //                info,
                    //             }
                    //          })
                    //         },500)
                            
                    //    } else {
                    //          that.componentload=false
                    //        that.$toast({
                    //            message:res.data.message
                    //        })
                    //    }
                    // })
                    // .catch(function(err){

                    // })



                   
                    // 查询通道二是否有注册
                    // let params={
                    //     bank_cardno:that.accountNo
                    // }
                    // axiosPost("/jxpay/getJxMerchant",params)
                    // .then(res=>{
                    //     console.log(res,'通道二的查询')
                    //     if(res.data.success){
                    //         console.log(res.data.data,'通道二已经签约,要去支付')
                    //         that.$router.push("/home/receivables")
                    //     }else {
                    //         console.log('通道二没有签约，去签约')
                    //         let  datas={
                    //             merchant_name:that.realName,
                    //             id_cardno:that.idCard,
                    //             phone:that.reservedMobile,
                    //             bank_cardno:that.accountNo,
                    //         }
                    //         axiosPost("/jxpay/insertRegister",datas)
                    //         .then(res=>{
                    //             console.log(res,'第二条通道注册')
                    //             if(!res.data.success) {
                    //                 that.$toast(res.data.message)
                    //             } else {
                    //                 console.log("第二条通道注册成功，获取商户号")
                    //                  that.$router.push("/home/receivables")
                    //             }
                    //         })
                    //     }
                    // })




                  
                }
            })
            .catch(function(err){
            })
        },
        // 查询个人信息
         searchInfo(){
            axiosPost("/creditCard/getMemberReg")
           .then(res=>{
            if(res.data.success){
             setTimeout(()=>{
                 this.componentload=false
             },500)
             let info=res.data.data.chMerCode
             this.$router.push({
                     path:"/home/collect/open",
                 })
            }else {
                 this.componentload=false
            }
        })
        .catch(err=>{
        })
     },
     // 获取实名认证信息
        handleGetAOuth(){
            let url = '/customer/getIdentification';
            let params = {};
            axiosPost(url,params).then(res =>{
                if(res.data.data.status != '0'){
                    this.reservedMobile = res.data.data.mobile;
                    this.realName = res.data.data.name;
                    this.idCard = res.data.data.idcardnumber;
                    this.mobile = this.$store.state.wechat.mobile;
                }
            }).catch(res =>{
            })
        }
    },
   
    created () {
        // this.searchInfo();
        this.handleGetAOuth();
        // 将json对象转换为数组
        for(var item in bankNumber){
            this.columns[item] = bankNumber[item].bankName
        }
        // this.columns = bankNumber.bankName;
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
           .van-button--info {
               background-color: #4965AE;
               border-color: #4965AE;
           }
           >.phone {
               >ul{
                   background-color: #fff;
                   .shadow {
                       height:20px;
                       width:100%;
                       background-color: rgb(243, 239, 239);
                   }
                   >li{
                       padding-left:20px;
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
                >.select {
                     background: #D9D9D9;
                    display: flex;
                    height: 80px;
                    line-height: 100px;
                    padding-right:15px;
                     input{
                        width: 98vw;
                        height: 100px;
                        padding-left: 2vw;
                        font-size: 26px;
                        color: #333;
                          flex: 1;
                        border: none;
                        background: #D9D9D9;
                        font-size: 26px;
                        margin-top:-26px;
                }
                ::-webkit-input-placeholder{
                    font-size: .5rem;
                    margin-top:-30px;
                  }
                }
            }
       }
   }
</style>

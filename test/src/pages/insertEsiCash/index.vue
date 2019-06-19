<template>
    <div id="insert-esicash">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>绑定信用卡</span>
            <span></span>
        </header>
        <div class="container">
            <div class="phone">
               <ul>
                   <li>
                        <span>开户姓名：</span>
                       <input  v-model="name" type="text" placeholder="开户姓名">
                   </li>
                    <li>
                        <span>银行卡号：</span>
                       <input v-model="accountNo"  type="number" placeholder="银行卡号">
                   </li>
                   <li>
                       <span>手机号：</span>
                       <input type="number" v-model="mobileNo" placeholder="手机号码">
                   </li>
                   <li>
                       <span>开户证件号：</span>
                       <input type="text"  v-model="idcardNo" placeholder="身份证号码" >
                   </li>
                   <li>
                        <span>开户地区：</span>
                       <input class="area" readonly v-model="area" type="text" placeholder="示例：江苏省-苏州市">
                        <span @click="showPick"><van-icon name="arrow"/></span>
                   </li>
                   <van-picker v-show="showFlag" :columns="columns" @change="onChange"   @confirm="onConfirm"    @cancel="onCancel"  :default-index="0"   show-toolbar/>
                   
               </ul>
           </div>
           <div class="submit">
                <van-button size="large" @click="binding" round type="default">立即绑卡</van-button>
           </div>
            <div>
               
            </div>
        </div>
    </div>

</template>



<script>
import { axiosPost } from '../../lib/http'
import { citys } from '../../lib/city.js'
export default {
    data() {
        return {
            name:"",
            accountNo:"",
            mobileNo:"",
            idcardNo:"",
            area:"",
            showFlag:false,
            item:"",
            columns: [
                {
                values: Object.keys(citys),
                className: 'column1'
                },
                {
                values: citys['浙江'],
                className: 'column2',
                defaultIndex: 2
                }
            ],
        }
    },
    methods:{
        goBack() {
            this.$router.push('/home')
        },
         onChange(picker, values) {
            picker.setColumnValues(1, citys[values[0]]);
         }, 
         onConfirm(value){
            this.area=value.join("-")
            this.showFlag=false
         },
         showPick(){
             this.showFlag=true
         },
         onCancel(){
             this.showFlag=false
         },

        binding(){
            if(this.name.trim().length===0 || this.accountNo.trim().length===0 || this.mobileNo.trim().length===0 || 
                this.idcardNo.trim().length===0 || this.area.trim().length===0  ){
                    this.$toast({
                        message:"请将信息填写完整"
                    })
                    return
              }
               let partten = /0?(13|14|15|17|18|19)[0-9]{9}/ 
               if(!partten.test(this.mobileNo)){
                 this.$toast({
                    message:"请填写11位手机号码"
                })
                return
              }
              
              let parttenId=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
                if(!parttenId.test(this.idcardNo)){
                    this.$toast({
                        message:"请填正确的身份号"
                    })
                    return
                } 
                let data={
                    accountNo:this.accountNo,
                    mobileNo:this.mobileNo,
                    idcardNo:this.idcardNo,
                    name:this.name,
                    area:this.area
                }
                 axiosPost("/creditCard/insertEsiCash",data)
                 .then(res=>{
                    //  console.log(res)
                     if(!res.data.success){
                         this.$toast({
                             message:res.data.message
                         })
                         return
                     } else {
                         let url=res.data.data
                        document.write(url)
                        //  this.$router.push({
                        //      path:"/home/insertEsiCash/iframe",
                        //      query:{
                        //          url,
                        //          title:"业务开通"
                        //      }
                        //  })
                     }
                 })
                 .catch(err=>{
                     
                 })
          
        }
    },
    created () {
        this.item=this.$route.query.info 
        this.name=this.item.payerName
        this.accountNo=this.item.cardNo
        this.mobileNo=this.item.phone
         this.idcardNo=this.item.idCardNo
    }
}
</script>

<style lang="less">
   #insert-esicash {
       >header {
            background: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           font-size:28px;
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
                       .area {
                           margin-right: 20px;
                       }
                       >span {
                           &:nth-of-type(1){
                               font-weight: bold;
                           }
                       }
                       &:last-child {
                        //    border:none;
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
               .van-picker__cancel{
                   font-size:30px;
                   color:#000;
               }
               .van-picker-column__item--selected {
                   color:#4B66AF;
                   font-weight: bold;
               }
               .van-picker__toolbar{
                   height: 40px;
                   line-height: 40px;
                   font-size: 30px;
               }
           }
           >.submit {
               margin-top:30px;
               padding:0 30px;
           }
       }
   }
</style>

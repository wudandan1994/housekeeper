<template>
    <div id="bankservice">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>{{title}}人工提额</span>
            <span></span>
        </header>
        <div class="container">
            <div class="art">
                <img :src="urlone" alt="">
            </div>
            <div class="call">
                 <a  :href="'tel:'+phone" v-if="type==='1'" class="jiaotong">立即拨打</a>
                 <a  :href="'tel:'+phone" v-if="type==='2'" class="zhaoshang">立即拨打</a>
                 <a  :href="'tel:'+phone" v-if="type==='3'" class="guangfa">立即拨打</a>
                 <a  :href="'tel:'+phone" v-if="type==='4'" class="nongye">立即拨打</a>
                 <a  :href="'tel:'+phone" v-if="type==='5'" class="pingan">立即拨打</a>
                 <a  :href="'tel:'+phone" v-if="type==='6'" class="zhongxin">立即拨打</a>
                 <a  :href="'tel:'+phone" v-if="type==='7'" class="gongshang">立即拨打</a>
                 <a  :href="'tel:'+phone" v-if="type==='8'" class="zhongguo">立即拨打</a>   
                 <a  :href="'tel:'+phone" v-if="type==='9'" class="shanghai">立即拨打</a>
                 <a  :href="'tel:'+phone" v-if="type==='10'" class="huaxia">立即拨打</a>    
                 <a  :href="'tel:'+phone" v-if="type==='11'" class="pufa">立即拨打</a>
                 <a  :href="'tel:'+phone" v-if="type==='12'" class="xingye">立即拨打</a>          
                 <a  :href="'tel:'+phone" v-if="type==='13'" class="minsheng">立即拨打</a>
                 <a  :href="'tel:'+phone" v-if="type==='14'" class="guangda">立即拨打</a>
                 <a  :href="'tel:'+phone" v-if="type==='15'" class="jianshe">立即拨打</a>

            </div>
             <div class="art">
                <img :src="urltwo" alt="">
            </div>
        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {
            title:'',
            urlone:"",
            urltwo:"",
            phone:"",
            type:""
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        }
    },
    created () {
        this.title=this.$route.query.title
        this.urlone=this.$route.query.urlone
        this.urltwo=this.$route.query.urltwo
        this.phone=this.$route.query.phone
        this.type=this.$route.query.type
    }
}
</script>

<style lang="less">
   #bankservice {
       >header {
           background: #4B66AF;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           display: flex;
           position: fixed;
           font-size:28px;
           z-index:999;
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
           .call{
               margin:40px 0px;
               a{
                   width:50%;
                   margin:20px auto;
                   display: block;
                   height: 60px;
                   line-height: 60px;
                   text-align: center;
                   color:#fff;
                   border-radius: 20px;
                   font-size: 32px;
                   &.jiaotong{
                       background-color: #0094CF;
                   }
                   &.zhaoshang{
                       background-color: #2D5FBC;
                   }
                   &.guangfa{
                       background-color: #B1202A;
                   }
                    &.nongye{
                       background-color: #1D9095;
                   }
                   &.pingan{
                       background-color: #EE6E01;
                   }
                   &.zhongxin{
                       background-color: #CF002F;
                   }
                    &.gongshang{
                       background-color: #DD2F32;
                   }
                   &.zhongguo{
                       background-color: #BD002C;
                   }
                    &.shanghai{
                       background-color: #3A3D8C;
                   }
                    &.huaxia{
                       background-color: #C9001E;
                   }
                    &.pufa{
                       background-color: #283372;
                   }
                    &.xingye{
                       background-color: #0074CA;
                   }
                    &.minsheng{
                       background-color: #01B6B5;
                   }
                    &.guangda{
                       background-color: #842AA5;
                   }
                   &.jianshe{
                       background-color: #033B90;
                   }

               }
           }
           .art{
               width:100%;
               img {
                   width:100%;
               }
           }
       }
   }
</style>

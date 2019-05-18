<template>
    <div id="my-order">
        <header>
            <span @click="goBack"><van-icon name="arrow-left"/></span>
            <span>{{title}}</span>
            <span></span>
        </header>
        <div class="container">
           <iframe class="iframe" :src="url" frameborder="0"></iframe>
           
        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {
            url:"",
            type: true,
            title:""
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1);
        },
       
       
    },
    created(){
        this.url=this.$route.query.url;
        this.title=this.$route.query.title;
        console.log(this.url)
       
    }
}
</script>

<style lang="less">
   #my-order {
       >header {
            background-color: #4965AE;
           width:100%;
           height: 86px;
           line-height: 86px;
           padding-top:10px;
           color:#fff;
           z-index:999;
           font-size:34px;
           display: flex;
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
           .iframe{
               width: 100vw;
               height: calc(100vh - 86px);
           }
       }
   }
</style>

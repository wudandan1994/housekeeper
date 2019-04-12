<template>
    <div>请在浏览器中打开</div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
         // 获取url参数
        GetUrlParam(paraName) {
    　　　　var url = document.location.toString();
    　　　　var arrObj = url.split("?");
    　　　　if (arrObj.length > 1) {
    　　　　　　var arrPara = arrObj[1].split("&");
    　　　　　　var arr;
    　　　　　　for (var i = 0; i < arrPara.length; i++) {
    　　　　　　　　arr = arrPara[i].split("=");
    　　　　　　　　if (arr != null && arr[0] == paraName) {
    　　　　　　　　　　return arr[1];
    　　　　　　　　}
    　　　　　　}
    　　　　　　return "";
    　　　　}
    　　　　else {
    　　　　　　return "";
    　　　　}
    　　},
    },
    created(){
        alert('参数'+this.GetUrlParam('orderid'));
    }
}
</script>
<style scoped>

</style>

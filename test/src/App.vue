<template>
  <div id="app">
    
    <router-view/>
    <footer class="foot">
          <van-tabbar
                v-model="active"
                active-color="#DAB17C"
              >
                <van-tabbar-item icon="other-pay" to="/home">首页</van-tabbar-item>
                <van-tabbar-item icon="vip-card-o" to="/vip">VIP</van-tabbar-item>
                <van-tabbar-item icon="manager" to="/personalCenter">个人中心</van-tabbar-item>
                <van-tabbar-item icon="star-o" to="/share" dot>分享</van-tabbar-item>
                <van-tabbar-item icon="more" to="/financialCircle">金融圈</van-tabbar-item>
          </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      active:0
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}

</style>

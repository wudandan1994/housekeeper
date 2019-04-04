<template>
  <div id="app">
    
    <router-view/>
  
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
  margin-top:60px;
  
}

</style>

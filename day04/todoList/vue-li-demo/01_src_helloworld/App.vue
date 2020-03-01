<template>
  <div>
    <h2>我是App组件</h2>
    <img src='http://suo.im/5XO9bE' />
    <HelloWorld/>
  </div>
</template>
<script type='text/javascript'>
import HelloWorld from './components/HelloWorld'
  export default {
    name:'App',
    components: {
    HelloWorld
  }
  }
</script>
<style scoped>
  
</style>

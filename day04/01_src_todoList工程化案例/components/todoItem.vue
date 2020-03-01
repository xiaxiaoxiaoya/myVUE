<template>
   <li v-on:click="handleDelte">{{content}}</li>
</template>

<script>
export default {
//  父子组件传值如此通信
//  子组件通过props接收父组件传来的值
  props:['content','index'],

  methods:{
    handleDelte(){
      console.log(this.index)
    //  子组件触发了事件出去,父组件那边需要监听并处理
      this.$emit('delete',this.index)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

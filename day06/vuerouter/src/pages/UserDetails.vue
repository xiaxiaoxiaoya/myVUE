<template>
  <div>
    <!-- 可在Vue开发者调试工具中看数据 -->
      用户ID：{{id}}
      <!-- 用户ID：{{$rote.params.id}} -->
      <hr />
      用户名：{{name}}
     <!-- 用户名： {{$rote.query.id}} -->
  </div>
</template>
<script type='text/javascript'>
export default{
   name:'User',
   props:['id','name'],//接收来自routes路由传来的数据
}
</script>
<style scoped>
 
</style>
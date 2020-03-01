<template>
  <div>
    <!-- 可在Vue开发者调试工具中看数据 -->
      用户ID：{{$route.params.id}}
      <hr />
      用户名：{{$route.query.name}}
  </div>
</template>
<script type='text/javascript'>
export default{
   name:'User',
}
</script>
<style scoped>
 
</style>
<template>
  <div>
    <ul class="todo-main">
      <Item v-for="(item,index) in listArr" :key="item.id" :item="item" :index="index"/>
    </ul>
  </div>
</template>
<script type='text/javascript'>
import Item from "./Item";
export default {
  props: {
    listArr: Array,
    removeTodo:Function
  },
  components: {
    Item
  }
};
</script>
<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
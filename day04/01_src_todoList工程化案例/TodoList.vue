<template>
  <div>
    <input type="text" v-model="inputValue">
    <button v-on:click="handleSubmit">提交</button>
    <ul>
      <todo-item v-for="(item,index) of list" :key="index" :content="item" :index="index" @delete="handleDelete">

      </todo-item>

    </ul>
  </div>
</template>

<script>
  //导入componets下的组件todoItem.vue
  import todoItem from './components/todoItem'

  //局部组件的注册和声明,之后在本页面使用局部组件todo-item
  export default {
  components:{
    'todo-item':todoItem,
  },
    data(){
      return {
        inputValue:'',
        list:[]
      }
    },
    methods:{
      handleSubmit(){
        this.list.push(this.inputValue)
        this.inputValue=''

      },
      //点击ul下的li,删除对应的项,通过index标识
      handleDelete(index){
        this.list.splice(index,1)
      }
    }
}
</script>


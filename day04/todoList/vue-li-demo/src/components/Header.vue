<template>
    <div>
       <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addTodo" v-model="msg"/>
      </div>
    </div>
</template>
<script type='text/javascript'>
 let id = 0;
    export default {
      name:'Header',
        data (){
          return {
            msg:''
          }
        },
        methods: {
          addTodo (){
             
            //将子组件传给父组件，用vue自定义事件
            id++;
            var item = {
              id:id,
              content:this.msg,
              checked:false
            }
            this.$emit("addTodo",item);
            this.msg='';
          }
        },
    }
</script>
<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
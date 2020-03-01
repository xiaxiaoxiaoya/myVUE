<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <Header @addTodo="addTodo" />
        <List :listArr="listArr" />
        <Footer :listArr="listArr" @clearAll="clearAll" />
      </div>
    </div>
  </div>
</template>
<script type='text/javascript'>
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
export default {
  name: "App",
  data() {
    return {
      //只要listArr
      listArr: []
    };
  },
  methods: {
    //添加数据
    addTodo(item) {
      // console.log("hahahah")
      this.listArr.unshift(item);
    },
    //清除所有任务
    clearAll() {
      console.log(43);
      this.listArr = this.listArr.filter(item => {
        //输入函数体
        return !item.checked;
      });
    }
  },
  mounted() {
    //从localstorage获取数据
    /* 
    JSON序列化：将一个对象转化成字符串表达形式  JOSN.stringify(obj)
    JSON反序列化：将一个对象形式的字符串转成对象 JOSN.parse(string)
    */
    // this.listArr = localStorage.getItem("todolist")
    // let listArr = localStorage.getItem("todolist");
    // this.listArr = listArr ? JSON.parse(listArr) : [];
    // console.log(this.listArr);

    let listArr = localStorage.getItem("todolist");
    (this.listArr = listArr ? JSON.parse(listArr) : []),
      //删除数据
      this.bus.$on("delTodo", id => {
        //这种做法是直接删除  用index的方法
        // this.listArr.splice(index, 1);
        //这种方法是过滤出需要删除之外的数据重新生成数组，不是彻底删除  通过imte.id
        this.listArr = this.listArr.filter(item => {
          //item是listArr中的每一项
          return item.id !== id;
        });
      });

    //修改数据的选中状态
    /*id: 代表todoitem中操作的是哪一个li
          checked: 当前li的状态*/
    this.bus.$on("change", (id, checked) => {
      this.listArr.forEach(item => {
        if (item.id === id) {
          console.log(checked);
          item.checked = checked;
        }
      });
    });
  },
  //添加watch监听事件，用来监听，listArr中的值的变化
  watch: {
    /* listArr(val) {
      //同步local
      // localStorage.setItem("todolist",JSON.stringify(val))
    }, */
    //解决当勾选了一个事件，刷新后这个事件没有显示勾选状态问题，用官方提供的对象形式，handler方法
    listArr: {
      handler: function(val, oldVal) {
        localStorage.setItem("todolist", JSON.stringify(val));
      },
      deep: true
    }
  },
  components: {
    Header,
    List,
    Footer
  }
};
</script>
<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
<template>
  <li
    :style="{background:bgColor}"
    @mouseenter="hanldeEnter(true)"
    @mouseleave="hanldeEnter(false)"
  >
    <label>
      <input type="checkbox" v-model="checked" />
      <span>{{item.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delTodo">删除</button>
  </li>
</template>
<script type='text/javascript'>
export default {
  props: {
    item: Object,
    index: Number
  },
  name: "Item",
  data() {
    return {
      bgColor: "white",
      isShow: false
    };
  },
  computed: {
    checked: {
      get() {
        return this.item.checked;
      },
      set(val) {
        this.bus.$emit("change", this.item.id, val);
      }
    }
  },
  methods: {
    //添加Li鼠标经过样式
    hanldeEnter(isEnter) {
      if (isEnter) {
        this.bgColor = "#eee";
        this.isShow = true;
      } else {
        this.bgColor = "white";
        this.isShow = false;
      }
    },
    //删除一项数据
    delTodo() {
      // console.log(this.index)
      if (confirm("确定要删除么")) {
        //这种做法是直接删除了的
        // this.bus.$emit("delTodo",this.index)
        //通过过滤
        this.bus.$emit("delTodo", this.item.id);
      }
    },
    //切换数据的选中状态
    change(id) {
      console.log(id);
      this.bus.$emit("change", id, this.checked);
      console.log(this.checked);
    }
  }
};
</script>
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
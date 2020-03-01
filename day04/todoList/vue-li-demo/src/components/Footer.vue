<template>
  <div>
    <div class="todo-footer">
      <label>
        <input type="checkbox" v-model="checkAll" />
      </label>
      <span>
        <span>已完成{{computedCount}}</span>
        / 全部{{listArr.length}}
      </span>
      <button class="btn btn-danger" @click="clear">清除已完成任务</button>
    </div>
  </div>
</template>
<script type='text/javascript'>
export default {
  name: "Footer",
  props: {
    listArr: Array
  },
  computed: {
    checkAll: {
      get() {
        let flag = this.computedCount !== 0 && this.listArr.length !== 0;
        return this.computedCount === this.listArr.length && flag;
      },
      set(val) {
        //根据val的取值 去操作app中的listArr数据
        this.$emit("checkAll", val);
      }
    },
    computedCount() {
      // adder:累加器  adder的默认值由reduce函数的第二个参数决定
      // item: 数组里的每一项
      // 回调函数每一次的返回值直接会赋值给adder
      // 最终reduce函数的返回值 是 adder
      return this.listArr.reduce((adder, item) => {
        //输入函数体
        return adder + (item.checked ? 1 : 0);
      }, 0);
    }
  },
  methods: {
    clear() {
      console.log(789);
      this.$emit("clearAll");
    }
  }
};
</script>
<style scoped>
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
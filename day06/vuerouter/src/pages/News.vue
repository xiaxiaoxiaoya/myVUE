<template>
  <div>
    <h4>News列表</h4>
    <ul>
      <li v-for="(item,index) in list" :key="index" @click="handleC(item.content)">
        <router-link :to="'/Home/News/NewsDetails/'+item.id">{{item.title}} <button>push</button> <button>repalce</button></router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script type='text/javascript'>
import NewsDetails from './NewsDetails.vue'
export default {
  name: "News",

  data() {
    return {
      list: [
        { id: 0, title: "新闻1", content: "这是新闻1啊啊吼吼" },
        { id: 1, title: "新闻2", content: "这是新闻2啊啊吼吼" },
        { id: 2, title: "新闻3", content: "这是新闻3啊啊吼吼" }
      ]
    }
  },
  methods:{
    handleC (content){
      this.bus.$emit("details",content)
      console.log('新闻列表')
    }
  }
};
</script>
<style scoped>
</style>
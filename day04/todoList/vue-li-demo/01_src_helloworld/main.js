/* 
入口文件
*/
import Vue from 'vue';
import App from './App'
Vue.config.productionTip = false //消除提醒


new Vue({
  el:'#app',

  //完整版本写法
  // components:{
  //   App
  // },
  // template:'<App/>'

  //运行时版本+编辑器，需要用render渲染模板
  render: h => h(App)
})


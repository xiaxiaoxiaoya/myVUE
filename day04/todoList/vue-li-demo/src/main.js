/* 
入口文件
*/
Vue.config.productionTip = false;//消除报错

//定义总线
Vue.prototype.bus = new Vue();

import Vue from 'vue';
import App from './App';
import './base.css'
new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App />'
})

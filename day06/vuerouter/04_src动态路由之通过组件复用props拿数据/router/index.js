import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/routes'
//告诉vue要使用vueRouter  括号里边不是字符串。
Vue.use(VueRouter)

//定义路由器
export default new VueRouter({
    routes,//是routes: routes 的简写
    mode:"history",//路由器的类型hash(和a标签配合使用) history(和router-view标签配合使用)
    linkActiveClass:'active',//模糊匹配，一般有子路由需要用
    // linkExacActiveClass:'active',//精确匹配，没有子路由的候用这个
})
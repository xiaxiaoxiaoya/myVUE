import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/routes'
Vue.use(VueRouter)

//定义路由器:new VueRorter({})
/* 
路由器里的配置对象:
routes:注册路由的，
mode:路由的类型(hash history)
    hash：基本上所有的浏览器都支持，可是它有一个致命的问题，hash的变化后台是感觉不到的；在做微信支付的时候，是不支持hash模式的。
    history：兼容性没有hash高，但是后台能感知到（即使使用history，后面还是有坑的，需要和后台联调）
*/
export default new VueRouter ({
    routes,//是routes: routes 的简写
    mode:"history",//路由器类型hash history
    linkActiveClass:'active',
    // linkExactActiveClass:'active',
})
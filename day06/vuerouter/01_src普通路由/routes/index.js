import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'

export default[
    {path:"/Home",component:Home},
    {path:"/About",component:About},
    
    //设置重定向
    {path:'/',redirect:'/Home'}
]

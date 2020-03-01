import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Message from '@/pages/Message.vue'
import News from '@/pages/News.vue'

export default[
    {
        path:"/Home",
        component:Home,
        children:[
            {path:"News",component:News},
            {path:"Message",component:Message},
        ]
    },
    {path:"/About",component:About},
    
    //设置重定向
    {path:'/',redirect:'/Home'}
]

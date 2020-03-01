import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Message from '@/pages/Message.vue'
import News from '@/pages/News.vue'
import User from '@/pages/User.vue'

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
    {
        path:"/User",
        component:User,
        children:[
            {path:":id",component:User}
        ]
    },
    
    //设置重定向
    {path:'/',redirect:'/Home'}
]

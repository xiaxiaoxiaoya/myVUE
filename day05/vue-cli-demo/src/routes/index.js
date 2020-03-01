import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import User from '@/pages/User.vue'

export default[
    {path:"/Home",component:Home},
    {path:"/About",component:About},
    {
        path:"/User",
        component:User,
        children:[
            {path:":id",component:User}//意思是User后边如果传了id，那么也可以让他直接走User
        ]

    },
    //设置重定向
    {path:'/',redirect:'/Home'}
]

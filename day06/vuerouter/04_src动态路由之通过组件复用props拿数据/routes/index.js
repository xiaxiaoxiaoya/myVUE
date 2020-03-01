import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Message from '@/pages/Message.vue'
import News from '@/pages/News.vue'
import User from '@/pages/User.vue'
import UserDetails from '@/pages/UserDetails.vue'

export default [{
    path: "/Home",
    component: Home,
    children: [{
        path: "News",
        component: News
      },
      {
        path: "Message",
        component: Message
      },
    ]
  },
  {
    path: "/About",
    component: About
  },
  {
    path: "/User",
    component: User,
    // props:true,//代表当前占位符id  会以props的方式进行数据传递
    // props:{id:6,name:"夏小夏"},//当数据不止id时，我们需要以对象的形式传递数据，但是如此就把数据定死， 和我们的需求不符，因此传一函数
    // props: (route) => {
    //   //输入函数体
    //   return {
    //     id: route.params.id,
    //     name: route.query.name
    //   }
    // },
    children: [{
      path: ":id",
      component: UserDetails,
      props: (route) => {
        //输入函数体
        return {
          id: route.params.id,
          name: route.query.name
        }
      },
    }]
  },

  //设置重定向
  {
    path: '/',
    redirect: '/Home'
  }
]

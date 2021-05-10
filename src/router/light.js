export default [
  {
    path: "/",
    redirect: "/light/login",
  },
  {
    path: "/light/login",
    component: () => import("../views/light/login/Login"),
  },
  {
    path: "/light/index",
    component: () => import("../views/light/index/Index"),
    children: [
      {
        path: "/light/index/home",
        component: () => import("../views/light/index/home/Home"),
        meta: {
          header: "小米书城",
        },
      },
      {
        path: "/light/index/my_books",
        component: () => import("../views/light/index/myBooks/MyBooks"),
        meta: {
          header: "书包",
        },
      },
      {
        path: "/light/index/me",
        component: () => import("../views/light/index/me/Me"),
        meta: {
          header: "个人中心",
        },
      },
    ],
  },
  {
    path: '/light/detail/:id',
    component: () => import("../views/light/detail/Detail")
  }
]

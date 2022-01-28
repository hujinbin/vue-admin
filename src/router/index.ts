
import { createRouter, createWebHashHistory } from 'vue-router'

// 基本布局
import layout from '../layout/index.vue';

// 1. 定义路由组件.
import HelloWorld from '../page/HelloWorld.vue';

// 也可以从其他文件导入

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {
    path: '/',
    component: layout,
    children: [
      { path: '/', component: Home },
      { path: '/about', component: About },
      { path: '/hello', component: HelloWorld },
    ],
  },
  {
    path: '/Login',
    component: () => import('../page/Login.vue')
  },
  {
    path: '/404',
    component: () => import('../page/404.vue')
  }, {
    path: '/403',
    component: () => import('../page/403.vue')
  },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
})

export default router

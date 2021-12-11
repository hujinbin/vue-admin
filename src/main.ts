import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



// 添加一个复杂错误
const a = 123

createApp(App).use(router).use(store).mount('#app')

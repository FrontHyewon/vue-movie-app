import { createApp } from 'vue'
import App from './App.vue'
import router from './routes' // 특정한 폴더 안의 가장 기본되는 파일, 즉 index.js를 연결할 때는 index.js를 생략할 수 있다.
import store from './store'
import loadImage from './plugins/loadImage'

createApp(App)
// .use = 플러그인 연결
    .use(router) // $route, $router
    .use(store) // $store
    .use(loadImage) // $loadImage
    .mount('#app')
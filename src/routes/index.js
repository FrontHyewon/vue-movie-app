import { createRouter, createWebHashHistory } from "vue-router"
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
    // Hash mode, History mode 두 가지
    // 본 예제에서는 Hash mode 사용
    // Hash mode 예시 (https://google.com/#/search) (#으로 구분)
    history: createWebHashHistory(),
    scrollBehavior() {
        return { top: 0 }
    }, // 페이지를 이동해도 언제나 최상단에서 시작할 수 있게 함.

    // routes = 페이지 구분
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/movie/:id',
            component: Movie
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
})
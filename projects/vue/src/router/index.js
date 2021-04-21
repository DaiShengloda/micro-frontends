import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'

Vue.use(Router)

const routes = [
    {
        path: '/guide/customer/list',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/guide/fan/list',
        name: 'about',
        component: About
    }
]

export default routes

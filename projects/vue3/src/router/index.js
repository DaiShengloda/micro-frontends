import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Microapp from '@/components/Microapp'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/microapp',
        name: 'microapp',
        component: Microapp
    }
]

export default routes

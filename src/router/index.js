import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'home',
            component: () => import('../components/home.vue')
        },
        {
            path:'/child',
            name:'child',
            component: () => import('../components/child.vue')
        }
    ]
})

export default router;
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../components/DefaultLayout.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/Home.vue')
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: () => import('../views/SearchByLetter.vue')
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: () => import('../views/SearchByName.vue')
            },
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: () => import('../views/SearchByIngredient.vue')
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/404.vue')
    },
    {
        path:'/auth',
        name:'auth',
        component: () => import('../views/Auth.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
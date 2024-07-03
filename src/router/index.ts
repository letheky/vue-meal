import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const baseUrl = '/vue-meal/'

const routes: RouteRecordRaw[] = [
    {
        path: baseUrl,
        component: () => import('../components/DefaultLayout.vue'),
        children: [
            {
                path: baseUrl,
                name: 'home',
                component: () => import('../views/Home.vue')
            },
            {
                path: `${baseUrl}by-letter/:letter?`,
                name: 'byLetter',
                component: () => import('../views/SearchByLetter.vue')
            },
            {
                path: `${baseUrl}by-name/:name?`,
                name: 'byName',
                component: () => import('../views/SearchByName.vue')
            },
            {
                path: `${baseUrl}by-ingredient/:ingredient?`,
                name: 'byIngredient',
                component: () => import('../views/SearchByIngredient.vue')
            },
        ]
    },
    {
        path: `${baseUrl}:pathMatch(.*)*`,
        name: '404',
        component: () => import('../views/404.vue')
    },
    {
        path: `${baseUrl}auth`,
        name: 'auth',
        component: () => import('../views/Auth.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
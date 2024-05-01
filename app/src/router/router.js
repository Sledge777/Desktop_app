import { createWebHistory,createRouter } from "vue-router";
import main from '@/pages/main'

const routes = [
    {
        path: '/',
        component: main
    },
    {

    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router;
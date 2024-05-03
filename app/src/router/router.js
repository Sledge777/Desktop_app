import { createWebHistory,createRouter } from "vue-router";
import Main from "@/pages/main.vue";
import Send from "@/pages/send.vue";
import Reg from "@/pages/reg.vue";
import Auth from "@/pages/auth.vue"
 
const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/send',
        component: Send
    },
    {
        path: '/reg',
        component: Reg
    },
    {
        path: '/auth',
        component: Auth
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router;
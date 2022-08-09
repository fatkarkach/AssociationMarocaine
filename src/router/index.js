import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Signup from "../view/Login.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Login",
        name: "Login",
        component: Signup,
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
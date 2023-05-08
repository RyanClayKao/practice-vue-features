import { createWebHistory, createRouter } from "vue-router";

import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login'},
        { path: '/login', component: LoginPage },
        { path: '/register', component: RegisterPage },
        { path: '/:notFound(.*)', component: NotFoundPage }
    ]
});

export default router;
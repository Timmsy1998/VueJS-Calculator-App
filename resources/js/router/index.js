import { createWebHistory, createRouter, useRoute } from "vue-router";

import { computed } from 'vue';

import Home from '../pages/Home.vue';
import Calculator from '../pages/Calculator.vue'

const route = useRoute();

const currentRouteName = computed(() => {
    return route.name;
});

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/calculator',
        name: 'calculator',
        component: Calculator,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: "/"
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkExactActiveClass: "nav-link active",
    currentRouteName
});

export default router;
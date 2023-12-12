// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your components for each route
import Home from '@/components/Home.vue';
import Post from "@/components/Post.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/post/:id', component: Post },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

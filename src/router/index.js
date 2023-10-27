import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import ProfileView from '@/views/ProfileView.vue';
import AdminView from '@/views/AdminView.vue';
import WorkoutsView from '@/views/WorkoutsView.vue';
import TrainersView from '@/views/TrainersView.vue';
import NewsView from '@/views/NewsView.vue';
import AboutUsView from '@/views/AboutUsView.vue';
import HowWeWorkView from '@/views/HowWeWorkView.vue';
import Error404View from '@/views/Error404View.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homeView',
            component: HomeView,
        },
        {
            path: '/profile/:id',
            name: 'profileView',
            component: ProfileView,
        },
        {
            path: '/admin',
            name: 'adminView',
            component: AdminView,
        },
        {
            path: '/workouts',
            name: 'workoutsView',
            component: WorkoutsView,
        },
        {
            path: '/trainers',
            name: 'trainersView',
            component: TrainersView,
        },
        {
            path: '/news',
            name: 'newsView',
            component: NewsView,
        },
        {
            path: '/about',
            name: 'aboutUsView',
            component: AboutUsView,
        },
        {
            path: '/how-we-work',
            name: 'howWeWorkView',
            component: HowWeWorkView,
        },
        {
            path: '/:any(.*)',
            component: Error404View,
        },
    ],
});

export default router;

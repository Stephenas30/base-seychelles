import { createRouter, createWebHistory } from "vue-router";

import home from '../components/Home.vue';
import about from '../components/About.vue';
import notfound from '../components/NotFound.vue';
import contact from '../components/Contact.vue';
import faq from '../components/Faq.vue';
import notice from '../components/Notice.vue'

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/contact',
        component: contact
    },
    {
        path: '/faq',
        component: faq
    },
    {
        path: '/notice',
        component: notice
    },
    {
        path: '/:pathMatch(.*)*',
        component: notfound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
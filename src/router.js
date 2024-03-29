import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ProjectsView from './views/ProjectsView.vue';
import SingleProjectView from './views/SingleProjectView.vue';
import ContactsView from './views/ContactsView.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProjectView
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        }
    ]
})

export { router }
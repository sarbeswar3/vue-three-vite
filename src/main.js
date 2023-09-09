import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'
// vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
});

// pages
import Home from './pages/Home.vue';
import About from './pages/About.vue';


// router
const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/about',
        component: About,
        name: 'about'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// app
const app = createApp(App)

// use with app
app.use(router)
// use vuetify
app.use(vuetify)

// mount app
app.mount('#app')

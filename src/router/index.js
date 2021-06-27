import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let routes = [];

const routeFiles = require.context('./routes', true, /\.route.js$/i);

routeFiles.keys().map((key) => {
    const route = routeFiles(key).default;

    if (Array.isArray(route)) {
        return routes = routes.concat(route);
    }

    routes.push(route);
});

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;

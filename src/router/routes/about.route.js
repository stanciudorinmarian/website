export default {
    path: '/about',
    name: 'about',
    component: () => import('../../views/About'),
    meta: {
        layout: () => import('../../layouts/DefaultLayout'),
    }
};
export default [
    {
        path: '/',
        redirect: {name: 'home'},
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../../views/Home'),
        meta: {
            layout: () => import('../../layouts/DefaultLayout'),
        }
    },
];
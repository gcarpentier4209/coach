import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from "../views/Login";
import Admin from "../views/Admin";
import Store from "../store";
import Today from "../views/Today";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: {needAuth: true, needAdminRole: true}
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/today',
        name: 'Today',
        component: Today,
        meta: {needAuth: true}

    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const userInStore = Store.state.users.user;
    const isAuthenticated = userInStore !== null;
    const isProtected = to.matched.some(route => route.meta.needAuth);
    const needAdminRole = to.matched.some(route => route.meta.needAdminRole);
    const isAdmin = isAuthenticated ? userInStore.is_admin : false;
console.log(userInStore);
    if (!isAuthenticated && isProtected ) {
        next({name: 'Login'});
    } else if (needAdminRole && !isAdmin){
        next({name: 'Home'});

    }else{
            next();
    }
});

export default router

import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FoodsView from '../views/FoodsView.vue';
import FoodDetail from '../views/FoodDetail.vue';
import KeranjangView from '../views/KeranjangView.vue';
import PesananSuksesView from '../views/PesananSuksesView.vue';
import AdminView from '../views/AdminView.vue';
import AdminDetail from '../views/AdminDetail.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },

  {
    path: '/foods',
    name: 'FoodView',
    component: FoodsView,
  },
  {
    path: '/foods/:id',
    name: 'FoodDetail',
    component: FoodDetail,
  },
  {
    path: '/keranjang',
    name: 'KeranjangView',
    component: KeranjangView,
  },
  {
    path: '/pesanan-sukses',
    name: 'PesananSuksesView',
    component: PesananSuksesView,
  },

  {
    path: '/Admin',
    name: 'AdminView',
    component: AdminView,
  },

  {
    path: '/admin-detail',
    name: 'AdminDetail',
    component: AdminDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

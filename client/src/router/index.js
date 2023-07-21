import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/shopAll',
      name: 'shopAll',
      component: () => import('../views/ShopAllView.vue')
    },
    {
      path: '/women',
      name: 'women',
      component: () => import('../views/WomenView.vue')
    },
    {
      path: '/men',
      name: 'men',
      component: () => import('../views/MenView.vue')
    },
    {
      path: '/sale',
      name: 'sale',
      component: () => import('../views/SaleView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/auth/SignUpView.vue')
    },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component: () => import('../views/CartView.vue')
    // },
    {
      path: '/product-detail',
      name: 'product-detaile',
      component: () => import('../views/product/DetailProductView.vue')
    },
    {
      path: '/product-detail-img',
      name: 'product-detaile-img',
      component: () => import('../views/product/DetailProductViewImg.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard/Admin-dashboard.vue')
    },
    {
      path: '/cart-view-detail',
      name: 'cart-view-detail',
      component: () => import('../views/cart/CartViewDetail.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('../views/payment/paymentMethodView.vue')
    }
    
  ]
})

export default router

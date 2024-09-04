import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'
import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/auth/RegisterView.vue'
import ProfileView from '../views/ProfileView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import SupportView from '../views/SupportView.vue'
import ForgetPasswordView from '../views/auth/ForgetPasswordView.vue'
import ChangePasswordView from '../views/auth/ChangePasswordView.vue'
import OtpView from '../views/auth/OtpView.vue'
import CourseDetailView from '../views/courseDetail/CourseDetailView.vue'
import CartView from '../views/cart/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: '', name: 'home', component: HomeView }, // Root path
        { path: 'support', name: 'support', component: SupportView },
        { path: 'support/:tab', name: 'support-tab', component: SupportView, props: true },
        { path: 'profile', name: 'profile', component: ProfileView },
        { path: 'about', name: 'about', component: AboutView },

        { path: 'course-detail/:id', name: 'courseDetail', component: CourseDetailView },
        { path: 'cart', name: 'Cart', component: CartView }
      ]
    },
    {
      path: '/',
      component: AuthLayout,
      children: [
        { path: '/login', name: 'Login', component: LoginView },
        { path: '/register', name: 'Register', component: RegisterView },
        { path: '/forgot-password', name: 'ForgotPassword', component: ForgetPasswordView },
        { path: '/change-password', name: 'ChangePassword', component: ChangePasswordView },
        { path: '/otp', name: 'Otp', component: OtpView }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

export default router

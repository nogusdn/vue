import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import ProfileView from '@/views/ProfileView.vue'

import MovieListView from '@/views/MovieListView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue' // 필요 없을 거 같긴 함 모달 식으로 나오게 하면?

import ReviewDetailView from '@/views/ReviewDetailView.vue'
import ReviewListView from '@/views/ReviewListView.vue'

import NotFound404 from '@/views/NotFound404.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/profile:username',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/', // home
    name: 'movies',
    component: MovieListView
  },
  {
    path: '/movies/:moviePk',
    name: 'movie',
    component: MovieDetailView
  },
  {
    path: '/movies/:moviePk/review/:reviewPk',
    name: 'reviewDetail',
    component: ReviewDetailView
  },
  {
    path: '/reviews',
    name: 'review',
    component: ReviewListView
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

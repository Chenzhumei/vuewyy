import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'



Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path: '',
      redirect: 'discover'
    },
    {
      path: '/discover',
      component: () => import(/* webpackChunkName: "discover" */ '../views/discover/Discover.vue'),
      children: [
        {
          path: '',
          redirect: 'recomend'
        },
        {
          path: 'recomend',
          component: () => import(/* webpackChunkName: "recomend" */ '../views/discover/recomend/Recomend.vue'),
        },
        {
          path: 'rank',
          component: () => import(/* webpackChunkName: "rank" */ '../views/discover/rank/Rank.vue'),
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/menber/Menber.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router

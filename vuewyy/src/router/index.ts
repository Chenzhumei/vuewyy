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
      path: '/my',
      component: () => import(/* webpackChunkName: "my" */ '../views/my/My.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router

import { RouteConfig } from 'vue-router'
import Layout from '@/vue-typescript-admin-template/src/layout/index.vue'

const chartsRouter: RouteConfig = {
  path: '/charts',
  component: Layout,
  redirect: 'noredirect',
  name: 'Charts',
  meta: {
    title: 'charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'bar-chart',
      component: () => import(/* webpackChunkName: "bar-chart" */ '@/vue-typescript-admin-template/src/views/charts/bar-chart.vue'),
      name: 'BarChartDemo',
      meta: {
        title: 'barChart',
        noCache: true
      }
    },
    {
      path: 'line-chart',
      component: () => import(/* webpackChunkName: "line-chart" */ '@/vue-typescript-admin-template/src/views/charts/line-chart.vue'),
      name: 'LineChartDemo',
      meta: {
        title: 'lineChart',
        noCache: true
      }
    },
    {
      path: 'mixed-chart',
      component: () => import(/* webpackChunkName: "mixed-chart" */ '@/vue-typescript-admin-template/src/views/charts/mixed-chart.vue'),
      name: 'MixedChartDemo',
      meta: {
        title: 'mixedChart',
        noCache: true
      }
    }
  ]
}

export default chartsRouter

import { RouteConfig } from 'vue-router'
// import Layout from '@/vue-typescript-admin-template/src/layout/index.vue'
import Layout from './../../layout/index.vue'

const tableRoutes: RouteConfig = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: 'table',
    icon: 'table'
  },
  children: [
    {
      path: 'dynamic-table',
      // component: () => import(/* webpackChunkName: "dynamic-table" */ '@/vue-typescript-admin-template/src/views/table/dynamic-table/index.vue'),
      component: () => import(/* webpackChunkName: "dynamic-table" */ './../../views/table/dynamic-table/index.vue'),
      name: 'DynamicTable',
      meta: { title: 'dynamicTable' }
    },
    {
      path: 'draggable-table',
      // component: () => import(/* webpackChunkName: "draggable-table" */ '@/vue-typescript-admin-template/src/views/table/draggable-table.vue'),
      component: () => import(/* webpackChunkName: "draggable-table" */ './../../views/table/draggable-table.vue'),
      name: 'DraggableTable',
      meta: { title: 'draggableTable' }
    },
    {
      path: 'inline-edit-table',
      // component: () => import(/* webpackChunkName: "inline-edit-table" */ '@/vue-typescript-admin-template/src/views/table/inline-edit-table.vue'),
      component: () => import(/* webpackChunkName: "inline-edit-table" */ './../../views/table/inline-edit-table.vue'),
      name: 'InlineEditTable',
      meta: { title: 'inlineEditTable' }
    },
    {
      path: 'complex-table',
      // component: () => import(/* webpackChunkName: "complex-table" */ '@/vue-typescript-admin-template/src/views/table/complex-table.vue'),
      component: () => import(/* webpackChunkName: "complex-table" */ './../../views/table/complex-table.vue'),
      name: 'ComplexTable',
      meta: { title: 'complexTable' }
    }
  ]
}

export default tableRoutes

import Vue, { DirectiveOptions } from 'vue'

import 'normalize.css'
import ElementUI from 'element-ui'
import SvgIcon from 'vue-svgicon'

import '@/vue-typescript-admin-template/src/styles/element-variables.scss'
import '@/vue-typescript-admin-template/src/styles/index.scss'

import App from '@/vue-typescript-admin-template/src/App.vue'
import store from '@/vue-typescript-admin-template/src/store'
import { AppModule } from '@/vue-typescript-admin-template/src/store/modules/app'
import router from '@/vue-typescript-admin-template/src/router'
import i18n from '@/vue-typescript-admin-template/src/lang'
import '@/vue-typescript-admin-template/src/icons/components'
import '@/vue-typescript-admin-template/src/permission'
import '@/vue-typescript-admin-template/src/utils/error-log'
import '@/vue-typescript-admin-template/src/pwa/register-service-worker'
import * as directives from '@/vue-typescript-admin-template/src/directives'
import * as filters from '@/vue-typescript-admin-template/src/filters'

Vue.use(ElementUI, {
  size: AppModule.size, // Set element-ui default size
  i18n: (key: string, value: string) => i18n.t(key, value)
})

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

// Register global directives
Object.keys(directives).forEach(key => {
  Vue.directive(key, (directives as { [key: string ]: DirectiveOptions })[key])
})

// Register global filter functions
Object.keys(filters).forEach(key => {
  Vue.filter(key, (filters as { [key: string ]: Function })[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')

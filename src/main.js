import 'systemjs-webpack-interop/auto-public-path/2'
import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'

import App from './App.vue'
import router from './router'
import store from '@openc3/tool-common/src/plugins/store'

Vue.config.productionTip = false

import '@openc3/tool-common/src/assets/stylesheets/layout/layout.scss'
import vuetify from '@openc3/tool-common/src/plugins/vuetify'
import Dialog from '@openc3/tool-common/src/plugins/dialog'
import PortalVue from 'portal-vue'
import Notify from '@openc3/tool-common/src/plugins/notify'

Vue.use(PortalVue)
Vue.use(Dialog)
Vue.use(Notify, { store })

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    router,
    store,
    vuetify,
    render(h) {
      return h(App, {
        props: {},
      })
    },
    el: '#openc3-tool',
  },
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount

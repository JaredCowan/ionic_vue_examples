// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import 'babel-polyfill'
import VueSentry from 'vue2-sentry'
import VueAnalytics from 'vue-analytics'
import VueBrowserUpdate from 'vue-browserupdate'
import theme from '@/theme'
// import { Ionic } from '@ionic/vue';

import {
  Vuetify,
  VApp
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

// Vue.use(Ionic);

Vue.config.ignoredElements = [/^ion-/]

Vue.use(VueBrowserUpdate, {
  options: {
    notify: {
      i: 11,
      f: 25,
      o: 17,
      s: 9,
      c: 22
    },
    reminder: 12,
    reminderClosed: 36,
    text: 'Your browser, {brow_name}, is out of date. This application may not function correctly until you update : Click this bar to view the latest update available for your system.', // Custom info to pass to the user
    container: document.body,
    style: 'top',
    no_permanent_hide: true
  },
  test: false
})

Vue.use(Vuetify, {
  components: {
    VApp
  },
  theme: theme
})

Vue.use(VueAnalytics, {
  id: process.env.GOOGLE_ANALYTICS_TOKEN,
  router
})

Vue.use(VueSentry, {
  protocol: 'https',
  key: process.env.SENTRY_URI_KEY,
  project: process.env.SENTRY_PROJECT_ID,
  enable: process.env.NODE_ENV === 'production',
  config: {}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})

export default store

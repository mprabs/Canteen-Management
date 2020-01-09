import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allItems: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    items: (state) => state.allItems
  }
})

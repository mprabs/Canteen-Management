import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allItems: [{
      name: 'Cauli',
      id: '1'
    },
    {
      name: 'Potato',
      id: '2'
    }]
  },
  mutations: {
    complete_add: function (state, newName) {
      state.allItems.push({ name: newName.name, id: Number(state.allItems[state.allItems.length - 1].id) + 1 })
    },
    deleteEntry: function (state, delIndex) {
      console.log('The id', delIndex)

      for (var i = 0; i < state.allItems.length; i++) {
        if (state.allItems[i].id === delIndex.id) {
          state.allItems.splice(i, 1)
        }
      }
    }
  },
  actions: {
    addItem: function ({ commit }, newName, newId) {
      var setNew = {
        name: newName,
        id: newId
      }
      commit('complete_add', setNew)
    },
    removeItem: function ({ commit }, delIndex, delName) {
      var delNew = {
        name: delName,
        id: delIndex
      }
      commit('deleteEntry', delNew)
    }
  },
  getters: {
    items: (state) => state.allItems
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
// import api from './api.js'
// import Axios from 'axios'
import { instance } from './axiosheader.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allItems: [],
    selectItems: [],
    userItems: []
  },
  mutations: {
    complete_add: function (state, newName) {
      instance.post('http://127.0.0.1:8000/myapp/fooditem/', {
        name: newName.name
      }
      )
    },
    selectNew: function (state, selectNew) {
      console.log('suru', selectNew.dateFor, selectNew.ItemsArray)
      instance.post('http://127.0.0.1:8000/myapp/menu/', {
        date: selectNew.dateFor,
        food_item: selectNew.ItemsArray
      })
    },
    deleteEntry: function (state, delIndex) {
      console.log('The id', delIndex)

      for (var i = 0; i < state.allItems.length; i++) {
        if (state.allItems[i].id === delIndex.id) {
          instance.delete('http://127.0.0.1:8000/myapp/fooditem/' + delIndex.id)
        }
      }
    },
    deleteItems: function (state, delIndex) {
      console.log('The id', delIndex.id)

      for (var i = 0; i < state.selectItems.length; i++) {
        if (state.selectItems[i].id === delIndex.id) {
          state.selectItems.splice(i, 1)
        }
      }
    },
    SAVE_ITEMS: function (state, response) {
      state.allItems = response.data
    },
    USER_ITEMS: function (state, response) {
      state.userItems = response.data
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
    removeItem: function ({ commit }, delIndex) {
      var delNew = {
        id: delIndex
      }
      commit('deleteEntry', delNew)
    },
    selectItem: function ({ commit }, { newDate, newSelectItem }) {
      var selectNew = {
        dateFor: newDate,
        ItemsArray: newSelectItem
      }
      console.log('Check', newDate, newSelectItem)
      commit('selectNew', selectNew)
    },
    deleteItem: function ({ commit }, delIndex) {
      var delNew = {
        id: delIndex
      }
      commit('deleteItems', delNew)
    },
    loadItems: function ({ commit }) {
      instance.get('http://127.0.0.1:8000/myapp/fooditem/')
        .then(response =>
          commit('SAVE_ITEMS', response)
        )
    },
    loadSelectedItems: function ({ commit }) {
      instance.get('http://127.0.0.1:8000/myapp/menu/')
        .then(response =>
          commit('USER_ITEMS', response)
        )
    }
  },
  getters: {
    items: (state) => state.allItems,
    selectedItems: (state) => state.selectItems,
    userItems: (state) => state.userItems
  }
})

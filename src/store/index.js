import Vue from 'vue'
import Vuex from 'vuex'
// import api from './api.js'
// import Axios from 'axios'
import { instance } from './axiosheader.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allItems: [],
    selectItems: []
  },
  mutations: {
    complete_add: function (state, newName) {
      instance.post('http://28a51681.ngrok.io/myapp/fooditem/', {
        name: newName.name
      }
      )
    },
    selectNew: function (state, newSelectitem) {
      // console.log('suru', state.selectItems[0])
      for (var i = 0; i < state.selectItems.length; i++) {
        if (state.selectItems[i].id === newSelectitem.item.id) {
          console.log('paxi', state.selectItems[i].id, 'naam', newSelectitem.item.id)
          state.selectItems.splice(i, 1)
        }
      }
      state.selectItems.push({ name: newSelectitem.item.name, id: newSelectitem.item.id })
    },
    deleteEntry: function (state, delIndex) {
      console.log('The id', delIndex)

      for (var i = 0; i < state.allItems.length; i++) {
        if (state.allItems[i].id === delIndex.id) {
          instance.delete('http://28a51681.ngrok.io/myapp/fooditem/' + delIndex.id)
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
    selectItem: function ({ commit }, newSelectitem) {
      var selectNew = {
        item: newSelectitem
      }
      // console.log(newSelectitem.name)
      commit('selectNew', selectNew)
    },
    deleteItem: function ({ commit }, delIndex) {
      var delNew = {
        id: delIndex
      }
      commit('deleteItems', delNew)
    },
    // loadItems ({ commit }) {
    loadItems: function ({ commit }) {
      instance.get('http://28a51681.ngrok.io/myapp/fooditem/')
        .then(response =>
          commit('SAVE_ITEMS', response)
        // console.log('items yei ho', response)
        )
    }
  },
  getters: {
    items: (state) => state.allItems,
    selectedItems: (state) => state.selectItems
  }
})

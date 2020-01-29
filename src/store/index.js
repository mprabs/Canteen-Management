import Vue from 'vue'
import Vuex from 'vuex'
// import api from './api.js'
// import Axios from 'axios'
import { instance } from './axiosheader.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allItems: [],
    userItems: [],
    order: []
  },
  mutations: {
    complete_add: function (state, newName) {
      instance.post('http://127.0.0.1:8000/myapp/fooditem/', {
        name: newName.name
      }
      )
    },
    orderEntry: function (state, newOrder) {
      console.log('suru', newOrder.dateEntry, newOrder.userId, newOrder.foodId)
      instance.post('http://127.0.0.1:8000/myapp/order/', {
        'date': newOrder.dateEntry,
        'menu_item': newOrder.foodId,
        'user': newOrder.userId
      })
    },
    deleteEntry: function (state, delIndex) {
      // console.log('The id', delIndex)

      for (var i = 0; i < state.allItems.length; i++) {
        if (state.allItems[i].id === delIndex.id) {
          instance.delete('http://127.0.0.1:8000/myapp/fooditem/' + delIndex.id)
          // alert('DELETED !')
        }
      }
    },
    deleteItems: function (state, delIndex) {
      // console.log('The id', delIndex.id)
      for (var i = 0; i < state.selectItems.length; i++) {
        if (state.selectItems[i].id === delIndex.id) {
          state.selectItems.splice(i, 1)
        }
      }
    },
    deleteOrder: function (state, doneItem) {
      console.log('The id', doneItem.item)
      instance.delete('http://127.0.0.1:8000/myapp/order/' + doneItem.item)
      alert('Deleted Order !')
    },
    SAVE_ITEMS: function (state, response) {
      state.allItems = response.data
    },
    USER_ITEMS: function (state, response) {
      state.userItems = response.data
    },
    ORDER: function (state, response) {
      state.order = response.data
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
    setOrder: function ({ commit }, { orderUser, orderItem, orderDate }) {
      var newOrder = {
        userId: orderUser,
        foodId: orderItem,
        dateEntry: orderDate
      }
      // console.log('Check', orderDate, orderItem, orderUser)
      commit('orderEntry', newOrder)
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
      // console.log('loaded')
    },
    loadSelectedItems: function ({ commit }) {
      instance.get('http://127.0.0.1:8000/myapp/menu/')
        .then(response =>
          commit('USER_ITEMS', response)
        )
    },
    getOrder: function ({ commit }) {
      instance.get('http://127.0.0.1:8000/myapp/order/')
        .then(response =>
          // console.log('data', response))
          commit('ORDER', response))
    },
    doneOrder: function ({ commit }, doneItem) {
      var doneOrder = {
        item: doneItem
      }
      commit('deleteOrder', doneOrder)
    }
  },
  getters: {
    items: (state) => state.allItems,
    userItems: (state) => state.userItems,
    order: (state) => state.order
  }
})

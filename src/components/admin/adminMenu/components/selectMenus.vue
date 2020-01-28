<template>
<div id="menuList" >
  Items for the date of
  <input type="date" v-model="dateSelect" v-on:input="checkItems(dateSelect)">
  <!-- <v-btn tile depressed @click="reload">Add another</v-btn> -->
    <hr style="visibility: hidden; ">
  <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
    <v-simple-table fixed-header height="250px">
    <template>
      <thead>
        <tr>
          <th class="text-left">Items Available</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id" @click="selectElement(item)" style="line-height: 18px; height: 8px; cursor: pointer">
        <td>
          {{ item.name }}
        </td>
       </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-col>
  <v-spacer/><v-col cols="12" sm="8" md="6">
<v-simple-table fixed-header height="250px">
    <template>
      <thead>
        <tr>
          <th class="text-left">Items for Tomorrow</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr  v-for="thing in displayarray" :key="thing.id" style="cursor: pointer">
        <td> {{ thing.name }} </td>
        <td @click="removeItem(thing.id)" style="cursor:pointer" class="text-right" >
          <v-btn icon>
                <v-icon color="red">mdi-close</v-icon>
                </v-btn></td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-col>
        </v-row>
  </v-container>
<v-btn block depressed @click="pushItems(dateSelect)"> Verify </v-btn>

  </div>
</template>

<script>
import { instance } from '/home/rohitshrestha/git/Canteen-Management/src/store/axiosheader.js'
export default {
  name: 'menuList',
  data () {
    return {
      selectItem: [],
      dateToday: '',
      anyDate: '',
      item: '',
      displayarray: [],
      dateSelect: '',
      idOfItem: '',
      dateMatch: ''
    }
  },
  methods: {
    selectElement: function (item) {
      var check = this.isExist(item.id)
      if (check === 'exists') {
        alert('Already selected !')
      } else {
        this.selectItem.push(item.id)
        this.displayarray.push(item)
      }
    },
    throwDate: function (date) {
      this.anyDate = this.date
    },
    removeItem: function (id) {
      for (var i = 0; i < this.displayarray.length; i++) {
        if (this.displayarray[i].id === id) {
          this.displayarray.splice(i, 1)
          this.selectItem.splice(i, 1)
        }
      }
    },
    isExist: function (item) {
      for (var i = 0; i < this.selectItem.length; i++) {
        if (this.selectItem[i] === item) {
          return 'exists'
        }
      }
    },
    dateExist: function (dateGiven) {
      this.existingMenu.forEach(element => {
        if (element.date === dateGiven) {
          this.dateMatch = 'match'
          this.idOfItem = element.id
        }
      })
    },
    pushItems: function (dateFor) {
      var ItemsArray = this.selectItem
      this.dateExist(dateFor)
      if (this.dateMatch === 'match') {
        instance.put('http://127.0.0.1:8000/myapp/menu/' + this.idOfItem, {
          date: dateFor,
          food_item: ItemsArray
        })
      } else {
        instance.post('http://127.0.0.1:8000/myapp/menu/', {
          date: dateFor,
          food_item: ItemsArray
        })
      }
    },
    checkItems: function (dateSelected) {
      this.existingMenu.forEach(element => {
        if (element.date === dateSelected) {
          this.selectItem.length = 0
          element.food_item.forEach(item =>
            this.selectItem.push(
              item
            )
          )
          this.displayarray.length = 0
          this.foodname(element.food_item)
        } else {
          this.displayarray.length = 0
          this.selectItem.length = 0
        }
      })
    },
    foodname: function (arrayOfItems) {
      arrayOfItems.forEach(thing => {
        this.existingMenu.forEach(element => {
          for (var i = 0; i < element.food_item.length; i++) {
            if (element.food_item[i] === thing) {
              this.items.forEach(item => {
                if (element.food_item[i] === item.id) {
                  this.displayarray.push(item)
                }
              })
            }
          }
        })
      })
    },
    reload: function () {
      window.history.go()
    }
  },
  computed: {
    items: function () {
      return this.$store.getters.items
    },
    existingMenu: function () {
      return this.$store.getters.userItems
    }
  },
  mounted () {
    this.dateToday = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
    this.$store.dispatch('loadItems')
    this.$store.dispatch('loadSelectedItems')
  }
}

</script>

<template>
<div id="menuList" >
  Items for the date of
  <v-col cols="12" lg="6">
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="true"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dateFormatted"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="checkItems(date)"></v-date-picker>
        </v-menu>
      </v-col>
  <input type="text" v-model="search" v-on:input="filteredItems" placeholder="Search here...">
    <tbody style="display:inline-block;">
    <tr v-for="content in searchItems" :key="content.id" style="color:gray">
    <td @click="selectElement(content)" style="cursor: default">
      {{ content.name }}
    </td><br>
    </tr>
    </tbody>
    <hr style="visibility: hidden; ">
  <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
    <v-simple-table fixed-header height="250px">
    <template>
      <thead >
        <tr >
          <th class="text-left">Items Available</th>
          <br>
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
          <th class="text-left">Items for Selected Day </th>
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
<v-btn block depressed @click="pushItems(date)"> Verify </v-btn>

  </div>
</template>

<script>
import { instance } from '/home/prabin/Desktop/Canteen/src/store/axiosheader.js'
export default {
  name: 'menuList',
  data () {
    return {
      selectItem: [],
      dateToday: '',
      anyDate: '',
      item: '',
      displayarray: [],
      idOfItem: '',
      dateMatch: '',
      counter: '',
      search: '',
      searchItems: [],
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false
    }
  },
  methods: {
    selectElement: function (item) {
      this.search = ''
      this.searchItems.splice(0, this.searchItems.length)
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
      this.displayarray = this.displayarray.filter(item => item.id !== id)
      this.selectItem = this.selectItem.filter(item => item !== id)
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
      alert('Verified!')
    },
    checkItems: function (dateSelected) {
      // console.log(dateSelected)
      this.counter = 'doesntExist'
      this.existingMenu.forEach(element => {
        if (element.date === dateSelected) {
          this.selectItem.splice(0, this.selectItem.length)
          this.displayarray.splice(0, this.displayarray.length)
          element.food_item.forEach(item =>
            this.selectItem.push(
              item
            )
          )
          this.counter = 'dateExists'
          this.foodname(element.food_item)
        }
      })
      if (this.counter !== 'dateExists') {
        this.selectItem.splice(0, this.selectItem.length)
        this.displayarray.splice(0, this.displayarray.length)
      }
    },
    foodname: function (arrayOfItems) {
      arrayOfItems.forEach(thing => {
        this.items.forEach(item => {
          if (thing === item.id) {
            this.displayarray.push(item)
          }
        })
      })
    },
    reload: function () {
      window.history.go()
    },
    filteredItems () {
      if (this.search === '') {
        this.searchItems.splice(0, this.searchItems.length)
      } else {
        this.searchItems = this.items.filter(item => {
          return item.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },
    formatDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  },
  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    }
  },
  computed: {
    items: function () {
      return this.$store.getters.items
    },
    existingMenu: function () {
      return this.$store.getters.userItems
    },
    computedDateFormatted () {
      return this.formatDate(this.date)
    }
  },
  mounted () {
    this.dateToday = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
    this.$store.dispatch('loadItems')
    this.$store.dispatch('loadSelectedItems')
    this.checkItems(new Date().toJSON().slice(0, 10))
  }
}

</script>

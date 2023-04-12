<template>
<div id="menuList" >
  <v-snackbar
          v-model="snackbar"
          right
          :timeout="2000"
          :color='color'
          top
          >{{ text }}
      <v-icon dark @click="snackbar = false" >mdi-close</v-icon>
      </v-snackbar>
  <v-card-title>Date
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="true"
          transition="scale-transition"
          offset-y
        >
          <template v-slot:activator="{ on }">
           <v-col md="2">
           <v-spacer/><v-text-field
              v-model="dateFormatted"
              solo filled hide-details rounded dense flat
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field></v-col>
          </template>
          <v-date-picker v-model="date" no-title @input="checkItems(date)"></v-date-picker>
        </v-menu>
        <v-spacer /><v-col md="2">
          <v-text-field
            v-model="search"
            label="Search"
            solo filled rounded hide-details dense clearable flat
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
        <v-btn tile depressed @click="pushItems(date)"> Verify </v-btn>
  </v-card-title>

 <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">

          <v-col cols="12" sm="8" md="6">
            <v-card>
          <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1"
            :search="search"
            fixed-header
            height="300px"
            >
            <template v-slot:item.name="{ item }">
      <p @click="selectElement(item)">{{ item.name }}</p>
    </template>
      </v-data-table>
  </v-card></v-col>

<v-spacer/>
<v-col cols="12" sm="8" md="6">
            <v-card>
          <v-data-table
            :headers="header"
            :items="displayarray"
            class="elevation-1"
            fixed-header
            height="300px"
            >
   <template v-slot:item.action="{ item }">
      <v-icon small @click="removeItem(item.id)" >mdi-delete</v-icon>
    </template>
      </v-data-table>
  </v-card></v-col>
        </v-row>
  </v-container>

  </div>
</template>

<script>
import { instance } from '../../../store/axiosheader.js'
export default {
  name: 'menuList',
  data () {
    return {
      snackbar: false,
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
      menu2: false,
      headers: [
        {
          text: 'Items Available',
          align: 'left',
          value: 'name'
        },
        { align: 'right', value: 'action', sortable: false }
      ],
      header: [
        {
          text: 'Menu',
          align: 'left',
          value: 'name'
        },
        { align: 'right', value: 'action', sortable: false }
      ]
    }
  },
  methods: {
    selectElement: function (item) {
      this.search = ''
      this.searchItems.splice(0, this.searchItems.length)
      var check = this.isExist(item.id)
      if (check === 'exists') {
        this.snackbar = true
        this.color = 'red'
        this.text = 'Item already added'
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
      this.snackbar = true
      this.color = 'green'
      this.text = 'success'
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
    Promise.all([
      this.$store.dispatch('loadItems'),
      this.$store.dispatch('loadSelectedItems')
    ]).then(
      this.checkItems(new Date().toJSON().slice(0, 10)),
      this.dateToday = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
    )
  }
}

</script>

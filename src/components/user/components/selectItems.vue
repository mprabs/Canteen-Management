<template>
<div id="menuList" >
 <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="9">
          <v-card class="elevation-12" height="auto">
            <v-toolbar flat >
              <v-toolbar-title>Items for the date of {{ dateToday }}</v-toolbar-title>
            </v-toolbar>
            <hr color="blue" >
            <v-card-text >
              <v-simple-table fixed-header height="350px">
                <template>
                  <thead>
                    <tr>
                      <th>Id</th>
                    <th>Name of items</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in todaysmenu" :key="item.id" @click="selectElement(item)" style="cursor: pointer">
                      <td> {{ item.id }} </td>
                      <td> {{ item.name }} </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="8" md="3">
          <v-card class="elevation-12" height="450px">
              <v-toolbar flat >
                <v-toolbar-title>Your Ordered Item</v-toolbar-title>
              </v-toolbar>
              <hr color="blue" >
              <v-card-text >
                <div v-for="thing in selectedItem" :key="thing.id">
                <pre slot="text-align:center"><h1> {{ thing.name }} </h1> </pre>
                <v-btn block depressed @click="addModal(thing)"> Verify </v-btn>
                </div>
                <h3 style="color:green"> {{ selectedMessage }} </h3>
                <h3 style="color:red"> {{ msg }} </h3>
              </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</div>
</template>

<script>
export default {
  name: 'menuList',
  data: function () {
    return {
      todaysmenu: [],
      dateToday: '',
      selectedItem: [],
      verifiedStatus: false,
      msg: '',
      selectedMessage: ''
    }
  },
  methods: {
    selectElement: function (name) {
      this.selectedItem.unshift(name)
      this.selectedItem.splice(1, 1)
    },
    addModal: function (name) {
      this.checkOrder()
      if (this.verifiedStatus === false) {
        alert('Your selected item is ' + name.name)
        var userID = localStorage.getItem('userCredentials')
        var foodId = name.id
        var dateEntry = this.dateToday
        this.$store.dispatch('setOrder', {
          orderUser: userID,
          orderItem: foodId,
          orderDate: dateEntry
        })
        this.verifiedStatus = true
        this.msg = ''
        this.selectedMessage = 'Verified Selection :' + name.name
      } else {
        this.msg = 'An item is already registered in your name for the date'
      }
    },
    checkOrder () {
      this.order.forEach(element => {
        // eslint-disable-next-line eqeqeq
        if (element.date === this.dateToday && element.user == localStorage.getItem('userCredentials')) {
          this.verifiedStatus = true
        }
      })
    },
    checkDate () {
      this.dateToday = new Date().toJSON().slice(0, 10)
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].date === this.dateToday) {
          for (var j = 0; j <= this.items[i].food_item.length; j++) {
            this.foodItems.forEach(element => {
              if (this.items[i].food_item[j] === element.id) {
                this.todaysmenu.push(element)
              }
            })
          }
        }
      }
    }
  },
  computed: {
    items: function () {
      return this.$store.getters.userItems
    },
    foodItems: function () {
      return this.$store.getters.items
    },
    order: function () {
      return this.$store.getters.order
    }
  },
  mounted () {
    this.$store.dispatch('loadItems')
    this.$store.dispatch('getOrder')
    this.$store.dispatch('loadSelectedItems')
    this.checkDate()
    // this.$nextTick()
    if (localStorage.getItem('userdetails')) {
    } else {
      this.$router.replace({ name: 'login' })
    }
  }
}
</script>

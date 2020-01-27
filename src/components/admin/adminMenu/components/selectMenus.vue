<template>
<div id="menuList" >
  Items for the date of
  <input type="date" v-model="dateSelect">
  <v-btn tile depressed @click="reload">Add another</v-btn>
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
export default {
  name: 'menuList',
  data () {
    return {
      selectItem: [],
      dateToday: '',
      anyDate: '',
      item: '',
      displayarray: [],
      dateSelect: ''
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
      console.log(date)
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
    pushItems: function (dateFor) {
      var ItemsArray = this.selectItem
      this.$store.dispatch('selectItem', {
        newDate: dateFor,
        newSelectItem: ItemsArray
      })
    },
    reload: function () {
      window.history.go()
    }
  },
  computed: {
    items: function () {
      return this.$store.getters.items
    }
  },
  mounted () {
    this.dateToday = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
    this.$store.dispatch('loadItems')
    // this.items()
  }
}

</script>

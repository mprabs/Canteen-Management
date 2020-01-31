<template>
  <div id="menuList" >
    <v-card>
    <v-card-title>OrderList
        <v-spacer /><v-col md="3">
          <v-text-field
        v-model="search"
        label="Search"
        solo filled rounded hide-details dense clearable flat
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      </v-col>
       </v-card-title>
          <v-data-table
            :headers="headers"
            :items="orderList"
            class="elevation-1"
            :search="search"
            fixed-header
            height="300px"
            >
    <template v-slot:item.action="{ item }">
      <v-icon small @click="handleRemove(item.id, index)" >mdi-delete</v-icon>
    </template>
  </v-data-table>
  </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    search: '',
    headers: [
      { text: 'user', value: 'user' },
      {
        text: 'Item Name',
        value: 'name'
      },
      { text: 'date', value: 'date' },
      { text: 'Actions', value: 'action', sortable: false }
    ],
    orderList: []
  }),
  methods: {
    foodname: function () {
      this.order.forEach(thing => {
        this.foodItems.forEach(element => {
          if (element.id === thing.menu_item) {
            this.orderList.push({
              id: thing.id,
              date: thing.date,
              user: thing.user,
              name: element.name
            })
          }
        })
      })
    },
    handleRemove: function (item) {
      var index = this.orderList.indexOf(item)
      this.orderList.splice(index, 1)
      item = item.id
      this.$store.dispatch('doneOrder', item)
    }
  },
  computed: {
    order () {
      return this.$store.getters.order
    },
    foodItems: function () {
      return this.$store.getters.items
    }
  },
  mounted () {
    this.$store.dispatch('getOrder')
    this.$store.dispatch('loadItems')
    this.$store.dispatch('loadSelectedItems')
    this.foodname()
  }
}
</script>

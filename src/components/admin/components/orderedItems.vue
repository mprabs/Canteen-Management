<template>
<div id="menuList" >
  <v-container class="fill-height" fluid>
        <v-row align="center" justify="center"><v-col cols="12" sm="8" md="12">
    <v-simple-table fixed-header height="350px">
    <template>
      <thead>
        <tr>
          <th >User</th>
          <th >Order Date</th>
          <th >Order</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orderList" :key="item.index">
          <td>{{ item.user }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-col>
  </v-row>
  </v-container>
</div>
</template>

<script>

export default {
  name: 'menuList',
  data: function () {
    return {
      orderList: []
    }
  },
  methods: {
    foodname: function () {
      this.order.forEach(thing => {
        this.foodItems.forEach(element => {
          if (element.id === thing.menu_item) {
            this.orderList.push({
              date: thing.date,
              user: thing.user,
              name: element.name
            })
          }
        })
      })
    },
    remove: function (item) {
      var index = this.orderList.indexOf(item)
      this.orderList.splice(index, 1)
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
    Promise.all([
      this.$store.dispatch('getOrder'),
      this.$store.dispatch('loadItems'),
      this.$store.dispatch('loadSelectedItems')
    ]).finally(() => {
      this.foodname()
    })
  }
}
</script>

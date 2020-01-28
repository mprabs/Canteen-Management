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
        <tr v-for="item in orderList" :key="item.index" @click="showtd">
          <td>{{ item.user }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.name }}</td>
          <td @click="handleRemove(item.id, index)" style="display:none; color: red;" id="removeRow"> Remove </td>
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
      orderList: [],
      index: ''
    }
  },
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
    handleRemove: function (item, index) {
      this.orderList.splice(index, 1)
      this.$store.dispatch('doneOrder', item)
    },
    showtd: function () {
      var x = document.getElementById('removeRow')
      if (x.style.display === 'block') {
        x.style.display = 'none'
      } else x.style.display = 'block'
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
    console.log(this.order)
    this.foodname()
  }
}
</script>

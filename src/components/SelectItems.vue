<template>
<div class="jumbotron" id="menuList" >
  <pre>You can select only one of the items.</pre>
  <div>
    <table id="FoodMenu" >
      <thead>
      <tr>
        <th>Id</th>
        <th>Name of items</th>
      </tr>
      </thead>
      <tr v-for="item in items" :key="item.id" @click="selectElement(item.name)" style="cursor: pointer">
          <td> {{ item.date }} </td>
          <td> {{ item.food_item }} </td>
      </tr>
    </table>
  </div>
  <div v-for="thing in todaysmenu" :key="thing.id">
    <pre> You selected <h2> {{ thing.name }} </h2> </pre>
    <button @click="addModal(thing.name)"> Verify </button>
  </div>
</div>
</template>

<script>

export default {
  name: 'menuList',
  data: function () {
    return {
      todaysmenu: [],
      dateToday: ''
    }
  },
  methods: {
    selectElement: function (name, id) {
      this.todaysmenu.unshift({ name })
      this.todaysmenu.splice(1, 1)
    },
    addModal: function (name, id) {
      alert('Your selected item is ' + name)
    },
    checkDate () {
      var dates = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
      this.dateToday = dates.parse('YYYY-MM-DD').toString('YYYY/MM/DD')
      console.log(this.dateToday)
      for (var i = 0; i < this.items.length; i++) {
        console.log(this.items[i].date + ' ' + this.dateToday)
        if (this.items[i].date === this.dateToday) {
          console.log('datedekhayo', this.items[i].date)
        }
      }
    },
    foodList () {
      // const intersection = this.items.filter(element => this.foodItems.id.includes(element))
      // console.log('int', intersection)
    }
  },
  computed: {
    items: function () {
      return this.$store.getters.userItems
    },
    foodItems: function () {
      return this.$store.getters.items
    }
  },
  mounted () {
    this.$store.dispatch('loadItems')
    this.$store.dispatch('loadSelectedItems')
    // this.foodList()
    this.checkDate()
    // console.log(this.foodItems)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#FoodMenu {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 50%;
  margin: auto;
}

#FoodMenu th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #404040;
  color: white;
}
#FoodMenu td, th {
  border: 1px solid #404040;
  padding: 8px;
}

#FoodMenu tr:nth-child(even){background-color: #f2f2f2;}

#FoodMenu tr:hover {background-color: #ddd;}

.column {
  float: left;
  width: 50%;
  padding: 10px;
}

* {
  box-sizing: border-box;

}
button {
  background-color: #404040;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

button:hover { background-color: #7c7575}

.header {
  background-color: #404040;
}
</style>

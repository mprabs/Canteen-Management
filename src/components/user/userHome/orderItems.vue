<template>
<div class="jumbotron" id="menuList" >
<h2>Items for the date of {{ dateToday }}</h2>
  <pre>You can select only one of the items.</pre>
  <div>
    <table id="FoodMenu" >
      <thead>
      <tr>
        <th>Id</th>
        <th>Name of items</th>
      </tr>
      </thead>
      <tr v-for="item in todaysmenu" :key="item.id" @click="selectElement(item)" style="cursor: pointer">
          <td> {{ item.id }} </td>
          <td> {{ item.name }} </td>
      </tr>
    </table>
  </div>
  <div v-for="thing in selectedItem" :key="thing.id">
    <pre> You selected <h2> {{ thing.name }} </h2> </pre>
    <button @click="addModal(thing)"> Verify </button>
  </div>
</div>
</template>

<script>

export default {
  name: 'menuList',
  data: function () {
    return {
      todaysmenu: [],
      dateToday: '',
      selectedItem: []
    }
  },
  methods: {
    selectElement: function (name) {
      this.selectedItem.unshift(name)
      this.selectedItem.splice(1, 1)
    },
    addModal: function (name) {
      alert('Your selected item is ' + name.name)
      var userID = localStorage.getItem('userCredentials')
      // console.log('username', userID, 'item', name.id)
      var foodId = name.id
      var dateEntry = this.dateToday
      this.$store.dispatch('setOrder', {
        orderUser: userID,
        orderItem: foodId,
        orderDate: dateEntry
      })
    },
    checkDate () {
      this.dateToday = new Date().toJSON().slice(0, 10)
      console.log(this.dateToday)
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].date === this.dateToday) {
          console.log('yes')
          for (var j = 0; j < this.items.length; j++) {
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
    }
  },
  mounted () {
    this.$store.dispatch('loadItems')
    this.$store.dispatch('loadSelectedItems')
    this.checkDate()
    console.log('todaysmenu', this.todaysmenu)
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

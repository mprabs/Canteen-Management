<template>
<div id="menuList" >
  Items for the date of
  <input type="date" v-model="dateSelect">
  <button @click="pushItems(dateSelect)"> Verify </button>
  <button @click="reload">Add another</button>
    <hr style="visibility: hidden; ">
  <div class="column">
    <table id="FoodMenu" >
      <thead>
      <tr>
        <th>Id</th>
        <th>Items Available </th>
      </tr>
      </thead>
      <tr v-for="item in items" :key="item.id" @click="selectElement(item)" style="cursor: pointer">
          <td> {{ item.id }} </td>
          <td> {{ item.name }} </td>
      </tr>
    </table>
  </div>
  <div class="column">
    <table id="FoodMenu">
    <thead>
      <tr>
        <th>Id</th>
        <th>Items for Tomorrow</th>
        <th></th>
      </tr>
    </thead>
      <tr  v-for="thing in displayarray" :key="thing.id" style="cursor: pointer">
        <td> {{ thing.id }} </td>
        <td> {{ thing.name }} </td>
        <td  @click="removeItem(thing.id)" style="cursor: pointer"> Remove </td>
      </tr>
    </table>
  </div>
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
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#FoodMenu {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  height: 100px;
  overflow-y: scroll;
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

.highlight {
     background-color: red;
}
</style>

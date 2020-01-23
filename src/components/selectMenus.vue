<template>
<div id="menuList" >
   Items Available
  <!-- <br> {{ dateToday }} <br> -->
  Items for the date of
  <form @submit="throwDate">
   <input type="date" name="dateSelect">
   <input type="submit">
  </form>
  <!-- <h1> AAYULOGIC CANTEEN MANAGEMENT </h1> -->
  <router-link to="/SelectItems" tag="button" @click="pushItems"> Verify </router-link>
  <button @click="window.history.go()">Add another</button>
    <hr style="visibility: hidden; ">
  <!-- <pre>You can select only one of the items.</pre> -->
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
      <tr  v-for="thing in selectItem" :key="thing.id" style="cursor: pointer">
        <td> {{ thing.id }} </td>
        <td> {{ thing.name }} </td>
        <td  @click="removeItem(thing.id)" style="cursor: pointer"> Remove </td>
      </tr>
    </table>
    {{selectItem[0]}}
    {{item}}
  </div>
</div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge'

export default {
  name: 'menuList',
  data () {
    return {
      selectItem: [],
      dateToday: '',
      anyDate: ''
    }
  },
  methods: {
    selectElement: function (item) {
      console.log('value is', this.isExist)
      if (this.isExist) {
        this.selectItem.push(item)
      } else alert('Already selected')
    },
    throwDate: function (date) {
      this.anyDate = this.date
    },
    removeItem: function (id) {
      // this.$store.dispatch('deleteItem', id)
      for (var i = 0; i < this.selectItem.length; i++) {
        if (this.selectItem[i].id === id) {
          this.selectItem.splice(i, 1)
        }
      }
    },
    isExist: function (item) {
      for (var i = 0; i < this.selectItem.length; i++) {
        if (this.selectItem[i] === item) {
          return true
        }
      }
      return false
    },
    pushItems: function () {
      console.log('ani', this.anyDate)
      this.$store.dispatch('selectItem', this.selectItem, this.anyDate)
    }
  },
  computed: {
    items: function () {
      return this.$store.getters.items
    }
    // selectedItems: function () {
    //   return this.$store.getters.selectedItems
    // }
  },
  mounted () {
    this.dateToday = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
    console.log('aaja', this.dateToday)
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

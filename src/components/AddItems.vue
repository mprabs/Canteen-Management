<template>
<div id="menuList" >
  <div class="header"><hr><h2 style="color: #6486c0;"> Food Listings</h2><hr></div>
  <div  class="column">
  Add Item:<br><br>
  <form @submit="handleClick">
    <input v-model="name" placeholder="Item name">
    <br><br>
    <button type="submit" class="btn btn-danger"> Add </button>
  </form>
  </div>
  <div  class="column">
    Item Lists for tomorrow : <br><br>
    <table id="FoodMenu" >
      <thead>
        <th>Name of items</th>
        <th></th>
      </thead>
      <tr v-for="item in items" :key="item.id" style="line-height: 18px; height: 8px;">
        <td>
          {{ item.name }}
        </td>
        <td @click='handleRemove(item.id)' style="cursor:pointer; "> Remove </td>
      </tr>
      <tr></tr>
    </table><br>
  </div>
  <router-link to="/selectMenus" tag="button" style="align: center">Verify</router-link>
</div>
</template>

<script>
export default {
  name: 'menuList',
  data () {
    return {
      name
    }
  },
  methods: {
    addEntry: function (name) {
      if (this.name === '') {
        alert('Enter something to add !')
      } else {
        console.log('add')
        this.$store.dispatch('addItem', this.name)
        this.name = ''
      }
    },
    removeElement: function (id) {
      this.$store.dispatch('removeItem', id)
    },
    loadItems: function () {
      this.$store.dispatch('loadItems')
    },
    handleClick: function (name) {
      this.addEntry(name)
      this.loadItems()
    },
    handleRemove: function (id) {
      // this.removeElement(id)
      this.removeElement(id)
      this.loadItems()
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
  mounted: function () {
    this.$store.dispatch('loadItems')
  }
}

</script>

<style scoped lang="scss">

#FoodMenu {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  height: 100px;
  overflow: auto;
}

#FoodMenu th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color:#2b4c86;;
  color: white;
}
#FoodMenu td, th {
  border: 1px solid #404040;
  height: 8px;
  padding: 8px;
}

input {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

button:hover { background-color: #7c7575}

#FoodMenu tr:nth-child(even){background-color: #f2f2f2;}

#FoodMenu tr:hover {background-color: #ddd;}

.column {
  float: left;
  width: 50%;
  padding: 10px;
  font-size: 16px;
}

* {
  box-sizing: border-box;

}
button {
  background-color: #2b4c86;
  border: none;
  color: #f7f7f7;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

#menuList {
  font-family: Georgia;
  font-size: 13px;
}

#FoodMenu td:empty {
  border-left: 0;
  border-right: 0;
}

#menuList {
  border : 10px;
}
</style>

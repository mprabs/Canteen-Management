<template>
<div class="jumbotron" id="menuList" >  <h1> AAYULOGIC CANTEEN MANAGEMENT </h1>

  <hr> <h3> Available Menus </h3> <hr>
  <pre>You can select only one of the items.</pre>
  <div>
    <table id="FoodMenu" >
      <tr>
        <td>Id</td>
        <td>Name of items</td>
      </tr>
      <tr v-for="item in items" :key="item.id" @click="selectElement(item.name)" style="cursor: pointer">
          <td> {{ item.id }} </td>
          <td> {{ item.name }} </td>
      </tr>
    </table>
  </div>
  <div v-for="thing in selectedItems" :key="thing.id">
    <pre> You selected <h2> {{ thing.name }} </h2> </pre> <br>
    <button @click="addModal(thing.name)"> Verify </button>
  </div>
</div>
</template>

<script>

export default {
  name: 'menuList',
  data: function () {
    return {
      selectedItems: []
    }
  },
  methods: {
    selectElement: function (name, id) {
      this.selectedItems.unshift({ name })
      this.selectedItems.splice(1, 1)
    },
    addModal: function (name, id) {
      alert('Your selected item is ' + name).then(() => {
        console.log('Alert closed.')
      })
    }
  },
  computed: {
    items: function () {
      return this.$store.getters.selectedItems
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#FoodMenu {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
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

.header {
  background-color: #404040;
}
</style>

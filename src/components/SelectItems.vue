<template>
<div class="jumbotron" id="menuList" >
  <hr> <h3> Available Menus </h3> <hr>
  <pre>You can select only one of the items.</pre>
  <div>
    <table id="FoodMenu" >
      <tr>
        <td>Id</td>
        <td>Name of items</td>
      </tr>
      <tr v-for="item in dataList" :key="item.id" @click="selectElement(item.name)" style="cursor: pointer">
          <td> {{ item.id }} </td>
          <td> {{ item.name }} </td>
      </tr>
    </table>
  </div>
  <pre v-for="thing in selectedItems" :key="thing.id"> You selected <h2> {{ thing.name }} </h2> </pre> <br>
  <button @click="addModal"> Verify </button>
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
      alert('Your selected item is' + name).then(() => {
        console.log('Alert closed.')
      })
    }
  },
  props: [
    'dataList'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#FoodMenu {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  // width: 30%;
}

#FoodMenu td {
  border: 1px solid rgb(70, 67, 67);
  padding: 8px;
}

#FoodMenu tr:nth-child(even){background-color: #f2f2f2;}

#FoodMenu tr:hover {background-color: #ddd;}

table, td {
  margin: auto;
}

* {
  box-sizing: border-box;
}

li {
    list-style-type: none;
}

button {
  background-color: #23409e;
  border: none;
  color: white;
  padding: 10px 19px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>

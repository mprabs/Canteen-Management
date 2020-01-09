<template>
<div id="menuList" >
  <h1> AAYULOGIC CANTEEN MANAGEMENT </h1>
  <div class="header"><hr><h3 style="color: white;"> Menus</h3><hr></div>
  <div  class="column">
  Add Item:<br><br>
  <input v-model="name" placeholder="Item name">
  <br><br>
  <button @click="addEntry" class="btn btn-danger"> Add </button>
  </div>
  <div  class="column">
    Item Lists for tomorrow : <br><br>
    <table id="FoodMenu" >
    <thead>
      <th>Id</th>
      <th>Name of items</th>
      <th></th>
    </thead>
      <tr v-for="item in items" :key="item.id">
        <td>
          {{ item.id }}
        </td>
        <td>
        {{ item.name }}
        </td>
        <td @click="removeElement(id)" style="cursor:pointer"> Remove </td>
      </tr>
  </table><br>
  <router-link to="/SelectItems" tag="button" >Verify</router-link>
  </div>
  <!-- <SelectItems :dataList="items"></SelectItems> -->
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'menuList',
  methods: {
    addEntry: function (name) {
      if (this.name === '') {
        alert('Enter something to add !')
      } else {
        this.items.push({ name: this.name.toUpperCase(), id: this.id })
        this.name = ''
      }
    },
    removeElement: function (index) {
      this.items.splice(index, 1)
    }
    // verifyEntry: function () {
    //   this.$route.push({ items: [{ name: 'Cauli ', id: 1 }, { name: 'Potato', id: 2 }] })
    // }
  },
  computed: mapGetters(['items'])
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

input {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
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

#menuList {
  font-family: Georgia;
  font-size: 13px;
}
</style>

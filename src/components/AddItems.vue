<template>
<div id="menuList" >
  <!-- <h1>{{ msg }}</h1> -->
  <div class="header"><hr><h3 style="color: white;"> Menus</h3><hr></div>
  <div  class="column">
  Add Item:<br><br>
  <form @submit="addEntry">
    <input v-model="name" placeholder="Item name" v-on:keyup.enter="submit">
    <br><br>
    <button type="submit" class="btn btn-danger"> Add </button>
  </form>
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
        <td @click='removeElement(item.id)' style="cursor:pointer"> Remove </td>
        <!-- {{ item.id }} -->
      </tr>
  </table><br>
  <router-link to="/selectMenus" tag="button" >Verify</router-link>
  </div>
  <!-- <SelectItems :dataList="items"></SelectItems> -->
</div>
</template>

<script>
// import Axios from 'axios'
// import { mapGetters } from 'vuex'
// import api from '@/store/index.js'
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
        // console.log('Name', this.name)
        this.$store.dispatch('addItem', this.name)
        this.name = ''
      }
    },
    removeElement: function (id) {
      this.$store.dispatch('removeItem', id)
    }
  },
  computed: {
    items: function () {
      return this.$store.getters.items
    }
  }
  // mounted: Axios.get('http://fff07418.ngrok.io/myapp/fooditem/')
  //   .then(response =>
  //     console.log(response)
  //     // this.$store.dispatch('addItem', element.name)
  //   )
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

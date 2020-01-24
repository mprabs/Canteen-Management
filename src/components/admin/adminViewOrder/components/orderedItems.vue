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
        <tr v-for="item in items" :key="item.id" @click="selectElement(item.name)" style="cursor: pointer">
          <td> {{ item.user }} </td>
          <td> {{ item.order }} </td>
          <td> {{ item.orderDate }} </td>
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
      selectedItems: []
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

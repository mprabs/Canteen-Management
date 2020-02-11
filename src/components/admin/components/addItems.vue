<template>
  <div id="menuList" >
    <v-snackbar
          v-model="snackbar"
          right
          :timeout="2000"
          color="red"
          top
          >{{ msg }}
      <v-icon dark @click="snackbar = false" >mdi-close</v-icon>
      </v-snackbar>
      <v-card>
    <v-card-title>FoodList
        <v-spacer /><v-col md="3">
          <v-text-field
        v-model="search"
        label="Search"
        solo filled rounded hide-details dense clearable flat
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      </v-col>
       </v-card-title>
          <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1"
            :search="search"
            fixed-header
            height="300px"
            >
    <template v-slot:item.action="{ item }">
      <v-icon small @click="handleRemove(item.id)" >mdi-delete</v-icon>
    </template>
  </v-data-table>
  </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    search: '',
    headers: [
      {
        text: 'Item Name',
        align: 'left',
        value: 'name'
      },
      { text: 'Actions', align: 'right', value: 'action', sortable: false }
    ],
    msg: ''
  }),
  methods: {
    removeElement: function (id) {
      this.$store.dispatch('removeItem', id)
    },
    loadItems: function () {
      this.$store.dispatch('loadItems')
    },
    handleRemove: async function (id) {
      await this.removeElement(id)
      this.msg = 'Removing item... '
      this.snackbar = true
      await new Promise(resolve => setTimeout(resolve, 300))
      window.history.go()
      // await new Promise(resolve => setTimeout(resolve, 3000))
      // this.msg = 'Successfully Removed !'
    }
  },
  computed: {
    items: function () {
      return this.$store.getters.items
    }
  },
  mounted () {
    this.$store.dispatch('loadItems')
  }
}
</script>

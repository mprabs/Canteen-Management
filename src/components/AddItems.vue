<template>
<div id="menuList" >
  <v-simple-table fixed-header height="300px">
    <template>
      <thead>
        <tr>
          <th class="text-left">Name of Items</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id" style="line-height: 18px; height: 8px;">
        <td>
          {{ item.name }}
        </td>
        <td @click='handleRemove(item.id)' style="cursor:pointer" class="text-right" >
          <v-btn icon>
                <v-icon color="red">mdi-close</v-icon>
                </v-btn></td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
<br>
  <v-spacer/><v-btn block>Verify</v-btn>
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
    removeElement: function (id) {
      this.$store.dispatch('removeItem', id)
    },
    loadItems: function () {
      this.$store.dispatch('loadItems')
    },
    handleRemove: function (id) {
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

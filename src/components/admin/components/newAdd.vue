<template>
    <div  class="column">
  <v-form @submit="addEntry">
    <br><v-text-field
      v-model="name"
      label="What do you want to add?"
      required
    ></v-text-field>
    <br><v-card-actions>
      <v-btn
        type="submit"
        block
        >Add</v-btn>
        </v-card-actions>
        <v-snackbar
          v-model="snackbar"
          right
          :timeout="2000"
          :color='color'
          top
          >{{ text }}
      <v-icon dark @click="snackbar = false" >mdi-close</v-icon>
      </v-snackbar>
  </v-form>
  </div>
</template>
<script>

export default {
  name: 'column',
  data () {
    return {
      name,
      snackbar: false,
      text: [],
      color: ''
    }
  },
  methods: {
    addEntry: async function (name) {
      if (this.name === '') {
        this.snackbar = true
        this.text = 'Enter something to add'
        this.color = 'red'
      } else {
        await this.$store.dispatch('addItem', this.name)
        this.name = ''
        this.text = 'Adding Item..'
        this.color = 'blue'
        this.snackbar = true
        await new Promise(resolve => setTimeout(resolve, 300))
        window.history.go()
      }
    }
  }
}
</script>

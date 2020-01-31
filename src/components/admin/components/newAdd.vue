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
    addEntry: function (name) {
      if (this.name === '') {
        this.snackbar = true
        this.text = 'Enter something to add'
        this.color = 'red'
      } else {
        this.$store.dispatch('addItem', this.name)
        this.name = ''
        this.snackbar = true
        this.text = 'Item added'
        this.color = 'blue'
      }
    }
  }
}

</script>

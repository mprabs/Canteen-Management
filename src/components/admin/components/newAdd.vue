<template>
    <div  class="column">
  <v-form @submit="handleClick">
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
  </v-form>
  </div>
</template>
<script>

export default {
  name: 'column',
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
    handleClick: function (name) {
      this.addEntry(name)
      this.reload()
    },
    reload: function () {
      window.history.go()
    }
  }
}

</script>

<template>
    <div  class="column">
  Add Item:<br><br>
  <form @submit="handleClick">
    <input v-model="name" placeholder="Item name">
    <br><br>
    <button type="submit" class="btn btn-danger"> Add </button>
  </form>
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
    //   this.loadItems()
    },
    reload: function () {
      window.history.go()
    }
  }
}

</script>

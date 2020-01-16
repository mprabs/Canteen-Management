<template>
  <div>
      <h1>CANTEENPAGE</h1>

  </div>
</template>

<script>

export default {
  name: 'canteen',
  data () {
    return {
      content: ''
    }
  },
  mounted () {
    this.$axios.request({ url: 'http://66356871.ngrok.io/token-auth/', headers: { Authorization: localStorage.getItem('userdetails') } })
    this.$emit('authenticated', true)
  }
}

</script>

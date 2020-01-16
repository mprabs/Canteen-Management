<template>
  <div>
      <h1>USERPAGE</h1>
      <!-- <h3>{{content}}</h3> -->
  </div>
</template>

<script>
export default {
  name: 'user',
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

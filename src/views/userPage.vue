<template>
  <div>
      <selectItems/>
  </div>
</template>

<script>
import selectItems from '../components/SelectItems'
export default {
  name: 'user',
  components: {
    selectItems
  },
  mounted () {
    this.$axios.request({ url: 'http://66356871.ngrok.io/token-auth/', headers: { Authorization: localStorage.getItem('userdetails') } })
    this.$emit('authenticated', true)
  }
}

</script>

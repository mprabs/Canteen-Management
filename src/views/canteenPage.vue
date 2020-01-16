<template>
  <div>
      <selectMenu/>
  </div>
</template>

<script>
import selectMenu from '../components/selectMenus.vue'
export default {
  name: 'canteen',
  components:
     { selectMenu },
  mounted () {
    this.$axios.request({ url: 'http://66356871.ngrok.io/token-auth/', headers: { Authorization: localStorage.getItem('userdetails') } })
    this.$emit('authenticated', true)
  }
}

</script>

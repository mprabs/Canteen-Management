<template>
    <div id="adminPage">
        <AddItems msg="AAYULOGIC CANTEEN MANAGEMENT  </h1>"/>
    </div>
</template>

<script>
import AddItems from '../components/AddItems.vue'
// import { instance } from '../store/axiosheader.js'

export default {
  name: 'adminPage',
  components: {
    AddItems
  },
  data () {
    return {
    }
  },
  mounted () {
    // request in api where you want axios header
    if (localStorage.getItem('userdetails')) {
      this.$emit('authenticated', true)
    } else {
      this.$router.replace({ name: 'login' })
    }
  } }
</script>

<style scoped>
    #secure {
        margin-top: 1px;
    }
</style>

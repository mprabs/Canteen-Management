<template>
    <div id="adminPage">
        <AddItems msg="AAYULOGIC CANTEEN MANAGEMENT  </h1>"/>
    </div>
</template>

<script>
import AddItems from '../components/AddItems.vue'

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
    this.$axios.request({ url: 'http://66356871.ngrok.io/token-auth/', headers: { Authorization: localStorage.getItem('userdetails') } })
    this.$emit('authenticated', true)
  }
}
</script>

<style scoped>
    #secure {
        margin-top: 1px;
    }
</style>

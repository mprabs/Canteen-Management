<template>
    <div id="adminPage">
        <AddItems msg="AAYULOGIC CANTEEN MANAGEMENT  </h1>"/>
    </div>
</template>

<script>
import AddItems from '../components/AddItems.vue'
import { instance } from '../store/axiosheader.js'

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
    instance.request('')
    this.token = instance.request('') // request in api where you want axios header
    if (this.token) {
      this.$emit('authenticated', true)
    }
  } }
</script>

<style scoped>
    #secure {
        margin-top: 1px;
    }
</style>

<template>
  <div>
      <selectItems/>
  </div>
</template>

<script>
import { instance } from '../store/axiosheader.js'
import selectItems from '../components/SelectItems'
export default {
  name: 'user',
  components: {
    selectItems
  },
  mounted () {
    this.token = instance.request('') // request in api where you want axios header
    if (this.token) {
      this.$emit('authenticated', true)
    }
  }
}
</script>

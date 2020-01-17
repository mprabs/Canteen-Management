<template>
  <div>
      <selectItems/>
  </div>
</template>

<script>
// import { instance } from '../store/axiosheader.js'
import selectItems from '../components/SelectItems'
export default {
  name: 'user',
  components: {
    selectItems
  },
  mounted () {
    if (localStorage.getItem('userdetails')) {
      this.$emit('authenticated', true)
    } else {
      this.$router.replace({ name: 'login' })
    }
  }
}
</script>

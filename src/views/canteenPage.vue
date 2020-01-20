<template>
  <div>
      <selectMenu/>
  </div>
</template>

<script>
// import { instance } from '../store/axiosheader.js'
import selectMenu from '../components/selectMenus.vue'
export default {
  name: 'canteen',
  components:
     { selectMenu },
  mounted () {
    if (localStorage.getItem('userdetails')) {
      this.$emit('authenticated', true)
    } else {
      this.$router.replace({ name: 'login' })
    }
  }
}

</script>

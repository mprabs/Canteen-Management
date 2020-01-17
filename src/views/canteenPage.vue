<template>
  <div>
      <selectMenu/>
  </div>
</template>

<script>
import { instance } from '../store/axiosheader.js'
import selectMenu from '../components/selectMenus.vue'
export default {
  name: 'canteen',
  components:
     { selectMenu },
  mounted () {
    this.token = instance // request in api where you want axios header
    if (this.token) {
      this.$emit('authenticated', true)
    }
  }
}

</script>

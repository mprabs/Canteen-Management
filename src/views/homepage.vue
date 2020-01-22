<template>
    <div id="homepage">
          <Notificationbar />
         </div>
</template>

<script>
import Notificationbar from '../components/notificationbar.vue'
// import { instance } from '../store/axiosheader.js'

export default {
  name: 'homepage',
  components: {
    Notificationbar
  },
  data () {
    return {
    }
  },
  mounted () {
    if (localStorage.getItem('userdetails')) {
    } else {
      this.$router.replace({ name: 'login' })
    }
  } }
</script>

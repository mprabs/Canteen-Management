<template>
    <div id="homepage">
          <Notificationbar/>
          <adminComponent v-if="this.role === 'Admin'"/>
          <userComponent v-if="this.role === 'User'"/>
         </div>
</template>

<script>
import adminComponent from '../components/adminComponent.vue'
import userComponent from '../components/userComponent.vue'
import Notificationbar from '../components/notificationbar.vue'

export default {
  name: 'homepage',
  components: {
    adminComponent,
    userComponent,
    Notificationbar
  },
  data () {
    return {
      role: []
    }
  },
  mounted () {
    this.role = localStorage.getItem('pageDetails')
    if (localStorage.getItem('userdetails')) {
    } else {
      this.$router.replace({ name: 'login' })
    }
  } }
</script>

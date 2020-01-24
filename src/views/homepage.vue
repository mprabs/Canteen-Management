<template>
    <div id="homepage">
          <Navigationbar/>
          <adminComponent v-if="this.role === 'Admin'"/>
          <userComponent v-if="this.role === 'User'"/>
         </div>
</template>

<script>
import adminComponent from '../components/admin/adminComponent.vue'
import userComponent from '../components/user/userComponent.vue'
import Navigationbar from '../components/navigationbar.vue'

export default {
  name: 'homepage',
  components: {
    adminComponent,
    userComponent,
    Navigationbar
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

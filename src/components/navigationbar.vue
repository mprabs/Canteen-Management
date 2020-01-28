<template>
  <div>
    <v-app-bar app clipped-left color="grey lighten-2" flat tile>
        <v-app-bar-nav-icon/>
        <v-toolbar-title>{{ this.role }}</v-toolbar-title>
        <v-spacer/><v-btn depressed color="grey lighten-2" v-if="this.role === 'Admin'" to="/adminhome" >Home</v-btn>
        <v-btn depressed color="grey lighten-2"  v-if="this.role === 'Admin'" to="/viewmenu">Menu List</v-btn>
        <v-btn depressed color="grey lighten-2"  v-if="this.role === 'Admin'" to='/vieworder'>View Order</v-btn>
        <v-btn depressed color="grey lighten-2" v-if="this.role === 'User'" to="/userhome">Home</v-btn>
        <v-btn depressed color="grey lighten-2" @click="logout()">Logout</v-btn>
    </v-app-bar>
</div>
</template>
<script>
export default {
  data () {
    return {
      role: []
    }
  },
  mounted () {
    this.role = localStorage.getItem('pageDetails')
  },
  methods: {
    logout () {
      this.$router.replace({ name: 'login' })
      localStorage.clear()
    }
  }
}
</script>

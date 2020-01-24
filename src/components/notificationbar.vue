<template>
  <div>
    <!-- <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-3">
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Mainpage</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

     <v-app-bar app clipped-left color="grey lighten-2" flat tile>
        <v-app-bar-nav-icon/>
         <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
        <v-toolbar-title>{{ this.role }}</v-toolbar-title>
        <v-spacer/>
        <v-btn depressed color="grey lighten-2" v-if="this.role === 'Admin'">Home</v-btn>
        <v-btn depressed color="grey lighten-2"  v-if="this.role === 'Admin'">View Order</v-btn>
        <v-btn depressed color="grey lighten-2" @click="logout()">Logout</v-btn>
        <!-- <v-menu>
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
              >
                <v-icon>mdi-logout</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                @click="logout()">
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->
</v-app-bar>
</div>
</template>
<script>
export default {
  data () {
    return {
      role: []
      // drawer: null
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

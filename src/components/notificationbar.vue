<template>
  <v-app>
  <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

     <v-app-bar app clipped-left color="grey lighten-4" flat tile>
         <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>{{ this.role }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu>
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                @click="logout()">
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
</v-app-bar>
<v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <AddItems v-if="this.role === 'Admin'" msg="AAYULOGIC CANTEEN MANAGEMENT  </h1>"/>
            <selectMenu v-if="this.role === 'Canteen'"/>
            <selectItems v-if="this.role === 'User'"/>
        </v-row>
      </v-container>
    </v-content>
</v-app>
</template>
<script>
import AddItems from '../components/AddItems.vue'
import selectItems from '../components/SelectItems.vue'
import selectMenu from '../components/selectMenus.vue'
export default {
  data () {
    return {
      role: [],
      drawer: null
    }
  },
  components: {
    AddItems,
    selectMenu,
    selectItems
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

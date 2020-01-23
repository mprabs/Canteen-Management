<template>
  <v-app>
  <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-3">
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
    </v-navigation-drawer>

     <v-app-bar app clipped-left color="grey lighten-2" flat tile>
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
          <v-col cols="12" sm="8" md="4">
            <v-card v-if="this.role === 'Admin'"
            class="elevation-12" height="450px">
                      <v-toolbar flat >
                        <v-toolbar-title>Add New</v-toolbar-title>
                      </v-toolbar>
                      <hr color="grey" >
                      <v-card-text >
                        <NewAdd />
                     </v-card-text>
                  </v-card>
                  </v-col>
                  <v-spacer /><v-col cols="12" sm="8" md="8">
            <v-card v-if="this.role === 'Admin'"
            class="elevation-12" height="auto">
                      <v-toolbar flat >
                        <v-toolbar-title>FoodList</v-toolbar-title>
                      </v-toolbar>
                      <hr color="grey" >
                      <v-card-text >
                        <AddItems />
                     </v-card-text>
                  </v-card>
                  </v-col>
            <selectMenu v-if="this.role === 'Canteen'"/>
            <selectItems v-if="this.role === 'User'"/>
        </v-row>
      </v-container>
    </v-content>
</v-app>
</template>
<script>
import AddItems from '../components/AddItems.vue'
import NewAdd from '../components/newadd.vue'
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
    selectItems,
    NewAdd
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

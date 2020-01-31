<template><div>
  <Navigationbar/>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12" height="450px">
                      <v-toolbar flat >
                        <v-toolbar-title >Add New</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text >
                        <newAdd />
                     </v-card-text>
                  </v-card>
                  </v-col>
                  <v-col cols="12" sm="8" md="8">
                  <v-card class="elevation-12" height="auto">
                        <addItems />
                  </v-card>
                  </v-col>
          </v-row>
      </v-container>
    </v-content>
          </div>
</template>

<script>
import Navigationbar from '../navigationbar.vue'
import addItems from './components/addItems.vue'
import newAdd from './components/newAdd.vue'
export default {
  data () {
    return {
      role: []
    }
  },
  components: {
    Navigationbar,
    addItems,
    newAdd
  },
  mounted () {
    this.role = localStorage.getItem('pageDetails')
    if (localStorage.getItem('userdetails')) {
    } else {
      this.$router.replace({ name: 'login' })
    }
  }
}
</script>

<template>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="12">
            <v-card class="elevation-12" height="450px">
                      <v-toolbar flat >
                        <v-toolbar-title>Add New</v-toolbar-title>
                      </v-toolbar>
                      <hr color="blue" >
                      <v-card-text >
                        <selectMenus />
                     </v-card-text>
                  </v-card>
          </v-col>
          </v-row>
      </v-container>
    </v-content>
</template>

<script>
import selectMenus from './components/selectMenus.vue'
export default {
  data () {
    return {
      role: []
    }
  },
  components: {
    selectMenus
  },
  mounted () {
    this.role = localStorage.getItem('pageDetails')
  }
}
</script>

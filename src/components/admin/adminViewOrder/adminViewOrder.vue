<template>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="12">
            <v-card class="elevation-12" height="auto">
                      <v-toolbar flat >
                        <v-toolbar-title>OrderedItems</v-toolbar-title>
                      </v-toolbar>
                      <hr color="blue" >
                      <v-card-text >
                        <orderedItems />
                     </v-card-text>
                  </v-card>
          </v-col>
          </v-row>
      </v-container>
    </v-content>
</template>

<script>
import orderedItems from './components/orderedItems.vue'
export default {
  data () {
    return {
      role: []
    }
  },
  components: {
    orderedItems
  },
  mounted () {
    this.role = localStorage.getItem('pageDetails')
  }
}
</script>

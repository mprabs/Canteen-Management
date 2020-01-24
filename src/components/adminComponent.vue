<template>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12" height="450px">
                      <v-toolbar flat >
                        <v-toolbar-title>Add New</v-toolbar-title>
                      </v-toolbar>
                      <hr color="blue" >
                      <v-card-text >
                        <newAdd />
                     </v-card-text>
                  </v-card>
                  </v-col>
                  <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12" height="auto">
                      <v-toolbar flat >
                        <v-toolbar-title>FoodList</v-toolbar-title>
                      </v-toolbar>
                      <hr color="blue" >
                      <v-card-text >
                        <addItems />
                     </v-card-text>
                  </v-card>
                  </v-col>
                  <v-spacer /><v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12" height="450px">
                      <v-toolbar flat >
                        <v-toolbar-title>Menu</v-toolbar-title>
                      </v-toolbar>
                      <hr color="blue" >
                      <v-card-text >
                        <!-- <addItems /> -->
                     </v-card-text>
                  </v-card>
                  </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>
import addItems from './AddItems.vue'
import newAdd from './newadd.vue'
export default {
  data () {
    return {
      role: []
    }
  },
  components: {
    addItems,
    newAdd
  },
  mounted () {
    this.role = localStorage.getItem('pageDetails')
  }
}
</script>

<template>
<div>
  <Navigationbar/>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="12">
            <v-card class="elevation-12" height="auto">
                        <orderedItems />
                  </v-card>
          </v-col>
          </v-row>
      </v-container>
    </v-content>
</div>
</template>

<script>
import Navigationbar from '../navigationbar.vue'
import orderedItems from './components/orderedItems.vue'
export default {
  data () {
    return {
      role: []
    }
  },
  components: {
    Navigationbar,
    orderedItems
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

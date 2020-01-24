<template>
  <div id="app">
    <v-app>
    <router-view/>
    <footerbar/>
    </v-app>
  </div>
</template>

<script>
import footerbar from './components/footer.vue'
export default {
  name: 'App',
  components: {
    footerbar
  }
}
</script>

<template>
    <div id="secure">
        <h1>Secure Area</h1>
        <adminfixed msg="abc"/>
    </div>
</template>

<script>
import adminfixed from '../components/adminfixed.vue'
export default {
  name: 'Secure',
  components: {
    adminfixed
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
    #secure {
        margin-top: 1px;
    }
</style>

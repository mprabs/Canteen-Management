<template>
    <div id="secure">
        <h1>Secure Area</h1>
        <AddItems msg="AAYULOGIC CANTEEN MANAGEMENT </h1>"/>
    </div>
</template>

<script>
import AddItems from '../components/AddItems.vue'
export default {
  name: 'Secure',
  components: {
    AddItems
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

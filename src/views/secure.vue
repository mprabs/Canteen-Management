<template>
  <div id="secure">
    <img src="../assets/aayulogic.png" style="width:20%; height:20%; float:left;"><br>
    <h1 style="color: #6486c0;">AAYULOGIC CANTEEN MANAGEMENT</h1>
    <AddItems />
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

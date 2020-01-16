<template>
  <div id="secure">
    <img src="../assets/aayulogic.png" style="width:20%; height:20%; float:left;"><br>
    <h1 style="color: #6486c0;">AAYULOGIC CANTEEN MANAGEMENT</h1>
    <AddItems />
  </div>
</template>

<script>
import AddItems from '../components/AddItems.vue'
import UserService from '../services/user.service.js'

export default {
  name: 'Secure',
  components: {
    AddItems
  },
  data () {
    return {}
  },
  mounted () {
    UserService.getAdminPage().then(
      response => {
        this.content = response.data
      }
    )
  }
}
</script>

<style scoped>
    #secure {
        margin-top: 1px;
    }
</style>

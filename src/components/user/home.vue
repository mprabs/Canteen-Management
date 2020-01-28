<template>
<div>
  <Navigationbar/>
  <selectItems />
</div>
</template>

<script>
import Navigationbar from '../navigationbar.vue'
import selectItems from './components/selectItems.vue'
export default {
  data () {
    return {
      role: []
    }
  },
  components: {
    Navigationbar,
    selectItems
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

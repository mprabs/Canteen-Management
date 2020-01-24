<template>
<div id="homepage">
          <adminHome/>
          <!-- if v-btn to home is pressed -->
          <adminMenu/>
          <!-- if v-btn to menuList is pressed -->
          <adminViewOrder/>
          <!-- if v-btn to vieworder is pressed -->
         </div>
</template>

<script>
import adminHome from './adminHome/adminHome.vue'
import adminMenu from './adminMenu/adminMenu.vue'
import adminViewOrder from './adminViewOrder/adminViewOrder.vue'
export default {
  name: 'homepage',
  components: {
    adminHome,
    adminMenu,
    adminViewOrder
  }
}
</script>

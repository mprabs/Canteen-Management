<template>
<div id="homepage">
          <adminHome/>
          <adminMenu/>
          <adminViewOrder/>
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

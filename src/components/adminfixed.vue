<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>this is a fixed page with side notification panel for admin portal.</p>

        <p>
            This is a secure area
        </p>
  <div id="app">
    <header>
      <h1>Vue.js SPA</h1>
    </header>
         <aside class="sidebar">
      </aside>
     </div>
     <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'adminfixed',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
